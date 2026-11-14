import { siteConfig } from "@/config/site";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    // `Locksmith` is a specific LocalBusiness subtype; pairing it with
    // LocalBusiness keeps the entity unambiguous for search engines.
    "@type": ["Locksmith", "LocalBusiness"],
    "name": siteConfig.name,
    "description": siteConfig.description,
    "image": `${siteConfig.url}/images/hero_background.webp`,
    "@id": `${siteConfig.url}/#localbusiness`,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.street,
      "addressLocality": siteConfig.contact.city,
      "addressRegion": siteConfig.contact.region,
      "postalCode": siteConfig.contact.postalCode,
      "addressCountry": siteConfig.contact.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.8373,
      "longitude": -73.8476
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bronx",
        "containedInPlace": {
          "@type": "State",
          "name": "New York"
        }
      },
      ...siteConfig.serviceArea.neighborhoods.map((neighborhood) => ({
        "@type": "Place",
        "name": `${neighborhood}, Bronx, NY`
      }))
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      siteConfig.socials.facebook,
      siteConfig.socials.twitter,
      siteConfig.socials.instagram
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
