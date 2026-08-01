import { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';
import { requireAuth } from '@/app/api/auth/_helpers';
import { parsePagination, paginatedResponse, successResponse, errorResponse, handleApiError } from '@/app/api/_middleware';

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const { page, limit, skip } = parsePagination(request);
    const url = new URL(request.url);

    let query = supabase.from('orders').select('*', { count: 'exact' });

    const status = url.searchParams.get('status');
    if (status) query = query.eq('status', status.toUpperCase());

    const { data: orders, count, error } = await query
      .range(skip, skip + limit - 1)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return paginatedResponse(orders || [], count || 0, page, limit);
  } catch (error) { return handleApiError(error); }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    const { productId, quantity, fanEmail, fanName, shippingAddress } = body;

    // Get product from Supabase to compute price
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('*')
      .eq('id', productId)
      .maybeSingle();

    if (productError) throw productError;
    if (!product) return errorResponse('Product not found', 'NOT_FOUND', 404);

    const totalCents = product.price_cents * (quantity ?? 1);

    // Create order in Supabase
    const orderNumber = 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    const { data: order, error: insertError } = await supabase
      .from('orders')
      .insert({
        order_number: orderNumber,
        buyer_email: fanEmail ?? user.email,
        buyer_name: fanName ?? user.displayName,
        shipping_address: shippingAddress ?? {},
        amount_total_cents: totalCents,
        status: 'PENDING',
      })
      .select()
      .single();

    if (insertError) throw insertError;

    // Create order items
    await supabase.from('order_items').insert({
      order_id: order.id,
      product_id: productId,
      quantity: quantity ?? 1,
      price_cents: product.price_cents,
    });

    return successResponse(order, 201);
  } catch (error) { return handleApiError(error); }
}
