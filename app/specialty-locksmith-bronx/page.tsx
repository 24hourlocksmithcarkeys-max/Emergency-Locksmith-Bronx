import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ServiceSchema from "@/components/ServiceSchema";
import { siteConfig } from "@/config/site";
import { Phone, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: { absolute: "Specialty Locksmith Bronx | Safes, Mailboxes & More" },
  description:
    "Specialty locksmith requests in the Bronx. Call with details about the safe, mailbox, or lock to confirm whether service is available and get upfront pricing.",
  alternates: { canonical: "/specialty-locksmith-bronx/" },
};

export default function SpecialtyPillar() {
  const subServices = [
    {
      name: "Safe Service Requests",
      href: "/safe-unlocking-bronx",
      desc: "Call with the safe make, model, and issue to discuss availability, the proposed approach, and price.",
      cta: "Ask About Safe Service",
    },
    {
      name: "Mailbox Lock Requests",
      href: "/mailbox-lockout-bronx",
      desc: "Mailbox hardware and property procedures vary. Call to confirm availability and what information to have ready.",
      cta: "Ask About Mailbox Lock Service",
    },
  ];

  const contentSections = [
    {
      heading: "Specialty Lock Requests Depend on the Hardware",
      paragraphs: [
        "Safes, mailboxes, cabinets, and other specialty locks can use different hardware and access procedures. Share the make or model, the problem, and the service address when calling so the locksmith can ask relevant questions and confirm whether the requested work is available.",
        "Do not force a safe or lock if that could damage the contents or hardware. Ask what approach is proposed, whether damage is possible, and what the agreed scope will cost before work begins.",
      ]
    },
    {
      heading: "Safe Service: Share the Details First",
      paragraphs: [
        "Safe type, lock, condition, and access circumstances affect what options may be available. If known, have the make, model, and a description of the issue ready when you call.",
        "No particular opening method, completion time, or damage-free result can be promised without assessing the specific safe. Discuss the proposed work and price before authorizing service.",
      ]
    },
    {
      heading: "Mailbox Locks and Building Procedures",
      paragraphs: [
        "Mailbox panels and replacement hardware vary. In a multi-unit building, the owner, manager, or postal-service procedures may also affect who can request work and what information is needed.",
        "Check with building management when appropriate and describe the panel and lock when calling. Confirm availability, any required authorization, the proposed scope, and the price before dispatch.",
      ]
    },
    {
      heading: "Cabinet and Other Specialty Lock Requests",
      paragraphs: [
        "Cabinet, drawer, and furniture locks differ by model and condition. Explain what is locked, identify the hardware if possible, and ask whether the requested service is available.",
        "If the locksmith proposes a different scope after assessing the lock, ask for the revised price before any additional work begins.",
      ]
    },
    {
      heading: "Licensing, Insurance, and Upfront Pricing",
      paragraphs: [
        "Emergency Locksmith Bronx reports an active NYC DCWP locksmith license; its number is available upon request and is not posted publicly. General liability coverage is up to $1 million. Pricing is confirmed upfront for the agreed scope.",
        "The owner reports that backgrounds of all technicians are verified. Call to discuss current availability and a non-guaranteed arrival estimate for your address.",
      ]
    },
  ];

  const faqs = [
    {
      q: "Can a safe be opened without drilling?",
      a: "That depends on the safe, its lock, and its condition. Ask what approach is proposed, whether damage is possible, and what alternatives may be available before agreeing to work."
    },
    {
      q: "How long does mailbox lock replacement take?",
      a: "Time depends on the mailbox panel and lock. Call with the details to confirm availability, any authorization or information needed, and the upfront price."
    },
    {
      q: "Is safe service available at night?",
      a: "Hours are Monday–Thursday, 9 a.m.–5 p.m., and Friday–Sunday, 24 hours. Call to confirm current availability for your safe or specialty lock before dispatch."
    },
    {
      q: "Can a file cabinet lock be opened without damaging the cabinet?",
      a: "That depends on the cabinet and lock. Ask the locksmith to explain the proposed approach and possible risks, then confirm the agreed scope and price before work begins."
    },
    {
      q: "What should I know before requesting mailbox lock service?",
      a: "Mailbox hardware and building procedures vary. Check with the owner or building manager when appropriate, and call with panel details to confirm service availability and any information needed."
    },
  ];

  return (
    <>
      <Header />

        <ServiceSchema
          name="Specialty Locksmith Services in the Bronx"
          description={metadata.description}
          url={`${siteConfig.url}/specialty-locksmith-bronx`}
        />

      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Hero */}
        <section className="relative bg-zinc-900 py-20 lg:py-28 border-b border-zinc-800" aria-label="Specialty locksmith services hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Specialty Locksmith Requests — The Bronx</span>
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Specialized Safe, Mailbox <br />
                  <span className="text-brand-yellow">&amp; Cabinet Lock Services</span> in the Bronx
                </h1>
                <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed">
                  If you need safe, mailbox, or furniture lock service in the Bronx, call to describe the lock and location. The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes; these are not guaranteed. Current availability and pricing are confirmed before dispatch.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-6 py-4 rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-yellow/15 whitespace-nowrap"
                    aria-label={`Call our specialty locksmith dispatch line at ${siteConfig.contact.phoneDisplay}`}
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
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Specialty security services">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl font-serif font-bold uppercase">Our Specialty Security Services</h2>
            <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
            <p className="text-zinc-400 font-sans text-sm">Safe, mailbox, and cabinet lock requests; service availability and approach depend on the hardware and situation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
        <section className="bg-zinc-900/50 py-20 border-y border-zinc-900" aria-label="Specialty lock expertise">
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
              <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Specialty service highlights">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-5">
                  <h3 className="font-serif font-bold text-brand-yellow text-base uppercase tracking-wider">Specialty Service Information</h3>
                  <ul className="space-y-4 font-sans text-sm text-zinc-350">
                    {[
                      ["Safe Service", "Call with the make, model, and issue to confirm availability and discuss the proposed approach."],
                      ["Mailbox Locks", "Hardware and property procedures vary; confirm authorization, availability, and price by phone."],
                      ["Cabinet Locks", "Share the lock and cabinet details to confirm whether the requested work is available."],
                      ["Mobile Bronx Service", "Hours: Monday–Thursday, 9 a.m.–5 p.m.; Friday–Sunday, 24 hours. Call to confirm availability."],
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
                  <p className="text-zinc-500 text-xs font-sans">Safe locked? Mailbox cylinder failed? Need help now?</p>
                  <Link href="/24-hour-emergency-locksmith-bronx" className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover font-bold font-sans text-xs uppercase tracking-widest" aria-label="Request emergency specialty locksmith assistance">
                    <span>Request Emergency Specialty Lock Help Now</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" aria-label="Specialty locksmith frequently asked questions">
          <h2 className="text-3xl font-serif font-bold text-center uppercase tracking-wide">Specialty Services — Frequently Asked Questions</h2>
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


