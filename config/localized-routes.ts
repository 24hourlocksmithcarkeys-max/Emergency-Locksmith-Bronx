import { siteConfig } from "@/config/site";

/** One-to-one public URL pairs: English path -> Spanish path. */
export const localizedRoutePairs = [
  ["/", "/es/"],
  ["/services/", "/es/servicios-cerrajeria-bronx/"],
  ["/24-hour-emergency-locksmith-bronx/", "/es/cerrajero-emergencia-bronx/"],
  ["/automotive-locksmith-bronx/", "/es/cerrajero-automotriz-bronx/"],
  ["/residential-locksmith-bronx/", "/es/cerrajero-residencial-bronx/"],
  ["/commercial-locksmith-bronx/", "/es/cerrajero-comercial-bronx/"],
  ["/specialty-locksmith-bronx/", "/es/cerrajero-especializado-bronx/"],
  ["/about-us/", "/es/sobre-nosotros/"],
  ["/contact/", "/es/contacto/"],
  ["/areas-served/", "/es/areas-de-servicio-bronx/"],
  ["/blog/", "/es/guias-cerrajeria-bronx/"],
  ["/privacy-policy/", "/es/politica-de-privacidad/"],
  ["/terms-of-service/", "/es/terminos-del-servicio/"],
  ["/car-lockout-bronx/", "/es/apertura-auto-bronx/"],
  ["/lost-car-key-replacement-bronx/", "/es/reemplazo-llave-auto-perdida-bronx/"],
  ["/ignition-repair-bronx/", "/es/reparacion-encendido-auto-bronx/"],
  ["/car-key-fob-replacement-bronx/", "/es/reemplazo-control-llave-auto-bronx/"],
  ["/home-lockout-bronx/", "/es/apertura-casa-bronx/"],
  ["/apartment-lockout-bronx/", "/es/apertura-apartamento-bronx/"],
  ["/lock-rekeying-bronx/", "/es/cambio-combinacion-cerradura-bronx/"],
  ["/smart-lock-installation-bronx/", "/es/instalacion-cerradura-inteligente-bronx/"],
  ["/office-lockout-bronx/", "/es/apertura-local-comercial-bronx/"],
  ["/master-key-system-bronx/", "/es/sistema-llave-maestra-bronx/"],
  ["/panic-bar-repair-bronx/", "/es/reparacion-barra-antipanico-bronx/"],
  ["/safe-unlocking-bronx/", "/es/apertura-caja-fuerte-bronx/"],
  ["/mailbox-lockout-bronx/", "/es/cerradura-buzon-bronx/"],
  ["/blog/bronx-apartment-lockout-night-guide/", "/es/guias/guia-apertura-apartamento-noche-bronx/"],
  ["/blog/best-smart-locks-bronx-pre-war-apartments/", "/es/guias/cerraduras-inteligentes-apartamentos-antiguos-bronx/"],
  ["/blog/avoid-locksmith-scams-bronx-guide/", "/es/guias/como-evitar-estafas-cerrajeros-bronx/"],
  ["/blog/bronx-business-guide-master-key-systems/", "/es/guias/guia-sistema-llave-maestra-negocios-bronx/"],
  ["/blog/lost-car-keys-bronx-locksmith-vs-dealer/", "/es/guias/llaves-auto-perdidas-cerrajero-o-concesionario/"],
] as const;

function normalizePath(path: string): string {
  const pathname = path.split(/[?#]/, 1)[0] || "/";
  if (pathname === "/") return "/";
  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
}

const englishToSpanish = new Map<string, string>(localizedRoutePairs);
const spanishToEnglish = new Map<string, string>(localizedRoutePairs.map(([en, es]) => [es, en]));

export function toSpanishPath(path: string): string {
  return englishToSpanish.get(normalizePath(path)) ?? "/es/";
}

export function toEnglishPath(path: string): string {
  return spanishToEnglish.get(normalizePath(path)) ?? "/";
}

export function getEnglishPathFromSpanishSlug(slug: string[]): string | undefined {
  const path = normalizePath(`/es/${slug.join("/")}/`);
  return spanishToEnglish.get(path);
}

export function localizedAlternates(englishPath: string) {
  const en = normalizePath(englishPath);
  const es = englishToSpanish.get(en);
  if (!es) return { canonical: `${siteConfig.url}${en}` };
  return {
    canonical: `${siteConfig.url}${en}`,
    languages: {
      "en-US": `${siteConfig.url}${en}`,
      "es-US": `${siteConfig.url}${es}`,
    },
  };
}

export function spanishAlternates(spanishPath: string) {
  const es = normalizePath(spanishPath);
  const en = spanishToEnglish.get(es);
  if (!en) return { canonical: `${siteConfig.url}${es}` };
  return {
    canonical: `${siteConfig.url}${es}`,
    languages: {
      "en-US": `${siteConfig.url}${en}`,
      "es-US": `${siteConfig.url}${es}`,
    },
  };
}

/** Social metadata for an English route; canonical and hreflang stay separate. */
export function englishSocialMetadata(
  englishPath: string,
  title: string,
  description: string,
  type: "website" | "article" = "website",
) {
  const url = `${siteConfig.url}${normalizePath(englishPath)}`;
  const image = `${siteConfig.url}/images/hero_background.webp`;
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      images: [image],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}
