import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Clock, Scale, BadgeCheck, FileText, UserCheck, Drill, ArrowRight } from "lucide-react";

export function WeAreTheExperts() {
  return (
    <section className="py-24 sm:py-32 bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left side text list */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="text-amber-600 font-sans font-bold text-sm uppercase tracking-widest block">
                What You Can Expect
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
                Straight Answers Before We Touch the Lock
              </h2>
              <div className="h-1 w-20 bg-brand-yellow rounded" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-100 p-3.5 rounded-lg text-amber-600 border border-zinc-200 shrink-0">
                  <ShieldCheck className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">Licensed &amp; insured</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                    Our NYC DCWP locksmith license is reported active. The number is available
                    upon request and is not posted publicly. General liability coverage is reported up to $1 million.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-100 p-3.5 rounded-lg text-amber-600 border border-zinc-200 shrink-0">
                  <Clock className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">Owner-reported arrival history</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                    The owner reports an average arrival time of about 20 minutes over the
                    last 90 days, with most emergency calls at about 15–20 minutes. It is
                    an average, not a guarantee; call for the current estimate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-100 p-3.5 rounded-lg text-amber-600 border border-zinc-200 shrink-0">
                  <UserCheck className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">Verified technician backgrounds</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                    The owner reports that backgrounds of all technicians are verified. Ask the locksmith to explain the proposed method and any relevant risks before work begins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-100 p-3.5 rounded-lg text-amber-600 border border-zinc-200 shrink-0">
                  <Scale className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">Upfront price for agreed scope</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                    The price is confirmed upfront for the agreed scope. If the scope changes, the proposed work and any price change are discussed before additional work begins. There is no added charge solely because an address is elsewhere in the Bronx.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="lg:col-span-5 relative h-[500px] w-full rounded-lg overflow-hidden border border-zinc-200 shadow-2xl">
            <Image
              src="/images/worker_profile.webp"
              alt="Locksmith technician working on a door lock in the Bronx"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function GoldSupportBanner() {
  return (
    <section className="bg-brand-yellow text-zinc-950 py-16 text-center shadow-lg border-y border-brand-yellow-hover">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight max-w-4xl mx-auto">
          Locked Out in the Bronx? Get a Clear Price for the Agreed Scope.
        </h2>
        <p className="mt-4 font-sans text-base sm:text-lg font-medium max-w-2xl mx-auto">
          Call {siteConfig.contact.phoneDisplay} to confirm current availability, a non-guaranteed arrival estimate, and the price for the agreed scope.
        </p>
      </div>
    </section>
  );
}

const checks = [
  {
    icon: BadgeCheck,
    title: "Ask for the license number",
    body: "Emergency Locksmith Bronx has an active NYC DCWP locksmith license. Its number is available upon request and is intentionally not posted publicly. You can review NYC's licensing rules here.",
  },
  {
    icon: FileText,
    title: "Get the total before dispatch",
    body: "Ask what the price covers for the agreed work, whether any other charges apply, and how a change in scope would affect the price. Confirm the total before dispatch.",
  },
  {
    icon: UserCheck,
    title: "Confirm who is coming",
    body: "Confirm the business name and who will perform the work. If details differ from what you were told, pause and clarify before authorizing service.",
  },
  {
    icon: Drill,
    title: "Ask about the proposed method",
    body: "The appropriate method depends on the lock and situation. Ask what approach is proposed, whether damage is possible, and whether there are alternatives before agreeing to work.",
  },
];

export function LocksmithVerification() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-50 border-t border-zinc-200 text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="text-amber-600 font-sans font-bold text-sm uppercase tracking-widest block">
            Consumer Protection
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase leading-tight">
            Before You Let a Locksmith In
          </h2>
          <div className="h-1 w-20 bg-brand-yellow rounded" aria-hidden="true" />
          <p className="text-zinc-600 font-sans text-lg leading-relaxed">
            A few simple questions can help you understand the service and price before authorizing work. These checks apply to any provider, including this one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {checks.map((check) => {
            const Icon = check.icon;
            return (
              <div key={check.title} className="bg-white border border-zinc-200 rounded-lg p-7 space-y-3 shadow-sm">
                <div className="bg-amber-50 border border-amber-200 text-amber-600 p-3 rounded-full w-fit">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif font-bold text-xl">{check.title}</h3>
                <p className="text-zinc-600 text-sm font-sans leading-relaxed">{check.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
          <a
            href={siteConfig.licensing.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-zinc-300 hover:border-brand-yellow bg-white text-zinc-900 font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors"
          >
            <ShieldCheck className="h-4 w-4 text-amber-600" aria-hidden="true" />
            <span>NYC DCWP locksmith licensing rules</span>
          </a>
          <Link
            href="/blog/avoid-locksmith-scams-bronx-guide"
            className="inline-flex items-center gap-2 text-zinc-900 hover:text-amber-600 font-sans font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Read the full Bronx locksmith scam guide</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
