'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('All fields are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        return;
      }
      router.push('/');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      {/* Left — Dark panel */}
      <div className="flex flex-1 items-center justify-center bg-ink px-8 py-20 md:px-16">
        <div className="max-w-xl">
          <div className="text-eyebrow text-ash">Fan Account</div>
          <h1 className="mt-6 text-display text-[clamp(3rem,8vw,9rem)] leading-[0.9] text-bone">
            Become part
            <br />
            <span className="italic text-ash">of the sound.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-bone/70">
            Join the inner circle. Get early access to releases, exclusive merch drops,
            and behind-the-scenes content from Adea Lyric.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="block h-px w-16 bg-bone/30" />
            <span className="text-eyebrow text-ash">Free to join</span>
          </div>
        </div>
      </div>
      {/* Right — White form */}
      <div className="flex flex-1 items-center justify-center bg-white px-8 py-20 md:px-16">
        <div className="w-full max-w-md">
          <div className="text-eyebrow text-ink/40">Create Fan Account</div>
          <h2 className="mt-4 text-display text-3xl text-ink md:text-4xl">
            Sign up
            <br />
            <span className="italic text-ink/50">for exclusive access.</span>
          </h2>
          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-eyebrow text-ink/40">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border-b border-ink/20 bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-eyebrow text-ink/40">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border-b border-ink/20 bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none"
                placeholder="you@somewhere.com"
                required
              />
            </div>
            <div>
              <label className="text-eyebrow text-ink/40">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full border-b border-ink/20 bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none"
                placeholder="Create a password"
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full border border-ink bg-ink py-4 text-eyebrow text-bone transition-all hover:bg-ink/80 disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Creating Account...' : 'Create Fan Account'}
            </button>
          </form>
          <div className="mt-10 border-t border-ink/10 pt-6 space-y-3">
            <p className="text-sm text-ink/40">
              Already a fan?{' '}
              <Link href="/login" className="underline underline-offset-4 transition-colors hover:text-ink cursor-pointer">Sign in</Link>
            </p>
            <p className="text-xs text-ink/25">
              Looking for the admin dashboard?{' '}
              <Link href="/login" className="underline underline-offset-4 transition-colors hover:text-ink/50 cursor-pointer">Admin sign in →</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
