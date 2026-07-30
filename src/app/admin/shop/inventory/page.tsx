import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function InventoryPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Inventory" section="Shop" description="Track stock levels, variants, and fulfillment status." />
    </AdminLayout>
  );
}
