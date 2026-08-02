import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/shop/admin-products — Returns all published admin-managed products
// These merge into the shop page alongside the static 754-product catalog
export async function GET() {
  try {
    const products = await db.adminProduct.findMany({
      where: { isPublished: true },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });

    // Transform to ShopCatalogProduct-compatible shape for the shop frontend
    const mapped = products.map((p) => ({
      id: `admin-${p.id}`,
      name: p.name,
      slug: p.slug,
      department: p.department as 'Women' | 'Unisex' | 'Accessories' | 'Beauty' | 'Bags',
      category: p.category,
      subcategory: p.subcategory || undefined,
      sku: p.sku || undefined,
      sizes: p.sizes || undefined,
      sizeList: p.sizeList ? JSON.parse(p.sizeList) : undefined,
      colorCount: p.colorCount || undefined,
      fabric: p.fabric || undefined,
      price: p.price,
      originalPrice: p.originalPrice || undefined,
      badges: p.badges ? JSON.parse(p.badges) : [],
      tags: p.tags ? JSON.parse(p.tags) : undefined,
      material: p.material || undefined,
      dimensions: p.dimensions || undefined,
      beautySize: p.beautySize || undefined,
      images: p.images ? JSON.parse(p.images) : [],
      sortOrder: p.sortOrder,
      isAdminProduct: true, // flag to identify admin-managed products
    }));

    return NextResponse.json({ success: true, data: mapped });
  } catch (error) {
    console.error('[api/shop/admin-products]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
