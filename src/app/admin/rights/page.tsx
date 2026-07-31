import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function RightsPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Rights Management" section="Oversight" description="Track ownership, master rights, and publishing rights across the catalog." />
    </AdminLayout>
  );
}
