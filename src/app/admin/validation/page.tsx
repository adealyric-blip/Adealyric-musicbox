import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function ValidationPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Validation" section="Oversight" description="Check releases for metadata errors, missing assets, and compliance issues." />
    </AdminLayout>
  );
}
