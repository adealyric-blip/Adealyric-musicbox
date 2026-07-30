import { AdminLayout } from '@/components/layout/AdminLayout';
import { PlaceholderPage } from '@/components/dashboard/ui/PlaceholderPage';

export default function AiAssistantPage() {
  return (
    <AdminLayout>
      <PlaceholderPage title="AI Assistant" section="AI & API" description="AI-powered tools for metadata, copywriting, and workflow automation." />
    </AdminLayout>
  );
}
