import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function RecentlyPlayedPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Recently Played" section="Tour & Booking" description="Archive of past shows with setlists and performance notes." />
    </AdminLayout>
  );
}
