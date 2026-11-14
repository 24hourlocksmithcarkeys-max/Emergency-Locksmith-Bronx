import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ServiceSchema from "@/components/ServiceSchema";
import { siteConfig } from "@/config/site";
import { Phone, ArrowLeft, Shield, Clock, Zap, HelpCircle, ArrowRight, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";

interface RouteParams {
  subservice: string;
}

export async function generateStaticParams(): Promise<RouteParams[]> {
  return [
    { subservice: "car-lockout-bronx" },
    { subservice: "lost-car-key-replacement-bronx" },
    { subservice: "ignition-repair-bronx" },
    { subservice: "car-key-fob-replacement-bronx" },
    { subservice: "home-lockout-bronx" },
    { subservice: "apartment-lockout-bronx" },
    { subservice: "lock-rekeying-bronx" },
    { subservice: "smart-lock-installation-bronx" },
    { subservice: "office-lockout-bronx" },
    { subservice: "master-key-system-bronx" },
    { subservice: "panic-bar-repair-bronx" },
    { subservice: "safe-unlocking-bronx" },
    { subservice: "mailbox-lockout-bronx" },
  ];
}

interface ServiceSection {
  heading: string;
  paragraphs: string[];
}

interface ServiceFAQ {
  q: string;
  a: string;
}

interface RelatedLink {
  text: string;
  href: string;
  label: string;
}

interface SubServiceData {
  title: string;
  metaDesc: string;
  h1: string;
  heroDesc: string;
  pillarName: string;
  pillarHref: string;
  sections: ServiceSection[];
  faqs: ServiceFAQ[];
  relatedLinks: RelatedLink[];
}

/**
 * Editorial guides that answer the next question a visitor usually has.
 * Linking service pages to guides (and guides back to services) gives Google
 * a clear topical relationship and gives visitors somewhere useful to go.
 */
const guideLinksByService: Record<string, RelatedLink[]> = {
  "car-lockout-bronx": [
    {
      text: "Lost car keys: mobile locksmith vs dealership",
      href: "/blog/lost-car-keys-bronx-locksmith-vs-dealer",
      label: "Read the lost car key comparison guide",
    },
  ],
  "lost-car-key-replacement-bronx": [
    {
      text: "Lost car keys: mobile locksmith vs dealership",
      href: "/blog/lost-car-keys-bronx-locksmith-vs-dealer",
      label: "Read the lost car key comparison guide",
    },
  ],
  "car-key-fob-replacement-bronx": [
    {
      text: "Lost car keys: mobile locksmith vs dealership",
      href: "/blog/lost-car-keys-bronx-locksmith-vs-dealer",
      label: "Read the lost car key comparison guide",
    },
  ],
  "ignition-repair-bronx": [
    {
      text: "Lost car keys: mobile locksmith vs dealership",
      href: "/blog/lost-car-keys-bronx-locksmith-vs-dealer",
      label: "Read the lost car key comparison guide",
    },
  ],
  "home-lockout-bronx": [
    {
      text: "Locked out of your Bronx apartment at night?",
      href: "/blog/bronx-apartment-lockout-night-guide",
      label: "Read the night lockout safety guide",
    },
    {
      text: "How to avoid locksmith scams in the Bronx",
      href: "/blog/avoid-locksmith-scams-bronx-guide",
      label: "Read the locksmith scam prevention guide",
    },
  ],
  "apartment-lockout-bronx": [
    {
      text: "Locked out of your Bronx apartment at night?",
      href: "/blog/bronx-apartment-lockout-night-guide",
      label: "Read the night lockout safety guide",
    },
  ],
  "lock-rekeying-bronx": [
    {
      text: "How to avoid locksmith scams in the Bronx",
      href: "/blog/avoid-locksmith-scams-bronx-guide",
      label: "Read the locksmith scam prevention guide",
    },
  ],
  "smart-lock-installation-bronx": [
    {
      text: "Best smart locks for pre-war Bronx apartments",
      href: "/blog/best-smart-locks-bronx-pre-war-apartments",
      label: "Read the pre-war smart lock compatibility guide",
    },
  ],
  "office-lockout-bronx": [
    {
      text: "Master key systems for Bronx businesses",
      href: "/blog/bronx-business-guide-master-key-systems",
      label: "Read the commercial master key guide",
    },
  ],
  "master-key-system-bronx": [
    {
      text: "Master key systems for Bronx businesses",
      href: "/blog/bronx-business-guide-master-key-systems",
      label: "Read the commercial master key guide",
    },
  ],
  "safe-unlocking-bronx": [
    {
      text: "How to avoid locksmith scams in the Bronx",
      href: "/blog/avoid-locksmith-scams-bronx-guide",
      label: "Read the locksmith scam prevention guide",
    },
  ],
};

interface ServiceBrief {
  title: string;
  metaDesc: string;
  h1: string;
  topic: string;
  details: string;
  callInfo: string;
  pillarName: string;
  pillarHref: string;
}

const serviceBriefs: Record<string, ServiceBrief> = {
  "car-lockout-bronx": {
    title: "Car Lockout Service Bronx | Vehicle Entry Requests",
    metaDesc: "Locked out of a vehicle in the Bronx? Call to confirm current availability, the proposed scope, upfront pricing, and a non-guaranteed arrival estimate.",
    h1: "Car Lockout Service in the Bronx",
    topic: "a vehicle lockout",
    details: "Vehicle entry requests depend on the vehicle, lock, and condition. No particular entry method or damage-free result can be promised in advance.",
    callInfo: "Share the vehicle make, model, year, exact location, and what happened. The locksmith can explain whether service is available and discuss the proposed approach and any relevant risks.",
    pillarName: "Automotive Locksmith Service Information",
    pillarHref: "/automotive-locksmith-bronx",
  },
  "lost-car-key-replacement-bronx": {
    title: "Lost Car Key Help Bronx | Vehicle Key Requests",
    metaDesc: "Lost a car key in the Bronx? Call with the vehicle make, model, and year to confirm whether the requested key service is available and get an upfront price.",
    h1: "Lost Car Key Requests in the Bronx",
    topic: "a lost vehicle key",
    details: "Vehicle key systems and service availability vary by make, model, year, and key type. Do not assume that a particular vehicle or key system can be serviced without confirmation.",
    callInfo: "Share the vehicle make, model, year, location, and whether you have another working key. The locksmith can confirm current availability, ask what information may be needed, and explain the agreed scope.",
    pillarName: "Automotive Locksmith Service Information",
    pillarHref: "/automotive-locksmith-bronx",
  },
  "ignition-repair-bronx": {
    title: "Ignition Locksmith Bronx | Vehicle Ignition Requests",
    metaDesc: "Key stuck or broken in a vehicle ignition in the Bronx? Call to describe the vehicle and confirm service availability, scope, and price.",
    h1: "Vehicle Ignition Service Requests in the Bronx",
    topic: "a vehicle ignition or broken-key issue",
    details: "Ignition and key problems can have different causes. Whether extraction, repair, or replacement is suitable depends on the vehicle and condition; no method or completion time is guaranteed.",
    callInfo: "Share the vehicle make, model, year, location, and whether the key is stuck, broken, or will not turn. Ask what options may be available and confirm the scope and price before dispatch.",
    pillarName: "Automotive Locksmith Service Information",
    pillarHref: "/automotive-locksmith-bronx",
  },
  "car-key-fob-replacement-bronx": {
    title: "Car Key Fob Help Bronx | Vehicle Remote Requests",
    metaDesc: "Need help with a vehicle key fob in the Bronx? Call with the make, model, and year to check current service availability and upfront pricing.",
    h1: "Vehicle Key Fob Requests in the Bronx",
    topic: "a vehicle key fob or remote issue",
    details: "Fob and remote systems vary across vehicles. Compatibility, required equipment, and whether a replacement or repair is available depend on the exact make, model, year, and system.",
    callInfo: "Share the vehicle make, model, year, location, and the symptoms or reason for replacement. Confirm whether the requested work is available and what the agreed price covers.",
    pillarName: "Automotive Locksmith Service Information",
    pillarHref: "/automotive-locksmith-bronx",
  },
  "home-lockout-bronx": {
    title: "Home Lockout Bronx | Residential Entry Requests",
    metaDesc: "Locked out of a Bronx home? Call to confirm current availability, discuss the proposed approach and price, and get a non-guaranteed arrival estimate.",
    h1: "Home Lockout Service Requests in the Bronx",
    topic: "a home lockout",
    details: "The appropriate approach depends on the door, lock, and condition. Ask what work is proposed, whether damage is possible, and what alternatives may be available before agreeing.",
    callInfo: "Describe the door and lock, the address, and any relevant access circumstances. If you rent, check applicable lease or building requirements before authorizing changes to hardware.",
    pillarName: "Residential Locksmith Service Information",
    pillarHref: "/residential-locksmith-bronx",
  },
  "apartment-lockout-bronx": {
    title: "Apartment Lockout Bronx | Entry Requests",
    metaDesc: "Locked out of a Bronx apartment? Call to confirm service availability, what information to have ready, the upfront price, and a non-guaranteed arrival estimate.",
    h1: "Apartment Lockout Requests in the Bronx",
    topic: "an apartment lockout",
    details: "Entry options depend on the door, lock, building access, and circumstances. Ask the locksmith to explain the proposed method and any risks before work begins.",
    callInfo: "Share the address, lock and door details, and any building-entry instructions. Ask whether any information or authorization should be ready; requirements can vary by situation.",
    pillarName: "Residential Locksmith Service Information",
    pillarHref: "/residential-locksmith-bronx",
  },
  "lock-rekeying-bronx": {
    title: "Lock Rekeying Bronx | Check Hardware and Pricing",
    metaDesc: "Considering lock rekeying in the Bronx? Call with the lock details to confirm availability, compatibility, agreed scope, and upfront price.",
    h1: "Lock Rekeying Requests in the Bronx",
    topic: "a lock rekey",
    details: "Rekeying may be an option for compatible existing hardware, but suitability depends on the lock and condition. Replacement or another approach may be discussed after details are reviewed.",
    callInfo: "Share the lock type if known, how many locks or cylinders are involved, and whether you have a working key. Confirm the scope and price before dispatch.",
    pillarName: "Residential Locksmith Service Information",
    pillarHref: "/residential-locksmith-bronx",
  },
  "smart-lock-installation-bronx": {
    title: "Smart Lock Installation Bronx | Compatibility Requests",
    metaDesc: "Considering a smart lock for a Bronx home or apartment? Call with the door, existing hardware, and product model to check compatibility and price.",
    h1: "Smart Lock Installation Requests in the Bronx",
    topic: "a smart lock installation",
    details: "Smart-lock compatibility depends on the door, existing hardware, selected model, and property requirements. No model or installation method fits every door.",
    callInfo: "Share the door and lock details and the smart-lock model you are considering. Renters should check lease or building requirements before authorizing hardware changes.",
    pillarName: "Residential Locksmith Service Information",
    pillarHref: "/residential-locksmith-bronx",
  },
  "office-lockout-bronx": {
    title: "Office Lockout Bronx | Commercial Entry Requests",
    metaDesc: "Locked out of a Bronx office or business? Call to confirm service availability, access details, upfront pricing, and a non-guaranteed arrival estimate.",
    h1: "Office Lockout Requests in the Bronx",
    topic: "an office or business lockout",
    details: "Commercial locks, doors, and access procedures vary. Service availability and the appropriate scope depend on the hardware and the caller's authority to request access.",
    callInfo: "Share the business location, door or lock details, building access instructions, and who can authorize service. Ask what information may be needed before dispatch.",
    pillarName: "Commercial Locksmith Service Information",
    pillarHref: "/commercial-locksmith-bronx",
  },
  "master-key-system-bronx": {
    title: "Master Key System Bronx | Commercial Access Requests",
    metaDesc: "Considering a master key system for a Bronx property? Call to discuss the doors, access needs, compatibility, availability, and upfront pricing.",
    h1: "Master Key System Requests in the Bronx",
    topic: "a commercial master-key system",
    details: "A property's doors, existing cylinders, access requirements, and key-control needs affect whether a master-key project is suitable. No design or compatibility is assumed without reviewing the details.",
    callInfo: "Describe the property, number and type of doors, existing hardware, and access needs. Ask whether the project is available and what assessment, scope, and price would apply.",
    pillarName: "Commercial Locksmith Service Information",
    pillarHref: "/commercial-locksmith-bronx",
  },
  "panic-bar-repair-bronx": {
    title: "Panic Bar Locksmith Bronx | Commercial Door Requests",
    metaDesc: "Need help with a commercial exit device in the Bronx? Call to describe the hardware and confirm service availability and price; consult a qualified code professional for compliance questions.",
    h1: "Commercial Exit Device Requests in the Bronx",
    topic: "a commercial panic bar or exit device",
    details: "Exit hardware and building requirements depend on the specific door, occupancy, and applicable codes. This page does not determine code compliance; consult the relevant authority or qualified professional for regulatory guidance.",
    callInfo: "Share the address, door and device details, and what is not working. Confirm service availability and the proposed scope. For life-safety or compliance concerns, contact the appropriate building or fire-safety authority.",
    pillarName: "Commercial Locksmith Service Information",
    pillarHref: "/commercial-locksmith-bronx",
  },
  "safe-unlocking-bronx": {
    title: "Safe Locksmith Bronx | Safe Service Requests",
    metaDesc: "Need help with a safe in the Bronx? Call with the make, model, and issue to confirm availability, discuss the proposed method, and get an upfront price.",
    h1: "Safe Service Requests in the Bronx",
    topic: "a safe lock or access issue",
    details: "Safe types, locks, and conditions vary. No particular opening method, completion time, or damage-free result can be promised without assessing the specific safe.",
    callInfo: "If known, share the safe make and model, lock type, issue, and location. Ask what approach is proposed, whether damage is possible, and what the agreed work will cost.",
    pillarName: "Specialty Locksmith Service Information",
    pillarHref: "/specialty-locksmith-bronx",
  },
  "mailbox-lockout-bronx": {
    title: "Mailbox Lock Service Bronx | Building Hardware Requests",
    metaDesc: "Lost a mailbox key or have a jammed mailbox lock in the Bronx? Call to describe the panel and confirm service availability and upfront pricing.",
    h1: "Mailbox Lock Requests in the Bronx",
    topic: "a mailbox lock or key issue",
    details: "Mailbox panels and lock hardware vary. Property procedures, ownership, and authorization may affect who can request service and what information is needed.",
    callInfo: "Describe the mailbox panel, lock, location, and whether you are the resident, owner, or manager. Check with building management when appropriate and confirm the agreed scope and price before dispatch.",
    pillarName: "Specialty Locksmith Service Information",
    pillarHref: "/specialty-locksmith-bronx",
  },
};

function buildSubServiceData(brief: ServiceBrief): SubServiceData {
  const arrival = siteConfig.arrival.disclosure;
  return {
    title: brief.title,
    metaDesc: brief.metaDesc,
    h1: brief.h1,
    heroDesc: `Need help with ${brief.topic} in the Bronx? Call to speak with a real locksmith and confirm current availability, the upfront price for the agreed scope, and a non-guaranteed arrival estimate. ${arrival}`,
    pillarName: brief.pillarName,
    pillarHref: brief.pillarHref,
    sections: [
      {
        heading: `About ${brief.topic}`,
        paragraphs: [brief.details, "The locksmith can ask relevant questions so the dispatched technician can be prepared with appropriate tools and parts. This does not guarantee that every make, model, lock, or requested job can be handled."],
      },
      {
        heading: "What to Share When You Call",
        paragraphs: [brief.callInfo, "If you are unsure what information may be needed, ask the locksmith. Requirements depend on the request and circumstances; no universal documentation requirement is stated here."],
      },
      {
        heading: "Availability, Arrival Estimates, and Upfront Pricing",
        paragraphs: [
          `Mobile service is provided throughout the Bronx. Hours are ${siteConfig.hours.display}. Call with your service address to confirm current availability.`,
          `${arrival} Arrival time is separate from the time needed to complete work, which depends on the specific job.`,
          "The price is confirmed upfront for the agreed scope before dispatch. If the scope changes, the proposed work and price change are discussed before additional work begins. There is no additional charge solely because a service address is elsewhere in the Bronx.",
        ],
      },
    ],
    faqs: [
      {
        q: `Can you handle ${brief.topic} for my specific lock or vehicle?`,
        a: "Availability and compatibility depend on the exact hardware, make, model, condition, and circumstances. Call with the details to confirm before dispatch.",
      },
      {
        q: "How soon can a locksmith arrive?",
        a: arrival,
      },
      {
        q: "How much will the service cost?",
        a: "The price depends on the requested work and is confirmed upfront for the agreed scope before dispatch. Any proposed change in scope or price is discussed before additional work begins.",
      },
    ],
    relatedLinks: [
      {
        text: brief.pillarName,
        href: brief.pillarHref,
        label: `Read ${brief.pillarName.toLowerCase()}`,
      },
    ],
  };
}

const subServicesData: Record<string, SubServiceData> = Object.fromEntries(
  Object.entries(serviceBriefs).map(([slug, brief]) => [slug, buildSubServiceData(brief)]),
) as Record<string, SubServiceData>;

/* ─────────────────────────────────────────────────────────────────
   PAGE METADATA GENERATOR
───────────────────────────────────────────────────────────────── */
interface PageProps {
  params: Promise<RouteParams>;
}

export async function generateMetadata({ params }: PageProps) {
  const { subservice } = await params;
  const data = subServicesData[subservice];
  if (!data) return {};

  return {
    // Never truncate a title with an ellipsis: Google renders the cut-off
    // string as the snippet headline, which reads as broken and suppresses
    // clicks. The copy in `title` is already written to fit a SERP.
    title: { absolute: data.title },
    description: data.metaDesc,
    alternates: { canonical: `/${subservice}/` },
    openGraph: {
      title: data.title,
      description: data.metaDesc,
      url: `/${subservice}/`,
      type: "website",
    },
  };
}

/* ─────────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────────── */
export default async function SubServicePage({ params }: PageProps) {
  const { subservice } = await params;
  const data = subServicesData[subservice];
  if (!data) notFound();

  return (
    <>
      <Header />

        <ServiceSchema
          name={data.h1}
          description={data.metaDesc}
          url={`${siteConfig.url}/${subservice}`}
        />

      <main className="bg-zinc-950 text-white min-h-screen">

        {/* ── Hero ── */}
        <section className="relative bg-zinc-900 py-16 lg:py-24 border-b border-zinc-800" aria-label="Service overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

              {/* Left: headline + heroDesc + CTA */}
              <div className="lg:col-span-7 space-y-6">
                <Link
                  href={data.pillarHref}
                  className="inline-flex items-center gap-1.5 text-brand-yellow hover:text-brand-yellow-hover font-sans text-xs uppercase tracking-wider transition-colors"
                  aria-label={`Return to the ${data.pillarName} main guide`}
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Return to {data.pillarName}</span>
                </Link>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold uppercase tracking-tight leading-tight">
                  {data.h1}
                </h1>
                <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed">
                  {data.heroDesc}
                </p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-6 py-4 rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-yellow/15 whitespace-nowrap"
                  aria-label={`Call our emergency line at ${siteConfig.contact.phoneDisplay}`}
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <span>Call: {siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>

              {/* Right: booking form */}
              <div className="lg:col-span-5 flex justify-center">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── Article Body ── */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Detailed service information">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Main article column */}
            <article className="lg:col-span-8 space-y-14">
              {data.sections.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase leading-snug border-l-4 border-brand-yellow pl-4">
                    {sec.heading}
                  </h2>
                  <div className="space-y-4 text-zinc-300 font-sans text-base leading-relaxed">
                    {sec.paragraphs.map((para, pidx) => (
                      <p key={pidx}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Service quick-reference">

              {/* Trust badges */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-5">
                <h3 className="font-serif font-bold text-white text-base uppercase tracking-wider">Service Information</h3>
                <ul className="space-y-4 font-sans text-sm text-zinc-350">
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Licensed &amp; insured</strong> — Ask for our DCWP license number when you call.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Arrival estimate</strong> — Call for current availability and a non-guaranteed estimate.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Upfront Pricing</strong> — Price is confirmed for the agreed scope before dispatch.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Service approach</strong> — Method depends on the lock and condition; ask what is proposed before work begins.</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
                <h3 className="font-serif font-bold text-white text-base uppercase tracking-wider">Related Services</h3>
                <ul className="space-y-3">
                  {data.relatedLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="flex items-start gap-2 text-brand-yellow hover:text-brand-yellow-hover font-sans text-xs font-bold uppercase tracking-wider leading-snug"
                        aria-label={link.label}
                      >
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{link.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related guides */}
              {guideLinksByService[subservice]?.length > 0 && (
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
                  <h3 className="font-serif font-bold text-white text-base uppercase tracking-wider">Related Guides</h3>
                  <ul className="space-y-3">
                    {guideLinksByService[subservice].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-start gap-2 text-zinc-300 hover:text-brand-yellow font-sans text-xs font-bold uppercase tracking-wider leading-snug transition-colors"
                          aria-label={link.label}
                        >
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{link.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </aside>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="bg-zinc-900/50 border-t border-zinc-900 py-20" aria-label="Frequently asked questions">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <h2 className="text-3xl font-serif font-bold uppercase text-center tracking-wide">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg space-y-2">
                  <h3 className="font-serif font-bold text-brand-yellow text-lg flex gap-2 items-start">
                    <HelpCircle className="h-5 w-5 shrink-0 mt-0.5 text-brand-yellow" aria-hidden="true" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-zinc-400 text-sm font-sans pl-7 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA Strip ── */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Emergency contact strip">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="font-serif font-bold text-white text-xl uppercase">Need Immediate Assistance?</p>
              <p className="text-zinc-400 text-sm font-sans max-w-xl">
                Mobile service is available throughout the Bronx. Call to confirm current availability and a non-guaranteed arrival estimate based on your location and conditions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-6 py-3.5 rounded transition-all whitespace-nowrap"
                aria-label={`Call emergency locksmith dispatch at ${siteConfig.contact.phoneDisplay}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call {siteConfig.contact.phoneDisplay}</span>
              </a>
              <Link
                href={data.pillarHref}
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-brand-yellow text-zinc-300 hover:text-brand-yellow font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-all whitespace-nowrap"
                aria-label={`Return to the ${data.pillarName} main guide`}
              >
                <span>Return to {data.pillarName}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
