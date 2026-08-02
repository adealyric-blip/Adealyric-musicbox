import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Convert camelCase body keys to snake_case for Supabase */
function toSnake(data: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(data)) {
    const snake = k.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`);
    out[snake] = v;
  }
  return out;
}

/** Convert snake_case row keys to camelCase for the API response */
function toCamel(row: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) {
    const camel = k.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    out[camel] = v;
  }
  return out;
}

// GET /api/admin/products
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const search = searchParams.get('search') || '';
    const department = searchParams.get('department');
    const category = searchParams.get('category');
    const published = searchParams.get('published');
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '50', 10)));
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase.from('admin_products').select('*', { count: 'exact' });

    if (search) query = query.ilike('name', `%${search}%`);
    if (department) query = query.eq('department', department);
    if (category) query = query.eq('category', category);
    if (published !== null && published !== undefined && published !== '') {
      query = query.eq('is_published', published === 'true');
    }

    query = query.order('created_at', { ascending: false }).range(from, to);

    const { data, count, error } = await query;

    if (error) {
      console.error('[admin/products GET]', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    const total = count || 0;
    const camelData = (data || []).map((r) => toCamel(r as Record<string, unknown>));

    return NextResponse.json({
      success: true,
      data: camelData,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error('[admin/products GET]', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
  }
}

// POST /api/admin/products
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.department || !body.category || body.price === undefined || body.price === null) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, department, category, price' },
        { status: 400 },
      );
    }

    const slug = body.slug || generateSlug(body.name);
    if (!slug) {
      return NextResponse.json({ success: false, error: 'Could not generate slug' }, { status: 400 });
    }

    const row: Record<string, unknown> = {
      name: body.name,
      slug,
      department: body.department,
      category: body.category,
      price: parseFloat(body.price),
    };

    // Map optional fields to snake_case for Supabase
    const optionalMap: Record<string, string> = {
      description: 'description',
      subcategory: 'subcategory',
      originalPrice: 'original_price',
      onSale: 'on_sale',
      discountPct: 'discount_pct',
      sku: 'sku',
      sizes: 'sizes',
      sizeList: 'size_list',
      colors: 'colors',
      colorCount: 'color_count',
      fabric: 'fabric',
      material: 'material',
      dimensions: 'dimensions',
      beautySize: 'beauty_size',
      images: 'images',
      badges: 'badges',
      tags: 'tags',
      isPublished: 'is_published',
      sortOrder: 'sort_order',
    };

    for (const [camel, snake] of Object.entries(optionalMap)) {
      if (body[camel] !== undefined && body[camel] !== null) {
        if (['originalPrice', 'price'].includes(camel)) {
          row[snake] = parseFloat(body[camel]);
        } else if (['discountPct', 'colorCount', 'sortOrder'].includes(camel)) {
          row[snake] = parseInt(body[camel], 10);
        } else {
          row[snake] = body[camel];
        }
      }
    }

    const { data, error } = await supabase.from('admin_products').insert(row).select().single();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ success: false, error: 'A product with this slug or SKU already exists' }, { status: 409 });
      }
      console.error('[admin/products POST]', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: toCamel(data as Record<string, unknown>) }, { status: 201 });
  } catch (error) {
    console.error('[admin/products POST]', error);
    return NextResponse.json({ success: false, error: 'Failed to create product' }, { status: 500 });
  }
}
