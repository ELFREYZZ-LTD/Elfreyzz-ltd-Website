import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Services as ServicesSection } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Services = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("elfreyzz-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    setIsDark(!isDark);
    localStorage.setItem("elfreyzz-theme", newTheme);
  };

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg">
        Skip to content
      </a>
      
      <Header onThemeToggle={toggleTheme} isDark={isDark} />
      
      <main id="main" tabIndex={-1}>
        <div className="pt-20">
          <ServicesSection />
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Services;
