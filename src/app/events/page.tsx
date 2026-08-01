import { SiteHeader, SiteFooter } from '@/components/adea/SiteChrome';
import { TOUR } from '@/lib/catalog';

export const metadata = { title: 'Tour — Adea Lyric' };

const TOUR_HERO = "/tour/hero/hero.jpg";

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero with tour image */}
        <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-ink md:min-h-[70svh]">
          <img
            src={TOUR_HERO}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-12 md:pb-24 md:pt-56">
            <div className="text-eyebrow text-ash">04 — Tour Dates</div>
            <h1 className="mt-6 text-display text-[clamp(3.5rem,11vw,12rem)] leading-none text-bone">
              Live.
              <span className="block italic text-ash">Unplugged.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-bone/70">
              Catch Adea Lyric on the road. Every show is an experience.
            </p>
          </div>
        </section>
        <section className="bg-white px-6 pb-32 pt-16 md:px-12">
          <div className="mx-auto max-w-[1200px]">
            {TOUR.map((show, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-black/10 py-8 first:pt-0 last:border-b-0"
              >
                <div className="flex items-center gap-8">
                  <div className="w-20 text-eyebrow text-black/40">{show.date}</div>
                  <div>
                    <div className="text-xl font-medium text-black">{show.venue}</div>
                    <div className="text-sm text-black/50 mt-1">{show.city}</div>
                  </div>
                </div>
                <div>
                  {show.status === 'Sold Out' ? (
                    <span className="text-eyebrow text-black/30">SOLD OUT</span>
                  ) : show.status === 'Low' ? (
                    <span className="border border-black/30 px-4 py-2 text-eyebrow text-black/50">FEW LEFT</span>
                  ) : (
                    <button className="border border-black px-6 py-2 text-eyebrow text-black transition-all hover:bg-black hover:text-white cursor-pointer">
                      GET TICKETS
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
