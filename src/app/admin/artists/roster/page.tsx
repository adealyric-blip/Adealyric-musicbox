import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function ArtistRosterPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Artist Roster" section="Artists & CRM" description="Manage signed artists, solo acts, and collaborators." />
    </AdminLayout>
  );
}
