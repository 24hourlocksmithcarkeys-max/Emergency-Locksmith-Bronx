import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, ClipboardCheck, BadgeDollarSign, DoorOpen, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "1. Speak with a locksmith",
    body: "A real locksmith answers. Share the address, lock or vehicle details, and what is happening so the locksmith can ask the right questions and prepare the technician with the tools and parts needed for the job.",
  },
  {
    icon: ClipboardCheck,
    title: "2. Confirm the details",
    body: "The locksmith confirms the address and service details, checks availability, and gives you the current estimated arrival time. There is no extra charge based solely on which Bronx address you provide.",
  },
  {
    icon: BadgeDollarSign,
    title: "3. Agree the price first",
    body: "You receive the full price for the agreed scope before dispatch. If the scope or price needs to change after inspection, the change is explained and approved before additional work.",
  },
  {
    icon: DoorOpen,
    title: "4. Review the proposed work",
    body: "The proposed method and any risks depend on the lock and condition. Ask what approach is proposed and what the agreed price covers before authorizing work. If the scope changes, discuss any price change before additional work begins.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-zinc-950 text-white py-24 sm:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase">
            What Happens When <span className="text-brand-yellow">You Call</span>
          </h2>
          <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
          <p className="text-zinc-400 font-sans text-lg">
            A real locksmith answers, confirms the details and price, then prepares the
            mobile technician for the job.
          </p>
        </div>

        <p className="mb-8 text-center text-zinc-400 text-sm font-sans">
        {siteConfig.arrival.disclosure} Hours: {siteConfig.hours.display}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-7 space-y-4 hover:border-brand-yellow/40 transition-colors"
              >
                <div className="bg-brand-yellow/10 border border-brand-yellow/25 text-brand-yellow p-3 rounded-full w-fit">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif font-bold text-lg leading-snug">{step.title}</h3>
                <p className="text-zinc-400 text-sm font-sans leading-relaxed">{step.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-zinc-900/60 border border-zinc-800 rounded-lg p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <h3 className="font-serif font-bold text-xl text-brand-yellow">Before you call</h3>
            <p className="text-zinc-400 text-sm font-sans leading-relaxed">
              Have the service address and any details you know about the lock or vehicle ready. For property or vehicle service, ask whether specific information or authorization is relevant to your situation. For a business, explain who will be present and authorized to request service.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-6 py-3.5 rounded transition-all whitespace-nowrap text-sm"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call {siteConfig.contact.phoneDisplay}</span>
            </a>
            <Link
              href="/24-hour-emergency-locksmith-bronx"
              className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-brand-yellow text-zinc-300 hover:text-brand-yellow font-sans font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-all whitespace-nowrap"
            >
              <span>Emergency service · Fri–Sun 24 hours</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
