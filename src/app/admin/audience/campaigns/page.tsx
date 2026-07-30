import { AdminLayout } from '@/components/layout/AdminLayout';
import CampaignsPage from '@/components/dashboard/pages/comms/CampaignsPage';

export default function AdminAudienceCampaignsPage() {
  return (
    <AdminLayout>
      <CampaignsPage />
    </AdminLayout>
  );
}
