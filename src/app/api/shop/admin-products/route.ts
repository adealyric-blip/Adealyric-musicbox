import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET /api/shop/admin-products — Returns all published admin-managed products
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('admin_products')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[shop/admin-products]', error);
      return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
    }

    const mapped = (data || []).map((p) => {
      const row = p as Record<string, unknown>;
      return {
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
        sortOrder: Number(row.sort_order || 0),
        isAdminProduct: true,
      };
    });

    return NextResponse.json({ success: true, data: mapped });
  } catch (error) {
    console.error('[shop/admin-products]', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
  }
}
