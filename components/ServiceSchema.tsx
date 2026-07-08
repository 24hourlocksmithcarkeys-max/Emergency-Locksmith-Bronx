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
      "@type": "LocalBusiness",
      "name": "Emergency Locksmith Bronx",
      "telephone": "+16462641901",
      "image": "https://www.emergencylocksmithbronx.com/images/hero_background.png",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1510 Castle Hill Ave",
        "addressLocality": "Bronx",
        "addressRegion": "NY",
        "postalCode": "10462",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Bronx"
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
