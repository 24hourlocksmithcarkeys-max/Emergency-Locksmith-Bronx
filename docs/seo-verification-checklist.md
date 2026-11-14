# SEO verification checklist

This checklist records owner-confirmed facts and the remaining evidence or account checks that cannot be completed in code. Owner-reported information is identified as such; the underlying private records were not included in this implementation. Keep public claims limited to what the business can support.

## 1. Licensing, insurance, and bonding

- [x] Legal/customer-facing name: “Emergency Locksmith Bronx.”

- [x] Owner confirms that Emergency Locksmith Bronx holds an active NYC DCWP locksmith license.
- [x] Do not record or publish the license number in public site copy, metadata, or structured data. The number is available upon request; owner cites impersonation/scam risk as the reason it is not publicly posted.

- [ ] Retain current licensing documentation privately and confirm the scope continues to cover advertised services.

- [x] Add a `hasCredential` node naming the active NYC DCWP locksmith license without an identifier; preserve the number's privacy.

- [x] Owner reports general liability insurance coverage up to $1,000,000. Policy terms or certificate were not supplied to this implementation; retain them privately and do not promise that a specific loss is covered.

- [ ] Bonding status was not provided; do not describe the business as bonded.

The city's requirements are described at:
[https://www.nyc.gov/site/dca/businesses/license-checklist-locksmith.page](https://www.nyc.gov/site/dca/businesses/license-checklist-locksmith.page)

## 2. Address and service model

- [x] 1510 Castle Hill Ave is the centralized dispatching center; the business provides mobile service throughout the Bronx. It is not represented on the site as a walk-in storefront.

- [x] Describe the address as a centralized dispatching center and make mobile Bronx service explicit. Do not invite customers to visit.

- [ ] Google Business Profile is being worked on. Before publishing, align the profile with the mobile service model; hide the address unless customers can visit a staffed storefront during stated hours.

- [x] Owner confirms mobile service throughout the Bronx and no additional charge solely based on any Bronx service address. The price still depends on the agreed service scope and is confirmed upfront.

- [x] Confirmed schedule: Monday–Thursday, 9:00 a.m.–5:00 p.m.; 24-hour availability Friday, Saturday, and Sunday. Do not describe the service as 24/7.

## 3. Response times and staffing

- [x] Owner reports that average arrival time is approximately 20 minutes over the last 90 days and most emergency calls arrive in about 15–20 minutes. The underlying dispatch export was not supplied for this implementation; retain it privately to support the claim.

- [ ] If publishing stronger or more detailed arrival claims, calculate and retain the median and 90th percentile from dispatch records. Do not turn the reported average into a guarantee.

- [x] Publish only the owner-reported average (~20 minutes over the last 90 days) and typical range (most emergency calls in about 15–20 minutes), clearly marked as non-guaranteed.

- [x] Owner confirms calls are answered by a real locksmith, who asks job-specific questions so the technician can be dispatched with needed tools and parts.

- [x] Owner confirms backgrounds of all technicians are verified.
- [ ] Employment status (employee or subcontractor) remains unconfirmed; do not make claims about it.

## 4. Reviews and job proof

- [ ] Google Business Profile is being worked on; after setup, confirm the primary category is Locksmith and verify the service-area configuration.

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

## 8. Owner-reported facts implemented

The following are owner-reported facts implemented in the main site copy. Retain source records privately and keep the wording bounded to the facts below:

- “About 20 minutes average over the last 90 days; most emergency calls about 15–20 minutes”; explicitly non-guaranteed.

- No additional charge solely based on the Bronx service address; do not imply a flat service price.

- No claim that specific tools or parts are on every van; the locksmith asks job-specific questions to prepare the dispatched technician.

- Backgrounds of all technicians are verified (owner-confirmed); employment status is unknown. Do not say “directly employed” or “bonded”.

- Do not publish “fastest”, “best”, or “most reliable” comparisons unless supported by reliable, current evidence.

Do not add unsupported guarantees or comparative superlatives. Google's people-first content guidance is the relevant standard:
[https://developers.google.com/search/docs/fundamentals/creating-helpful-content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
