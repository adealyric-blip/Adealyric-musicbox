import { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';
import { requireAuth } from '@/app/api/auth/_helpers';
import { parsePagination, paginatedResponse, successResponse, handleApiError } from '@/app/api/_middleware';

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const { page, limit, skip } = parsePagination(request);
    const url = new URL(request.url);

    // Fetch from Supabase products table
    let query = supabase.from('products').select('*', { count: 'exact' });

    // Optional filters matching user's Supabase schema
    const type = url.searchParams.get('type');
    if (type) query = query.eq('product_type', type);

    const { data: products, count, error } = await query
      .range(skip, skip + limit - 1)
      .order('created_at', { ascending: true });

    if (error) throw error;

    return paginatedResponse(products || [], count || 0, page, limit);
  } catch (error) { return handleApiError(error); }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    const { name, priceCents, type, description } = body;

    // Insert into Supabase products table
    const { data, error } = await supabase
      .from('products')
      .insert({
        name,
        wholesale_price_from: priceCents ? priceCents / 100 : 0, // matches Supabase pricing decimal field
        product_type: type ?? '_apparel',
        description: description ?? '',
        status: 'published',
        is_published: true,
      })
      .select()
      .single();

    if (error) throw error;

    return successResponse(data, 201);
  } catch (error) { return handleApiError(error); }
}
