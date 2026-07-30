import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function CreditsPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Credits & Splits" section="Discography" description="Manage songwriter credits, publishing splits, and royalty allocations." />
    </AdminLayout>
  );
}
