import { BookingPage } from '@/components/adea/Booking';
import { SiteHeader, SiteFooter } from '@/components/adea/SiteChrome';

export const metadata = { title: 'Book Adea Lyric' };

export default function BookingRoute() {
  return (
    <>
      <SiteHeader />
      <main><BookingPage /></main>
      <SiteFooter />
    </>
  );
}
