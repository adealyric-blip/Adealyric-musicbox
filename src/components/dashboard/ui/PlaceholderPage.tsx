"use client";

import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  section?: string;
  description?: string;
}

export function PlaceholderPage({ title, section, description }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mb-4">
        <Construction size={24} className="text-neutral-400" />
      </div>
      <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
      {section && <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-400">{section}</p>}
      <p className="mt-3 text-sm text-neutral-500 max-w-md">
        {description ?? 'This section is being built. Check back soon.'}
      </p>
    </div>
  );
}
