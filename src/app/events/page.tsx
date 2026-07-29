import { SiteHeader, SiteFooter, PageIntro } from '@/components/adea/SiteChrome';
import { TOUR } from '@/lib/catalog';

export const metadata = { title: 'Tour — Adea Lyric' };

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="04 — TOUR DATES"
          title="Live."
          italic="Unplugged."
          sub="Catch Adea Lyric on the road. Every show is an experience.
"
        />
        <section className="bg-white px-6 pb-32 md:px-12">
          <div className="mx-auto max-w-[1200px]">
            {TOUR.map((show, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-black/10 py-6 first:pt-0 last:border-b-0"
              >
                <div className="flex items-center gap-8">
                  <div className="w-20 text-eyebrow text-black/40">{show.date}</div>
                  <div>
                    <div className="text-lg font-medium text-black">{show.venue}</div>
                    <div className="text-sm text-black/50">{show.city}</div>
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
