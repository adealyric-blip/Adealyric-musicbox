import { NewsPage } from '@/components/adea/News';
import { SiteHeader, SiteFooter } from '@/components/adea/SiteChrome';

export const metadata = { title: 'News & Gallery — Adea Lyric' };

export default function NewsRoute() {
  return (
    <>
      <SiteHeader />
      <main><NewsPage /></main>
      <SiteFooter />
    </>
  );
}
