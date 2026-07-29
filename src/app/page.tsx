'use client';

import dynamic from 'next/dynamic';
import { RouterProvider } from '@/lib/router';
import { PortalAuthProvider, ProAuthProvider } from '@/lib/auth';
import { QueryProvider } from '@/lib/query-provider';
import { Toaster } from '@/components/ui/toaster';

// Lazy-load the massive SpaClient to keep initial bundle small
const SpaClient = dynamic(() => import('./SpaClient'), { ssr: false });

export default function HomePage() {
  return (
    <QueryProvider>
      <RouterProvider>
        <PortalAuthProvider>
          <ProAuthProvider>
            <SpaClient />
            <Toaster />
          </ProAuthProvider>
        </PortalAuthProvider>
      </RouterProvider>
    </QueryProvider>
  );
}
