import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ServiceSchema from "@/components/ServiceSchema";
import { siteConfig } from "@/config/site";
import { Phone, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Residential Locksmith Bronx | Home Lockouts, Rekeying & Smart Locks",
  description: "Professional residential locksmith services in the Bronx. Home lockouts, apartment entry, lock rekeying, and smart lock installation dispatched in 15–30 minutes. Call 24/7.",
};

export default function ResidentialPillar() {
  const subServices = [
    {
      name: "Home Lockout Assistance",
      href: "/home-lockout-bronx",
      desc: "Damage-free residential entry — deadbolts and locksets are bypassed without drilling or frame damage.",
      cta: "See How House Lockouts Are Resolved Damage-Free",
    },
    {
      name: "Apartment Lockout Support",
      href: "/apartment-lockout-bronx",
      desc: "Expert unlocking of pre-war mortise locks and modern high-security deadbolts in Bronx apartments.",
      cta: "Find Out How Apartment Doors Are Unlocked Safely",
    },
    {
      name: "Lock Rekeying Service",
      href: "/lock-rekeying-bronx",
      desc: "Internal cylinder pins are replaced so old keys no longer function — a fast, cost-effective security upgrade.",
      cta: "Understand How Lock Rekeying Secures Your Home",
    },
    {
      name: "Smart Lock Installation",
      href: "/smart-lock-installation-bronx",
      desc: "Keyless deadbolts are installed and configured on apartment and house doors across the Bronx.",
      cta: "Check Smart Lock Installation Options for Your Door",
    },
  ];

  const contentSections = [
    {
      heading: "Residential Lock Hardware in the Bronx — A Diverse Landscape",
      paragraphs: [
        "The Bronx is home to one of the most architecturally varied residential landscapes in New York City. Pre-war apartment buildings from the 1910s through the 1940s — concentrated in the Grand Concourse Historic District, Fordham Heights, and Morris Heights — are equipped with heavy embedded mortise lock bodies, thick solid-wood doors, and multi-bolt configurations that bear little resemblance to the surface-mounted deadbolts installed in post-war and modern construction. Each lock type requires a different set of tools and techniques to service professionally.",
        "Post-war apartment complexes built from the 1950s through the 1980s — prevalent in Co-op City, Parkchester, and large Mitchell-Lama housing developments — typically use heavy-duty commercial-grade cylindrical deadbolts combined with building-wide master key systems managed by housing management. These locks are often high-security Schlage or Yale cylinders with restricted keyways that require more nuanced picking and rekeying techniques than standard residential hardware.",
        "Newer residential construction and recently renovated properties throughout the South Bronx, Mott Haven, and Longwood increasingly feature electronic access systems, keypad deadbolts, and smart lock platforms that require digital configuration in addition to mechanical installation. Our residential locksmith team is trained and equipped to service the full spectrum of lock types found across all Bronx housing eras and building classes."
      ]
    },
    {
      heading: "Why Professional Residential Lockout Service Is Essential",
      paragraphs: [
        "When a home lockout is experienced, the instinct to resolve the situation independently using available materials is understandable. However, improvised residential entry attempts — using credit cards against latch bolts, bent metal tools through mail slots, or wood shims against door frames — carry significant risks of damage that compound the original problem. Modern spring latch bolts are designed with anti-shimming tabs that prevent credit card bypass. Deadbolts cannot be bypassed by this method at all.",
        "Metal tools inserted through mail slots or pet doors can scratch door paint, bend internal linkage rods, or trigger alarm sensors, creating noise complaints in apartment buildings and potential calls to building security. Attempting to remove hinge pins from the outside on residential doors — a frequently suggested online technique — is impossible on doors with security hinge pins and typically results in damaged hinge mechanisms that require carpenter-level repair.",
        "A professional residential locksmith uses precision tools that apply no force to the door, frame, or lock body. Pin tumbler cylinders are picked using tension wrenches and single-pin picks that manipulate only the internal pin stacks. The cylinder rotates as if the correct key had been inserted, and no mark is left on the door, lock face, or frame. This approach is faster, safer, and less expensive than any improvised alternative."
      ]
    },
    {
      heading: "Lock Grading Standards — Understanding Residential Security Levels",
      paragraphs: [
        "Residential door locks are rated by the American National Standards Institute (ANSI) and the Builders Hardware Manufacturers Association (BHMA) on a three-grade scale that measures resistance to physical attacks, operational cycles, and environmental conditions. Understanding these grades helps Bronx homeowners make informed decisions when replacing or upgrading their hardware.",
        "Grade 3 locks are the lowest standard and are found in many lower-cost residential properties. They are rated for 250,000 operational cycles and provide minimal resistance to kick-in or drilling attacks. Grade 2 locks, the most commonly sold residential grade in hardware stores, are rated for 500,000 cycles and offer moderate physical resistance. Grade 1 locks — the commercial residential standard — are rated for 1,000,000 cycles and provide the highest level of resistance to forced entry, including resistance to specific attack methods measured in foot-pounds of force.",
        "For Bronx residents in ground-floor apartments, corner units, or homes that have previously been targeted, upgrading from Grade 3 to Grade 1 deadbolts is a meaningful security improvement. Our residential technicians carry Grade 1 deadbolts from Schlage, Medeco, and Mul-T-Lock in common finishes for immediate installation at the time of any service call. A hardware assessment and recommendation are provided as part of every lockout service visit."
      ]
    },
    {
      heading: "After a Move — Security Steps Every Bronx Tenant Should Take",
      paragraphs: [
        "Moving into a new Bronx apartment or home requires more than unpacking boxes. The security status of the new property is unknown at move-in: the previous tenant may have distributed key copies to family members, service providers, a partner from a former relationship, or neighbors who were given emergency copies. None of these parties are required to return their keys upon the previous tenant's departure, and building management rarely tracks key distribution at the individual tenant level.",
        "Rekeying all entry locks immediately upon move-in is the single most effective security step a new tenant can take. The internal pins of each cylinder are replaced during a single service visit, rendering all previously issued keys permanently non-functional. The cost of a rekey service is a fraction of the cost of replacing locks entirely, and the security outcome is identical — all old keys are useless and only the new keys issued at the time of rekeying provide access.",
        "For residents moving into properties where the locks have not been replaced in many years, a lock assessment is recommended alongside the rekey. Cylinders with worn pins — identifiable by a loose, imprecise feeling when the key is turned — are more vulnerable to picking and bumping than tight, well-maintained cylinders. Replacing worn cylinders at the time of rekeying provides both the key control benefit of rekeying and the mechanical security benefit of fresh hardware."
      ]
    },
    {
      heading: "Smart Lock Technology for Bronx Homes and Apartments",
      paragraphs: [
        "Smart lock technology has become increasingly accessible and practical for Bronx residential properties. Models that retrofit onto existing deadbolt hardware — replacing only the interior thumb turn while leaving the exterior cylinder unchanged — are particularly well-suited for apartment tenants who must maintain the door's exterior appearance per lease terms or building management requirements.",
        "For homeowners or tenants with landlord permission to modify the exterior hardware, full deadbolt replacement smart locks provide the complete keyless experience, including keypad entry, smartphone app control, auto-lock functionality, and digital access logs. These models eliminate physical keys entirely for day-to-day use while retaining a mechanical backup cylinder for emergencies.",
        "Installation compatibility with Bronx pre-war apartment doors requires specific assessment before a model is selected. Thick door slabs, non-standard backsets, and mortise lock recesses all affect which smart lock formats can be installed without structural modification. Our installation technicians measure the door's precise dimensions before specifying a model, ensuring clean installation without irreversible modifications to the door or frame."
      ]
    },
  ];

  const faqs = [
    {
      q: "What is the difference between rekeying and replacing a lock?",
      a: "Rekeying changes the internal brass pin configuration of the existing cylinder so that old keys no longer operate the lock and a new key takes over. The lock body, handle, and deadbolt mechanism remain in place. Lock replacement involves removing the entire lock assembly and installing new hardware. Rekeying is recommended when the hardware is in good condition; replacement is recommended when the mechanism is damaged or when a security upgrade is desired."
    },
    {
      q: "Can you open a high-security apartment deadbolt without drilling?",
      a: "Yes, in most cases. High-security deadbolts with spool pins, mushroom drivers, or sidebar mechanisms require more time and refined technique than standard pin tumbler locks, but they are opened using non-destructive picking methods. Drilling is used only as a last resort and only with the customer's explicit agreement after all non-destructive methods have been exhausted."
    },
    {
      q: "Can a smart lock be installed on a Bronx pre-war apartment door?",
      a: "Yes. Pre-war doors require specific adaptation techniques due to their greater thickness, non-standard backset measurements, and sometimes embedded mortise lock bodies. Retrofit smart locks that mount on the interior thumb turn are the most practical option for pre-war doors where the exterior hardware cannot be modified. Our installation technicians assess the door's specific dimensions before selecting and installing any smart lock model."
    },
    {
      q: "How long does a residential lockout take to resolve?",
      a: "Response time across the Bronx averages 15 to 30 minutes. Standard pin tumbler deadbolts are typically opened within 5 to 15 minutes on-scene. High-security locks or damaged cylinders may require additional time. The technician provides an honest time estimate after the initial inspection of the lock type and condition."
    },
    {
      q: "Is rekeying necessary if I am the original tenant and have never lost my keys?",
      a: "It is strongly recommended even in this case. Building management, previous super, contractors, and emergency responders who may have been granted temporary key access during your tenancy all represent potential security considerations. Rekeying every two to three years as part of routine home security maintenance is a best practice regardless of whether a key loss event has occurred."
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
                  The Bronx's residential landscape spans pre-war mortise locks, post-war commercial deadbolts, and modern smart lock systems — each requiring a different professional approach. Whether entry to a home is needed after a lockout, locks need rekeying after a move, or a smart deadbolt needs to be installed on a thick pre-war door, our residential locksmith team provides fast, damage-free service dispatched 24 hours a day across every Bronx neighborhood.
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
                      ["NYC DCA Licensed", "Certified and compliant with all NYC Department of Consumer Affairs locksmith regulations."],
                      ["15–30 Min Arrival", "Local mobile units stationed across the Bronx respond to emergencies immediately."],
                      ["Premium Hardware Stocked", "Schlage, Yale, Kwikset, Medeco, and Mul-T-Lock deadbolts available on the van."],
                      ["All Bronx Housing Types", "Pre-war mortise locks, post-war deadbolts, and modern smart locks all serviced."],
                      ["Upfront Pricing", "Firm quote given before work starts — no billing surprises."],
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
                  <Link href="/24-hour-emergency-locksmith-bronx" className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover font-bold font-sans text-xs uppercase tracking-widest" aria-label="Request 24/7 emergency residential locksmith assistance">
                    <span>Request 24/7 Home Lockout Assistance Now</span>
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
