import Image from "next/image";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Residential Door Unlock",
      tag: "Residential Door",
      image: "/images/service_residential.png",
      location: "Fordham, Bronx",
      date: "Dec 2026",
    },
    {
      title: "Smart Lock Assistance",
      tag: "Smart Lock",
      image: "/images/project_smart_lock.png",
      location: "Riverdale, Bronx",
      date: "Dec 2026",
    },
    {
      title: "Office Cabinet Lock Repair",
      tag: "Cabinet Lock",
      image: "/images/project_cabinet.png",
      location: "Mott Haven, Bronx",
      date: "Dec 2026",
    },
    {
      title: "Latest Unlock & Repair Jobs",
      tag: "Unlock & Repair",
      image: "/images/project_repair.png",
      location: "Pelham Bay, Bronx",
      date: "Dec 2026",
    },
    {
      title: "Gate Lock Opening",
      tag: "Gate Lock",
      image: "/images/service_gate.png",
      location: "Castle Hill, Bronx",
      date: "Dec 2026",
    },
    {
      title: "Emergency Night Lockout",
      tag: "Emergency Lockout",
      image: "/images/project_night.png",
      location: "Grand Concourse, Bronx",
      date: "Dec 2026",
    },
  ];

  return (
    <section id="projects" className="bg-zinc-950 text-white py-24 sm:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight uppercase">
            Our Recent <span className="text-brand-yellow">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-brand-yellow mx-auto rounded" aria-hidden="true" />
          <p className="text-zinc-400 font-sans text-lg">
            Real jobs, real solutions. Delivering peace of mind across Bronx neighborhoods.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden group hover:border-brand-yellow/40 transition-all duration-305 flex flex-col justify-between shadow-lg"
            >
              {/* Image Container with tag */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={proj.image}
                  alt={`${proj.title} - ${proj.tag} service completed at ${proj.location}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-zinc-950/90 text-brand-yellow text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded border border-zinc-850">
                  {proj.tag}
                </span>
              </div>

              {/* Text Container */}
              <div className="p-6 bg-zinc-900 space-y-3">
                <h3 className="text-lg font-serif font-bold text-white leading-snug group-hover:text-brand-yellow transition-colors">
                  {proj.title}
                </h3>
                
                {/* Location and Date details for local authority (EEAT) */}
                <div className="flex justify-between items-center text-xs text-zinc-500 font-sans border-t border-zinc-850 pt-3 mt-2">
                  <div className="flex items-center gap-1.5">
                    <span aria-hidden="true">📍</span>
                    <span>{proj.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span aria-hidden="true">📅</span>
                    <span>{proj.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
