import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PastProjects } from "@/components/PastProjects";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
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
      description:
        "From the ground up, we deliver carefully planned construction projects with attention to structure, craftsmanship, and finish.",
      icon: "⌂",
    },
    {
      number: "02",
      title: "Residential Construction",
      description:
        "Thoughtfully built homes and residential spaces designed around your needs, lifestyle, and vision.",
      icon: "⌂",
    },
    {
      number: "03",
      title: "Commercial Construction",
      description:
        "Professional construction services for commercial spaces, developments, offices, and business premises.",
      icon: "▦",
    },
    {
      number: "04",
      title: "Renovation & Remodeling",
      description:
        "Breathe new life into existing spaces through renovations, extensions, remodeling, and property improvements.",
      icon: "↗",
    },
  ];

  const strengths = [
    {
      number: "01",
      title: "Quality Craftsmanship",
      description:
        "We pay close attention to the details, finishes, and workmanship that make the difference between simply completing a project and building something you can be proud of.",
    },
    {
      number: "02",
      title: "Reliable Workmanship",
      description:
        "We approach every project with professionalism, accountability, and a commitment to delivering work to the agreed standards.",
    },
    {
      number: "03",
      title: "Clear Communication",
      description:
        "You should always know where your project stands. We value straightforward communication throughout the construction process.",
    },
    {
      number: "04",
      title: "Attention to Detail",
      description:
        "From structural work to finishing touches, we believe every part of a project deserves careful consideration.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We begin by understanding your plans, requirements, priorities, budget, and expectations for the project.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "We establish the scope of work and coordinate the people, materials, equipment, timelines, and resources required.",
    },
    {
      step: "03",
      title: "Construction",
      description:
        "Our team manages the work with a focus on quality, safety, workmanship, coordination, and steady progress.",
    },
    {
      step: "04",
      title: "Completion",
      description:
        "We bring the project through its final stages and ensure the completed work reflects the agreed requirements.",
    },
  ];

  const projectTypes = [
    "New Builds",
    "Residential Homes",
    "Commercial Buildings",
    "Renovations",
    "Extensions",
    "Remodeling",
    "Property Improvements",
    "General Construction",
    "Material & Supplies",
    "Engineering Surveys",
    "Engineering Consultation",
    "Equipment Hire",
    "Access Roads",
    "Sewer Lines",
    "Piped Water",
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

        {/* Hero */}
        <Hero />

        {/* INTRO / TRUST */}
        <section className="border-y border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Built With Purpose
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Construction done with care.
                </h2>
              </div>

              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                Every project is an opportunity to create something
                lasting. We combine practical planning, skilled
                workmanship, quality materials, and close attention
                to detail to deliver spaces and infrastructure built
                for lasting value.
              </p>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="relative overflow-hidden py-24 sm:py-32"
        >
          <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Services
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                We build more than{" "}
                <span className="text-primary">
                  structures.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Whether you're starting from the ground up or
                transforming an existing property, we bring the
                experience and workmanship needed to move your
                project forward.
              </p>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">

              {services.map((service) => (
                <div
                  key={service.number}
                  className="group bg-background p-8 transition-all duration-300 hover:bg-muted/50"
                >

                  <div className="flex items-start justify-between">

                    <span className="text-3xl text-primary">
                      {service.icon}
                    </span>

                    <span className="font-mono text-xs text-muted-foreground">
                      {service.number}
                    </span>

                  </div>

                  <h3 className="mt-12 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-8 h-px w-8 bg-primary transition-all duration-300 group-hover:w-16" />

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section
          id="about"
          className="bg-muted/40 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

              <div>

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Why Choose Elfreyzz
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  The details matter.{" "}
                  <span className="text-primary">
                    We know they do.
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  A construction project is a significant investment.
                  That's why we believe the process should be handled
                  with professionalism from the first conversation
                  through to completion.
                </p>

                <p className="mt-5 text-base leading-7 text-muted-foreground">
                  Our approach is centered on dependable workmanship,
                  clear communication, careful planning, and delivering
                  a finished result that stands up to expectations.
                </p>

              </div>

              <div className="grid gap-0 divide-y divide-border rounded-2xl border border-border bg-background">

                {strengths.map((strength) => (
                  <div
                    key={strength.number}
                    className="grid gap-4 p-7 sm:grid-cols-[45px_1fr] sm:p-8"
                  >

                    <span className="font-mono text-sm text-primary">
                      {strength.number}
                    </span>

                    <div>

                      <h3 className="text-lg font-semibold">
                        {strength.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {strength.description}
                      </p>

                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <PastProjects />
        </section>

        {/* PROJECT EXPERIENCE */}
        <section
          id="expertise"
          className="border-y border-border bg-muted/30 py-24 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">

              <div className="lg:sticky lg:top-28">

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Project Experience
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Construction expertise{" "}
                  <span className="text-primary">
                    beyond the build.
                  </span>
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Our experience extends across building construction,
                  infrastructure, site works, engineering support,
                  materials, and essential services that help bring
                  complete projects together.
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                {projectTypes.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm"
                  >
                    {type}
                  </span>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Process
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                From the first conversation{" "}
                <span className="text-primary">
                  to the final detail.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                A well-managed project starts with a clear plan. We
                keep the process straightforward so you can move
                forward with confidence.
              </p>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              {process.map((item) => (
                <div
                  key={item.step}
                  className="group relative"
                >

                  <span className="text-5xl font-bold text-primary/15 transition-colors group-hover:text-primary/25">
                    {item.step}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-border">
                    <div className="h-px w-10 bg-primary transition-all duration-300 group-hover:w-full" />
                  </div>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* QUALITY & COMMITMENT */}
        <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-28">

          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80">
                  Our Commitment
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Built to be lived in.
                  <br />
                  Built to last.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 opacity-80">
                  We don't see construction as simply putting up
                  walls and completing a checklist. The finished
                  project becomes someone's home, workplace, investment,
                  or community space. That responsibility shapes how
                  we approach every job.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-2xl font-bold">
                    Quality
                  </p>

                  <p className="mt-2 text-sm leading-6 opacity-70">
                    Careful workmanship from the foundation to the
                    finishing details.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-2xl font-bold">
                    Safety
                  </p>

                  <p className="mt-2 text-sm leading-6 opacity-70">
                    Responsible construction practices throughout
                    the project.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-2xl font-bold">
                    Integrity
                  </p>

                  <p className="mt-2 text-sm leading-6 opacity-70">
                    Straightforward communication and professional
                    project handling.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-2xl font-bold">
                    Durability
                  </p>

                  <p className="mt-2 text-sm leading-6 opacity-70">
                    Construction focused on lasting value rather than
                    shortcuts.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="cta"
          className="relative overflow-hidden py-24 sm:py-32"
        >

          <div className="absolute inset-0 -z-10 bg-primary/[0.04]" />

          <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Start Your Project
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Whether you're planning a new build, developing
              infrastructure, renovating an existing space, or
              exploring what's possible, we'd be glad to hear about
              your project.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              {/* CONTACT PAGE ROUTE */}
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

              {/* PROJECTS SECTION */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                View Our Projects
              </a>

            </div>
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

export default Home;
