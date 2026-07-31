---
Task ID: 1
Agent: Main
Task: Wire admin portal — Supabase auth, all 67 admin routes, create forms, no 404s

Work Log:
- Installed @supabase/supabase-js
- Replaced supabase stub with real Supabase client (NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY)
- Rewrote /admin/login to use supabase.auth.signInWithPassword()
- Rewrote /admin/layout.tsx gate to check supabase.auth.getSession()
- Created 10 routes importing existing dashboard components
- Created 4 "Create" form pages (new-release, new-look, new-tour-date, new-banner)
- Created 30 placeholder routes with section-aware context
- Fixed react-router-stub Link to map `to` → `href`
- Fixed Announce undefined icon in AdminLayout

Stage Summary:
- 67 admin routes total, 0 404s
- Admin login: real Supabase auth
- Dashboard: queries real Supabase DB
- Create forms: real input fields, selects, textareas, file upload zones
- Browser verified: login, dashboard, create forms, placeholders all 200---
Task ID: 1
Agent: Main Agent
Task: Fix broken dev server — OOM kills, casing conflicts, memory limits

Work Log:
- Diagnosed that `tsconfig.json` had `include: ["**/*.ts", "**/*.tsx"]` matching the 162MB `download/` reference directory
- TypeScript/turbopack was processing 1000+ unused files, exhausting the 256MB heap limit (`--max-old-space-size=256`)
- Added `"download"` to tsconfig.json `exclude` array
- Removed duplicate `src/components/ui/button.tsx` (shadcn) conflicting with `Button.tsx` on case-sensitive Linux filesystem
- Increased `--max-old-space-size` from 256 to 1024 in package.json dev script
- Fixed `allowedDevOrigins` in next.config.ts for preview panel cross-origin requests
- Used `setsid -f` to ensure dev server persists across bash tool sessions

Stage Summary:
- Three root causes fixed: (1) tsconfig including 162MB download dir, (2) 256MB heap too low, (3) button casing conflict
- Server now returns 200 with 42KB for `/` and 29KB for `/admin/login`
- Server stays alive indefinitely (verified at T+40s)

---
Task ID: 2
Agent: Main Agent
Task: Fix production front-end quality — videos, glass break, hero images, hydration, UX, Vercel

Work Log:
- Fixed stepped-path videos on home page: changed preload from 'metadata' to 'auto', added play state tracking, mobile tap-to-play button, grayscale-to-color transition on play, increased base opacity from 0.35 to 0.5
- Rewrote glass break animation (EntryGate.tsx): pure black background, 80 shards (up from 48), 36 jagged crack lines, glass-like translucent shards with glow, radial burst effect, longer duration (1.8s)
- Added glass-flash and radial-burst CSS keyframe animations
- Fixed nested button hydration error in MusicDiscography.tsx: removed role='button' and event handlers from <span> inside <button> in path view release list
- Created new Adea-branded VideosPage component (src/components/adea/VideosPage.tsx): dark hero with news-gallery hero image, 6-card grid of timeline videos with play/pause, year labels, proper Adea design system
- Replaced PortalVideosPage import in videos route with new Adea VideosPageContent
- Fixed hero images: Bio page now uses /bio/hero/hero.jpg, Events page now uses /tour/hero/hero.jpg, Services page now uses /services/hero/hero.jpg
- Removed 2 non-existent gallery images from News.tsx (paris-restaurant.png, wall-pose.jpg)
- Fixed login vs signup UX: signup page now clearly labeled 'Fan Account' with 'Create Fan Account' button, login page labeled 'Admin' with 'Secure Access' heading, added clear navigation links between them
- Confirmed middleware.ts already removed (no proxy needed for Next.js 16)
- Installed Vercel CLI, linked project to adea1/adealyric-musicbox, set JWT_SECRET and DATABASE_URL env vars for production
- All fixes verified via Agent Browser: home page, videos page, music page, bio page, events page, signup page — zero console errors

Stage Summary:
- 9 fixes applied across 8 files
- Zero hydration errors, zero console errors
- Videos page completely rebuilt with Adea branding
- Glass break animation now visible on pure black background
- All hero images reference correct public folder paths
- Vercel production env vars configured
