import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ServiceSchema from "@/components/ServiceSchema";
import { siteConfig } from "@/config/site";
import { Phone, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: { absolute: "Residential Locksmith Bronx | Home & Apartment Locks" },
  description:
    "Residential locksmith in the Bronx for home and apartment lockouts, rekeying, and smart lock installation. Call (646) 264-1901 for a price and arrival window.",
  alternates: { canonical: "/residential-locksmith-bronx/" },
};

export default function ResidentialPillar() {
  const subServices = [
    {
      name: "Home Lockout Assistance",
      href: "/home-lockout-bronx",
      desc: "Call with the door and lock details to ask whether entry service is available and discuss the proposed approach.",
      cta: "View Home Lockout Information",
    },
    {
      name: "Apartment Lockout Support",
      href: "/apartment-lockout-bronx",
      desc: "Describe the lock, building access, and location so the locksmith can confirm availability and explain the agreed scope.",
      cta: "View Apartment Lockout Information",
    },
    {
      name: "Lock Rekeying Service",
      href: "/lock-rekeying-bronx",
      desc: "Ask whether rekeying or another option fits your lock; compatibility and price depend on the hardware.",
      cta: "Learn About Rekeying Options",
    },
    {
      name: "Smart Lock Installation",
      href: "/smart-lock-installation-bronx",
      desc: "Share the door and existing hardware details to confirm whether a selected smart lock is suitable and available.",
      cta: "Check Smart Lock Compatibility",
    },
  ];

  const contentSections = [
    {
      heading: "Residential Locks and Doors Vary",
      paragraphs: [
        "Homes and apartments can have different doors, lock types, and existing hardware. When calling, describe the lock and door as best you can, along with the location and the help you need. A real locksmith can ask follow-up questions and confirm whether the requested service is available.",
        "If you are unsure what kind of lock you have, a photo or the brand and model information may help explain the situation. Do not remove hardware or force the door while waiting if doing so could cause injury or damage.",
      ]
    },
    {
      heading: "Discussing a Home or Apartment Lockout",
      paragraphs: [
        "The method used to address a lockout depends on the lock, door, and condition. Before work begins, ask what approach is proposed, whether damage is possible, what the agreed scope includes, and what it will cost.",
        "If a person is in immediate danger, contact emergency services. Otherwise, call to confirm current service availability and a non-guaranteed arrival estimate for your location.",
      ]
    },
    {
      heading: "Rekeying and Lock Replacement Are Different Options",
      paragraphs: [
        "Rekeying changes which key operates compatible existing hardware; replacement changes some or all of the lock hardware. Which option is suitable depends on the lock and its condition. Ask the locksmith to explain available options and the price for the agreed work before dispatch.",
        "If a key is lost, stolen, or may be accessible to someone who should not have it, mention that when calling. The locksmith can discuss whether rekeying or replacement is available for the specific lock.",
      ]
    },
    {
      heading: "Moving Into a New Home",
      paragraphs: [
        "After moving, some residents choose to review who may have keys to the home. If you are renting, check your lease or ask building management before authorizing changes to locks or door hardware.",
        "Share the lock type and number of doors when calling. The locksmith can confirm whether the requested work is available and provide the upfront price for the agreed scope.",
      ]
    },
    {
      heading: "Smart Lock Compatibility Depends on the Door",
      paragraphs: [
        "Smart locks vary by model and may not fit every door or existing lock. Door dimensions, lock type, power source, and any building or lease requirements may affect compatibility.",
        "Before purchasing or scheduling installation, share the door and hardware details and the product model. Confirm availability, compatibility, the proposed work, and price before dispatch.",
      ]
    },
  ];

  const faqs = [
    {
      q: "What is the difference between rekeying and replacing a lock?",
      a: "Rekeying changes which key operates compatible existing hardware; replacement changes some or all of the hardware. Suitability depends on the lock and its condition. Ask what options are available and confirm the scope and price before work begins."
    },
    {
      q: "Can a high-security lock be opened without drilling?",
      a: "That depends on the lock and its condition. Ask the locksmith to explain the proposed approach, possible risks, and alternatives before agreeing to work."
    },
    {
      q: "Can a smart lock be installed on my apartment door?",
      a: "Compatibility depends on the door, existing hardware, and selected model. If you rent, check any applicable lease or building requirements. Call with the details to confirm availability and price."
    },
    {
      q: "How long does a residential lockout take?",
      a: "The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes; this is not guaranteed. Work-completion time is separate and depends on the lock and situation."
    },
    {
      q: "Should I rekey a lock after moving?",
      a: "Some residents choose to review key access after moving. Whether rekeying is suitable depends on the hardware; renters should check applicable lease or building requirements. Call to discuss availability and upfront pricing."
    },
  ];

  return (
    <>
      <Header />

        <ServiceSchema
          name="Residential Locksmith Services in the Bronx"
          description={metadata.description}
          url={`${siteConfig.url}/residential-locksmith-bronx`}
        />

      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Hero */}
        <section className="relative bg-zinc-900 py-20 lg:py-28 border-b border-zinc-800" aria-label="Residential locksmith services hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Residential Locksmith Experts — The Bronx</span>
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Professional <span className="text-brand-yellow">Residential Locksmith</span> Services in the Bronx
                </h1>
                <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed">
                  The Bronx has pre-war mortise locks, modern deadbolts, and smart lock systems. For a home lockout, rekey, or smart lock installation, call to speak with a real locksmith and confirm current availability. Hours: {siteConfig.hours.display}. Owner-reported average arrival time is about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes; this is not a guaranteed arrival time.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-6 py-4 rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-yellow/15 whitespace-nowrap"
                    aria-label={`Call our residential locksmith dispatch line at ${siteConfig.contact.phoneDisplay}`}
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
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Residential lock and key specialties">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl font-serif font-bold uppercase">Residential Lock & Key Specialties</h2>
            <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
            <p className="text-zinc-400 font-sans text-sm">Home security services for every Bronx housing type — from pre-war apartments to new smart-lock-ready homes.</p>
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
        <section className="bg-zinc-900/50 py-20 border-y border-zinc-900" aria-label="Residential security expertise">
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
              <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Residential service highlights">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-5">
                  <h3 className="font-serif font-bold text-brand-yellow text-base uppercase tracking-wider">Why Bronx Residents Choose Us</h3>
                  <ul className="space-y-4 font-sans text-sm text-zinc-350">
                    {[
                      ["Active NYC DCWP License", "License number available upon request; not publicly posted."],
                      ["~20 Min Average", "Owner-reported for the last 90 days; not a guarantee."],
                      ["No Bronx Address Surcharge", "No added charge solely because a service address is elsewhere in the Bronx."],
                      ["Service Availability", "Call with the lock and door details to confirm whether the requested service is available."],
                      ["Upfront Pricing", "Price is confirmed for the agreed scope before dispatch; changes are discussed before additional work."],
                    ].map(([title, desc], i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                        <span><strong>{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-3">
                  <p className="text-zinc-500 text-xs font-sans">Locked out at night or urgently need a rekey?</p>
                  <Link href="/24-hour-emergency-locksmith-bronx" className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover font-bold font-sans text-xs uppercase tracking-widest" aria-label="Request emergency residential locksmith assistance">
                    <span>Request Home Lockout Assistance Now</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" aria-label="Residential locksmith frequently asked questions">
          <h2 className="text-3xl font-serif font-bold text-center uppercase tracking-wide">Residential Locksmith — Frequently Asked Questions</h2>
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

