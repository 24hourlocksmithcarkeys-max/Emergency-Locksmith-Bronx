import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Award, Users, CheckCircle, Phone, ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: "About Emergency Locksmith Bronx",
  description: "Emergency Locksmith Bronx is a DCA-licensed, locally owned locksmith company serving every Bronx neighborhood 24/7. Learn about our team, our standards,...",,
};

export default function AboutPage() {

  const contentSections = [
    {
      heading: "Founded in the Bronx, Built for the Bronx",
      paragraphs: [
        "Emergency Locksmith Bronx was founded specifically to serve a borough that had been underserved by the national locksmith franchise model. Large national chains route calls through centralized dispatch centers, match customers with the nearest available subcontractor, and maintain no real accountability to the communities where they operate. The result is inconsistent quality, inflated pricing, and slow response times that are entirely unacceptable when someone is locked out of their home at midnight or stranded in a parking lot with a locked car.",
        "The company was established at its central Bronx location — {siteConfig.contact.address} — with a focused mandate: to be the fastest, most professional, and most transparent locksmith service in the borough. That mandate has guided every operational decision made since founding. Mobile units are locally stationed rather than sent from a central garage. Dispatch is handled by Bronx-based coordinators who know the borough's geography. Technicians are hired and trained locally, and the DCA licensing requirements of the NYC Department of Consumer Affairs are maintained continuously.",
        "The Bronx is not a monolith. Its 42 square miles contain one of the most architecturally and socially diverse communities in the country — from the pre-war grandeur of the Grand Concourse Historic District to the working waterfront of Hunts Point, from the leafy residential streets of Riverdale to the dense apartment corridors of Co-op City. A locksmith service that operates meaningfully in all of these contexts must know them intimately — and that knowledge is earned only by being present in the borough every day."
      ]
    },
    {
      heading: "Our Team — Background-Checked, Continuously Trained Professionals",
      paragraphs: [
        "Every technician who joins the Emergency Locksmith Bronx team undergoes a comprehensive background check before their first service call. This is not an optional step — it is a non-negotiable standard that reflects the fundamental reality of the locksmith profession: technicians are invited into customers' homes, given access to their vehicles, and trusted with the physical security of their most important spaces. The people performing that work must be verifiably trustworthy.",
        "After background clearance, new technicians complete an apprenticeship period working alongside senior technicians on a wide range of service types before being dispatched independently. This hands-on training covers residential lock picking and rekeying across all major hardware brands, automotive transponder key cutting and programming, commercial lock installation and panic bar compliance, and safe manipulation for specialty service calls. Competency in each area is assessed before independent dispatch is authorized.",
        "Continuing education is maintained across all service categories as lock technology evolves. Smart lock platforms, proximity key systems, and access control integration all require regular updates to knowledge and equipment. Technicians are equipped with current transponder programmer software updates, new key blank inventory as new vehicle models are released, and updated pin kits as new cylinder brands enter the Bronx residential and commercial markets."
      ]
    },
    {
      heading: "NYC DCA Licensing — What It Means and Why It Matters",
      paragraphs: [
        "The New York City Department of Consumer Affairs issues locksmith licenses to individuals and businesses that meet specific requirements covering background investigation, training verification, insurance documentation, and business registration compliance. Maintaining this license is an active obligation — not a one-time credential. License renewals are required on a regular cycle, and DCA compliance investigators monitor licensed businesses for consumer complaints and regulatory adherence.",
        "For Bronx residents and businesses engaging a locksmith, DCA licensing provides a concrete verification mechanism. The license number can be checked at nyc.gov/consumers at any time to confirm that the license is active and in good standing. Any locksmith unable to provide a DCA license number when asked should not be engaged. The license system exists specifically to protect consumers from the fraudulent operators who have historically targeted distressed New Yorkers in lockout situations.",
        "Our DCA license number is available on request at every service call. Technicians carry their individual DCA identification cards and present them upon arrival without being asked. The business license is maintained in continuous good standing, and no complaint has been upheld by the DCA against our operations. This compliance record is a reflection of the pricing transparency, professional conduct, and service quality standards that are maintained across every dispatch."
      ]
    },
    {
      heading: "Upfront Pricing — Our Commitment Against Bait-and-Switch",
      paragraphs: [
        "Locksmith price fraud is the most damaging form of contractor fraud affecting New York City residents. The pattern is familiar: a low quote is given over the phone, a technician arrives, and the bill presented at the end of the job bears no relationship to the original quote. Customers who have just regained access to their home or car are in a psychologically weakened position to dispute these charges, and the operators know it.",
        "Emergency Locksmith Bronx operates on an explicit contrary principle: the price quoted over the phone is the price charged at completion for the agreed scope of work. Before any service call is dispatched, the customer is informed of the applicable service rate for their specific job type — standard deadbolt lockout, rekeying per cylinder, transponder key replacement, and so on. If an unforeseen complication is discovered at the scene that would change the cost, the customer is informed before work continues and retains the option to decline.",
        "This commitment to pricing transparency is not a marketing claim — it is operationally enforced. Dispatch logs are reviewed for pricing consistency, and any technician whose on-site charges diverge from the quoted rate without a documented customer-acknowledged scope change is subject to immediate review. The company reputation in the Bronx community depends on every customer knowing that our prices are honest."
      ]
    },
    {
      heading: "Non-Destructive Entry — Our Technical Standard for Every Lockout",
      paragraphs: [
        "Every lockout service call begins with the same technical commitment: the lock, door, and frame are to be returned in exactly the condition they were found, using picking techniques that leave no trace. This is not a preference — it is a professional standard that distinguishes a trained locksmith from an improvised one.",
        "Non-destructive entry is achieved through precision application of picking tools and tension wrenches that manipulate only the internal pin stacks of the cylinder without affecting the lock body, door face, or frame. The process requires the right tools, the right technique, and enough patience to work with the specific feel of the cylinder rather than against it. High-security cylinders with spool or mushroom driver pins require refined technique — light tension, careful listening for false sets, and deliberate adjustment of picking pressure.",
        "Drilling — the last resort that permanently destroys the cylinder — is used only when all non-destructive methods have been exhausted after a reasonable attempt, or when the cylinder is already confirmed to be mechanically failed and non-functional. Before drilling is used, the customer is explicitly informed and asked to authorize the approach. This authorization is documented. No cylinder is drilled without the customer's full awareness and agreement."
      ]
    },
  ];

  const faqs = [
    {
      q: "How long has Emergency Locksmith Bronx been operating?",
      a: "Emergency Locksmith Bronx has been operating as a locally founded and managed locksmith company in the borough for multiple years. The business was established specifically to serve Bronx residents and businesses rather than as a franchise or subcontractor arrangement. All operations are based at the central Bronx location and dispatched locally."
    },
    {
      q: "Are your technicians employed directly or are they subcontractors?",
      a: "Our technicians are employed and trained directly by Emergency Locksmith Bronx. No service call is routed to third-party subcontractors. All technicians have completed our apprenticeship training program, passed a comprehensive background check, and hold individual DCA locksmith credentials. This direct employment model ensures consistent quality and accountability on every dispatch."
    },
    {
      q: "What happens if a technician damages something during a service call?",
      a: "The company maintains comprehensive general liability insurance that covers any property damage that occurs during service. Before any service begins, the lock and door condition are noted. If damage to a lock, door, or vehicle occurs as a direct result of the service — not from pre-existing conditions — it is covered through the company's insurance and addressed promptly. The customer is never left responsible for damage caused by our work."
    },
    {
      q: "Can Emergency Locksmith Bronx provide a letter or invoice for insurance purposes?",
      a: "Yes. Itemized invoices are provided for every service call as standard. These invoices are formatted to include the service type, materials used, labor, and total charge — all the information typically required for business expense documentation, renter's insurance claims, or employer reimbursement. A formal service letter on company letterhead is also available upon request."
    },
    {
      q: "Do you serve commercial accounts differently from individual residential calls?",
      a: "Commercial accounts that require recurring service — property management companies, multi-unit building owners, restaurant groups, and office building managers — can request a commercial account setup. This provides priority dispatch, consistent technician assignment where possible, monthly invoicing, and documentation reports for property maintenance records. Individual service calls and emergency lockouts are dispatched with the same priority regardless of account type."
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Page Hero */}
        <section className="bg-zinc-900 border-b border-zinc-800 py-16 lg:py-24" aria-label="About us page header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Who We Are</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold uppercase tracking-tight">
              About Emergency Locksmith Bronx
            </h1>
            <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              A locally founded, DCA-licensed locksmith company built from the ground up to serve every Bronx neighborhood with the speed, professionalism, and transparency that national franchises have consistently failed to deliver.
            </p>
          </div>
        </section>

        {/* What Sets Us Apart — Quick Stats */}
        <section className="bg-brand-yellow text-zinc-950 py-10 border-y border-yellow-400" aria-label="Company highlights">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["15–30 Min", "Average Response Time"],
              ["24 / 7 / 365", "Emergency Dispatch"],
              ["DCA Licensed", "NYC Certified & Bonded"],
              ["36 Neighborhoods", "Full Bronx Coverage"],
            ].map(([stat, label], i) => (
              <div key={i} className="space-y-1">
                <p className="font-serif font-extrabold text-2xl sm:text-3xl">{stat}</p>
                <p className="font-sans text-xs uppercase tracking-wider text-zinc-700">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Content + Sidebar */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="About us detailed information">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <article className="lg:col-span-8 space-y-12">
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
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase border-l-4 border-brand-yellow pl-4">
                  About Us — Frequently Asked Questions
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
            </article>

            <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Company trust signals and contact">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-5">
                <h3 className="font-serif font-bold text-brand-yellow text-sm uppercase tracking-wider">What Sets Our Service Apart</h3>
                <ul className="space-y-4 font-sans text-sm text-zinc-300">
                  {[
                    ["NYC DCA Licensed", "Compliant with all Department of Consumer Affairs locksmith regulations."],
                    ["Background-Checked Techs", "Every technician is verified before their first service call."],
                    ["Non-Destructive Entry", "Picking tools only — no unnecessary drilling, scratching, or damage."],
                    ["Upfront Pricing", "The quoted rate is the final rate — no hidden additions after work begins."],
                    ["Local Bronx Dispatch", "No national routing — calls answered and dispatched locally."],
                    ["Full Insurance Coverage", "General liability coverage protects customers throughout every service."],
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
                      <span><strong>{title}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
                <h3 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Contact Our Bronx Team</h3>
                <p className="text-zinc-400 text-xs font-sans">{siteConfig.contact.address}, Bronx, NY</p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-5 py-3 rounded transition-all whitespace-nowrap text-sm w-full justify-center"
                  aria-label={`Call Emergency Locksmith Bronx at ${siteConfig.contact.phoneDisplay}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border border-zinc-700 hover:border-brand-yellow text-zinc-300 hover:text-brand-yellow font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded transition-all whitespace-nowrap w-full justify-center"
                  aria-label="Browse the complete list of available locksmith services"
                >
                  <span>Browse All Services Available</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Dynamic Services display */}
        <ServicesGrid />

      </main>
      <Footer />
    </>
  );
}

