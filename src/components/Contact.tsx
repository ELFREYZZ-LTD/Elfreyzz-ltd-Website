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
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, {
      threshold: 0.1
    });
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
          url: "https://calendly.com/elfreyzzltd-info/30min",
          parentElement: document.getElementById("calendlyInline"),
          prefill: {},
          utm: {}
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
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you! We will get back to you shortly."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Access roads",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return <section id="contact" ref={sectionRef} className="reveal py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Contact & Bookings</h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
          Reach out or schedule a call directly via Calendly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-4 sm:gap-6">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-5 sm:p-6 shadow-soft space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm sm:text-base">Full name</Label>
              <Input id="name" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} required className="min-h-[44px] text-base" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} required className="min-h-[44px] text-base" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm sm:text-base">Phone</Label>
              <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({
              ...formData,
              phone: e.target.value
            })} className="min-h-[44px] text-base" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectTypeForm" className="text-sm sm:text-base">Project type</Label>
              <Select value={formData.projectType} onValueChange={value => setFormData({
              ...formData,
              projectType: value
            })}>
                <SelectTrigger id="projectTypeForm" className="min-h-[44px]">
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
              <Label htmlFor="message" className="text-sm sm:text-base">Message / Project details</Label>
              <Textarea id="message" rows={4} placeholder="Brief project details" value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} className="text-base resize-none" />
            </div>

            <Button type="submit" disabled={isSubmitting} className="bg-gradient-primary w-full sm:w-auto min-h-[44px]">
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </form>

          {/* Calendly & Office Info */}
          <div className="space-y-4">
            <div className="bg-card rounded-xl p-4 sm:p-5 shadow-soft">
              <div className="font-bold text-base sm:text-lg mb-2">Book a meeting</div>
              <p className="text-sm text-muted-foreground mb-4">
                Select a convenient time using our inline Calendly panel below.
              </p>

              <div id="calendlyInline" className="min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] rounded-lg overflow-hidden"></div>

              <p className="text-xs text-muted-foreground mt-3">
                Or{" "}
                <a href="https://calendly.com/elfreyzzltd-info/30min" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  open Calendly in a new tab
                </a>
                .
              </p>
            </div>

            <div className="bg-card rounded-xl p-4 sm:p-5 shadow-soft">
              <div className="font-bold text-base sm:text-lg mb-2">Office</div>
              <p className="text-sm text-muted-foreground">​NAIROBI, KENYA<br />
                ​Tel +254 714-544-535    





 <br />
                P.O Box 36967-00200     
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};