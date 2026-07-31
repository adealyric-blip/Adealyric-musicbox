import { AdminLayout } from '@/components/layout/AdminLayout';
import DashboardPage from '@/components/dashboard/pages/DashboardPage';

export default function AdminDashboardRoute() {
  return (
    <AdminLayout>
      <DashboardPage />
    </AdminLayout>
  );
}
