import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function SeoPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="SEO" section="Website" description="Manage meta tags, Open Graph, sitemaps, and search settings." />
    </AdminLayout>
  );
}
