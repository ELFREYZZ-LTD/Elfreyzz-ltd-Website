import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Services = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("elfreyzz-theme");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme =
      savedTheme || (prefersDark ? "dark" : "light");

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
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

  /*
   * SERVICES
   *
   * These are the only services displayed on this page.
   * They correspond directly with the services shown
   * on the provided design.
   */
  const services = [
    {
      number: "01",
      title: "Access Roads",
      description:
        "Design and construction of paved and unpaved access roads, earthworks, drainage and surfacing.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M8 21h8" />
          <path d="M6 17l3-14h6l3 14" />
          <path d="M9 13h6" />
          <path d="M8 9h8" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Piped Water",
      description:
        "Potable water network design, mainlines, distribution networks and connection works.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M3 8c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
          <path d="M3 13c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
          <path d="M3 18c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Sewer Lines",
      description:
        "Gravity sewers, manholes, pumping stations and full sanitation solutions.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M4 7h10" />
          <path d="M4 17h10" />
          <path d="M14 7c0 0 0 10 4 10" />
          <path d="M18 5c2 0 3 2 3 4s-1 4-3 4" />
          <path d="M18 5v8" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Structures",
      description:
        "Foundations, retaining walls, reinforced concrete structures and structural repairs.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M8 7h2" />
          <path d="M14 7h2" />
          <path d="M8 11h2" />
          <path d="M14 11h2" />
          <path d="M8 15h2" />
          <path d="M14 15h2" />
          <path d="M10 21v-3h4v3" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Engineering Survey",
      description:
        "Topographic surveys, setting out, and geotechnical coordination for accurate project delivery.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M4 19L19 4" />
          <path d="M6 21l-3-3" />
          <path d="M8 17l-2-2" />
          <path d="M11 14l-2-2" />
          <path d="M14 11l-2-2" />
          <path d="M17 8l-2-2" />
          <path d="M20 5l-2-2" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Project Management",
      description:
        "End-to-end project oversight, quality control, and stakeholder communication.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M6 9h12" />
          <path d="M8 9V6h8v3" />
          <path d="M4 9h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" />
          <path d="M7 14v5h10v-5" />
          <path d="M10 17h4" />
        </svg>
      ),
    },
    {
      number: "07",
      title: "Materials Supply",
      description:
        "Supply of high-quality construction materials including aggregates, sand, and pre-cast concrete items.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M3 17h12" />
          <path d="M5 17V9h7v8" />
          <path d="M12 12h5l3 3v2h-8" />
          <circle cx="7" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M5 9l2-3h4l2 3" />
        </svg>
      ),
    },
    {
      number: "08",
      title: "Equipment Hire",
      description:
        "Flexible hire options for a wide range of heavy construction machinery and equipment.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M3 17h4" />
          <path d="M17 17h4" />
          <path d="M6 17V9h7l4 4v4" />
          <path d="M13 9V5h3l2 4" />
          <circle cx="7" cy="18" r="2.5" />
          <circle cx="17" cy="18" r="2.5" />
          <path d="M9 11h4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* Header */}
      <Header
        onThemeToggle={toggleTheme}
        isDark={isDark}
      />

      <main id="main" tabIndex={-1}>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden border-b border-border">
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* Decorative glow */}
          <div
            className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
            aria-hidden="true"
          />

          <div
            className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-amber-500/5 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  Our Services
                </p>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Infrastructure built with{" "}
                <span className="text-primary">
                  precision.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                From roads and water networks to sewer systems,
                structures, engineering surveys, project
                management, materials supply and equipment hire,
                we provide practical construction solutions for
                demanding projects.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Request a Consultation

                  <span
                    className="ml-2 text-lg"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES INTRO
        ===================================================== */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  What We Do
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Practical solutions for every stage of your project.
                </h2>
              </div>

              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Our services are focused on essential construction
                and infrastructure requirements. We combine
                technical expertise, quality materials, equipment
                and professional project coordination to help
                deliver projects efficiently and reliably.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}
        <section
          id="services"
          className="relative overflow-hidden py-24 sm:py-32"
        >
          {/* Decorative background */}
          <div
            className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section heading */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Expertise
                </p>

                <span className="h-px w-10 bg-primary" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Services designed around{" "}
                <span className="text-primary">
                  real project needs.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Explore our core construction, infrastructure,
                engineering, supply and equipment services.
              </p>
            </div>

            {/* =================================================
                8 SERVICE CARDS
            ================================================= */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                >
                  {/* Top accent */}
                  <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Number */}
                  <div className="absolute right-6 top-6 font-mono text-xs font-semibold text-muted-foreground/40 transition-colors duration-300 group-hover:text-primary/50">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-bold tracking-tight sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Bottom line */}
                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-primary">
                    <span>Learn more</span>

                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  {/* Decorative corner */}
                  <div
                    className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICE HIGHLIGHT
        ===================================================== */}
        <section className="border-y border-border bg-muted/30 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-12 lg:p-16">
              {/* Background decoration */}
              <div
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Complete Project Support
                  </p>

                  <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    From the first survey to the final delivery.
                  </h2>

                  <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                    Our range of services allows us to support
                    projects across multiple stages — from
                    engineering surveys and infrastructure works
                    to materials, equipment and professional
                    project management.
                  </p>
                </div>

                <div className="flex shrink-0 lg:justify-end">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-14 w-14"
                    >
                      <path d="M3 21h18" />
                      <path d="M5 21V7l7-4 7 4v14" />
                      <path d="M9 21v-5h6v5" />
                      <path d="M9 9h1" />
                      <path d="M14 9h1" />
                      <path d="M9 12h1" />
                      <path d="M14 12h1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          {/* Background */}
          <div
            className="absolute inset-0 -z-10 bg-primary/[0.04]"
            aria-hidden="true"
          />

          <div
            className="absolute left-1/2 top-0 -z-10 h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]"
            aria-hidden="true"
          />

          <div
            className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-amber-500/5 blur-[100px]"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M21 16v5H3v-5" />
                <path d="M5 16V9l7-5 7 5v7" />
                <path d="M9 16v-4h6v4" />
              </svg>
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Start Your Project
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build something that works.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Whether you need access roads, water infrastructure,
              sewer lines, structural works, engineering surveys,
              project management, construction materials or
              equipment, our team is ready to discuss your
              requirements.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Request a Consultation

                <span
                  className="ml-2 text-lg"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              <a
                href="tel:+254714544535"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                Call +254 714 544 535
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Professional construction and infrastructure
              solutions tailored to your project requirements.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
};

export default Services;
