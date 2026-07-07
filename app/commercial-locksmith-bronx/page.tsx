import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ServiceSchema from "@/components/ServiceSchema";
import { siteConfig } from "@/config/site";
import { Phone, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Commercial Locksmith Bronx",
  description: "Protect your Bronx business with professional commercial locksmith services. Office lockouts, master key systems, panic bar compliance, and high-securit...",
};

export default function CommercialPillar() {
  const subServices = [
    {
      name: "Office Lockout Assistance",
      href: "/office-lockout-bronx",
      desc: "Grade 1 commercial locks are bypassed damage-free to restore business access quickly.",
      cta: "See How Office and Business Lockouts Are Resolved",
    },
    {
      name: "Master Key System Design",
      href: "/master-key-system-bronx",
      desc: "Custom tiered access control is designed so managers hold one master key for all zones.",
      cta: "Understand How Master Key Systems Are Configured",
    },
    {
      name: "Panic Bar Installation & Repair",
      href: "/panic-bar-repair-bronx",
      desc: "Fire-code compliant egress devices are installed, repaired, and tested to meet NYC regulations.",
      cta: "Check Panic Bar Compliance and Repair Options",
    },
  ];

  const contentSections = [
    {
      heading: "Commercial Security Demands Greater Hardware Than Residential Standards",
      paragraphs: [
        "Commercial properties in the Bronx face security challenges that are fundamentally different in scale and complexity from residential environments. Higher daily traffic volumes, multiple staff members with varying access needs, regulatory requirements around emergency egress, and the financial consequences of theft or unauthorized access all demand hardware and access control systems that exceed residential-grade standards.",
        "The American National Standards Institute grades commercial locks from Grade 1 through Grade 3, with Grade 1 representing the highest performance standard. Commercial Grade 1 cylinders are tested for 1,000,000 operational cycles and are engineered to resist picking, drilling, and physical attack methods including impact loading. These are the standards that office buildings, retail properties, restaurants, and warehouses throughout the Bronx should meet — particularly for primary entry and storage access points.",
        "Our commercial locksmith team carries Grade 1 commercial hardware from manufacturers including Schlage Commercial, Yale Commercial, Sargent, and Corbin Russwin. The appropriate hardware grade is assessed for each application based on the door type, the frequency of use, the security risk level, and the specific NYC code requirements that apply to the property's occupancy classification."
      ]
    },
    {
      heading: "Commercial Lock Cylinder Types Used Across Bronx Businesses",
      paragraphs: [
        "Bronx commercial properties use several distinct lock cylinder configurations depending on building age, renovation history, and security requirements. Cylindrical commercial levers — surface-mounted locksets with a lever handle and integrated cylinder — are the most common type in modern commercial construction. These allow quick entry with a key while meeting ADA handle accessibility requirements and provide the mechanical security of a Grade 1 deadlatch.",
        "Mortise locksets, embedded in the door's edge, are the dominant lock type in older Bronx commercial buildings, particularly retail storefronts, light industrial units, and ground-floor commercial spaces in converted residential buildings. The mortise body houses a deadbolt, latch, and sometimes a privacy function in a single large case, providing more security in a single unit than most surface-mounted alternatives.",
        "Rim cylinders are used on gates, security doors, and secondary access points throughout Bronx commercial properties. These cylinders mount on the surface of the door and connect directly to a vertical bolt or deadbolt mechanism. They are particularly common on metal gate doors used for after-hours security in retail districts along Fordham Road, Grand Concourse, and Third Avenue commercial strips."
      ]
    },
    {
      heading: "Managing Staff Access and Key Control in Bronx Businesses",
      paragraphs: [
        "One of the most persistent operational security challenges for Bronx businesses is managing physical key access across a changing workforce. When an employee is hired, a key is issued. When that employee departs — whether planned or unexpected — that key must be recovered and accounted for. In practice, key recovery is inconsistently managed, and former employees often retain access to commercial properties they no longer work at through keys that were never returned.",
        "A master key system resolves the key proliferation problem by organizing access hierarchically. Individual employees receive change keys that open only their designated areas. Managers receive section master keys that open specific zones without the universal access of the grand master. The business owner or security officer holds the grand master. When any individual change key is lost or a staff member departs, only the single affected cylinder needs to be rekeyed — the rest of the system remains unchanged and functional.",
        "For businesses where rekeying is impractical due to high staff turnover or large numbers of access points, electronic access control provides an alternative. Key fob readers, card swipe systems, and PIN keypad entry allow access to be granted and revoked digitally without physical lock changes. Our commercial team advises on the appropriate access control solution based on the business's specific operational profile."
      ]
    },
    {
      heading: "NYC Fire Safety Code and Commercial Egress Requirements",
      paragraphs: [
        "New York City's fire safety and building codes impose specific egress hardware requirements on commercial properties that many business owners are unaware of until a code violation is issued by FDNY or DOB inspectors. Under NYC Building Code Chapter 10, all doors serving as required means of egress in assembly occupancies — restaurants, bars, gyms, event spaces, theaters — and other commercial occupancies with specific occupant loads must be equipped with panic exit hardware that allows door opening through a single pushing motion without the use of a key.",
        "Non-compliant businesses face monetary fines from the Department of Buildings, which can accumulate daily until compliance is achieved. In cases of significant violations or histories of non-compliance, temporary closure orders may be issued. Beyond the regulatory consequences, the life-safety implications of blocked or malfunctioning emergency egress are profound — building occupants unable to exit quickly during a fire or other emergency face heightened injury risk.",
        "Our commercial locksmith team conducts egress compliance assessments for Bronx businesses and installs, repairs, and certifies Von Duprin, Sargent, and Yale panic exit devices to meet the specific code requirements for each property's occupancy classification. All installation work is documented with compliance verification reports available for submission to code authorities."
      ]
    },
    {
      heading: "After-Hours Security Measures for Bronx Commercial Properties",
      paragraphs: [
        "Bronx commercial properties face elevated after-hours security risks, particularly in areas with high commercial activity and overnight foot traffic. Retail storefronts, restaurants, and small businesses are statistically the most frequent targets of opportunistic break-ins during non-operational hours. Hardening the security of entry and storage access points significantly reduces vulnerability during these windows.",
        "High-security deadbolts with anti-pick, anti-drill, and anti-bump pins are installed on primary entry doors as part of our commercial security upgrade services. Mortise lock deadbolts with hardened steel bolt guards resist leveraging attacks on the bolt face. Extended strike box assemblies — replacing standard shallow strikes with deep-set boxes anchored through the door frame into structural framing — dramatically improve resistance to kick-in attacks that defeat the lock by destroying the door frame rather than the lock itself.",
        "Secondary security measures such as door barricade bars, security hinges with non-removable pins, and security glass film for glazed entry doors are also recommended as part of a layered commercial security approach. Each measure addresses a different attack vector, and a combination of hardware improvements provides protection that no single component can achieve independently."
      ]
    },
  ];

  const faqs = [
    {
      q: "How quickly can a commercial lockout be resolved in the Bronx?",
      a: "Commercial lockouts are treated as priority dispatches. Our response time across the Bronx is 15 to 30 minutes. Upon arrival, Grade 1 commercial lock cylinders, mortise locksets, and electric strikes are bypassed using commercial-rated tools without damaging the door frame or lock body. An estimated arrival time is confirmed when the dispatch call is placed."
    },
    {
      q: "What is a master key system and how does it benefit my business?",
      a: "A master key system organizes building access into a tiered hierarchy where individual employees carry change keys that only open their specific areas, while managers or owners hold a single master key that opens all authorized zones. When a staff member departs, only their individual cylinder needs rekeying — the rest of the system remains functional. This eliminates key proliferation and provides clear, auditable access control."
    },
    {
      q: "Are panic bars legally required in my Bronx commercial building?",
      a: "Panic bars are required by NYC Building Code on egress doors of assembly occupancies — restaurants, bars, gyms, theaters, and similar spaces — regardless of occupant count in many classifications. Other commercial occupancies require panic hardware when occupant loads exceed thresholds defined by the Building Code. Our technicians provide compliance assessments for specific properties and install code-approved Von Duprin, Sargent, and Yale exit devices."
    },
    {
      q: "Can locks be changed quickly after an employee is terminated?",
      a: "Yes. Lock rekeying or cylinder replacement following a staff termination is one of the most common commercial locksmith service requests. The affected cylinder is rekeyed immediately during a same-day or emergency service call. If the employee held a master key, the system design implications are assessed and the master key hierarchy is updated accordingly. New keys are cut and distributed to current authorized staff at the same visit."
    },
    {
      q: "What is the difference between Grade 1 and Grade 2 commercial locks?",
      a: "ANSI/BHMA Grade 1 commercial locks are rated for 1,000,000 operational cycles and must pass rigorous forced-entry resistance tests including specific impact load thresholds. Grade 2 is rated for 500,000 cycles with lower force resistance. For Bronx commercial properties with high daily traffic, main entry doors, or storage areas with valuable contents, Grade 1 hardware provides significantly superior long-term durability and security."
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
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Commercial Locksmith Experts — The Bronx</span>
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Professional <span className="text-brand-yellow">Commercial Locksmith</span> Services in the Bronx
                </h1>
                <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed">
                  Bronx businesses need Grade 1 hardware, code-compliant egress devices, and organized access control — not the residential-grade products found at big-box hardware stores. Our commercial locksmith team delivers professional-grade solutions for office lockouts, master key system design, panic bar installation, and high-security lock upgrades across all Bronx commercial properties, dispatched 24/7 with priority response.
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
            <p className="text-zinc-400 font-sans text-sm">Tailored commercial lock and access solutions for Bronx offices, retail spaces, restaurants, and warehouses.</p>
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
                  <h3 className="font-serif font-bold text-brand-yellow text-base uppercase tracking-wider">What Bronx Businesses Receive</h3>
                  <ul className="space-y-4 font-sans text-sm text-zinc-350">
                    {[
                      ["Grade 1 Hardware", "Heavy-duty commercial cylinders rated for high-traffic daily use."],
                      ["Priority Dispatch", "Commercial lockouts responded to immediately — 24/7."],
                      ["NYC Code Compliance", "Panic bars and exit devices installed to meet Fire and Building Code."],
                      ["Custom Access Design", "Master key systems engineered to your building's specific access needs."],
                      ["Transparent Invoicing", "Itemized invoices provided for business expense and insurance documentation."],
                    ].map(([title, desc], i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                        <span><strong>{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-3">
                  <p className="text-zinc-500 text-xs font-sans">Locked out of your office or retail space right now?</p>
                  <Link href="/24-hour-emergency-locksmith-bronx" className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover font-bold font-sans text-xs uppercase tracking-widest" aria-label="Request 24/7 emergency commercial lockout assistance">
                    <span>Request Emergency Commercial Help Now</span>
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


