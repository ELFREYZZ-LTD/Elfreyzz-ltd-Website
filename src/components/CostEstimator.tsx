import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const baseRates: Record<string, number> = {
  roads: 8000000,
  sewer: 7000000,
  water: 6000000,
  structures: 14000,
  survey: 80000,
};

export const CostEstimator = () => {
  const [projectType, setProjectType] = useState("roads");
  const [size, setSize] = useState([1]);
  const [complexity, setComplexity] = useState("1");
  const [price, setPrice] = useState(0);
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

  useEffect(() => {
    let finalPrice = 0;

    if (projectType === "survey") {
      finalPrice = baseRates.survey * parseFloat(complexity);
    } else if (projectType === "structures") {
      finalPrice = baseRates.structures * (size[0] * 100) * parseFloat(complexity);
    } else {
      finalPrice = baseRates[projectType] * size[0] * parseFloat(complexity);
    }

    setPrice(finalPrice);
  }, [projectType, size, complexity]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getSizeLabel = () => {
    if (projectType === "survey") return "Scale (N/A for surveys)";
    if (projectType === "structures") return `Area (x100 m²) - currently ${size[0] * 100} m²`;
    return `Length (km) - currently ${size[0]} km`;
  };

  return (
    <section id="estimation" ref={sectionRef} className="reveal py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Cost Estimation (Quick Calculator)</h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
          Use this interactive tool for a rough budget estimate. This is indicative only and not a formal quote.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 sm:gap-6">
          {/* Calculator Panel - Shows first on mobile */}
          <div className="bg-card rounded-xl p-5 sm:p-6 shadow-soft space-y-5 sm:space-y-6 order-first">
            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-sm sm:text-base">Project type</Label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger id="projectType" className="min-h-[44px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="roads">Access roads</SelectItem>
                  <SelectItem value="sewer">Sewer lines</SelectItem>
                  <SelectItem value="water">Piped water</SelectItem>
                  <SelectItem value="structures">Structures</SelectItem>
                  <SelectItem value="survey">Engineering survey</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="size" className="text-sm sm:text-base">{getSizeLabel()}</Label>
              <Slider
                id="size"
                min={0.1}
                max={5}
                step={0.1}
                value={size}
                onValueChange={setSize}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Small</span>
                <span>Large</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="complexity" className="text-sm sm:text-base">Complexity</Label>
              <Select value={complexity} onValueChange={setComplexity}>
                <SelectTrigger id="complexity" className="min-h-[44px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Low (Flat terrain, clear access)</SelectItem>
                  <SelectItem value="1.25">Medium (Uneven terrain, some obstacles)</SelectItem>
                  <SelectItem value="1.6">High (Rocky, urban area, high traffic)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-2">
                {new Intl.NumberFormat("en-KE", {
                  style: "currency",
                  currency: "KES",
                  minimumFractionDigits: 0,
                }).format(price)}
              </div>
              <p className="text-xs text-muted-foreground">
                Indicative only. Final price depends on site visit, design and material rates.
              </p>
            </div>
          </div>

          {/* Info Panel */}
          <div className="bg-card rounded-xl p-5 sm:p-6 shadow-soft space-y-4">
            <h3 className="font-bold text-lg sm:text-xl">How it works</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              We use base rates per project type multiplied by scale and complexity to provide a quick estimate.
            </p>

            <div className="bg-muted/30 rounded-lg p-3 sm:p-4 space-y-2">
              <strong className="text-sm">Base rates (sample):</strong>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Roads: KES 8M/km</li>
                <li>Sewer: KES 7M/km</li>
                <li>Water: KES 6M/km</li>
                <li>Structures: KES 14k/m²</li>
                <li>Survey: KES 80k base</li>
              </ul>
            </div>

            <Button onClick={scrollToContact} className="bg-gradient-primary w-full min-h-[44px]">
              Request Formal Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
