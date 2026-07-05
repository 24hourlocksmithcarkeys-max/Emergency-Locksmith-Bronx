"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-brand-yellow text-2xl font-serif font-bold tracking-wider flex items-center gap-2">
                <span className="border-2 border-brand-yellow p-1 rounded-full" aria-hidden="true">🔑</span>
                BRONX LOCKSMITH
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-brand-yellow font-sans font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center space-x-2 text-brand-yellow font-bold hover:text-white transition-colors duration-200"
              aria-label={`Call direct phone line: ${siteConfig.contact.phoneDisplay}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span className="whitespace-nowrap">{siteConfig.contact.phoneDisplay}</span>
            </a>
            <Link
              href="/contact?type=emergency"
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-black px-6 py-3 rounded font-sans font-bold tracking-wider text-sm transition-colors duration-200 uppercase whitespace-nowrap"
              aria-label="Request emergency locksmith assistance"
            >
              Emergency Request
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-brand-yellow focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded text-base font-medium text-gray-300 hover:text-brand-yellow hover:bg-zinc-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-zinc-850 px-3 flex flex-col space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-2 text-brand-yellow font-bold text-lg"
              >
                <Phone className="h-5 w-5" />
                <span className="whitespace-nowrap">{siteConfig.contact.phoneDisplay}</span>
              </a>
              <Link
                href="/contact?type=emergency"
                onClick={() => setIsOpen(false)}
                className="bg-brand-yellow hover:bg-brand-yellow-hover text-black text-center px-4 py-3 rounded font-sans font-bold tracking-wider text-sm transition-colors uppercase whitespace-nowrap"
              >
                Emergency Request
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
