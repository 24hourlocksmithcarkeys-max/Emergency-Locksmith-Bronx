import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, MapPin, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Areas Served in the Bronx | 24/7 Mobile Locksmith — All 36+ Neighborhoods",
  description: "Emergency Locksmith Bronx covers every neighborhood in the borough — from Wakefield to Mott Haven, City Island to Riverdale. 15–30 min response, 24/7 dispatch. Call now.",
};

export default function AreasServedPage() {

  const regions = [
    {
      name: "East Bronx",
      color: "border-brand-yellow",
      areas: ["Castle Hill", "Parkchester", "Pelham Bay", "Throggs Neck", "Clason Point", "Soundview", "Country Club"],
      desc: "The East Bronx corridor — from Soundview's dense residential blocks to the waterfront peninsula of Throggs Neck — is one of the most geographically varied service zones in the borough. Parkchester's massive apartment complex generates consistent lockout and rekeying calls, while Pelham Bay's mix of private homes and apartment buildings requires both residential door and automotive locksmith expertise."
    },
    {
      name: "South Bronx",
      color: "border-red-500",
      areas: ["Mott Haven", "Melrose", "Port Morris", "Hunts Point", "Morrisania", "Concourse", "Longwood"],
      desc: "The South Bronx is the borough's most commercially active zone, with a growing residential population alongside established industrial and commercial districts in Hunts Point and Port Morris. Commercial locksmith calls — office lockouts, master key installs, and panic bar compliance work — are highest in this region. The Grand Concourse district's pre-war residential buildings generate the most apartment lockout and rekeying requests."
    },
    {
      name: "West Bronx",
      color: "border-blue-500",
      areas: ["Riverdale", "Kingsbridge", "Highbridge", "Morris Heights", "University Heights", "Spuyten Duyvil", "Marble Hill"],
      desc: "The West Bronx ranges from the upscale residential enclave of Riverdale — with its mix of private homes, co-ops, and luxury apartment buildings — to the dense student-population neighborhoods around University Heights. Smart lock installation requests are most common in Riverdale's newer buildings, while Morris Heights and Highbridge's older apartment stock generates high demand for mortise lock service and rekeying."
    },
    {
      name: "Central Bronx",
      color: "border-green-500",
      areas: ["Fordham", "Belmont (Arthur Ave)", "Tremont", "West Farms", "Crotona Park", "Mount Hope"],
      desc: "Central Bronx is the geographic heart of the borough and the area with the highest call volume for emergency locksmith services. Fordham Road is one of the busiest commercial strips in the Bronx, generating frequent retail and restaurant lockout calls. The Belmont neighborhood's mix of longtime homeowners and longtime tenants creates steady demand for rekeying, lock upgrades, and home lockout resolution."
    },
    {
      name: "North Bronx",
      color: "border-purple-500",
      areas: ["Woodlawn", "Wakefield", "Williamsbridge", "Baychester", "Eastchester", "Co-op City", "Norwood", "Bedford Park"],
      desc: "The North Bronx is characterized by a mix of single-family homes in Woodlawn, Wakefield, and Eastchester alongside the massive Co-op City complex — one of the largest cooperative housing developments in the world. Co-op City's 15,000+ units generate a high volume of apartment lockout and mailbox lock replacement calls. The single-family neighborhoods of the far North Bronx generate home lockout, rekeying, and smart lock installation requests."
    },
  ];

  const contentSections = [
    {
      heading: "Why Local Bronx Staging Is What Makes Our Response Time Possible",
      paragraphs: [
        "A 15 to 30-minute emergency response time is not achievable from a single fixed location in a borough that spans 42 square miles. It is only achievable through a mobile staging strategy that positions service vehicles at multiple points throughout the borough at all times. Our fleet is not parked at a central garage waiting for calls — technicians are actively positioned in coverage zones across the Bronx, reducing the travel distance to any given emergency to a manageable range.",
        "During high-demand periods — late evenings, weekend nights, major events at Yankee Stadium, holiday weekends — additional units are deployed to ensure that the response time commitment can be maintained even when simultaneous calls are received from different parts of the borough. Dispatch uses real-time positioning data to route the nearest available technician to each incoming call rather than maintaining a static rotation.",
        "Weather conditions that affect Bronx road travel — snow, ice, heavy rain — are monitored continuously, and estimated arrival times are adjusted when conditions will materially affect transit time. Customers are given updated ETAs proactively so that waiting arrangements can be made accordingly. If a weather delay is significant enough to affect safety, alternative guidance is provided to help the customer make the safest decision while waiting."
      ]
    },
    {
      heading: "Coverage Across Bronx Housing Types — Pre-War to Smart-Lock-Ready",
      paragraphs: [
        "No two Bronx neighborhoods have the same housing stock, and no two housing stocks have the same lock configuration challenges. The Grand Concourse corridor's pre-war art deco buildings — listed on the National Register of Historic Places — feature thick solid-wood doors with embedded mortise lock bodies that require long-shaft cylinder tools and vintage-compatible hardware for rekeying and replacement. These buildings represent one of the most specialized residential lock service environments in the borough.",
        "The post-war Mitchell-Lama and public housing developments concentrated in Co-op City, Soundview, and parts of the South Bronx use heavy commercial-grade deadbolts in building-wide master key systems managed by housing authorities. Individual tenant cylinder replacements in these buildings require coordination with building management for master key compatibility, a process our team navigates regularly across all major Bronx housing authority properties.",
        "Newer market-rate residential developments in the South Bronx, Mott Haven, and near-waterfront areas increasingly feature pre-installed smart lock infrastructure, keyless entry lobbies, and Bluetooth-enabled apartment access systems. Servicing these systems requires electronic diagnostic tools alongside traditional mechanical locksmith equipment — a capability that our technicians maintain current training in as building technology continues to evolve."
      ]
    },
    {
      heading: "Commercial Coverage — Retail, Restaurant, Office, and Industrial Sectors",
      paragraphs: [
        "Commercial locksmith coverage across the Bronx addresses the borough's diverse business landscape. Fordham Road's retail corridor — one of the highest-volume retail strips in New York City — generates frequent commercial lockout calls from store managers unable to open for the day. The restaurant clusters along Arthur Avenue in Belmont and the food court strips near Co-op City require both standard commercial lockout service and panic bar compliance verification.",
        "Hunts Point's produce market and Port Morris's industrial blocks house distribution facilities, cold storage operations, and light manufacturing units that require high-security mortise locks, padlocks on shipping gates, and master key systems covering multiple access zones within a single facility. These commercial environments often require Grade 1 hardware specified for high-use industrial conditions rather than the lighter-duty commercial hardware appropriate for office environments.",
        "Medical offices and pharmacies throughout the Bronx have specialized access control requirements including DEA-compliant controlled substance storage security and patient record access restrictions that must be documented and maintained. Our commercial team is familiar with the specific hardware and access documentation requirements for healthcare commercial environments and provides compliant solutions for these clients."
      ]
    },
    {
      heading: "City Island and the Bronx Waterfront — No Location Is Out of Range",
      paragraphs: [
        "City Island — the nautical community off Pelham Bay Park in the far eastern Bronx — is a neighborhood that many Bronx service providers decline to cover, citing its geographic isolation from the mainland street grid. Emergency Locksmith Bronx covers City Island without any distance premium or service exclusion. Residents and the island's restaurants and marine businesses receive the same response commitment as any other Bronx address.",
        "The Bronx's waterfront communities along the Hudson — Spuyten Duyvil, Marble Hill, and the western banks of Riverdale — present their own navigation considerations due to limited road access from certain directions. Technicians serving this corridor are familiar with the most efficient routing from the nearest staging position and maintain local knowledge of the streets and access points that affect response time in this part of the borough.",
        "No Bronx address is treated as secondary, out-of-range, or subject to additional fees based purely on location. The service rate communicated at the time of dispatch is the rate charged regardless of the neighborhood, and all communities in the borough receive the same quality of service and the same professional conduct from the technicians who arrive."
      ]
    },
  ];

  const faqs = [
    {
      q: "Do you charge extra for neighborhoods that are farther from the center of the Bronx?",
      a: "No. Every Bronx neighborhood is served at the same rate with no distance premium. Whether the service address is on Fordham Road in the Central Bronx or on City Island in the far eastern tip of the borough, the rate communicated at the time of dispatch is the rate charged at completion. No geographic surcharge is applied."
    },
    {
      q: "Is the 15 to 30-minute response time guaranteed for all neighborhoods?",
      a: "The 15 to 30-minute response is the average target maintained across the Bronx through our mobile staging strategy. Remote areas of the North Bronx, City Island, and far Riverdale may occasionally be at the upper end of this range or slightly beyond it under normal conditions. During major weather events or simultaneous high-demand periods, an updated ETA is provided. The commitment is to be as fast as possible for every location, not to a specific minute guarantee."
    },
    {
      q: "Are you available for service calls in Marble Hill?",
      a: "Yes. Marble Hill is geographically connected to the Bronx and served as part of our standard coverage area with no additional charges. The neighborhood is reached from multiple approach routes and receives the same response priority as any other Bronx neighborhood."
    },
    {
      q: "Do you serve large apartment complexes like Co-op City?",
      a: "Yes. Co-op City and other large cooperative housing developments are served regularly. Apartment lockouts, mailbox cylinder replacements, and rekeying in multi-unit buildings are all handled with coordination for building management requirements where applicable. The technician confirms any building-specific access procedures during the dispatch call."
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-zinc-950 text-white min-h-screen">

        {/* Hero */}
        <section className="bg-zinc-900 border-b border-zinc-800 py-16 lg:py-24" aria-label="Areas served page header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-widest block">Full Bronx Coverage</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold uppercase tracking-tight">
              Bronx Neighborhoods We Serve
            </h1>
            <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Every one of the Bronx's 36+ neighborhoods is covered by our 24/7 mobile locksmith fleet. From the southernmost blocks of Mott Haven to the northernmost streets of Wakefield — no address is out of range, and no distance premium is ever charged.
            </p>
          </div>
        </section>

        {/* Neighborhood grid + booking form */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Bronx neighborhood coverage map">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-serif font-bold uppercase">All Bronx Regions Covered 24/7</h2>
                <div className="h-1 w-20 bg-brand-yellow rounded" aria-hidden="true" />
                <p className="text-zinc-400 font-sans text-sm leading-relaxed">
                  Mobile units are staged at strategic positions across the borough — dispatched from the nearest point to your location for the fastest possible response. Central base at <strong className="text-zinc-200">{siteConfig.contact.address}</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {regions.map((region, idx) => (
                  <div key={idx} className={`border-l-4 ${region.color} bg-zinc-900/40 border border-zinc-800 p-6 rounded-lg space-y-4`}>
                    <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-brand-yellow shrink-0" aria-hidden="true" />
                      <span>{region.name}</span>
                    </h3>
                    <p className="text-zinc-500 font-sans text-xs leading-relaxed">{region.desc}</p>
                    <ul className="grid grid-cols-2 gap-1.5 text-zinc-400 font-sans text-xs pt-1">
                      {region.areas.map((area, aidx) => (
                        <li key={aidx} className="flex items-center gap-1.5">
                          <CheckCircle className="h-3 w-3 text-brand-yellow shrink-0" aria-hidden="true" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center sticky top-8">
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Deep Content */}
        <section className="bg-zinc-900/40 border-y border-zinc-900 py-20" aria-label="Coverage and capability details">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <h2 className="text-2xl font-serif font-bold text-white uppercase border-l-4 border-brand-yellow pl-4">
                    Coverage — Frequently Asked Questions
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

              <aside className="lg:col-span-4 space-y-8 sticky top-8" aria-label="Emergency contact">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
                  <h3 className="font-serif font-bold text-brand-yellow text-sm uppercase tracking-wider">Need Help Right Now?</h3>
                  <p className="text-zinc-400 text-xs font-sans">Our Bronx dispatcher answers immediately — 24 hours a day, every day of the year.</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold px-5 py-3 rounded transition-all whitespace-nowrap text-sm w-full justify-center"
                    aria-label={`Call our 24/7 emergency locksmith line at ${siteConfig.contact.phoneDisplay}`}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>Call {siteConfig.contact.phoneDisplay}</span>
                  </a>
                  <Link
                    href="/24-hour-emergency-locksmith-bronx"
                    className="inline-flex items-center gap-2 border border-zinc-700 hover:border-brand-yellow text-zinc-300 hover:text-brand-yellow font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded transition-all w-full justify-center"
                    aria-label="Go to the 24/7 emergency locksmith hub for all emergency services"
                  >
                    <span>View 24/7 Emergency Locksmith Hub</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
