import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function SplitConflictsPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Split Conflicts" section="Oversight" description="Review and resolve royalty split discrepancies and disputes." />
    </AdminLayout>
  );
}
