import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function OversightPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Oversight Dashboard" section="Oversight" description="Cross-tenant visibility: distribution status, errors, and compliance." />
    </AdminLayout>
  );
}
