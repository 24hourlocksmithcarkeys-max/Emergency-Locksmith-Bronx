import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Award, Users, CheckCircle, Phone, ArrowRight, HelpCircle } from "lucide-react";
import { localizedAlternates, englishSocialMetadata } from "@/config/localized-routes";

export const metadata = {
  title: { absolute: "About Emergency Locksmith Bronx | Licensed Local Team" },
  description:
    "Who we are, how dispatch works, and what to expect from a Bronx locksmith visit, including how to verify our license before work begins.",
  alternates: localizedAlternates("/about-us/"),

  ...englishSocialMetadata("/about-us/", "About Emergency Locksmith Bronx | Licensed Local Team", "Who we are, how dispatch works, and what to expect from a Bronx locksmith visit, including how to verify our license before work begins."),
};

export default function AboutPage() {

  const contentSections = [
    {
      heading: "Mobile Service Across the Bronx",
      paragraphs: [
        `Emergency Locksmith Bronx provides mobile locksmith service throughout the Bronx from a centralized dispatching center at ${siteConfig.contact.address}; the address is not represented as a walk-in storefront. Call with details about the lock, vehicle, property, and location to confirm current availability.`,
        "Calls are answered by a real locksmith, who asks about the address, lock or vehicle, and situation. Those details help the locksmith prepare the technician with the tools and parts needed for the service call. The business reports that backgrounds of all technicians are verified.",
        "Building types, access arrangements, and travel conditions differ across the Bronx. Share the exact service address and any relevant access details when calling so the locksmith can confirm current availability and discuss an arrival estimate."
      ]
    },
    {
      heading: "A Locksmith Answers Your Call",
      paragraphs: [
        "A real locksmith answers the phone and asks relevant questions about the lock, vehicle, address, and circumstances. The information helps the locksmith identify what tools and parts may be needed so the technician can be dispatched prepared.",
        "The business reports that backgrounds of all technicians are verified. The locksmith can discuss service details, current availability, upfront pricing, and the estimated arrival time before dispatch."
      ]
    },
    {
      heading: "NYC DCWP Locksmith License",
      paragraphs: [
        "Emergency Locksmith Bronx reports that its NYC Department of Consumer and Worker Protection (DCWP) locksmith license is active. The license number is available upon request, but is intentionally not posted publicly because of the risk of impersonation and scams.",
        "Customers may ask the business for its license number and consult NYC DCWP's official locksmith licensing information. The public site and structured data do not expose the license number."
      ]
    },
    {
      heading: "Upfront Price for the Agreed Scope",
      paragraphs: [
        "Before agreeing to locksmith service, ask for the total price for the requested work and what the quote includes. If additional work is proposed, ask for the scope and price change before deciding whether to proceed.",
        "Emergency Locksmith Bronx confirms the upfront price for the agreed scope before dispatch. If the scope changes, the proposed work and price are explained before additional work begins.",
        "The business also confirms that it does not add a charge solely because a customer's service address is elsewhere in the Bronx. The price for the requested work is confirmed upfront; changes to the agreed scope are discussed before extra work begins."
      ]
    },
    {
      heading: "The Proposed Approach Depends on the Situation",
      paragraphs: [
        "The appropriate entry approach depends on the lock, door, and condition. Ask the locksmith to explain the proposed method and any relevant risks before work begins.",
        "The locksmith can discuss available options after learning about or assessing the lock. Do not assume that a specific method will work for every lock or situation.",
        "If a method may damage the lock or require replacement, ask the locksmith to explain the proposal and price before proceeding.",
      ]
    },
  ];

  const faqs = [
    {
      q: "Where is Emergency Locksmith Bronx based?",
      a: "1510 Castle Hill Ave is the centralized dispatching center, not a walk-in storefront. Mobile locksmith service is provided throughout the Bronx; call to confirm current availability."
    },
    {
      q: "Are technician backgrounds verified?",
      a: "The business reports that backgrounds of all technicians are verified. A real locksmith answers calls and gathers service details before dispatch."
    },
    {
      q: "What happens if a technician damages something during a service call?",
      a: "The business reports general liability insurance coverage of up to $1,000,000. Coverage terms depend on the policy; contact the business for information relevant to a specific situation."
    },
    {
      q: "Can Emergency Locksmith Bronx provide a letter or invoice for insurance purposes?",
      a: "Ask the locksmith about receipt or invoice availability for your specific service before dispatch."
    },
    {
      q: "Do you serve commercial accounts differently from individual residential calls?",
      a: "For recurring commercial locksmith needs, contact the business to discuss the requested service, current availability, and pricing. The scope and price are confirmed before dispatch."
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Page Hero */}
        <section className="bg-zinc-900 border-b border-zinc-800 py-16 lg:py-24" aria-label="About us page header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Who We Are</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold uppercase tracking-tight">
              About Emergency Locksmith Bronx
            </h1>
            <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              An active NYC DCWP-licensed locksmith business providing mobile service throughout the Bronx, with a real locksmith answering calls and confirming upfront pricing.
            </p>
          </div>
        </section>

        {/* What Sets Us Apart — Quick Stats */}
        <section className="bg-brand-yellow text-zinc-950 py-10 border-y border-yellow-400" aria-label="Company highlights">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["~20 Minutes", "Owner-reported average over last 90 days"],
              ["15–20 Minutes", "Most emergency calls, reported"],
              ["Active", "NYC DCWP locksmith license"],
              ["Up to $1M", "General liability coverage"],
            ].map(([stat, label], i) => (
              <div key={i} className="space-y-1">
                <p className="font-serif font-extrabold text-2xl sm:text-3xl">{stat}</p>
                <p className="font-sans text-xs uppercase tracking-wider text-zinc-700">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Content + Sidebar */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="About us detailed information">
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
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase border-l-4 border-brand-yellow pl-4">
                  About Us — Frequently Asked Questions
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

            <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Company trust signals and contact">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-5">
                <h3 className="font-serif font-bold text-brand-yellow text-sm uppercase tracking-wider">What Sets Our Service Apart</h3>
                <ul className="space-y-4 font-sans text-sm text-zinc-300">
                  {[
                    ["Active NYC DCWP License", "License number available upon request; not publicly posted."],
                    ["Verified Backgrounds", "The business reports verifying the backgrounds of all technicians."],
                    ["Non-Destructive Entry", "Picking tools only — no unnecessary drilling, scratching, or damage."],
                    ["Upfront Pricing", "The quoted rate is the final rate — no hidden additions after work begins."],
                    ["Bronx Dispatch Base", "1510 Castle Hill Ave is the centralized dispatching center; service is mobile throughout the Bronx."],
                    ["General Liability Insurance", "Owner-reported coverage limit of up to $1,000,000; policy terms apply."],
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                      <span><strong>{title}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
                <h3 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Contact Our Bronx Team</h3>
                <p className="text-zinc-400 text-xs font-sans">{siteConfig.contact.address}, Bronx, NY</p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-5 py-3 rounded transition-all whitespace-nowrap text-sm w-full justify-center"
                  aria-label={`Call Emergency Locksmith Bronx at ${siteConfig.contact.phoneDisplay}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border border-zinc-700 hover:border-brand-yellow text-zinc-300 hover:text-brand-yellow font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded transition-all whitespace-nowrap w-full justify-center"
                  aria-label="Browse locksmith request information"
                >
                  <span>Browse Request Information</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Dynamic Services display */}
        <ServicesGrid />

      </main>
      <Footer />
    </>
  );
}
