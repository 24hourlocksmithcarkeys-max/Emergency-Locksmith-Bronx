import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { localizedAlternates, englishSocialMetadata } from "@/config/localized-routes";

export const metadata = {
  title: "Terms of Service | Emergency Locksmith Bronx",
  description: "Review mobile locksmith service scope, upfront pricing, dispatch minimums, workmanship coverage, and complaint contacts in the Bronx.",
  alternates: localizedAlternates("/terms-of-service/"),
  ...englishSocialMetadata(
    "/terms-of-service/",
    "Terms of Service",
    "Review mobile locksmith service scope, upfront pricing, dispatch minimums, workmanship coverage, and complaint contacts in the Bronx.",
  ),
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
          <p className="border border-amber-700 bg-amber-950/40 p-4 text-amber-200" role="note">
            DRAFT FOR NEW YORK COUNSEL REVIEW ONLY. This is not legal advice or a final customer contract. Do not publish as final until reviewed by New York counsel.
          </p>
          <p className="text-zinc-400">Draft updated: November 15, 2026</p>

          <div className="space-y-6 text-zinc-300">
            <p>
              This draft concerns website inquiries and mobile locksmith services provided by Emergency Locksmith Bronx. The centralized dispatching center is at {siteConfig.contact.address}; it is not a walk-in storefront. The draft must be reviewed by New York counsel before it is used as a customer contract.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Mobile Service and Availability
            </h2>
            <p>
              Emergency Locksmith Bronx provides mobile locksmith service throughout the Bronx. Regular hours are Monday through Thursday, 9:00 a.m. to 5:00 p.m.; service is available 24 hours Friday through Sunday. Call to confirm availability for your request. The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. These are historical averages, not a promise or guarantee; actual arrival times vary.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Scope and Upfront Price
            </h2>
            <p>
              Before dispatch, the business will explain the proposed work and disclose the price for the agreed scope. No additional charge is added solely because the service address is in another Bronx neighborhood. The same price does not apply to every job; the applicable service-call amount varies by job type and the time of day the request is received. The business will tell you the applicable service-call amount before dispatch.
            </p>
            <p>
              If inspection shows that the requested work should change, the technician will explain the proposed scope and price before beginning additional work. No additional work is authorized unless you agree to the revised scope and price.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Service-Call Fee, Dispatch, and Cancellation
            </h2>
            <p>
              No service-call fee is due before a technician is dispatched. Once a technician has been assigned and dispatched or is on the way, the disclosed service-call fee is the minimum amount due. The fee helps cover dispatch and travel-related operating costs. If you authorize the quoted job, the service-call fee is credited toward the agreed job price.
            </p>
            <p>
              If you cancel after dispatch, or the technician cannot complete the job for circumstances outside the business’s control, the disclosed service-call fee remains due at minimum. This applies even when inspection shows that the problem requires a different trade or specialist—for example, an auto electrical fault that requires an auto electrician rather than a locksmith.
            </p>
            <p>
              Nothing in this draft waives a cancellation, refund, or notice right that applies under law. Any required legal notice or right controls over this draft.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Partly Completed or Unfinished Work
            </h2>
            <p>
              If a dispatched job is only partly completed or cannot be finished because of circumstances outside the business’s control, the minimum payable is the service-call fee disclosed before dispatch, plus the disclosed price of any parts actually used. Any other labor or work charge must have been included in the agreed-scope price or separately explained and approved before that work is performed. This draft does not create an automatic half-of-the-job charge or another undisclosed partial-completion fee.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Complaints and Workmanship Coverage
            </h2>
            <p>
              To raise a concern, call <a className="text-brand-yellow underline" href="tel:+16462641901">(646) 264-1901</a> and ask for a manager, or write to <a className="text-brand-yellow underline" href="mailto:info@emergencylocksmithbronx.com">info@emergencylocksmithbronx.com</a>. The business will follow up and work to resolve the issue as soon as possible; no fixed response deadline is promised. You may also contact a government consumer-protection agency or use any legal right available to you.
            </p>
            <p>
              The workmanship warranty lasts 10 days from job completion. It does not cover damage caused by the customer or a third party. For a covered workmanship concern, the business will re-inspect the work and decide, based on that inspection, whether re-work or a credit is appropriate. The business will tell the customer its decision at the inspection. This draft does not limit rights that cannot legally be waived.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Dispute Proposals — Not Operative; Counsel Review Required
            </h2>
            <p>
              The business has asked New York counsel to review a proposed arbitration approach after an effort to resolve concerns with management. The owner has also asked counsel to consider a proposal that the customer pay court costs for both parties and a cap limiting a customer’s recovery to amounts paid or agreed. None of those proposals is an operative term in this draft: it does not require arbitration, shift either party’s court costs, or cap a customer’s recovery. Do not treat this section as an agreement to arbitrate or a waiver of court, agency, small-claims, or other rights. Arbitration can involve court proceedings, and counsel must determine whether any proposed language is lawful and appropriate before it is separately presented for acceptance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
