import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ServiceSchema from "@/components/ServiceSchema";
import { siteConfig } from "@/config/site";
import { Phone, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import { localizedAlternates, englishSocialMetadata } from "@/config/localized-routes";

export const metadata = {
  title: { absolute: "Automotive Locksmith Bronx | Car Keys & Lockouts" },
  description:
    "Mobile automotive locksmith requests in the Bronx. Call with your vehicle details to confirm whether the requested service is available and get upfront pricing. Call (646) 264-1901.",
  alternates: localizedAlternates("/automotive-locksmith-bronx/"),

  ...englishSocialMetadata("/automotive-locksmith-bronx/", "Automotive Locksmith Bronx | Car Keys & Lockouts", "Mobile automotive locksmith requests in the Bronx. Call with your vehicle details to confirm whether the requested service is available and get upfront pricing. Call (646) 264-1901."),
};

export default function AutomotivePillar() {
  const subServices = [
    {
      name: "Car Lockout Assistance",
      href: "/car-lockout-bronx",
      desc: "Call with the vehicle make, model, year, and location to confirm availability and discuss the proposed entry method.",
      cta: "View Car Lockout Information",
    },
    {
      name: "Lost Car Key Requests",
      href: "/lost-car-key-replacement-bronx",
      desc: "Vehicle key systems vary. Call with vehicle details to confirm whether the requested key service is available.",
      cta: "Ask About Vehicle Key Service",
    },
    {
      name: "Ignition or Broken Key Requests",
      href: "/ignition-repair-bronx",
      desc: "Describe the key or ignition problem to confirm current availability, proposed scope, and price.",
      cta: "View Ignition Service Information",
    },
    {
      name: "Key Fob Requests",
      href: "/car-key-fob-replacement-bronx",
      desc: "Compatibility depends on the vehicle and key system. Call with the make, model, and year to confirm.",
      cta: "Ask About Key Fob Service",
    },
  ];

  const faqs = [
    {
      q: "Can a locksmith replace a vehicle key without a dealership visit?",
      a: "Availability depends on the vehicle make, model, year, and key system. Call with those details to confirm whether the requested service is available, what information may be needed, and the upfront price."
    },
    {
      q: "How long does car lockout service take in the Bronx?",
      a: "The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes; this is not guaranteed. Work time depends on the vehicle and lock."
    },
    {
      q: "Is a mobile locksmith less expensive than a dealership?",
      a: "Costs and available services vary by vehicle and provider. Compare the full price and scope for the specific work, including any towing or other charges, before deciding."
    },
    {
      q: "What vehicle brands are covered for key replacement?",
      a: "Compatibility depends on the make, model, year, and requested service. Call with the vehicle details to confirm current availability before dispatch."
    },
    {
      q: "Can a broken key be removed from an ignition?",
      a: "Whether removal is possible and whether further work is needed depend on the vehicle and condition. Describe the issue when calling; the locksmith can discuss availability, proposed work, and price."
    },
  ];

  const contentSections = [
    {
      heading: "Vehicle Key and Lock Systems Vary",
      paragraphs: [
        "Vehicle locks and key systems differ by make, model, year, and trim. A replacement or repair request may not be supported for every vehicle, so share those details when you call.",
        "A real locksmith answers calls and asks relevant questions so the technician can be prepared with appropriate tools and parts. The requested service and price are confirmed before dispatch.",
      ]
    },
    {
      heading: "Mobile Service and Arrival Estimates",
      paragraphs: [
        "Mobile locksmith service is provided throughout the Bronx. Give the exact location or nearest intersection and vehicle details to confirm current availability.",
        "The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. These are owner-reported averages, not guarantees; traffic, access, weather, and availability can affect arrival.",
      ]
    },
    {
      heading: "What to Share Before Dispatch",
      paragraphs: [
        "When requesting automotive service, share the make, model, year, location, and a brief description of the issue. The locksmith can ask follow-up questions and explain whether the requested service is currently available.",
        "If you are unsure what information may be needed, ask when you call. Requirements can depend on the vehicle and circumstances; do not assume that a particular document or verification method applies in every case.",
      ]
    },
    {
      heading: "Confirm Scope and Price Before Work",
      paragraphs: [
        "Pricing depends on the vehicle and requested work. The price for the agreed scope is confirmed upfront before dispatch; if the scope changes, the proposed work and any price change are discussed before additional work begins.",
        "If you are comparing a locksmith with another option, compare the full cost and scope for the same requested service. No extra charge applies solely because the service address is elsewhere in the Bronx.",
      ]
    },
    {
      heading: "Questions About Licensing and Technician Screening",
      paragraphs: [
        "Emergency Locksmith Bronx reports an active NYC DCWP locksmith license; its number is available upon request and is not posted publicly. General liability coverage is up to $1 million, and the business reports that technician backgrounds are verified.",
        "You can ask who will perform the work, what the price includes, and whether any proposed change would affect the scope or price before authorizing additional work.",
      ]
    },
  ];

  return (
    <>
      <Header />

        <ServiceSchema
          name="Automotive Locksmith Services in the Bronx"
          description={metadata.description}
          url={`${siteConfig.url}/automotive-locksmith-bronx`}
        />

      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Hero */}
        <section className="relative bg-zinc-900 py-20 lg:py-28 border-b border-zinc-800" aria-label="Automotive locksmith services hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Automotive Locksmith Requests — The Bronx</span>
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  <span className="text-brand-yellow">Automotive Locksmith</span> Service in the Bronx
                </h1>
                <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed">
                  Modern vehicles use mechanical and electronic security systems. Whether you need help with a vehicle lockout, lost car keys, a jammed ignition, or a proximity fob, call to speak with a real locksmith and confirm availability. Hours: {siteConfig.hours.display}. Owner-reported average arrival time is about 20 minutes over the last 90 days; most emergency calls arrive in about 15–20 minutes, not as a guarantee.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-6 py-4 rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-yellow/15 whitespace-nowrap"
                    aria-label={`Call our automotive locksmith dispatch line at ${siteConfig.contact.phoneDisplay}`}
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    <span>Emergency Call: {siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Sub-services Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Automotive lock and key specialties">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl font-serif font-bold uppercase">Automotive Lock & Key Specialties</h2>
            <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
            <p className="text-zinc-400 font-sans text-sm">Mobile locksmith service throughout the Bronx. Share vehicle details and location to confirm whether the requested automotive work is currently available. Hours: {siteConfig.hours.display}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subServices.map((sub, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg flex flex-col justify-between hover:border-brand-yellow/30 transition">
                <div className="space-y-3">
                  <h3 className="text-lg font-serif font-bold text-white">{sub.name}</h3>
                  <p className="text-zinc-400 text-xs font-sans leading-relaxed">{sub.desc}</p>
                </div>
                <div className="pt-6 border-t border-zinc-800 mt-6">
                  <Link href={sub.href} className="inline-flex items-center gap-1.5 text-brand-yellow hover:text-brand-yellow-hover text-xs font-bold uppercase tracking-wider" aria-label={sub.cta}>
                    <span>{sub.cta}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Content */}
        <section className="bg-zinc-900/50 py-20 border-y border-zinc-900" aria-label="Automotive security expertise">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <article className="lg:col-span-8 space-y-12">
                {contentSections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase border-l-4 border-brand-yellow pl-4 leading-snug">{sec.heading}</h2>
                    <div className="space-y-4 text-zinc-300 font-sans text-base leading-relaxed">
                      {sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  </div>
                ))}
              </article>
              <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Automotive service highlights">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-5">
                  <h3 className="font-serif font-bold text-brand-yellow text-base uppercase tracking-wider">Automotive Service Information</h3>
                  <ul className="space-y-4 font-sans text-sm text-zinc-350">
                    {[
                      ["~20 Min Average", "Owner-reported for the last 90 days; actual arrival varies."],
                      ["Mobile Service", "Call with vehicle details to confirm current availability and whether the requested work can be done at the vehicle location."],
                      ["Vehicle Compatibility", "Compatibility depends on the make, model, year, and requested service; confirm before dispatch."],
                      ["Upfront Pricing", "Price confirmed for the agreed scope; discuss any change before additional work."],
                      ["Active NYC DCWP License", "Number available upon request; not publicly posted."],
                    ].map(([title, desc], i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                        <span><strong>{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-3">
                  <p className="text-zinc-500 text-xs font-sans">Locked out at night or stuck in an unfamiliar part of the Bronx?</p>
                  <Link href="/24-hour-emergency-locksmith-bronx" className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover font-bold font-sans text-xs uppercase tracking-widest" aria-label="Request emergency automotive locksmith assistance">
                    <span>Request Emergency Assistance Now</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" aria-label="Automotive locksmith frequently asked questions">
          <h2 className="text-3xl font-serif font-bold text-center uppercase tracking-wide">Automotive Locksmith — Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg space-y-2">
                <h3 className="font-serif font-bold text-brand-yellow text-lg flex gap-2">
                  <HelpCircle className="h-5 w-5 shrink-0 text-brand-yellow mt-0.5" aria-hidden="true" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-zinc-400 text-sm font-sans pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
