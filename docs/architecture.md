# Architecture decisions

## V1

- Use Next.js with the App Router, TypeScript, and Tailwind CSS.
- Keep pages static-first and deploy on Vercel.
- Store structured page content in local typed modules so it can later move into a CMS without rewriting presentation components.
- Keep shared UI in `src/components/`, page-specific sections close to their route, and content models in `src/content/`.
- The contact form is UI-only. It must not call an API, send an email, or persist data in V1.

## Growth boundaries

- Create `src/features/<feature>/` only when a domain has more than one route-level concern or needs its own components, types, validation schema, or service.
- Keep simple static sections in their route and shared pieces in `src/components/`; do not abstract only for symmetry.
- The future integration flow is `page/component → typed content or client form → Route Handler → provider or CMS service`.
- Keep API routes thin: validate input, call one service/provider boundary, return a typed response.

## Deferred work

### Email contact

Add a server-side Route Handler and an email provider only after approval. The intended recipient is `anh.doanquang98@gmail.com`. Keep API keys exclusively in Vercel environment variables. Validate the request with Zod, then add loading, success, error, and anti-spam behavior before exposing the endpoint.

### Localization

Vietnamese is the default locale and English is available through static `/vi/...` and `/en/...` routes. The switcher preserves the current page and exposes active and hover states. Keep translations in local typed data/modules; do not add another i18n library without a clear migration plan.

### Content management

The owner wants non-developers to update content eventually. Select a headless CMS only after defining editors, approval/publishing workflow, and the product/demo content model.

### Data and backend

Do not introduce Azure or a database until a real data requirement exists. For future relational leads/content needs, evaluate Azure SQL; keep browser clients away from database credentials.

## Quality automation

- The initial quality gate is `npm run lint` plus `npm run build`.
- Add a CI workflow only when the project has a remote repository and pull-request workflow. It should run the same two commands before merge.
