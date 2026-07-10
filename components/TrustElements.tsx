"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Clock, Heart, Scale, ChevronLeft, ChevronRight } from "lucide-react";

export function PartnerCarousel() {
  const brandLogos = [
    "Quick-Step", "Tarkett", "Pergo", "Knott's", "Kahrs", "Boren", "Indie"
  ];

  return (
    <div className="bg-zinc-950/5 border-y border-zinc-200 py-10 text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {brandLogos.map((brand, idx) => (
            <span 
              key={idx} 
              className="text-zinc-650 font-serif font-bold text-lg md:text-xl tracking-wider uppercase"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WeAreTheExperts() {
  return (
    <section className="py-24 sm:py-32 bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left side text list */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="text-amber-600 font-sans font-bold text-sm uppercase tracking-widest block">Need a Locksmith?</span>
              <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                We Are The Experts
              </h2>
              <div className="h-1 w-20 bg-brand-yellow rounded" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-zinc-100 p-3.5 rounded-lg text-amber-600 border border-zinc-200 shrink-0">
                  <ShieldCheck className="h-6 w-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">Professional Locksmiths</h3>
                  <p className="text-zinc-550 text-sm leading-relaxed font-sans">
                    Fully trained, licensed, and insured technicians using modern, damage-free methods.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-zinc-100 p-3.5 rounded-lg text-amber-600 border border-zinc-200 shrink-0">
                  <Clock className="h-6 w-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">On-time Arrival</h3>
                  <p className="text-zinc-550 text-sm leading-relaxed font-sans">
                    We respond quickly and arrive prepared, so you're never left waiting in urgent situations.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-zinc-100 p-3.5 rounded-lg text-amber-600 border border-zinc-200 shrink-0">
                  <Heart className="h-6 w-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">Community-Focused Service</h3>
                  <p className="text-zinc-550 text-sm leading-relaxed font-sans">
                    Serving homes and businesses with reliability, respect, and long-term security.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="bg-zinc-100 p-3.5 rounded-lg text-amber-600 border border-zinc-200 shrink-0">
                  <Scale className="h-6 w-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">No Hidden Costs</h3>
                  <p className="text-zinc-550 text-sm leading-relaxed font-sans">
                    Clear pricing shared upfront before work begins. Honest service you can trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="lg:col-span-5 relative h-[500px] w-full rounded-lg overflow-hidden border border-zinc-200 shadow-2xl">
            <Image
              src="/images/worker_profile.webp"
              alt="Certified emergency locksmith technician programming a car key fob in the Bronx"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function GoldSupportBanner() {
  return (
    <section className="bg-brand-yellow text-zinc-950 py-16 text-center shadow-lg border-y border-brand-yellow-hover">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight max-w-4xl mx-auto">
          Reliable Locksmith Support Delivered with Care, Precision, and Speed.
        </h2>
      </div>
    </section>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      date: "Dec 12, 2026",
      job: "Lock Replacement",
      text: "EXCELLENT SERVICE! THEY CAME WITHIN 30 MINUTES DURING A POWER EMERGENCY AT MIDNIGHT. VERY PROFESSIONAL AND FIXED OUR ELECTRICAL ISSUE QUICKLY.",
    },
    {
      name: "Sarah Johnson",
      date: "Dec 15, 2026",
      job: "Emergency Lockout",
      text: "AMAZING SERVICE! GOT LOCKED OUT OF MY HOUSE AT 2 AM AND THEY HAD SOMEONE HERE WITHIN 30 MINUTES. PROFESSIONAL, FAST, AND REASONABLY PRICED.",
    },
    {
      name: "David Rodriguez",
      date: "Dec 20, 2026",
      job: "Smart Lock Installation",
      text: "Great experience converting my Bronx apartment to keyless entry. The tech explained everything, worked cleanly, and there were no surprise charges.",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 sm:py-32 bg-zinc-50 border-t border-zinc-150 text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Testimonial slider text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">What Our Clients Say</span>
              <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase">
                Client Experience
              </h2>
              <div className="h-1 w-20 bg-brand-yellow rounded" aria-hidden="true" />
            </div>

            {/* Slider content container */}
            <div className="bg-zinc-900 text-white p-8 rounded-lg border border-zinc-800 shadow-2xl relative min-h-[220px] flex flex-col justify-between">
              <span className="absolute top-6 left-6 text-brand-yellow text-6xl font-serif leading-none opacity-20">“</span>
              <div className="relative z-10 space-y-4">
                <p className="text-base sm:text-lg text-zinc-200 italic font-sans leading-relaxed pt-2">
                  {testimonials[activeIdx].text}
                </p>
                <div>
                  <h3 className="font-serif font-bold text-brand-yellow">{testimonials[activeIdx].name}</h3>
                  <p className="text-xs text-zinc-500 font-sans">{testimonials[activeIdx].date} • {testimonials[activeIdx].job}</p>
                </div>
              </div>

              {/* Slider Navigation controls */}
              <div className="flex justify-end gap-2 mt-6">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 bg-zinc-950 hover:bg-zinc-800 text-brand-yellow rounded transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 bg-zinc-950 hover:bg-zinc-800 text-brand-yellow rounded transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials visual splits */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-[400px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border border-zinc-200">
              <Image
                src="/images/service_residential.webp"
                alt="Licensed locksmith adjusting a residential door lock latch in a Bronx apartment"
                fill
                sizes="(max-width: 1024px) 50vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border border-zinc-200">
              <Image
                src="/images/project_smart_lock.webp"
                alt="Customer testing a newly installed smart lock keyless deadbolt on their apartment door in the Bronx"
                fill
                sizes="(max-width: 1024px) 50vw, 20vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


