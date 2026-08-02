import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/shop/admin-products/slug?slug=xxx — Returns a single published admin product by slug
export async function GET(req: NextRequest) {
  try {
    const slug = req.nextUrl.searchParams.get('slug');
    if (!slug) {
      return NextResponse.json(
        { success: false, error: 'Missing slug parameter' },
        { status: 400 }
      );
    }

    const product = await db.adminProduct.findUnique({
      where: { slug },
    });

    if (!product || !product.isPublished) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    const mapped = {
      id: `admin-${product.id}`,
      name: product.name,
      slug: product.slug,
      department: product.department,
      category: product.category,
      subcategory: product.subcategory || undefined,
      sku: product.sku || undefined,
      sizes: product.sizes || undefined,
      sizeList: product.sizeList ? JSON.parse(product.sizeList) : undefined,
      colorCount: product.colorCount || undefined,
      fabric: product.fabric || undefined,
      price: product.price,
      originalPrice: product.originalPrice || undefined,
      badges: product.badges ? JSON.parse(product.badges) : [],
      tags: product.tags ? JSON.parse(product.tags) : undefined,
      material: product.material || undefined,
      dimensions: product.dimensions || undefined,
      beautySize: product.beautySize || undefined,
      images: product.images ? JSON.parse(product.images) : [],
      colors: product.colors ? JSON.parse(product.colors) : [],
      description: product.description || undefined,
      isAdminProduct: true,
    };

    return NextResponse.json({ success: true, data: mapped });
  } catch (error) {
    console.error('[api/shop/admin-products/slug]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
