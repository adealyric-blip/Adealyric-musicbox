import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

type RouteParams = { params: Promise<{ id: string }> };

/** Convert snake_case row to camelCase */
function toCamel(row: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) {
    const camel = k.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    out[camel] = v;
  }
  return out;
}

// GET /api/admin/products/:id
export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { data, error } = await supabase.from('admin_products').select('*').eq('id', id).single();

    if (error || !data) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: toCamel(data as Record<string, unknown>) });
  } catch (error) {
    console.error('[admin/products/:id GET]', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch product' }, { status: 500 });
  }
}

// PUT /api/admin/products/:id
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Check exists
    const { data: existing, error: findErr } = await supabase.from('admin_products').select('id').eq('id', id).single();
    if (findErr || !existing) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    // Map camelCase body keys to snake_case
    const row: Record<string, unknown> = {};
    const keyMap: Record<string, string> = {
      name: 'name', slug: 'slug', description: 'description',
      department: 'department', category: 'category', subcategory: 'subcategory',
      price: 'price', originalPrice: 'original_price', onSale: 'on_sale', discountPct: 'discount_pct',
      sku: 'sku', sizes: 'sizes', sizeList: 'size_list', colors: 'colors', colorCount: 'color_count',
      fabric: 'fabric', material: 'material', dimensions: 'dimensions', beautySize: 'beauty_size',
      images: 'images', badges: 'badges', tags: 'tags', isPublished: 'is_published', sortOrder: 'sort_order',
    };

    for (const [camel, snake] of Object.entries(keyMap)) {
      if (body[camel] !== undefined) {
        if (['originalPrice', 'price'].includes(camel)) {
          row[snake] = parseFloat(body[camel]);
        } else if (['discountPct', 'colorCount', 'sortOrder'].includes(camel)) {
          row[snake] = parseInt(body[camel], 10);
        } else {
          row[snake] = body[camel];
        }
      }
    }

    if (Object.keys(row).length === 0) {
      return NextResponse.json({ success: false, error: 'No fields to update' }, { status: 400 });
    }

    const { data, error } = await supabase.from('admin_products').update(row).eq('id', id).select().single();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ success: false, error: 'A product with this slug or SKU already exists' }, { status: 409 });
      }
      console.error('[admin/products/:id PUT]', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: toCamel(data as Record<string, unknown>) });
  } catch (error) {
    console.error('[admin/products/:id PUT]', error);
    return NextResponse.json({ success: false, error: 'Failed to update product' }, { status: 500 });
  }
}

// DELETE /api/admin/products/:id
export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { error } = await supabase.from('admin_products').delete().eq('id', id);

    if (error) {
      console.error('[admin/products/:id DELETE]', error);
      return NextResponse.json({ success: false, error: 'Failed to delete product' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: { id } });
  } catch (error) {
    console.error('[admin/products/:id DELETE]', error);
    return NextResponse.json({ success: false, error: 'Failed to delete product' }, { status: 500 });
  }
}
