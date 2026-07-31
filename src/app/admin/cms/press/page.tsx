import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function PressPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Press Releases" section="CMS" description="Draft and distribute official press releases." />
    </AdminLayout>
  );
}
