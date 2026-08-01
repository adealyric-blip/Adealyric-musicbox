import { ShopDetailRouter } from '@/components/adea/Shop';
import { SiteHeader, SiteFooter } from '@/components/adea/SiteChrome';

type PageParams = Promise<{ id: string }>;

export default async function ShopDetailPage({ params }: { params: PageParams }) {
  const { id } = await params;
  return (
    <>
      <SiteHeader />
      <main><ShopDetailRouter slug={id} /></main>
      <SiteFooter />
    </>
  );
}