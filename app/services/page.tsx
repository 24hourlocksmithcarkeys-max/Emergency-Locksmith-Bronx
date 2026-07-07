import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import { siteConfig } from "@/config/site";
import { Phone, ArrowRight, Key, HelpCircle, CheckCircle } from "lucide-react";

export const metadata = {
  title: "All Locksmith Services in the Bronx",
  description: "Complete locksmith services in the Bronx — car lockouts, home lockouts, office lockouts, rekeying, smart locks, master key systems, panic bars, and sa...",,
};

export default function ServicesPage() {
  const categories = [
    {
      name: "Automotive Locksmith",
      href: "/automotive-locksmith-bronx",
      pillarLabel: "View the Complete Automotive Locksmith Service Guide",
      icon: "🚗",
      desc: "Modern vehicle security combines mechanical cylinders with electronic transponder immobilizers — both must be addressed correctly when car access is lost. Our mobile automotive units carry on-site key cutting machines, transponder programmers, and Lishi decoding tools for damage-free door entry and complete key replacement without towing.",
      subs: [
        { name: "Car Lockout Assistance", href: "/car-lockout-bronx", label: "Go to car lockout service page" },
        { name: "Lost Car Key Replacement", href: "/lost-car-key-replacement-bronx", label: "Go to lost car key replacement page" },
        { name: "Ignition Repair & Replacement", href: "/ignition-repair-bronx", label: "Go to ignition repair service page" },
        { name: "Key Fob Replacement & Programming", href: "/car-key-fob-replacement-bronx", label: "Go to key fob programming page" },
      ]
    },
    {
      name: "Residential Locksmith",
      href: "/residential-locksmith-bronx",
      pillarLabel: "View All Residential Lock & Key Services",
      icon: "🏠",
      desc: "The Bronx's housing spans pre-war mortise locks, post-war commercial deadbolts, and modern smart lock systems — each requiring different tools and techniques. Our residential locksmiths service all door hardware configurations for houses, apartments, and co-ops across every Bronx neighborhood, including rekeying after a move and smart lock installation on thick pre-war doors.",
      subs: [
        { name: "Home Lockout Assistance", href: "/home-lockout-bronx", label: "Go to home lockout service page" },
        { name: "Apartment Lockout Support", href: "/apartment-lockout-bronx", label: "Go to apartment lockout service page" },
        { name: "Lock Rekeying Service", href: "/lock-rekeying-bronx", label: "Go to lock rekeying service page" },
        { name: "Smart Lock Installation", href: "/smart-lock-installation-bronx", label: "Go to smart lock installation page" },
      ]
    },
    {
      name: "Commercial Locksmith",
      href: "/commercial-locksmith-bronx",
      pillarLabel: "See All Commercial Business Security Services",
      icon: "🏢",
      desc: "Bronx businesses need Grade 1 hardware, organized access control, and code-compliant egress devices — standards that residential products do not meet. Our commercial locksmith team serves offices, retail spaces, restaurants, and warehouses with priority emergency dispatch, master key system design, and NYC fire code panic bar installation and compliance certification.",
      subs: [
        { name: "Office Lockout Assistance", href: "/office-lockout-bronx", label: "Go to office lockout service page" },
        { name: "Master Key System Design", href: "/master-key-system-bronx", label: "Go to master key system page" },
        { name: "Panic Bar Installation & Repair", href: "/panic-bar-repair-bronx", label: "Go to panic bar installation page" },
      ]
    },
    {
      name: "Specialty Locksmith",
      href: "/specialty-locksmith-bronx",
      pillarLabel: "Browse Safe, Mailbox & Specialty Lock Services",
      icon: "💼",
      desc: "Safe unlocking, mailbox cylinder replacement, and file cabinet service require specialized training and tools that general hardware technicians do not possess. Our specialty locksmith technicians use non-destructive manipulation techniques for safes, USPS-compliant cylinders for mailboxes, and professional cam lock tools for cabinet and cash drawer service.",
      subs: [
        { name: "Safe Unlocking & Repair", href: "/safe-unlocking-bronx", label: "Go to safe unlocking service page" },
        { name: "Mailbox Lock Replacement", href: "/mailbox-lockout-bronx", label: "Go to mailbox lock replacement page" },
      ]
    }
  ];

  const contentSections = [
    {
      heading: "How Our Service Categories Are Structured",
      paragraphs: [
        "Our locksmith services are organized into four primary categories — automotive, residential, commercial, and specialty — each with dedicated subservice pages that provide full technical information about specific service types. This structure is designed to help customers identify the exact service they need quickly, without wading through information that does not apply to their situation.",
        "Automotive locksmith services address vehicle access and key problems: car lockouts, key replacement, ignition repair, and key fob programming. Residential locksmith services address home and apartment access and security: house lockouts, apartment lockouts, lock rekeying, and smart lock installation. Commercial locksmith services address business security: office lockouts, master key system design, and panic bar installation. Specialty locksmith services address specific security hardware outside these main categories: safes, mailboxes, file cabinets, and padlocks.",
        "Emergency dispatch is available for all four service categories around the clock. Whether the emergency is a residential lockout at 2 AM, a commercial lockout preventing a business from opening at 7 AM, an automotive lockout in a parking garage on a Sunday afternoon, or a safe that cannot be opened before an important document is needed — the same dispatch priority and 15 to 30-minute response commitment applies."
      ]
    },
    {
      heading: "What Equipment Our Mobile Service Vans Carry",
      paragraphs: [
        "The ability to complete any locksmith service on-site — without returning to a shop or waiting for parts to be delivered — depends entirely on the inventory carried in the service van. Our mobile units are stocked to resolve the most common service scenarios immediately upon arrival without any additional trips or delays.",
        "For automotive services, vans carry computerized key cutting machines, blank inventory for major domestic and import vehicle brands, OBD-II transponder programmers with current software, Lishi pick tools for common vehicle door cylinders, and ignition extraction kits for broken key fragments. For residential services, vans carry pick sets covering all standard residential lock profiles, rekeying pin kits for Schlage, Kwikset, Yale, and Medeco cylinders, smart lock installation hardware, and Grade 1 deadbolt replacements in common finishes.",
        "For commercial services, vans carry heavy-duty commercial picks for Grade 1 cylindrical and mortise locks, panic bar installation hardware including Von Duprin and Yale exit devices, master key pin kits, and commercial cylinder replacements. For specialty services, vans carry safe manipulation tools, USPS-approved mailbox cylinder replacements in common Bronx panel sizes, and cam lock tools for file cabinet and furniture lock service."
      ]
    },
    {
      heading: "How to Know Which Service You Need",
      paragraphs: [
        "The most common question received from customers calling the dispatch line is not 'can you help me' but 'which service applies to my situation.' The answer depends on what property is locked, what type of lock is involved, and what outcome is needed.",
        "If access to a vehicle is blocked — whether the keys are locked inside, broken in the ignition, or entirely lost — the situation falls under automotive locksmith service. If a transponder key needs to be replaced, a key fob needs to be programmed, or an ignition cylinder is jammed, those are automotive services as well. The common thread is that the vehicle is involved.",
        "If access to a home or apartment is blocked — through a standard deadbolt, a mortise lock, or a smart lock with a dead battery — the situation falls under residential locksmith service. If security needs to be upgraded after a move, a lock needs rekeying, or a smart lock needs installation, those are residential services. If access to an office, retail space, or commercial building is blocked, or if business security hardware needs to be installed or repaired, the situation falls under commercial locksmith service. If a safe, mailbox, or file cabinet is the locked item, that is a specialty service."
      ]
    },
    {
      heading: "Same-Day Service and Non-Emergency Scheduling",
      paragraphs: [
        "Not every locksmith need is an emergency. Lock upgrades, smart lock installations, master key system designs, and rekeying projects can all be planned and scheduled in advance. Same-day scheduling is available for non-emergency service during regular business hours, and appointments can be booked for a specific window during which the technician will arrive.",
        "Pre-scheduled non-emergency service allows the technician to arrive with the specific hardware already selected and prepared based on information collected during the booking call — the correct smart lock model for the door type, the correct key blank for the vehicle, or the correct pin kit for the cylinder brand being rekeyed. This preparation reduces the on-site time and ensures that the service is completed efficiently in a single visit.",
        "For building managers and property owners with multiple units or multiple properties requiring service, a comprehensive service plan can be structured. Rekeying projects covering multiple apartments, master key system installations, and multi-property panic bar compliance assessments are all scheduled and coordinated as planned projects with clear scope and pricing before work begins."
      ]
    },
  ];

  const faqs = [
    {
      q: "Which service handles a car key that is locked inside the vehicle?",
      a: "A car key locked inside a vehicle falls under automotive locksmith service — specifically car lockout assistance. The technician uses Lishi tools to decode the door cylinder and open the door without damaging the lock, the door paint, or the weather stripping. The key inside can then be retrieved. If the key is also broken, lost, or needs replacement, that additional service can be performed during the same visit."
    },
    {
      q: "Can rekeying be done for a whole apartment building at once?",
      a: "Yes. Multi-unit rekeying projects are completed as scheduled service calls where the technician visits each unit in sequence. The project scope — number of cylinders, key profile, and number of keys per unit — is agreed before work begins. A master key compatible with all units can be configured as part of the project if desired. Pricing for multi-unit projects is provided per cylinder with a project minimum."
    },
    {
      q: "Is a consultation available before committing to a full master key system installation?",
      a: "Yes. A consultation for master key system design involves an on-site assessment of the property's doors, current hardware, and access requirements. The access matrix and proposed hierarchy are presented to the business owner for review before any installation work begins. The consultation cost is applied toward the installation if the project proceeds."
    },
    {
      q: "Can the same technician return for a follow-up if there is a problem after the service?",
      a: "Yes. All service calls are documented with the technician assignment and the work performed. If a follow-up is needed — a cylinder that was rekeyed is not functioning correctly, a smart lock requires reconfiguration, or a key that was cut does not operate smoothly — the same or a senior technician returns at no additional charge for issues that are directly attributable to the original work."
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Hero */}
        <section className="bg-zinc-900 border-b border-zinc-800 py-16 lg:py-24" aria-label="Services overview hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Complete Bronx Locksmith Coverage</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold uppercase tracking-tight">
              All Locksmith Services in the Bronx
            </h1>
            <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Every residential, automotive, commercial, and specialty locksmith service is available 24/7 across the Bronx — dispatched from local staging points within 15 to 30 minutes. Select a service category to read full technical details.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-6 py-3.5 rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-yellow/15 whitespace-nowrap"
                aria-label={`Call emergency locksmith dispatch at ${siteConfig.contact.phoneDisplay}`}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>Call Emergency Dispatch: {siteConfig.contact.phoneDisplay}</span>
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
                  <h3 className="font-serif font-bold text-brand-yellow text-sm uppercase tracking-wider">Our Service Commitment</h3>
                  <ul className="space-y-4 font-sans text-sm text-zinc-300">
                    {[
                      ["24/7 Emergency Dispatch", "All service categories available around the clock."],
                      ["15–30 Min Response", "Locally staged mobile units cover the entire Bronx."],
                      ["Non-Destructive Entry", "Picking tools first — drilling only as a documented last resort."],
                      ["Upfront Pricing", "Rate confirmed at dispatch — no on-scene price changes."],
                      ["DCA Licensed & Insured", "Compliant with all NYC Department of Consumer Affairs regulations."],
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

