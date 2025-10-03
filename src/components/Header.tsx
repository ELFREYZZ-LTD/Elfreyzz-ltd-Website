import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Calendar } from "lucide-react";

interface HeaderProps {
  onThemeToggle: () => void;
  isDark: boolean;
}

export const Header = ({ onThemeToggle, isDark }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "past", "estimation", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget('https://calendly.com/d/cn3g-p2f-g3q/elfreyzz-ltd-consultation');
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "past", label: "Past experiences" },
    { id: "estimation", label: "Cost estimation" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-glass border-b border-border/40 transition-smooth">
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between">
          {/* Brand */}
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
            aria-label="ELFREYZZ LTD Home"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-lift transition-smooth">
              <svg viewBox="0 0 64 64" className="w-7 h-7" aria-hidden="true">
                <path d="M14 44 L28 20 L34 34 L50 12" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-base leading-none">ELFREYZZ LTD</div>
              <div className="text-[11px] text-muted-foreground">Civil & Infrastructure Construction</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-smooth hover:bg-muted/50 hover:-translate-y-0.5 ${
                  activeSection === item.id ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="rounded-lg"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              onClick={openCalendly}
              className="hidden md:inline-flex bg-gradient-primary hover:shadow-lift transition-smooth gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book a Call
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full right-4 mt-2 w-64 bg-card rounded-xl shadow-lift border border-border p-3 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold text-left transition-smooth hover:bg-muted/50 ${
                  activeSection === item.id ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

declare global {
  interface Window {
    Calendly: any;
  }
}
