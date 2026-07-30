import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function GetTheLookPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Get the Look" section="Shop" description="Manage Adea's style and merchandise lookbook." />
    </AdminLayout>
  );
}
