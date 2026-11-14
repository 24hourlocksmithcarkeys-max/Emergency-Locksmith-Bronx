import { siteConfig } from "@/config/site";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  locale?: "en" | "es";
}

export default function ServiceSchema({ name, description, url, locale = "en" }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Locksmith",
      "@id": `${siteConfig.url}/#localbusiness`,
      "name": siteConfig.name
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": locale === "es" ? "El Bronx, Nueva York" : "The Bronx, New York"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
