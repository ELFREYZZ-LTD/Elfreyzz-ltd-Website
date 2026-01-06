export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="border-t border-border py-6 sm:py-8 mt-8 sm:mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          <div>
            © {currentYear} ELFREYZZ LTD. All rights reserved.
          </div>
          <div>
            <span className="hidden sm:inline">Designed for high-ticket infrastructure projects • </span>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary hover:underline"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
