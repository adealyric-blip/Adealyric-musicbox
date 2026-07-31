import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function StorefrontSettingsPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Storefront Settings" section="Shop" description="Configure shipping, taxes, payments, and store appearance." />
    </AdminLayout>
  );
}
