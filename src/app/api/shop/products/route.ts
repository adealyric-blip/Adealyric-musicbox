import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { requireAuth } from '@/app/api/auth/_helpers';
import { parsePagination, paginatedResponse, successResponse, handleApiError } from '@/app/api/_middleware';

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const { page, limit, skip } = parsePagination(request);
    const url = new URL(request.url);
    const where: Record<string, unknown> = {};
    if (url.searchParams.get('type')) where.type = url.searchParams.get('type');

    const [products, total] = await Promise.all([
      db.product.findMany({ where, skip, take: limit }),
      db.product.count({ where }),
    ]);
    return paginatedResponse(products, total, page, limit);
  } catch (error) { return handleApiError(error); }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    const { name, priceCents, type } = body;

    const product = await db.product.create({
      data: { name, priceCents, type: type ?? 'merch' },
    });
    return successResponse(product, 201);
  } catch (error) { return handleApiError(error); }
}
