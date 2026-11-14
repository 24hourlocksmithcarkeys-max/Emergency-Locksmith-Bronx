import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Clock, Heart, Scale, BadgeCheck, FileText, UserCheck, Drill, ArrowRight } from "lucide-react";

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
                    Ask for the DCWP license number when you call, and check it on the
                    city&apos;s website before work begins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-100 p-3.5 rounded-lg text-amber-600 border border-zinc-200 shrink-0">
                  <Clock className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">A real arrival window</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                    Dispatch tells you the next available window before you commit — not a
                    promise that ignores traffic or current calls.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-100 p-3.5 rounded-lg text-amber-600 border border-zinc-200 shrink-0">
                  <Heart className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">Damage-free first</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                    Picking and bypass are tried before drilling. If drilling is the only
                    option, you approve it first.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-100 p-3.5 rounded-lg text-amber-600 border border-zinc-200 shrink-0">
                  <Scale className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1">One total, in advance</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                    Call-out, labour, and after-hours charges are added up before the
                    technician starts. No additions after the door is open.
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
          Locked Out in the Bronx? One Call, One Clear Price.
        </h2>
        <p className="mt-4 font-sans text-base sm:text-lg font-medium max-w-2xl mx-auto">
          Call {siteConfig.contact.phoneDisplay} and a dispatcher will confirm the next
          available arrival window before you decide.
        </p>
      </div>
    </section>
  );
}

const checks = [
  {
    icon: BadgeCheck,
    title: "Ask for the license number",
    body: "New York City requires locksmiths to hold a DCWP license. Ask for the number on the phone and verify it before anyone arrives.",
  },
  {
    icon: FileText,
    title: "Get the total before dispatch",
    body: "Ask for the call-out fee, the labour, and any night or weekend charge. A price that only appears once the door is open is the classic bait-and-switch.",
  },
  {
    icon: UserCheck,
    title: "Confirm who is coming",
    body: "Get the company name and the technician's name. The van, the ID, and the invoice should all match the business you called.",
  },
  {
    icon: Drill,
    title: "Approve any drilling first",
    body: "Most locks can be picked or bypassed. If a technician reaches for a drill without explaining why and getting your agreement, stop the job.",
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
            Locksmith fraud relies on urgency. These four checks take about a minute and
            apply to any company in the Bronx — including this one.
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
