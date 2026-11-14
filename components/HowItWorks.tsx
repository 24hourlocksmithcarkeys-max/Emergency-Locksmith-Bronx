import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, ClipboardCheck, BadgeDollarSign, DoorOpen, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "1. Call the dispatch line",
    body: "Tell us the address, the type of lock, and whether anyone is locked inside or at risk. Emergencies involving a child, a medical need, or a stove left on are prioritised.",
  },
  {
    icon: ClipboardCheck,
    title: "2. Confirm the details",
    body: "The dispatcher confirms the service address, the lock or vehicle details, and what proof of residency or ownership the technician will ask to see on arrival.",
  },
  {
    icon: BadgeDollarSign,
    title: "3. Agree the price first",
    body: "You are given the call-out fee, the labour, and any after-hours charge before anyone is sent. Work starts only after you accept the total.",
  },
  {
    icon: DoorOpen,
    title: "4. Entry, repair, or rekey",
    body: "The technician tries non-destructive entry first. If drilling or replacement is needed, it is explained and approved before any damage is caused.",
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
            No mystery pricing and no surprise drilling. Here is the whole process,
            from the first ring to the moment the door opens.
          </p>
        </div>

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
            <h3 className="font-serif font-bold text-xl text-brand-yellow">Have this ready before the technician arrives</h3>
            <p className="text-zinc-400 text-sm font-sans leading-relaxed">
              Photo ID, proof that you live at or own the property (a lease, deed, utility
              bill, or recent mail), and the make and model of the lock or vehicle. For a
              business, have someone who can authorise access on site. Verification protects
              you as much as it protects the property.
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
              <span>24/7 emergency service</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
