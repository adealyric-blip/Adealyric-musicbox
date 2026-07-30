import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function ContractsPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Contracts" section="Artists & CRM" description="Track contract status, terms, and renewal dates." />
    </AdminLayout>
  );
}
