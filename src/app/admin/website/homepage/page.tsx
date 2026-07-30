import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function HomepageEditorPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Homepage" section="Website" description="Edit the homepage hero, featured content, and layout." />
    </AdminLayout>
  );
}
