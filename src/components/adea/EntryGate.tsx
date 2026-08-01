"use client";

import { useEffect, useState } from "react";

type Props = { onEnter: () => void; onLogin: () => void };

function rand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

// Increased shards to 80 for a more profound, dramatic glass break
const SHARDS = Array.from({ length: 80 }, (_, i) => {
  const angle = (i / 80) * Math.PI * 2;
  const dist = Math.round((40 + rand(i * 6) * 100) * 100) / 100; // further dispersion distance
  return {
    id: i,
    cx: Math.round((50 + Math.cos(angle) * (5 + rand(i * 6 + 1) * 15)) * 100) / 100,
    cy: Math.round((50 + Math.sin(angle) * (5 + rand(i * 6 + 2) * 15)) * 100) / 100,
    tx: Math.round(Math.cos(angle) * dist * 100) / 100,
    rot: Math.round((rand(i * 6 + 3) - 0.5) * 1080 * 100) / 100, // higher rotation speeds
    size: Math.round((12 + rand(i * 6 + 4) * 35) * 10) / 10, // slightly larger shards for visibility
    delay: Math.round(rand(i * 6 + 5) * 0.12 * 1000) / 1000,
  };
});

const DROPS = Array.from({ length: 90 }, (_, i) => ({
  left: Math.round(rand(i * 5) * 10000) / 100,
  duration: Math.round((0.6 + rand(i * 5 + 1) * 1.2) * 1000) / 1000,
  delay: Math.round(rand(i * 5 + 2) * 2000) / 1000,
  height: Math.round((40 + rand(i * 5 + 3) * 90) * 10) / 10,
  opacity: Math.round((0.15 + rand(i * 5 + 4) * 0.5) * 1000) / 1000,
}));

export function EntryGate({ onEnter, onLogin }: Props) {
  const [shattering, setShattering] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const trigger = () => {
    if (shattering) return;
    setShattering(true);
    // Increased delay for a more profound and dramatic shatter sequence
    setTimeout(() => setGone(true), 1600);
    setTimeout(() => onEnter(), 1800);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") trigger();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (gone) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-black text-bone">
      {/* Background image */}
      <img
        src="/splash-gate/splash-gate.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
        aria-hidden="true"
      />
      {/* Dark overlay for text readability, fades out during shatter */}
      <div className={`absolute inset-0 bg-black/75 transition-opacity duration-500 ${shattering ? "opacity-0" : "opacity-100"}`} />

      {/* Rain layer */}
      <div className="pointer-events-none absolute inset-0">
        {DROPS.map((d, i) => (
          <span
            key={i}
            className="absolute top-0 block w-px animate-rain bg-gradient-to-b from-transparent via-bone/40 to-transparent"
            style={{
              left: `${d.left}%`,
              height: `${d.height}px`,
              animationDuration: `${d.duration}s`,
              animationDelay: `${d.delay}s`,
              opacity: d.opacity,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center transition-all duration-700 ${shattering ? "scale-110 opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="text-eyebrow text-ash/60 animate-flicker">Est. West Philadelphia — MMXVII</div>

        {/* ADEA text */}
        <h1 className="text-display mt-8 text-center text-[clamp(3.5rem,14vw,16rem)] leading-none">
          <span className="block italic">Adea</span>
          <span className="-mt-4 block font-display font-black tracking-tighter text-yellow-400">LYRIC</span>
        </h1>

        <div className="text-eyebrow mt-6 text-ash/50">Soul · Raw · Unapologetic</div>

        {/* Buttons row */}
        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={trigger}
            className="group relative flex h-11 w-28 items-center justify-center border border-bone/40 text-eyebrow text-bone/90 transition-all duration-300 hover:border-bone/80 hover:text-bone cursor-pointer"
            aria-label="Enter site"
          >
            <span className="tracking-[0.3em]">ENTER</span>
          </button>
          <button
            onClick={onLogin}
            className="group relative flex h-11 w-28 items-center justify-center border border-bone/40 text-eyebrow text-bone/90 transition-all duration-300 hover:border-bone/80 hover:text-bone cursor-pointer"
            aria-label="Login"
          >
            <span className="tracking-[0.3em]">LOGIN</span>
          </button>
        </div>
      </div>

      {/* Shatter overlay */}
      {shattering && (
        <div className="pointer-events-none absolute inset-0 z-20">
          {/* Jagged crack lines */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <radialGradient id="crack" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            {/* Increased cracks to 36 for extra drama */}
            {Array.from({ length: 36 }, (_, i) => {
              const a = (i / 36) * Math.PI * 2;
              const x2 = 50 + Math.cos(a) * 90;
              const y2 = 50 + Math.sin(a) * 90;
              const mx = 50 + Math.cos(a) * 25 + (rand(i * 2 + 100) - 0.5) * 8;
              const my = 50 + Math.sin(a) * 25 + (rand(i * 2 + 101) - 0.5) * 8;
              return (
                <path
                  key={i}
                  d={`M50 50 L${mx} ${my} L${x2} ${y2}`}
                  stroke="rgba(255,255,255,0.85)"
                  strokeWidth="0.12"
                  fill="none"
                  style={{ animation: `reveal-mask 0.5s ${i * 0.006}s both` }}
                />
              );
            })}
          </svg>

          {/* Falling glass shards with subtle glow */}
          {SHARDS.map((s) => (
            <span
              key={s.id}
              className="absolute block animate-shard bg-white/90 border border-white/20 backdrop-blur-[1px]"
              style={{
                left: `${s.cx}%`,
                top: `${s.cy}%`,
                width: `${s.size}px`,
                height: `${s.size * 1.6}px`,
                clipPath: "polygon(15% 0%, 100% 25%, 85% 100%, 0% 75%)",
                ["--tx" as string]: `${s.tx}vw`,
                ["--rot" as string]: `${s.rot}deg`,
                animationDelay: `${s.delay}s`,
                boxShadow: "0 0 15px rgba(255,255,255,0.5)",
              }}
            />
          ))}

          {/* Pure white flash and radial burst background */}
          <div
            className="absolute inset-0 bg-white"
            style={{ animation: "glass-flash 0.35s ease-out forwards" }}
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)]"
            style={{ animation: "radial-burst 0.8s ease-out forwards" }}
          />
        </div>
      )}

      <div className="grain-overlay" />
    </div>
  );
}
