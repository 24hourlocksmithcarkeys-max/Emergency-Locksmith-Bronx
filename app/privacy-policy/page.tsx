import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Privacy Policy | Emergency Locksmith Bronx",
  description: "Read the Privacy Policy of Emergency Locksmith Bronx to understand how we collect, store, and safeguard your personal details.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-zinc-950 text-white min-h-screen py-16 lg:py-24 font-sans text-sm sm:text-base leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <h1 className="text-4xl font-serif font-extrabold uppercase tracking-tight text-brand-yellow">
            Privacy Policy
          </h1>
          <p className="text-zinc-400">Last updated: July 2026</p>

          <div className="space-y-6 text-zinc-300">
            <p>
              At Emergency Locksmith Bronx, accessible from {siteConfig.url}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Emergency Locksmith Bronx and how we use it.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Information We Collect
            </h2>
            <p>
              When you submit a contact form or request a booking/quote on our website, we collect personal information you provide, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your Name</li>
              <li>Your Phone Number</li>
              <li>Your Email Address</li>
              <li>Your physical location or address in the Bronx</li>
              <li>Any message details you provide</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              How We Use Your Information
            </h2>
            <p>
              We use the collected information in various ways, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To contact you regarding your requested locksmith services.</li>
              <li>To send service notifications or booking confirmations.</li>
              <li>To route leads to our local mobile locksmith patrol units via Telegram secure bot connections.</li>
              <li>To analyze and monitor website performance and tracking metrics.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Consent
            </h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
