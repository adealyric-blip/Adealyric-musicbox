import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function MetadataPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Metadata" section="Discography" description="ISRC codes, UPCs, lyrics, genre tags, and DSP-specific metadata." />
    </AdminLayout>
  );
}
