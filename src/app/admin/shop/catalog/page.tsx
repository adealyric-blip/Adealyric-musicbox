import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function ShopCatalogPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Shop All" section="Shop" description="Full product catalog management." />
    </AdminLayout>
  );
}
