/**
 * React Router stub - provides Link, useParams, useNavigate, Navigate
 * for legacy dashboard/portal pages that imported from react-router-dom.
 * These pages are not currently routed but exist as component files.
 * When they are properly routed as Next.js pages, replace these with next/link.
 */
'use client';

import { forwardRef, useCallback } from 'react';
import NextLink from 'next/link';
import { useParams as useNextParams, useRouter } from 'next/navigation';

// Link wrapper that maps `to` -> `href` for legacy compatibility
export const Link = forwardRef<HTMLAnchorElement, React.ComponentProps<typeof NextLink> & { to?: string }>(
  function StubLink({ to, href, ...rest }, ref) {
    return <NextLink ref={ref} href={href ?? to ?? ''} {...rest} />;
  }
);
Link.displayName = 'Link';

// useParams: Next.js app router params are async, but we provide a sync stub
export function useParams(): Record<string, string> {
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
