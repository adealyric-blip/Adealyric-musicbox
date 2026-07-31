'use client';

import { useState } from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { PageHeader } from '@/components/dashboard/layout/PageHeader';
import { Plus, Upload } from 'lucide-react';

export default function NewBannerPage() {
  const [form, setForm] = useState({
    title: '', subtitle: '', linkUrl: '', position: 'top', status: 'DRAFT',
  });
  const [saved, setSaved] = useState(false);

  const update = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));
  const handleSave = () => setSaved(true);

  return (
    <AdminLayout>
      <PageHeader title="New Banner" description="Create an announcement or banner" />
      <div className="max-w-2xl space-y-6">
        <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Title *</label>
            <input type="text" value={form.title} onChange={e => update('title', e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="Banner headline" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Subtitle</label>
            <input type="text" value={form.subtitle} onChange={e => update('subtitle', e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="Supporting text" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Link URL</label>
              <input type="url" value={form.linkUrl} onChange={e => update('linkUrl', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="https://..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Position</label>
              <select value={form.position} onChange={e => update('position', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900">
                {['top','middle','bottom','hero'].map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Banner Image</label>
            <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center hover:border-neutral-400 transition-colors">
              <Upload size={24} className="mx-auto text-neutral-400 mb-2" />
              <p className="text-sm text-neutral-500">Click or drag to upload banner image</p>
              <p className="text-xs text-neutral-400 mt-1">Recommended: 1920 x 600px</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button className="px-5 py-2 text-sm font-medium text-neutral-600 border border-neutral-300 rounded-lg hover:bg-neutral-50 cursor-pointer">Cancel</button>
          <button onClick={handleSave}
            className="px-5 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 flex items-center gap-2 cursor-pointer">
            <Plus size={16} /> Save Banner
          </button>
        </div>
        {saved && <p className="text-sm text-green-600 bg-green-50 rounded-lg px-4 py-2">Banner saved as draft.</p>}
      </div>
    </AdminLayout>
  );
}
