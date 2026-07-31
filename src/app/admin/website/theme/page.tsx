import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function ThemePage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Theme & Layout" section="Website" description="Customize colors, typography, and visual identity." />
    </AdminLayout>
  );
}
