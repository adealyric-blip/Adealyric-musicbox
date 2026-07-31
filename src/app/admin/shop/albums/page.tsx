import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function ShopAlbumsPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Albums" section="Shop" description="Manage album products available for purchase." />
    </AdminLayout>
  );
}
