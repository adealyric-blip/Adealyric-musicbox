import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function RevenuePage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Revenue" section="Royalty" description="Analyze revenue streams by source, territory, and time period." />
    </AdminLayout>
  );
}
