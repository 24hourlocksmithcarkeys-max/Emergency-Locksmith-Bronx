import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { localizedAlternates, englishSocialMetadata } from "@/config/localized-routes";

export const metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service governing the use of Emergency Locksmith Bronx locksmith services and website.",
  alternates: localizedAlternates("/terms-of-service/"),

  ...englishSocialMetadata("/terms-of-service/", "Terms of Service", "Read the Terms of Service governing the use of Emergency Locksmith Bronx locksmith services and website."),
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="bg-zinc-950 text-white min-h-screen py-16 lg:py-24 font-sans text-sm sm:text-base leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <h1 className="text-4xl font-serif font-extrabold uppercase tracking-tight text-brand-yellow">
            Terms of Service
          </h1>
          <p className="text-zinc-400">Last updated: November 14, 2026</p>

          <div className="space-y-6 text-zinc-300">
            <p>
              Welcome to Emergency Locksmith Bronx. These terms and conditions outline the rules and regulations for use of the Emergency Locksmith Bronx website and mobile locksmith services. The centralized dispatching center is at {siteConfig.contact.address}; it is not a walk-in storefront.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Services Rendered
            </h2>
            <p>
              Emergency Locksmith Bronx provides mobile locksmith service throughout the Bronx. Standard hours are Monday–Thursday, 9:00 a.m.–5:00 p.m.; service is available 24 hours Friday–Sunday. Call to confirm availability for a specific request and address. The owner reports an average arrival time of approximately 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes; these are averages, not guarantees. Actual arrival time varies.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Upfront Estimates
            </h2>
            <p>
              The total price for the agreed scope is confirmed upfront before dispatch. If the scope changes, the proposed work and price are explained before additional work begins.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Work Conditions
            </h2>
            <p>
              The proposed work, method, and any associated risks depend on the lock and the circumstances. No particular entry method or damage-free result is promised. Any change to the agreed work or price is discussed before additional work begins.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
