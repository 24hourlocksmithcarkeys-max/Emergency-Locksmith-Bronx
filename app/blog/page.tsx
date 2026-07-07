import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Clock } from "lucide-react";

export const metadata = {
  title: "Bronx Locksmith Security Blog",
  description: "Expert locksmith tips, local Bronx security guides, smart lock reviews, and business access control advice for Bronx residents, renters, and property ma...",,
};

const blogPosts = [
  {
    slug: "bronx-apartment-lockout-night-guide",
    title: "Locked Out of Your Bronx Apartment at Night? Here Is What to Do",
    summary: "Standing outside your door at 2 AM is stressful. Learn the immediate safety steps, how to identify a reliable local locksmith, avoid scams, and get back inside with zero door damage.",
    readTime: "8 min read",
    date: "Dec 2026",
    category: "Emergency Guidance",
    cta: "Read the Night Lockout Safety Guide for Bronx Residents",
  },
  {
    slug: "best-smart-locks-bronx-pre-war-apartments",
    title: "The Best Smart Locks for Bronx Pre-War Apartment Buildings",
    summary: "Pre-war Bronx doors are thick, mortise-locked, and non-standard. This guide covers which smart lock models are compatible, what lease terms allow, and how professional installation differs from DIY.",
    readTime: "9 min read",
    date: "Dec 2026",
    category: "Smart Home",
    cta: "Read the Smart Lock Guide for Pre-War Bronx Apartments",
  },
  {
    slug: "avoid-locksmith-scams-bronx-guide",
    title: "How to Avoid Locksmith Scams in the Bronx: A Complete Resident's Guide",
    summary: "Bait-and-switch locksmith scams are common in the Bronx. Learn how to verify DCA licenses, identify fake listings, demand upfront quotes, and report fraud to city agencies.",
    readTime: "9 min read",
    date: "Dec 2026",
    category: "Consumer Guide",
    cta: "Read the Full Locksmith Scam Prevention Guide for Bronx Residents",
  },
  {
    slug: "bronx-business-guide-master-key-systems",
    title: "Protecting Your Bronx Business: A Complete Guide to Master Key Systems",
    summary: "Master key systems eliminate key chaos, reduce rekeying costs, and give Bronx businesses tiered access control. This guide explains the engineering, design process, and long-term management.",
    readTime: "9 min read",
    date: "Dec 2026",
    category: "Commercial Security",
    cta: "Read the Master Key System Guide for Bronx Business Owners",
  },
  {
    slug: "lost-car-keys-bronx-locksmith-vs-dealer",
    title: "Lost Your Car Keys in the Bronx? Mobile Locksmith vs. Dealership Compared",
    summary: "Dealerships require towing, scheduling, and charge more. Mobile locksmiths cut and program transponder keys on-site in under an hour. A full cost and process comparison for every Bronx driver.",
    readTime: "9 min read",
    date: "Dec 2026",
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

