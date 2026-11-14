import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ServiceSchema from "@/components/ServiceSchema";
import { siteConfig } from "@/config/site";
import { Phone, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import { localizedAlternates, englishSocialMetadata } from "@/config/localized-routes";

export const metadata = {
  title: { absolute: "Commercial Locksmith Bronx | Office & Storefront Locks" },
  description:
    "Commercial locksmith requests in the Bronx. Call with the property and hardware details to confirm service availability, agreed scope, and upfront pricing.",
  alternates: localizedAlternates("/commercial-locksmith-bronx/"),

  ...englishSocialMetadata("/commercial-locksmith-bronx/", "Commercial Locksmith Bronx | Office & Storefront Locks", "Commercial locksmith requests in the Bronx. Call with the property and hardware details to confirm service availability, agreed scope, and upfront pricing."),
};

export default function CommercialPillar() {
  const subServices = [
    {
      name: "Office Lockout Requests",
      href: "/office-lockout-bronx",
      desc: "Call with the business location, lock details, and access instructions to confirm availability and price.",
      cta: "View Office Lockout Information",
    },
    {
      name: "Master Key System Requests",
      href: "/master-key-system-bronx",
      desc: "Describe the doors, existing hardware, and access needs to ask whether a project is available.",
      cta: "Ask About Master Key Projects",
    },
    {
      name: "Commercial Exit Device Requests",
      href: "/panic-bar-repair-bronx",
      desc: "Share the door and device information to confirm service availability and proposed scope.",
      cta: "View Exit Device Information",
    },
  ];

  const contentSections = [
    {
      heading: "Commercial Locks and Access Needs Vary",
      paragraphs: [
        "Offices, shops, warehouses, and other commercial properties use different doors, locks, and access arrangements. Share the property location, hardware details, and requested work when calling so the locksmith can confirm whether service is available.",
        "For commercial access projects, list the doors and the people or roles that need access. Ask what assessment or authorization may be needed and what the proposed scope includes.",
      ]
    },
    {
      heading: "Office and Business Lockout Requests",
      paragraphs: [
        "Describe the door, lock, business location, and any building-entry instructions. Access authorization or property procedures may vary; ask what information to have ready.",
        "The appropriate approach depends on the hardware and condition. Confirm the proposed work and upfront price for the agreed scope before dispatch.",
      ]
    },
    {
      heading: "Master Key and Key-Control Projects",
      paragraphs: [
        "If you are considering a master-key arrangement, share the existing locks, number of doors, and access needs. Compatibility and project scope depend on the hardware and property.",
        "Ask how key issuance, lost keys, and future changes would be addressed, and request a project-specific scope and price before approving work.",
      ]
    },
    {
      heading: "Commercial Exit Hardware and Compliance Questions",
      paragraphs: [
        "Exit devices and building requirements vary by door, property, and applicable code. This page does not determine whether a particular building or door complies with local regulations.",
        "For code or life-safety questions, consult the relevant building or fire-safety authority or a qualified code professional. If you need locksmith service, call with the device and door details to confirm availability and price.",
      ]
    },
    {
      heading: "Upfront Pricing and Current Availability",
      paragraphs: [
        "The price is confirmed upfront for the agreed scope before dispatch. If an assessment changes the scope, discuss the proposed work and any price change before additional work begins.",
        "A real locksmith answers calls and asks relevant questions so the dispatched technician can be prepared with appropriate tools and parts. Call to confirm current availability and a non-guaranteed arrival estimate.",
      ]
    },
  ];

  const faqs = [
    {
      q: "How soon can a commercial locksmith arrive?",
      a: "The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. This is not guaranteed; call for a current estimate. Completion time depends on the work requested."
    },
    {
      q: "Can you create or service a master key system?",
      a: "Call with the property, door, and existing hardware details to confirm whether the requested project is currently available. Ask for the proposed scope and price before approving work."
    },
    {
      q: "Are panic bars required in my building?",
      a: "Requirements depend on the occupancy, door, and applicable codes. This page does not provide a compliance determination; consult the relevant authority or a qualified code professional."
    },
    {
      q: "Can a lock be changed after a staff member leaves?",
      a: "Rekeying or replacement may be an option, depending on the lock and key system. Call with the hardware and access details to confirm availability, scope, and upfront price."
    },
    {
      q: "Which commercial lock grade should I choose?",
      a: "Suitability depends on the door, use, security needs, and product specifications. Ask a qualified provider to compare options for your specific application; confirm compatibility and price before purchase or installation."
    },
  ];

  return (
    <>
      <Header />

        <ServiceSchema
          name="Commercial Locksmith Services in the Bronx"
          description={metadata.description}
          url={`${siteConfig.url}/commercial-locksmith-bronx`}
        />

      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Hero */}
        <section className="relative bg-zinc-900 py-20 lg:py-28 border-b border-zinc-800" aria-label="Commercial locksmith services hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Commercial Locksmith Requests — The Bronx</span>
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Professional <span className="text-brand-yellow">Commercial Locksmith</span> Services in the Bronx
                </h1>
                <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed">
                  Commercial properties use different doors, locks, and access systems. Call with the address and requested work to speak with a real locksmith, confirm current availability, discuss the proposed scope, and receive an upfront price and non-guaranteed arrival estimate.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-6 py-4 rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-yellow/15 whitespace-nowrap"
                    aria-label={`Call our commercial locksmith dispatch line at ${siteConfig.contact.phoneDisplay}`}
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
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Commercial security specialties">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl font-serif font-bold uppercase">Commercial Security Specialties</h2>
            <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
            <p className="text-zinc-400 font-sans text-sm">Commercial lock and access requests for Bronx properties; call with hardware details to confirm current availability and scope.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <section className="bg-zinc-900/50 py-20 border-y border-zinc-900" aria-label="Commercial security expertise">
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
              <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Commercial service highlights">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-5">
                  <h3 className="font-serif font-bold text-brand-yellow text-base uppercase tracking-wider">Commercial Service Information</h3>
                  <ul className="space-y-4 font-sans text-sm text-zinc-350">
                    {[
                      ["Service Availability", "Call with property and hardware details to confirm whether the requested work is available."],
                      ["Current Availability", "Call to confirm service availability and an estimated arrival time."],
                      ["Code Questions", "Ask the relevant authority or qualified code professional about property compliance requirements."],
                      ["Project Scope", "Discuss access needs and existing hardware to confirm availability and a project-specific price."],
                      ["Upfront Pricing", "Price confirmed for the agreed scope before dispatch; any change is discussed before added work."],
                    ].map(([title, desc], i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                        <span><strong>{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-3">
                  <p className="text-zinc-500 text-xs font-sans">Need commercial locksmith service? Call to confirm current availability.</p>
                  <Link href="/24-hour-emergency-locksmith-bronx" className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover font-bold font-sans text-xs uppercase tracking-widest" aria-label="Request emergency commercial lockout assistance">
                    <span>Request Commercial Locksmith Service</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" aria-label="Commercial locksmith frequently asked questions">
          <h2 className="text-3xl font-serif font-bold text-center uppercase tracking-wide">Commercial Locksmith — Frequently Asked Questions</h2>
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


