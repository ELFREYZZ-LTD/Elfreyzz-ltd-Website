import { useNavigate } from "react-router-dom";
import { Twitter, Facebook, Youtube, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const socialLinks = [
    {
      icon: Twitter,
      label: "Twitter (X)",
      url: "https://x.com/elfreyzzltd",
      ariaLabel: "Visit ELFREYZZ LTD on Twitter",
    },
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://web.facebook.com/elfreyzzltd.elfreyzzltd.9/",
      ariaLabel: "Visit ELFREYZZ LTD on Facebook",
    },
    {
      icon: Youtube,
      label: "YouTube",
      url: "https://www.youtube.com/@ELFREYZZLTD",
      ariaLabel: "Visit ELFREYZZ LTD on YouTube",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/elfreyzzltd?igsh=MXc3NXFsOWI5NHFvMg==",
      ariaLabel: "Visit ELFREYZZ LTD on Instagram",
    },
  ];

  return (
    <footer className="border-t border-border py-8 sm:py-12 mt-8 sm:mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">

          {/* Brand Info / Logo */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate("/")}
              aria-label="Go to ELFREYZZ LTD home page"
              className="flex items-center w-fit text-left hover:opacity-80 transition-opacity"
            >
              <span className="font-bold text-base">
                ELFREYZZ LTD
              </span>
            </button>

            <p className="text-xs sm:text-sm text-muted-foreground">
              Civil & Infrastructure Construction Services
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Quick Links</h4>

            <nav className="flex flex-col gap-2">
              <button
                onClick={() => navigate("/")}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>

              <button
                onClick={() => navigate("/about")}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About
              </button>

              <button
                onClick={() => navigate("/services")}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </button>

              <button
                onClick={() => navigate("/past-experiences")}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Past Experiences
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact Us
              </button>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Follow Us</h4>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    title={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            
            <div>
              © {currentYear} ELFREYZZ LTD. All rights reserved.
            </div>

            <div>
              <span className="hidden sm:inline">
                Designed for high-ticket infrastructure projects •{" "}
              </span>

              <button
                onClick={() => navigate("/contact")}
                className="text-primary hover:underline"
              >
                Get in touch
              </button>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};
