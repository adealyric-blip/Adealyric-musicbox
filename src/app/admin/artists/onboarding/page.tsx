import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function OnboardingPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Onboarding" section="Artists & CRM" description="Guide new artists through setup: metadata, assets, banking." />
    </AdminLayout>
  );
}
