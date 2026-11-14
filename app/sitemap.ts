import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { contentLastModified } from "@/config/content-dates";
import { localizedRoutePairs } from "@/config/localized-routes";

export const dynamic = "force-static";

/**
 * All indexable English and Spanish route pairs. Each URL advertises itself and
 * its translated equivalent in the sitemap's alternate-language annotations.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [englishPath, spanishPath] of localizedRoutePairs) {
    const englishUrl = `${siteConfig.url}${englishPath}`;
    const spanishUrl = `${siteConfig.url}${spanishPath}`;
    const languages = { "en-US": englishUrl, "es-US": spanishUrl };

    const englishEntry: MetadataRoute.Sitemap[number] = {
      url: englishUrl,
      alternates: { languages },
    };
    const englishLastModified = contentLastModified[englishPath];
    if (englishLastModified) englishEntry.lastModified = new Date(`${englishLastModified}T00:00:00.000Z`);
    entries.push(englishEntry);

    // Spanish pages were translated/created on this date. Keep the sitemap
    // date deterministic rather than setting it to build time.
    entries.push({
      url: spanishUrl,
      lastModified: new Date("2026-11-14T00:00:00.000Z"),
      alternates: { languages },
    });
  }

  return entries;
}
