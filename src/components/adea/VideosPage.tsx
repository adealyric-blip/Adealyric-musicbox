"use client";

import { useEffect, useRef, useState } from "react";
import { SiteHeader, SiteFooter } from "./SiteChrome";

const TIMELINE_VIDEOS = [
  { year: "2017", title: "Debut", note: "West Philly emerges.", video: "/home-page/stepped-path/timeline-2017.mp4" },
  { year: "2019", title: "Underground", note: "Building the culture.", video: "/home-page/stepped-path/timeline-2019.mp4" },
  { year: "2021", title: "West Philly", note: "The mixtape that defined a block.", video: "/home-page/stepped-path/timeline-2021.mp4" },
  { year: "2023", title: "The Lyric EP", note: "Refusing every trend.", video: "/home-page/stepped-path/timeline-2023.mp4" },
  { year: "2025", title: "F**K Boi", note: "Unapologetic. Undeniable.", video: "/home-page/stepped-path/timeline-2025.mp4" },
  { year: "2026", title: "New Era", note: "The next chapter begins.", video: "/home-page/stepped-path/timeline-2026.mp4" },
];

const VIDEOS_HERO = "/news-gallery/hero/hero.jpg";

function VideoCard({ item, index }: { item: (typeof TIMELINE_VIDEOS)[0]; index: number }) {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const gradeOpacity = 0.55 + (index / (TIMELINE_VIDEOS.length - 1)) * 0.45;

  const togglePlay = () => {
    if (!vidRef.current) return;
    if (playing) {
      vidRef.current.pause();
      setPlaying(false);
    } else {
      vidRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div className="group relative aspect-[4/5] w-full overflow-hidden border border-border">
      <video
        ref={vidRef}
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover transition-all duration-700"
        style={{ opacity: gradeOpacity, filter: `grayscale(${playing ? 0 : 1}) contrast(${1 + index * 0.04})` }}
        onClick={togglePlay}
      >
        <source src={item.video} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 bg-gradient-to-tr from-ink via-ink/30 to-transparent transition-opacity duration-500 ${playing ? "opacity-0" : "opacity-100"}`} />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-6 md:p-8 z-10">
        <div className="text-eyebrow text-ash">{item.year}</div>
        <h3 className="mt-2 text-display text-3xl text-bone md:text-5xl">{item.title}</h3>
        <p className="mt-2 text-sm text-bone/70 md:text-base">{item.note}</p>
      </div>
      {/* Play overlay */}
      {!playing && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
          aria-label={`Play ${item.title} video`}
        >
          <span className="grid h-16 w-16 place-items-center border border-bone/60 bg-ink/50 text-bone backdrop-blur-sm transition-all hover:scale-110 hover:bg-bone hover:text-ink md:h-20 md:w-20">
            <svg viewBox="0 0 24 24" className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
      {playing && (
        <button
          onClick={togglePlay}
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center border border-bone/40 bg-ink/60 text-bone backdrop-blur-sm transition-all hover:bg-bone hover:text-ink cursor-pointer"
          aria-label="Pause video"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function VideosPageContent() {
  return (
    <>
      <SiteHeader />

      {/* Dark Hero */}
      <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-ink md:min-h-[70svh]">
        <img
          src={VIDEOS_HERO}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-12 md:pb-24 md:pt-56">
          <div className="text-eyebrow text-ash">Visual Archive</div>
          <h1 className="mt-6 text-display text-[clamp(3.5rem,11vw,12rem)] leading-none text-bone">
            A stepped path
            <span className="block italic text-ash">of progression.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone/70">
            Every era, captured in motion. From West Philly basements to the world stage.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="relative z-10 bg-ink px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-eyebrow mb-4 text-ash">Timeline</div>
          <h2 className="text-display text-4xl text-bone md:text-6xl">
            Press play.<span className="italic text-ash"> Watch the rise.</span>
          </h2>
          <p className="mt-4 max-w-lg text-base text-bone/50">
            Hover or tap any video to bring it to life. The full journey from 2017 to now.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {TIMELINE_VIDEOS.map((v, i) => (
              <VideoCard key={v.year} item={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
