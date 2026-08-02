"use client";

const LEFT_IMG = "/home-page/hero/hero.jpg";
const RIGHT_IMG = "/discography/hero/hero.jpg";

export function ShopBanner() {
  return (
    <div className="relative flex min-h-[50svh] items-center overflow-hidden bg-ink md:min-h-[60svh]">
      {/* Left photo */}
      <div className="relative hidden w-[30%] md:block">
        <img
          src={LEFT_IMG}
          alt=""
          className="h-full w-full object-cover grayscale opacity-60"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/80"></div>
      </div>

      {/* Center text */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-16 md:w-[40%]">
        <div className="text-[10px] uppercase tracking-[0.3em] text-bone/50">The Sound of West Philly</div>
        <h2 className="mt-4 text-center text-display text-[clamp(3rem,10vw,9rem)] leading-[0.85] text-bone">
          APPAREL
          <span className="block text-bone/40">SHOP.</span>
        </h2>
        <div className="mt-6 flex items-center gap-4">
          <span className="block h-px w-8 bg-bone/30"></span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-bone/50">Music &middot; Merch &middot; Vinyl</span>
          <span className="block h-px w-8 bg-bone/30"></span>
        </div>
      </div>

      {/* Right photo */}
      <div className="relative hidden w-[30%] md:block">
        <img
          src={RIGHT_IMG}
          alt=""
          className="h-full w-full object-cover grayscale opacity-60"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ink/80"></div>
      </div>

      {/* Mobile bg */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={LEFT_IMG}
          alt=""
          className="h-full w-full object-cover grayscale opacity-30"
          aria-hidden
        />
        <div className="absolute inset-0 bg-ink/70"></div>
      </div>
    </div>
  );
}
