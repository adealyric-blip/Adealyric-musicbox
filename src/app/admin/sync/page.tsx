import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function SyncLicensingPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Sync Licensing" section="Oversight" description="Browse and manage sync listings available for placement." />
    </AdminLayout>
  );
}
