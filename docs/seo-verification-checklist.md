# SEO verification checklist

Items on this list cannot be resolved in code. Each one needs a fact, a document, or an account only the business owner can access. Until it is checked, the site should use the narrower wording already shipped in this branch rather than the previous absolute claims.

## 1. Licensing, insurance, and bonding

- [ ] Record the exact legal business name and the name customers should see.
- [ ] Record the NYC DCWP locksmith license number and the name it is issued to.
- [ ] Confirm the license is active and covers the services advertised (opening, installing, repairing, servicing, and inspecting locks).
- [ ] Add the license number to the footer, the About page, and `llms.txt` once verified.
- [ ] Confirm general liability insurance and whether the business is bonded. If bonding cannot be documented, keep the site to “licensed and insured”.
- [ ] Decide whether to add `hasCredential` structured data. Only do this with a verifiable credential ID.

The city's requirements are described at:
https://www.nyc.gov/site/dca/businesses/license-checklist-locksmith.page

## 2. Address and service model

- [ ] Confirm whether 1510 Castle Hill Ave is a customer-facing storefront or a base/dispatch address.
- [ ] If customers cannot walk in, describe it as a business/mailing address and make the mobile service model explicit everywhere. Do not invite people to “visit”.
- [ ] Make the Google Business Profile match: hide the address for a service-area business, or show it only if it is a staffed storefront open during stated hours.
- [ ] Confirm the service area and whether any Bronx address carries an extra charge.
- [ ] Confirm real opening hours. The site previously said both “24/7” and “9:00 AM–5:00 PM (Sun–Mon)”.

## 3. Response times and staffing

- [ ] Pull 30–60 days of dispatch records: call time, arrival time, and neighbourhood.
- [ ] Calculate a median and a 90th-percentile arrival time, not an average of best cases.
- [ ] Decide whether to publish a range (“most Bronx calls are reached in X–Y minutes”) with the measurement period stated.
- [ ] Confirm who answers the phone: in-house dispatch, answering service, or call centre.
- [ ] Confirm whether technicians are employees or subcontractors, and whether background checks are actually performed. Publish only what is true.

## 4. Reviews and job proof

- [ ] Create or claim the Google Business Profile and confirm the primary category is Locksmith.
- [ ] Ask recent customers for honest reviews through one consistent process. Never offer a discount for a positive review or filter out unhappy customers.
- [ ] Obtain written permission before publishing a customer quote, first name, neighbourhood, photo, or job date.
- [ ] Replace the removed “recent projects” section with real case notes only when the job, date, and permission are recorded.
- [ ] Add the review link to the site only when a real profile exists.

## 5. Search Console diagnosis (not included in the supplied export)

- [ ] Compare 10 July–29 August 2026 with 30 August–30 September and 1 October–11 November, by page, query, country, and device.
- [ ] Check Page indexing, Sitemap status, and URL Inspection for the homepage plus the five highest-impression service URLs.
- [ ] Check Manual Actions and Security Issues.
- [ ] Check Crawl Stats for a drop in requests or an increase in 5xx responses around late August.
- [ ] Export the list of pages that lost the most impressions first; those are the pages to rewrite before creating anything new.
- [ ] After the November 2026 core update finishes, wait at least a full week before judging the result.

## 6. Deployment and hosting history

- [ ] Check Cloudflare Pages deployment history for builds or domain changes between 25 August and 10 September 2026.
- [ ] Check whether a firewall rule, cache rule, or redirect was changed in the same window.
- [ ] Confirm the production branch and that only `main` deploys to production.
- [ ] Confirm the custom domain, `www` redirect, and HTTPS settings.

## 7. Analytics and lead handling

- [ ] Confirm `NEXT_PUBLIC_GA_ID` is set in the Cloudflare Pages production environment.
- [ ] Confirm `NEXT_PUBLIC_CLARITY_ID` if Clarity is still used.
- [ ] Mark `quote_form_success` as a key event in GA4 and link GA4 to Search Console.
- [ ] Test one call click and one real form submission on a phone, then confirm both appear in GA4 without personal data.
- [ ] Record, per lead, whether it was qualified and booked, so organic sessions can be tied to revenue rather than clicks.

## 8. Content still to substantiate

The following phrases remain in long-form body copy and should be reviewed against the evidence gathered above:

- “15 to 30 minutes” response claims in service FAQs and category pages.
- “No distance premium” or “every neighbourhood without exception”.
- “Carried on every van” inventory claims.
- “Directly employed”, “background-checked”, or “certified” technician claims.
- Any “fastest”, “best”, or “most reliable” comparison.

Replace each one with a measured statement or remove it. Google's people-first content guidance is the relevant standard:
https://developers.google.com/search/docs/fundamentals/creating-helpful-content
