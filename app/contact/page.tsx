import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock, ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: { absolute: "Contact Emergency Locksmith Bronx | Call for Service" },
  description:
    "Call (646) 264-1901 to discuss a Bronx locksmith request and confirm current availability, the agreed scope, upfront pricing, and an arrival estimate.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {

  const contentSections = [
    {
      heading: "What to Have Ready When You Call",
      paragraphs: [
        "A real locksmith answers the call and asks about the address, lock or vehicle, and situation. This information helps the locksmith prepare the technician with the tools and parts needed for the service call. Having the details ready can help the conversation move efficiently.",
        "Have the Bronx service address ready. For a vehicle, the make, model, and year can help the locksmith understand the job. Share what happened and any lock or vehicle details you know; the locksmith will ask follow-up questions.",
        "For property or vehicle service, describe the situation and ask whether any specific information or authorization is relevant to your request.",
      ]
    },
    {
      heading: "Non-Emergency Contact — Quotes, Consultations, and Scheduled Service",
      paragraphs: [
        "For non-emergency requests, use the form or call to describe the requested work. The locksmith can confirm current availability and the price for the agreed scope before dispatch.",
        "Price depends on the service and agreed scope; there is no added charge solely because a service address is elsewhere in the Bronx. Confirm the total upfront before dispatch.",
        "For a project involving multiple doors or units, share the scope when you call or submit the form. Ask whether the requested service is available and what information or site review is needed before a quote can be confirmed.",
      ]
    },
    {
      heading: "Using the Quote Form",
      paragraphs: [
        "The quote form is for non-emergency inquiries and is not a real-time dispatch channel. For current availability, call (646) 264-1901 and speak with a real locksmith.",
        "Calls are answered by a real locksmith, who asks about the lock or vehicle and location, confirms current availability, and provides an arrival estimate and upfront price for the agreed work.",
        "Hours are Monday–Thursday, 9:00 a.m.–5:00 p.m.; service is available 24 hours Friday–Sunday. Confirm the appointment details and current arrival estimate directly with the locksmith.",
      ]
    },
    {
      heading: "Choosing and Verifying a Locksmith",
      paragraphs: [
        "When comparing locksmiths, check that the business name and contact information are consistent. Avoid relying on unsupported promises about arrival times or a price that is not tied to a specific scope of work.",
        "Emergency Locksmith Bronx reports an active NYC DCWP locksmith license. The license number is available upon request and is not posted publicly because of impersonation and scam concerns. You can consult NYC DCWP resources to learn about licensing.",
        "Before agreeing to service, ask who will perform the work, what the price covers, when service is available, and how long the current arrival estimate is. Confirm any changes to the scope or price before extra work begins.",
      ]
    },
  ];

  const faqs = [
    {
      q: "How quickly does the emergency line answer?",
      a: "Calls are answered by a real locksmith. The locksmith asks about the address, lock or vehicle, and situation, then confirms current availability and a non-guaranteed arrival estimate."
    },
    {
      q: "Can a quote be provided by text message?",
      a: "Use the contact form for non-emergency quote requests, or call (646) 264-1901 to speak with a real locksmith and confirm current availability and pricing."
    },
    {
      q: "Is there a fee just for the technician coming out?",
      a: "The price for the agreed scope is confirmed upfront before dispatch. No additional charge applies solely because the service address is elsewhere in the Bronx; the price still depends on the requested work."
    },
    {
      q: "Can service be requested for an address that is not in the customer's name?",
      a: "Explain who is requesting service and who will be present at the property or with the vehicle. The locksmith can tell you what details or documentation may be needed for your specific situation."
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Hero */}
        <section className="bg-zinc-900 border-b border-zinc-800 py-16 lg:py-24" aria-label="Contact page header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold uppercase tracking-tight">
              Contact Emergency Locksmith Bronx
            </h1>
            <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              A real locksmith answers calls. Hours: {siteConfig.hours.display}. Need a quote or consultation? Call or use the form below; the locksmith can confirm current availability and the estimated arrival time.
            </p>
          </div>
        </section>

        {/* Contact details and Booking form grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Contact details and booking form">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left side — details + quote form */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold uppercase">Reach Our Bronx Team Directly</h2>
                <div className="h-1 w-20 bg-brand-yellow rounded" aria-hidden="true" />
                <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                  Service is mobile throughout the Bronx from the centralized dispatching center at {siteConfig.contact.address}. The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. These are not guarantees; call with your address for the current estimate. No extra charge applies solely because a service address is elsewhere in the Bronx.
                </p>
              </div>

              {/* Detail cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-3">
                  <div className="text-brand-yellow">
                    <Phone className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif font-bold text-lg">Call Our Locksmith</h3>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-brand-yellow font-bold text-base hover:underline block"
                    aria-label={`Call Emergency Locksmith Bronx at ${siteConfig.contact.phoneDisplay}`}
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <p className="text-zinc-400 text-xs font-sans">A real locksmith answers. Hours: {siteConfig.hours.display}.</p>
                </div>

                <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-3">
                  <div className="text-brand-yellow">
                    <Mail className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif font-bold text-lg">Send Email</h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-zinc-300 font-bold text-sm hover:text-brand-yellow break-all transition block"
                    aria-label={`Send email to Emergency Locksmith Bronx at ${siteConfig.contact.email}`}
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-zinc-400 text-xs font-sans">For time-sensitive service requests, call to confirm current availability.</p>
                </div>

                <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-3">
                  <div className="text-brand-yellow">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif font-bold text-lg">Dispatch Center</h3>
                  <address className="text-zinc-350 text-sm font-sans not-italic">
                    {siteConfig.contact.address}<br />
                    Bronx, NY
                  </address>
                </div>

                <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-3">
                  <div className="text-brand-yellow">
                    <Clock className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif font-bold text-lg">Service Hours</h3>
                  <p className="text-zinc-350 text-sm font-sans">
                    {siteConfig.hours.regular}<br />
                    <strong>{siteConfig.hours.emergency}</strong>
                  </p>
                </div>
              </div>

              {/* Quote form */}
              <div className="pt-4 border-t border-zinc-800">
                <h3 className="font-serif font-bold text-lg text-white mb-4">Request a Non-Emergency Quote</h3>
                <QuoteForm />
              </div>
            </div>

            {/* Right side — booking form + deep content */}
            <div className="lg:col-span-6 space-y-10 lg:sticky lg:top-8">
              <BookingForm />

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
                <h3 className="font-serif font-bold text-brand-yellow text-sm uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  <span>Before You Call — Verify Our Credentials</span>
                </h3>
                <p className="text-zinc-400 text-xs font-sans leading-relaxed">
                  Our NYC DCWP locksmith license is active. The number is available upon request and is intentionally not posted publicly because of impersonation and scam concerns. Read the city&apos;s licensing information before authorizing service.
                </p>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover font-sans font-bold text-xs uppercase tracking-wider"
                  aria-label="Learn about our licensed team and professional standards"
                >
                  <span>Learn About Our Licensed Team and Standards</span>
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Content */}
        <section className="bg-zinc-900/40 border-y border-zinc-900 py-20" aria-label="Contact guidance and information">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {contentSections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase border-l-4 border-brand-yellow pl-4 leading-snug">
                  {sec.heading}
                </h2>
                <div className="space-y-4 text-zinc-300 font-sans text-base leading-relaxed">
                  {sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            ))}

            {/* FAQs */}
            <div className="space-y-5 pt-4">
              <h2 className="text-2xl font-serif font-bold text-white uppercase border-l-4 border-brand-yellow pl-4">
                Contact — Frequently Asked Questions
              </h2>
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg space-y-2">
                  <h3 className="font-serif font-bold text-brand-yellow text-base flex gap-2 items-start">
                    <HelpCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-zinc-400 text-sm font-sans pl-7 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
