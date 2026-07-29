import { ShopPage } from '@/components/adea/Shop';
import { SiteHeader, SiteFooter } from '@/components/adea/SiteChrome';

export const metadata = { title: 'Shop — Adea Lyric' };

export default function ShopRoute() {
  return (
    <>
      <SiteHeader />
      <main><ShopPage /></main>
      <SiteFooter />
    </>
  );
}
