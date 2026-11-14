/**
 * Single source of truth for the business details used across the site.
 *
 * Anything that appears in metadata, structured data, the footer, or llms.txt
 * should come from this file so the public record stays consistent. Before
 * changing a claim here, make sure the business can evidence it — see
 * docs/seo-verification-checklist.md.
 */
export const siteConfig = {
  name: "Emergency Locksmith Bronx",
  description:
    "24/7 emergency locksmith in the Bronx for home, apartment, office, and car lockouts, plus rekeying, smart locks, and key replacement. Call for a price and arrival window.",
  url: "https://www.emergencylocksmithbronx.com",
  contact: {
    phone: "+16462641901",
    phoneDisplay: "(646) 264-1901",
    email: "info@emergencylocksmithbronx.com",
    address: "1510 Castle Hill Ave, Bronx, NY 10462",
    street: "1510 Castle Hill Ave",
    city: "Bronx",
    region: "NY",
    postalCode: "10462",
    country: "US",
  },
  hours: {
    regular: "24 hours a day, 7 days a week",
    emergency: "24/7 emergency dispatch",
  },
  socials: {
    facebook: "https://facebook.com/emergencylocksmithbronx",
    twitter: "https://twitter.com/emergencylocksmithbx",
    instagram: "https://instagram.com/emergencylocksmithbronx",
  },
  serviceArea: {
    primary: "The Bronx, New York",
    neighborhoods: [
      "Castle Hill",
      "Parkchester",
      "Riverdale",
      "Mott Haven",
      "Pelham Bay",
      "Grand Concourse",
      "Fordham",
      "Co-op City",
      "Belmont",
      "City Island",
      "Wakefield",
      "Woodlawn",
      "Tremont",
      "Morris Park",
      "Throggs Neck",
      "Hunts Point",
      "Norwood",
      "Kingsbridge",
      "Soundview",
      "Highbridge",
    ],
  },
  licensing: {
    // NYC requires a locksmith license. Keep the public claim factual and point
    // customers to the official DCWP page so they can verify it themselves.
    authority: "NYC Department of Consumer and Worker Protection (DCWP)",
    verifyUrl:
      "https://www.nyc.gov/site/dca/businesses/license-checklist-locksmith.page",
  },
} as const;
