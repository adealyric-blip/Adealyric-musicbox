import { DiscographyPage } from '@/components/adea/MusicDiscography';
import { SiteHeader, SiteFooter } from '@/components/adea/SiteChrome';

export const metadata = { title: 'Discography — Adea Lyric' };

export default function MusicPage() {
  return (
    <>
      <SiteHeader />
      <main><DiscographyPage /></main>
      <SiteFooter />
    </>
  );
}
