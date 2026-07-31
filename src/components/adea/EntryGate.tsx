"use client";

import { useEffect, useState, useCallback } from "react";

type Props = { onEnter: () => void; onLogin: () => void };

function rand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const SHARDS = Array.from({ length: 80 }, (_, i) => {
  const angle = (i / 80) * Math.PI * 2;
  const dist = Math.round((30 + rand(i * 6) * 80) * 100) / 100;
  return {
    id: i,
    cx: Math.round((50 + Math.cos(angle) * (8 + rand(i * 6 + 1) * 10)) * 100) / 100,
    cy: Math.round((50 + Math.sin(angle) * (8 + rand(i * 6 + 2) * 10)) * 100) / 100,
    tx: Math.round(Math.cos(angle) * dist * 100) / 100,
    rot: Math.round((rand(i * 6 + 3) - 0.5) * 1080 * 100) / 100,
    size: Math.round((6 + rand(i * 6 + 4) * 30) * 10) / 10,
    delay: Math.round(rand(i * 6 + 5) * 0.2 * 1000) / 1000,
  };
});

const CRACK_LINES = Array.from({ length: 36 }, (_, i) => {
  const a = (i / 36) * Math.PI * 2;
  const len = 30 + rand(i * 3) * 50;
  const x2 = 50 + Math.cos(a) * len;
  const y2 = 50 + Math.sin(a) * len;
  const segments = 2 + Math.floor(rand(i * 3 + 10) * 3);
  let d = `M50 50`;
  for (let s = 1; s <= segments; s++) {
    const t = s / segments;
    const mx = 50 + Math.cos(a) * len * t + (rand(i * 3 + s * 7) - 0.5) * 10;
    const my = 50 + Math.sin(a) * len * t + (rand(i * 3 + s * 7 + 1) - 0.5) * 10;
    d += ` L${mx.toFixed(1)} ${my.toFixed(1)}`;
  }
  return { d, delay: rand(i * 3 + 20) * 0.15, width: 0.04 + rand(i * 3 + 30) * 0.12 };
});

export function EntryGate({ onEnter, onLogin }: Props) {
  const [shattering, setShattering] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const trigger = useCallback(() => {
    if (shattering) return;
    setShattering(true);
    setTimeout(() => setGone(true), 1800);
    setTimeout(() => onEnter(), 2000);
  }, [shattering, onEnter]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") trigger();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [trigger]);

  if (gone) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-black">
      {/* Splash gate image - subtle, dark */}
      <img
        src="/splash-gate/splash-gate.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
        aria-hidden="true"
      />

      {/* Center content */}
      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center transition-all duration-700 ${shattering ? "scale-125 opacity-0" : "opacity-100"}`}
      >
        <div className="text-eyebrow text-ash/50 animate-flicker">Est. West Philadelphia — MMXVII</div>

        {/* ADEA text */}
        <h1 className="text-display mt-8 text-center text-[clamp(3.5rem,14vw,16rem)] leading-none text-white">
          <span className="block italic">Adea</span>
          <span className="-mt-4 block font-display font-black tracking-tighter text-yellow-400">LYRIC</span>
        </h1>

        <div className="text-eyebrow mt-6 text-ash/40">Soul · Raw · Unapologetic</div>

        {/* Buttons row */}
        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={trigger}
            className="group relative flex h-11 w-28 items-center justify-center border border-white/30 text-eyebrow text-white/80 transition-all duration-300 hover:border-white hover:text-white cursor-pointer"
            aria-label="Enter site"
          >
            <span className="tracking-[0.3em]">ENTER</span>
          </button>
          <button
            onClick={onLogin}
            className="group relative flex h-11 w-28 items-center justify-center border border-white/30 text-eyebrow text-white/80 transition-all duration-300 hover:border-white hover:text-white cursor-pointer"
            aria-label="Login"
          >
            <span className="tracking-[0.3em]">LOGIN</span>
          </button>
        </div>

        {/* Subtle prompt */}
        <div className="mt-16 text-eyebrow text-white/20">Press ENTER or click to shatter the glass</div>
      </div>

      {/* Shatter overlay - visible on black background */}
      {shattering && (
        <div className="pointer-events-none absolute inset-0 z-20">
          {/* Crack lines - white on black */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <radialGradient id="crack-glow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="40%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            {/* Center glow */}
            <circle cx="50" cy="50" r="8" fill="url(#crack-glow)" className="animate-[pulse_0.3s_ease-out]" />
            {CRACK_LINES.map((crack, i) => (
              <path
                key={i}
                d={crack.d}
                stroke={`rgba(255,255,255,${0.5 + rand(i) * 0.5})`}
                strokeWidth={crack.width}
                fill="none"
                strokeLinecap="round"
                style={{
                  animation: `reveal-mask 0.5s ${crack.delay}s cubic-bezier(0.2, 0, 0.2, 1) both`,
                }}
              />
            ))}
          </svg>

          {/* Glass shards flying outward */}
          {SHARDS.map((s) => (
            <span
              key={s.id}
              className="absolute block animate-shard"
              style={{
                left: `${s.cx}%`,
                top: `${s.cy}%`,
                width: `${s.size}px`,
                height: `${s.size * 1.8}px`,
                clipPath: "polygon(15% 0%, 100% 25%, 85% 100%, 0% 75%)",
                background: `linear-gradient(135deg, rgba(255,255,255,${0.15 + rand(s.id * 2) * 0.3}), rgba(200,220,255,${0.1 + rand(s.id * 2 + 1) * 0.2}))`,
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(1px)",
                ["--tx" as string]: `${s.tx}vw`,
                ["--rot" as string]: `${s.rot}deg`,
                animationDelay: `${s.delay}s`,
                boxShadow: `0 0 ${4 + rand(s.id * 3) * 12}px rgba(255,255,255,${0.1 + rand(s.id * 3 + 1) * 0.3})`,
              }}
            />
          ))}

          {/* White flash that fades */}
          <div
            className="absolute inset-0 bg-white"
            style={{ animation: "glass-flash 0.6s ease-out forwards" }}
          />

          {/* Secondary radial burst */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)",
              animation: "radial-burst 0.8s ease-out forwards",
            }}
          />
        </div>
      )}

      <div className="grain-overlay" />
    </div>
  );
}
