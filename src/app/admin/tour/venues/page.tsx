import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function VenuesPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Venues" section="Tour & Booking" description="Venue database with capacity, contacts, and past show history." />
    </AdminLayout>
  );
}
