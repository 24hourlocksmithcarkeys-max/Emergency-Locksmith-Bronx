import { siteConfig } from "@/config/site";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": `${siteConfig.url}/images/hero_background.webp`,
    "@id": `${siteConfig.url}/#localbusiness`,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1510 Castle Hill Ave",
      "addressLocality": "Bronx",
      "addressRegion": "NY",
      "postalCode": "10462",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.8373,
      "longitude": -73.8476
    },
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
