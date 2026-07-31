import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function BlogPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Blog / News" section="CMS" description="Write and publish blog posts, news updates, and announcements." />
    </AdminLayout>
  );
}
