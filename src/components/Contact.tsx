import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Access roads",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
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
    // Initialize Calendly inline widget
    const initCalendly = () => {
      if (window.Calendly && document.getElementById("calendlyInline")) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/d/cn3g-p2f-g3q/elfreyzz-ltd-consultation",
          parentElement: document.getElementById("calendlyInline"),
          prefill: {},
          utm: {},
        });
      }
    };

    const timer = setTimeout(initCalendly, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in your name and email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you! We will get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Access roads",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="reveal py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3">Contact & Bookings</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Reach out or schedule a call directly via Calendly.
        </p>

        <div className="grid lg:grid-cols-[1fr_420px] gap-6">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-soft space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectTypeForm">Project type</Label>
              <Select value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                <SelectTrigger id="projectTypeForm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Access roads">Access roads</SelectItem>
                  <SelectItem value="Sewer lines">Sewer lines</SelectItem>
                  <SelectItem value="Piped water">Piped water</SelectItem>
                  <SelectItem value="Structures">Structures</SelectItem>
                  <SelectItem value="Engineering survey">Engineering survey</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message / Project details</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Brief project details"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="bg-gradient-primary">
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </form>

          {/* Calendly & Office Info */}
          <div className="space-y-4">
            <div className="bg-card rounded-xl p-5 shadow-soft">
              <div className="font-bold mb-2">Book a meeting</div>
              <p className="text-sm text-muted-foreground mb-4">
                Select a convenient time using our inline Calendly panel below.
              </p>

              <div id="calendlyInline" className="min-h-[480px] rounded-lg overflow-hidden"></div>

              <p className="text-xs text-muted-foreground mt-3">
                Or{" "}
                <a
                  href="https://calendly.com/d/cn3g-p2f-g3q/elfreyzz-ltd-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  open Calendly in a new tab
                </a>
                .
              </p>
            </div>

            <div className="bg-card rounded-xl p-5 shadow-soft">
              <div className="font-bold mb-2">Office</div>
              <p className="text-sm text-muted-foreground">
                Nairobi, Kenya<br />
                +254 700 000000<br />
                info@elfreyzz.co.ke
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
