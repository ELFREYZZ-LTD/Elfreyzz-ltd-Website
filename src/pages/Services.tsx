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

  const services = [
    {
      number: "01",
      title: "New Construction",
      shortTitle: "New Builds",
      icon: "⌂",
      description:
        "Complete construction solutions for clients bringing a new building or development from concept to completion.",
      longDescription:
        "We manage new construction projects with a practical, detail-focused approach. From early planning and site preparation through structural works, installations, finishes, and final completion, we coordinate the work required to turn a project vision into a finished space.",
      includes: [
        "Site preparation and development",
        "Structural construction",
        "Building works and installations",
        "Finishing and detailing",
        "Project coordination",
        "Completion and handover",
      ],
      idealFor:
        "Residential developments, commercial buildings, new facilities, and clients starting a project from the ground up.",
    },
    {
      number: "02",
      title: "Residential Construction",
      shortTitle: "Homes & Residential",
      icon: "⌂",
      description:
        "Thoughtfully constructed homes and residential spaces designed around the way you want to live.",
      longDescription:
        "A home is more than a structure. Our residential construction service focuses on creating functional, comfortable, durable spaces while maintaining careful attention to workmanship and finishing details.",
      includes: [
        "Residential new builds",
        "House construction",
        "Extensions and additions",
        "Interior and exterior works",
        "Finishing and refurbishment",
        "Property improvements",
      ],
      idealFor:
        "Homeowners, property developers, residential investors, and clients creating or improving residential spaces.",
    },
    {
      number: "03",
      title: "Commercial Construction",
      shortTitle: "Commercial Projects",
      icon: "▦",
      description:
        "Professional construction services for commercial spaces, developments, offices, and business premises.",
      longDescription:
        "Commercial construction requires careful coordination, efficient execution, and an understanding that the finished space needs to work for the people and businesses using it. We approach commercial projects with these practical requirements in mind.",
      includes: [
        "Commercial building works",
        "Office construction",
        "Business premises",
        "Retail and functional spaces",
        "Structural and finishing works",
        "Project coordination",
      ],
      idealFor:
        "Businesses, developers, property owners, offices, retail premises, and commercial developments.",
    },
    {
      number: "04",
      title: "Renovation & Remodeling",
      shortTitle: "Renovation",
      icon: "↗",
      description:
        "Transform existing spaces through renovations, extensions, remodeling, upgrades, and carefully executed improvements.",
      longDescription:
        "Renovation is about making an existing property work better without losing sight of its structure and character. We help clients improve, modernize, extend, and transform existing spaces according to their needs.",
      includes: [
        "Property renovations",
        "Remodeling and reconfiguration",
        "Extensions",
        "Interior improvements",
        "Exterior improvements",
        "General property upgrades",
      ],
      idealFor:
        "Homeowners, landlords, property investors, businesses, and clients looking to modernize or improve an existing property.",
    },
    {
      number: "05",
      title: "Infrastructure & Site Works",
      shortTitle: "Infrastructure",
      icon: "⌁",
      description:
        "Essential site and infrastructure works that help connect, support, and complete construction developments.",
      longDescription:
        "A successful development often depends on more than the building itself. We provide support for essential infrastructure and site works, helping create the practical foundations around which projects can operate effectively.",
      includes: [
        "Access roads",
        "Sewer lines",
        "Piped water",
        "Site development",
        "Supporting infrastructure",
        "General site works",
      ],
      idealFor:
        "Property developments, residential estates, commercial projects, infrastructure improvements, and larger construction sites.",
    },
    {
      number: "06",
      title: "Engineering & Technical Support",
      shortTitle: "Engineering",
      icon: "⌗",
      description:
        "Technical support including engineering surveys and consultation to help projects begin with better information and direction.",
      longDescription:
        "Good construction decisions depend on accurate information and appropriate technical planning. Our engineering-related services support clients and projects that require surveys, consultation, and technical input before or during construction.",
      includes: [
        "Engineering surveys",
        "Engineering consultation",
        "Technical project support",
        "Site assessment support",
        "Construction-related guidance",
        "Project coordination",
      ],
      idealFor:
        "Developers, property owners, construction projects, infrastructure works, and clients requiring technical support.",
    },
    {
      number: "07",
      title: "Equipment Hire",
      shortTitle: "Equipment",
      icon: "▰",
      description:
        "Access to construction equipment and resources to support projects, contractors, and site operations.",
      longDescription:
        "Having the right equipment at the right stage of a project can make construction work more efficient. Our equipment hire offering provides practical support for construction and site activities.",
      includes: [
        "Construction equipment",
        "Site equipment support",
        "Equipment hire arrangements",
        "Project-specific requirements",
        "Construction site support",
        "Flexible project needs",
      ],
      idealFor:
        "Contractors, developers, construction teams, property owners, and projects requiring additional equipment resources.",
    },
    {
      number: "08",
      title: "Materials & Supplies",
      shortTitle: "Materials",
      icon: "◆",
      description:
        "Construction materials and supplies to support projects from initial works through to finishing.",
      longDescription:
        "Construction quality depends in part on the materials that go into the project. We support construction requirements through the supply and coordination of materials and resources appropriate to project needs.",
      includes: [
        "Construction materials",
        "Project supplies",
        "Material coordination",
        "Site requirements",
        "Construction resource support",
        "Project-specific sourcing",
      ],
      idealFor:
        "Construction projects, contractors, developers, property owners, renovation works, and ongoing site requirements.",
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
        <section className="relative overflow-hidden border-b border-border pt-20">

          {/* Architectural grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* Primary glow */}
          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

          {/* Subtle secondary accent */}
          <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-amber-500/5 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

              {/* Hero content */}
              <div>

                <div className="mb-7 flex items-center gap-4">

                  <span className="h-px w-12 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    What We Do
                  </p>

                </div>

                <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Construction services{" "}
                  <span className="text-primary">
                    built around your project.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  From new construction and residential projects to
                  commercial developments, renovations, infrastructure,
                  engineering support, equipment, and materials—we
                  provide practical construction solutions designed
                  around the needs of each project.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                  <a
                    href="tel:+254714544535"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    aria-label="Call +254 714 544 535 for a consultation"
                  >
                    Request a Consultation

                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </a>

                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  >
                    Explore Our Services
                  </a>

                </div>

              </div>

              {/* Hero information card */}
              <div className="relative">

                <div className="rounded-3xl border border-border bg-card/70 p-8 shadow-2xl shadow-primary/5 backdrop-blur-sm sm:p-10">

                  <div className="flex items-center justify-between border-b border-border pb-6">

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Our Approach
                      </p>

                      <p className="mt-2 text-xl font-semibold">
                        Built with purpose.
                      </p>

                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      ◆
                    </div>

                  </div>

                  <div className="mt-8 space-y-7">

                    {[
                      "Quality workmanship",
                      "Practical project planning",
                      "Clear communication",
                      "Attention to detail",
                    ].map((item, index) => (

                      <div
                        key={item}
                        className="flex items-start gap-4"
                      >

                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 text-[10px] font-bold text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm font-medium">
                          {item}
                        </p>

                      </div>

                    ))}

                  </div>

                  <div className="mt-9 border-t border-border pt-6">

                    <p className="text-sm leading-7 text-muted-foreground">
                      Whether you're starting from the ground up or
                      improving an existing property, we help turn
                      construction requirements into practical,
                      well-executed results.
                    </p>

                  </div>

                </div>

                {/* Decorative detail */}
                <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-2xl border border-amber-500/20 bg-amber-500/5" />

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            CAPABILITIES INTRO
        ===================================================== */}
        <section className="border-b border-border bg-muted/30">

          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Capabilities
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  One partner.
                  <br />
                  Multiple capabilities.
                </h2>

              </div>

              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Construction projects rarely fit into a single category.
                A development may require building works, infrastructure,
                engineering support, equipment, materials, and finishing
                all working together. Our services are structured to give
                clients access to the capabilities needed to move projects
                forward with greater coordination.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}
        <section
          id="services"
          className="scroll-mt-20 py-24 sm:py-32"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-16 max-w-3xl">

              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-10 bg-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Services
                </p>

              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                From foundations to{" "}
                <span className="text-primary">
                  final details.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Explore the services we provide across construction,
                property improvement, infrastructure, engineering,
                equipment, and project support.
              </p>

            </div>

            <div className="space-y-6">

              {services.map((service) => (

                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
                >

                  {/* Hover accent */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="grid lg:grid-cols-[90px_1fr_1fr]">

                    {/* Number column */}
                    <div className="hidden border-r border-border p-8 lg:block">

                      <span className="font-mono text-sm text-primary">
                        {service.number}
                      </span>

                    </div>

                    {/* Service information */}
                    <div className="p-8 sm:p-10 lg:p-12">

                      <div className="flex items-start justify-between gap-6">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
                          {service.icon}
                        </div>

                        <span className="font-mono text-xs text-muted-foreground lg:hidden">
                          {service.number}
                        </span>

                      </div>

                      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                        {service.shortTitle}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-5 text-base leading-8 text-muted-foreground">
                        {service.description}
                      </p>

                      <p className="mt-5 text-sm leading-7 text-muted-foreground/80">
                        {service.longDescription}
                      </p>

                    </div>

                    {/* Service details */}
                    <div className="border-t border-border bg-muted/20 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                        What this can include
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

                        {service.includes.map((item) => (

                          <div
                            key={item}
                            className="flex items-start gap-3"
                          >

                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                            <span className="text-sm leading-6 text-muted-foreground">
                              {item}
                            </span>

                          </div>

                        ))}

                      </div>

                      <div className="mt-8 border-t border-border pt-6">

                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600 dark:text-amber-400">
                          Ideal for
                        </p>

                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {service.idealFor}
                        </p>

                      </div>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            THE BIGGER PICTURE
        ===================================================== */}
        <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-28">

          <div
            className="absolute inset-0 opacity-[0.04]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(45deg, currentColor 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">
                  The Bigger Picture
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Construction is a process,
                  <br />
                  not a single service.
                </h2>

              </div>

              <div>

                <p className="text-lg leading-8 opacity-80">
                  A successful project often requires several moving
                  parts to work together. That's why our capabilities
                  extend beyond the core construction work.
                </p>

                <p className="mt-5 text-base leading-8 opacity-70">
                  From engineering surveys and site works to materials,
                  equipment, construction, renovations, and finishing,
                  our broader service offering allows us to support
                  different stages and requirements of a project.
                </p>

                <div className="mt-8 h-px w-full bg-white/20" />

                <div className="mt-8 grid gap-6 sm:grid-cols-3">

                  <div>
                    <p className="text-3xl font-bold">
                      08
                    </p>

                    <p className="mt-1 text-sm opacity-60">
                      Service areas
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold">
                      01
                    </p>

                    <p className="mt-1 text-sm opacity-60">
                      Project vision
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold">
                      100%
                    </p>

                    <p className="mt-1 text-sm opacity-60">
                      Focus on delivery
                    </p>
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

          <div className="absolute inset-0 -z-10 bg-primary/[0.04]" />

          <div className="absolute left-1/2 top-0 -z-10 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

          <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-amber-500/5 blur-[100px]" />

          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
              ◆
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Let's Discuss Your Project
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Not sure which service
              <br className="hidden sm:block" />
              you need?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              That's okay. Tell us what you're planning, what you
              want to improve, or what you need built. We can discuss
              the requirements and determine the most practical way
              forward.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              {/* Phone CTA */}
              <a
                href="tel:+254714544535"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                aria-label="Call +254 714 544 535"
              >
                Call +254 714 544 535

                <span
                  className="ml-2"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>

              {/* Contact page */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                Visit Contact Page
              </Link>

            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              We welcome enquiries about new construction, renovations,
              commercial projects, infrastructure, and related services.
            </p>

          </div>

        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Back To Top */}
      <BackToTop />

    </div>
  );
};

export default Services;
