import { useEffect, useRef } from "react";

export const VideoSection = () => {
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
    <section id="video" ref={sectionRef} className="reveal py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3">Project Highlights</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Short overview video of our methodology and past projects.
        </p>

        <div className="relative rounded-2xl overflow-hidden shadow-soft bg-black aspect-video">
          <iframe
            loading="lazy"
            title="ELFREYZZ project highlights"
            src="https://www.youtube.com/embed/Scxs7L0hZqo?rel=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
