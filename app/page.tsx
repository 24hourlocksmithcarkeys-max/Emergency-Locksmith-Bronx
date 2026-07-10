import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ProjectsGrid from "@/components/ProjectsGrid";
import { PartnerCarousel, WeAreTheExperts, GoldSupportBanner, Testimonials } from "@/components/TrustElements";
import { QualitySecureSection, StuckOrLockedSection } from "@/components/VisualBanners";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { Phone, ShieldAlert, Award, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Partner Brands Carousel */}
        <PartnerCarousel />

        {/* 3. Intro Copy Section (Local Authority & EEAT) */}
        <section className="bg-white text-zinc-900 py-24 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Heading and Local Hook */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Bronx Local Locksmith</span>
                <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Emergency Locksmith Bronx 24/7 Fast Response Service
                </h2>
                <div className="h-1 w-20 bg-brand-yellow rounded" />
                
                <p className="text-zinc-755 text-base sm:text-lg leading-relaxed font-sans font-normal">
                  When you find yourself standing on a cold Bronx sidewalk looking through your car window at the keys sitting on the driver seat, or realizing your house keys are still on the kitchen counter while the door clicks shut behind you, the world seems to stop. In those moments, you do not just need a locksmith; you need a neighbor who knows the streets of the Bronx and can get to you before the stress takes over.
                </p>
                <p className="text-zinc-650 text-base leading-relaxed font-sans">
                  <strong>Emergency Locksmith Bronx</strong> is that neighbor. We have spent years building a reputation for being the fastest, most reliable, and most professional locksmith service in the borough, operating out of our central location at <span className="underline decoration-brand-yellow decoration-2">{siteConfig.contact.address}</span>.
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
                  Our team is not just trained in the mechanics of locks and keys; we are experts in the local landscape. We know which buildings have those tricky old mortise locks and which new developments are moving toward high-tech smart systems. This deep local knowledge is what allows us to provide a level of service that national franchises simply cannot match.
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

        {/* 6. Recent Projects Grid */}
        <ProjectsGrid />

        {/* 7. Need a Locksmith? We Are The Experts Section */}
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
                  Our technicians maintain current equipment and software across all service categories. Transponder programmer platforms are updated as new vehicle model keys are released. Smart lock training covers current models from August, Schlage, Yale, and Kwikset as well as the growing category of multi-family access systems. Commercial electronic access control platforms including keypad and proximity card systems are assessed and configured as part of our commercial security service offering.
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
                      a: "Every Bronx neighborhood is covered without exception — from the far North Bronx communities of Wakefield and Woodlawn to the southern commercial districts of Mott Haven and Port Morris, and from Riverdale on the Hudson to City Island on the eastern waterfront. No distance premium is charged for any Bronx address."
                    },
                    {
                      q: "How long does a standard home lockout take?",
                      a: "Response time across the Bronx averages 15 to 30 minutes. A standard pin tumbler deadbolt lockout is resolved in 5 to 15 minutes on-scene. High-security cylinders take 20 to 40 minutes. Total time from call to being inside is typically under one hour."
                    },
                    {
                      q: "Are all lock types covered, including smart locks?",
                      a: "Yes. Standard deadbolts, mortise locks, knob and lever locksets, smart deadbolts (including dead-battery bypass), padlocks, rim cylinders, and commercial lever sets are all within service scope. Smart lock issues requiring app reconfiguration or Bluetooth pairing are also supported."
                    },
                    {
                      q: "What if the lock needs to be replaced, not just opened?",
                      a: "Replacement hardware is carried on all service vans — Grade 1 deadbolts, mortise cylinders, and standard residential locksets in common finishes. If a lock needs replacement after the lockout is resolved, installation is offered during the same visit. Hardware pricing is disclosed before installation begins."
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

        {/* 10. Client Experience Testimonials Slider */}
        <Testimonials />

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
                <h3 className="text-xl font-serif font-bold">100% Upfront Quotes</h3>
                <p className="text-zinc-600 text-sm font-sans leading-relaxed">
                  One of the biggest concerns people have when hiring a locksmith is the fear of being overcharged. We are committed to transparency. Clear, upfront estimates are provided before any work begins, with absolutely no hidden fees added afterward.
                </p>
              </div>

              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 space-y-4">
                <div className="bg-amber-100 text-amber-600 p-3 w-fit rounded-full">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold">Direct Dispatching</h3>
                <p className="text-zinc-600 text-sm font-sans leading-relaxed">
                  When <strong>{siteConfig.contact.phoneDisplay}</strong> is called, you are not talking to a distant call center. A local Bronx dispatcher answers and provides an accurate arrival time based on real-time technician positioning across the borough.
                </p>
              </div>

              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 space-y-4">
                <div className="bg-amber-100 text-amber-600 p-3 w-fit rounded-full">
                  <ShieldAlert className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold">Licensed &amp; Insured</h3>
                <p className="text-zinc-600 text-sm font-sans leading-relaxed">
                  This is a fully licensed, insured, and bonded company compliant with NYC Department of Consumer Affairs locksmith regulations. Every property is treated with complete respect throughout every service call.
                </p>
              </div>
            </div>

            {/* Silo Linking Call-out */}
            <div className="mt-16 text-center bg-zinc-950 text-white p-8 rounded-lg border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-xl">
              <div className="text-left space-y-2">
                <h3 className="text-xl font-serif font-bold text-brand-yellow flex items-center gap-2">
                  <Sparkles className="h-5 w-5" aria-hidden="true" /> Need Emergency Assistance Right Now?
                </h3><p className="text-zinc-400 text-sm font-sans max-w-2xl">
                  Locked out in the middle of the night? Our mobile locksmith fleet is active 24 hours a day, 7 days a week, covering every Bronx neighborhood — dispatched within 15 to 30 minutes of your call.
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

        {/* 12. Contact Form & Map Section (Quick Message) */}
        <section className="bg-zinc-950 text-white py-24 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Form Side */}
              <div className="lg:col-span-6 flex justify-center">
                <QuoteForm />
              </div>

              {/* Location/Authority Info Side */}
              <div className="lg:col-span-6 space-y-8">
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Visit Us / Reach Out</span>
                <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Get Professional Security Help Today
                </h2>
                <div className="h-1 w-20 bg-brand-yellow rounded" />
                
                <p className="text-zinc-400 font-sans leading-relaxed">
                  Have questions about upgrading your security, installing smart locks, or repairing ignition issues? Drop us a line or schedule an appointment. We offer quick consultations for homes and commercial establishments.
                </p>

                {/* Local Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="border border-zinc-800 p-5 rounded-lg bg-zinc-900/50">
                    <h3 className="font-serif font-bold text-white mb-2">Central Location</h4>
                    <p className="text-zinc-450 text-sm font-sans leading-relaxed">
                      {siteConfig.contact.address}<br />
                      Bronx, NY
                    </p>
                  </div>
                  <div className="border border-zinc-800 p-5 rounded-lg bg-zinc-900/50">
                    <h3 className="font-serif font-bold text-white mb-2">Direct Phone Line</h4>
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

