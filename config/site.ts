/**
 * Single source of truth for business details used in metadata, structured data,
 * the footer, and llms.txt. See docs/seo-verification-checklist.md for evidence
 * notes and remaining verification.
 */
export const siteConfig = {
  name: "Emergency Locksmith Bronx",
  description:
    "Mobile locksmith service throughout the Bronx. A real locksmith answers calls; call to confirm current availability, the agreed scope, upfront pricing, and a current arrival estimate. Standard hours are Monday–Thursday, 9 a.m.–5 p.m.; service is available 24 hours Friday–Sunday.",
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
    regular: "Monday–Thursday, 9:00 a.m.–5:00 p.m.",
    emergency: "Available 24 hours Friday–Sunday",
    display: "Mon–Thu 9 a.m.–5 p.m.; Fri–Sun 24 hours",
    openingHours: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "17:00" },
      { days: ["Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
    ],
  },
  dispatch: {
    baseAddressRole: "Centralized dispatching center; not represented as a walk-in storefront",
    serviceModel: "Mobile locksmith service throughout the Bronx",
    boroughAddressSurcharge: "No additional charge based solely on a service address anywhere in the Bronx",
    pricing: "Price confirmed upfront before dispatch; changes in scope are discussed before additional work",
  },
  arrival: {
    averageMinutes: 20,
    measurementPeriodDays: 90,
    mostCallsMinutes: "15–20",
    disclosure:
      "Owner-reported average arrival time is approximately 20 minutes based on the last 90 days; most emergency calls arrive in about 15–20 minutes. This is an average, not a guaranteed arrival time. Call to confirm the current estimate.",
  },
  credentials: {
    authority: "NYC Department of Consumer and Worker Protection (DCWP)",
    type: "NYC DCWP Locksmith License",
    status: "Active",
    publicNumberPolicy: "License number available upon request; not posted publicly to reduce impersonation and scam risk",
    verifyUrl:
      "https://www.nyc.gov/site/dca/businesses/license-checklist-locksmith.page",
  },
  insurance: {
    type: "General liability",
    coverageLimit: "up to $1,000,000",
  },
  staffing: {
    callsAnsweredBy: "A real locksmith",
    technicianScreening: "Backgrounds of all technicians are verified",
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
    authority: "NYC Department of Consumer and Worker Protection (DCWP)",
    verifyUrl:
      "https://www.nyc.gov/site/dca/businesses/license-checklist-locksmith.page",
  },
} as const;
