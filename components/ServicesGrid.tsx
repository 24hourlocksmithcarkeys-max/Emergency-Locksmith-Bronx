import Link from "next/link";
import Image from "next/image";

export default function ServicesGrid() {
  const services = [
    {
      title: "Residential Lockout Service",
      desc: "We unlock house doors quickly and safely — without drilling or damaging the frame.",
      image: "/images/service_residential.png",
      href: "/home-lockout-bronx",
      altText: "Licensed residential locksmith unlocking a house door lock in the Bronx using lock picks",
      cta: "See How Home Lockouts Are Resolved",
    },
    {
      title: "Commercial Lockout Service",
      desc: "We help offices, shops, and commercial spaces regain access smoothly, ensuring zero downtime.",
      image: "/images/service_commercial.png",
      href: "/office-lockout-bronx",
      altText: "Commercial lock opening on an office glass entrance door in the Bronx",
      cta: "View Office & Business Entry Options",
    },
    {
      title: "Car Lockout Assistance",
      desc: "Our automotive locksmiths open doors safely — without damaging the vehicle.",
      image: "/images/service_auto.png",
      href: "/car-lockout-bronx",
      altText: "Mobile auto locksmith unlocking a vehicle door cylinder in the Bronx using Lishi tools",
      cta: "Find Out How Cars Are Unlocked Safely",
    },
    {
      title: "Gate & Cabinet Unlocking",
      desc: "From outdoor gates to indoor cabinets, we handle all types of mechanical and furniture locks.",
      image: "/images/service_gate.png",
      href: "/mailbox-lockout-bronx",
      altText: "USPS-approved mailbox lock cylinder installation on a metal mailbox panel in the Bronx",
      cta: "Check Mailbox & Cabinet Lock Services",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-24 sm:py-32" aria-label="Our Services Overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase">
            High Quality <span className="text-brand-yellow">Locksmith Services</span>
          </h2>
          <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
          <p className="text-zinc-400 font-sans text-lg">
            Complete locksmith solutions for residential, commercial, and automotive needs.
          </p>
        </div>

        {/* Services Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc) => (
            <div 
              key={svc.title} 
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex flex-col group hover:border-brand-yellow/55 transition-all duration-300 shadow-xl"
            >
              {/* Service Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Service Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-brand-yellow transition-colors leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-zinc-400 font-sans text-sm leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black px-5 py-2.5 rounded font-sans font-bold text-xs uppercase tracking-wider transition-colors duration-200 whitespace-nowrap"
                    aria-label={svc.cta}
                  >
                    <span>{svc.cta}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
