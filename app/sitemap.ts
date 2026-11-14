import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { contentLastModified } from "@/config/content-dates";

export const dynamic = "force-static";

/**
 * Every indexable route on the site. Keep this list in sync with
 * generateStaticParams() in app/[subservice]/page.tsx and
 * app/blog/[slug]/page.tsx.
 *
 * `priority` and `changeFrequency` are deliberately omitted: Google ignores
 * both. `lastModified` is only emitted when a real date exists in
 * config/content-dates.ts.
 */
const routes = [
  "/",
  "/services/",
  "/24-hour-emergency-locksmith-bronx/",
  "/automotive-locksmith-bronx/",
  "/residential-locksmith-bronx/",
  "/commercial-locksmith-bronx/",
  "/specialty-locksmith-bronx/",
  "/about-us/",
  "/contact/",
  "/areas-served/",
  "/blog/",
  "/privacy-policy/",
  "/terms-of-service/",
  "/car-lockout-bronx/",
  "/lost-car-key-replacement-bronx/",
  "/ignition-repair-bronx/",
  "/car-key-fob-replacement-bronx/",
  "/home-lockout-bronx/",
  "/apartment-lockout-bronx/",
  "/lock-rekeying-bronx/",
  "/smart-lock-installation-bronx/",
  "/office-lockout-bronx/",
  "/master-key-system-bronx/",
  "/panic-bar-repair-bronx/",
  "/safe-unlocking-bronx/",
  "/mailbox-lockout-bronx/",
  "/blog/bronx-apartment-lockout-night-guide/",
  "/blog/best-smart-locks-bronx-pre-war-apartments/",
  "/blog/avoid-locksmith-scams-bronx-guide/",
  "/blog/bronx-business-guide-master-key-systems/",
  "/blog/lost-car-keys-bronx-locksmith-vs-dealer/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: `${siteConfig.url}${path}`,
    };

    const lastModified = contentLastModified[path];
    if (lastModified) {
      // Fixed UTC midnight so repeated builds produce identical output.
      entry.lastModified = new Date(`${lastModified}T00:00:00.000Z`);
    }

    return entry;
  });
}
