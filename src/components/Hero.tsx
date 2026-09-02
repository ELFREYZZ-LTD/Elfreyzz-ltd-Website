import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Loader2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import { useCalendly } from "@/hooks/useCalendly";

export const Hero = () => {
  const { isLoaded, isLoading, openCalendly } = useCalendly();
  const navigate = useNavigate();

  const handleCalendlyClick = () => {
    openCalendly('https://calendly.com/elfreyzzltd-info/30min');
  };

  return (
    <section id="home" className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 min-h-[60vh] sm:min-h-[68vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              ELFREYZZ LTD
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-orange mt-1">
                Built By You.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Access roads • Sewer lines • Piped water • Structural works • Engineering surveys. 
              End-to-end civil construction services tailored to developers, municipalities and large estate projects.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Button 
                size="lg"
                onClick={handleCalendlyClick}
                disabled={isLoading}
                className="w-full sm:w-auto bg-gradient-primary hover:shadow-lift transition-smooth gap-2 min-h-[48px]"
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
                onClick={() => navigate("/services")}
                className="w-full sm:w-auto gap-2 hover:bg-muted/50 transition-smooth min-h-[48px]"
              >
                Our Services
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button 
                size="lg"
                variant="ghost"
                onClick={() => navigate("/past-experiences")}
                className="w-full sm:w-auto gap-2 min-h-[48px]"
              >
                See Past Projects
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground">
              Trusted by developers, municipalities and private clients across East Africa.
            </p>
          </div>

          <aside className="order-first lg:order-last">
            <div className="rounded-xl sm:rounded-2xl bg-card p-3 sm:p-4 shadow-soft">
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-video">
                <img 
                  src={heroImage}
                  alt="ELFREYZZ construction site showing infrastructure development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent flex items-end p-4 sm:p-6">
                  <div className="text-brand-white">
                    <div className="font-bold text-sm sm:text-base mb-1">Featured:</div>
                    <div className="text-xs sm:text-sm">Turnkey access road & sewer project — 1200m</div>
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
