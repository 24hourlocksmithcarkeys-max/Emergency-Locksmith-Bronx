import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const requestLinks = [
  ["Apertura de casa y apartamento", "/es/apertura-casa-bronx/"],
  ["Apertura de vehículo", "/es/apertura-auto-bronx/"],
  ["Apertura de oficina y negocio", "/es/apertura-local-comercial-bronx/"],
  ["Cambio de combinación", "/es/cambio-combinacion-cerradura-bronx/"],
  ["Cerraduras inteligentes", "/es/instalacion-cerradura-inteligente-bronx/"],
  ["Información de emergencia", "/es/cerrajero-emergencia-bronx/"],
];
const guideLinks = [
  ["Cierre de apartamento por la noche", "/es/guias/guia-apertura-apartamento-noche-bronx/"],
  ["Evitar estafas de cerrajeros", "/es/guias/como-evitar-estafas-cerrajeros-bronx/"],
  ["Cerraduras inteligentes para apartamentos antiguos", "/es/guias/cerraduras-inteligentes-apartamentos-antiguos-bronx/"],
  ["Sistemas de llave maestra", "/es/guias/guia-sistema-llave-maestra-negocios-bronx/"],
  ["Llave de auto: cerrajero o concesionario", "/es/guias/llaves-auto-perdidas-cerrajero-o-concesionario/"],
];
const companyLinks = [
  ["Sobre nosotros", "/es/sobre-nosotros/"],
  ["Áreas de servicio", "/es/areas-de-servicio-bronx/"],
  ["Todos los servicios", "/es/servicios-cerrajeria-bronx/"],
  ["Contacto", "/es/contacto/"],
  ["Política de privacidad", "/es/politica-de-privacidad/"],
  ["Términos del servicio", "/es/terminos-del-servicio/"],
];

export default function SpanishFooter() {
  return <footer className="bg-brand-dark text-white pt-14 pb-8 border-t border-zinc-800" lang="es">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7 pb-10 border-b border-zinc-800">
        <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-brand-yellow" aria-hidden="true" /><div><p className="text-xs text-zinc-400 uppercase tracking-wider">Teléfono</p><a href={`tel:${siteConfig.contact.phone}`} className="font-bold">{siteConfig.contact.phoneDisplay}</a></div></div>
        <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-brand-yellow" aria-hidden="true" /><div><p className="text-xs text-zinc-400 uppercase tracking-wider">Correo electrónico</p><a href={`mailto:${siteConfig.contact.email}`} className="font-bold break-all">{siteConfig.contact.email}</a></div></div>
        <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-brand-yellow" aria-hidden="true" /><div><p className="text-xs text-zinc-400 uppercase tracking-wider">Área de servicio</p><p className="font-bold">Todo el Bronx, NY</p></div></div>
        <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-brand-yellow" aria-hidden="true" /><div><p className="text-xs text-zinc-400 uppercase tracking-wider">Horario</p><p className="font-bold text-sm">Lun–jue 9 a. m.–5 p. m.; vie–dom 24 horas</p></div></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
        <div className="space-y-4"><Link href="/es/" className="text-brand-yellow font-serif font-bold uppercase">Emergency Locksmith Bronx</Link><p className="text-zinc-400 text-sm leading-relaxed">Servicio móvil de cerrajería en todo el Bronx. Llame para confirmar disponibilidad, alcance, precio por adelantado y una estimación de llegada actual.</p></div>
        <LinkColumn title="Solicitudes de servicio" links={requestLinks} />
        <LinkColumn title="Guías del Bronx" links={guideLinks} />
        <LinkColumn title="Información" links={companyLinks} />
      </div>
      <div className="border-t border-zinc-800 pt-7 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-500">
        <p>Licencia activa de cerrajería NYC DCWP; número disponible a solicitud y no publicado. Seguro de responsabilidad civil general informado de hasta $1,000,000, sujeto a los términos de la póliza. <a href={siteConfig.licensing.verifyUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-yellow">Consulte información oficial de licencias de NYC</a>.</p>
        <p className="md:text-right">© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
      </div>
      <p className="mt-4 text-xs text-zinc-600">Centro centralizado de despacho: {siteConfig.contact.address}. No es una tienda para visitas sin cita.</p>
    </div>
  </footer>;
}

function LinkColumn({ title, links }: { title: string; links: string[][] }) {
  return <div><h2 className="font-serif font-bold mb-4 border-b border-zinc-800 pb-2">{title}</h2><ul className="space-y-2 text-zinc-400 text-sm">{links.map(([label, href]) => <li key={href}><Link href={href} className="hover:text-brand-yellow">{label}</Link></li>)}</ul></div>;
}
