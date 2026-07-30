import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function ApiSettingsPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="API Settings" section="AI & API" description="Manage API keys, webhooks, and third-party integrations." />
    </AdminLayout>
  );
}
