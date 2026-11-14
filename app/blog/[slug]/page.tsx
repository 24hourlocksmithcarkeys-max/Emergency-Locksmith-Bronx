import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { siteConfig } from "@/config/site";
import { ArrowLeft, Clock, Calendar, ArrowRight, HelpCircle } from "lucide-react";
import { notFound } from "next/navigation";

interface BlogParams {
  slug: string;
}

export async function generateStaticParams(): Promise<BlogParams[]> {
  return [
    { slug: "bronx-apartment-lockout-night-guide" },
    { slug: "best-smart-locks-bronx-pre-war-apartments" },
    { slug: "avoid-locksmith-scams-bronx-guide" },
    { slug: "bronx-business-guide-master-key-systems" },
    { slug: "lost-car-keys-bronx-locksmith-vs-dealer" },
  ];
}

interface InternalLink {
  text: string;
  href: string;
  label: string;
}

interface BlogSection {
  heading: string;
  paragraphs: string[];
}

interface BlogFAQ {
  q: string;
  a: string;
}

interface BlogPost {
  title: string;
  metaDesc: string;
  category: string;
  readTime: string;
  date: string;
  intro: string;
  sections: BlogSection[];
  faqs: BlogFAQ[];
  relatedLinks: InternalLink[];
}

const blogDatabase: Record<string, BlogPost> = {
  "bronx-apartment-lockout-night-guide": {
    title: "Locked Out of Your Bronx Apartment at Night? Practical Steps",
    metaDesc: "Practical safety steps for a Bronx apartment lockout: find a safe place, contact building staff if useful, and ask a locksmith about scope and price.",
    category: "Emergency Guidance",
    readTime: "4 min read",
    date: "Updated November 2026",
    intro: "A late-night apartment lockout can be stressful. First consider your immediate safety, then contact building staff or a locksmith as appropriate. Confirm current service availability, the proposed work, and its price before authorizing service.",
    sections: [
      {
        heading: "Choose a Safe Place to Wait",
        paragraphs: [
          "If the entrance or street does not feel safe, move to a well-lit, staffed place nearby if one is available. If anyone is in immediate danger, contact emergency services rather than waiting for a locksmith.",
          "Call the building owner, manager, or superintendent if you have their contact information. They may be able to explain building procedures or help with access.",
        ]
      },
      {
        heading: "What to Ask Before Locksmith Service",
        paragraphs: [
          "Describe the address, door, lock, and situation. Ask whether service is currently available, what information or authorization may be needed, what the proposed work involves, and what the price covers.",
          "Emergency Locksmith Bronx reports an active NYC DCWP locksmith license; its number is available upon request and is not posted publicly. You may verify licensing details through official NYC DCWP resources.",
        ]
      },
      {
        heading: "Avoid Rushing Into Door or Lock Work",
        paragraphs: [
          "Avoid forcing the door or using improvised tools if that could cause injury or damage. The appropriate entry approach depends on the door, lock, and condition; ask what is proposed and whether damage is possible before agreeing.",
          "Hours for Emergency Locksmith Bronx are Monday–Thursday, 9 a.m.–5 p.m., and Friday–Sunday, 24 hours. Call to confirm current availability and a non-guaranteed arrival estimate for your location.",
        ]
      }
    ],
    faqs: [
      { q: "What information should I have ready?", a: "Share the address, door and lock details if known, and the circumstances. Ask whether any additional information or authorization may be needed; this can depend on the situation." },
      { q: "How soon can a locksmith arrive?", a: "The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. These are not guarantees; ask for a current estimate. Work-completion time is separate." },
      { q: "How do I know what the service will cost?", a: "Ask for the price for the agreed scope before dispatch. If the requested work changes, the proposed work and any price change should be discussed before additional work begins." },
    ],
    relatedLinks: [
      { text: "Apartment lockout service information", href: "/apartment-lockout-bronx", label: "Read apartment lockout service information" },
      { text: "Residential locksmith service information", href: "/residential-locksmith-bronx", label: "Read residential locksmith service information" },
    ]
  },
  "best-smart-locks-bronx-pre-war-apartments": {
    title: "Smart Lock Compatibility for Bronx Pre-War Apartments",
    metaDesc: "Before choosing a smart lock for a Bronx apartment, check the door, existing hardware, product compatibility, and any lease or building requirements.",
    category: "Smart Home",
    readTime: "4 min read",
    date: "Updated November 2026",
    intro: "Smart-lock compatibility depends on the door, existing hardware, selected product, and property requirements. Before buying or arranging installation, check the manufacturer's measurements and instructions and confirm any lease or building rules that apply.",
    sections: [
      {
        heading: "Start With the Existing Door and Lock",
        paragraphs: [
          "Record the existing lock type and, where the manufacturer requests it, the door thickness and other measurements. A mortise lock, unusual backset, or non-standard door can affect which products fit.",
          "Use the specific product's current compatibility guide rather than assuming that a model fits every apartment door. If measurements are unclear, ask the manufacturer or a qualified installer before modifying the door.",
        ]
      },
      {
        heading: "Check Property Requirements Before Making Changes",
        paragraphs: [
          "If you rent or live in a managed building, review your lease or ask building management before changing door hardware. Requirements differ between properties; this guide does not interpret a particular lease or provide legal advice.",
          "Consider whether the selected product preserves existing access arrangements that the property requires. Confirm this with the owner or manager before ordering or installing hardware.",
        ]
      },
      {
        heading: "Plan for Power, Access, and Support",
        paragraphs: [
          "Read the manufacturer's information about power, emergency access, connectivity, and account management. Keep any backup method and account recovery information in a secure place.",
          "If you want installation help, share the door and product details when calling. Confirm whether the request is available, the proposed scope, and the price before dispatch.",
        ]
      }
    ],
    faqs: [
      { q: "Will a smart lock fit my pre-war apartment door?", a: "Compatibility depends on the door, existing hardware, and selected model. Check the product's current specifications and consult the manufacturer or a qualified installer if unsure." },
      { q: "Can I change a rental apartment lock?", a: "Requirements vary by lease and building. Check your lease or ask the property owner or manager before modifying hardware; consult a legal professional for advice about your rights or obligations." },
      { q: "Can a locksmith install a smart lock I already purchased?", a: "Availability and compatibility depend on the product and door. Call with the product model and door details to confirm whether the requested service is available and get an upfront price." },
    ],
    relatedLinks: [
      { text: "Smart lock installation service information", href: "/smart-lock-installation-bronx", label: "Read smart lock installation service information" },
      { text: "Residential locksmith service information", href: "/residential-locksmith-bronx", label: "Read residential locksmith service information" },
    ]
  },
  "avoid-locksmith-scams-bronx-guide": {
    title: "Questions to Ask Before Hiring a Locksmith in the Bronx",
    metaDesc: "Before arranging locksmith service in the Bronx, verify business details, check licensing through official resources, and confirm the scope and price.",
    category: "Consumer Guide",
    readTime: "4 min read",
    date: "Updated November 2026",
    intro: "When choosing a locksmith, confirm who you are calling, what service is available, and what the quoted price covers. Do not rely on a headline price or assume that a particular license, method, or arrival time applies to every provider.",
    sections: [
      {
        heading: "Confirm the Business and Licensing Information",
        paragraphs: [
          "Ask for the business name and licensing information, then use official NYC DCWP resources to check current details. If anything is unclear, contact the agency through its official channels.",
          "Emergency Locksmith Bronx reports an active NYC DCWP locksmith license. The license number is available upon request and is not posted publicly because of impersonation and scam concerns.",
        ]
      },
      {
        heading: "Agree on Scope and Price Before Dispatch",
        paragraphs: [
          "Describe the job and ask what work the price covers. Confirm the price for the agreed scope before dispatch, and ask how the price would change if the scope needs to change. Do not authorize extra work until the proposed work and price are clear.",
          "Pricing depends on the requested work; the Bronx service address alone does not add a charge for Emergency Locksmith Bronx. Ask any provider what charges apply to your specific request.",
        ]
      },
      {
        heading: "Pause if You Need More Information",
        paragraphs: [
          "If the arriving provider, business name, proposed work, or price differs from what you understood, pause and ask for clarification before authorizing work. You can take time to verify the provider or contact another business.",
          "Keep estimates, messages, and receipts. If you believe you were misled, consult official NYC DCWP consumer guidance or a qualified legal professional about options that may apply to your circumstances.",
        ]
      }
    ],
    faqs: [
      { q: "Can I ask for a locksmith license number?", a: "You may ask for licensing information and check current details through official NYC DCWP resources. Emergency Locksmith Bronx makes its number available upon request and does not post it publicly." },
      { q: "What should a quote include?", a: "Ask what work is included, what the total price is for that scope, and whether any proposed change could affect the price. Confirm before dispatch and before authorizing additional work." },
      { q: "What if the price changes after arrival?", a: "Ask the provider to explain the proposed change in work and price before additional work begins. If you do not agree, do not authorize the additional scope." },
    ],
    relatedLinks: [
      { text: "About Emergency Locksmith Bronx", href: "/about-us", label: "Read about Emergency Locksmith Bronx" },
      { text: "Contact and service information", href: "/contact", label: "View contact information" },
    ]
  },
  "bronx-business-guide-master-key-systems": {
    title: "Planning a Master Key System for a Bronx Business",
    metaDesc: "Questions for Bronx property owners and managers considering a master key system: access needs, existing hardware, key control, and project scope.",
    category: "Commercial Security",
    readTime: "4 min read",
    date: "Updated November 2026",
    intro: "A master key system can organize access for properties with multiple doors or user groups, but suitability depends on the existing hardware and access requirements. Start by documenting who needs access to which areas and ask a qualified provider what options are available.",
    sections: [
      {
        heading: "Map Access Needs Before Selecting a System",
        paragraphs: [
          "List the doors, users, and access needs that matter to the property. Consider who should be able to open each area, who manages keys, and how access needs may change when staff or tenants change.",
          "Avoid sharing sensitive building plans or key information publicly. Provide relevant details directly to a provider when requesting an assessment.",
        ]
      },
      {
        heading: "Review Existing Hardware and Key Control",
        paragraphs: [
          "Existing cylinders, door hardware, and the condition of each lock affect compatibility. Ask whether the current hardware can be used, what would need to change, and how the proposed system will be documented.",
          "Discuss how keys will be issued, tracked, returned, or replaced. Ask how future changes, lost keys, and new doors would be handled and priced.",
        ]
      },
      {
        heading: "Get a Defined Scope and Price",
        paragraphs: [
          "A project estimate should make clear which doors and hardware are included and identify any assessment or installation assumptions. Compare proposals using the same scope rather than a generic per-door estimate.",
          "Emergency Locksmith Bronx offers commercial locksmith service requests; call with the property details to confirm whether a master-key project is currently available, what the proposed scope would include, and the upfront price.",
        ]
      }
    ],
    faqs: [
      { q: "Can existing locks be used in a master key system?", a: "It depends on the lock type, compatibility, condition, and design requirements. A provider would need details or an assessment to explain available options." },
      { q: "How much does a master key system cost?", a: "Price depends on the number and type of doors, existing hardware, and requested scope. Ask for a project-specific price and confirm what is included before authorizing work." },
      { q: "How long does installation take?", a: "Timing depends on the property, hardware, and agreed scope. Ask for an estimate after the provider reviews the project; arrival time is separate from completion time." },
    ],
    relatedLinks: [
      { text: "Commercial locksmith service information", href: "/commercial-locksmith-bronx", label: "Read commercial locksmith service information" },
      { text: "Master key system service information", href: "/master-key-system-bronx", label: "Read master key system service information" },
    ]
  },
  "lost-car-keys-bronx-locksmith-vs-dealer": {
    title: "Lost Car Keys in the Bronx: Comparing Service Options",
    metaDesc: "Compare a dealership and a mobile locksmith for lost car keys by checking vehicle compatibility, availability, required information, travel, and total price.",
    category: "Automotive Security",
    readTime: "4 min read",
    date: "Updated November 2026",
    intro: "If you have lost a vehicle key, a dealership and a mobile locksmith may be options, depending on the vehicle and service requested. Compare current availability, compatibility, required information, travel arrangements, and the total price before choosing.",
    sections: [
      {
        heading: "Ask Whether the Provider Supports Your Vehicle",
        paragraphs: [
          "Vehicle key systems vary by make, model, year, and key type. Contact each provider with the vehicle details and ask whether the requested service is available for that specific vehicle.",
          "Ask what information or authorization may be needed and whether the vehicle must be present. Do not assume that a locksmith or dealership can handle every model or key system.",
        ]
      },
      {
        heading: "Compare the Full Price and Logistics",
        paragraphs: [
          "Ask for the price for the same agreed scope from each provider. Include any towing, travel, diagnostic, key, or other charges that may apply to your situation, and ask when the price could change.",
          "Availability and timing vary. Ask whether the provider can service the vehicle at its current location or whether you need to arrange transport, and get a current estimate before deciding.",
        ]
      },
      {
        heading: "Confirm the Work Before It Begins",
        paragraphs: [
          "Before authorizing work, confirm the provider's business name, the proposed service, what the quoted price includes, and how any change in scope would be handled.",
          "Emergency Locksmith Bronx provides mobile service throughout the Bronx. Call with vehicle details to confirm whether the requested service is available, the upfront price for the agreed scope, and a non-guaranteed arrival estimate.",
        ]
      }
    ],
    faqs: [
      { q: "Is a mobile locksmith always cheaper than a dealership?", a: "Not necessarily. Prices and available services vary by vehicle and provider. Compare the full price and scope, including any transport or additional charges." },
      { q: "How soon can a locksmith arrive?", a: "The owner reports an average arrival time of about 20 minutes over the last 90 days, with most emergency calls arriving in about 15–20 minutes. These are not guarantees; ask for a current estimate. Key-service completion time is separate." },
      { q: "Can a locksmith make a key for any vehicle?", a: "No universal compatibility is claimed. Availability depends on the vehicle and key system; provide the make, model, and year to confirm before dispatch." },
    ],
    relatedLinks: [
      { text: "Automotive locksmith service information", href: "/automotive-locksmith-bronx", label: "Read automotive locksmith service information" },
      { text: "Lost car key service information", href: "/lost-car-key-replacement-bronx", label: "Read lost car key service information" },
    ]
  },
};

