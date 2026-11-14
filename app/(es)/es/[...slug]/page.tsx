import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SpanishPageView from "@/components/spanish/SpanishPageView";
import { spanishPages, spanishPageByPath } from "@/config/spanish-content";
import { spanishAlternates } from "@/config/localized-routes";
import { siteConfig } from "@/config/site";

interface PageProps { params: Promise<{ slug: string[] }> }

export const dynamicParams = false;
export function generateStaticParams() {
  return spanishPages.map((page) => ({ slug: page.path.replace(/^\/es\//, "").replace(/\/$/, "").split("/") }));
}

function pagePath(slug: string[]) { return `/es/${slug.join("/")}/`; }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = spanishPageByPath.get(pagePath(slug));
  if (!page) return { robots: { index: false, follow: false } };
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords,
    alternates: spanishAlternates(page.path),
    openGraph: { title: page.title, description: page.description, url: page.path, siteName: siteConfig.name, locale: "es_US", type: page.kind === "article" ? "article" : "website", images: ["/images/hero_background.webp"] },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/images/hero_background.webp"] },
  };
}

export default async function SpanishLocalizedPage({ params }: PageProps) {
  const { slug } = await params;
  const page = spanishPageByPath.get(pagePath(slug));
  if (!page) notFound();
  return <SpanishPageView page={page} />;
}
