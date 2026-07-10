import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowRight, Phone } from "lucide-react";

export function QualitySecureSection() {
  return (
    <section className="bg-white text-zinc-900 py-24 sm:py-32 overflow-hidden border-t border-zinc-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left side Image */}
          <div className="lg:col-span-6 relative h-[600px] w-full rounded-lg overflow-hidden border border-zinc-200 shadow-2xl">
            <Image
              src="/images/service_residential.webp"
              alt="Professional locksmith installing a high-security lock cylinder deadbolt in a residential wood door in the Bronx"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* Right side Text */}
          <div className="lg:col-span-6 space-y-8 lg:pl-8">
            <div className="space-y-4">
              <span className="text-amber-600 font-sans font-bold text-sm uppercase tracking-widest block">Our Standard</span>
              <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                Quality, Secure, <br />
                Delivered & <span className="text-amber-600">Trusted</span>
              </h2>
              <div className="h-1 w-20 bg-amber-600 rounded" aria-hidden="true" />
            </div>

            <div className="space-y-6 text-zinc-650 font-sans text-base leading-relaxed">
              <p>
                We take time to understand your needs and provide solutions that fit your space, lifestyle, and expectations. From consultation to installation or repair, every step is handled with care and precision.
              </p>
              <p>
                Our work is centered around people. We focus on safety, trust, and long-term security — not just quick fixes.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black px-6 py-3.5 rounded font-sans font-bold text-sm uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                aria-label={`Request emergency locksmith call to ${siteConfig.contact.phoneDisplay}`}
              >
                <span>Emergency Request</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function StuckOrLockedSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-zinc-950 text-white overflow-hidden border-y border-zinc-900">
      {/* Background Image with Gold Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ 
          backgroundImage: "url('/images/project_night.webp')" 
        }}
      />
      
      {/* Gold/Yellow backdrop light */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/10 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold uppercase tracking-tight text-brand-yellow">
          Stuck Or Locked?
        </h2>
        
        <p className="text-lg sm:text-xl text-zinc-300 font-sans max-w-3xl mx-auto leading-relaxed">
          Fast, damage-free unlocking by certified locksmiths available 24/7 for homes, offices, and vehicles. We cover all Bronx neighborhoods.
        </p>

        <div className="pt-4">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center gap-3 bg-brand-yellow hover:bg-brand-yellow-hover text-black px-8 py-4 rounded-lg font-sans font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-yellow/15 whitespace-nowrap"
            aria-label={`Call a locksmith now at ${siteConfig.contact.phoneDisplay}`}
          >
            <Phone className="h-5 w-5 animate-pulse" aria-hidden="true" />
            <span>Call a Locksmith Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}

