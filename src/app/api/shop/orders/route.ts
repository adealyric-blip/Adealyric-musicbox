import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { requireAuth } from '@/app/api/auth/_helpers';
import { parsePagination, paginatedResponse, successResponse, errorResponse, handleApiError } from '@/app/api/_middleware';

export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const { page, limit, skip } = parsePagination(request);
    const url = new URL(request.url);
    const where: Record<string, unknown> = {};
    if (url.searchParams.get('status')) where.status = url.searchParams.get('status');

    const [orders, total] = await Promise.all([
      db.order.findMany({ where, skip, take: limit, orderBy: { createdAt: 'desc' } }),
      db.order.count({ where }),
    ]);
    return paginatedResponse(orders, total, page, limit);
  } catch (error) { return handleApiError(error); }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const body = await request.json();
    const { productId, quantity, fanEmail, fanName, shippingAddress } = body;

    const product = await db.product.findUnique({ where: { id: productId } });
    if (!product) return errorResponse('Product not found', 'NOT_FOUND', 404);

    const totalCents = product.priceCents * (quantity ?? 1);
    const order = await db.order.create({
      data: { productId, buyerEmail: fanEmail ?? user.email, amountCents: totalCents, status: 'pending' },
    });
    return successResponse(order, 201);
  } catch (error) { return handleApiError(error); }
}
