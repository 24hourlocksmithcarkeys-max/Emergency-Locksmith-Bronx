import Link from "next/link";
import { ArrowRight, Calendar, Clock, HelpCircle, Phone, ShieldCheck } from "lucide-react";
import type { SpanishPage } from "@/config/spanish-content";
import { siteConfig } from "@/config/site";
import SpanishHeader from "@/components/spanish/SpanishHeader";
import SpanishFooter from "@/components/spanish/SpanishFooter";
import { SpanishBookingForm, SpanishQuoteForm } from "@/components/spanish/SpanishForms";
import ServiceSchema from "@/components/ServiceSchema";

export default function SpanishPageView({ page }: { page: SpanishPage }) {
  const structuredUrl = `${siteConfig.url}${page.path}`;
  return <>
    <SpanishHeader />
    {(page.kind === "service" || page.kind === "category") && <ServiceSchema locale="es" name={page.h1} description={page.description} url={structuredUrl} />}
    {page.kind === "article" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@type": "Article", headline: page.h1,
      description: page.description, articleSection: page.category,
      dateModified: "2026-11-14", inLanguage: "es-US",
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: structuredUrl,
    }) }} />}
    <main className="bg-zinc-950 text-white min-h-screen" lang="es">
      <section className="relative bg-zinc-900 border-b border-zinc-800 py-14 lg:py-20" aria-label={page.eyebrow}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={(page.kind === "service" || page.kind === "category") ? "grid grid-cols-1 lg:grid-cols-12 gap-10 items-start" : "max-w-4xl mx-auto text-center space-y-5"}>
            <div className={(page.kind === "service" || page.kind === "category") ? "lg:col-span-7 space-y-5" : "space-y-5"}>
              <p className="text-brand-yellow font-sans font-bold text-xs sm:text-sm uppercase tracking-widest">{page.eyebrow}</p>
              {page.kind === "article" && <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-zinc-500"><span className="bg-brand-yellow/10 text-brand-yellow px-2.5 py-1 rounded font-bold uppercase tracking-wider">{page.category}</span><span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" aria-hidden="true" />4 min de lectura</span><span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" aria-hidden="true" />Actualizado: noviembre de 2026</span></div>}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold uppercase tracking-tight leading-tight">{page.h1}</h1>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">{page.intro}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <a href={`tel:${siteConfig.contact.phone}`} className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-bold px-5 py-3 rounded transition-colors" aria-label={`Llamar al ${siteConfig.contact.phoneDisplay}`}><Phone className="h-4 w-4" aria-hidden="true" />Llamar: {siteConfig.contact.phoneDisplay}</a>
                {page.kind !== "contact" && <Link href="/es/contacto/" className="inline-flex items-center gap-2 border border-zinc-700 hover:border-brand-yellow text-zinc-200 px-5 py-3 rounded font-bold transition-colors">Consultar disponibilidad <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>}
              </div>
            </div>
            {(page.kind === "service" || page.kind === "category") && <div className="lg:col-span-5 flex justify-center"><SpanishBookingForm /></div>}
          </div>
        </div>
      </section>

      {page.kind === "directory" && page.links && <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" aria-label="Directorio de servicios"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{page.links.map((link) => <Link key={link.href} href={link.href} className="flex items-center justify-between gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded hover:border-brand-yellow/60 transition-colors"><span className="font-semibold text-zinc-100">{link.label}</span><ArrowRight className="h-4 w-4 text-brand-yellow shrink-0" aria-hidden="true" /></Link>)}</div></section>}
      {page.kind === "guide-index" && page.links && <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12" aria-label="Lista de guías"><div className="grid grid-cols-1 gap-5">{page.links.map((link, index) => <article key={link.href} className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-lg"><p className="text-brand-yellow text-xs uppercase tracking-widest font-bold mb-2">Guía {index + 1}</p><h2 className="text-xl sm:text-2xl font-serif font-bold"><Link href={link.href} className="hover:text-brand-yellow">{link.label}</Link></h2><p className="mt-3 text-zinc-400 text-sm leading-relaxed">Información práctica y preguntas que conviene confirmar para esta situación en el Bronx.</p><Link href={link.href} className="inline-flex items-center gap-2 text-brand-yellow text-sm font-bold mt-4">Leer la guía <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></article>)}</div></section>}
      {page.kind === "areas" && <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">{["Castle Hill", "Parkchester", "Riverdale", "Mott Haven", "Pelham Bay", "Grand Concourse", "Fordham", "Co-op City", "Belmont", "City Island", "Wakefield", "Woodlawn", "Tremont", "Morris Park", "Throggs Neck", "Hunts Point", "Norwood", "Kingsbridge", "Soundview", "Highbridge"].map((area) => <span key={area} className="bg-zinc-900 border border-zinc-800 rounded px-3 py-3 text-center text-sm text-zinc-300">{area}</span>)}</div></section>}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20" aria-label="Información detallada">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <article className="lg:col-span-8 space-y-12">
            {page.sections.map((section, index) => <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase leading-snug border-l-4 border-brand-yellow pl-4">{section.heading}</h2>
              <div className="space-y-4 text-zinc-300 text-base leading-relaxed">{section.paragraphs.map((paragraph, pindex) => <p key={pindex}>{paragraph}</p>)}{section.externalLinks && <ul className="list-disc pl-6 space-y-2">{section.externalLinks.map((link) => <li key={link.href}><a className="text-brand-yellow underline" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}</ul>}</div>
              {page.kind === "home" && index === 3 && <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5"><p className="font-bold text-brand-yellow mb-2">Horario de servicio</p><p className="text-zinc-300 text-sm">Lunes–jueves: 9:00 a. m.–5:00 p. m. | Viernes–domingo: disponibilidad de servicio las 24 horas. Llame para confirmar.</p></div>}
            </section>)}
          </article>
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24" aria-label="Información de contacto y servicio">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
              <h2 className="font-serif font-bold uppercase tracking-wider text-brand-yellow">Información del servicio</h2>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-brand-yellow shrink-0" aria-hidden="true" /><span>Licencia NYC DCWP activa; número disponible a solicitud y no publicado.</span></li>
                <li className="flex gap-3"><Clock className="w-5 h-5 text-brand-yellow shrink-0" aria-hidden="true" /><span>Estimación de llegada no garantizada; llame para conocer la actual.</span></li>
                <li className="flex gap-3"><Phone className="w-5 h-5 text-brand-yellow shrink-0" aria-hidden="true" /><span>El precio se confirma por adelantado para el alcance acordado.</span></li>
              </ul>
              <a href={`tel:${siteConfig.contact.phone}`} className="block text-center bg-brand-yellow text-black rounded px-4 py-3 font-bold">Llamar {siteConfig.contact.phoneDisplay}</a>
            </div>
            {page.links && page.kind !== "directory" && page.kind !== "guide-index" && <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6"><h2 className="font-serif font-bold uppercase tracking-wider mb-4">Páginas relacionadas</h2><ul className="space-y-3">{page.links.map((link) => <li key={link.href}><Link href={link.href} className="inline-flex items-start gap-2 text-brand-yellow hover:text-brand-yellow-hover text-sm font-semibold"><ArrowRight className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />{link.label}</Link></li>)}</ul></div>}
          </aside>
        </div>
      </section>

      {page.faqs && <section className="bg-zinc-900/50 border-t border-zinc-900 py-14 lg:py-20" aria-label="Preguntas frecuentes"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"><h2 className="text-3xl font-serif font-bold uppercase text-center">Preguntas frecuentes</h2><div className="space-y-5">{page.faqs.map((faq) => <div key={faq.q} className="bg-zinc-900 border border-zinc-800 p-5 sm:p-6 rounded-lg space-y-2"><h3 className="font-serif font-bold text-brand-yellow text-base sm:text-lg flex gap-2 items-start"><HelpCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" /><span>{faq.q}</span></h3><p className="text-zinc-300 text-sm leading-relaxed pl-7">{faq.a}</p></div>)}</div></div></section>}

      {page.kind === "home" && <section className="py-14 bg-zinc-900/40 border-y border-zinc-800"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"><div className="space-y-4"><p className="text-brand-yellow text-sm font-bold uppercase tracking-widest">Solicite información</p><h2 className="text-3xl font-serif font-bold uppercase">Explique su situación</h2><p className="text-zinc-300 leading-relaxed">Para consultas que no sean urgentes, envíe un mensaje. Para disponibilidad actual o una emergencia, llame y hable con un cerrajero real.</p></div><SpanishQuoteForm /></div></section>}
      {page.kind === "contact" && <section className="py-14 bg-zinc-900/40 border-y border-zinc-800"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"><SpanishQuoteForm /><div className="space-y-5"><SpanishBookingForm /><p className="text-zinc-500 text-xs leading-relaxed">El centro de despacho está en {siteConfig.contact.address}; no es un local para visitas sin cita. El servicio es móvil en todo el Bronx.</p></div></div></section>}
      {page.kind === "areas" && <section className="py-12"><div className="max-w-xl mx-auto px-4"><SpanishBookingForm /></div></section>}
    </main>
    <SpanishFooter />
  </>;
}
