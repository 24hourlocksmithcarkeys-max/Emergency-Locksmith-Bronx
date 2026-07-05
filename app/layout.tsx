import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Analytics from "@/components/Analytics";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <LocalBusinessSchema />
        <Analytics />
      </head>
      <body className="min-h-full flex flex-col pb-20 md:pb-0">
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
