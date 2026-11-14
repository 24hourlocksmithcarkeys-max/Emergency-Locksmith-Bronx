import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { localizedAlternates, englishSocialMetadata } from "@/config/localized-routes";

export const metadata = {
  title: "Privacy Policy",
  description: "See what information Emergency Locksmith Bronx forms request, how inquiries are transmitted, and how to contact the business.",
  alternates: localizedAlternates("/privacy-policy/"),

  ...englishSocialMetadata("/privacy-policy/", "Privacy Policy", "See what information Emergency Locksmith Bronx forms request, how inquiries are transmitted, and how to contact the business."),
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
          <p className="text-zinc-400">Last updated: November 14, 2026</p>

          <div className="space-y-6 text-zinc-300">
            <p>
              At Emergency Locksmith Bronx, accessible from {siteConfig.url}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Emergency Locksmith Bronx and how we use it.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Information We Collect
            </h2>
            <p>
              The forms request different information. The booking inquiry asks for your name, phone number, service type, preferred date and time, service location, and optional details. The quote/contact inquiry asks for your name, phone number, email address, and message. The page URL from which a form is submitted is also included with the request. Information you choose to include in a message may contain additional personal details.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and phone number on either form</li>
              <li>Email address on the quote/contact form</li>
              <li>Service type, preferred date and time, and service location on the booking inquiry</li>
              <li>A message or optional service details, depending on the form</li>
              <li>The page URL associated with the submitted inquiry</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              How We Use Your Information
            </h2>
            <p>
              We use the information to review and respond to the locksmith inquiry. Submitting a form does not itself confirm an appointment or trigger real-time dispatch; call (646) 264-1901 to check current availability.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Form inquiries are transmitted to the business through a configured Telegram messaging integration. Telegram is a third-party service; this website does not describe the transmission as end-to-end encrypted.</li>
              <li>The forms do not promise a particular response time, booking confirmation, or dispatch.</li>
              <li>Google Analytics and Microsoft Clarity may be loaded when configured to measure website usage. Their collection and processing are subject to the applicable settings and provider policies.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Consent
            </h2>
            <p>
              Do not include information in a form message that is not needed to explain your request. For questions about this policy or an inquiry, email info@emergencylocksmithbronx.com or call (646) 264-1901. This page is general website information, not legal advice.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
