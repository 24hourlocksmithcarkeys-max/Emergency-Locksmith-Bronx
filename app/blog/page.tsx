import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Clock } from "lucide-react";

export const metadata = {
  title: { absolute: "Bronx Locksmith Guides | Security & Lock Advice" },
  description:
    "Practical guides for Bronx residents and businesses: lockout safety, locksmith scam checks, smart locks for pre-war apartments, and master key systems.",
  alternates: { canonical: "/blog/" },
};

const blogPosts = [
  {
    slug: "bronx-apartment-lockout-night-guide",
    title: "Locked Out of Your Bronx Apartment at Night? Here Is What to Do",
    summary: "Practical safety steps for a Bronx apartment lockout, including what to ask about service availability, scope, and price.",
    readTime: "4 min read",
    date: "Updated Nov 2026",
    category: "Emergency Guidance",
    cta: "Read the Night Lockout Safety Guide for Bronx Residents",
  },
  {
    slug: "best-smart-locks-bronx-pre-war-apartments",
    title: "Smart Lock Compatibility for Bronx Pre-War Apartments",
    summary: "Check existing hardware, product compatibility, and property requirements before purchasing or arranging smart lock installation.",
    readTime: "4 min read",
    date: "Updated Nov 2026",
    category: "Smart Home",
    cta: "Read the Smart Lock Guide for Pre-War Bronx Apartments",
  },
  {
    slug: "avoid-locksmith-scams-bronx-guide",
    title: "Questions to Ask Before Hiring a Locksmith in the Bronx",
    summary: "Verify business details, check licensing through official resources, and confirm the agreed scope and price before dispatch.",
    readTime: "4 min read",
    date: "Updated Nov 2026",
    category: "Consumer Guide",
    cta: "Read the Full Locksmith Scam Prevention Guide for Bronx Residents",
  },
  {
    slug: "bronx-business-guide-master-key-systems",
    title: "Planning a Master Key System for a Bronx Business",
    summary: "Questions for property owners and managers considering key access: existing hardware, access needs, key control, and project scope.",
    readTime: "4 min read",
    date: "Updated Nov 2026",
    category: "Commercial Security",
    cta: "Read the Master Key System Guide for Bronx Business Owners",
  },
  {
    slug: "lost-car-keys-bronx-locksmith-vs-dealer",
    title: "Lost Your Car Keys in the Bronx? Mobile Locksmith vs. Dealership Compared",
    summary: "Compare providers by vehicle compatibility, availability, required information, travel needs, and the full price for the requested work.",
    readTime: "4 min read",
    date: "Updated Nov 2026",
    category: "Automotive Security",
    cta: "Read the Full Locksmith vs. Dealership Comparison for Bronx Drivers",
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-zinc-950 text-white min-h-screen">
        
        {/* Page Hero */}
        <section className="bg-zinc-900 border-b border-zinc-800 py-16 lg:py-24" aria-label="Security blog index">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Security Insights</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold uppercase tracking-tight">
              Bronx Locksmith &amp; Security Blog
            </h1>
            <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Practical safety tips, local Bronx security guides, smart lock reviews, and business access control advice — written by working locksmith professionals for homeowners, renters, and property managers.
            </p>
          </div>
        </section>

        {/* Blog Post List */}
        <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Blog article list">
          <div className="space-y-12">
            {blogPosts.map((post, idx) => (
              <article 
                key={idx} 
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg space-y-4 hover:border-brand-yellow/30 transition shadow-xl"
              >
                <div className="flex items-center gap-4 text-xs font-sans text-zinc-500">
                  <span className="bg-brand-yellow/10 text-brand-yellow px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{post.readTime}</span>
                  </span>
                  <span>{post.date}</span>
                </div>

                <h2 className="text-2xl font-serif font-bold text-white hover:text-brand-yellow transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`} aria-label={`Read the full article: ${post.title}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-zinc-400 font-sans text-sm leading-relaxed">
                  {post.summary}
                </p>

                <div className="pt-2">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-brand-yellow hover:text-brand-yellow-hover font-bold font-sans text-xs uppercase tracking-widest group"
                    aria-label={`Read the full article: ${post.title}`}
                  >
                    <span>{post.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}


