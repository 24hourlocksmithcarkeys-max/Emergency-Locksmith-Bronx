import { siteConfig } from "@/config/site";

export default function LocalBusinessSchema({ description = siteConfig.description }: { description?: string } = {}) {
  const schema = {
    "@context": "https://schema.org",
    // `Locksmith` is a specific LocalBusiness subtype; pairing it with
    // LocalBusiness keeps the entity unambiguous for search engines.
    "@type": ["Locksmith", "LocalBusiness"],
    "name": siteConfig.name,
    "description": description,
    "image": `${siteConfig.url}/images/hero_background.webp`,
    "@id": `${siteConfig.url}/#localbusiness`,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": siteConfig.credentials.type,
      "credentialCategory": "Professional license",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": siteConfig.credentials.authority,
      },
    "description":
      "Active locksmith license. The license number is available upon request and is intentionally omitted from public structured data.",
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bronx",
        "containedInPlace": {
          "@type": "State",
          "name": "New York",
        },
      },
      ...siteConfig.serviceArea.neighborhoods.map((neighborhood) => ({
        "@type": "Place",
        "name": `${neighborhood}, Bronx, NY`,
      })),
    ],
    "openingHoursSpecification": siteConfig.hours.openingHours.map(
      (schedule) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": schedule.days,
        "opens": schedule.opens,
        "closes": schedule.closes,
      }),
    ),
    "sameAs": [
      siteConfig.socials.facebook,
      siteConfig.socials.twitter,
      siteConfig.socials.instagram,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
