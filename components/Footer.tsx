import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { label: "Home & apartment lockout requests", href: "/home-lockout-bronx/" },
  { label: "Vehicle lockout requests", href: "/car-lockout-bronx/" },
  { label: "Office & commercial lock requests", href: "/office-lockout-bronx/" },
  { label: "Rekeying requests", href: "/lock-rekeying-bronx/" },
  { label: "Smart lock requests", href: "/smart-lock-installation-bronx/" },
  { label: "Emergency locksmith information", href: "/24-hour-emergency-locksmith-bronx/" },
];

const guideLinks = [
  { label: "Locked out at night: what to do", href: "/blog/bronx-apartment-lockout-night-guide/" },
  { label: "How to avoid locksmith scams", href: "/blog/avoid-locksmith-scams-bronx-guide/" },
  { label: "Smart locks for pre-war apartments", href: "/blog/best-smart-locks-bronx-pre-war-apartments/" },
  { label: "Master key systems for businesses", href: "/blog/bronx-business-guide-master-key-systems/" },
  { label: "Lost car keys: locksmith vs dealer", href: "/blog/lost-car-keys-bronx-locksmith-vs-dealer/" },
];

const companyLinks = [
  { label: "About us", href: "/about-us/" },
  { label: "Areas served", href: "/areas-served/" },
  { label: "Request information", href: "/services/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy policy", href: "/privacy-policy/" },
  { label: "Terms of service", href: "/terms-of-service/" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Bar (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-800">
          <div className="flex items-center space-x-4">
            <div className="bg-brand-yellow p-3 rounded-full text-black">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-zinc-400 font-sans uppercase tracking-wider">Phone</p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-lg font-bold hover:text-brand-yellow transition-colors whitespace-nowrap"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-brand-yellow p-3 rounded-full text-black">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-zinc-400 font-sans uppercase tracking-wider">Email</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-lg font-bold hover:text-brand-yellow transition-colors break-all"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-brand-yellow p-3 rounded-full text-black">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-zinc-400 font-sans uppercase tracking-wider">Service area</p>
              <p className="text-base font-bold text-zinc-200">The Bronx, NY</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-brand-yellow p-3 rounded-full text-black">
              <Clock className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-zinc-400 font-sans uppercase tracking-wider">Hours</p>
              <p className="text-base font-bold text-zinc-200">{siteConfig.hours.display}</p>
            </div>
          </div>
        </div>

        {/* Middle Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Column 1: Logo & Socials */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-brand-yellow text-xl font-serif font-bold tracking-wider uppercase leading-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              Mobile locksmith service throughout the Bronx. Call to confirm availability,
              the proposed scope, the upfront price, and a current arrival estimate.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-900 hover:bg-brand-yellow hover:text-black rounded-full transition-colors"
                aria-label="Emergency Locksmith Bronx on Facebook"
              >
                <span aria-hidden="true">📘</span>
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-900 hover:bg-brand-yellow hover:text-black rounded-full transition-colors"
                aria-label="Emergency Locksmith Bronx on Twitter"
              >
                <span aria-hidden="true">🐦</span>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-900 hover:bg-brand-yellow hover:text-black rounded-full transition-colors"
                aria-label="Emergency Locksmith Bronx on Instagram"
              >
                <span aria-hidden="true">📷</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-serif font-bold tracking-wider mb-6 border-b border-zinc-800 pb-2">
              Request information
            </h3>
            <ul className="space-y-3 text-zinc-400 text-sm font-sans">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-yellow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Guides */}
          <div>
            <h3 className="text-lg font-serif font-bold tracking-wider mb-6 border-b border-zinc-800 pb-2">
              Bronx Guides
            </h3>
            <ul className="space-y-3 text-zinc-400 text-sm font-sans">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-yellow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-lg font-serif font-bold tracking-wider mb-6 border-b border-zinc-800 pb-2">
              Company
            </h3>
            <ul className="space-y-3 text-zinc-400 text-sm font-sans">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-yellow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-zinc-500 font-sans leading-relaxed">
              {siteConfig.contact.address}
            </p>
          </div>
        </div>

        {/* Bottom Bar: License and Copyright */}
        <div className="border-t border-zinc-800 pt-8 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
          <div className="text-zinc-500 text-xs font-sans leading-relaxed">
            <p>
              Active NYC DCWP locksmith license; number available upon request and not
              posted publicly. General liability insurance coverage is up to $1,000,000. {" "}
              <a
                href={siteConfig.licensing.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-yellow"
              >
                Check NYC licensing rules
              </a>
              .
            </p>
          </div>
          <div className="text-zinc-400 text-sm font-sans md:text-right flex flex-col justify-center">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
