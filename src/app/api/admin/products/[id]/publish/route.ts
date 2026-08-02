import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

type RouteParams = { params: Promise<{ id: string }> };

function toCamel(row: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) {
    const camel = k.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    out[camel] = v;
  }
  return out;
}

// PATCH /api/admin/products/:id/publish
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (typeof body.published !== 'boolean') {
      return NextResponse.json(
        { success: false, error: 'Missing or invalid "published" boolean field' },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from('admin_products')
      .update({ is_published: body.published })
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: toCamel(data as Record<string, unknown>) });
  } catch (error) {
    console.error('[admin/products/:id/publish]', error);
    return NextResponse.json({ success: false, error: 'Failed to update publish status' }, { status: 500 });
  }
}
