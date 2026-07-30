'use client';

import { useState } from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { PageHeader } from '@/components/dashboard/layout/PageHeader';
import { Plus, MapPin } from 'lucide-react';

export default function NewTourDatePage() {
  const [form, setForm] = useState({
    eventName: '', venueName: '', venueCity: '', eventDate: '',
    doorsTime: '', showTime: '', ticketUrl: '', notes: '', status: 'CONFIRMED',
  });
  const [saved, setSaved] = useState(false);

  const update = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));
  const handleSave = () => setSaved(true);

  return (
    <AdminLayout>
      <PageHeader title="New Tour Date" description="Add an upcoming show to the tour calendar" />
      <div className="max-w-2xl space-y-6">
        <div className="bg-white rounded-xl border border-neutral-200 p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Event Name *</label>
            <input type="text" value={form.eventName} onChange={e => update('eventName', e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="e.g. West Philly Block Party" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Venue</label>
              <input type="text" value={form.venueName} onChange={e => update('venueName', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="Venue name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">City</label>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input type="text" value={form.venueCity} onChange={e => update('venueCity', e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 pl-9 pr-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="Philadelphia, PA" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Date *</label>
              <input type="date" value={form.eventDate} onChange={e => update('eventDate', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Doors</label>
              <input type="time" value={form.doorsTime} onChange={e => update('doorsTime', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Show Time</label>
              <input type="time" value={form.showTime} onChange={e => update('showTime', e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Ticket URL</label>
            <input type="url" value={form.ticketUrl} onChange={e => update('ticketUrl', e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="https://..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Notes</label>
            <textarea value={form.notes} onChange={e => update('notes', e.target.value)} rows={2}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900" placeholder="Any additional details…" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Status</label>
            <select value={form.status} onChange={e => update('status', e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900">
              {['CONFIRMED','PENDING','CANCELLED'].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button className="px-5 py-2 text-sm font-medium text-neutral-600 border border-neutral-300 rounded-lg hover:bg-neutral-50 cursor-pointer">Cancel</button>
          <button onClick={handleSave}
            className="px-5 py-2 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 flex items-center gap-2 cursor-pointer">
            <Plus size={16} /> Add Tour Date
          </button>
        </div>
        {saved && <p className="text-sm text-green-600 bg-green-50 rounded-lg px-4 py-2">Tour date added.</p>}
      </div>
    </AdminLayout>
  );
}
