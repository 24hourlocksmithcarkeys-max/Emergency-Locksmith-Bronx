import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ServiceSchema from "@/components/ServiceSchema";
import { siteConfig } from "@/config/site";
import { Phone, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Specialty Locksmith Bronx | Safe Opening, Mailbox & Cabinet Lock Service",
  description: "Specialty locksmith services in the Bronx. Safe unlocking without damage, USPS-compliant mailbox cylinder replacement, and cabinet lock service. Available 24/7.",
};

export default function SpecialtyPillar() {
  const subServices = [
    {
      name: "Safe Unlocking & Repair",
      href: "/safe-unlocking-bronx",
      desc: "Mechanical dial and digital electronic safes are opened using manipulation tools — damage to contents is avoided.",
      cta: "Find Out How Safes Are Opened Without Damaging the Contents",
    },
    {
      name: "Mailbox Lock Replacement",
      href: "/mailbox-lockout-bronx",
      desc: "Faulty mailbox cylinders are replaced with USPS-approved hardware to prevent mail theft.",
      cta: "Check How Mailbox Locks Are Replaced and Secured",
    },
  ];

  const contentSections = [
    {
      heading: "Specialty Lock Services Require Dedicated Tools and Training",
      paragraphs: [
        "Specialty locksmith services address security situations that fall outside the scope of standard door lock and key work. Safes, mailboxes, file cabinets, cash drawers, and utility padlocks all use locking mechanisms specifically designed for their particular application — and each requires tools, training, and knowledge that a general hardware technician does not possess. Attempting to open a mechanical combination safe with improvised tools, or replace a USPS mailbox cylinder without the correct cam configuration, can cause irreversible damage that multiplies the cost of the original problem.",
        "Safe cracking — more properly called safe manipulation — is a discipline that combines an understanding of mechanical engineering with practiced acoustic detection skills. A licensed safe technician listens for specific friction events inside the wheel pack as the dial is rotated, building a picture of the notch positions on each disc. This non-destructive process takes time but preserves both the safe's locking mechanism and the contents inside. Drilling, the destructive alternative, is a last resort that permanently damages the lock body and requires expensive replacement of the internal mechanism.",
        "Mailbox cylinder replacement requires knowledge of USPS compliance standards for multi-tenant residential mail hardware. A non-compliant replacement cylinder — the wrong face diameter, an incompatible cam size, or a non-approved lock grade — can result in mail delivery being suspended by the local post office until compliant hardware is installed. Our specialty locksmith team carries USPS-approved replacement cylinders in the full range of standard sizes found in Bronx apartment mailbox panels."
      ]
    },
    {
      heading: "Safe Security in Bronx Homes and Businesses — What Is at Risk",
      paragraphs: [
        "Residential and commercial safe use in the Bronx has grown significantly as residents and business owners seek to protect an expanding category of high-value items from both theft and fire damage. Cash reserves, original document copies — birth certificates, property deeds, insurance policies — jewelry, firearms, external hard drives, and prescription medications are among the most commonly stored safe contents reported by Bronx clients.",
        "Many residential safes in the Bronx are fireproof document safes rated to protect paper at temperatures up to 1,550°F for 30 to 60 minutes. These ratings are meaningful in the context of average residential fire temperature and duration, but they come with a trade-off: the fire-resistant material used to line the interior of these safes is moisture-containing, meaning that the same fire protection that saves paper can damage electronic media such as USB drives and CDs during extended fire exposure. Understanding what a safe is designed to protect is important when choosing the appropriate model.",
        "Commercial deposit safes in Bronx retail businesses, restaurants, and pharmacies present a different security challenge. These safes are designed to allow cash drops through a slot without allowing withdrawal access — only the manager or owner can open the main compartment. When a combination is lost following a staff change, ownership transition, or simply through time, the entire day's receipts can become inaccessible. Our safe technicians are dispatched for commercial safe openings with the same urgency as any other business security emergency."
      ]
    },
    {
      heading: "The Growing Threat of Mail Theft in the Bronx",
      paragraphs: [
        "Mail theft in New York City is a federal crime that is alarmingly prevalent in densely populated urban environments. The United States Postal Inspection Service consistently reports higher mail theft complaint rates in metropolitan areas with large multi-tenant apartment buildings — precisely the housing type that characterizes large sections of the Bronx. When a mailbox lock fails or is tampered with, every delivery cycle exposes sensitive correspondence to theft.",
        "The most damaging mail items targeted by thieves include new debit and credit cards, bank statements, government benefit documents, IRS correspondence, prescription medications, and check payments. Identity fraud enabled by stolen mail can take years to fully resolve, involves extensive documentation and dispute processes with financial institutions, and can damage credit scores in ways that affect housing and employment applications.",
        "Building owners and landlords have a responsibility under New York State's Multiple Dwelling Law to maintain functional and secure mailbox hardware in residential rental properties. When a cylinder fails in a multi-tenant panel, it is the landlord's responsibility to arrange replacement. Individual tenants who cannot reach building management for an immediate response may arrange service directly — our technicians document the replacement for the building's records and coordinate with management if requested."
      ]
    },
    {
      heading: "File Cabinet, Cash Drawer, and Furniture Lock Services",
      paragraphs: [
        "Beyond safes and mailboxes, a range of furniture and utility lock situations arise regularly in Bronx homes and businesses. Lateral file cabinets in office environments use cam lock cylinders to lock all drawers simultaneously through a single cylinder in the top drawer. When a filing cabinet key is lost or a cylinder fails, the entire cabinet becomes inaccessible — potentially blocking access to client records, contracts, employee files, or financial documentation.",
        "File cabinet locks are opened using professional bypass techniques that do not damage the drawer tracks, cam mechanism, or cabinet frame. After opening, a replacement cylinder is installed and keyed to a new key, or rekeyed to an existing key if the cabinet shares a key profile with other office locks. Additional key copies are cut at the time of service.",
        "Cash drawer locks in Bronx retail businesses and restaurants are small cam lock cylinders that secure the till drawer. These are frequently lost or damaged through normal handling and require replacement rather than rekeying. Our specialty service carries common cash drawer cylinder sizes and provides new key sets immediately. Padlocks used on Bronx storage units, shipping containers, and equipment cages are also opened and replaced when combinations are forgotten or keys are lost."
      ]
    },
    {
      heading: "How to Choose a Qualified Specialty Locksmith in the Bronx",
      paragraphs: [
        "Specialty lock services — particularly safe opening — attract fraudulent operators who claim expertise they do not possess, charge significantly above-market rates, and sometimes cause unnecessary damage to safes that could have been opened non-destructively. Choosing a qualified specialty locksmith requires the same diligence as any professional service selection.",
        "A qualified safe technician holds credentials from recognized industry bodies such as SAVTA (Safe and Vault Technicians Association) or ALOA (Associated Locksmiths of America). These organizations train and certify safe technicians in manipulation, electronic bypass, and responsible drilling techniques. Asking for credentials is a legitimate and appropriate step before authorizing any specialty lock work.",
        "All of our specialty locksmith technicians are licensed under the NYC Department of Consumer Affairs and maintain professional identification that is presented upon arrival at every service call. A firm price estimate is provided before any work begins. For safe opening specifically, an initial consultation about the safe model, age, and condition is conducted before the technician commits to a specific method — ensuring the right approach is selected for the specific situation rather than a one-size-fits-all procedure."
      ]
    },
  ];

  const faqs = [
    {
      q: "Can a safe be opened without the combination and without drilling?",
      a: "Yes. Mechanical combination safes are opened through dial manipulation — an acoustic process where the friction points of each wheel notch are detected through a stethoscope or electronic amplifier during controlled dial rotation. This determines the correct combination without it being known in advance. Electronic safes are opened using factory override procedures or solenoid bypass methods. Drilling is used only when all non-destructive methods are exhausted and with the client's explicit agreement."
    },
    {
      q: "How long does mailbox lock replacement take?",
      a: "A single cam lock cylinder replacement in a standard residential mailbox takes 10 to 20 minutes. Multi-unit panel replacements where several cylinders are being changed simultaneously are priced per cylinder and scheduled accordingly. The technician verifies residency before initiating any replacement, and two new keys are provided as standard upon completion."
    },
    {
      q: "Is safe opening available as an emergency service at night?",
      a: "Yes. Safe opening and specialty lock services are dispatched 24 hours a day, 7 days a week including nights, weekends, and holidays. Emergency safe openings — such as commercial deposit safes with inaccessible cash or residential safes blocking access to important documents — are treated with the same urgency as door lockout emergencies. After-hours pricing is disclosed upfront at the time of dispatch."
    },
    {
      q: "Can file cabinet locks be opened without damaging the cabinet?",
      a: "Yes. File cabinet cam locks are bypassed using professional tools that release the cam mechanism without damaging the drawer slides, cabinet frame, or cam housing. After the cabinet is opened, a replacement cylinder is installed. The process typically takes 15 to 30 minutes and leaves no visible mark on the cabinet. Drawer track repair is also available if the cabinet shows pre-existing damage."
    },
    {
      q: "What is the USPS requirement for mailbox locks in a Bronx apartment building?",
      a: "USPS regulations require that multi-tenant residential mailbox locks meet USPS approval specifications for their panel type. The specific requirements vary by panel manufacturer and installation type (horizontal 4C panels vs. recessed slot panels vs. pedestal boxes). Our technicians carry USPS-approved replacement cylinders for all common Bronx residential mailbox panel types. Non-compliant hardware can result in mail delivery suspension by the local post office."
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
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Specialty Locksmith Experts — The Bronx</span>
                <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Specialized Safe, Mailbox <br />
                  <span className="text-brand-yellow">&amp; Cabinet Lock Services</span> in the Bronx
                </h1>
                <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed">
                  When a safe combination is forgotten, a mailbox cylinder fails and exposes daily mail to theft, or a file cabinet locks away critical business documents, specialized intervention is required. Our Bronx specialty locksmith technicians are trained and equipped for safe manipulation, USPS-compliant mailbox cylinder replacement, and furniture lock service — all dispatched 24/7 with a target response time of 15 to 30 minutes.
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
            <p className="text-zinc-400 font-sans text-sm">Non-destructive access solutions for Bronx homes and businesses with safes, mailboxes, and cabinet locks.</p>
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
                  <h3 className="font-serif font-bold text-brand-yellow text-base uppercase tracking-wider">Specialty Service Capabilities</h3>
                  <ul className="space-y-4 font-sans text-sm text-zinc-350">
                    {[
                      ["Non-Destructive Safe Opening", "Dial manipulation protects the contents while accessing the mechanism."],
                      ["USPS-Compliant Mailboxes", "Only approved cylinders are installed — no risk of mail delivery suspension."],
                      ["Cabinet & Cash Drawer Service", "File cabinet and retail drawer locks opened and replaced on-site."],
                      ["24/7 Emergency Dispatch", "Specialty lock technicians sent anywhere in the Bronx around the clock."],
                      ["Upfront Pricing", "Honest estimates provided before any work begins — no surprises."],
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
                  <Link href="/24-hour-emergency-locksmith-bronx" className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover font-bold font-sans text-xs uppercase tracking-widest" aria-label="Request 24/7 emergency specialty locksmith assistance">
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
