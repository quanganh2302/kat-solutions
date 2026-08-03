# AGENTS.md — Kat Solutions

Website giới thiệu B2B của Kat Solutions: các giải pháp phần mềm cho doanh nghiệp và nhà máy, gồm ERP/CRM, nền tảng Web, AI & automation, và Computer Vision.

## Source of truth

- Product scope: `docs/product.md`
- Architecture and deferred decisions: `docs/architecture.md`
- Figma mapping and responsive rules: `docs/design.md`
- Delivery phases: `docs/roadmap.md`
- Project-specific workflow: `.agents/skills/kat-solutions-nextjs/SKILL.md`

Read the relevant document before changing a page, product copy, architecture, or a Figma-derived component. Update the matching document when a durable decision changes.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS
- Source files live in `src/`.
- Deploy on Vercel.
- Vietnamese is the default locale; English is available through static locale routes. Keep translations in typed content/data modules where possible.

## Commands

| Task | Command |
| --- | --- |
| Run locally | `npm run dev` |
| Lint | `npm run lint` |
| Production build and type check | `npm run build` |
| Install locked dependencies | `npm ci` |

Run the narrowest relevant command during development. Run `npm run lint` and `npm run build` before handoff when dependencies or app code changed.

## Routes

- `/` — Homepage
- `/projects` — Dự án & năng lực
- `/about` — Về Kat Solutions
- `/contact` — Contact form UI only; do not send or store submissions yet.
- `/vi/...` and `/en/...` — Static Vietnamese and English variants of each public page.

## Working rules

- Use Server Components by default. Add `"use client"` only for browser APIs or interactions.
- Keep page copy and repeatable cards in typed content/data modules, not embedded repeatedly in JSX.
- Reuse existing components and tokens before creating new variants.
- Do not add a database, CMS, authentication, chat, analytics, or email provider without explicit approval.
- Do not commit credentials. Use `.env.local` for local secrets and add only variable names to `.env.example`.
- Do not invent case studies, client claims, performance metrics, or demo links. Keep approved placeholders visibly marked.

## Code organization and growth boundaries

- Keep shared UI in `src/components/`, routes in `src/app/`, and typed site content in `src/content/`.
- Create `src/features/<feature>/` only when a domain grows beyond a route and needs its own components, types, schema, or service. Do not introduce feature folders for one small static section.
- Keep browser UI separate from future server integrations. The intended growth path is: `page/component → content module → Route Handler → provider or CMS service`.
- Do not create an API route when a static Server Component or local content module is sufficient.

## Change checklists

### Figma UI

1. Read `docs/design.md` and obtain design context for the target node.
2. Reuse existing components/tokens and use locally downloaded Figma assets.
3. Check the relevant desktop, tablet, and mobile frame.

### Static content or route

1. Read `docs/product.md`.
2. Put reusable cards or page data in a typed content module.
3. Avoid presenting unapproved demos, customer claims, or metrics as real.

### Contact delivery (after explicit approval)

1. Add a server-side Route Handler under `src/app/api/`.
2. Validate all submitted fields with Zod before calling an email provider.
3. Keep provider credentials in Vercel environment variables; never expose them to the browser.
4. Add validation, loading, success, error, and anti-spam states before enabling the form.

### CMS or localization (after explicit approval)

1. The current implementation uses static locale routes and local content; do not add a second i18n library without a migration plan.
2. Keep translations consolidated in typed content/data modules whenever content is changed.
3. Select a CMS only after defining the editor, approval, and publishing workflow.

## Figma implementation

- Figma URL and node map are in `docs/design.md`.
- Before implementing a Figma area, obtain its design context. Treat generated code only as a visual reference; adapt it to this repository.
- Download and commit exported Figma assets before using them in shipped code. Never retain short-lived MCP asset URLs.
- Match the supplied desktop, tablet, and mobile frames. Do not infer a different layout when a matching frame exists.

## Validation

- Report any skipped validation and why.
