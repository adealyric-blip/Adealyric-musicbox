import { ServicesPage } from '@/components/adea/Services';
import { SiteHeader, SiteFooter } from '@/components/adea/SiteChrome';

export const metadata = { title: 'Services — Adea Lyric' };

export default function ServicesRoute() {
  return (
    <>
      <SiteHeader />
      <main><ServicesPage /></main>
      <SiteFooter />
    </>
  );
}
