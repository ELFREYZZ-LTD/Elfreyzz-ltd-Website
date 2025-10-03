import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "ELFREYZZ delivered our access road project on time and under estimate. Their team were highly professional throughout.",
    name: "Jane Mwangi",
    role: "Project Manager — Acme Developments",
    avatar: "https://i.pravatar.cc/40?u=jane",
  },
  {
    quote: "Reliable, technically strong and excellent site management. We recommend them for large civil works.",
    name: "Eng. Peter Otieno",
    role: "Municipal Infrastructure",
    avatar: "https://i.pravatar.cc/40?u=peter",
  },
  {
    quote: "Their survey data was accurate and foundational to our planning approvals. A very thorough team.",
    name: "Samuel Kimani",
    role: "Lead Architect — UrbanScape Planners",
    avatar: "https://i.pravatar.cc/40?u=samuel",
  },
];

export const Testimonials = () => {
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
    <section id="past" ref={sectionRef} className="reveal py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3">Past Experiences & Testimonials</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Work samples and feedback from clients who trust us to deliver.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lift transition-smooth focus-within:ring-2 focus-within:ring-primary/50"
              tabIndex={0}
            >
              <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} profile`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
