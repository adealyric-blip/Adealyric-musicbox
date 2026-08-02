import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

type RouteParams = { params: Promise<{ id: string }> };

// PATCH /api/admin/products/:id/publish — Toggle isPublished
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

    const existing = await db.adminProduct.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 },
      );
    }

    const product = await db.adminProduct.update({
      where: { id },
      data: { isPublished: body.published },
    });

    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    console.error('Publish product error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update publish status' },
      { status: 500 },
    );
  }
}
