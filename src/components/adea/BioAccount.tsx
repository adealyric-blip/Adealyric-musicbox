"use client";

import { PageIntro } from "./SiteChrome";

const BIO_HERO = "/bio/hero/hero.jpg";

export function BioPage() {
  return (
    <>
      {/* DARK HERO with actual hero image */}
      <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-ink md:min-h-[70svh]">
        <img
          src={BIO_HERO}
          alt="Adea Lyric"
          className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/20" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-12 md:pb-24">
          <div className="text-eyebrow text-ash">The Artist</div>
          <h1 className="mt-6 text-display text-[clamp(3.5rem,11vw,12rem)] leading-none text-bone animate-reveal">
            Adea Lyric,
            <span className="block italic text-ash">in her own key.</span>
          </h1>
        </div>
      </section>

      {/* Main Bio Content */}
      <section className="bg-white px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-12 md:items-start">
          <div className="space-y-10 text-lg md:text-xl leading-relaxed text-black/80 md:col-span-7">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left">
              Since stepping into the public spotlight in 2017, Adea has remained true to her
              artistry, refusing to compromise her sound or vision. Hailing from West Philadelphia,
              her musical journey is one of pure independence and relentless focus.
            </p>
            <p>
              She isn&apos;t following trends — she&apos;s <span className="italic text-black font-semibold">defining</span>{" "}
              them. Her music is raw, soulful, unapologetic, and rooted in the culture and community that raised
              her. From local row houses to international stages, she carries the sound of home.
            </p>
            <blockquote className="border-l-4 border-black pl-6 my-8 italic text-display text-2xl md:text-3xl text-black">
              &ldquo;I don&apos;t sing to be heard; I sing to tell the truth. If it isn&apos;t honest, it isn&apos;t soul.&rdquo;
            </blockquote>
            <p className="text-display text-4xl leading-tight text-black md:text-5xl">
              Adea Lyric isn&apos;t chasing a sound.{" "}
              <span className="italic text-black font-semibold">She is the sound of West Philly.</span>
            </p>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Since", "2017"],
                ["Home", "W. Philly"],
                ["Releases", "5+"],
                ["Label", "Indie"]
              ].map(([k, v]) => (
                <div key={k} className="border border-black/10 p-6 bg-neutral-50/50 hover:bg-neutral-50 transition-colors duration-300">
                  <div className="text-eyebrow text-black/50">{k}</div>
                  <div className="mt-2 text-display text-3xl text-black font-bold">{v}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Polish Gallery Section with unique, real news-gallery images */}
      <section className="grid grid-cols-1 gap-1 bg-black/5 md:grid-cols-3">
        {[
          "/news-gallery/gallery/adea-lyric-pose.jpg",
          "/news-gallery/gallery/stage-performance.png",
          "/news-gallery/gallery/club-photo.jpg"
        ].map((src, i) => (
          <div key={i} className="relative aspect-[4/5] overflow-hidden group">
            <img
              src={src}
              alt={`Adea Lyric — Gallery ${i + 1}`}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </section>
    </>
  );
}

export function AccountPage() {
  return (
    <>
      <PageIntro eyebrow="Fan Portal" title="Sign in." />
      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-md">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-eyebrow text-ash">Email</label>
              <input type="email" className="mt-2 w-full border-b border-border bg-transparent py-3 text-bone focus:border-bone focus:outline-none" />
            </div>
            <div>
              <label className="text-eyebrow text-ash">Password</label>
              <input type="password" className="mt-2 w-full border-b border-border bg-transparent py-3 text-bone focus:border-bone focus:outline-none" />
            </div>
            <button className="flex w-full items-center justify-between border border-bone px-6 py-4 text-eyebrow text-bone transition-all hover:bg-bone hover:text-ink cursor-pointer">
              <span>Sign in</span>
              <span>→</span>
            </button>
            <p className="text-center text-sm text-ash">Fan portal coming online soon.</p>
          </form>
        </div>
      </section>
    </>
  );
}
