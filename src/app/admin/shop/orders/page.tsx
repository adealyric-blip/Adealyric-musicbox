import { AdminLayout } from '@/components/layout/AdminLayout';
import OrdersPage from '@/components/dashboard/pages/commerce/OrdersPage';

export default function AdminShopOrdersPage() {
  return (
    <AdminLayout>
      <OrdersPage />
    </AdminLayout>
  );
}
