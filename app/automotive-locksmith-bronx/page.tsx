import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ServiceSchema from "@/components/ServiceSchema";
import { siteConfig } from "@/config/site";
import { Phone, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Automotive Locksmith Bronx",
  description: "Expert mobile automotive locksmith services in the Bronx. Car lockouts, transponder key cutting, key fob programming, and ignition repair dispatched in ...",,
};

export default function AutomotivePillar() {
  const subServices = [
    {
      name: "Car Lockout Assistance",
      href: "/car-lockout-bronx",
      desc: "Damage-free vehicle entry using professional Lishi tools — no prying, no scratched doors.",
      cta: "See How Car Lockouts Are Resolved Without Damage",
    },
    {
      name: "Lost Car Key Replacement",
      href: "/lost-car-key-replacement-bronx",
      desc: "Cut and program new transponder keys on-site for almost all vehicle makes and models.",
      cta: "Understand How On-Site Car Keys Are Cut and Programmed",
    },
    {
      name: "Ignition Repair & Replacement",
      href: "/ignition-repair-bronx",
      desc: "Repair jammed ignition cylinders and extract broken key fragments without towing.",
      cta: "Find Out How Jammed Ignitions Are Fixed On-Site",
    },
    {
      name: "Key Fob Replacement & Programming",
      href: "/car-key-fob-replacement-bronx",
      desc: "Sync new smart fobs and proximity remotes to your vehicle's ECU using OBD-II diagnostics.",
      cta: "See How Key Fobs Are Programmed to Your Vehicle",
    },
  ];

  const faqs = [
    {
      q: "Can you replace transponder keys without going to a dealership?",
      a: "Yes. Transponder keys are cut and programmed on-site by our mobile technicians using the same diagnostic equipment used by dealerships. The vehicle's OBD-II port is accessed directly to pair the new key chip with the engine control module. No towing is required, and the entire process is completed in under an hour at the location where the vehicle is parked."
    },
    {
      q: "How long does car lockout service take in the Bronx?",
      a: "Our dispatch-to-arrival time across the Bronx averages 15 to 30 minutes. The unlocking process itself takes 5 to 15 minutes depending on the lock type. Modern vehicles with Lishi-compatible door cylinders are unlocked quickly. Older vehicles or high-security models may require an additional few minutes for the appropriate bypass technique to be applied."
    },
    {
      q: "Is a mobile locksmith more affordable than a dealership for car keys?",
      a: "In almost all cases, yes. Dealerships require towing the vehicle to their facility, adding towing charges on top of their labor rates. Key blank orders can also delay service by days. Mobile locksmiths stock blanks on the van and complete programming on-site. The combined saving on towing and labor typically makes mobile locksmith service significantly more affordable than the dealership equivalent."
    },
    {
      q: "What vehicle brands are covered for key replacement?",
      a: "Coverage extends to domestic brands including Ford, Chevrolet, GMC, Chrysler, Dodge, and Jeep, as well as imports including Toyota, Honda, Nissan, Hyundai, Kia, Subaru, and Mazda. European brands including BMW, Mercedes-Benz, Audi, Volkswagen, Volvo, and Porsche are also supported using brand-specific programming platforms. If your specific model is not listed, contact our dispatch team for confirmation."
    },
    {
      q: "Can a broken key stuck in the ignition be removed without replacing the ignition?",
      a: "Yes. Professional key extractor tools are used to remove broken key fragments from the ignition cylinder without damaging the internal wafer stack. After extraction, a new key is cut and tested. Ignition replacement is only recommended when the cylinder housing or wafer stack was already damaged before or during the key break, which is determined through on-site inspection after extraction."
    },
  ];

  const contentSections = [
    {
      heading: "The Complexity of Modern Vehicle Security Systems",
      paragraphs: [
        "Modern vehicles are protected by multi-layered electronic security systems that have transformed automotive locksmithing from a purely mechanical trade into a sophisticated combination of mechanical skill and electronic diagnostics. Every vehicle manufactured after 1996 contains a transponder system that links the key chip's radio signal to the engine control module. If the module does not detect an authorized chip signal when the ignition is turned, the fuel injectors and starter motor are electronically disabled — the engine will not start regardless of how accurately the key blade is cut.",
        "This immobilizer technology was introduced industry-wide to reduce vehicle theft rates, and it has been highly effective — car theft statistics dropped dramatically following its adoption. However, it also means that key loss and lockout situations require professional intervention beyond what a hardware store key duplicator can provide. The physical blade alone is insufficient; the chip must also be registered to that specific vehicle's ECM.",
        "Our automotive locksmith service addresses both the mechanical and electronic components of every automotive lock and key problem encountered in the Bronx. Vans are equipped with professional computerized key cutters, transponder programmers, Lishi decoding tools, and OBD-II diagnostic platforms that allow every task — from door entry to key programming — to be completed on-site where the vehicle is parked.",
      ]
    },
    {
      heading: "Mobile Automotive Locksmith Coverage Across the Bronx",
      paragraphs: [
        "The Bronx is one of the most densely populated boroughs in New York City, with vehicle lockout situations arising constantly across its diverse neighborhoods. Automotive locksmith calls are received from drivers stranded near Yankee Stadium before or after events, from commuters parked on residential streets in Parkchester and Co-op City, and from delivery drivers whose commercial vans become inaccessible during busy Hunts Point market hours.",
        "Technicians are staged at strategic locations across the borough to minimize response times across all coverage zones. North Bronx neighborhoods including Woodlawn, Norwood, and Wakefield are reached from staging points near the northern end of the borough. Central Bronx neighborhoods including Fordham, Bedford Park, and Tremont are covered from centrally located vehicles. South Bronx commercial districts including Mott Haven, Port Morris, and Longwood receive coverage from mobile units stationed near the major expressway entries.",
        "Coverage extends around the clock including overnight hours, holiday periods, and during major weather events. Winter lockouts — both key freezing issues and battery-related electrical failures affecting keyless entry systems — are among the most frequent cold-weather dispatch categories in the Bronx. Our technicians carry cold-weather entry tools and electrical diagnostic equipment specifically for winter automotive locksmith scenarios."
      ]
    },
    {
      heading: "Car Key Technology — How Transponders, Smart Keys, and Fobs Differ",
      paragraphs: [
        "Understanding the type of key a vehicle uses is essential when a replacement or repair is needed. Standard transponder keys contain a glass or plastic capsule chip embedded in the key head. The chip contains a rolling code that the vehicle's immobilizer reads via an antenna ring around the ignition cylinder. This type is found in most vehicles manufactured between 1995 and 2010 and remains common across a wide range of makes and models still on Bronx roads.",
        "Proximity smart keys — introduced widely after 2008 — contain more advanced radio frequency chips that communicate with the vehicle's antenna network without being inserted into anything. The vehicle detects the fob's presence within a few feet, unlocking doors automatically and enabling push-button starting. Smart key programming requires direct ECU communication through the OBD-II port and specialized brand-specific software rather than the simpler ignition-sequence procedures used for older transponders.",
        "Remote head keys combine a physical blade, a transponder chip, and a built-in remote transmitter in a single unit. The blade opens door locks mechanically and turns the ignition, while the electronic components handle immobilizer authorization and remote locking. All three key types are supported by our mobile service platforms across every major vehicle brand sold in the American market."
      ]
    },
    {
      heading: "How to Verify a Legitimate Automotive Locksmith in the Bronx",
      paragraphs: [
        "Automotive locksmith scams targeting distressed vehicle owners are unfortunately common in New York City. Fraudulent operators advertise low rates online, dispatch an unlicensed driver who performs work, and then demand significantly higher fees upon completion by citing hidden charges. Recognizing a legitimate automotive locksmith before service begins protects drivers from this fraud.",
        "A legitimate automotive locksmith arrives in a clearly identified vehicle with company markings, presents a professional ID upon request, and provides a firm written or verbal price quote before beginning any work. Under New York City's locksmith licensing laws, locksmiths must hold a valid NYC Department of Consumer Affairs license. Asking for the license number and verifying it through the DCA's online portal is a direct confirmation of legitimacy.",
        "All pricing for our automotive locksmith services is provided upfront when the dispatch call is placed. The quote given on the phone is the price charged at completion, with no additions unless the job scope changes in a material way that is explicitly agreed to before proceeding. Our technicians present professional identification and DCA credentials upon arrival."
      ]
    },
    {
      heading: "Ownership Verification — Security Procedures for Auto Locksmith Service",
      paragraphs: [
        "Before any vehicle is unlocked or a key is produced, vehicle ownership is verified. This step is required under NYC locksmith regulations and protects vehicle owners from having their property accessed by unauthorized individuals claiming a lockout situation. Acceptable verification includes the vehicle's registration document, insurance card, title, or a valid ID matching the registered owner's name.",
        "In situations where documentation is not immediately available — particularly common when the key is locked inside the vehicle along with the wallet — alternative verification methods are used. These may include the registered owner providing a vehicle description that matches the VIN plate visible through the windshield, or reaching the registered owner by phone if a different authorized driver is present at the scene.",
        "All verification steps are communicated to customers when the service call is placed so that appropriate documents can be gathered while the technician is in transit. This proactive communication minimizes verification delays at the vehicle's location and allows service to begin immediately upon arrival."
      ]
    },
  ];

  return (
    <>
      <Header />

        <ServiceSchema
          name="Automotive Locksmith Services in the Bronx"
          description={metadata.description}
          url={`${siteConfig.url}/automotive-locksmith-bronx`}
        />

      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Hero */}
        <section className="relative bg-zinc-900 py-20 lg:py-28 border-b border-zinc-800" aria-label="Automotive locksmith services hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Automotive Locksmith Experts — The Bronx</span>
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Comprehensive <span className="text-brand-yellow">Automotive Locksmith</span> Services in the Bronx
                </h1>
                <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed">
                  Modern vehicles are secured by sophisticated electronic immobilizer systems that require specialized tools and professional training to address safely. Whether a vehicle lockout is experienced, car keys are lost, an ignition cylinder has jammed, or a proximity fob needs to be programmed, our fully equipped mobile automotive locksmith units are dispatched 24 hours a day across every Bronx neighborhood — reaching most locations within 15 to 30 minutes of the initial call.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-6 py-4 rounded transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-yellow/15 whitespace-nowrap"
                    aria-label={`Call our automotive locksmith dispatch line at ${siteConfig.contact.phoneDisplay}`}
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
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Automotive lock and key specialties">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl font-serif font-bold uppercase">Automotive Lock & Key Specialties</h2>
            <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
            <p className="text-zinc-400 font-sans text-sm">Specialized automotive security services available 24/7 across all Bronx neighborhoods.</p>
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
        <section className="bg-zinc-900/50 py-20 border-y border-zinc-900" aria-label="Automotive security expertise">
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
              <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Automotive service highlights">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-5">
                  <h3 className="font-serif font-bold text-brand-yellow text-base uppercase tracking-wider">Why Choose Our Auto Locksmiths?</h3>
                  <ul className="space-y-4 font-sans text-sm text-zinc-350">
                    {[
                      ["15–30 Min Response", "Locally stationed mobile units respond immediately across the Bronx."],
                      ["On-Site Key Workshop", "Keys are cut and programmed right where the vehicle is parked."],
                      ["All Brands Supported", "Domestic, import, and European brands all covered with correct blanks and software."],
                      ["Upfront Pricing", "A firm quote is given before any work begins — no hidden charges."],
                      ["DCA Licensed & Bonded", "Compliant with all NYC Department of Consumer Affairs locksmith regulations."],
                    ].map(([title, desc], i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                        <span><strong>{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-3">
                  <p className="text-zinc-500 text-xs font-sans">Locked out at night or stuck in an unfamiliar part of the Bronx?</p>
                  <Link href="/24-hour-emergency-locksmith-bronx" className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover font-bold font-sans text-xs uppercase tracking-widest" aria-label="Request 24/7 emergency automotive locksmith assistance">
                    <span>Request Emergency Assistance Now</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" aria-label="Automotive locksmith frequently asked questions">
          <h2 className="text-3xl font-serif font-bold text-center uppercase tracking-wide">Automotive Locksmith — Frequently Asked Questions</h2>
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

