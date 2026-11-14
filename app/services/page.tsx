import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import { siteConfig } from "@/config/site";
import { Phone, ArrowRight, Key, HelpCircle, CheckCircle } from "lucide-react";

export const metadata = {
  title: { absolute: "Bronx Locksmith Service Requests | Mobile Service" },
  description:
    "Explore common residential, automotive, commercial, and specialty locksmith requests in the Bronx. Call to confirm availability, agreed scope, and upfront pricing.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  const categories = [
    {
      name: "Automotive Locksmith",
      href: "/automotive-locksmith-bronx",
      pillarLabel: "View Automotive Request Information",
      icon: "🚗",
      desc: "Automotive service requests may involve a lockout, lost key, ignition, or key fob. Vehicle compatibility and available work depend on the make, model, and year; share those details so a real locksmith can confirm current availability and the upfront price for the agreed scope.",
      subs: [
        { name: "Car Lockout Requests", href: "/car-lockout-bronx", label: "View car lockout request information" },
        { name: "Lost Car Key Requests", href: "/lost-car-key-replacement-bronx", label: "View lost car key request information" },
        { name: "Ignition and Broken-Key Requests", href: "/ignition-repair-bronx", label: "View ignition request information" },
        { name: "Key Fob Requests", href: "/car-key-fob-replacement-bronx", label: "View key fob request information" },
      ]
    },
    {
      name: "Residential Locksmith",
      href: "/residential-locksmith-bronx",
      pillarLabel: "View Residential Request Information",
      icon: "🏠",
      desc: "Residential service requests include home or apartment lockouts, rekeying, and smart-lock work. Lock and door details vary; call to confirm current availability, compatibility, and the upfront price for the agreed scope.",
      subs: [
        { name: "Home Lockout Requests", href: "/home-lockout-bronx", label: "View home lockout request information" },
        { name: "Apartment Lockout Requests", href: "/apartment-lockout-bronx", label: "View apartment lockout request information" },
        { name: "Rekeying Requests", href: "/lock-rekeying-bronx", label: "View rekeying request information" },
        { name: "Smart Lock Requests", href: "/smart-lock-installation-bronx", label: "View smart lock request information" },
      ]
    },
    {
      name: "Commercial Locksmith",
      href: "/commercial-locksmith-bronx",
      pillarLabel: "View Commercial Request Information",
      icon: "🏢",
      desc: "Commercial service requests may involve office or business lockouts, master-key work, and panic-bar repairs. Requirements and compatibility depend on the door and hardware; call to discuss the requested work, current availability, and price.",
      subs: [
        { name: "Office Lockout Requests", href: "/office-lockout-bronx", label: "View office lockout request information" },
        { name: "Master Key Project Requests", href: "/master-key-system-bronx", label: "View master key project information" },
        { name: "Commercial Exit-Device Requests", href: "/panic-bar-repair-bronx", label: "View commercial exit-device request information" },
      ]
    },
    {
      name: "Specialty Locksmith",
      href: "/specialty-locksmith-bronx",
      pillarLabel: "View Specialty Request Information",
      icon: "💼",
      desc: "Specialty requests may involve safes, mailbox or cabinet locks, and related hardware. The method depends on the lock and condition; call to discuss and confirm availability.",
      subs: [
        { name: "Safe Service Requests", href: "/safe-unlocking-bronx", label: "View safe-service request information" },
        { name: "Mailbox Lock Requests", href: "/mailbox-lockout-bronx", label: "View mailbox lock request information" },
      ]
    }
  ];

  const contentSections = [
    {
      heading: "How Our Service Categories Are Structured",
      paragraphs: [
        "The site groups locksmith requests into automotive, residential, commercial, and specialty categories. The linked pages explain what information to share when calling; availability and compatibility depend on the specific job.",
        "Requests may concern vehicle access or keys; residential lockouts, rekeying, or smart locks; commercial locks or access; and specialty hardware such as safes or mailboxes. Call to confirm whether a particular service is currently available for your lock or vehicle.",
        "A real locksmith answers calls and asks about the lock or vehicle so the dispatched technician can be prepared with appropriate tools and parts. Hours are Monday–Thursday, 9 a.m.–5 p.m., and Friday–Sunday, 24 hours. The owner-reported average arrival is about 20 minutes over the last 90 days, with most emergency calls about 15–20 minutes; this is not guaranteed."
      ]
    },
    {
      heading: "Preparing for a Service Call",
      paragraphs: [
        "A real locksmith answers calls and asks about the lock or vehicle, the location, and what happened. Those details help prepare the dispatched technician with the tools and parts needed for that job.",
        "The exact requirements depend on the lock, vehicle, and service. During the call, confirm current availability, the proposed work, and the price for the agreed scope before dispatch.",
        "If a job may require a replacement lock, key, or other part, ask whether the required item is available for your specific situation before dispatch."
      ]
    },
    {
      heading: "How to Know Which Service You Need",
      paragraphs: [
        "If you are unsure which request type applies, describe what is locked, the lock or vehicle details, and the outcome you need. A real locksmith can ask follow-up questions and explain whether service is available.",
        "Vehicle requests may involve a lockout, lost key, broken key, ignition, or remote. Compatibility and availability depend on the make, model, year, and condition; share those details when calling.",
        "Residential requests may involve a home or apartment lock, rekeying, or smart lock. Commercial requests may involve an office door, business lock, or access project. Specialty requests may involve a safe, mailbox, or cabinet lock. Describe the details and confirm current availability before dispatch."
      ]
    },
    {
      heading: "Planning a Locksmith Request",
      paragraphs: [
        "Some requests may be planned in advance rather than treated as an emergency. Call to confirm whether the requested work is available and discuss a suitable appointment time.",
        "A real locksmith asks about the lock, vehicle, and location so the technician can be prepared with appropriate tools and parts. Confirm the agreed scope and upfront price before dispatch.",
        "For requests involving multiple units or properties, describe the doors, hardware, and access needs when calling. Confirm availability, the proposed scope, and price before scheduling work.",
      ]
    },
  ];

  const faqs = [
    {
      q: "Which service handles a car key that is locked inside the vehicle?",
      a: "A car key locked inside a vehicle is an automotive lockout request. Call with the vehicle make, model, year, and location to confirm current availability, the proposed approach, and the upfront price."
    },
    {
      q: "Can rekeying be done for a whole apartment building at once?",
      a: "For a multi-unit rekey request, share the number of doors or cylinders and any known key-system details. The locksmith can confirm whether the requested scope is available and provide an upfront price before dispatch."
    },
    {
      q: "Is a consultation available before committing to a full master key system installation?",
      a: "For a master-key project, describe the building and requested scope when calling. The locksmith can explain what information or assessment is needed and confirm availability and pricing before dispatch."
    },
    {
      q: "Can the same technician return for a follow-up if there is a problem after the service?",
      a: "If you have a concern after service, contact the business to discuss the situation and possible next steps. Any additional work and its price should be explained before it begins."
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Hero */}
        <section className="bg-zinc-900 border-b border-zinc-800 py-16 lg:py-24" aria-label="Services overview hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Common Bronx Locksmith Requests</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold uppercase tracking-tight">
              Locksmith Service Requests in the Bronx
            </h1>
            <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Mobile locksmith service throughout the Bronx. Hours: {siteConfig.hours.display}. Call with your request details to confirm current availability, the agreed scope, upfront price, and a non-guaranteed arrival estimate.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-6 py-3.5 rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-yellow/15 whitespace-nowrap"
                aria-label={`Call Emergency Locksmith Bronx at ${siteConfig.contact.phoneDisplay}`}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>Call: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Locksmith service categories">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg space-y-6 hover:border-brand-yellow/30 transition shadow-xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl" aria-hidden="true">{cat.icon}</span>
                    <h2 className="text-2xl font-serif font-bold text-white">{cat.name}</h2>
                  </div>
                  <p className="text-zinc-400 font-sans text-sm leading-relaxed">{cat.desc}</p>
                </div>

                <div className="h-px bg-zinc-800" aria-hidden="true" />

                <ul className="space-y-3">
                  {cat.subs.map((sub, sidx) => (
                    <li key={sidx} className="flex justify-between items-center group">
                      <Link
                        href={sub.href}
                        className="text-zinc-300 hover:text-brand-yellow transition-colors font-sans text-sm flex items-center gap-2"
                        aria-label={sub.label}
                      >
                        <Key className="h-4 w-4 text-brand-yellow/50 shrink-0" aria-hidden="true" />
                        <span>{sub.name}</span>
                      </Link>
                      <ArrowRight className="h-3 w-3 text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-zinc-800">
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 text-brand-yellow hover:text-brand-yellow-hover text-xs font-bold uppercase tracking-wider group"
                    aria-label={cat.pillarLabel}
                  >
                    <span>{cat.pillarLabel}</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Content */}
        <section className="bg-zinc-900/40 border-y border-zinc-900 py-20" aria-label="Services detailed information">
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
                  <h2 className="text-2xl font-serif font-bold text-white uppercase border-l-4 border-brand-yellow pl-4">Services — Frequently Asked Questions</h2>
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

              <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Service commitment sidebar">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-5">
                  <h3 className="font-serif font-bold text-brand-yellow text-sm uppercase tracking-wider">Confirmed Service Information</h3>
                  <ul className="space-y-4 font-sans text-sm text-zinc-300">
                    {[
                      ["Real Locksmith Answers", "Job-specific questions help prepare the technician with needed tools and parts."],
                      ["~20 Min Average", "Owner-reported over the last 90 days; actual arrival varies and is not guaranteed."],
                      ["Entry Approach", "Method depends on the lock and condition; ask what is proposed before work begins."],
                      ["Upfront Pricing", "Total confirmed for the agreed scope; any change is discussed before additional work."],
                      ["Active NYC DCWP License", "License number available upon request; general liability coverage is up to $1,000,000."],
                    ].map(([title, desc], i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                        <span><strong>{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ServicesGrid component */}
        <ServicesGrid />

      </main>
      <Footer />
    </>
  );
}
