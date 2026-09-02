import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const About = () => {
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

  const coreServices = [
    {
      number: "01",
      title: "Civil Construction",
      description:
        "We undertake civil works including roads, waterways, and sewerage systems, with a growing scope of construction capabilities.",
      icon: "⌁",
    },
    {
      number: "02",
      title: "Structural Drawings & Consultancy",
      description:
        "We provide structural analysis consultancy and structural drawings developed to suit clients' architectural needs and requirements.",
      icon: "⌗",
    },
    {
      number: "03",
      title: "Site Inspections & Construction",
      description:
        "We carry out site inspections to assess foundation suitability and undertake building construction in accordance with approved drawings.",
      icon: "▦",
    },
    {
      number: "04",
      title: "Engineering Survey Works",
      description:
        "We carry out engineering surveys to help ensure buildings, roads, waterways, and sewerage systems are correctly set out and positioned according to approved designs.",
      icon: "⌖",
    },
  ];

  const additionalServices = [
    "Building materials supply",
    "Construction materials supply",
    "Road survey equipment",
    "Planning and evaluating construction projects",
    "Planning and evaluating architectural projects",
    "Planning and evaluating development projects",
    "Logistics",
    "General supplies of goods and services",
  ];

  const values = [
    {
      title: "Teamwork",
      description:
        "We believe strong results come from people working together toward a shared objective.",
    },
    {
      title: "Integrity",
      description:
        "We conduct our business with honesty, fairness, dignity, and respect while keeping our commitments.",
    },
    {
      title: "Initiative",
      description:
        "We encourage proactive thinking and responsible action in addressing project and client needs.",
    },
    {
      title: "Innovativeness",
      description:
        "We embrace new technology and continuously seek better ways to deliver products, services, and construction solutions.",
    },
    {
      title: "Professionalism",
      description:
        "We approach our work with the competence, discipline, responsibility, and standards expected of a professional service provider.",
    },
    {
      title: "Passion",
      description:
        "We are committed to the work we do and to delivering construction solutions that create value for our clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* =====================================================
          ACCESSIBILITY
      ===================================================== */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* =====================================================
          HEADER
      ===================================================== */}
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
          <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px]" />

          {/* Secondary accent */}
          <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-amber-500/5 blur-[110px]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

            <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

              {/* Hero copy */}
              <div>

                <div className="mb-7 flex items-center gap-4">

                  <span className="h-px w-12 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    About Elfreyzz
                  </p>

                </div>

                <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Building quality
                  <br />
                  <span className="text-primary">
                    construction solutions.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Elfreyzz Ltd is a professional construction service
                  provider established to deliver quality construction
                  solutions in Kenya and beyond. Our work spans
                  buildings, roads, civil works, engineering surveys,
                  structural consultancy, and the supply of construction
                  materials and equipment.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Talk to Us

                    <span
                      className="ml-2"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>

                  <a
                    href="#company"
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  >
                    Discover Elfreyzz
                  </a>

                </div>

              </div>

              {/* Company snapshot */}
              <div className="relative">

                <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-2xl shadow-primary/5 backdrop-blur-sm sm:p-10">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Company Snapshot
                  </p>

                  <div className="mt-8 divide-y divide-border">

                    <div className="flex items-center justify-between gap-6 py-5 first:pt-0">
                      <span className="text-sm text-muted-foreground">
                        Established
                      </span>

                      <span className="text-right font-semibold">
                        30 October 2018
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-6 py-5">
                      <span className="text-sm text-muted-foreground">
                        Company Type
                      </span>

                      <span className="text-right font-semibold">
                        Private Limited Company
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-6 py-5">
                      <span className="text-sm text-muted-foreground">
                        Registration
                      </span>

                      <span className="text-right font-semibold">
                        Companies Act 2015
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-6 py-5 last:pb-0">
                      <span className="text-sm text-muted-foreground">
                        Sector
                      </span>

                      <span className="text-right font-semibold">
                        Construction &amp; Civil Works
                      </span>
                    </div>

                  </div>

                </div>

                <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-2xl border border-amber-500/20 bg-amber-500/5" />

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            COMPANY STORY
        ===================================================== */}
        <section
          id="company"
          className="scroll-mt-20 py-24 sm:py-32"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">

              {/* Section heading */}
              <div className="lg:sticky lg:top-28">

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Who We Are
                  </p>

                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  A construction company built around{" "}
                  <span className="text-primary">
                    quality.
                  </span>
                </h2>

              </div>

              {/* Story */}
              <div className="max-w-3xl">

                <p className="text-xl leading-9 text-foreground">
                  Elfreyzz Ltd was fully registered under the Companies
                  Act 2015 on 30th October 2018 as a private limited
                  company and established as a professional service
                  provider on construction matters.
                </p>

                <p className="mt-7 text-base leading-8 text-muted-foreground">
                  The company was established to provide quality
                  construction solutions in Kenya and beyond. Since
                  its inception, Elfreyzz has grown through undertaking
                  projects within Kenya, providing employment, and
                  delivering construction services to its clients.
                </p>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  Our areas of work include the construction of
                  buildings, roads, and civil works, together with
                  the supply of general construction items across
                  categories such as hardware materials, construction
                  materials, and road survey equipment.
                </p>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  Elfreyzz is also registered with the National
                  Construction Authority (NCA) and duly licensed.
                  The company has pursued a comprehensive brand
                  strategy centered on continuous innovation and
                  staying responsive to developments within the
                  construction industry.
                </p>

                <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-7">

                  <div className="flex gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      ◆
                    </div>

                    <div>

                      <p className="font-semibold">
                        Value-driven solutions
                      </p>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        Through our networking capabilities, we seek
                        to procure and supply product solutions that
                        provide clients with value for money and
                        access to quality construction resources.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            WHAT WE DO
        ===================================================== */}
        <section className="border-y border-border bg-muted/30 py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-10 bg-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  What We Do
                </p>

              </div>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Construction expertise across{" "}
                <span className="text-primary">
                  multiple disciplines.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Our services bring together construction, civil works,
                engineering, surveying, consultancy, and supply
                capabilities to address different requirements across
                the construction and development process.
              </p>

            </div>

            {/* Main services */}
            <div className="mt-16 grid gap-5 md:grid-cols-2">

              {coreServices.map((service) => (

                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-10"
                >

                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

                  <div className="relative">

                    <div className="flex items-start justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
                        {service.icon}
                      </div>

                      <span className="font-mono text-sm text-primary">
                        {service.number}
                      </span>

                    </div>

                    <h3 className="mt-8 text-2xl font-bold tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-8 h-px w-full bg-border" />

                    <Link
                      to="/services"
                      className="mt-6 inline-flex items-center text-sm font-semibold text-primary"
                    >
                      Explore our services

                      <span
                        className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            ADDITIONAL CAPABILITIES
        ===================================================== */}
        <section className="py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Beyond Construction
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Supporting projects beyond the building itself.
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  Our capabilities extend into the supply, planning,
                  logistics, and supporting services that construction
                  and development projects require.
                </p>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {additionalServices.map((service, index) => (

                  <div
                    key={service}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                  >

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium">
                      {service}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            WHY ELFREYZZ
        ===================================================== */}
        <section className="border-y border-border bg-muted/30 py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Why Elfreyzz
                  </p>

                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  The principles behind our work.
                </h2>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  Our approach is shaped by a commitment to clients,
                  employees, suppliers, shareholders, and the wider
                  society we operate within.
                </p>

              </div>

              <div className="space-y-4">

                <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      ✓
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        Client Satisfaction
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Client satisfaction is central to our existence.
                        We seek to exceed customer expectations through
                        continuous improvement of our services and quality.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      ◆
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        Integrity
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        We aim to conduct business with honesty,
                        fairness, dignity, and respect and to keep
                        our promises while operating according to
                        established ethical principles.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      ↗
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        People &amp; Professionalism
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Our staff are a foundation of the company's
                        excellence and strength. We value experienced,
                        dedicated, and committed professionals and
                        support their development through training,
                        tools, and support.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      ✦
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        Innovation
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        We are committed to embracing new technology
                        in the products, services, processes, and
                        value-chain systems we use to provide quality
                        solutions.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            VISION & MISSION
        ===================================================== */}
        <section className="relative overflow-hidden py-24 sm:py-32">

          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-6 lg:grid-cols-2">

              {/* Vision */}
              <div className="relative overflow-hidden rounded-3xl bg-primary p-9 text-primary-foreground shadow-2xl shadow-primary/20 sm:p-12">

                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-foreground/10 blur-3xl" />

                <div className="relative">

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">
                    Our Vision
                  </p>

                  <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                    To be a leading world-class construction company in East Africa.
                  </h2>

                </div>

              </div>

              {/* Mission */}
              <div className="rounded-3xl border border-border bg-card p-9 sm:p-12">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Mission
                </p>

                <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Modern solutions.
                  <br />
                  Affordable construction.
                </h2>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  To provide modern and affordable construction
                  solutions that integrate with today's needs and
                  upcoming technologies.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            CORE VALUES
        ===================================================== */}
        <section className="border-y border-border bg-muted/30 py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                What We Value
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Principles that guide how we work.
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Our core values influence how we approach our clients,
                our people, our projects, and the wider relationships
                that support our business.
              </p>

            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {values.map((value, index) => (

                <article
                  key={value.title}
                  className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-primary/50 transition-all duration-300 group-hover:scale-150 group-hover:bg-primary" />

                  </div>

                  <h3 className="mt-8 text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {value.description}
                  </p>

                </article>

              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            QUALITY & STANDARDS
        ===================================================== */}
        <section className="py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-primary" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Quality &amp; Standards
                  </p>

                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Quality is part of the solution.
                </h2>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  We recognize that quality construction and quality
                  products are fundamental to delivering value. Our
                  product ranges are described by the company as
                  quality products approved by the Kenya Bureau of
                  Standards (KEBS).
                </p>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  We also focus on competitive pricing for the goods
                  we stock, with the objective of helping customers
                  reduce acquisition costs and improve their savings
                  and profitability.
                </p>

              </div>

              <div className="relative">

                <div className="rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-10">

                  <div className="grid gap-8 sm:grid-cols-2">

                    <div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        ✓
                      </div>

                      <h3 className="mt-5 font-bold">
                        Quality Focus
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        A commitment to quality products and services.
                      </p>

                    </div>

                    <div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        ◆
                      </div>

                      <h3 className="mt-5 font-bold">
                        Competitive Pricing
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Competitive pricing designed to support customer value.
                      </p>

                    </div>

                    <div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        ✦
                      </div>

                      <h3 className="mt-5 font-bold">
                        Innovation
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Openness to technology and continuous improvement.
                      </p>

                    </div>

                    <div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        ↗
                      </div>

                      <h3 className="mt-5 font-bold">
                        Client Value
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Solutions focused on delivering value for money.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            LOCATION
        ===================================================== */}
        <section className="border-y border-border bg-muted/30 py-16">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div className="flex items-start gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  ⌖
                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Our Location
                  </p>

                  <h2 className="mt-2 text-xl font-bold">
                    Kiambu Township
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Along Kiambu Road · Plot No. 589/1
                  </p>

                </div>

              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Contact Elfreyzz

                <span
                  className="ml-2"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="relative overflow-hidden py-24 sm:py-32">

          <div className="absolute inset-0 -z-10 bg-primary/[0.04]" />

          <div className="absolute left-1/2 top-0 -z-10 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
              ◆
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Let's Build
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Have a construction
              <br className="hidden sm:block" />
              project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Whether you are planning a building, road, civil works,
              structural project, survey, renovation, or require
              construction materials and related services, we would
              be glad to discuss your requirements.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

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

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />

      {/* =====================================================
          BACK TO TOP
      ===================================================== */}
      <BackToTop />

    </div>
  );
};

export default About;
