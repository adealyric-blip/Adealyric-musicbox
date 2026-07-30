import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function CartsPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Carts" section="Shop" description="View active and abandoned shopping carts." />
    </AdminLayout>
  );
}
