import { useEffect, useRef } from "react";

const services = [
  {
    icon: "fa-road",
    title: "Access Roads",
    description: "Design and construction of paved & unpaved access roads, earthworks, drainage and surfacing.",
  },
  {
    icon: "fa-water",
    title: "Piped Water",
    description: "Potable water network design, mainlines, distribution networks and connection works.",
  },
  {
    icon: "fa-toilet-paper",
    title: "Sewer Lines",
    description: "Gravity sewers, manholes, pumping stations and full sanitation solutions.",
  },
  {
    icon: "fa-building",
    title: "Structures",
    description: "Foundations, retaining walls, reinforced concrete structures and structural repairs.",
  },
  {
    icon: "fa-ruler",
    title: "Engineering Survey",
    description: "Topographic surveys, setting out, and geotechnical coordination for accurate project delivery.",
  },
  {
    icon: "fa-helmet-safety",
    title: "Project Management",
    description: "End-to-end project oversight, quality control, and stakeholder communication.",
  },
  {
    icon: "fa-truck-ramp-box",
    title: "Materials Supply",
    description: "Supply of high-quality construction materials including aggregates, sand, and pre-cast concrete items.",
  },
  {
    icon: "fa-tractor",
    title: "Equipment Hire",
    description: "Flexible hire options for a wide range of heavy construction machinery and equipment.",
  },
];

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="reveal py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Services</h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl">
          Comprehensive civil infrastructure services delivered with technical excellence and robust project management.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-card rounded-xl p-4 sm:p-5 shadow-soft hover:shadow-lift transition-smooth hover:-translate-y-1.5 cursor-pointer focus-within:ring-2 focus-within:ring-primary/50"
              tabIndex={0}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start text-center sm:text-left">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-soft group-hover:shadow-glow transition-smooth">
                  <i className={`fa-solid ${service.icon} text-lg`} aria-hidden="true"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base mb-1 sm:mb-1.5">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
