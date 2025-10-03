import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Loader2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import { useCalendly } from "@/hooks/useCalendly";

export const Hero = () => {
  const { isLoaded, isLoading, openCalendly } = useCalendly();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCalendlyClick = () => {
    openCalendly('https://calendly.com/d/cn3g-p2f-g3q/elfreyzz-ltd-consultation');
  };

  return (
    <section id="home" className="pt-32 pb-16 min-h-[68vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              ELFREYZZ LTD — Building reliable infrastructure that lasts.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Access roads • Sewer lines • Piped water • Structural works • Engineering surveys. 
              End-to-end civil construction services tailored to developers, municipalities and large estate projects.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button 
                size="lg"
                onClick={handleCalendlyClick}
                disabled={isLoading}
                className="bg-gradient-primary hover:shadow-lift transition-smooth gap-2"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Phone className="h-5 w-5" />
                )}
                {isLoading ? "Loading..." : "Book a Free Consultation"}
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="gap-2 hover:bg-muted/50 transition-smooth"
              >
                Our Services
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button 
                size="lg"
                variant="ghost"
                onClick={() => scrollToSection("past")}
                className="gap-2"
              >
                See Past Projects
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Trusted by developers, municipalities and private clients across East Africa.
            </p>
          </div>

          <aside className="order-first lg:order-last">
            <div className="rounded-2xl bg-card p-4 shadow-soft">
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <img 
                  src={heroImage}
                  alt="ELFREYZZ construction site showing infrastructure development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="font-bold mb-1">Featured:</div>
                    <div className="text-sm">Turnkey access road & sewer project — 1200m</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
