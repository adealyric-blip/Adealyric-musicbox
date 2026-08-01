"use client";

import { SiteHeader, SiteFooter, PageIntro } from "./SiteChrome";

const NEWS_HERO = "/news-gallery/hero/hero.jpg";

export type NewsArticle = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
};

const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "tour-2026",
    title: "Adea Lyric Announces Fall Tour MMXVI: The Sound of West Philly Live",
    date: "July 24, 2026",
    readTime: "3 min read",
    excerpt: "Following the ground-breaking release of her latest singles, Adea Lyric is taking her raw, soulful sound on the road. The tour kicks off this October at the legendary Fillmore, bringing the unmistakable spirit of West Philadelphia to halls across the country.",
    image: "/news-gallery/gallery/stage-performance.png",
  },
  {
    id: "behind-fkboi",
    title: "Refusing Compromise: Inside the Studio for the Recording of 'F**K Boi'",
    date: "May 12, 2026",
    readTime: "5 min read",
    excerpt: "An exclusive look behind the scenes of the recording session for 'F**K Boi'. From early voice memos on 52nd Street to the final vocal layers, explore how Adea Lyric crafted her most confrontational, unapologetic single yet.",
    image: "/news-gallery/gallery/adea-lyric-pose.jpg",
  },
  {
    id: "rising-star-feature",
    title: "West Philadelphia's Own: A Feature with Overbrook's Rising Soul Star",
    date: "March 3, 2026",
    readTime: "4 min read",
    excerpt: "In a deep-dive interview, Adea Lyric discusses her roots, the mixtape that defined a block, and why she refuses to chase industry trends. 'I don't sing to be heard; I sing to tell the truth. If it isn't honest, it isn't soul.'",
    image: "/news-gallery/gallery/club-photo.jpg",
  },
  {
    id: "style-look",
    title: "Exclusive: The Creative Style and Aesthetic of 'Get The Look'",
    date: "January 15, 2026",
    readTime: "2 min read",
    excerpt: "A look into the collaboration behind Adea Lyric's stage outfits and street style. Learn about the custom pieces, vintage finds, and local Philly designers shaping her distinct raw aesthetic.",
    image: "/news-gallery/gallery/gala.png",
  },
];

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
          <div className="text-eyebrow text-ash">Latest — News & Features</div>
          <h1 className="mt-6 text-display text-[clamp(3.5rem,11vw,12rem)] leading-none text-bone animate-reveal">
            News &
            <span className="block italic text-ash">Gallery</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone/70">
            Official announcements, in-depth features, studio journals, and exclusive stories direct from West Philadelphia.
          </p>
        </div>
      </section>

      {/* ===== SECTION 2 — Editorial Articles Feed ===== */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-eyebrow mb-4 text-black">Editorial</div>
          <h2 className="text-display text-4xl text-black md:text-6xl">
            The latest <span className="italic text-black">stories.</span>
          </h2>
          <p className="mt-4 max-w-lg text-base text-black">Deep dives into the creative journey, record releases, and tour dates.</p>

          <div className="mt-16 space-y-20">
            {NEWS_ARTICLES.map((article, i) => {
              const isEven = i % 2 === 0;
              return (
                <article
                  key={article.id}
                  className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16 items-center border-t border-black/10 pt-16 first:border-t-0 first:pt-0"
                >
                  {/* Article Image Container */}
                  <div className={`md:col-span-5 ${isEven ? "md:order-1" : "md:order-2"}`}>
                    <div className="relative aspect-[16/10] overflow-hidden border border-black/10 bg-neutral-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Article Content Container */}
                  <div className={`md:col-span-7 ${isEven ? "md:order-2" : "md:order-1"}`}>
                    <div className="flex items-center gap-4 text-xs font-semibold text-black/50">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-display text-2xl md:text-4xl text-black mt-4 leading-tight">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-black/75 leading-relaxed max-w-2xl">
                      {article.excerpt}
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                      <span className="block h-px w-10 bg-black" />
                      <button className="text-eyebrow text-black uppercase tracking-wider font-semibold hover:opacity-70 cursor-pointer">
                        Read Full Article
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 — Captured Moments (Photo Gallery) ===== */}
      <section className="bg-neutral-50 px-6 py-20 border-t border-black/10 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-eyebrow mb-4 text-black">Captured Moments</div>
          <h2 className="text-display text-4xl text-black md:text-6xl">
            Visual <span className="italic text-black font-semibold">archives.</span>
          </h2>
          <p className="mt-4 max-w-lg text-base text-black">Studio sessions, tour rehearsals, and behind-the-scenes glimpses in photo.</p>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {GALLERY_IMAGES.map((src, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden border border-black/10 bg-neutral-100">
                <img
                  src={src}
                  alt={`Adea Lyric Moment ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
