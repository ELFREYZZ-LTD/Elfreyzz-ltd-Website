import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const PastExperiences = () => {
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
   * ============================================================
   * PROJECT SHOWCASE
   * ============================================================
   *
   * These are temporary stock images from Unsplash.
   * They are NOT presented as actual Elfreyzz projects.
   *
   * Replace these images and descriptions with verified
   * Elfreyzz project photographs/details when available.
   */

  const projects = [
    {
      number: "01",
      category: "Building Construction",
      title: "Building Construction",
      description:
        "Building construction requires careful coordination across structural works, materials, site activities, and finishing. Elfreyzz provides construction solutions designed around client requirements and approved project plans.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85",
    },

    {
      number: "02",
      category: "Civil Works",
      title: "Civil Engineering & Infrastructure",
      description:
        "Civil works form an important part of our service offering, including roads, waterways, sewerage systems, and other infrastructure-related works.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85",
    },

    {
      number: "03",
      category: "Road Construction",
      title: "Road & Transport Infrastructure",
      description:
        "Road projects demand accurate planning, surveying, setting out, appropriate materials, and coordinated construction activities to achieve the required levels, gradients, and specifications.",
      image:
        "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1600&q=85",
    },

    {
      number: "04",
      category: "Structural Works",
      title: "Structural Construction",
      description:
        "Structural integrity is fundamental to successful building projects. Our structural consultancy and drawing services are intended to support stable and appropriately designed structures.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
    },

    {
      number: "05",
      category: "Engineering Survey",
      title: "Surveying & Site Setting Out",
      description:
        "Engineering survey works help establish the correct positions, levels, gradients, and alignment required for buildings, roads, waterways, and sewerage systems.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=85",
    },

    {
      number: "06",
      category: "Construction Supply",
      title: "Construction Materials & Supply",
      description:
        "Our capabilities extend beyond construction to the supply of building materials, construction materials, road survey equipment, logistics, and general goods and services.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=85",
    },
  ];

  /*
   * ============================================================
   * ADDITIONAL CUSTOMER REVIEWS
   * ============================================================
   *
   * Replace these placeholder reviews with verified customer
   * testimonials before publishing them as real endorsements.
   */

  const additionalReviews = [
    {
      name: "Client Review",
      role: "Verified Client",
      review:
        "Replace this placeholder with a verified customer review describing their experience working with Elfreyzz.",
    },

    {
      name: "Client Review",
      role: "Verified Client",
      review:
        "Replace this placeholder with a verified customer review highlighting the quality, professionalism, communication, or delivery of the service received.",
    },

    {
      name: "Client Review",
      role: "Verified Client",
      review:
        "Replace this placeholder with a verified customer review describing the value and overall experience of working with Elfreyzz.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* ======================================================
          ACCESSIBILITY
      ====================================================== */}

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* ======================================================
          HEADER
      ====================================================== */}

      <Header
        onThemeToggle={toggleTheme}
        isDark={isDark}
      />

      <main id="main" tabIndex={-1}>

        {/* ====================================================
            HERO
        ==================================================== */}

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

          {/* Ambient lighting */}
          <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[130px]" />

          <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-amber-500/5 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

            <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

              {/* Hero text */}

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-12 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    Past Experiences
                  </p>

                </div>

                <h1 className="mt-7 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Experience that
                  <br />
                  <span className="text-primary">
                    builds confidence.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Explore the construction disciplines, engineering
                  capabilities, and project environments that define
                  the work Elfreyzz is equipped to undertake.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Explore Our Experience

                    <span className="ml-2">
                      →
                    </span>
                  </a>

                  <a
                    href="#video"
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
                  >
                    Watch Video
                  </a>

                </div>

              </div>

              {/* Hero visual */}

              <div className="relative">

                <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-primary/10">

                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
                    alt="Construction site"
                    className="aspect-[4/5] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      Construction • Engineering • Supply
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                      Built around quality.
                    </p>

                  </div>

                </div>

                <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-2xl border border-primary/20 bg-primary/10 backdrop-blur-sm" />

              </div>

            </div>

          </div>

        </section>

        {/* ====================================================
            INTRODUCTION
        ==================================================== */}

        <section className="py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Experience
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  More than construction.
                  <br />
                  <span className="text-primary">
                    A complete capability.
                  </span>
                </h2>

              </div>

              <div className="max-w-3xl">

                <p className="text-xl leading-9">
                  Elfreyzz Ltd is a professional service provider
                  focused on construction matters, with capabilities
                  spanning buildings, roads, civil works, surveying,
                  structural consultancy, and construction supply.
                </p>

                <p className="mt-7 text-base leading-8 text-muted-foreground">
                  Since its establishment, the company has undertaken
                  projects within Kenya and developed capabilities
                  intended to support clients across different stages
                  of construction and development.
                </p>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  The showcase below uses temporary professional
                  construction imagery to illustrate the types of
                  environments and disciplines relevant to Elfreyzz's
                  service offering. Actual company project photographs
                  can replace these images as they become available.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ====================================================
            PROJECT SHOWCASE
        ==================================================== */}

        <section
          id="projects"
          className="scroll-mt-20 border-y border-border bg-muted/30 py-24 sm:py-32"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* Section heading */}

            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

              <div className="max-w-3xl">

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Project Showcase
                  </p>

                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  The work we are built to deliver.
                </h2>

              </div>

              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                Temporary stock photography is currently being used
                to showcase each service area. Verified Elfreyzz
                project images can replace these visuals later.
              </p>

            </div>

            {/* ==================================================
                PROJECT CARDS
            ================================================== */}

            <div className="mt-16 grid gap-7 lg:grid-cols-2">

              {projects.map((project, index) => (

                <article
                  key={project.number}
                  className={`group overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 ${
                    index === 0
                      ? "lg:col-span-2"
                      : ""
                  }`}
                >

                  {/* Image */}

                  <div
                    className={`relative overflow-hidden ${
                      index === 0
                        ? "aspect-[16/7]"
                        : "aspect-[16/10]"
                    }`}
                  >

                    <img
                      src={project.image}
                      alt={project.title}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Category */}

                    <div className="absolute left-6 top-6">

                      <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                        {project.category}
                      </span>

                    </div>

                    {/* Number */}

                    <div className="absolute bottom-6 right-6">

                      <span className="font-mono text-sm text-white/70">
                        {project.number}
                      </span>

                    </div>

                    {/* Stock label */}

                    <div className="absolute bottom-6 left-6">

                      <span className="rounded-full bg-black/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/70 backdrop-blur-md">
                        Showcase Image
                      </span>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-7 sm:p-9">

                    <div className="flex items-start justify-between gap-6">

                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {project.title}
                      </h3>

                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-primary/50 transition-all duration-300 group-hover:scale-150 group-hover:bg-primary" />

                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-7 flex items-center gap-3">

                      <span className="h-px w-8 bg-primary transition-all duration-500 group-hover:w-16" />

                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                        Elfreyzz Capability
                      </span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ====================================================
            CAPABILITIES STRIP
        ==================================================== */}

        <section className="border-b border-border bg-background py-20">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid overflow-hidden rounded-[2rem] border border-border sm:grid-cols-2 lg:grid-cols-4">

              <div className="border-b border-border p-8 sm:border-r lg:border-b-0">

                <span className="font-mono text-3xl font-bold text-primary">
                  01
                </span>

                <h3 className="mt-5 text-lg font-bold">
                  Construction
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Building construction and civil works.
                </p>

              </div>

              <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">

                <span className="font-mono text-3xl font-bold text-primary">
                  02
                </span>

                <h3 className="mt-5 text-lg font-bold">
                  Engineering
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Structural consultancy and technical services.
                </p>

              </div>

              <div className="border-b border-border p-8 sm:border-r sm:border-b-0">

                <span className="font-mono text-3xl font-bold text-primary">
                  03
                </span>

                <h3 className="mt-5 text-lg font-bold">
                  Surveying
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Engineering survey and site setting out.
                </p>

              </div>

              <div className="p-8">

                <span className="font-mono text-3xl font-bold text-primary">
                  04
                </span>

                <h3 className="mt-5 text-lg font-bold">
                  Supply
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Construction materials, equipment, and logistics.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ====================================================
            YOUTUBE VIDEO
        ==================================================== */}

        <section
          id="video"
          className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
        >

          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <div className="flex items-center justify-center gap-4">

                <span className="h-px w-10 bg-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Watch &amp; Discover
                </p>

                <span className="h-px w-10 bg-primary" />

              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                See the work behind the name.
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Showcase your company video, project walkthrough,
                construction footage, or corporate presentation here.
              </p>

            </div>

            {/* Video */}

            <div className="mx-auto mt-14 max-w-5xl">

              <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">

                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Elfreyzz Ltd Construction Video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

              </div>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Replace{" "}
                <span className="font-mono">
                  YOUR_VIDEO_ID
                </span>{" "}
                with the actual YouTube video ID.
              </p>

            </div>

          </div>

        </section>

        {/* ====================================================
            TESTIMONIAL HEADER
        ==================================================== */}

        <section className="border-t border-border pt-24 sm:pt-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Client Experience
                  </p>

                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Built on relationships.
                </h2>

              </div>

              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                Client satisfaction is central to Elfreyzz's
                approach. This section can showcase genuine
                feedback from customers and organisations that
                have worked with the company.
              </p>

            </div>

          </div>

        </section>

        {/* ====================================================
            EXISTING TESTIMONIALS
        ==================================================== */}

        <section className="pb-10">

          <Testimonials />

        </section>

        {/* ====================================================
            THREE NEW TESTIMONIAL CARDS
        ==================================================== */}

        <section className="pb-24 sm:pb-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-5 md:grid-cols-3">

              {additionalReviews.map((review, index) => (

                <article
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >

                  {/* Decorative quote */}

                  <div className="font-serif text-6xl leading-none text-primary/20">
                    “
                  </div>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {review.review}
                  </p>

                  <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      {review.name.charAt(0)}
                    </div>

                    <div>

                      <p className="text-sm font-semibold">
                        {review.name}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {review.role}
                      </p>

                    </div>

                  </div>

                  <span className="absolute right-7 top-7 font-mono text-xs text-primary/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ====================================================
            FINAL CTA
        ==================================================== */}

        <section className="relative overflow-hidden border-t border-border py-24 sm:py-32">

          <div className="absolute inset-0 bg-primary/[0.04]" />

          <div className="absolute left-1/2 top-0 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              ◆
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Start Your Project
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Ready to build
              <br className="hidden sm:block" />
              something great?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Discuss your construction, civil works, surveying,
              structural consultancy, or construction supply
              requirements with Elfreyzz.
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
