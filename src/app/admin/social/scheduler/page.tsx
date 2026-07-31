import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function PostSchedulerPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="Post Scheduler" section="Marketing & Social" description="Schedule and queue posts across platforms." />
    </AdminLayout>
  );
}
