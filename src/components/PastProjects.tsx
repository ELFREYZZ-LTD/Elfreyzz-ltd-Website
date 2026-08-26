import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const pastProjects = [
  {
    title: "Nairobi Estate Access Road",
    description: "2.5km paved access road with drainage and landscape rehabilitation",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
  {
    title: "Municipal Water Distribution Network",
    description: "15km piped water distribution network serving 5000+ households",
    status: "Completed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
  },
  {
    title: "Integrated Sewer & Storm Drain System",
    description: "3.2km gravity sewer with 4 pumping stations and retention ponds",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
  },
];

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

export const PastProjects = () => {
  const navigate = useNavigate();
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
    <section ref={sectionRef} className="reveal py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Recent Projects</h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl">
          A selection of successfully completed civil infrastructure projects that demonstrate our expertise and commitment to quality.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {pastProjects.map((project, index) => (
            <article
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-lift transition-smooth hover:-translate-y-1.5 cursor-pointer"
              tabIndex={0}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-base mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <span className="text-xs font-semibold text-primary">{project.status}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <Button
          onClick={() => navigate("/past-experiences")}
          size="lg"
          className="bg-gradient-primary hover:shadow-lift transition-smooth gap-2"
        >
          View All Projects & Testimonials
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Testimonials Preview */}
      <div className="container mx-auto px-4 mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-border/40">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">What Our Clients Say</h3>
        <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
          Feedback from satisfied clients who trust us with their critical infrastructure projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-card rounded-xl p-5 sm:p-6 shadow-soft hover:shadow-lift transition-smooth focus-within:ring-2 focus-within:ring-primary/50"
              tabIndex={0}
            >
              <blockquote className="text-muted-foreground italic text-sm sm:text-base mb-4 leading-relaxed">
                \"{testimonial.quote}\"
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
