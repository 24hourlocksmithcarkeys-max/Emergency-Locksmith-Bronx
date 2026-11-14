import type { Metadata } from "next";
import SpanishPageView from "@/components/spanish/SpanishPageView";
import { spanishHome } from "@/config/spanish-content";
import { spanishAlternates } from "@/config/localized-routes";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: spanishHome.title },
  description: spanishHome.description,
  keywords: spanishHome.keywords,
  alternates: spanishAlternates(spanishHome.path),
  openGraph: { title: spanishHome.title, description: spanishHome.description, url: spanishHome.path, siteName: siteConfig.name, locale: "es_US", type: "website", images: ["/images/hero_background.webp"] },
  twitter: { card: "summary_large_image", title: spanishHome.title, description: spanishHome.description, images: ["/images/hero_background.webp"] },
};

export default function SpanishHomePage() {
  return <SpanishPageView page={spanishHome} />;
}
