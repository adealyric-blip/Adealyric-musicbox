/**
 * React Router stub - provides Link, useParams, useNavigate, Navigate
 * for legacy dashboard/portal pages that imported from react-router-dom.
 * These pages are not currently routed but exist as component files.
 * When they are properly routed as Next.js pages, replace these with next/link.
 */
'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useParams as useNextParams, useRouter } from 'next/navigation';

// Re-export next/link as Link
export { Link };

// useParams: Next.js app router params are async, but we provide a sync stub
export function useParams(): Record<string, string> {
  // In Next.js App Router, params are passed as props, not hooks.
  // This stub returns empty for legacy compatibility.
  return {};
}

// useNavigate: maps to next/navigation useRouter().push
export function useNavigate() {
  const router = useRouter();
  return useCallback((to: string | number) => {
    if (typeof to === 'string') {
      router.push(to);
    } else {
      router.back();
    }
  }, [router]);
}

// Navigate component: redirect on mount
export function Navigate({ to }: { to: string }) {
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  import('next/navigation').then(() => {
    router.push(to);
  });
  return null;
}
