import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { siteConfig } from "@/config/site";
import { Phone, ArrowRight, Ban, UserCheck, HelpCircle, CheckCircle } from "lucide-react";

export const metadata = {
  title: "24/7 Emergency Locksmith Bronx",
  description: "Locked out of your home, car, or office in the Bronx? Our 24/7 emergency locksmith dispatch covers every neighborhood. Damage-free entry in 15-30 min.",
};

export default function EmergencyHub() {

  const emergencyTypes = [
    {
      icon: "🏠",
      title: "Residential Lockouts",
      desc: "Locked out of a house or apartment at any hour — pin tumbler deadbolts, pre-war mortise locks, and high-security cylinders are all opened damage-free using professional picks and tension tools. Identity verification is required before entry.",
      linkText: "View All Residential Lock and Key Services",
      href: "/residential-locksmith-bronx",
      label: "Go to residential locksmith services page",
    },
    {
      icon: "🚗",
      title: "Automotive Lockouts",
      desc: "Keys locked inside a vehicle, broken in the ignition, or lost entirely — our mobile auto locksmiths use Lishi picks for damage-free door entry and carry on-site key cutting and transponder programming equipment for all major brands.",
      linkText: "View All Automotive Lock and Key Services",
      href: "/automotive-locksmith-bronx",
      label: "Go to automotive locksmith services page",
    },
    {
      icon: "🏢",
      title: "Commercial Lockouts",
      desc: "Office, retail, or warehouse access blocked — commercial grade locks are bypassed with professional tools as a priority dispatch. No downtime is acceptable for a Bronx business, and every commercial call is treated with the urgency it deserves.",
      linkText: "View All Commercial Security Services",
      href: "/commercial-locksmith-bronx",
      label: "Go to commercial locksmith services page",
    },
  ];

  const solutions = [
    { icon: "🔑", title: "Broken Key Extraction", desc: "Fragments removed from door and ignition cylinders without damaging the wafer stack." },
    { icon: "🔐", title: "Emergency Rekeying", desc: "Immediate pin replacement when keys are lost, stolen, or a security breach has occurred." },
    { icon: "🛠️", title: "Post-Burglary Repair", desc: "Damaged frames, bent strikes, and destroyed cylinders restored to full security immediately." },
    { icon: "🚗", title: "Ignition Repair", desc: "Worn or jammed ignition cylinders rebuilt or replaced on-site without towing." },
    { icon: "💼", title: "Safe Opening", desc: "Mechanical and digital safes opened using non-destructive manipulation techniques." },
  ];

  const contentSections = [
    {
      heading: "Why a Local Bronx Dispatch Makes All the Difference at 3 AM",
      paragraphs: [
        "When a lockout emergency is experienced in the Bronx at 3 in the morning, the response time of the locksmith service matters profoundly. A dispatcher operating from a centralized national call center routes the call to whichever subcontractor is available in the region — which may or may not be someone who knows the borough, understands Bronx traffic patterns, or can navigate the dense residential streets of Parkchester or the winding roads of Riverdale efficiently.",
        "Our dispatchers and technicians are Bronx-based. The nearest available technician is selected based on real-time position relative to the caller's location. No calls are being routed through out-of-borough coordination layers. This local structure is what makes a consistent 15 to 30-minute response time possible across all Bronx neighborhoods, including less central areas like City Island, Throggs Neck, and Woodlawn that are further from the Bronx's geographic center.",
        "The physical office is located at {siteConfig.contact.address}, and mobile service units are staged at multiple points across the borough to ensure equitable response coverage. During high-demand periods — summer weekends, New Year's Eve, major events at Yankee Stadium — additional units are deployed proactively to maintain response time commitments across the entire service area."
      ]
    },
    {
      heading: "What Happens During an Emergency Locksmith Call — Step by Step",
      paragraphs: [
        "When the emergency line is called, the dispatcher collects information about the situation type — home, car, or business lockout — and the exact location. The address or intersection is confirmed, and the nearest available technician is identified and dispatched immediately. An estimated arrival time is provided during the call so that safe and comfortable waiting arrangements can be made.",
        "Upon arrival, the technician presents professional identification and confirms the situation through a brief visual inspection of the lock and door or vehicle. Proof of the right to access the property is requested before any lock is touched. For homes and apartments, a photo ID matching the address is the standard requirement. For vehicles, the vehicle's registration or insurance card is used. For businesses, a business ID card or documentation listing the business at that address is requested.",
        "After verification, the appropriate entry method is selected based on the lock type and condition. The entry process is completed as quickly and as non-destructively as possible. After access is restored, the lock cylinder is inspected for any pre-existing wear or damage. If a follow-up service — rekeying, cylinder replacement, or smart lock installation — is recommended, it is offered at that moment and can be completed during the same visit if the customer chooses."
      ]
    },
    {
      heading: "Recognizing and Avoiding Emergency Locksmith Scams in the Bronx",
      paragraphs: [
        "Emergency locksmith fraud is a well-documented and persistent problem in New York City. Fraudulent operators advertise low call-out prices online — sometimes as low as $15 to $20 — using paid search placements that appear at the top of emergency search results. When the 'locksmith' arrives, the price is dramatically increased through invented charges for 'special tools,' 'high-security lock fees,' or 'after-hours premiums' that were never disclosed. Customers in distress often pay these inflated amounts rather than starting over.",
        "Identifying a legitimate locksmith before the call is placed provides protection against this fraud. Legitimate locksmiths maintain consistent, verifiable business addresses — not just PO boxes or residential addresses listed on directories. NYC locksmith licensing through the Department of Consumer Affairs requires a physical business location. The DCA license number can be verified online at nyc.gov/consumers. Any locksmith who cannot produce a DCA license number upon request should not be engaged.",
        "When our emergency line is called, the service rate is communicated clearly during the call — not after arrival. The quote given is the price charged at completion for the agreed scope of work. If an unexpected complication is discovered on-scene that would change the price, the customer is informed before work continues and has the choice to proceed or not. This transparency is a commitment, not a marketing claim."
      ]
    },
    {
      heading: "Night Lockouts — Safety Considerations While Waiting for a Locksmith",
      paragraphs: [
        "A nighttime lockout in the Bronx adds a layer of personal safety consideration on top of the access problem itself. Standing on an empty street outside a home at 2 AM or being stranded in a parking lot with a locked vehicle creates exposure that is worth addressing practically while the technician is in transit.",
        "If the lockout is at a residential address, remaining inside a lobby, vestibule, or near an intercom-accessible entrance is recommended rather than waiting on an open sidewalk or stoop. If a neighbor's doorbell can be rung for access to a common hallway, that is preferable to outdoor waiting. Notifying a building super or neighbor that a locksmith is on the way also provides a safety contact who knows the situation.",
        "For automotive lockouts in isolated or unfamiliar locations, remaining inside or near the vehicle where possible is the safest approach. The vehicle's hazard lights can be activated as a visual signal of a stationary situation. Our dispatch team can stay on a call with a stranded customer if requested, providing communication and reassurance while the technician is en route. If at any point personal safety is threatened beyond the lockout situation, 911 should be called first."
      ]
    },
    {
      heading: "Emergency Services Across Every Bronx Neighborhood",
      paragraphs: [
        "Coverage is maintained across the entire Bronx geographic area without exceptions for neighborhood, time, or weather. Northern Bronx neighborhoods including Wakefield, Woodlawn, Baychester, and Eastchester receive the same response commitment as the more centrally located neighborhoods of Fordham, Tremont, and Bedford Park. Eastern neighborhoods including Pelham Bay, Co-op City, and Throgs Neck are covered with dedicated staging in the eastern part of the borough.",
        "Southern Bronx neighborhoods including Mott Haven, Port Morris, Hunts Point, Melrose, and Longwood — areas with the highest commercial activity and residential density in the borough — receive the fastest response times due to the proximity of central staging locations. Waterfront areas including City Island and certain sections of Pelham Bay Park require navigation awareness that our locally based technicians possess from working in the borough daily.",
        "During major weather events — winter snow, summer storms, or periods of high traffic due to scheduled events — the dispatch team adjusts ETAs in real time to reflect actual travel conditions and provides updated estimates to customers who have called. If a weather delay significantly affects the original estimate, an alternative technician may be routed from a closer position to restore the expected response window."
      ]
    },
  ];

  const faqs = [
    {
      q: "Is emergency locksmith service available on holidays and weekends?",
      a: "Yes. Emergency locksmith service is dispatched 24 hours a day, 365 days a year — including all federal and state holidays, weekends, and overnight hours. Holiday and weekend service rates are disclosed upfront at the time of dispatch. No customer is ever told that a holiday creates an unavoidable delay or premium that was not communicated before the call."
    },
    {
      q: "What information should be ready when calling for emergency locksmith help?",
      a: "The following information helps dispatch the correct technician quickly: your exact address or nearest intersection, the type of lockout (home, car, or business), the lock or vehicle type if known, and contact number for the technician to call when approaching. For vehicle lockouts, the make, model, year, and color of the vehicle is helpful. Having proof of occupancy or ownership ready — ID, registration, lease document — will allow the verification step to proceed immediately on arrival."
    },
    {
      q: "Will my lock need to be replaced after a professional lockout?",
      a: "In most cases, no. Professional lock picking using tension wrenches and single-pin picks does not damage the lock cylinder. After the entry, the lock is inspected and confirmed to be working normally. Lock replacement is only recommended when pre-existing damage is found in the cylinder or mechanism — damage that existed before the lockout. If the lockout was caused by a broken key or failed cylinder, repair or replacement of that specific component is offered as an add-on during the same visit."
    },
    {
      q: "How can I tell if a locksmith advertising online is legitimate?",
      a: "A legitimate Bronx locksmith maintains a verifiable DCA license number, a physical business address (not just a PO box), and provides pricing before arriving on-scene rather than after work is completed. The DCA license can be verified at nyc.gov/consumers. Locksmiths who quote $15–$25 for an emergency call then charge $200+ on arrival are engaging in a well-documented form of fraud. Always ask for the DCA license number when calling."
    },
    {
      q: "What is the most common type of emergency locksmith call in the Bronx?",
      a: "The most common emergency call type is residential apartment lockouts — particularly late evenings when residents return home from work or social events without their keys. Car lockouts are the second most frequent category, peaking during afternoon and evening hours. Commercial lockouts are highest on Monday mornings when managers arriving to open a business discover access problems that may have originated over the weekend. All three types receive 24/7 priority dispatch."
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow bg-zinc-950 text-white">

        {/* 1. Emergency Hero */}
        <section className="relative bg-zinc-900 border-b border-zinc-800 py-20 lg:py-28" aria-label="24/7 emergency locksmith services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-500/40 px-3 py-1.5 rounded text-red-400 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" aria-hidden="true" />
                  <span>24 Hour Emergency Service — Active Now</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  24 Hour Emergency <br />
                  <span className="text-brand-yellow">Locksmith Services</span> in the Bronx
                </h1>
                <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
                  A lockout emergency does not wait for business hours. Whether it is 2 AM on a Tuesday, a holiday weekend, or the middle of a winter storm, our Bronx-based emergency dispatch operates continuously — sending the nearest available technician to your location within 15 to 30 minutes. Home lockouts, car lockouts, office lockouts, broken key extractions, and post-burglary security restorations are all handled with the same urgency and professionalism at any hour.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-sans font-bold tracking-wider uppercase text-sm sm:text-base px-6 py-4 rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-red-600/20 whitespace-nowrap"
                    aria-label={`Call 24/7 emergency locksmith line at ${siteConfig.contact.phoneDisplay}`}
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    <span>Call 24/7 Line: {siteConfig.contact.phoneDisplay}</span>
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
        <section className="bg-brand-yellow text-zinc-950 py-10 border-y border-yellow-400" aria-label="Service guarantees">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <span className="text-3xl" aria-hidden="true">⏱️</span>
              <h2 className="font-serif font-bold text-lg uppercase">15–30 Min Response</h2>
              <p className="text-xs font-sans text-zinc-800">Technicians staged at multiple Bronx locations for immediate dispatch.</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-zinc-900/10 py-6 md:py-0">
              <span className="text-3xl" aria-hidden="true">🛡️</span>
              <h2 className="font-serif font-bold text-lg uppercase">Licensed &amp; Bonded</h2>
              <p className="text-xs font-sans text-zinc-800">NYC DCA licensed, background-checked, and insured professionals.</p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl" aria-hidden="true">🔑</span>
              <h2 className="font-serif font-bold text-lg uppercase">Non-Destructive Entry</h2>
              <p className="text-xs font-sans text-zinc-800">Doors, frames, and lock hardware are protected throughout the process.</p>
            </div>
          </div>
        </section>

        {/* 3. Emergency Type Cards */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14" aria-label="Emergency lockout solution types">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold uppercase tracking-wider">Emergency Lockout Solutions</h2>
            <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
            <p className="text-zinc-400 font-sans text-sm">All types of Bronx lock emergencies are handled around the clock with professional non-destructive techniques.</p>
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
                <h3 className="text-xl font-serif font-bold text-brand-yellow uppercase tracking-wider">Main Office Location</h3>
                <div className="aspect-video w-full relative bg-zinc-900 rounded border border-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-600 text-sm">📍 {siteConfig.contact.address}</span>
                </div>
                <div className="space-y-2 text-zinc-400 text-sm font-sans">
                  <p><strong className="text-zinc-200">Address:</strong> {siteConfig.contact.address}</p>
                  <p><strong className="text-zinc-200">Coverage:</strong> All Bronx neighborhoods including Fordham, Riverdale, Soundview, Pelham Bay, Co-op City, Mott Haven, Castle Hill, Parkchester, and more.</p>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 text-zinc-300 font-sans text-base leading-relaxed">
                <h2 className="text-3xl font-serif font-bold text-white uppercase">The Importance of a Local Bronx Response</h2>
                <p>In a lockout emergency, distance is the most important variable. A locksmith dispatched from another borough — or worse, from a national dispatch center routing calls to the nearest available subcontractor — cannot guarantee a consistent response time in Bronx traffic. The borough's geography, with its mix of elevated expressways, residential grids, and dense street parking, requires local knowledge to navigate efficiently at any hour.</p>
                <p>Our technicians live and work in the Bronx. The main office is located at <strong className="text-white">{siteConfig.contact.address}</strong>, and service vehicles are staged at multiple positions throughout the borough. The 15 to 30-minute response commitment is achievable because it is backed by physical presence in the borough — not just a claim made on a website.</p>
                <p>Coverage extends to every Bronx neighborhood without exception — from the northernmost streets of Wakefield and Woodlawn to the southernmost commercial blocks of Mott Haven and Port Morris, and from the waterfront community of City Island to the western residential neighborhoods of Riverdale and Fieldston. No caller is treated as out-of-range or charged an extra distance premium for being in a less central location.</p>
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
                <p className="text-zinc-400 text-xs font-sans leading-relaxed">Fraudulent locksmiths quote $15–$25 and charge $200+ on arrival. Our rate is communicated when the call is placed — not after the lock is open. Ask any locksmith for their DCA license number before engaging them.</p>
              </div>

              {/* Trust signals */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-5">
                <div className="flex items-center gap-3 text-brand-yellow font-bold uppercase tracking-wider font-sans text-xs">
                  <UserCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Verified Professionals</span>
                </div>
                <ul className="space-y-4 font-sans text-sm text-zinc-350">
                  {[
                    ["DCA Licensed", "NYC Department of Consumer Affairs licensed locksmith business."],
                    ["Background Checked", "All technicians verified before serving Bronx customers."],
                    ["Marked Vehicles", "Company-branded service vans — not personal vehicles."],
                    ["Professional ID", "Technicians present ID credentials upon arrival at every call."],
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
              <p className="text-zinc-400 font-sans text-sm">Emergency units are fully stocked to perform any on-site locksmith task without delay.</p>
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
              <p className="font-serif font-bold text-white text-xl uppercase">Need Immediate Help Right Now?</p>
              <p className="text-zinc-400 text-sm font-sans max-w-xl">A Bronx technician is dispatched immediately. Average arrival time is 15 to 30 minutes across all neighborhoods — from City Island to Mott Haven, Riverdale to Co-op City.</p>
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


