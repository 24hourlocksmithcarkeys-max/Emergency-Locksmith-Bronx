import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Bar (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-800">
          <div className="flex items-center space-x-4">
            <div className="bg-brand-yellow p-3 rounded-full text-black">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-zinc-400 font-sans uppercase tracking-wider">Phone</p>
              <a href={`tel:${siteConfig.contact.phone}`} className="text-lg font-bold hover:text-brand-yellow transition-colors whitespace-nowrap">
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-brand-yellow p-3 rounded-full text-black">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-zinc-400 font-sans uppercase tracking-wider">Email</p>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-lg font-bold hover:text-brand-yellow transition-colors break-all">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-brand-yellow p-3 rounded-full text-black">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-zinc-400 font-sans uppercase tracking-wider">Address</p>
              <p className="text-base font-bold text-zinc-200">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-brand-yellow p-3 rounded-full text-black">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-zinc-400 font-sans uppercase tracking-wider">Working Hours</p>
              <p className="text-base font-bold text-zinc-200">
                {siteConfig.hours.emergency}
              </p>
            </div>
          </div>
        </div>

        {/* Middle Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Column 1: Logo & Socials */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-brand-yellow text-2xl font-serif font-bold tracking-wider">
                🔑 BRONX LOCKSMITH
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              Your trusted, local security experts. Serving the Bronx with licensed, insured, and bonded emergency locksmith solutions 24 hours a day.
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 hover:bg-brand-yellow hover:text-black rounded-full transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 hover:bg-brand-yellow hover:text-black rounded-full transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 hover:bg-brand-yellow hover:text-black rounded-full transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info Details */}
          <div>
            <h3 className="text-lg font-serif font-bold tracking-wider mb-6 border-b border-zinc-800 pb-2">
              Contact
            </h3>
            <ul className="space-y-4 text-zinc-400 text-sm font-sans">
              <li>
                <span className="font-bold text-zinc-200">Main Office:</span><br />
                {siteConfig.contact.address}
              </li>
              <li>
                <span className="font-bold text-zinc-200">Phone:</span><br />
                {siteConfig.contact.phoneDisplay}
              </li>
              <li>
                <span className="font-bold text-zinc-200">Email:</span><br />
                {siteConfig.contact.email}
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-serif font-bold tracking-wider mb-6 border-b border-zinc-800 pb-2">
              Services
            </h3>
            <ul className="space-y-3 text-zinc-400 text-sm font-sans">
              <li>
                <Link href="/home-lockout-bronx/" className="hover:text-brand-yellow transition-colors">
                  Residential Lockout
                </Link>
              </li>
              <li>
                <Link href="/office-lockout-bronx/" className="hover:text-brand-yellow transition-colors">
                  Commercial Lockout
                </Link>
              </li>
              <li>
                <Link href="/car-lockout-bronx/" className="hover:text-brand-yellow transition-colors">
                  Automotive Lockout
                </Link>
              </li>
              <li>
                <Link href="/mailbox-lockout-bronx/" className="hover:text-brand-yellow transition-colors">
                  Gate & Cabinet Unlock
                </Link>
              </li>
              <li>
                <Link href="/smart-lock-installation-bronx/" className="hover:text-brand-yellow transition-colors">
                  Smart Lock Support
                </Link>
              </li>
              <li>
                <Link href="/24-hour-emergency-locksmith-bronx/" className="hover:text-brand-yellow transition-colors">
                  Emergency Unlock (24/7)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold tracking-wider mb-6 border-b border-zinc-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-zinc-400 text-sm font-sans">
              <li>
                <Link href="/" className="hover:text-brand-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services/" className="hover:text-brand-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-brand-yellow transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-brand-yellow transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="hover:text-brand-yellow transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: License and Copyright */}
        <div className="border-t border-zinc-800 pt-8 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
          <div className="text-zinc-550 text-xs font-sans">
            <p>Emergency Locksmith Bronx is fully licensed, insured, and bonded.</p>
            <p className="mt-1">Certified & background-checked technicians.</p>
          </div>
          <div className="text-zinc-400 text-sm font-sans md:text-right flex flex-col justify-center">
            <p>© {new Date().getFullYear()} Emergency Locksmith Bronx. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
