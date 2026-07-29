'use client';
import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  title?: string;
  artist?: string;
  className?: string;
}

export function AudioPlayer({ src, title, artist, className = '' }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`flex items-center gap-3 bg-neutral-50 rounded-lg px-4 py-3 ${className}`}>
      <button
        onClick={() => setPlaying(!playing)}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
      >
        {playing ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
      </button>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-900 truncate">{title || 'Track'}</p>
        {artist && <p className="text-xs text-neutral-500 truncate">{artist}</p>}
      </div>
      <div className="w-24 h-1 bg-neutral-200 rounded-full">
        <div className="w-0 h-full bg-neutral-900 rounded-full" />
      </div>
    </div>
  );
}
