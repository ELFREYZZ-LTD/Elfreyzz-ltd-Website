import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Calendar, Loader2 } from "lucide-react";
import { useCalendly } from "@/hooks/useCalendly";
import logoAsset from "@/assets/elfreyzz-logo.svg.asset.json";

interface HeaderProps {
  onThemeToggle: () => void;
  isDark: boolean;
}

export const Header = ({ onThemeToggle, isDark }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isLoaded, isLoading, openCalendly } = useCalendly();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Update active section based on current route
    const path = location.pathname;
    if (path === "/") {
      setActiveSection("home");
    } else if (path === "/services") {
      setActiveSection("services");
    } else if (path === "/about") {
      setActiveSection("about");
    } else if (path === "/past-experiences") {
      setActiveSection("past");
    } else if (path === "/cost-estimation") {
      setActiveSection("estimation");
    } else if (path === "/contact") {
      setActiveSection("contact");
    }
  }, [location.pathname]);

  const navigateToPage = (path: string, section: string) => {
    navigate(path);
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  const handleCalendlyClick = () => {
    openCalendly('https://calendly.com/elfreyzzltd-info/30min');
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { path: "/", id: "home", label: "Home" },
    { path: "/services", id: "services", label: "Services" },
    { path: "/about", id: "about", label: "About" },
    { path: "/past-experiences", id: "past", label: "Past experiences" },
    { path: "/cost-estimation", id: "estimation", label: "Cost estimation" },
    { path: "/contact", id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-glass border-b border-border/40 transition-smooth">
      <div className="container mx-auto px-4">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Brand */}
          <button 
            onClick={() => navigateToPage("/", "home")}
            className="flex items-center gap-2 sm:gap-3 group"
            aria-label="ELFREYZZ LTD Home"
          >
            <div className="w-12 h-10 sm:w-14 sm:h-12 flex items-center justify-center shrink-0 transition-smooth group-hover:scale-105">
              <img
                src={logoAsset.url}
                alt="ELFREYZZ LTD logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base leading-none">ELFREYZZ LTD</div>
              <div className="text-[10px] sm:text-[11px] text-muted-foreground hidden xs:block">Civil & Infrastructure Construction</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToPage(item.path, item.id)}
                className={`px-2 xl:px-3 py-2 rounded-lg text-sm font-semibold transition-smooth hover:bg-muted/50 hover:-translate-y-0.5 ${
                  activeSection === item.id ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="rounded-lg h-9 w-9 sm:h-10 sm:w-10"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>

            <Button
              onClick={handleCalendlyClick}
              disabled={isLoading}
              className="hidden lg:inline-flex bg-gradient-primary hover:shadow-lift transition-smooth gap-2"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Calendar className="h-4 w-4" />
              )}
              {isLoading ? "Loading..." : "Book a Call"}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-lg h-9 w-9 sm:h-10 sm:w-10"
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
        <div className="lg:hidden absolute top-full inset-x-4 sm:left-auto sm:right-4 sm:w-72 mt-2 bg-card rounded-xl shadow-lift border border-border p-3 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToPage(item.path, item.id)}
                className={`px-3 py-3 sm:py-2 rounded-lg text-sm font-semibold text-left transition-smooth hover:bg-muted/50 min-h-[44px] flex items-center ${
                  activeSection === item.id ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Book a Call Button */}
            <Button
              onClick={handleCalendlyClick}
              disabled={isLoading}
              className="mt-2 w-full bg-gradient-primary hover:shadow-lift transition-smooth gap-2 min-h-[44px]"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Calendar className="h-4 w-4" />
              )}
              {isLoading ? "Loading..." : "Book a Call"}
            </Button>
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
