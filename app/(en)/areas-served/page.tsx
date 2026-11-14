import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, MapPin, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import { localizedAlternates, englishSocialMetadata } from "@/config/localized-routes";

export const metadata = {
  title: { absolute: "Areas Served in the Bronx | Emergency Locksmith" },
  description:
    "We serve the Bronx from Wakefield and Woodlawn to Mott Haven, and from Riverdale to City Island. Call to confirm availability for your address.",
  alternates: localizedAlternates("/areas-served/"),

  ...englishSocialMetadata("/areas-served/", "Areas Served in the Bronx | Emergency Locksmith", "We serve the Bronx from Wakefield and Woodlawn to Mott Haven, and from Riverdale to City Island. Call to confirm availability for your address."),
};

export default function AreasServedPage() {

  const regions = [
    {
      name: "East Bronx",
      color: "border-brand-yellow",
      areas: ["Castle Hill", "Parkchester", "Pelham Bay", "Throggs Neck", "Clason Point", "Soundview", "Country Club"],
      desc: "Mobile locksmith service requests are taken in this Bronx region. Call with your address to confirm current availability, a non-guaranteed arrival estimate, and the price for the agreed scope."
    },
    {
      name: "South Bronx",
      color: "border-red-500",
      areas: ["Mott Haven", "Melrose", "Port Morris", "Hunts Point", "Morrisania", "Concourse", "Longwood"],
      desc: "Mobile locksmith service requests are taken in this Bronx region. Call with your address to confirm current availability, a non-guaranteed arrival estimate, and the price for the agreed scope."
    },
    {
      name: "West Bronx",
      color: "border-blue-500",
      areas: ["Riverdale", "Kingsbridge", "Highbridge", "Morris Heights", "University Heights", "Spuyten Duyvil", "Marble Hill"],
      desc: "Mobile locksmith service requests are taken in this Bronx region. Call with your address to confirm current availability, a non-guaranteed arrival estimate, and the price for the agreed scope."
    },
    {
      name: "Central Bronx",
      color: "border-green-500",
      areas: ["Fordham", "Belmont (Arthur Ave)", "Tremont", "West Farms", "Crotona Park", "Mount Hope"],
      desc: "Mobile locksmith service requests are taken in this Bronx region. Call with your address to confirm current availability, a non-guaranteed arrival estimate, and the price for the agreed scope."
    },
    {
      name: "North Bronx",
      color: "border-purple-500",
      areas: ["Woodlawn", "Wakefield", "Williamsbridge", "Baychester", "Eastchester", "Co-op City", "Norwood", "Bedford Park"],
      desc: "Mobile locksmith service requests are taken in this Bronx region. Call with your address to confirm current availability, a non-guaranteed arrival estimate, and the price for the agreed scope."
    },
  ];

  const contentSections = [
    {
      heading: "Mobile Service Throughout the Bronx",
      paragraphs: [
        `Emergency Locksmith Bronx provides mobile locksmith service throughout the Bronx from a centralized dispatching center at ${siteConfig.contact.address}. The address is a dispatch base, not a walk-in storefront.`,
        "The owner reports an average arrival time of approximately 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. This is a reported average, not a guarantee; location, traffic, and current availability can affect an individual estimate.",
        "Call with your Bronx address and service details to speak with a real locksmith, confirm current availability, and receive an estimated arrival time and upfront price."
      ]
    },
    {
      heading: "Share Address and Lock Details",
      paragraphs: [
        "Lock and building access arrangements vary. Share the address and any lock or door details you know so the locksmith can confirm current availability and discuss the requested scope.",
        "Some buildings may have their own access arrangements or master-key systems. If relevant, contact building management and share any instructions with the locksmith when calling.",
        "For electronic or smart-lock requests, share the lock brand and model if known. Compatibility and availability depend on the specific device; confirm the service and price before dispatch.",
      ]
    },
    {
      heading: "Commercial Property Requests",
      paragraphs: [
        "For a commercial lock or access issue, share the business address and describe the door, lock, and requested work. The locksmith can confirm current availability, what information is needed, and the upfront price for the agreed scope.",
        "Commercial doors and hardware vary by business and property. Call with the details to discuss whether the requested service is available and confirm scope and price before dispatch.",
        "For a managed or commercial property, share relevant access instructions and confirm whether an owner, manager, or other authorized contact should be involved.",
      ]
    },
    {
      heading: "Confirm Coverage for Your Address",
      paragraphs: [
        "Mobile service is provided throughout the Bronx, including City Island. There is no extra charge solely because an address is elsewhere in the Bronx. Call to confirm current availability and a non-guaranteed arrival estimate.",
        "For addresses near a borough boundary or in a managed property, call with the exact location and access details. Confirm current availability, a non-guaranteed arrival estimate, and the price for the agreed work.",
        "There is no additional charge based solely on which Bronx address you provide. The total for the agreed work is confirmed upfront; any change in scope or price is explained and approved before additional work begins."
      ]
    },
  ];

  const faqs = [
    {
      q: "Do you charge extra for neighborhoods that are farther from the center of the Bronx?",
      a: "There is no additional charge based solely on a service address anywhere in the Bronx. The price for the requested work is confirmed upfront before dispatch; scope changes are discussed before additional work."
    },
    {
      q: "What is the typical arrival time?",
      a: "The owner reports an average of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. This is not guaranteed. Traffic, location, and current availability affect the estimate, so call with your address for the current arrival time."
    },
    {
      q: "Are you available for service calls in Marble Hill?",
      a: "Marble Hill is within the Bronx mobile service area. There is no extra charge solely because a service address is elsewhere in the Bronx; call to confirm current availability, an arrival estimate, and the price for the agreed work."
    },
    {
      q: "Do you serve large apartment complexes like Co-op City?",
      a: "Mobile service is offered throughout the Bronx, including Co-op City. Call to confirm availability and share any building-specific access instructions; the price is confirmed upfront and no fee applies solely because the address is elsewhere in the Bronx."
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Hero */}
        <section className="bg-zinc-900 border-b border-zinc-800 py-16 lg:py-24" aria-label="Areas served page header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Full Bronx Coverage</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold uppercase tracking-tight">
              Bronx Neighborhoods We Serve
            </h1>
            <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Mobile locksmith service is available throughout the Bronx. There is no extra charge based solely on a Bronx address. Hours: {siteConfig.hours.display}. Call with your location to confirm current availability and the arrival estimate.
            </p>
          </div>
        </section>

        {/* Neighborhood grid + booking form */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Bronx neighborhood coverage map">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-serif font-bold uppercase">Mobile Service Across Bronx Regions</h2>
                <div className="h-1 w-20 bg-brand-yellow rounded" aria-hidden="true" />
                <p className="text-zinc-400 font-sans text-sm leading-relaxed">
                  The centralized dispatching center is at <strong className="text-zinc-200">{siteConfig.contact.address}</strong>. Service is mobile throughout the Bronx; there is no extra fee based solely on your Bronx address.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {regions.map((region, idx) => (
                  <div key={idx} className={`border-l-4 ${region.color} bg-zinc-900/40 border border-zinc-800 p-6 rounded-lg space-y-4`}>
                    <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-brand-yellow shrink-0" aria-hidden="true" />
                      <span>{region.name}</span>
                    </h3>
                    <p className="text-zinc-500 font-sans text-xs leading-relaxed">{region.desc}</p>
                    <ul className="grid grid-cols-2 gap-1.5 text-zinc-400 font-sans text-xs pt-1">
                      {region.areas.map((area, aidx) => (
                        <li key={aidx} className="flex items-center gap-1.5">
                          <CheckCircle className="h-3 w-3 text-brand-yellow shrink-0" aria-hidden="true" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center sticky top-8">
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Deep Content */}
        <section className="bg-zinc-900/40 border-y border-zinc-900 py-20" aria-label="Coverage and capability details">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <article className="lg:col-span-8 space-y-12">
                {contentSections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase border-l-4 border-brand-yellow pl-4 leading-snug">
                      {sec.heading}
                    </h2>
                    <div className="space-y-4 text-zinc-300 font-sans text-base leading-relaxed">
                      {sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  </div>
                ))}

                {/* FAQs */}
                <div className="space-y-5 pt-4">
                  <h2 className="text-2xl font-serif font-bold text-white uppercase border-l-4 border-brand-yellow pl-4">
                    Coverage — Frequently Asked Questions
                  </h2>
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg space-y-2">
                      <h3 className="font-serif font-bold text-brand-yellow text-base flex gap-2 items-start">
                        <HelpCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{faq.q}</span>
                      </h3>
                      <p className="text-zinc-400 text-sm font-sans pl-7 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </article>

              <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Emergency contact">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
                  <h3 className="font-serif font-bold text-brand-yellow text-sm uppercase tracking-wider">Need Help Right Now?</h3>
                  <p className="text-zinc-400 text-xs font-sans">A real locksmith answers calls. Hours: {siteConfig.hours.display}. Call to confirm current availability.</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-5 py-3 rounded transition-all whitespace-nowrap text-sm w-full justify-center"
                    aria-label={`Call our emergency locksmith line at ${siteConfig.contact.phoneDisplay}`}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>Call {siteConfig.contact.phoneDisplay}</span>
                  </a>
                  <Link
                    href="/24-hour-emergency-locksmith-bronx"
                    className="inline-flex items-center gap-2 border border-zinc-700 hover:border-brand-yellow text-zinc-300 hover:text-brand-yellow font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded transition-all w-full justify-center"
                    aria-label="Go to the emergency locksmith hub for all emergency services"
                  >
                    <span>View emergency Locksmith Hub</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

