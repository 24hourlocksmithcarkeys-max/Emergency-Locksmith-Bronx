import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, ShieldCheck, BadgeCheck, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-zinc-950 text-white overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url('/images/hero_background.webp')",
        }}
      />

      {/* Decorative Blur and Accent Light */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-yellow/10 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Quick Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-yellow/10 border border-brand-yellow/30 px-3 py-1.5 rounded text-brand-yellow text-xs sm:text-sm font-sans font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
              <span>24/7 Emergency Locksmith · Bronx, NY</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-serif font-extrabold tracking-tight uppercase leading-[1.1] max-w-4xl">
              Emergency Locksmith <br />
              in the Bronx — <br />
              <span className="text-brand-yellow">We Get You Back In.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-sans font-normal leading-relaxed">
              Call and a dispatcher confirms the next available arrival window and the
              price before a technician is sent. Home, apartment, office, and vehicle
              lockouts, day or night.
            </p>

            {/* CTA Buttons - Single Line Rule */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="bg-brand-yellow hover:bg-brand-yellow-hover text-black py-4 px-8 rounded font-sans font-bold tracking-wider uppercase text-center text-sm md:text-base transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-yellow/20 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <Phone className="h-5 w-5 fill-current animate-pulse" aria-hidden="true" />
                <span>Call Now: {siteConfig.contact.phoneDisplay}</span>
              </a>
              <Link
                href="/contact"
                className="bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700 py-4 px-8 rounded font-sans font-bold tracking-wider uppercase text-center text-sm md:text-base transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                Get a Quote
              </Link>
            </div>

            {/* Micro trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-800 max-w-3xl">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="h-6 w-6 text-brand-yellow shrink-0" aria-hidden="true" />
                <span className="text-sm text-zinc-300 font-medium">Licensed &amp; insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <BadgeCheck className="h-6 w-6 text-brand-yellow shrink-0" aria-hidden="true" />
                <span className="text-sm text-zinc-300 font-medium">Price agreed before work</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wrench className="h-6 w-6 text-brand-yellow shrink-0" aria-hidden="true" />
                <span className="text-sm text-zinc-300 font-medium">Home, business &amp; auto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
