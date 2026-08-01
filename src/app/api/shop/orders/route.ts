import { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';
import { requireAuth } from '@/app/api/auth/_helpers';
import { parsePagination, paginatedResponse, successResponse, errorResponse, handleApiError } from '@/app/api/_middleware';

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const { page, limit, skip } = parsePagination(request);
    const url = new URL(request.url);

    let query = supabase.from('stripe_payments').select('*', { count: 'exact' });

    const status = url.searchParams.get('status');
    if (status) query = query.eq('status', status);

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

    const retailPrice = product.retail_price || (product.wholesale_price_from * (1 + product.markup_percent));
    const amountCents = Math.round(retailPrice * 100) * (quantity ?? 1);

    // Create stripe payment in Supabase matching user's schema
    const { data: payment, error: insertError } = await supabase
      .from('stripe_payments')
      .insert({
        stripe_payment_id: 'ch_mock_' + Math.random().toString(36).substr(2, 9),
        amount_cents: amountCents,
        currency: 'usd',
        status: 'pending',
      })
      .select()
      .single();

    if (insertError) throw insertError;

    return successResponse(payment, 201);
  } catch (error) { return handleApiError(error); }
}
