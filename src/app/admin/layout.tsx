'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAppStore } from '@/lib/store';

export default function AdminGateLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, isAdmin } = useAppStore();
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Give Zustand a tick to hydrate from any persisted state
    const timer = setTimeout(() => setChecked(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!checked) return;
    if (pathname === '/admin/login') return;
    if (!isAuthenticated || !isAdmin) {
      router.push('/admin/login');
    }
  }, [checked, isAuthenticated, isAdmin, router, pathname]);

  if (pathname === '/admin/login') return <>{children}</>;

  if (!checked || !isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-neutral-400">
          <div className="w-5 h-5 border-2 border-neutral-200 border-t-neutral-400 rounded-full animate-spin" />
          <span className="text-sm">Verifying access…</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
