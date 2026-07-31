'use client';

import { useState } from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { PageHeader } from '@/components/dashboard/layout/PageHeader';
import { Plus, Upload, X } from 'lucide-react';

export default function NewReleasePage() {
  const [form, setForm] = useState({
    title: '', type: 'SINGLE', year: new Date().getFullYear().toString(),
    releaseDate: '', description: '', credits: '', status: 'DRAFT',
  });
  const [saved, setSaved] = useState(false);

  const update = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));
  const handleSave = () => setSaved(true);

  return (
    <AdminLayout>
      <PageHeader title="New Release" description="Add a new release to your discography" />
      <div className="max-w-2xl space-y-6">
        <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Title *</label>
              <input type="text" value={form.title} onChange={e => update('title', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="Release title" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Type</label>
              <select value={form.type} onChange={e => update('type', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900">
                {['SINGLE','EP','ALBUM','MIXTAPE'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Release Date</label>
              <input type="date" value={form.releaseDate} onChange={e => update('releaseDate', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Status</label>
              <select value={form.status} onChange={e => update('status', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900">
                {['DRAFT','PUBLISHED','ARCHIVED'].map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Description</label>
            <textarea value={form.description} onChange={e => update('description', e.target.value)} rows={3}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="Album notes, story, press blurb…" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Credits</label>
            <textarea value={form.credits} onChange={e => update('credits', e.target.value)} rows={2}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="Producer, features, engineers…" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Cover Art</label>
            <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center hover:border-neutral-400 transition-colors">
              <Upload size={24} className="mx-auto text-neutral-400 mb-2" />
              <p className="text-sm text-neutral-500">Click or drag to upload cover art</p>
              <p className="text-xs text-neutral-400 mt-1">JPG, PNG up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button onClick={() => setSaved(false)}
            className="px-5 py-2 text-sm font-medium text-neutral-600 border border-neutral-300 rounded-lg hover:bg-neutral-50 cursor-pointer">Cancel</button>
          <button onClick={handleSave}
            className="px-5 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 flex items-center gap-2 cursor-pointer">
            <Plus size={16} /> Save Release
          </button>
        </div>
        {saved && <p className="text-sm text-green-600 bg-green-50 rounded-lg px-4 py-2">Release saved as draft.</p>}
      </div>
    </AdminLayout>
  );
}
