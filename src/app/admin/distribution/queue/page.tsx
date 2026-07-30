import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function DeliveryQueuePage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Delivery Queue" section="Oversight" description="Track pending, processing, and completed deliveries to DSPs." />
    </AdminLayout>
  );
}
