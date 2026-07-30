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
- Browser verified: login, dashboard, create forms, placeholders all 200