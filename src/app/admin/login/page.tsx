'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { Music, Lock, Eye, EyeOff } from 'lucide-react';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login, isAuthenticated, isAdmin } = useAppStore();

  useEffect(() => {
    if (isAuthenticated && isAdmin) router.push('/admin');
  }, [isAuthenticated, isAdmin, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      const success = login(username, password);
      setLoading(false);
      if (success) {
        router.push('/admin');
      } else {
        setError('Invalid credentials.');
      }
    }, 400);
  };

  if (isAuthenticated && isAdmin) return null;

  return (
    <div className="min-h-screen bg-neutral-50 flex">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-neutral-900 flex-col justify-between p-12">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Music size={20} className="text-white" />
            </div>
            <span className="text-lg font-semibold text-white">Adea Lyric</span>
          </div>
        </div>

        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Admin Portal
          </h1>
          <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
            Catalog management, bookings, CRM, distribution oversight,
            and everything behind the sound.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="block h-px w-12 bg-neutral-700" />
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Authorized access only
            </span>
          </div>
        </div>

        <p className="text-xs text-neutral-600">&copy; {new Date().getFullYear()} Adea Lyric. All rights reserved.</p>
      </div>

      {/* Right login form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center">
              <Music size={20} className="text-white" />
            </div>
            <span className="text-lg font-semibold text-neutral-900">Adea Lyric</span>
          </div>

          <div className="flex items-center gap-2 mb-8">
            <Lock size={18} className="text-neutral-400" />
            <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Admin Sign In</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-colors"
                placeholder="Enter your username"
                required
                autoFocus
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-neutral-900 text-white rounded-lg py-2.5 text-sm font-medium hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 disabled:opacity-50 transition-all cursor-pointer"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-neutral-200">
            <a
              href="/"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              &larr; Back to website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
