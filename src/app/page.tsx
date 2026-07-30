'use client';
import { useRouter } from 'next/navigation';
import { EntryGate } from '@/components/adea/EntryGate';
import { Landing } from '@/components/adea/Landing';
import { SiteHeader, SiteFooter } from '@/components/adea/SiteChrome';
import { useAppStore } from '@/lib/store';

export default function Home() {
  const { entered, setEntered } = useAppStore();
  const router = useRouter();
  return (
    <div className="relative w-full bg-ink text-bone">
      {!entered && <EntryGate onEnter={() => setEntered(true)} onLogin={() => { setEntered(true); router.push('/login'); }} />}
      {entered && (
        <>
          <SiteHeader />
          <main><Landing /></main>
          <SiteFooter />
        </>
      )}
    </div>
  );
}
