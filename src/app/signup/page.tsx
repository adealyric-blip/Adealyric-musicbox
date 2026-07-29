'use client';

import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      {/* Left — Dark panel */}
      <div className="flex flex-1 items-center justify-center bg-ink px-8 py-20 md:px-16">
        <div className="max-w-xl">
          <div className="text-eyebrow text-ash">Join</div>
          <h1 className="mt-6 text-display text-[clamp(3rem,8vw,9rem)] leading-[0.9] text-bone">
            Become part
            <br />
            <span className="italic text-ash">of the sound.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-bone/70">
            Get early access to releases, exclusive merch drops, and behind-the-scenes content.
          </p>
        </div>
      </div>
      {/* Right — White form */}
      <div className="flex flex-1 items-center justify-center bg-white px-8 py-20 md:px-16">
        <div className="w-full max-w-md">
          <div className="text-eyebrow text-ink/40">Create Account</div>
          <h2 className="mt-4 text-display text-3xl text-ink md:text-4xl">
            Sign up
            <br />
            <span className="italic text-ink/50">to continue.</span>
          </h2>
          <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-eyebrow text-ink/40">Full Name</label>
              <input type="text" className="mt-2 w-full border-b border-ink/20 bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="text-eyebrow text-ink/40">Email</label>
              <input type="email" className="mt-2 w-full border-b border-ink/20 bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none" placeholder="you@somewhere.com" />
            </div>
            <div>
              <label className="text-eyebrow text-ink/40">Password</label>
              <input type="password" className="mt-2 w-full border-b border-ink/20 bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none" placeholder="Create a password" />
            </div>
            <button type="submit" className="mt-4 w-full border border-ink bg-ink py-4 text-eyebrow text-bone transition-all hover:bg-ink/80 cursor-pointer">
              Create Account
            </button>
          </form>
          <p className="mt-8 text-center text-sm text-ink/40">
            Already have an account?{' '}
            <Link href="/login" className="underline underline-offset-4 transition-colors hover:text-ink cursor-pointer">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
