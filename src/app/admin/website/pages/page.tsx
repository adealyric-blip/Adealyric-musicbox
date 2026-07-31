import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function WebsitePagesPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Pages" section="Website" description="Create and manage static pages (About, Press Kit, etc.)." />
    </AdminLayout>
  );
}
