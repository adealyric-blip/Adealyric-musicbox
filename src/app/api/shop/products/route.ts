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
    if (type) query = query.eq('type', type.toUpperCase());

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
    const { name, slug, priceCents, type, description, images, inventory } = body;

    // Insert into Supabase products table
    const { data, error } = await supabase
      .from('products')
      .insert({
        slug: slug ?? (name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.random().toString(36).substr(2, 4)),
        name,
        type: (type ?? 'MERCH').toUpperCase(),
        price_cents: priceCents ?? 0,
        description: description ?? '',
        images: images ?? [],
        inventory: inventory ?? 0,
        status: 'PUBLISHED',
      })
      .select()
      .single();

    if (error) throw error;

    return successResponse(data, 201);
  } catch (error) { return handleApiError(error); }
}
