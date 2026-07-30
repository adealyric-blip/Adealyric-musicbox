import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function MetricoolPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Metricool" section="Marketing & Social" description="Social media management and scheduling via Metricool integration." />
    </AdminLayout>
  );
}
