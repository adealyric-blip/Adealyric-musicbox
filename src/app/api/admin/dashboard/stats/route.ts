import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const today = new Date().toISOString().slice(0, 10);

    const [
      bookingsCount,
      contactsCount,
      releasesCount,
      paidOrders,
      upcomingBookings,
      recentInquiries,
      recentOrders,
    ] = await Promise.all([
      db.booking.count(),
      db.crmContact.count(),
      db.release.count(),
      db.order.findMany({ where: { status: 'paid' }, select: { amountTotalCents: true } }),
      db.booking.findMany({
        where: { eventDate: { gte: new Date(today) } },
        orderBy: { eventDate: 'asc' },
        take: 5,
      }),
      db.bookingInquiry.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
      db.order.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
    ]);

    const revenue = paidOrders.reduce((sum, o) => sum + o.amountTotalCents, 0);

    return NextResponse.json({
      stats: {
        bookings: bookingsCount,
        revenue,
        contacts: contactsCount,
        releases: releasesCount,
      },
      upcomingBookings: upcomingBookings.map((b) => ({
        id: b.id,
        eventName: b.eventName,
        venueName: b.venueName,
        eventDate: b.eventDate ? b.eventDate.toISOString().slice(0, 10) : null,
        status: b.status,
      })),
      recentInquiries: recentInquiries.map((i) => ({
        id: i.id,
        contactName: i.contactName,
        eventName: i.eventName,
        status: i.status,
        createdAt: i.createdAt.toISOString(),
      })),
      recentOrders: recentOrders.map((o) => ({
        id: o.id,
        amountTotalCents: o.amountTotalCents,
        status: o.status,
        createdAt: o.createdAt.toISOString(),
      })),
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json({
      stats: { bookings: 0, revenue: 0, contacts: 0, releases: 0 },
      upcomingBookings: [],
      recentInquiries: [],
      recentOrders: [],
    });
  }
}
