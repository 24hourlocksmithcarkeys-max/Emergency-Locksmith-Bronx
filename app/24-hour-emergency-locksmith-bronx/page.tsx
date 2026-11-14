import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { siteConfig } from "@/config/site";
import { Phone, ArrowRight, Ban, UserCheck, HelpCircle, CheckCircle } from "lucide-react";

export const metadata = {
  title: { absolute: "Emergency Locksmith Bronx | Mobile Lockout Help" },
  description:
    "Locked out at home, in the car, or at work? Call (646) 264-1901 for mobile locksmith service throughout the Bronx. Mon–Thu 9–5; Fri–Sun 24 hours. Price and current arrival estimate confirmed first.",
  alternates: { canonical: "/24-hour-emergency-locksmith-bronx/" },
};

export default function EmergencyHub() {

  const emergencyTypes = [
    {
      icon: "🏠",
      title: "Residential Lockouts",
      desc: "For a home or apartment lockout request, call with the address and lock details to confirm current availability, proposed approach, and price.",
      linkText: "View Residential Request Information",
      href: "/residential-locksmith-bronx",
      label: "View residential locksmith request information",
    },
    {
      icon: "🚗",
      title: "Automotive Lockouts",
      desc: "For a vehicle lockout request, share the make, model, year, and location to confirm compatibility, current availability, and price.",
      linkText: "View Automotive Request Information",
      href: "/automotive-locksmith-bronx",
      label: "View automotive locksmith request information",
    },
    {
      icon: "🏢",
      title: "Commercial Lockouts",
      desc: "Commercial lockout requests for offices, retail, or warehouse properties. Call to confirm service availability, the proposed scope, and upfront price.",
      linkText: "View Commercial Locksmith Information",
      href: "/commercial-locksmith-bronx",
      label: "Go to commercial locksmith services page",
    },
  ];

  const solutions = [
    { icon: "🔑", title: "Broken Key Requests", desc: "Describe the lock or vehicle and key issue to confirm service availability and discuss the proposed scope." },
    { icon: "🔐", title: "Rekeying Requests", desc: "Ask whether rekeying is suitable for the specific lock and confirm availability and price." },
    { icon: "🛠️", title: "Lock or Door Damage", desc: "Share details about the lock or door condition; the locksmith can discuss whether service is available." },
    { icon: "🚗", title: "Vehicle Ignition Requests", desc: "Call with the vehicle make, model, year, and issue to confirm current availability." },
    { icon: "💼", title: "Safe Service Requests", desc: "Share the safe make, model, and issue to ask about the proposed approach, availability, and price." },
  ];

  const contentSections = [
    {
      heading: "How Bronx Mobile Dispatch Works",
      paragraphs: [
        "1510 Castle Hill Ave is the centralized dispatching center for Emergency Locksmith Bronx. Service is mobile throughout the Bronx; the address is not presented as a walk-in storefront.",
        "Calls are answered by a real locksmith. The locksmith asks relevant questions about the address, lock or vehicle, and situation so the technician can be dispatched with the tools and parts needed for the job.",
        "The owner reports that average arrival time over the last 90 days is about 20 minutes, with most emergency calls arriving in about 15–20 minutes. This is a reported average, not a guarantee. Call with your address for current availability and an estimated arrival time."
      ]
    },
    {
      heading: "What Happens During an Emergency Locksmith Call — Step by Step",
      paragraphs: [
        "A real locksmith answers calls and asks about the address, lock or vehicle, and situation. These details help prepare the dispatched technician with the tools and parts needed for the service. The locksmith confirms current availability, price, and an arrival estimate before dispatch; arrival times are estimates, not guarantees.",
        "The locksmith may ask questions to confirm you are authorized to request access to the home, vehicle, or business. Ask what documentation, if any, to have ready when you call; the details depend on the situation.",
        "The proposed service approach depends on the lock, vehicle, and condition. Ask the locksmith to explain the work and any relevant risks before agreeing. If an assessment changes the requested scope, the additional work and price are discussed before proceeding."
      ]
    },
    {
      heading: "Recognizing and Avoiding Emergency Locksmith Scams in the Bronx",
      paragraphs: [
        "Before agreeing to locksmith work, ask who will perform the service, what the quoted price covers, and whether additional work could change the price. Do not authorize work you do not understand. A legitimate estimate should identify the service scope and be confirmed before work begins.",
        "Emergency Locksmith Bronx reports an active NYC DCWP locksmith license. The license number is available upon request and is not posted publicly because of impersonation and scam concerns. Ask the locksmith for the full scope and price before agreeing to work.",
        "Pricing is confirmed upfront for the agreed scope of work. If the scope changes or an unexpected complication affects the price, the customer is informed before additional work proceeds. There is no extra charge solely because the service address is elsewhere in the Bronx; the price still depends on the agreed job scope.",
      ]
    },
    {
      heading: "Night Lockouts — Safety Considerations While Waiting for a Locksmith",
      paragraphs: [
        "A nighttime lockout in the Bronx adds a layer of personal safety consideration on top of the access problem itself. Standing on an empty street outside a home at 2 AM or being stranded in a parking lot with a locked vehicle creates exposure that is worth addressing practically while the technician is in transit.",
        "If the lockout is at a residential address, remaining inside a lobby, vestibule, or near an intercom-accessible entrance is recommended rather than waiting on an open sidewalk or stoop. If a neighbor's doorbell can be rung for access to a common hallway, that is preferable to outdoor waiting. Notifying a building super or neighbor that a locksmith is on the way also provides a safety contact who knows the situation.",
        "For a lockout, call to confirm service availability and discuss a safe place to wait. If you feel unsafe or face an immediate threat, call 911.",
      ]
    },
    {
      heading: "Mobile Service Across the Bronx",
      paragraphs: [
        "Emergency Locksmith Bronx provides mobile service throughout the Bronx from a centralized dispatching center at 1510 Castle Hill Ave. The address is a dispatch center, not a walk-in storefront. There is no extra charge solely because a service address is elsewhere in the Bronx.",
        "Hours are Monday–Thursday, 9:00 a.m.–5:00 p.m., and Friday–Sunday, 24 hours. Availability at a specific time depends on current dispatch conditions. Call with your address for a current, non-guaranteed arrival estimate and upfront price.",
        "The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. This is a reported average, not a guarantee; location, traffic, weather, and current availability can affect an individual estimate."
      ]
    },
  ];

  const faqs = [
    {
      q: "Is emergency locksmith service available on holidays and weekends?",
      a: "The stated hours are Monday–Thursday, 9:00 a.m.–5:00 p.m., and 24 hours Friday–Sunday. Call to confirm availability for your specific service and time. The total price for the agreed work is confirmed upfront before dispatch."
    },
    {
      q: "What information should be ready when calling for emergency locksmith help?",
      a: "Share your address or nearest intersection, whether service is for a home, car, or business, and any lock or vehicle details you know. This helps the locksmith prepare the technician with appropriate tools and parts. Ask whether any specific information or authorization is needed for your situation."
    },
    {
      q: "Will my lock need to be replaced after a professional lockout?",
      a: "The appropriate method and any risk of damage depend on the lock and its condition. No damage-free result can be promised before assessment. Ask what approach is proposed, whether alternatives exist, and what the price covers before authorizing work. If the assessment changes the requested scope, discuss any additional work and price before it proceeds."
    },
    {
      q: "How can I tell if a locksmith advertising online is legitimate?",
      a: "Emergency Locksmith Bronx reports an active NYC DCWP locksmith license. The license number is available upon request but is not posted publicly because of impersonation and scam concerns. Ask the locksmith for the number if you wish to verify it. Confirm the full price before dispatch; any change in scope should be discussed before extra work begins."
    },
    {
      q: "What is the most common type of emergency locksmith call in the Bronx?",
      a: "The site provides information about residential, vehicle, and commercial lockout requests, but the business does not publish call-volume data by request type. Call to confirm whether a specific service is currently available."
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow bg-zinc-950 text-white">

        {/* 1. Emergency Hero */}
        <section className="relative bg-zinc-900 border-b border-zinc-800 py-20 lg:py-28" aria-label="Emergency locksmith services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-500/40 px-3 py-1.5 rounded text-red-400 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" aria-hidden="true" />
                  <span>Mobile Emergency Locksmith · Bronx</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Emergency <br />
                  <span className="text-brand-yellow">Locksmith Services</span> in the Bronx
                </h1>
                <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
                  Mobile locksmith service throughout the Bronx. A real locksmith answers and asks about your address, lock or vehicle so the technician can be prepared with needed tools and parts. Hours: {siteConfig.hours.display}. Owner-reported average arrival time is about 20 minutes over the last 90 days; most emergency calls arrive in about 15–20 minutes. These are not guaranteed times; call for current availability and an estimate.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-sans font-bold tracking-wider uppercase text-sm sm:text-base px-6 py-4 rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-red-600/20 whitespace-nowrap"
                    aria-label={`Call Emergency Locksmith Bronx at ${siteConfig.contact.phoneDisplay}`}
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    <span>Call: {siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Highlights Banner */}
        <section className="bg-brand-yellow text-zinc-950 py-10 border-y border-yellow-400" aria-label="Service information">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <span className="text-3xl" aria-hidden="true">⏱️</span>
              <h2 className="font-serif font-bold text-lg uppercase">~20 Min Average</h2>
              <p className="text-xs font-sans text-zinc-800">Owner-reported for the last 90 days; not a guaranteed arrival time.</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-zinc-900/10 py-6 md:py-0">
              <span className="text-3xl" aria-hidden="true">🛡️</span>
              <h2 className="font-serif font-bold text-lg uppercase">Licensed &amp; Insured</h2>
              <p className="text-xs font-sans text-zinc-800">Active NYC DCWP license; general liability coverage up to $1,000,000.</p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl" aria-hidden="true">🔑</span>
              <h2 className="font-serif font-bold text-lg uppercase">Proposed Approach</h2>
              <p className="text-xs font-sans text-zinc-800">Method and risks depend on the lock and situation; ask what is proposed before work begins.</p>
            </div>
          </div>
        </section>

        {/* 3. Emergency Type Cards */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14" aria-label="Emergency lockout request types">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold uppercase tracking-wider">Emergency Lockout Requests</h2>
            <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
            <p className="text-zinc-400 font-sans text-sm">Mobile locksmith service is available Monday–Thursday, 9 a.m.–5 p.m., and Friday–Sunday, 24 hours. Call to confirm current availability and the proposed service method.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyTypes.map((type, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg space-y-6 flex flex-col justify-between hover:border-brand-yellow/30 transition">
                <div className="space-y-4">
                  <span className="text-4xl" aria-hidden="true">{type.icon}</span>
                  <h3 className="text-2xl font-serif font-bold text-brand-yellow">{type.title}</h3>
                  <p className="text-zinc-400 text-sm font-sans leading-relaxed">{type.desc}</p>
                </div>
                <div className="pt-4 border-t border-zinc-800">
                  <Link href={type.href} className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover font-bold font-sans text-xs uppercase tracking-wider group" aria-label={type.label}>
                    <span>{type.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Local Response + Trust */}
        <section className="bg-zinc-900 border-y border-zinc-800 py-20" aria-label="Local Bronx dispatch and trust information">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 bg-zinc-950 p-8 rounded-lg border border-zinc-800 space-y-6 shadow-xl">
                <h3 className="text-xl font-serif font-bold text-brand-yellow uppercase tracking-wider">Centralized Dispatching Center</h3>
                <div className="aspect-video w-full relative bg-zinc-900 rounded border border-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-600 text-sm">📍 {siteConfig.contact.address}</span>
                </div>
                <div className="space-y-2 text-zinc-400 text-sm font-sans">
                  <p><strong className="text-zinc-200">Address:</strong> {siteConfig.contact.address}</p>
                  <p><strong className="text-zinc-200">Coverage:</strong> All Bronx neighborhoods including Fordham, Riverdale, Soundview, Pelham Bay, Co-op City, Mott Haven, Castle Hill, Parkchester, and more.</p>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 text-zinc-300 font-sans text-base leading-relaxed">
                <h2 className="text-3xl font-serif font-bold text-white uppercase">Mobile Locksmith Service Across the Bronx</h2>
                <p>Emergency Locksmith Bronx provides mobile locksmith service throughout the Bronx. Traffic and location affect travel time, so the locksmith confirms current availability and an arrival estimate before dispatch.</p>
                <p>The centralized dispatching center is at <strong className="text-white">{siteConfig.contact.address}</strong>; it is not a walk-in storefront. The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. These are not guarantees. No extra charge applies solely because a service address is elsewhere in the Bronx.</p>
                <p>Mobile service is provided throughout the Bronx, including neighborhoods such as Wakefield, Woodlawn, Mott Haven, City Island, and Riverdale. There is no extra charge solely because a service address is elsewhere in the Bronx; call to confirm availability for a specific time and location.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Deep Content Sections */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Emergency locksmith detailed information">
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
            <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Emergency service trust signals">

              {/* Scam avoidance */}
              <div className="bg-zinc-900/80 p-6 rounded-lg border border-zinc-800 space-y-4">
                <div className="flex items-center gap-3 text-red-400 font-bold uppercase tracking-wider font-sans text-xs">
                  <Ban className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Avoid Locksmith Scams</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-white">Transparent Pricing in Stressful Moments</h3>
                <p className="text-zinc-400 text-xs font-sans leading-relaxed">Before agreeing to locksmith work, ask what the price covers; our price for agreed work is confirmed before dispatch. The license number is available upon request and is not posted publicly. Any scope change and added price should be explained before extra work begins.</p>
              </div>

              {/* Trust signals */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-5">
                <div className="flex items-center gap-3 text-brand-yellow font-bold uppercase tracking-wider font-sans text-xs">
                  <UserCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Verified Professionals</span>
                </div>
                <ul className="space-y-4 font-sans text-sm text-zinc-350">
                  {[
                    ["Active NYC DCWP License", "License number available upon request; not posted publicly."],
                    ["Background Checked", "All technicians verified before serving Bronx customers."],
                    ["Dispatch Center", "Centralized dispatching at 1510 Castle Hill Ave; mobile service throughout the Bronx."],
                    ["Real Locksmith Answering", "A locksmith asks about the lock or vehicle and prepares the technician for the service call."],
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
        </section>

        {/* 6. Wide Range of Solutions */}
        <section className="bg-zinc-900 border-t border-zinc-800 py-20" aria-label="Full range of emergency locksmith solutions">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl font-serif font-bold uppercase">All Emergency Solutions — One Call</h2>
              <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
              <p className="text-zinc-400 font-sans text-sm">A real locksmith asks about the lock or vehicle so the dispatched technician can be prepared with the tools and parts needed for that job.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {solutions.map((sol, idx) => (
                <div key={idx} className="bg-zinc-950 border border-zinc-800 p-6 rounded-lg text-center space-y-3 hover:border-brand-yellow/30 transition">
                  <span className="text-3xl block" aria-hidden="true">{sol.icon}</span>
                  <h3 className="font-serif font-bold text-white text-sm">{sol.title}</h3>
                  <p className="text-zinc-500 text-xs font-sans">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQs */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" aria-label="Emergency locksmith frequently asked questions">
          <h2 className="text-3xl font-serif font-bold text-center uppercase tracking-wide">Emergency Locksmith — Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg space-y-2">
                <h3 className="font-serif font-bold text-brand-yellow text-lg flex gap-2 items-start">
                  <HelpCircle className="h-5 w-5 shrink-0 mt-0.5 text-brand-yellow" aria-hidden="true" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-zinc-400 text-sm font-sans pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Final CTA strip */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Final emergency contact call to action">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="font-serif font-bold text-white text-xl uppercase">Need Locksmith Help?</p>
              <p className="text-zinc-400 text-sm font-sans max-w-xl">The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. Arrival varies; these are not guarantees. Call to confirm availability, price, and a current estimate.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-sans font-bold px-6 py-3.5 rounded transition-all whitespace-nowrap"
                aria-label={`Call emergency locksmith dispatch at ${siteConfig.contact.phoneDisplay}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call {siteConfig.contact.phoneDisplay}</span>
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-brand-yellow text-zinc-300 hover:text-brand-yellow font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-all whitespace-nowrap"
                aria-label="Browse the complete list of available locksmith services"
              >
                <span>Browse All Locksmith Services</span>
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
