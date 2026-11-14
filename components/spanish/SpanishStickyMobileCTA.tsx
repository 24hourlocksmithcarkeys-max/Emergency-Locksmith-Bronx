"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function SpanishStickyMobileCTA() {
  return <div className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-3 md:hidden flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.4)]" lang="es">
    <a href={`tel:${siteConfig.contact.phone}`} className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-black py-3.5 px-6 rounded-lg font-sans font-bold tracking-wider uppercase text-center text-sm flex items-center justify-center gap-3 shadow-lg shadow-brand-yellow/15 whitespace-nowrap" aria-label={`Llamar ahora al ${siteConfig.contact.phoneDisplay}`}>
      <Phone className="h-5 w-5 fill-current" aria-hidden="true" /><span>Llamar al cerrajero</span>
    </a>
  </div>;
}
