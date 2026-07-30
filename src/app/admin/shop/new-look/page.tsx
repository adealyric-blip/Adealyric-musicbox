'use client';

import { useState } from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { PageHeader } from '@/components/dashboard/layout/PageHeader';
import { Plus, Upload } from 'lucide-react';

export default function NewLookPage() {
  const [form, setForm] = useState({
    name: '', description: '', type: 'MERCH', price: '', status: 'DRAFT',
  });
  const [saved, setSaved] = useState(false);

  const update = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));
  const handleSave = () => setSaved(true);

  return (
    <AdminLayout>
      <PageHeader title="New Look" description="Add a new item to Get the Look" />
      <div className="max-w-2xl space-y-6">
        <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Name *</label>
              <input type="text" value={form.name} onChange={e => update('name', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="Item name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Type</label>
              <select value={form.type} onChange={e => update('type', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900">
                {['MERCH','VINYL','CD','DIGITAL_BUNDLE','USB'].map(t => <option key={t} value={t}>{t.replace('_',' ')}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Price ($)</label>
              <input type="text" value={form.price} onChange={e => update('price', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="29.99" />
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
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="Describe this look…" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Images</label>
            <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center hover:border-neutral-400 transition-colors">
              <Upload size={24} className="mx-auto text-neutral-400 mb-2" />
              <p className="text-sm text-neutral-500">Click or drag to upload images</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button className="px-5 py-2 text-sm font-medium text-neutral-600 border border-neutral-300 rounded-lg hover:bg-neutral-50 cursor-pointer">Cancel</button>
          <button onClick={handleSave}
            className="px-5 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 flex items-center gap-2 cursor-pointer">
            <Plus size={16} /> Save Item
          </button>
        </div>
        {saved && <p className="text-sm text-green-600 bg-green-50 rounded-lg px-4 py-2">Item saved as draft.</p>}
      </div>
    </AdminLayout>
  );
}
