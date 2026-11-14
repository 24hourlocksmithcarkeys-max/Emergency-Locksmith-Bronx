"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { toEnglishPath } from "@/config/localized-routes";

const navigation = [
  { name: "Servicios", href: "/es/servicios-cerrajeria-bronx/" },
  { name: "Áreas", href: "/es/areas-de-servicio-bronx/" },
  { name: "Guías", href: "/es/guias-cerrajeria-bronx/" },
  { name: "Contacto", href: "/es/contacto/" },
];

export default function SpanishHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "/es/";
  const englishPath = toEnglishPath(pathname);
  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          <Link href="/es/" className="flex items-center gap-2 min-w-0" aria-label="Emergency Locksmith Bronx, inicio en español">
            <span className="border-2 border-brand-yellow p-1 rounded-full text-sm leading-none shrink-0" aria-hidden="true">🔑</span>
            <span className="flex flex-col leading-none">
              <span className="text-brand-yellow text-xs sm:text-base font-serif font-bold tracking-wide uppercase whitespace-nowrap">Emergency Locksmith</span>
              <span className="text-white text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.32em] uppercase mt-1">Bronx, NY</span>
            </span>
          </Link>
          <nav className="hidden xl:flex space-x-6" aria-label="Navegación principal">
            {navigation.map((item) => <Link key={item.href} href={item.href} className="text-gray-300 hover:text-brand-yellow font-medium transition-colors whitespace-nowrap">{item.name}</Link>)}
          </nav>
          <div className="hidden xl:flex items-center gap-4 shrink-0">
            <Link href={englishPath} hrefLang="en-US" lang="en-US" className="border border-zinc-600 hover:border-brand-yellow text-sm px-3 py-2 rounded whitespace-nowrap" aria-label="Cambiar esta página a inglés">English</Link>
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-brand-yellow font-bold" aria-label={`Llamar al ${siteConfig.contact.phoneDisplay}`}><Phone className="h-5 w-5" aria-hidden="true" /><span className="whitespace-nowrap">{siteConfig.contact.phoneDisplay}</span></a>
            <Link href="/es/contacto/?tipo=emergencia" className="bg-brand-yellow hover:bg-brand-yellow-hover text-black px-4 py-3 rounded font-bold text-xs tracking-wider uppercase whitespace-nowrap">Solicitar ayuda</Link>
          </div>
          <div className="flex xl:hidden items-center gap-3">
            <Link href={englishPath} hrefLang="en-US" lang="en-US" className="border border-zinc-600 text-xs px-2.5 py-2 rounded" aria-label="Cambiar esta página a inglés">EN</Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-brand-yellow focus:outline-none" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isOpen}>{isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}</button>
          </div>
        </div>
      </div>
      {isOpen && <div className="xl:hidden bg-zinc-950 border-t border-zinc-800"><nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3" aria-label="Navegación móvil">
        {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded text-base font-medium text-gray-300 hover:text-brand-yellow hover:bg-zinc-900">{item.name}</Link>)}
        <div className="pt-4 pb-2 border-t border-zinc-800 px-3 flex flex-col gap-3">
          <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-brand-yellow font-bold text-lg"><Phone className="h-5 w-5" aria-hidden="true" />{siteConfig.contact.phoneDisplay}</a>
          <Link href="/es/contacto/?tipo=emergencia" onClick={() => setIsOpen(false)} className="bg-brand-yellow text-black text-center px-4 py-3 rounded font-bold text-sm uppercase">Solicitar ayuda</Link>
        </div>
      </nav></div>}
    </header>
  );
}
