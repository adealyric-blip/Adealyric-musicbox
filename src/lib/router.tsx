"use client";

import NextLink from 'next/link';
import type { ComponentProps } from 'react';
import { useRouter as useNextRouter, usePathname } from 'next/navigation';

/**
 * Link component — React Router-style `to` prop mapped to Next.js `href`.
 * Accepts `to` OR `href`; all other NextLink props pass through.
 */
export function Link({ to, href, ...rest }: { to?: string; href?: string } & Omit<ComponentProps<typeof NextLink>, 'href'>) {
  return <NextLink href={href ?? to ?? ''} {...rest} />;
}

export function useRouter() {
  const router = useNextRouter();
  const pathname = usePathname();

  return {
    path: pathname,
    navigate: (to: string) => router.push(to),
  };
}
