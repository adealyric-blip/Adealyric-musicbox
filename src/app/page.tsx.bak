'use client';
import dynamic from 'next/dynamic';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdeaHome = dynamic(() => import('@/components/adea/Landing').then(m => ({ default: m.Landing })), { ssr: false }) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EntryGate = dynamic(() => import('@/components/adea/EntryGate').then(m => ({ default: m.EntryGate })), { ssr: false }) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SiteHeader = dynamic(() => import('@/components/adea/SiteChrome').then(m => ({ default: m.SiteHeader })), { ssr: false }) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SiteFooter = dynamic(() => import('@/components/adea/SiteChrome').then(m => ({ default: m.SiteFooter })), { ssr: false }) as any;
import { useAppStore } from '@/lib/store';

export default function Home() {
  const { entered, setEntered } = useAppStore();
  return (
    <div className="relative w-full bg-ink text-bone">
      {!entered && <EntryGate onEnter={() => setEntered(true)} onLogin={() => setEntered(true)} />}
      {entered && (
        <>
          <SiteHeader />
          <main><AdeaHome /></main>
          <SiteFooter />
        </>
      )}
    </div>
  );
}
