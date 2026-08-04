---
name: add-demo-zone
description: Add a new /demo/<slug> demo app under kat-solutions.net using Vercel multi-zone. Use whenever the user wants to host another separate app (its own repo/DB) at a /demo/... path on the Kat site, or asks to repeat the "like /demo/vsa" setup. Covers preparing the child app (Next.js basePath, Prisma-on-Vercel, framework preset, webhook) and wiring it into Kat.
---

# Add a `/demo/<slug>` zone to kat-solutions.net

The Kat site (this repo, `quanganh2302/kat-solutions` on GitHub) is the **parent zone**. Each
demo is a **separate Next.js app** deployed as its **own Vercel project**, proxied in at
`/demo/<slug>` via `rewrites()` in `next.config.ts`. Pushing to the child app's repo
auto-updates its demo; Kat is untouched after the one-time wiring.

Reference implementation already live: **`/demo/vsa`** → `lth-hethong.vercel.app` (repo
`freelace1/lth_hethong` on GitLab, branch `qa`, DB Neon Postgres).

## How the proxy works (already set up in this repo)

`next.config.ts` has `DEMO_ZONES = ["vsa", ...]`. For each slug it proxies `/demo/<slug>` and
`/demo/<slug>/:path*` to the origin in env `<SLUG>_DEMO_ORIGIN` (slug uppercased). A zone with
no origin env set is silently skipped.

## Part A — Prepare the child app (its own repo)

The child app MUST serve itself under basePath `/demo/<slug>`, or assets/links/API break when
proxied. Apply these to the child project:

1. **basePath** — `next.config.*`:
   ```js
   basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
   ```
   and set env `NEXT_PUBLIC_BASE_PATH=/demo/<slug>` (Vercel + local `.env`).
2. **Client API calls** — any axios/fetch baseURL must include the basePath, e.g.
   `baseURL: process.env.NEXT_PUBLIC_API_URL ?? process.env.NEXT_PUBLIC_BASE_PATH ?? ""`.
   Absolute `/api/...` fetches do NOT get basePath automatically.
3. **Middleware redirects** — build redirects from `request.nextUrl.clone()` (basePath-aware),
   NOT `new URL("/x", request.url)` (drops basePath). `nextUrl.pathname` excludes basePath, so
   path comparisons stay unchanged.
4. **If it uses Prisma** — add `"postinstall": "prisma generate"` to package.json, or Vercel
   build fails with `PrismaClientInitializationError` (cached deps → stale client).
   Use a serverless-friendly DB (Neon pooled `DATABASE_URL` + direct `DIRECT_URL` for migrate).
   Run migrations from local (`prisma migrate deploy`) — they don't run on Vercel.

## Part B — Deploy the child as its own Vercel project

1. Vercel → Add New → Project → import the child repo.
2. **Framework Preset = Next.js** (Vercel sometimes defaults to "Other" → build fails with
   "No Output Directory named public"). Fix under Settings → Build and Deployment if wrong.
3. Add env vars (paste values WITHOUT surrounding quotes): DB URLs, secrets, and
   `NEXT_PUBLIC_BASE_PATH=/demo/<slug>`.
4. Set the intended **Production Branch** (Settings → Environments → Production → Branch Tracking).
5. **Webhook check (GitLab repos):** Repo → Settings → Webhooks → the Vercel hook → Push events
   must be **All branches**, not an empty "Wildcard pattern" (empty pattern = never fires, so
   pushes never auto-deploy). GitHub repos via the Vercel app don't have this issue.
6. Deploy. Confirm `https://<child>.vercel.app/demo/<slug>` renders (root `/` returns 404 by
   design because of basePath — that's expected).

## Part C — Wire it into Kat (this repo)

1. Add the slug to `DEMO_ZONES` in `next.config.ts`.
2. Kat Vercel project → Settings → Environment Variables → add
   `<SLUG>_DEMO_ORIGIN = https://<child>.vercel.app` (not Sensitive; Production + Preview).
3. Commit + push this repo's `next.config.ts` to `main` (auto-deploys Kat), OR redeploy Kat so
   the new env takes effect.
4. Verify `https://www.kat-solutions.net/demo/<slug>` serves the child app.

## Working with Vercel (this account)

There is no Vercel MCP — drive the dashboard via the browser tools (claude-in-chrome),
which already has the user's Vercel session logged in.

- **Team / account:** `anhdoanquang98gmailcoms-projects` (Hobby plan), login
  anh.doanquang98@gmail.com. Existing projects include `lth-hethong` (VSA) and `kat-solutions`.
- **URL patterns** (`<team>` = `anhdoanquang98gmailcoms-projects`):
  - Deployments list: `https://vercel.com/<team>/<project>/deployments`
  - A deployment (build logs): open a row → **Deployment** tab → **Deploy Logs** panel
  - Env vars: `.../<project>/settings/environment-variables`
  - Framework preset / build: `.../<project>/settings/build-and-deployment`
  - Production branch: `.../<project>/settings/environments` → **Production** → Branch Tracking
  - Git connection / webhook status: `.../<project>/settings/git`
- **Add an env var:** Env vars page → **Add Environment Variable** → Key + Value
  (paste WITHOUT surrounding quotes) → turn **Sensitive OFF** for non-secret config (e.g. a
  public URL) so it stays viewable/editable → Environments = **Production and Preview** → Save.
  A toast offers **Redeploy** — env changes only take effect after a redeploy.
- **Redeploy correctly:** the generic "Redeploy" reuses the *current production* deployment's
  source (often the wrong branch). To rebuild a specific branch/commit, open THAT deployment
  from the Deployments list and Redeploy from its page, or push a new commit to its branch.
- **Reading a failed build:** open the errored deployment → the red "Build Failed" box shows the
  top-line reason; the **Deploy Logs** panel is virtualized, so use its **Find in logs** search
  box (e.g. search `rror`) to jump to the real error instead of scrolling.
- **Deployments list filter:** the Status filter defaults to hiding "Canceled" (shows 6/7);
  enable all 7 if a deployment seems missing. Also check All Branches / All Environments.
- **First import quirk:** the initial import build runs directly (not via the git webhook), so a
  broken webhook still produces one deployment — don't assume auto-deploy works until a *push*
  produces a new deployment.

## Gotchas cheat-sheet
- Root `/` of both domains → 404 for the child app. Always link `/demo/<slug>`.
- Vercel env values: never include surrounding `"`.
- After adding/removing an env var, a **redeploy** is required for it to take effect.
- Adding a zone touches Kat once; after that, updates come from pushing the child repo.
