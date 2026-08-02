import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

type RouteParams = { params: Promise<{ id: string }> };

// GET /api/admin/products/:id — Get single product
export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const product = await db.adminProduct.findUnique({ where: { id } });

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    console.error('Get product error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch product' },
      { status: 500 },
    );
  }
}

// PUT /api/admin/products/:id — Update product (partial update)
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Check product exists
    const existing = await db.adminProduct.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 },
      );
    }

    // Build update data from provided fields only
    const updateData: Record<string, unknown> = {};

    const updatableFields = [
      'name',
      'slug',
      'description',
      'department',
      'category',
      'subcategory',
      'price',
      'originalPrice',
      'onSale',
      'discountPct',
      'sku',
      'sizes',
      'sizeList',
      'colors',
      'colorCount',
      'fabric',
      'material',
      'dimensions',
      'beautySize',
      'images',
      'badges',
      'tags',
      'isPublished',
      'sortOrder',
    ] as const;

    for (const field of updatableFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { success: false, error: 'No fields to update' },
        { status: 400 },
      );
    }

    const product = await db.adminProduct.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({ success: true, data: product });
  } catch (error: unknown) {
    console.error('Update product error:', error);

    // Handle unique constraint violations
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      (error as { code: string }).code === 'P2002'
    ) {
      const prismaError = error as { code: string; meta?: { target?: string[] } };
      const target = prismaError.meta?.target?.[0] || 'field';
      return NextResponse.json(
        { success: false, error: `A product with this ${target} already exists` },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to update product' },
      { status: 500 },
    );
  }
}

// DELETE /api/admin/products/:id — Delete product
export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const existing = await db.adminProduct.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 },
      );
    }

    await db.adminProduct.delete({ where: { id } });

    return NextResponse.json({ success: true, data: { id } });
  } catch (error) {
    console.error('Delete product error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete product' },
      { status: 500 },
    );
  }
}
