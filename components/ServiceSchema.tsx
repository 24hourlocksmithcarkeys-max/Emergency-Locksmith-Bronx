import { siteConfig } from "@/config/site";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export default function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
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
        "name": "The Bronx, New York"
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
