/**
 * Real "last meaningfully updated" dates for indexable routes.
 *
 * Rules:
 *  - Only add or change a date when the page's visible content changed in a
 *    way a visitor would notice (new sections, corrected facts, new media).
 *  - Never generate these at build time. Google only uses `lastmod` while it
 *    stays consistently accurate, and ignores it once it looks automated.
 *  - A route with no entry is published without `lastModified`, which is
 *    valid and better than a guessed date.
 *
 * Format: YYYY-MM-DD
 */
export const contentLastModified: Record<string, string> = {
  "/": "2026-11-14",
  "/services/": "2026-11-14",
  "/24-hour-emergency-locksmith-bronx/": "2026-11-14",
  "/automotive-locksmith-bronx/": "2026-11-14",
  "/residential-locksmith-bronx/": "2026-11-14",
  "/commercial-locksmith-bronx/": "2026-11-14",
  "/specialty-locksmith-bronx/": "2026-11-14",
  "/about-us/": "2026-11-14",
  "/areas-served/": "2026-11-14",
  "/contact/": "2026-11-14",
  "/blog/": "2026-11-14",
  "/blog/bronx-apartment-lockout-night-guide/": "2026-11-14",
  "/blog/best-smart-locks-bronx-pre-war-apartments/": "2026-11-14",
  "/blog/avoid-locksmith-scams-bronx-guide/": "2026-11-14",
  "/blog/bronx-business-guide-master-key-systems/": "2026-11-14",
  "/blog/lost-car-keys-bronx-locksmith-vs-dealer/": "2026-11-14",
  "/car-lockout-bronx/": "2026-11-14",
  "/lost-car-key-replacement-bronx/": "2026-11-14",
  "/ignition-repair-bronx/": "2026-11-14",
  "/car-key-fob-replacement-bronx/": "2026-11-14",
  "/home-lockout-bronx/": "2026-11-14",
  "/apartment-lockout-bronx/": "2026-11-14",
  "/lock-rekeying-bronx/": "2026-11-14",
  "/smart-lock-installation-bronx/": "2026-11-14",
  "/office-lockout-bronx/": "2026-11-14",
  "/master-key-system-bronx/": "2026-11-14",
  "/panic-bar-repair-bronx/": "2026-11-14",
  "/safe-unlocking-bronx/": "2026-11-14",
  "/mailbox-lockout-bronx/": "2026-11-14",
};
