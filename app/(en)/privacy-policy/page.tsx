import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { localizedAlternates, englishSocialMetadata } from "@/config/localized-routes";

export const metadata = {
  title: "Privacy Policy | Emergency Locksmith Bronx",
  description: "Review what Emergency Locksmith Bronx collects through its website and calls, how it uses analytics, and how to contact the business.",
  alternates: localizedAlternates("/privacy-policy/"),
  ...englishSocialMetadata(
    "/privacy-policy/",
    "Privacy Policy",
    "Review what Emergency Locksmith Bronx collects through its website and calls, how it uses analytics, and how to contact the business.",
  ),
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
          <p className="text-zinc-400">Draft updated: November 15, 2026</p>

          <div className="space-y-6 text-zinc-300">
            <p>
              This draft explains how Emergency Locksmith Bronx handles information submitted through {siteConfig.url}, by phone, or in connection with a service request. It describes the business practices confirmed for this draft and must be reviewed for legal accuracy before publication.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Information You Provide
            </h2>
            <p>
              The booking form asks for your name, phone number, service type, preferred date and time, service location, and any optional details you choose to provide. The quote or contact form asks for your name, phone number, email address, and message. A form submission also includes the page path where you submitted it, but not the page’s query string. A message may contain other personal information if you choose to include it.
            </p>
            <p>
              Phone calls with the business are recorded for training purposes. The business’s current practice is to retain all of its business records for 18 months, including service requests, job and customer-service records, and call recordings. This period does not describe any separate retention applied by analytics or messaging providers.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              How Information Is Used and Transmitted
            </h2>
            <p>
              We use information you provide to review and respond to an inquiry, discuss scope and pricing, coordinate a requested service, maintain service records, and address a complaint or workmanship concern. Submitting a form does not confirm an appointment or create a real-time dispatch; call (646) 264-1901 to confirm current availability.
            </p>
            <p>
              Website form submissions are sent to the business through a server-side Cloudflare Pages Function and the Telegram Bot API so the team can receive and follow up on the inquiry. Telegram is a third-party service. This website does not represent the Telegram transmission as end-to-end encrypted. See <a className="text-brand-yellow underline" href="https://telegram.org/privacy-tpa">Telegram’s bot privacy policy</a> for information about Telegram’s own practices.
            </p>
            <p>
              We do not send SMS/text messages. A technician may leave a voicemail about a service request. If you prefer not to discuss a matter on a recorded call, you may write to <a className="text-brand-yellow underline" href="mailto:info@emergencylocksmithbronx.com">info@emergencylocksmithbronx.com</a>.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Form Security
            </h2>
            <p>
              To help limit automated form abuse, the server-side form function temporarily uses the connecting IP address in per-instance in-memory rate-limit state. The IP address is not added to the Telegram lead message. Cloudflare may also process technical connection information when hosting the site.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Website Analytics
            </h2>
            <p>
              Google Analytics and Microsoft Clarity are used on the customer-facing website solely to understand website use and improve the site. They are not used by the business for advertising or remarketing. Depending on the tools and their settings, analytics may process information about pages viewed, interactions, and browser or device characteristics, and may use cookies or similar technologies. Provider retention and processing are subject to their own terms and the account settings in use.
            </p>
            <p>
              The business reports that Clarity is configured to mask form inputs. Masking is not a reason to enter sensitive information into a website message; please provide only details needed to explain your request. For more information, review <a className="text-brand-yellow underline" href="https://support.google.com/analytics/answer/7318509?hl=en">Google’s Analytics privacy disclosure guidance</a>, <a className="text-brand-yellow underline" href="https://clarity.microsoft.com/privacy">Microsoft Clarity’s privacy information</a>, and <a className="text-brand-yellow underline" href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-masking">Clarity’s masking documentation</a>.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Questions and Contact
            </h2>
            <p>
              For questions about this draft or information connected with a service request, email <a className="text-brand-yellow underline" href="mailto:info@emergencylocksmithbronx.com">info@emergencylocksmithbronx.com</a> or call <a className="text-brand-yellow underline" href="tel:+16462641901">(646) 264-1901</a> and ask for a manager. The business will follow up as soon as possible. Nothing in this draft is intended to limit privacy or consumer rights that cannot legally be waived.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
