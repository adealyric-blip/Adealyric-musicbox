import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function NavigationPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Navigation" section="Website" description="Configure menus, links, and site navigation structure." />
    </AdminLayout>
  );
}
