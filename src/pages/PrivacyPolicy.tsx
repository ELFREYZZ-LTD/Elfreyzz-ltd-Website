import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const sections = [
  {
    title: "Information we collect",
    body: [
      "When you send an enquiry through our contact form, we collect the details you provide: your name, email address, phone number (optional), the type of project, and your message.",
      "To help protect the form from spam and misuse, we also record the IP address and browser information (user agent) sent with your submission.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use your enquiry details only to review your project, respond to you, and follow up about the services you asked about.",
      "Technical details such as IP address and browser information are used to detect and prevent abuse of the form.",
      "We do not sell your information or use it for unrelated marketing.",
    ],
  },
  {
    title: "How we protect your information",
    body: [
      "Every submission is checked before it is accepted, so incomplete or malformed details are rejected.",
      "Enquiries are stored in a secured database that is not publicly readable. Only ELFREYZZ LTD's own systems can save and access them.",
      "Access to enquiry details is limited to the people at ELFREYZZ LTD who need them to respond to you.",
    ],
  },
  {
    title: "Services we rely on",
    body: [
      "We use an email delivery service to notify our team when a new enquiry arrives.",
      "If you choose to book a consultation, scheduling is handled by Calendly, which processes the details you enter under its own privacy policy.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask us for a copy of the enquiry details we hold about you, ask us to correct them, or ask us to delete them.",
    ],
  },
];

const PrivacyPolicy = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("elfreyzz-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if ((savedTheme || (prefersDark ? "dark" : "light")) === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
    document.title = "Privacy Policy | ELFREYZZ LTD";
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    setIsDark(next);
    localStorage.setItem("elfreyzz-theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen">
      <Header onThemeToggle={toggleTheme} isDark={isDark} />
      <main id="main" tabIndex={-1} className="pt-28 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">Privacy</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">
            This page explains how ELFREYZZ LTD collects, uses, and protects the details you share when you send us a project enquiry.
          </p>

          <div className="space-y-8">
            {sections.map((s) => (
              <section key={s.title} className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold mb-3 text-primary">{s.title}</h2>
                <div className="space-y-3 text-muted-foreground">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">Contact us</h2>
              <p className="text-muted-foreground">
                For any privacy question or request, email{" "}
                <a href="mailto:eliud@elfreyzzltd.com" className="text-primary underline underline-offset-4">
                  eliud@elfreyzzltd.com
                </a>{" "}
                or use our <Link to="/contact" className="text-primary underline underline-offset-4">contact page</Link>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default PrivacyPolicy;
