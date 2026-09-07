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

  const services = [
    {
      number: "01",
      title: "Access Roads",
      category: "Roads & Civil Works",
      short:
        "Construction and improvement of durable access roads for residential, commercial, institutional and industrial developments.",
      details:
        "We provide complete access road construction solutions, including site preparation, earthworks, grading, drainage, sub-base preparation, surfacing and finishing. Our approach focuses on durability, proper water management and dependable access throughout the life of the development.",
      image:
        "https://images.unsplash.com/photo-1590644365607-1c5a0e3c8e4a?auto=format&fit=crop&w=1400&q=85",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.7}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l6 2V8l-6-2m0 12V6m0 0L9 8"
          />
        </svg>
      ),
    },

    {
      number: "02",
      title: "Piped Water",
      category: "Water Infrastructure",
      short:
        "Reliable piped water infrastructure designed to support residential, commercial and institutional developments.",
      details:
        "Our piped water services cover the planning, installation and extension of water distribution systems. We work with appropriate pipework, fittings, valves and related infrastructure to create dependable water networks that meet project requirements.",
      image:
        "https://images.unsplash.com/photo-1581093458791-9d42e3c3e6c4?auto=format&fit=crop&w=1400&q=85",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.7}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.5S6.5 10.1 6.5 14.5a5.5 5.5 0 0011 0C17.5 10.1 12 3.5 12 3.5z"
          />
        </svg>
      ),
    },

    {
      number: "03",
      title: "Sewer Lines",
      category: "Drainage & Sewerage",
      short:
        "Professional sewer and drainage infrastructure designed for efficient wastewater collection and management.",
      details:
        "We undertake sewer line construction and associated drainage works, including excavation, pipe installation, connections, manholes and reinstatement. Our work emphasizes correct gradients, efficient flow and long-term system reliability.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.7}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7h16M4 12h16M4 17h16"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 4v16M16 4v16"
          />
        </svg>
      ),
    },

    {
      number: "04",
      title: "Structures",
      category: "Building & Construction",
      short:
        "Construction of quality structures with a strong focus on workmanship, durability, safety and functionality.",
      details:
        "We deliver building and structural construction works for a range of developments. From foundations and structural works through to finishing, our teams coordinate construction activities with close attention to quality, specifications, safety and project timelines.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.7}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"
          />
        </svg>
      ),
    },

    {
      number: "05",
      title: "Engineering Survey",
      category: "Survey & Engineering",
      short:
        "Engineering survey solutions supporting accurate planning, setting out and execution of construction projects.",
      details:
        "Our engineering survey services support construction teams with accurate site information and setting-out requirements. We provide survey support for roads, structures, infrastructure and other civil works to help projects progress with greater precision.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.7}
        >
          <circle cx="12" cy="12" r="7" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14M5 12h14"
          />
        </svg>
      ),
    },

    {
      number: "06",
      title: "Project Management",
      category: "Professional Services",
      short:
        "Structured project management focused on coordination, quality control, cost awareness and timely delivery.",
      details:
        "We coordinate construction activities from planning through implementation and completion. Our project management approach emphasizes effective communication, resource coordination, quality assurance, progress monitoring and adherence to project requirements.",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.7}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 19V5m0 14h16M8 15V9m4 6V6m4 9v-4"
          />
        </svg>
      ),
    },

    {
      number: "07",
      title: "Materials Supply",
      category: "Construction Supplies",
      short:
        "Supply of general construction products including hardware, construction materials and road survey equipment.",
      details:
        "Our procurement and supply capabilities allow us to source and deliver a broad range of construction-related products. These include hardware materials, construction materials and road survey equipment required by contractors, developers and other project stakeholders.",
      image:
        "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1400&q=85",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.7}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7h18M5 7v12h14V7M8 7V4h8v3M8 11h8M8 15h5"
          />
        </svg>
      ),
    },

    {
      number: "08",
      title: "Equipment Hire",
      category: "Plant & Equipment",
      short:
        "Access to construction equipment and machinery to support efficient execution of civil and building works.",
      details:
        "We provide equipment hire solutions for construction activities requiring dependable plant and machinery. Our services help contractors and project teams access the equipment they need while maintaining flexibility throughout project execution.",
      image:
        "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&w=1400&q=85",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.7}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 17h16M6 17V9h8l3 3v5M9 17v3m6-3v3M8 9V6h5"
          />
          <circle cx="8" cy="20" r="1.5" />
          <circle cx="16" cy="20" r="1.5" />
        </svg>
      ),
    },
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
    <div
      className="min-h-screen bg-[#2B2E33] text-white transition-colors duration-300"
      style={{
        "--elfreyzz-bg": "#2B2E33",
        "--elfreyzz-panel": "#34373B",
        "--elfreyzz-panel-light": "#3B3D40",
        "--elfreyzz-border": "#55585C",
        "--elfreyzz-text": "#FFFFFF",
        "--elfreyzz-muted": "#B8B8B8",
        "--elfreyzz-orange-dark": "#A33615",
        "--elfreyzz-orange-mid": "#C05A1E",
        "--elfreyzz-orange": "#ED932C",
        "--elfreyzz-orange-light": "#F0A34A",
      } as React.CSSProperties
    >

      {/* =====================================================
          ACCESSIBILITY
      ===================================================== */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#ED932C] focus:px-4 focus:py-2 focus:text-white"
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
        <section className="relative overflow-hidden border-b border-[#55585C] pt-20">

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
          <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#ED932C]/10 blur-[120px]" />

          {/* Secondary accent */}
          <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#ED932C]/5 blur-[110px]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

            <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

              {/* Hero copy */}
              <div>

                <div className="mb-7 flex items-center gap-4">

                  <span className="h-px w-12 bg-[#ED932C]" />

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ED932C]">
                    About Elfreyzz
                  </p>

                </div>

                <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Building quality
                  <br />
                  <span className="text-[#ED932C]">
                    construction solutions.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#B8B8B8] sm:text-xl">
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
                    className="inline-flex items-center justify-center rounded-xl bg-[#ED932C] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#ED932C]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
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
                    className="inline-flex items-center justify-center rounded-xl border border-[#55585C] bg-[#2B2E33] px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ED932C] hover:text-[#ED932C]"
                  >
                    Discover Elfreyzz
                  </a>

                </div>

              </div>

              {/* Company snapshot */}
              <div className="relative">

                <div className="rounded-3xl border border-[#55585C] bg-[#34373B]/80 p-8 shadow-2xl shadow-[#ED932C]/5 backdrop-blur-sm sm:p-10">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8B8B8]">
                    Company Snapshot
                  </p>

                  <div className="mt-8 divide-y divide-[#55585C]">

                    <div className="flex items-center justify-between gap-6 py-5 first:pt-0">
                      <span className="text-sm text-[#B8B8B8]">
                        Established
                      </span>

                      <span className="text-right font-semibold">
                        30 October 2018
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-6 py-5">
                      <span className="text-sm text-[#B8B8B8]">
                        Company Type
                      </span>

                      <span className="text-right font-semibold">
                        Private Limited Company
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-6 py-5">
                      <span className="text-sm text-[#B8B8B8]">
                        Registration
                      </span>

                      <span className="text-right font-semibold">
                        Companies Act 2015
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-6 py-5 last:pb-0">
                      <span className="text-sm text-[#B8B8B8]">
                        Sector
                      </span>

                      <span className="text-right font-semibold">
                        Construction &amp; Civil Works
                      </span>
                    </div>

                  </div>

                </div>

                <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-2xl border border-[#ED932C]/20 bg-[#ED932C]/5" />

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

                  <span className="h-px w-10 bg-[#ED932C]" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ED932C]">
                    Who We Are
                  </p>

                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  A construction company built around{" "}
                  <span className="text-[#ED932C]">
                    quality.
                  </span>
                </h2>

              </div>

              {/* Story */}
              <div className="max-w-3xl">

                <p className="text-xl leading-9 text-white">
                  Elfreyzz Ltd was fully registered under the Companies
                  Act 2015 on 30th October 2018 as a private limited
                  company and established as a professional service
                  provider on construction matters.
                </p>

                <p className="mt-7 text-base leading-8 text-[#B8B8B8]">
                  The company was established to provide quality
                  construction solutions in Kenya and beyond. Since
                  its inception, Elfreyzz has grown through undertaking
                  projects within Kenya, providing employment, and
                  delivering construction services to its clients.
                </p>

                <p className="mt-6 text-base leading-8 text-[#B8B8B8]">
                  Our areas of work include the construction of
                  buildings, roads, and civil works, together with
                  the supply of general construction items across
                  categories such as hardware materials, construction
                  materials, and road survey equipment.
                </p>

                <p className="mt-6 text-base leading-8 text-[#B8B8B8]">
                  Elfreyzz is also registered with the National
                  Construction Authority (NCA) and duly licensed.
                  The company has pursued a comprehensive brand
                  strategy centered on continuous innovation and
                  staying responsive to developments within the
                  construction industry.
                </p>

                <div className="mt-10 rounded-2xl border border-[#55585C] bg-[#3B3D40]/30 p-7">

                  <div className="flex gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ED932C]/10 text-[#ED932C]">
                      ◆
                    </div>

                    <div>

                      <p className="font-semibold">
                        Value-driven solutions
                      </p>

                      <p className="mt-2 text-sm leading-7 text-[#B8B8B8]">
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
        <section className="border-y border-[#55585C] bg-[#3B3D40]/30 py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-10 bg-[#ED932C]" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ED932C]">
                  What We Do
                </p>

              </div>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Construction expertise across{" "}
                <span className="text-[#ED932C]">
                  multiple disciplines.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#B8B8B8]">
                Our services bring together construction, civil works,
                engineering, surveying, consultancy, and supply
                capabilities to address different requirements across
                the construction and development process.
              </p>

            </div>

            {/* Main services — kept in sync with the Services page */}
            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-3xl border border-[#55585C] bg-[#34373B] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ED932C]/50 hover:shadow-xl hover:shadow-[#ED932C]/5 sm:p-7"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#ED932C]/5 blur-3xl transition-all duration-500 group-hover:bg-[#ED932C]/10" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ED932C]/10 text-[#ED932C]">
                        {service.icon}
                      </div>

                      <span className="font-mono text-sm text-[#ED932C]">
                        {service.number}
                      </span>
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#ED932C]">
                      {service.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[#B8B8B8]">
                      {service.short}
                    </p>

                    <div className="mt-6 h-px w-full bg-[#55585C]" />

                    <Link
                      to="/services"
                      className="mt-5 inline-flex items-center text-sm font-semibold text-[#ED932C] transition-colors hover:text-[#F0A34A]"
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
            WHY ELFREYZZ
        ===================================================== */}
        <section className="border-y border-[#55585C] bg-[#3B3D40]/30 py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-[#ED932C]" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ED932C]">
                    Why Elfreyzz
                  </p>

                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  The principles behind our work.
                </h2>

                <p className="mt-6 text-base leading-8 text-[#B8B8B8]">
                  Our approach is shaped by a commitment to clients,
                  employees, suppliers, shareholders, and the wider
                  society we operate within.
                </p>

              </div>

              <div className="space-y-4">

                <div className="rounded-3xl border border-[#55585C] bg-[#34373B] p-8 sm:p-10">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ED932C]/10 text-[#ED932C]">
                      ✓
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        Client Satisfaction
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#B8B8B8]">
                        Client satisfaction is central to our existence.
                        We seek to exceed customer expectations through
                        continuous improvement of our services and quality.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-[#55585C] bg-[#34373B] p-8 sm:p-10">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ED932C]/10 text-[#ED932C]">
                      ◆
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        Integrity
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#B8B8B8]">
                        We aim to conduct business with honesty,
                        fairness, dignity, and respect and to keep
                        our promises while operating according to
                        established ethical principles.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-[#55585C] bg-[#34373B] p-8 sm:p-10">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ED932C]/10 text-[#ED932C]">
                      ↗
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        People &amp; Professionalism
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#B8B8B8]">
                        Our staff are a foundation of the company's
                        excellence and strength. We value experienced,
                        dedicated, and committed professionals and
                        support their development through training,
                        tools, and support.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-[#55585C] bg-[#34373B] p-8 sm:p-10">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ED932C]/10 text-[#ED932C]">
                      ✦
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        Innovation
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#B8B8B8]">
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

          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#ED932C]/5 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-6 lg:grid-cols-2">

              {/* Vision */}
              <div className="relative overflow-hidden rounded-3xl bg-[#ED932C] p-9 text-white shadow-2xl shadow-[#ED932C]/20 sm:p-12">

                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

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
              <div className="rounded-3xl border border-[#55585C] bg-[#34373B] p-9 sm:p-12">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ED932C]">
                  Our Mission
                </p>

                <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Modern solutions.
                  <br />
                  Affordable construction.
                </h2>

                <p className="mt-6 text-base leading-8 text-[#B8B8B8]">
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
        <section className="border-y border-[#55585C] bg-[#3B3D40]/30 py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ED932C]">
                What We Value
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Principles that guide how we work.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#B8B8B8]">
                Our core values influence how we approach our clients,
                our people, our projects, and the wider relationships
                that support our business.
              </p>

            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {values.map((value, index) => (

                <article
                  key={value.title}
                  className="group rounded-3xl border border-[#55585C] bg-[#34373B] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ED932C]/30 hover:shadow-lg"
                >

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-xs text-[#ED932C]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#ED932C]/50 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#ED932C]" />

                  </div>

                  <h3 className="mt-8 text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#B8B8B8]">
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

                  <span className="h-px w-10 bg-[#ED932C]" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ED932C]">
                    Quality &amp; Standards
                  </p>

                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Quality is part of the solution.
                </h2>

                <p className="mt-6 text-base leading-8 text-[#B8B8B8]">
                  We recognize that quality construction and quality
                  products are fundamental to delivering value. Our
                  product ranges are described by the company as
                  quality products approved by the Kenya Bureau of
                  Standards (KEBS).
                </p>

                <p className="mt-5 text-base leading-8 text-[#B8B8B8]">
                  We also focus on competitive pricing for the goods
                  we stock, with the objective of helping customers
                  reduce acquisition costs and improve their savings
                  and profitability.
                </p>

              </div>

              <div className="relative">

                <div className="rounded-3xl border border-[#55585C] bg-[#34373B] p-8 shadow-xl sm:p-10">

                  <div className="grid gap-8 sm:grid-cols-2">

                    <div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ED932C]/10 text-[#ED932C]">
                        ✓
                      </div>

                      <h3 className="mt-5 font-bold">
                        Quality Focus
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#B8B8B8]">
                        A commitment to quality products and services.
                      </p>

                    </div>

                    <div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ED932C]/10 text-[#ED932C]">
                        ◆
                      </div>

                      <h3 className="mt-5 font-bold">
                        Competitive Pricing
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#B8B8B8]">
                        Competitive pricing designed to support customer value.
                      </p>

                    </div>

                    <div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ED932C]/10 text-[#ED932C]">
                        ✦
                      </div>

                      <h3 className="mt-5 font-bold">
                        Innovation
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#B8B8B8]">
                        Openness to technology and continuous improvement.
                      </p>

                    </div>

                    <div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ED932C]/10 text-[#ED932C]">
                        ↗
                      </div>

                      <h3 className="mt-5 font-bold">
                        Client Value
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#B8B8B8]">
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
        <section className="border-y border-[#55585C] bg-[#3B3D40]/30 py-16">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div className="flex items-start gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ED932C]/10 text-[#ED932C]">
                  ⌖
                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ED932C]">
                    Our Location
                  </p>

                  <h2 className="mt-2 text-xl font-bold">
                    Kiambu Township
                  </h2>

                  <p className="mt-1 text-sm text-[#B8B8B8]">
                    Along Kiambu Road · Plot No. 589/1
                  </p>

                </div>

              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#55585C] bg-[#2B2E33] px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-[#ED932C] hover:text-[#ED932C]"
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

          <div className="absolute inset-0 -z-10 bg-[#ED932C]/[0.04]" />

          <div className="absolute left-1/2 top-0 -z-10 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-[#ED932C]/10 blur-[130px]" />

          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ED932C]/10 text-xl text-[#ED932C]">
              ◆
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#ED932C]">
              Let's Build
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Have a construction
              <br className="hidden sm:block" />
              project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#B8B8B8]">
              Whether you are planning a building, road, civil works,
              structural project, survey, renovation, or require
              construction materials and related services, we would
              be glad to discuss your requirements.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#ED932C] px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#ED932C]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
                className="inline-flex items-center justify-center rounded-xl border border-[#55585C] bg-[#2B2E33] px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#ED932C] hover:text-[#ED932C]"
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
