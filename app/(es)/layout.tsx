import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { siteConfig } from "@/config/site";
import SpanishStickyMobileCTA from "@/components/spanish/SpanishStickyMobileCTA";
import Analytics from "@/components/Analytics";
import ConversionTracking from "@/components/ConversionTracking";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Cerrajero en el Bronx | Emergency Locksmith Bronx", template: "%s | Emergency Locksmith Bronx" },
  description: "Cerrajero móvil en todo el Bronx. Llame a un cerrajero real para confirmar disponibilidad, precio por adelantado y una estimación de llegada actual.",
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "Emergency Locksmith Bronx", description: "Cerrajero móvil en todo el Bronx. Hable con un cerrajero real y confirme disponibilidad, alcance y precio.", siteName: siteConfig.name, locale: "es_US", type: "website", images: ["/images/hero_background.webp"] },
  twitter: { card: "summary_large_image", title: "Emergency Locksmith Bronx", description: "Cerrajero móvil en todo el Bronx. Hable con un cerrajero real y confirme disponibilidad, alcance y precio.", images: ["/images/hero_background.webp"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function SpanishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-US" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <LocalBusinessSchema description="Servicio móvil de cerrajería en todo el Bronx. Un cerrajero real responde las llamadas; confirme disponibilidad actual, alcance acordado, precio por adelantado y una estimación de llegada." />
        <Analytics />
      </head>
      <body className="min-h-full flex flex-col pb-20 md:pb-0">
        <ConversionTracking />
        {children}
        <SpanishStickyMobileCTA />
      </body>
    </html>
  );
}
