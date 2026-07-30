import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function DistributionPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Distribution" section="Oversight" description="Manage DSP deliveries, takedowns, and catalog status." />
    </AdminLayout>
  );
}
