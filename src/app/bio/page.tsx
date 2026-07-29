import { BioPage } from '@/components/adea/BioAccount';
import { SiteHeader, SiteFooter } from '@/components/adea/SiteChrome';

export const metadata = { title: 'Bio — Adea Lyric' };

export default function BioRoute() {
  return (
    <>
      <SiteHeader />
      <main><BioPage /></main>
      <SiteFooter />
    </>
  );
}
