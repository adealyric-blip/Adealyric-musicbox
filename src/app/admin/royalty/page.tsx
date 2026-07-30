import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function RoyaltyPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Royalties" section="Royalty" description="View royalty statements, payment history, and earning reports." />
    </AdminLayout>
  );
}
