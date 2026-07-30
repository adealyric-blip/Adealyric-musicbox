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
