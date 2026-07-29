"use client";

import { SiteHeader, SiteFooter, PageIntro } from "./SiteChrome";

const NEWS_HERO = "/news-gallery/hero/hero.jpg";

const GALLERY_IMAGES = [
  "/news-gallery/gallery/adea-lyric-pose.jpg",
  "/news-gallery/gallery/charger-pose.jpg",
  "/news-gallery/gallery/gallery-14.png",
  "/news-gallery/gallery/gallery-photo-1.jpg",
  "/news-gallery/gallery/stage-performance.png",
  "/news-gallery/gallery/club-photo.jpg",
  "/news-gallery/gallery/gala.png",
  "/news-gallery/gallery/gallery-13.png",
  "/news-gallery/gallery/gallery-15.png",
  "/news-gallery/gallery/gallery-4.jpg",
  "/news-gallery/gallery/gallery-7.jpg",
  "/news-gallery/gallery/gallery-8.jpg",
  "/news-gallery/gallery/gallery-9.jpg",
  "/news-gallery/gallery/gallery-11.jpg",
  "/news-gallery/gallery/gallery-12.jpg",
  "/news-gallery/gallery/in-car.jpg",
  "/news-gallery/gallery/paris-restaurant.png",
  "/news-gallery/gallery/wall-pose.jpg",
];

export function NewsPage() {
  return (
    <>
      {/* ===== SECTION 1 — Hero with background image ===== */}
      <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-ink md:min-h-[70svh]">
        <img
          src={NEWS_HERO}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-12 md:pb-24 md:pt-56">
          <div className="text-eyebrow text-ash">Latest — News</div>
          <h1 className="mt-6 text-display text-[clamp(3.5rem,11vw,12rem)] leading-none text-bone">
            Behind the
            <span className="block italic text-ash">Scenes</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone/70">
            Studio sessions, live performances, and moments from the journey.
          </p>
        </div>
      </section>

      {/* ===== SECTION 2 — Gallery Grid ===== */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-eyebrow mb-4 text-black">Gallery</div>
          <h2 className="text-display text-4xl text-black md:text-6xl">
            Captured <span className="italic text-black">moments.</span>
          </h2>
          <p className="mt-4 max-w-lg text-base text-black">A collection of studio sessions, performances, and behind-the-scenes glimpses.</p>
        </div>
      </section>

      <section className="bg-white px-6 pb-32 md:px-12">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {GALLERY_IMAGES.map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden border border-black/10">
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
