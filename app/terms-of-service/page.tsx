import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service governing the use of Emergency Locksmith Bronx locksmith services and website.",
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
          <p className="text-zinc-400">Last updated: July 2026</p>

          <div className="space-y-6 text-zinc-300">
            <p>
              Welcome to Emergency Locksmith Bronx. These terms and conditions outline the rules and regulations for the use of Emergency Locksmith Bronx's Website and Services, located at {siteConfig.contact.address}.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Services Rendered
            </h2>
            <p>
              Emergency Locksmith Bronx provides 24/7 mobile residential, commercial, automotive, and specialty locksmith services. Services are dispatched upon verbal or written consent. We make every effort to arrive within 15 to 30 minutes, though traffic and weather conditions may cause variances.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Upfront Estimates
            </h2>
            <p>
              We pride ourselves on transparent pricing. Our technicians provide upfront price quotes on-site before commencing any lock repairs or door bypasses. By approving the quote, you agree to pay the specified total upon completion of the service.
            </p>

            <h2 className="text-2xl font-serif font-bold text-white uppercase pt-4 border-b border-zinc-800 pb-2">
              Limitation of Liability
            </h2>
            <p>
              While our technicians are highly trained and utilize professional non-destructive entry methods, minor wear or marks may occasionally occur on damaged lock cylinders during bypass. Emergency Locksmith Bronx is not liable for pre-existing door frame damage.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}


