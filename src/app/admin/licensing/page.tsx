import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function LicensingPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Licensing" section="Oversight" description="Manage sync licenses, master use permits, and mechanical licenses." />
    </AdminLayout>
  );
}
