import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock, ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact Emergency Locksmith Bronx",
  description: "Contact Emergency Locksmith Bronx for 24/7 emergency lockout help, lock upgrades, or a free quote. Call (646) 264-1901 — local Bronx dispatcher answer...",
};

export default function ContactPage() {

  const contentSections = [
    {
      heading: "What to Have Ready When You Call Our Emergency Line",
      paragraphs: [
        "When the emergency dispatch line is called, a Bronx-based coordinator answers and collects the information needed to dispatch the nearest available technician immediately. Having the following information ready when calling reduces dispatch time and ensures the technician arrives with the correct tools and materials for the specific job.",
        "For residential lockouts: the full address including apartment number, the type of lock (deadbolt, mortise, or smart lock if known), and whether the door is a standard or unusually thick door. For automotive lockouts: the vehicle's year, make, model, and color, the current exact location (address or nearest intersection and landmark), and whether the key is locked inside the car, lost entirely, or broken in a cylinder. For commercial lockouts: the business name, address, floor or suite number, and the lock type if known (cylindrical lever, mortise lockset, or electronic access).",
        "Proof of the right to access the property should also be gathered while the technician is in transit. For home and apartment lockouts, a photo ID showing the address is standard. For vehicle lockouts, the vehicle registration or insurance card is required. For business lockouts, a business ID card or any documentation listing the business at that address is used. Having these documents ready eliminates verification delays when the technician arrives."
      ]
    },
    {
      heading: "Non-Emergency Contact — Quotes, Consultations, and Scheduled Service",
      paragraphs: [
        "Not all locksmith needs are emergencies. Lock upgrades, smart lock installation projects, master key system designs for commercial properties, and rekeying projects for multiple units can all be planned and scheduled in advance. For non-emergency inquiries, the quote form on this page is the most efficient first step — it allows the service type, property details, and preferred scheduling window to be communicated before a callback, enabling the coordinator to prepare a specific quote rather than a general estimate.",
        "Quotes for non-emergency services are prepared based on the specific information provided: the lock brand and model being serviced, the number of cylinders being rekeyed, the smart lock model being installed, or the number of doors being included in a master key system. The more specific the information in the quote request, the more accurate and final the quote that comes back. Vague requests receive a range rather than a firm figure.",
        "Consultations for commercial master key systems and access control projects are conducted as on-site visits. A technician visits the property, assesses the existing hardware, maps the access requirements, and prepares a design proposal that is presented before any work begins. The consultation is typically completed within 30 to 60 minutes depending on the property's size and complexity. Consultation scheduling is available Monday through Friday during business hours."
      ]
    },
    {
      heading: "What Happens After You Submit the Quote Form",
      paragraphs: [
        "When a quote form is submitted through this page, it is received immediately by the Bronx dispatch and coordination team. For non-emergency service requests, a callback is made within two to four hours during business hours and by the next morning for requests submitted after business hours. The callback confirms the service details, provides the specific quote, and offers available scheduling windows.",
        "For emergency lockout situations, the emergency phone line — not the quote form — should be used. The form is not monitored in real time and is not appropriate for situations requiring immediate dispatch. If an emergency is experienced, call {siteConfig.contact.phoneDisplay} directly. The dispatcher answers immediately and dispatches a technician without the delay involved in form submission and callback.",
        "After a quote is accepted and a service appointment is scheduled, a confirmation is provided by text or email with the appointment window, the technician's name, and the confirmed service scope and pricing. On the day of the appointment, the technician calls approximately 15 minutes before arrival to confirm access. If the schedule needs to change, the customer is notified as early as possible and an alternative window is offered."
      ]
    },
    {
      heading: "Why Calling Directly Is Always Faster Than Searching Online During an Emergency",
      paragraphs: [
        "Online search during a lockout emergency is the highest-risk moment for encountering fraudulent locksmith advertising. Paid search results — which appear above organic results in Google searches for 'emergency locksmith near me' and similar terms — frequently include fraudulent operators using bait-and-switch pricing tactics. Clicking on these results, calling the listed number, and being redirected through a national call center before a subcontractor arrives takes significantly longer than calling a locally known, pre-verified number directly.",
        "Saving a trusted local locksmith's number in a phone contacts list before any emergency occurs is the single most effective protection against both locksmith fraud and the delay of searching during a stressful situation. The number is already verified, the company is already confirmed as DCA licensed, and the call connects directly to a Bronx dispatcher rather than a national routing center.",
        "If a number has not been saved and a search must be used, verifying the locksmith's DCA license before authorizing any dispatch takes less than two minutes. The DCA license lookup at nyc.gov/consumers requires only the business name or individual name. A legitimate Bronx locksmith provides their license number immediately when asked. Any refusal to provide a license number is a sufficient reason to end the call and dial a different service."
      ]
    },
  ];

  const faqs = [
    {
      q: "How quickly does the emergency line answer?",
      a: "The emergency phone line is answered by a live Bronx-based dispatcher within two rings during all hours. There are no automated menus, hold queues, or recorded messages to navigate during business or after-hours calls. The dispatcher who answers has immediate access to technician positions and can confirm an ETA before the call ends."
    },
    {
      q: "Can a quote be provided by text message?",
      a: "Yes. For customers who prefer text communication, a brief description of the service needed can be sent to {siteConfig.contact.phone} and a quote response is provided within one to two hours during business hours. Text is appropriate for non-emergency quote requests. For emergency situations, a phone call ensures immediate dispatch."
    },
    {
      q: "Is there a fee just for the technician coming out?",
      a: "A service call fee may apply for some service types and is disclosed at the time of dispatch before the technician is sent. This fee, when applicable, is included in the total price quoted over the phone and does not appear as a surprise addition on the final bill. For many service types — particularly scheduled non-emergency visits — there is no separate service call charge."
    },
    {
      q: "Can service be requested for an address that is not in the customer's name?",
      a: "Service can be requested on behalf of another person — for example, a property manager calling for a tenant's lockout or a parent arranging service for a child's apartment. In these cases, the person present at the property must still provide verification of their right to access the specific unit or vehicle. Arrangements should be communicated to the dispatch team at the time of the call so that verification expectations are clear for both parties."
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
              Emergency lockout? Call the direct line — a Bronx dispatcher answers immediately, 24 hours a day, every day. Need a quote or consultation for a non-emergency project? Use the form below and a coordinator will follow up within hours.
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
                  Our mobile locksmith fleet is active 24 hours a day, 7 days a week, 365 days a year. Dispatch calls connect directly to a local Bronx coordinator — no automated systems, no national routing delays. Response time across all Bronx neighborhoods is 15 to 30 minutes.
                </p>
              </div>

              {/* Detail cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-3">
                  <div className="text-brand-yellow">
                    <Phone className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif font-bold text-lg">Call or Text 24/7</h3>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-brand-yellow font-bold text-base hover:underline block"
                    aria-label={`Call Emergency Locksmith Bronx at ${siteConfig.contact.phoneDisplay}`}
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <p className="text-zinc-400 text-xs font-sans">Live Bronx dispatcher — answers immediately.</p>
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
                  <p className="text-zinc-400 text-xs font-sans">Response within 24 hours for non-emergency inquiries.</p>
                </div>

                <div className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg space-y-3">
                  <div className="text-brand-yellow">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif font-bold text-lg">Office Location</h3>
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
                    <strong>Emergency Dispatch: 24/7</strong>
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
                  Our DCA license number is available on request. You can verify any Bronx locksmith's license at <strong className="text-zinc-300">nyc.gov/consumers</strong> before authorizing any service. Always ask for the license number — a legitimate locksmith provides it immediately.
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


