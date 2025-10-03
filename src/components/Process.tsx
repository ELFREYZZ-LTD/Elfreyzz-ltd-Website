import { useEffect, useRef } from "react";

const steps = [
  {
    num: "1",
    title: "Consultation",
    description: "We meet to understand scope, constraints and client priorities. Site visits & initial feasibility checks.",
  },
  {
    num: "2",
    title: "Design & Estimate",
    description: "Detailed proposals, drawings and transparent cost estimation delivered for approval.",
  },
  {
    num: "3",
    title: "Delivery & Handover",
    description: "On-time construction with quality control, testing and formal handover documentation.",
  },
];

export const Process = () => {
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
    <section id="about" ref={sectionRef} className="reveal py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3">Our Process — Simple, clear, deliverable</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
          A three-step engagement model that reduces risk and keeps projects on time.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <article
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center shadow-soft hover:shadow-lift transition-smooth focus-within:ring-2 focus-within:ring-primary/50"
              tabIndex={0}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                {step.num}
              </div>
              <h4 className="font-bold text-lg mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
