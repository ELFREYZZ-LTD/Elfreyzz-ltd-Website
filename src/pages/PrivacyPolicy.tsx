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
    title: "Why we are allowed to use your information",
    body: [
      "We handle your details in line with the Data Protection Act, 2019 of Kenya. We rely on the following lawful grounds (Section 30):",
      "• Steps you ask us to take before a contract: reviewing your enquiry, preparing a quote, and responding to you.",
      "• Our legitimate interests: keeping the website and contact form secure and free from spam and abuse.",
      "• Your consent: by submitting the form you agree to us processing your details for these purposes. You may withdraw consent at any time; this does not affect processing that took place before withdrawal.",
    ],
  },
  {
    title: "Is providing your details required?",
    body: [
      "Providing your details is voluntary. However, your name, email address, project type, and message are needed for us to review and reply to your enquiry. If you choose not to provide them, we will not be able to respond or prepare a quote. Your phone number is optional.",
    ],
  },
  {
    title: "How long we keep your information",
    body: [
      "We keep enquiry details only for as long as necessary to respond to you and follow up on your project, and no longer than 24 months after our last contact unless you become a client.",
      "Where an enquiry leads to a contract, related records may be kept for up to 7 years to meet legal, tax, and accounting obligations.",
      "When information is no longer needed, we delete or anonymise it. You can ask us to delete it sooner.",
    ],
  },
  {
    title: "Transfers outside Kenya",
    body: [
      "Our website, database, email delivery, and scheduling providers operate secure cloud servers that may be located outside Kenya.",
      "We only use providers that apply appropriate safeguards, including encryption of data in transit (HTTPS/TLS) and at rest, and strict access controls, as required by Sections 48–50 of the Act.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Under the Data Protection Act, 2019 you have the right to:",
      "• Be informed of how your personal data is used.",
      "• Access the personal data we hold about you.",
      "• Correct false, inaccurate, or misleading data.",
      "• Delete false, misleading, or no-longer-needed data.",
      "• Object to all or part of the processing of your data.",
      "• Ask us to restrict processing while a concern is resolved.",
      "• Receive your data in a structured, commonly used digital format (data portability).",
      "• Withdraw your consent at any time.",
      "To exercise any of these rights, contact us using the details below. We will respond without undue delay.",
    ],
  },
  {
    title: "Data breaches",
    body: [
      "If a security breach affecting your personal data occurs, we will notify the Office of the Data Protection Commissioner and, where there is a real risk of harm, inform you as required by Section 43 of the Act.",
    ],
  },
  {
    title: "Complaints",
    body: [
      "If you are unhappy with how we have handled your personal data, please contact us first so we can try to resolve it.",
      "You also have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC), Kenya — www.odpc.go.ke, info@odpc.go.ke.",
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
            This page explains how ELFREYZZ LTD collects, uses, and protects the details you share when you send us a project enquiry, in line with the Data Protection Act, 2019 of Kenya. ELFREYZZ LTD is the data controller for this information.
          </p>
          <p className="text-sm text-muted-foreground mb-10 -mt-6">Last updated: November 2026</p>

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
