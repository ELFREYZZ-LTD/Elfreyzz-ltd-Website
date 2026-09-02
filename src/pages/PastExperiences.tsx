import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const PastExperiences = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

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
   * ============================================================
   * PROJECT DATA
   * ============================================================
   *
   * IMPORTANT:
   * Replace the placeholder client names, project names,
   * locations and descriptions with VERIFIED Elfreyzz projects.
   *
   * The construction images are temporary stock photography.
   * They should eventually be replaced with actual project
   * photographs supplied by Elfreyzz.
   */

  const projects = [
    {
      id: 1,
      number: "01",
      client: "Client / Organisation One",
      project: "Project Name One",
      location: "Project Location",
      type: "Building",
      scope:
        "Building construction and related site works delivered according to the approved project requirements and drawings.",
      description:
        "Replace this text with a verified description of the project, explaining what the client required and the role Elfreyzz played in delivering the work.",
      outcome:
        "Replace with the verified project outcome or completed works.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85",
    },

    {
      id: 2,
      number: "02",
      client: "Client / Organisation Two",
      project: "Project Name Two",
      location: "Project Location",
      type: "Civil Works",
      scope:
        "Civil construction works covering the requirements identified for the project.",
      description:
        "Replace this text with the verified project background, client requirement and the work undertaken by Elfreyzz.",
      outcome:
        "Replace with the verified project outcome or completed works.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85",
    },

    {
      id: 3,
      number: "03",
      client: "Client / Organisation Three",
      project: "Project Name Three",
      location: "Project Location",
      type: "Roads",
      scope:
        "Road construction or related infrastructure works delivered as part of the project requirements.",
      description:
        "Replace this text with the verified details of the road or infrastructure project and the specific responsibilities assigned to Elfreyzz.",
      outcome:
        "Replace with the verified project outcome or completed works.",
      image:
        "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1800&q=85",
    },

    {
      id: 4,
      number: "04",
      client: "Client / Organisation Four",
      project: "Project Name Four",
      location: "Project Location",
      type: "Surveying",
      scope:
        "Engineering survey and site setting-out services supporting the project's required levels, gradients, alignment and positioning.",
      description:
        "Replace this text with the verified description of the survey work undertaken and the requirements of the client.",
      outcome:
        "Replace with the verified survey or engineering outcome.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=85",
    },

    {
      id: 5,
      number: "05",
      client: "Client / Organisation Five",
      project: "Project Name Five",
      location: "Project Location",
      type: "Structural",
      scope:
        "Structural analysis, consultancy and/or structural drawing services based on the project's requirements.",
      description:
        "Replace this text with the verified project background and the structural services provided by Elfreyzz.",
      outcome:
        "Replace with the verified project outcome.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85",
    },

    {
      id: 6,
      number: "06",
      client: "Client / Organisation Six",
      project: "Project Name Six",
      location: "Project Location",
      type: "Supply",
      scope:
        "Supply of construction materials, building materials, road survey equipment, logistics or other required goods and services.",
      description:
        "Replace this text with the verified client requirement and details of the products, logistics or supply services delivered.",
      outcome:
        "Replace with the verified supply or service outcome.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=85",
    },
  ];

  const filters = [
    "All",
    "Building",
    "Civil Works",
    "Roads",
    "Surveying",
    "Structural",
    "Supply",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.type === activeFilter
        );

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* ========================================================
          ACCESSIBILITY
      ======================================================== */}

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* ========================================================
          HEADER
      ======================================================== */}

      <Header
        onThemeToggle={toggleTheme}
        isDark={isDark}
      />

      <main id="main" tabIndex={-1}>

        {/* ======================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-border pt-20">

          {/* Architectural grid */}

          <div
            className="absolute inset-0 opacity-[0.035]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Ambient glow */}

          <div className="absolute -right-48 top-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[140px]" />

          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

              {/* Hero copy */}

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-12 bg-primary" />

                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    Past Experiences
                  </span>

                </div>

                <h1 className="mt-7 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Projects.
                  <br />

                  <span className="text-primary">
                    Clients.
                  </span>

                  <br />

                  Experience.
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  A look at the types of clients, projects and
                  construction requirements Elfreyzz has experience
                  supporting across its areas of professional service.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href="#projects"
                    className="inline-flex items-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Explore Projects
                    <span className="ml-2">
                      ↓
                    </span>
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
                  >
                    Discuss Your Project
                  </a>

                </div>

              </div>

              {/* Hero project image */}

              <div className="relative">

                <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-primary/10">

                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85"
                    alt="Construction project"
                    className="aspect-[4/5] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-white/70">
                      Experience Portfolio
                    </p>

                    <p className="mt-2 text-2xl font-bold text-brand-white sm:text-3xl">
                      From planning to delivery.
                    </p>

                  </div>

                </div>

                {/* Decorative square */}

                <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-3xl border border-primary/20 bg-primary/10" />

              </div>

            </div>

          </div>

        </section>

        {/* ======================================================
            EXPERIENCE INTRO
        ====================================================== */}

        <section className="py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Portfolio
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Different clients.
                  <br />

                  <span className="text-primary">
                    Different challenges.
                  </span>
                </h2>

              </div>

              <div className="max-w-3xl">

                <p className="text-xl leading-9">
                  Every construction project has its own requirements.
                  Our experience spans different types of construction,
                  civil works, engineering and supply requirements.
                </p>

                <p className="mt-7 text-base leading-8 text-muted-foreground">
                  From construction and site works to engineering
                  surveys, structural consultancy and the supply of
                  construction materials and equipment, Elfreyzz has
                  developed a broad capability across the construction
                  value chain.
                </p>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  The project portfolio below is structured around
                  the client and the work delivered — giving
                  prospective clients a clearer understanding of the
                  type of project requirements Elfreyzz can support.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ======================================================
            PORTFOLIO STATISTICS
        ====================================================== */}

        <section className="border-y border-border bg-muted/30">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">

              <div className="px-6 py-10 sm:px-10">

                <p className="font-mono text-4xl font-bold text-primary">
                  01
                </p>

                <p className="mt-3 text-sm font-semibold">
                  Client-focused delivery
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Projects approached around individual client
                  requirements.
                </p>

              </div>

              <div className="px-6 py-10 sm:px-10">

                <p className="font-mono text-4xl font-bold text-primary">
                  02
                </p>

                <p className="mt-3 text-sm font-semibold">
                  Multiple disciplines
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Construction, civil works, surveying, consultancy
                  and supply.
                </p>

              </div>

              <div className="px-6 py-10 sm:px-10">

                <p className="font-mono text-4xl font-bold text-primary">
                  03
                </p>

                <p className="mt-3 text-sm font-semibold">
                  Kenya & beyond
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Building capabilities for projects within Kenya
                  and beyond.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ======================================================
            PROJECT PORTFOLIO
        ====================================================== */}

        <section
          id="projects"
          className="scroll-mt-20 py-24 sm:py-32"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* Heading */}

            <div className="max-w-3xl">

              <div className="flex items-center gap-4">

                <span className="h-px w-10 bg-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Selected Experience
                </p>

              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Who we worked for.
                <br />

                <span className="text-primary">
                  What we delivered.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                Each project profile should tell the story from
                the client's requirement through to Elfreyzz's
                delivered scope.
              </p>

            </div>

            {/* ==================================================
                FILTERS
            ================================================== */}

            <div className="mt-12 flex flex-wrap gap-2">

              {filters.map((filter) => (

                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "border border-border bg-card hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {filter}
                </button>

              ))}

            </div>

            {/* ==================================================
                PROJECT CARDS
            ================================================== */}

            <div className="mt-12 space-y-8">

              {filteredProjects.map((project, index) => (

                <article
                  key={project.id}
                  className="group overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
                >

                  <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

                    {/* Image */}

                    <div className="relative min-h-[320px] overflow-hidden lg:min-h-[460px]">

                      <img
                        src={project.image}
                        alt={`${project.type} project`}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />

                      {/* Project number */}

                      <div className="absolute left-7 top-7">

                        <span className="font-mono text-5xl font-bold text-brand-white/80">
                          {project.number}
                        </span>

                      </div>

                      {/* Type */}

                      <div className="absolute bottom-7 left-7">

                        <span className="rounded-full border border-brand-white/20 bg-brand-charcoal/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-white backdrop-blur-md">
                          {project.type}
                        </span>

                      </div>

                    </div>

                    {/* Content */}

                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                      {/* Client */}

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                          Client
                        </p>

                        <h3 className="mt-2 text-xl font-bold">
                          {project.client}
                        </h3>

                      </div>

                      {/* Project */}

                      <div className="mt-8">

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          Project
                        </p>

                        <h4 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                          {project.project}
                        </h4>

                      </div>

                      {/* Location */}

                      <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">

                        <span>
                          <span className="font-semibold text-foreground">
                            Location:
                          </span>{" "}
                          {project.location}
                        </span>

                        <span>
                          <span className="font-semibold text-foreground">
                            Type:
                          </span>{" "}
                          {project.type}
                        </span>

                      </div>

                      {/* Description */}

                      <div className="mt-8">

                        <p className="text-sm font-semibold">
                          Project Overview
                        </p>

                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {project.description}
                        </p>

                      </div>

                      {/* Scope */}

                      <div className="mt-7 rounded-2xl bg-muted/50 p-5">

                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                          Elfreyzz Scope
                        </p>

                        <p className="mt-2 text-sm leading-7">
                          {project.scope}
                        </p>

                      </div>

                      {/* Outcome */}

                      <div className="mt-7">

                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                          Delivery
                        </p>

                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {project.outcome}
                        </p>

                      </div>

                      {/* Bottom line */}

                      <div className="mt-8 flex items-center gap-3">

                        <span className="h-px w-8 bg-primary transition-all duration-500 group-hover:w-16" />

                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                          Project Experience
                        </span>

                      </div>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ======================================================
            VIDEO SECTION
        ====================================================== */}

        <section
          id="video"
          className="relative scroll-mt-20 overflow-hidden border-y border-border bg-muted/30 py-24 sm:py-32"
        >

          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid items-end gap-10 lg:grid-cols-[0.75fr_1.25fr]">

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Project Video
                  </p>

                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Put the work
                  <br />

                  <span className="text-primary">
                    in motion.
                  </span>
                </h2>

              </div>

              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                Use this section to feature a verified Elfreyzz
                construction project, company presentation, site
                walkthrough, or other YouTube video that gives
                prospective clients a closer look at the company
                and its work.
              </p>

            </div>

            {/* Video */}

            <div className="mt-14 overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">

              <div className="aspect-video">

                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Elfreyzz Ltd Project Video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

              </div>

            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Replace{" "}
              <span className="font-mono">
                YOUR_VIDEO_ID
              </span>{" "}
              with the actual YouTube video ID.
            </p>

          </div>

        </section>

        {/* ======================================================
            CLIENT EXPERIENCE
        ====================================================== */}

        <section className="py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Client Experience
                  </p>

                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  The project ends.
                  <br />

                  <span className="text-primary">
                    The relationship continues.
                  </span>
                </h2>

              </div>

              <div>

                <p className="text-xl leading-9">
                  Client satisfaction is central to Elfreyzz's
                  approach to professional service.
                </p>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  The company is committed to treating clients,
                  employees, suppliers and other stakeholders with
                  honesty, dignity, fairness and respect while
                  continuously improving the quality of its services.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ======================================================
            EXISTING TESTIMONIAL COMPONENT
        ====================================================== */}

        <section className="pb-12">

          <Testimonials />

        </section>

        {/* ======================================================
            ADDITIONAL REVIEW CARDS
        ====================================================== */}

        <section className="pb-24 sm:pb-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-6 md:grid-cols-3">

              {[
                {
                  number: "01",
                  client: "Client / Organisation",
                  review:
                    "Replace this placeholder with a verified customer review describing the experience of working with Elfreyzz.",
                },

                {
                  number: "02",
                  client: "Client / Organisation",
                  review:
                    "Replace this placeholder with a verified customer review focusing on professionalism, quality, communication or project delivery.",
                },

                {
                  number: "03",
                  client: "Client / Organisation",
                  review:
                    "Replace this placeholder with a verified customer review describing the value and experience received from Elfreyzz.",
                },
              ].map((item) => (

                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >

                  <div className="flex items-start justify-between">

                    <span className="font-mono text-sm text-primary">
                      {item.number}
                    </span>

                    <span className="text-4xl font-serif leading-none text-primary/20">
                      "
                    </span>

                  </div>

                  <p className="mt-6 text-sm leading-7 text-muted-foreground">
                    {item.review}
                  </p>

                  <div className="mt-8 border-t border-border pt-6">

                    <p className="text-sm font-semibold">
                      {item.client}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Client
                    </p>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ======================================================
            FINAL CTA
        ====================================================== */}

        <section className="relative overflow-hidden border-t border-border py-24 sm:py-32">

          <div className="absolute inset-0 bg-primary/[0.04]" />

          <div className="absolute left-1/2 top-0 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              ◆
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Your Project Could Be Next
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Have a project
              <br />
              in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Whether you are planning a building, civil works,
              road, surveying, structural or construction supply
              project, talk to the Elfreyzz team about your
              requirements.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Request a Consultation
                <span className="ml-2">
                  →
                </span>
              </a>

              <a
                href="tel:+254714544535"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                Call +254 714 544 535
              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />

      <BackToTop />

    </div>
  );
};

export default PastExperiences;
