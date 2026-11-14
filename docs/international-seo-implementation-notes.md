# International SEO implementation notes

## Search Console evidence used

Source: owner-provided Search Console export, `https___www.emergencylocksmithbronx.com_-Performance-on-Search-2026-11-14.zip` (`Queries.csv`). The report contains 155 listed queries, 2,330 aggregate listed-query impressions, 0 clicks, and no obvious Spanish-intent query among those listed rows. Highest-impression terms include “24 hour locksmith bronx” (318), “emergency locksmith bronx” (316), “24 hour locksmith bronx ny” (184), “lockout service bronx” (115), and “car key replacement bronx ny” (93). This is first-party English query evidence for topic coverage only; it is not Spanish demand, a forecast, or keyword-volume data.

Semrush keyword research was unavailable because the account had insufficient API units; Ahrefs keyword lookup was restricted by plan. Do not attribute search volume, difficulty, traffic forecasts, or competitive rankings to these services.

## Google Search guidance followed

- Google Search Central, [Localized versions of your pages](https://developers.google.com/search/docs/specialty/international/localized-versions): separate URLs, reciprocal alternate links for localized equivalents, include self-references, and use valid language/region codes.
- Google Search Central, [Managing multi-regional and multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites): use clear language signals and distinguish localized pages; Google primarily determines page language from visible content rather than relying on the URL or `lang` attribute alone.

The implementation uses independent English and Spanish static documents, localized visible content, explicit document-level language, per-page canonical and hreflang metadata, and sitemap alternate links.


## Implementation validation (2026-11-14)

- `npx tsc --noEmit` passed.
- `npm run build` passed and generated 67 static pages.
- A route-level audit of the exported HTML checked all 62 sitemap URLs (31 English and 31 Spanish). It found the expected document language, canonical URL, reciprocal `en-US`/`es-US` alternate links, page-specific Open Graph and Twitter metadata, and the route-matched language-switch link on every page. All 31 Spanish pages have 3–8 page-specific keyword phrases; titles and descriptions are unique within each locale. The audit reported 0 errors and 0 warnings.
- The sitemap contains all 62 localized URLs with reciprocal language alternates. The source, public, and exported `/llms.txt` copies match.
- `git diff --check` passed. Work remains on `seo/organic-growth-foundation`; it has not been merged, pushed, or deployed.
- The standalone `npm run lint` command remains blocked by the existing ESLint configuration importing `eslint/config` while the installed ESLint is 8.57.1. No interactive lint setup was run and no lint/dependency configuration was changed. The Next.js production build's own lint/type validation passed.
- Keyword volume and difficulty remain unverified because the available Semrush/Ahrefs account access did not provide those reports; no metrics or traffic forecasts were invented.
