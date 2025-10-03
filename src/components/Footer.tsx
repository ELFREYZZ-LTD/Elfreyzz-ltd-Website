export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {currentYear} ELFREYZZ LTD. All rights reserved.
          </div>
          <div>
            Designed for high-ticket infrastructure projects •{" "}
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
