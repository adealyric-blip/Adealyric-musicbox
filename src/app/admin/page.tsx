'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AdminLayout } from '@/components/dashboard/layout/AdminLayout';
import { useAppStore } from '@/lib/store';

export default function AdminPage() {
  const { isAuthenticated, isAdmin, adminRoute, setAdminRoute } = useAppStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      router.push('/login');
    }
  }, [isAuthenticated, isAdmin, router]);

  if (!isAuthenticated || !isAdmin) return null;

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Admin Dashboard</h1>
        <p className="mt-2 text-neutral-500">Welcome to the Adea Lyric admin panel.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-neutral-200 p-5">
            <p className="text-sm font-medium text-neutral-500">Releases</p>
            <p className="mt-2 text-2xl font-semibold text-neutral-900">0</p>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-5">
            <p className="text-sm font-medium text-neutral-500">Bookings</p>
            <p className="mt-2 text-2xl font-semibold text-neutral-900">0</p>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-5">
            <p className="text-sm font-medium text-neutral-500">Contacts</p>
            <p className="mt-2 text-2xl font-semibold text-neutral-900">0</p>
          </div>
          <div className="bg-white rounded-xl border border-neutral-200 p-5">
            <p className="text-sm font-medium text-neutral-500">Revenue</p>
            <p className="mt-2 text-2xl font-semibold text-neutral-900">$0.00</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
