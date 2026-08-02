import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// GET /api/admin/products — List all products with search, filter, pagination
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const search = searchParams.get('search') || '';
    const department = searchParams.get('department');
    const category = searchParams.get('category');
    const published = searchParams.get('published');
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '50', 10)));

    const where: Record<string, unknown> = {};

    if (search) {
      where.name = { contains: search, mode: 'insensitive' };
    }
    if (department) {
      where.department = department;
    }
    if (category) {
      where.category = category;
    }
    if (published !== null && published !== undefined && published !== '') {
      where.isPublished = published === 'true';
    }

    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      db.adminProduct.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      db.adminProduct.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      success: true,
      data: products,
      pagination: { page, limit, total, totalPages },
    });
  } catch (error) {
    console.error('List products error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 },
    );
  }
}

// POST /api/admin/products — Create a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.department || !body.category || body.price === undefined || body.price === null) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: name, department, category, price',
        },
        { status: 400 },
      );
    }

    // Auto-generate slug from name if not provided
    const slug = body.slug || generateSlug(body.name);

    if (!slug) {
      return NextResponse.json(
        { success: false, error: 'Could not generate a valid slug from the product name' },
        { status: 400 },
      );
    }

    const productData: Record<string, unknown> = {
      name: body.name,
      slug,
      department: body.department,
      category: body.category,
      price: parseFloat(body.price),
    };

    // Optional fields
    const optionalFields = [
      'description',
      'subcategory',
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

    for (const field of optionalFields) {
      if (body[field] !== undefined && body[field] !== null) {
        if (field === 'originalPrice' || field === 'price') {
          productData[field] = parseFloat(body[field]);
        } else if (field === 'discountPct' || field === 'colorCount' || field === 'sortOrder') {
          productData[field] = parseInt(body[field], 10);
        } else {
          productData[field] = body[field];
        }
      }
    }

    const product = await db.adminProduct.create({ data: productData });

    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error: unknown) {
    console.error('Create product error:', error);

    // Handle unique constraint violations (slug or sku)
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
      { success: false, error: 'Failed to create product' },
      { status: 500 },
    );
  }
}
