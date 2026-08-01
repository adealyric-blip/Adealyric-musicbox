import PortalProductDetailPage from '@/portal/pages/PortalProductDetailPage';
import { SiteHeader, SiteFooter } from '@/components/adea/SiteChrome';

type PageParams = Promise<{ id: string }>;

export default async function ProductDetailPage({ params }: { params: PageParams }) {
  const { id } = await params;
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white text-neutral-900 px-4 md:px-8 py-12">
        <PortalProductDetailPage productId={id} />
      </main>
      <SiteFooter />
    </>
  );
}
