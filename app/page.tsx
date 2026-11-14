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
  title: { absolute: "Emergency Locksmith Bronx | Mobile Lockout Service" },
  description:
    "Mobile locksmith service throughout the Bronx. A real locksmith answers, confirms upfront pricing and availability, and gives a current arrival estimate. Mon–Thu 9–5; Fri–Sun 24 hours.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Emergency Locksmith Bronx | Mobile Lockout Service",
    description:
      "Mobile locksmith service throughout the Bronx. Call to confirm current availability, agreed scope, upfront price, and a non-guaranteed arrival estimate. Mon–Thu 9–5; Fri–Sun 24 hours.",
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
                  Emergency Locksmith Service Across the Bronx
                </h2>
                <div className="h-1 w-20 bg-brand-yellow rounded" />
                
                <p className="text-zinc-755 text-base sm:text-lg leading-relaxed font-sans font-normal">
                  A lockout can raise immediate questions: is service available, when might a technician arrive, and what is the price for the agreed scope? A real locksmith answers calls so you can discuss the details and confirm current availability, a non-guaranteed arrival estimate, and upfront pricing before dispatch.
                </p>
                <p className="text-zinc-650 text-base leading-relaxed font-sans">
                  <strong>Emergency Locksmith Bronx</strong> provides mobile locksmith service throughout the Bronx. Call with details about the property, vehicle, or lock to confirm whether the requested service is currently available and discuss its scope. Our centralized dispatching center is at <span className="underline decoration-brand-yellow decoration-2">{siteConfig.contact.address}</span>; it is not presented as a walk-in storefront.
                </p>
              </div>

              {/* Right Column: Local Knowledge & neighborhood siloing */}
              <div className="lg:col-span-6 space-y-6 bg-zinc-50 p-8 rounded-lg border border-zinc-200">
                <h3 className="text-2xl font-serif font-bold text-zinc-950">
                  Mobile Service Throughout the Bronx
                </h3>
                <p className="text-zinc-650 text-sm leading-relaxed font-sans">
                  Mobile service is provided throughout the Bronx. Share the service address and nearby cross street when you call so the locksmith can confirm current availability and give a non-guaranteed arrival estimate.
                </p>
                <p className="text-zinc-650 text-sm leading-relaxed font-sans">
                  A real locksmith answers calls and asks relevant questions about the lock, vehicle, or situation. Those details help prepare the dispatched technician with appropriate tools and parts; availability and the agreed scope are confirmed before dispatch.
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
                  Questions to Ask Before Locksmith Service
                </h2>
                <div className="h-1 w-16 bg-brand-yellow rounded" aria-hidden="true" />
                <p className="text-zinc-700 font-sans text-base leading-relaxed">
                  When you call Emergency Locksmith Bronx, a real locksmith answers and asks about the address, lock, vehicle, and situation. Those details help the locksmith prepare the technician with the tools and parts needed for the job before dispatch.
                </p>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  The centralized dispatching center is at <strong>{siteConfig.contact.address}</strong>, and service is mobile throughout the Bronx. The business reports that backgrounds of all technicians are verified. No customer walk-in service is offered at the dispatch address.
                </p>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Lock types and door conditions vary across the Bronx. Tell the locksmith what you know about the lock and door so the proposed approach, availability, and price can be discussed before dispatch.
                </p>
              </div>
              <div className="space-y-5">
                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold uppercase tracking-tight leading-tight">
                  Locksmith Requests Depend on the Hardware
                </h2>
                <div className="h-1 w-16 bg-brand-yellow rounded" aria-hidden="true" />
                <p className="text-zinc-700 font-sans text-base leading-relaxed">
                  Vehicle keys, smart locks, commercial hardware, and standard door locks all differ by make, model, and condition. A locksmith can ask questions about the specific lock, vehicle, or product to confirm whether a request is available and what the proposed work involves.
                </p>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  Service availability depends on the specific request. Call with the vehicle details, lock type, or product model; the locksmith will confirm whether the requested work is available, explain the agreed scope, and provide the price before dispatch.
                </p>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  The business reports that backgrounds of all technicians are verified. No specific brand, method, equipment, or single-visit completion can be promised without confirming the job details.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-5">
                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold uppercase tracking-tight leading-tight">
                  Understanding Your Locksmith Service Options
                </h2>
                <div className="h-1 w-16 bg-brand-yellow rounded" aria-hidden="true" />
                <p className="text-zinc-700 font-sans text-base leading-relaxed">
                  If you are considering a lock repair, rekey, replacement, or hardware change, share what you know about the lock and property. The locksmith can discuss available options for the specific hardware; check any lease or building requirements before authorizing changes to a rental unit.
                </p>
                <p className="text-zinc-600 font-sans text-sm leading-relaxed">
                  No property assessment or recommendation is included unless it is part of the agreed scope. Ask what the requested service includes and confirm the price before dispatch; if the scope changes, discuss the proposed work and any price change before additional work begins.
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
                      q: "Where is mobile service available?",
                      a: "Mobile service is provided throughout the Bronx. Call with your address to confirm current availability and get a non-guaranteed arrival estimate."
                    },
                    {
                      q: "How soon can a locksmith arrive?",
                      a: "The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. These are not guarantees; ask for a current estimate. Work-completion time is separate and depends on the job."
                    },
                    {
                      q: "Can you work on my specific lock or smart lock?",
                      a: "Compatibility and service availability depend on the lock, door, product, and condition. Call with the details to confirm whether the requested service is available and discuss the scope and price."
                    },
                    {
                      q: "What if the requested scope changes after assessment?",
                      a: "The proposed additional work and any price change should be discussed before additional work begins. You can decide whether to proceed."
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
        <section className="bg-white text-zinc-900 py-24 border-t border-zinc-200" aria-label="Service information">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-amber-600 font-sans font-bold text-sm uppercase tracking-widest block">What to Expect</span>
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
                  The total for the agreed scope is confirmed upfront. Any change in scope or price is explained and approved before additional work.
                </p>
              </div>

              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 space-y-4">
                <div className="bg-amber-100 text-amber-600 p-3 w-fit rounded-full">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold">Direct Dispatching</h3>
                <p className="text-zinc-600 text-sm font-sans leading-relaxed">
                  A real locksmith answers <strong>{siteConfig.contact.phoneDisplay}</strong>, asks job-specific questions, and confirms availability and the current arrival estimate.
                </p>
              </div>

              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 space-y-4">
                <div className="bg-amber-100 text-amber-600 p-3 w-fit rounded-full">
                  <ShieldAlert className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-serif font-bold">Licensed &amp; Insured</h3>
                <p className="text-zinc-600 text-sm font-sans leading-relaxed">
                  Our NYC DCWP locksmith license is active; its number is available upon request and is not posted publicly. General liability insurance coverage is up to $1,000,000.
                </p>
              </div>
            </div>

            {/* Silo Linking Call-out */}
            <div className="mt-16 text-center bg-zinc-950 text-white p-8 rounded-lg border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-xl">
              <div className="text-left space-y-2">
                <h3 className="text-xl font-serif font-bold text-brand-yellow flex items-center gap-2">
                  <Sparkles className="h-5 w-5" aria-hidden="true" /> Need Emergency Assistance Right Now?
                </h3><p className="text-zinc-400 text-sm font-sans max-w-2xl">
                  Need locksmith service? Call to confirm current availability, a non-guaranteed arrival estimate, and the price for the agreed scope.
                </p>
              </div>
              <Link
                href="/24-hour-emergency-locksmith-bronx"
                className="bg-brand-yellow hover:bg-brand-yellow-hover text-black py-3 px-6 rounded font-sans font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap"
                aria-label="Visit our emergency locksmith hub for immediate lockout assistance in the Bronx"
              >
                View Emergency Locksmith Services
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
                  desc: "A practical comparison of what to compare when contacting a provider about a vehicle key request.",
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
                <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Speak with a Bronx Locksmith</span>
                <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                  Get a Price or Book a Visit
                </h2>
                <div className="h-1 w-20 bg-brand-yellow rounded" />
                
                <p className="text-zinc-400 font-sans leading-relaxed">
                  Have a question about a lock, key, or vehicle request? Call to describe the situation and confirm whether the requested service is available.
                </p>

                {/* Local Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="border border-zinc-800 p-5 rounded-lg bg-zinc-900/50">
                    <h3 className="font-serif font-bold text-white mb-2">Centralized Dispatching Center</h3>
                    <p className="text-zinc-450 text-sm font-sans leading-relaxed">
                      {siteConfig.contact.address}<br />
                      Mobile service across the Bronx.
                    </p>
                  </div>
                  <div className="border border-zinc-800 p-5 rounded-lg bg-zinc-900/50">
                    <h3 className="font-serif font-bold text-white mb-2">Direct Phone Line</h3>
                    <p className="text-zinc-455 text-sm font-sans leading-relaxed">
                      Call:<br />
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
