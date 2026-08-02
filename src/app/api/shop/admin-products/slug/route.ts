import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET /api/shop/admin-products/slug?slug=xxx
export async function GET(req: NextRequest) {
  try {
    const slug = req.nextUrl.searchParams.get('slug');
    if (!slug) {
      return NextResponse.json({ success: false, error: 'Missing slug' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('admin_products')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error || !data) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    const row = data as Record<string, unknown>;
    const mapped = {
      id: `admin-${row.id}`,
      name: row.name,
      slug: row.slug,
      department: row.department,
      category: row.category,
      subcategory: row.subcategory || undefined,
      sku: row.sku || undefined,
      sizes: row.sizes || undefined,
      sizeList: typeof row.size_list === 'string' ? JSON.parse(row.size_list) : (row.size_list || undefined),
      colorCount: row.color_count || undefined,
      fabric: row.fabric || undefined,
      price: Number(row.price),
      originalPrice: row.original_price ? Number(row.original_price) : undefined,
      badges: typeof row.badges === 'string' ? JSON.parse(row.badges) : (row.badges || []),
      tags: typeof row.tags === 'string' ? JSON.parse(row.tags) : (row.tags || undefined),
      material: row.material || undefined,
      dimensions: row.dimensions || undefined,
      beautySize: row.beauty_size || undefined,
      images: typeof row.images === 'string' ? JSON.parse(row.images) : (row.images || []),
      colors: typeof row.colors === 'string' ? JSON.parse(row.colors) : (row.colors || []),
      description: row.description || undefined,
      isAdminProduct: true,
    };

    return NextResponse.json({ success: true, data: mapped });
  } catch (error) {
    console.error('[shop/admin-products/slug]', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch product' }, { status: 500 });
  }
}