interface PageProps {
  params: Promise<BlogParams>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogDatabase[slug];
  if (!post) return {};
  return {
    title: { absolute: post.title },
    description: post.metaDesc,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.metaDesc,
      url: `/blog/${slug}/`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogDatabase[slug];
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDesc,
    articleSection: post.category,
    dateModified: "2026-11-14",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Hero */}
        <section className="relative bg-zinc-900 py-16 lg:py-24 border-b border-zinc-800" aria-label="Blog post header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-brand-yellow hover:text-brand-yellow-hover font-sans text-xs uppercase tracking-wider transition-colors"
                aria-label="Browse all lock safety and security guides"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Browse All Lock Safety &amp; Security Guides</span>
              </Link>

              <div className="flex items-center gap-4 text-xs font-sans text-zinc-500 pt-2">
                <span className="bg-brand-yellow/10 text-brand-yellow px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold uppercase tracking-tight max-w-4xl pt-2">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm text-zinc-500 pt-4 font-sans">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Article */}
            <article className="lg:col-span-7 space-y-12">
              {/* Intro */}
              <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed font-sans font-medium border-l-4 border-brand-yellow pl-5">
                {post.intro}
              </p>

              {/* Sections */}
              {post.sections.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-white uppercase border-l-4 border-brand-yellow pl-4 leading-snug">
                    {sec.heading}
                  </h2>
                  <div className="space-y-4 text-zinc-300 font-sans text-base leading-relaxed">
                    {sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              ))}

              {/* FAQs */}
              <div className="space-y-6 pt-4">
                <h2 className="text-2xl font-serif font-bold text-white uppercase border-l-4 border-brand-yellow pl-4">
                  Frequently Asked Questions
                </h2>
                {post.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg space-y-2">
                    <h3 className="font-serif font-bold text-brand-yellow text-base flex gap-2 items-start">
                      <HelpCircle className="h-5 w-5 shrink-0 mt-0.5 text-brand-yellow" aria-hidden="true" />
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-zinc-400 text-sm font-sans pl-7 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Related links */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
                <h3 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Related Services</h3>
                <ul className="space-y-3">
                  {post.relatedLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="inline-flex items-start gap-2 text-brand-yellow hover:text-brand-yellow-hover font-sans text-xs font-bold uppercase tracking-wider leading-snug"
                        aria-label={link.label}
                      >
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{link.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-5 flex flex-col gap-8 sticky top-8" aria-label="Emergency contact and booking">
              <BookingForm />
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-3">
                <p className="text-zinc-400 text-xs font-sans">Need emergency locksmith help right now?</p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-5 py-3 rounded transition-all whitespace-nowrap text-sm w-full justify-center"
                  aria-label={`Call emergency locksmith line at ${siteConfig.contact.phoneDisplay}`}
                >
                  Call: {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </aside>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
