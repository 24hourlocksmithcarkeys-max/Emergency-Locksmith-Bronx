import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPaths = [
    "",
    "/services",
    "/24-hour-emergency-locksmith-bronx",
    "/automotive-locksmith-bronx",
    "/residential-locksmith-bronx",
    "/commercial-locksmith-bronx",
    "/specialty-locksmith-bronx",
    "/about-us",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms-of-service",
    "/areas-served",
  ];

  const subServices = [
    "/car-lockout-bronx",
    "/lost-car-key-replacement-bronx",
    "/ignition-repair-bronx",
    "/car-key-fob-replacement-bronx",
    "/home-lockout-bronx",
    "/apartment-lockout-bronx",
    "/lock-rekeying-bronx",
    "/smart-lock-installation-bronx",
    "/office-lockout-bronx",
    "/master-key-system-bronx",
    "/panic-bar-repair-bronx",
    "/safe-unlocking-bronx",
    "/mailbox-lockout-bronx",
  ];

  const blogPosts = [
    "/blog/bronx-apartment-lockout-night-guide",
    "/blog/best-smart-locks-bronx-pre-war-apartments",
    "/blog/avoid-locksmith-scams-bronx-guide",
    "/blog/bronx-business-guide-master-key-systems",
    "/blog/lost-car-keys-bronx-locksmith-vs-dealer",
  ];

  const allPaths = [...staticPaths, ...subServices, ...blogPosts];

  return allPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
