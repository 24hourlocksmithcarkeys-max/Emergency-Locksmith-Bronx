import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Home & Apartment Lockouts",
    desc: "Locked out at home or in an apartment? Call with the door and lock details to confirm current availability, the proposed approach, and price.",
    image: "/images/service_residential.webp",
    href: "/home-lockout-bronx",
    altText: "Locksmith opening a residential door lock in a Bronx apartment building",
    cta: "Home Lockout Help",
  },
  {
    title: "Car Lockouts & Auto Keys",
    desc: "For a vehicle lockout or key request, call with the make, model, and year to confirm compatibility, current availability, and price.",
    image: "/images/service_auto.webp",
    href: "/car-lockout-bronx",
    altText: "Mobile auto locksmith opening a vehicle door in the Bronx",
    cta: "Car Lockout Help",
  },
  {
    title: "Office & Commercial Locks",
    desc: "For commercial lock or access requests, call with the property and hardware details to confirm service availability and scope.",
    image: "/images/service_commercial.webp",
    href: "/office-lockout-bronx",
    altText: "Commercial glass office door with a locksmith working on the entrance",
    cta: "Commercial Lock Help",
  },
  {
    title: "Rekeying & Lock Changes",
    desc: "Ask whether rekeying is suitable for your existing hardware. Availability, compatibility, scope, and price are confirmed before dispatch.",
    image: "/images/service_gate.webp",
    href: "/lock-rekeying-bronx",
    altText: "Locksmith rekeying a deadbolt cylinder in the Bronx",
    cta: "Rekeying Details",
  },
];

const moreServices = [
  { label: "Lost car key replacement", href: "/lost-car-key-replacement-bronx" },
  { label: "Key fob programming", href: "/car-key-fob-replacement-bronx" },
  { label: "Ignition repair", href: "/ignition-repair-bronx" },
  { label: "Apartment lockout", href: "/apartment-lockout-bronx" },
  { label: "Smart lock installation", href: "/smart-lock-installation-bronx" },
  { label: "Master key systems", href: "/master-key-system-bronx" },
  { label: "Panic bar repair", href: "/panic-bar-repair-bronx" },
  { label: "Safe opening", href: "/safe-unlocking-bronx" },
  { label: "Mailbox locks", href: "/mailbox-lockout-bronx" },
];

export default function ServicesGrid() {
  return (
    <section className="bg-zinc-950 text-white py-24 sm:py-32" aria-label="Locksmith services in the Bronx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase">
            Bronx Locksmith <span className="text-brand-yellow">Services</span>
          </h2>
          <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
          <p className="text-zinc-400 font-sans text-lg">
            Common residential, commercial, and automotive locksmith requests. Call to confirm availability and the price for the agreed scope before dispatch.
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
                    <Link
                      href={svc.href}
                      className="hover:underline decoration-brand-yellow decoration-2 underline-offset-4"
                    >
                      {svc.title}
                    </Link>
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

        {/* Complete service index — every service page is one click from the homepage */}
        <div className="mt-14 border-t border-zinc-800 pt-8">
          <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-zinc-500 mb-4">
            More locksmith request topics
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {moreServices.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="text-sm font-sans text-zinc-300 hover:text-brand-yellow underline decoration-zinc-700 hover:decoration-brand-yellow underline-offset-4 transition-colors"
                >
                  {service.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="text-sm font-sans font-bold text-brand-yellow hover:text-brand-yellow-hover underline decoration-brand-yellow underline-offset-4"
              >
                Browse request information
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
