# Emergency Locksmith Bronx

Marketing site for Emergency Locksmith Bronx, providing mobile locksmith service throughout the Bronx, NY. Stated hours: Monday–Thursday, 9 a.m.–5 p.m.; 24-hour availability Friday–Sunday. Built with Next.js 14 (App Router) and exported as static HTML for Cloudflare Pages.

## Stack

- Next.js 14.2 with `output: "export"` and `trailingSlash: true`
- React 18, TypeScript, Tailwind CSS
- `next/image` with `images.unoptimized` (required by static export)
- Lead delivery through the Telegram Bot API (`lib/api.ts`)
- Optional GA4 and Microsoft Clarity (`components/Analytics.tsx`)

## Local development

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run lint
```

## Deployment

`.github/workflows/` builds the site and deploys `out/` to the Cloudflare Pages project `emergencylocksmithbronx` on every push to `main` and every pull request. Production changes therefore require a merge to `main`; a branch push alone does not update the live site.

## Content structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Homepage: positioning, services, process, consumer checks, quote form |
| `app/[subservice]/page.tsx` | 13 service pages generated from one data object |
| `app/24-hour-emergency-locksmith-bronx/` | Emergency/24-hour hub |
| `app/automotive-…`, `residential-…`, `commercial-…`, `specialty-…` | Service category hubs |
| `app/blog/[slug]/page.tsx` | Five long-form guides generated from one data object |
| `app/areas-served/` | Bronx coverage page |
| `config/site.ts` | Business name, phone, dispatch-center address, hours, service area, credential, and owner-reported details |
| `config/content-dates.ts` | Real content-update dates used by the sitemap |
| `llms.txt` | Business and service summary for AI answer engines |

## SEO maintenance rules

These rules exist because the previous build shipped defects that suppressed click-through and trust.

### Metadata

- Every indexable page must have a unique title and description written as a complete sentence.
- **Never truncate a title or description with `substring()` or an ellipsis.** If a title is too long, rewrite it. The build previously cut titles to 32 characters, so search results displayed strings such as `Car Lockout Service Bronx | 2...`.
- Titles use `title: { absolute: "…" }` where the full string already contains the brand or is intentionally standalone. Otherwise the root template appends `| Emergency Locksmith Bronx`.
- Each page declares its own `alternates.canonical` with a trailing slash, matching `trailingSlash: true`.

### Sitemap

- `app/sitemap.ts` lists every indexable route exactly once, with a trailing slash.
- `lastModified` is read from `config/content-dates.ts`. Add a date only when a visitor would notice a content change. Never generate dates with `Math.random()` or `new Date()` at build time; Google ignores `lastmod` once it stops being trustworthy.
- `priority` and `changeFrequency` are intentionally omitted because Google ignores both.
- When adding a service or blog post, update three places: `generateStaticParams()`, the data object, and the route list in `app/sitemap.ts`.

### Claims and proof

- Every public claim about licensing, insurance, bonding, response time, staffing, inventory, partnerships, or customer outcomes must be true and evidenced. See `docs/seo-verification-checklist.md`.
- Do not publish testimonials, project photos, or review counts without a real source and permission. The site previously showed six “recent projects” and three testimonials dated December 2026, including an electrical repair attributed to a locksmith.
- The NYC DCWP locksmith license number is available upon request but must not be published in site copy, metadata, or structured data because of impersonation and scam concerns. `hasCredential` may identify the active license without an identifier.
- Arrival-time copy must state that the owner reports an approximately 20-minute average over the last 90 days and most emergency calls at about 15–20 minutes; never present this as a guarantee.
- Use the confirmed hours: Monday–Thursday, 9 a.m.–5 p.m.; 24-hour availability Friday–Sunday. Do not describe service as 24/7.
- Prefer specific, checkable statements over superlatives (“fastest in the borough”).

### Internal linking

- Service pages link to their category hub and to relevant guides (`guideLinksByService` in `app/[subservice]/page.tsx`).
- Guides link back to the services they mention (`relatedLinks` in `app/blog/[slug]/page.tsx`).
- The homepage links to every service page through `ServicesGrid`.
- The footer repeats the six highest-value services and all five guides.

### Analytics

GA4 is enabled by setting `NEXT_PUBLIC_GA_ID`; Clarity uses `NEXT_PUBLIC_CLARITY_ID`. The site emits:

| Event | When |
| --- | --- |
| `click_to_call` | Any `tel:` link |
| `click_to_text` | Any `sms:` link |
| `click_to_email` | Any `mailto:` link |
| `quote_form_start` | First interaction with the quote or booking form |
| `quote_form_success` | Lead accepted by the Telegram API |
| `quote_form_error` | Lead delivery failed |

Mark `quote_form_success` as a key event in GA4. Never send names, phone numbers, emails, addresses, or message contents to analytics; `lib/analytics.ts` only accepts non-personal parameters.

## Before merging an SEO change

1. `npm run build` succeeds and `out/sitemap.xml` contains no invented dates.
2. Spot-check `out/index.html` and one service page for a complete `<title>`, meta description, and self-referencing canonical.
3. Confirm no future-dated content remains: `grep -rn "2027\|December 2026" app components`.
4. Confirm every new claim can be evidenced, or leave it out.
