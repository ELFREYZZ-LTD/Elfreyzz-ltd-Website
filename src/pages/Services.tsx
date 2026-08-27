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
      category: "Construction",
      icon: "⌂",
      description:
        "From the ground up, we deliver carefully planned construction projects with attention to structure, craftsmanship, functionality, and finish.",
      details:
        "Our new construction services cover projects from initial site preparation through the construction process and final completion. We work to ensure that every stage contributes to a finished structure that is practical, durable, and aligned with the client's requirements.",
      includes: [
        "Ground-up construction",
        "Site preparation",
        "Structural construction",
        "Building works",
        "Finishing works",
        "Project coordination",
      ],
    },

    {
      number: "02",
      title: "Residential Construction",
      category: "Homes & Residential",
      icon: "⌂",
      description:
        "Thoughtfully built homes and residential spaces designed around your needs, lifestyle, vision, and long-term plans.",
      details:
        "We understand that residential construction is both a significant investment and a personal undertaking. Our approach focuses on combining sound construction practices with careful attention to the spaces, finishes, and details that make a property feel like home.",
      includes: [
        "Residential homes",
        "House construction",
        "Residential developments",
        "Extensions",
        "Interior works",
        "Exterior works",
      ],
    },

    {
      number: "03",
      title: "Commercial Construction",
      category: "Commercial Projects",
      icon: "▦",
      description:
        "Professional construction services for commercial spaces, developments, offices, business premises, and other functional facilities.",
      details:
        "Commercial projects require a practical understanding of functionality, durability, coordination, and the needs of the people who will ultimately use the space. We provide construction support focused on delivering commercial environments that serve their intended purpose.",
      includes: [
        "Commercial buildings",
        "Office spaces",
        "Business premises",
        "Commercial developments",
        "Structural works",
        "Finishing works",
      ],
    },

    {
      number: "04",
      title: "General Construction",
      category: "Construction Services",
      icon: "▧",
      description:
        "Flexible construction support for projects that require a combination of building, site, structural, finishing, and related works.",
      details:
        "Not every construction requirement fits neatly into a single category. Our general construction services provide a flexible solution for clients who require multiple types of construction work coordinated around one project or specific requirement.",
      includes: [
        "General building works",
        "Site works",
        "Structural works",
        "Maintenance-related works",
        "Finishing works",
        "Project-specific construction",
      ],
    },

    {
      number: "05",
      title: "Renovation",
      category: "Property Improvement",
      icon: "↗",
      description:
        "Transform existing properties through carefully planned renovations that improve functionality, appearance, comfort, and value.",
      details:
        "Renovation allows an existing property to evolve with changing needs. We help clients improve and modernize spaces while taking into account the existing structure, intended use, desired finishes, and practical requirements of the project.",
      includes: [
        "Property renovations",
        "Interior renovations",
        "Exterior renovations",
        "Property upgrades",
        "Structural improvements",
        "Finishing improvements",
      ],
    },

    {
      number: "06",
      title: "Extensions",
      category: "Property Improvement",
      icon: "＋",
      description:
        "Expand existing properties with carefully considered extensions designed to create additional usable space.",
      details:
        "When an existing property no longer provides enough space, an extension can offer a practical alternative to moving or rebuilding. We provide construction support for extensions that integrate new spaces with the existing property.",
      includes: [
        "Residential extensions",
        "Additional rooms",
        "Building extensions",
        "Property expansions",
        "Structural additions",
        "Finishing and integration",
      ],
    },

    {
      number: "07",
      title: "Remodeling",
      category: "Property Transformation",
      icon: "↻",
      description:
        "Reconfigure and transform existing spaces to better suit new uses, modern requirements, and changing lifestyles.",
      details:
        "Remodeling can fundamentally change how an existing property functions. We help clients rework spaces and improve layouts while considering the structural and practical requirements involved in transforming an existing building.",
      includes: [
        "Space reconfiguration",
        "Layout improvements",
        "Interior remodeling",
        "Functional upgrades",
        "Property transformation",
        "Finishing works",
      ],
    },

    {
      number: "08",
      title: "Property Improvements",
      category: "Property Development",
      icon: "◆",
      description:
        "Practical improvements that enhance existing properties, improve usability, and support long-term property value.",
      details:
        "Property improvement projects can range from focused upgrades to broader improvements across a building or site. We work with clients to identify the construction work required to improve the property's functionality, appearance, and overall condition.",
      includes: [
        "Property upgrades",
        "Building improvements",
        "Functional improvements",
        "Exterior improvements",
        "Interior improvements",
        "General property works",
      ],
    },

    {
      number: "09",
      title: "Access Roads",
      category: "Infrastructure",
      icon: "━",
      description:
        "Construction and site works that provide practical access to properties, developments, construction sites, and other facilities.",
      details:
        "Reliable access is an important part of many developments. We provide support for access road construction and related site works intended to improve connectivity and accessibility within and around project sites.",
      includes: [
        "Access road construction",
        "Site access works",
        "Development access",
        "Road preparation",
        "Supporting site works",
        "Infrastructure coordination",
      ],
    },

    {
      number: "10",
      title: "Sewer Lines",
      category: "Infrastructure",
      icon: "⌁",
      description:
        "Sewer infrastructure works designed to support property developments and provide essential site services.",
      details:
        "Sewer infrastructure is a fundamental component of many residential, commercial, and development projects. We support sewer line works as part of broader site development and infrastructure requirements.",
      includes: [
        "Sewer line works",
        "Site infrastructure",
        "Development infrastructure",
        "Drainage-related works",
        "Infrastructure coordination",
        "Project-specific site works",
      ],
    },

    {
      number: "11",
      title: "Piped Water",
      category: "Infrastructure",
      icon: "≈",
      description:
        "Water infrastructure and piped water works supporting residential, commercial, and property development requirements.",
      details:
        "Reliable water infrastructure is essential for functional developments. We provide support for piped water works as part of broader infrastructure and site development requirements.",
      includes: [
        "Piped water systems",
        "Water infrastructure",
        "Site water works",
        "Development connections",
        "Supporting site works",
        "Infrastructure coordination",
      ],
    },

    {
      number: "12",
      title: "Engineering Surveys",
      category: "Engineering",
      icon: "⌗",
      description:
        "Engineering survey services that provide useful site information to support planning, construction, development, and decision-making.",
      details:
        "Good construction decisions depend on reliable information about the site and its conditions. Engineering surveys can provide important technical information needed to inform project planning and construction activities.",
      includes: [
        "Engineering surveys",
        "Site information",
        "Technical measurements",
        "Construction support",
        "Development planning support",
        "Site assessment",
      ],
    },

    {
      number: "13",
      title: "Engineering Consultation",
      category: "Engineering",
      icon: "⌘",
      description:
        "Engineering consultation to help clients understand technical considerations and make informed decisions about their projects.",
      details:
        "Construction projects often involve technical questions that need to be considered before work begins or as the project develops. Our engineering consultation services provide technical support to help clients and project teams navigate these requirements.",
      includes: [
        "Engineering consultation",
        "Technical guidance",
        "Project assessment",
        "Construction consultation",
        "Site-related consultation",
        "Technical project support",
      ],
    },

    {
      number: "14",
      title: "Equipment Hire",
      category: "Construction Support",
      icon: "▰",
      description:
        "Construction equipment hire to support project sites, contractors, developers, and specific construction requirements.",
      details:
        "Access to appropriate equipment can make construction activities more efficient and practical. Our equipment hire service provides clients and project teams with additional resources to support construction and site operations.",
      includes: [
        "Construction equipment",
        "Site equipment",
        "Equipment hire",
        "Project-specific equipment",
        "Contractor support",
        "Site operation support",
      ],
    },

    {
      number: "15",
      title: "Materials & Supplies",
      category: "Construction Support",
      icon: "◆",
      description:
        "Construction materials and supplies to support projects from initial works through construction and finishing.",
      details:
        "Materials are fundamental to construction quality and project progress. We support construction requirements through the provision and coordination of materials and supplies needed for different stages of a project.",
      includes: [
        "Construction materials",
        "Building supplies",
        "Project materials",
        "Site requirements",
        "Material coordination",
        "Construction resource support",
      ],
    },
  ];

  const serviceGroups = [
    {
      title: "Construction",
      description:
        "Core building and construction services for new developments, homes, businesses, and general construction requirements.",
      numbers: ["01", "02", "03", "04"],
    },
    {
      title: "Property Improvement",
      description:
        "Services that help existing properties evolve, expand, improve, and adapt to changing requirements.",
      numbers: ["05", "06", "07", "08"],
    },
    {
      title: "Infrastructure",
      description:
        "Essential site infrastructure supporting access, water, sewer, and wider development requirements.",
      numbers: ["09", "10", "11"],
    },
    {
      title: "Engineering & Support",
      description:
        "Technical services, equipment, and materials that help construction projects move forward effectively.",
      numbers: ["12", "13", "14", "15"],
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

          <div
            className="absolute inset-0 opacity-[0.035]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

          <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-amber-500/5 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

              <div>

                <div className="mb-7 flex items-center gap-4">
                  <span className="h-px w-12 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    Our Services
                  </p>
                </div>

                <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  We build more than{" "}
                  <span className="text-primary">
                    structures.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  From new homes and commercial buildings to renovations,
                  infrastructure, engineering support, equipment, and
                  materials, we provide construction services designed
                  around the practical requirements of your project.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Request a Consultation

                    <span
                      className="ml-2"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>

                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  >
                    Explore Our Services
                  </a>

                </div>

              </div>

              {/* Hero Card */}
              <div className="relative">

                <div className="rounded-3xl border border-border bg-card/70 p-8 shadow-2xl shadow-primary/5 backdrop-blur-sm sm:p-10">

                  <div className="flex items-center justify-between border-b border-border pb-6">

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Our Capabilities
                      </p>

                      <p className="mt-2 text-xl font-semibold">
                        One project. Multiple solutions.
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      ◆
                    </div>

                  </div>

                  <div className="mt-8 space-y-6">

                    {serviceGroups.map((group) => (

                      <div
                        key={group.title}
                        className="flex gap-4"
                      >

                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                          {group.numbers.length}
                        </div>

                        <div>
                          <p className="font-semibold">
                            {group.title}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {group.description}
                          </p>
                        </div>

                      </div>

                    ))}

                  </div>

                </div>

                <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-2xl border border-amber-500/20 bg-amber-500/5" />

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="border-b border-border bg-muted/30">

          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Built With Purpose
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Construction done with care.
                </h2>

              </div>

              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Every project is an opportunity to create something
                lasting. We combine practical planning, skilled
                workmanship, quality materials, technical support,
                and close attention to detail to deliver buildings,
                infrastructure, and improvements designed for lasting value.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            SERVICE DIRECTORY
        ===================================================== */}
        <section
          id="services"
          className="relative overflow-hidden py-24 sm:py-32"
        >

          <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-10 bg-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  What We Offer
                </p>

              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Comprehensive services for{" "}
                <span className="text-primary">
                  real project needs.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Whether you're building from the ground up, improving
                an existing property, developing infrastructure, or
                looking for technical and construction support, our
                services cover the requirements that help projects
                move forward.
              </p>

            </div>

            {/* Service cards */}
            <div className="mt-16 space-y-6">

              {services.map((service) => (

                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
                >

                  <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="grid lg:grid-cols-[90px_1fr_0.9fr]">

                    {/* Number */}
                    <div className="hidden border-r border-border p-8 lg:block">

                      <span className="font-mono text-sm text-primary">
                        {service.number}
                      </span>

                    </div>

                    {/* Main content */}
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
                        {service.category}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-5 text-base leading-8 text-muted-foreground">
                        {service.description}
                      </p>

                      <p className="mt-5 text-sm leading-7 text-muted-foreground/80">
                        {service.details}
                      </p>

                    </div>

                    {/* Included */}
                    <div className="border-t border-border bg-muted/20 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

                      <p className="text-sm font-semibold uppercase tracking-[0.15em]">
                        Service Includes
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

                        <Link
                          to="/contact"
                          className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                        >
                          Discuss this service

                          <span
                            className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </Link>

                      </div>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            SERVICE AREAS SUMMARY
        ===================================================== */}
        <section className="border-y border-border bg-muted/30 py-24 sm:py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Capabilities
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  More than a building contractor.
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Our range of services allows us to support different
                  aspects of construction and property development,
                  from the core building works to the infrastructure,
                  technical services, equipment, and materials that
                  projects depend on.
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {serviceGroups.map((group) => (

                  <div
                    key={group.title}
                    className="rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                  >

                    <div className="flex items-center justify-between">

                      <h3 className="text-xl font-semibold">
                        {group.title}
                      </h3>

                      <span className="font-mono text-xs text-primary">
                        {group.numbers.length.toString().padStart(2, "0")}
                      </span>

                    </div>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {group.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">

                      {group.numbers.map((number) => {

                        const service = services.find(
                          (item) => item.number === number
                        );

                        return service ? (
                          <span
                            key={number}
                            className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                          >
                            {service.title}
                          </span>
                        ) : null;

                      })}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            QUALITY / COMMITMENT
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

            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">
                  Our Commitment
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Built to be lived in.
                  <br />
                  Built to last.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 opacity-80">
                  We don't see construction as simply putting up
                  walls and completing a checklist. The finished
                  project becomes someone's home, workplace,
                  investment, or community space. That responsibility
                  shapes how we approach every job.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                {[
                  {
                    title: "Quality",
                    text: "Careful workmanship from foundations to finishing details.",
                  },
                  {
                    title: "Safety",
                    text: "Responsible construction practices throughout the project.",
                  },
                  {
                    title: "Integrity",
                    text: "Straightforward communication and professional project handling.",
                  },
                  {
                    title: "Durability",
                    text: "Construction focused on lasting value rather than shortcuts.",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
                  >

                    <p className="text-xl font-bold">
                      {item.title}
                    </p>

                    <p className="mt-2 text-sm leading-6 opacity-70">
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section
          id="contact"
          className="relative overflow-hidden py-24 sm:py-32"
        >

          <div className="absolute inset-0 -z-10 bg-primary/[0.04]" />

          <div className="absolute left-1/2 top-0 -z-10 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

          <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-amber-500/5 blur-[100px]" />

          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
              ◆
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Start Your Project
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Whether you're planning a new build, developing
              infrastructure, renovating an existing property, or
              looking for technical construction support, we'd be glad
              to hear about your project.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              {/* Registered Contact Route */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Request a Consultation

                <span
                  className="ml-2"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              {/* Direct Phone Call */}
              <a
                href="tel:+254714544535"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                Call +254 714 544 535
              </a>

            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Let's discuss your requirements and determine the most
              practical way forward.
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
