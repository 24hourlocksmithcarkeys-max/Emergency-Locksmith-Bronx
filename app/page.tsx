import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import { WeAreTheExperts, GoldSupportBanner, LocksmithVerification } from "@/components/TrustElements";
import { QualitySecureSection, StuckOrLockedSection } from "@/components/VisualBanners";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { Phone, ShieldAlert, Award, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Emergency Locksmith Bronx | 24/7 Lockout Service" },
  description:
    "Locked out in the Bronx? Call (646) 264-1901 for home, apartment, office, and car lockouts. Price and arrival window confirmed before dispatch.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Emergency Locksmith Bronx | 24/7 Lockout Service",
    description:
      "Home, apartment, office, and car lockouts across the Bronx. Call for a price and arrival window before you commit.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Intro Copy Section */}
        <section className="bg-white text-zinc-900 py-24 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Heading and Local Hook */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Bronx Local Locksmith</span>
                <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Emergency Locksmith Bronx, Day or Night
                </h2>
                <div className="h-1 w-20 bg-brand-yellow rounded" />
                
                <p className="text-zinc-755 text-base sm:text-lg leading-relaxed font-sans font-normal">
                  A lockout is really a timing problem. You need to know who is coming, when they will arrive, and what the job will cost before you hand over a key or a card. That is the information a dispatcher should give you on the first call — and it is what we aim to confirm before any technician is sent.
                </p>
                <p className="text-zinc-650 text-base leading-relaxed font-sans">
                  <strong>Emergency Locksmith Bronx</strong> handles home, apartment, office, and vehicle lockouts across the borough, along with rekeying, smart lock installation, and key replacement. Our business address is <span className="underline decoration-brand-yellow decoration-2">{siteConfig.contact.address}</span>, and the service is mobile: the technician travels to your door, car, or storefront.
                </p>
              </div>

              {/* Right Column: Local Knowledge & neighborhood siloing */}
              <div className="lg:col-span-6 space-y-6 bg-zinc-50 p-8 rounded-lg border border-zinc-200">
                <h3 className="text-2xl font-serif font-bold text-zinc-950">
                  Deep Roots in Bronx Neighborhoods
                </h3>
                <p className="text-zinc-650 text-sm leading-relaxed font-sans">
                  The Bronx is a unique place with unique security needs. From the historic apartment buildings in <strong>Grand Concourse</strong> to the bustling commercial hubs in <strong>Fordham</strong> and the quiet residential streets of <strong>Riverdale</strong>, every neighborhood requires a specific touch.
                </p>
                <p className="text-zinc-650 text-sm leading-relaxed font-sans">
                  That local context shapes what we ask before dispatching: the age of the building, whether the door is a pre-war mortise lock or a modern deadbolt, and whether the property is a rental, a co-op, or a storefront. Knowing that in advance is what keeps a straightforward lockout from turning into a second visit.
                </p>
                
                {/* Local Link to Areas Served */}
                <div className="pt-4">
                  <Link 
                    href="/areas-served" 
                    className="text-brand-yellow hover:text-brand-yellow-hover font-bold font-sans text-sm uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <span>View All Bronx Areas We Serve</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. High Quality Locksmith Services (4-Grid Card Component) */}
        <ServicesGrid />

        {/* 5. Quality, Secure, Delivered & Section (Visual Split Banner) */}
        <QualitySecureSection />

        {/* 6. What happens when you call */}
        <HowItWorks />

        {/* 7. What you can expect */}
        <WeAreTheExperts />

        {/* 8. Gold Support Callout Banner */}
        <GoldSupportBanner />

        {/* 9. Stuck Or Locked? Section */}
        <StuckOrLockedSection />

        {/* 11. Deep-Content Editorial Section — 2,000-word homepage authority copy */}
        <section className="bg-white text-zinc-900 py-24 border-t border-zinc-200" aria-label="About our locksmith services in the Bronx">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-5">
                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold uppercase tracking-tight leading-tight">
                  Why a Local Bronx Locksmith Outperforms a National Chain
                </h2>
                <div className="h-1 w-16 bg-brand-yellow rounded" aria-hidden="true" />
                <p className="text-zinc-700 font-sans text-base leading-relaxed">
                  National locksmith chains operate on a subcontractor model. When a call is placed, it is routed through a centralized dispatch center to the nearest available subcontractor — a technician who may not be local, may not know the borough, and may not be familiar with the specific lock hardware common to Bronx buildings. Quality and accountability vary widely because the company that answered the phone is not the company that showed up.
                </p>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Emergency Locksmith Bronx operates from a single base at <strong>{siteConfig.contact.address}</strong> with a directly employed team of background-checked technicians who are trained and dispatched in-house. Every technician who arrives at a Bronx lockout call works for us — not for a third-party subcontractor network. That distinction affects quality, accountability, and consistency in ways that matter when someone is standing outside their home at 2 AM.
                </p>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  The local operating model also allows true familiarity with Bronx building stock. The pre-war mortise locks in Grand Concourse apartment buildings, the heavy commercial deadbolts in Co-op City's residential towers, the vintage cam locks on Belmont and Fordham storefronts — these are not abstractions for our technicians. They are the locks worked on daily, and that daily familiarity is what produces a clean, damage-free result on every job.
                </p>
              </div>
              <div className="space-y-5">
                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold uppercase tracking-tight leading-tight">
                  The Technology Behind Modern Locksmith Service
                </h2>
                <div className="h-1 w-16 bg-brand-yellow rounded" aria-hidden="true" />
                <p className="text-zinc-700 font-sans text-base leading-relaxed">
                  Contemporary locksmith service is as much a technology discipline as a mechanical one. Vehicle transponder key replacement requires OBD-II diagnostic communication with the engine control module — the same protocol used by dealership diagnostic tools. Smart lock installation requires firmware configuration, Wi-Fi or Bluetooth pairing, and app setup alongside the mechanical installation of the deadbolt hardware. Commercial access control integration requires understanding of electric strikes, access card readers, and audit log management.
                </p>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Our technicians maintain current equipment and software across all service categories. Transponder programmer platforms are updated as new vehicle model keys are released. Smart lock work covers current models from August Home, Schlage, Yale, and Kwikset as well as the growing category of multi-family access systems. Commercial electronic access control platforms including keypad and proximity card systems are assessed and configured as part of our commercial security service offering.
                </p>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  The mechanical fundamentals — precision picking, cylinder decoding, pin configuration for rekeying and master key design — remain the core of every locksmith service. These skills are developed through hands-on apprenticeship and refined through the diverse daily service volume that a busy Bronx locksmith operation generates. Technical competency across both the mechanical and electronic dimensions of contemporary locksmithing is what allows every service type to be completed efficiently and correctly in a single visit.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-5">
                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold uppercase tracking-tight leading-tight">
                  Security Decisions That Pay Off Long Term
                </h2>
                <div className="h-1 w-16 bg-brand-yellow rounded" aria-hidden="true" />
                <p className="text-zinc-700 font-sans text-base leading-relaxed">
                  A lockout resolved quickly is the most visible locksmith service, but the security decisions made between lockouts have a far greater long-term impact on the safety of a Bronx home or business. Rekeying after a move-in, upgrading from Grade 3 to Grade 1 deadbolts on a ground-floor apartment, installing a master key system that provides auditable access control for a business, or adding a smart lock that generates an activity log every time the door is used — these are security investments that provide value every day, not just in moments of crisis.
                </p>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  A lock assessment is offered as part of every service call. The technician notes the hardware's condition, grade, and security features and provides a brief verbal summary of whether the existing locks are appropriate for the property's risk level. For properties where the assessment reveals meaningful vulnerabilities — worn cylinders, Grade 3 deadbolts on a street-level door, or a lack of secondary security measures — specific recommendations are made with no obligation to act on them immediately.
                </p>
              </div>
              <div className="space-y-5">
                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold uppercase tracking-tight leading-tight">
                  Bronx Emergency Locksmith — Frequently Asked Questions
                </h2>
                <div className="h-1 w-16 bg-brand-yellow rounded" aria-hidden="true" />
                <div className="space-y-4">
                  {[
                    {
                      q: "What areas of the Bronx are covered?",
                      a: "We cover the Bronx, from Wakefield and Woodlawn in the north to Mott Haven and Port Morris in the south, and from Riverdale to City Island. Give the dispatcher your address and they will confirm availability and the arrival window before anything is booked."
                    },
                    {
                      q: "How long does a standard home lockout take?",
                      a: "Dispatch gives you the next available arrival window based on where technicians are already working. Once on site, a standard pin-tumbler deadbolt usually takes 5 to 15 minutes to open. High-security cylinders take longer, and the technician will explain why before starting."
                    },
                    {
                      q: "Are all lock types covered, including smart locks?",
                      a: "Yes. Standard deadbolts, mortise locks, knob and lever locksets, smart deadbolts (including dead-battery bypass), padlocks, rim cylinders, and commercial lever sets are all within service scope. Smart lock issues requiring app reconfiguration or Bluetooth pairing are also supported."
                    },
                    {
                      q: "What if the lock needs to be replaced, not just opened?",
                      a: "If the lock cannot be repaired, replacement hardware can be supplied and fitted, sometimes during the same visit. The hardware price and the installation cost are confirmed with you before any replacement begins."
                    },
                  ].map((faq, i) => (
                    <div key={i} className="border-l-2 border-brand-yellow pl-4 space-y-1">
                      <p className="font-serif font-bold text-zinc-900 text-sm">{faq.q}</p>
                      <p className="text-zinc-600 font-sans text-xs leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 10. Consumer protection checklist */}
        <LocksmithVerification />

        {/* 11. Transparent Guarantees section */}
        <section className="bg-white text-zinc-900 py-24 border-t border-zinc-200" aria-label="Service guarantees">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-amber-600 font-sans font-bold text-sm uppercase tracking-widest block">Our Guarantee</span>
              <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase">
                A Transparent and Trustworthy Approach
              </h2>
              <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 space-y-4">
                <div className="bg-amber-100 text-amber-600 p-3 w-fit rounded-full">
                  <Award className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold">Upfront Quotes</h3>
                <p className="text-zinc-600 text-sm font-sans leading-relaxed">
                  The call-out fee, the labour, and any after-hours charge are explained before work begins. Nothing is added afterward without your agreement.
                </p>
              </div>

              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 space-y-4">
                <div className="bg-amber-100 text-amber-600 p-3 w-fit rounded-full">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold">Direct Dispatching</h3>
                <p className="text-zinc-600 text-sm font-sans leading-relaxed">
                  When <strong>{siteConfig.contact.phoneDisplay}</strong> is called, you reach the team that dispatches the technician. They confirm the next available arrival window based on the calls already on the schedule.
                </p>
              </div>

              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 space-y-4">
                <div className="bg-amber-100 text-amber-600 p-3 w-fit rounded-full">
                  <ShieldAlert className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold">Licensed &amp; Insured</h3>
                <p className="text-zinc-600 text-sm font-sans leading-relaxed">
                  We are a licensed and insured NYC locksmith. Ask for our DCWP license number when you call and verify it on the city&apos;s website before work begins. Every property is treated with respect throughout the visit.
                </p>
              </div>
            </div>

            {/* Silo Linking Call-out */}
            <div className="mt-16 text-center bg-zinc-950 text-white p-8 rounded-lg border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-xl">
              <div className="text-left space-y-2">
                <h3 className="text-xl font-serif font-bold text-brand-yellow flex items-center gap-2">
                  <Sparkles className="h-5 w-5" aria-hidden="true" /> Need Emergency Assistance Right Now?
                </h3><p className="text-zinc-400 text-sm font-sans max-w-2xl">
                  Locked out in the middle of the night? Call and dispatch will confirm whether a technician is available now, the next arrival window, and the price before you commit.
                </p>
              </div>
              <Link
                href="/24-hour-emergency-locksmith-bronx"
                className="bg-brand-yellow hover:bg-brand-yellow-hover text-black py-3 px-6 rounded font-sans font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap"
                aria-label="Visit our 24/7 emergency locksmith hub for immediate lockout assistance in the Bronx"
              >
                View Our 24/7 Emergency Locksmith Services
              </Link>
            </div>
          </div>
        </section>

        {/* 12. Bronx guides — contextual internal links to the content hub */}
        <section className="bg-zinc-50 text-zinc-900 py-20 border-t border-zinc-200" aria-label="Bronx locksmith guides">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div className="space-y-3">
                <span className="text-amber-600 font-sans font-bold text-sm uppercase tracking-widest block">
                  Before You Call
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight uppercase">
                  Bronx Lock &amp; Key Guides
                </h2>
                <div className="h-1 w-16 bg-brand-yellow rounded" aria-hidden="true" />
              </div>
              <Link
                href="/blog"
                className="text-sm font-sans font-bold uppercase tracking-wider text-zinc-900 hover:text-amber-600 underline decoration-brand-yellow decoration-2 underline-offset-4"
              >
                All guides
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  href: "/blog/avoid-locksmith-scams-bronx-guide",
                  title: "How to avoid locksmith scams in the Bronx",
                  desc: "License checks, price confirmations, and the red flags that show up before a lock is drilled.",
                },
                {
                  href: "/blog/bronx-apartment-lockout-night-guide",
                  title: "Locked out of your apartment at night",
                  desc: "What to do first, how to stay safe while you wait, and what a technician should ask before entry.",
                },
                {
                  href: "/blog/lost-car-keys-bronx-locksmith-vs-dealer",
                  title: "Lost car keys: mobile locksmith or dealer?",
                  desc: "A practical comparison of cost, wait time, and what each option can actually program on site.",
                },
              ].map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group bg-white border border-zinc-200 rounded-lg p-6 space-y-3 hover:border-brand-yellow transition-colors shadow-sm"
                >
                  <h3 className="font-serif font-bold text-lg leading-snug group-hover:text-amber-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-zinc-600 text-sm font-sans leading-relaxed">{guide.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-zinc-900">
                    Read the guide <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 13. Contact Form & Map Section (Quick Message) */}
        <section className="bg-zinc-950 text-white py-24 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Form Side */}
              <div className="lg:col-span-6 flex justify-center">
                <QuoteForm />
              </div>

              {/* Location/Authority Info Side */}
              <div className="lg:col-span-6 space-y-8">
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Talk to a Bronx Dispatcher</span>
                <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Get a Price or Book a Visit
                </h2>
                <div className="h-1 w-20 bg-brand-yellow rounded" />
                
                <p className="text-zinc-400 font-sans leading-relaxed">
                  Have questions about upgrading your security, installing smart locks, or repairing ignition issues? Drop us a line or schedule an appointment. We offer quick consultations for homes and commercial establishments.
                </p>

                {/* Local Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="border border-zinc-800 p-5 rounded-lg bg-zinc-900/50">
                    <h3 className="font-serif font-bold text-white mb-2">Business Address</h3>
                    <p className="text-zinc-450 text-sm font-sans leading-relaxed">
                      {siteConfig.contact.address}<br />
                      Mobile service across the Bronx.
                    </p>
                  </div>
                  <div className="border border-zinc-800 p-5 rounded-lg bg-zinc-900/50">
                    <h3 className="font-serif font-bold text-white mb-2">Direct Phone Line</h3>
                    <p className="text-zinc-455 text-sm font-sans leading-relaxed">
                      Call or Text:<br />
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-brand-yellow font-bold hover:underline">
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
