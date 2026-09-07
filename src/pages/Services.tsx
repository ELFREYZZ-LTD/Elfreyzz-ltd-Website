import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Services = () => {
  const [isDark, setIsDark] = useState(false);
  const [openService, setOpenService] = useState<number | null>(null);

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

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  const services = [
    {
      number: "01",
      title: "Access Roads",
      short:
        "Design and construction of paved and unpaved access roads, earthworks, drainage and surfacing.",
      details:
        "We provide access road solutions covering earthworks, grading, drainage, sub-base preparation, surfacing and associated road infrastructure. Our approach focuses on creating reliable access routes that can withstand practical site and traffic requirements.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
      category: "Infrastructure",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
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
      short:
        "Potable water network design, mainlines, distribution networks and connection works.",
      details:
        "Our piped water services cover water distribution infrastructure, mainlines, network extensions and connection works. We support projects requiring dependable water infrastructure from network planning through installation.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
      category: "Water Infrastructure",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
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
      short:
        "Gravity sewers, manholes, pumping stations and full sanitation solutions.",
      details:
        "We undertake sewer infrastructure works including gravity sewer lines, manholes, associated drainage infrastructure and pumping station requirements. Our focus is on functional sanitation systems designed around the needs of each project.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85",
      category: "Sanitation",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
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
      short:
        "Foundations, retaining walls, reinforced concrete structures and structural repairs.",
      details:
        "Our structural works include foundations, reinforced concrete construction, retaining walls and structural repair works. We combine careful preparation and construction practices to create dependable structural elements.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
      category: "Structural Works",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
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
      short:
        "Topographic surveys, setting out, and geotechnical coordination for accurate project delivery.",
      details:
        "Accurate site information is essential before construction begins. Our engineering survey services support topographic surveying, setting out and coordination with geotechnical requirements to help projects begin from reliable technical information.",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
      category: "Engineering",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
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
      short:
        "End-to-end project oversight, quality control, and stakeholder communication.",
      details:
        "We provide professional coordination throughout the project lifecycle, helping manage schedules, quality requirements, resources, site activities and communication between project stakeholders.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=85",
      category: "Management",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
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
      short:
        "Supply of high-quality construction materials including aggregates, sand, and pre-cast concrete items.",
      details:
        "We support construction projects with the supply of essential construction materials, including aggregates, sand and pre-cast concrete products. Our supply service is designed to help projects maintain continuity and reliable material availability.",
      image:
        "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1200&q=85",
      category: "Supply",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
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
      short:
        "Flexible hire options for a wide range of heavy construction machinery and equipment.",
      details:
        "Our equipment hire service provides flexible access to construction machinery and heavy equipment for projects that require additional site capacity without the need for direct equipment ownership.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85",
      category: "Equipment",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
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

      <Header
        onThemeToggle={toggleTheme}
        isDark={isDark}
      />

      <main id="main" tabIndex={-1}>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative min-h-[680px] overflow-hidden bg-slate-950 text-white">
          {/* Hero image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=90"
              alt="Construction project"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-slate-950/75" />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
          </div>

          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* Orange glow */}
          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[130px]" />

          <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-28 lg:px-8">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="animate-[fadeIn_0.8s_ease-out] mb-7 flex items-center gap-4">
                <span className="h-px w-14 bg-orange-500" />

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                  Our Services
                </p>
              </div>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl">
                Infrastructure.
                <br />

                <span className="text-orange-500">
                  Built properly.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Engineering, construction, infrastructure,
                materials and equipment solutions designed to
                keep your project moving from planning to
                completion.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
                >
                  Request a Consultation

                  <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-orange-400 hover:bg-white/10 hover:text-orange-300"
                >
                  Explore Services
                </a>
              </div>

              {/* Hero statistics */}
              <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
                <div>
                  <p className="text-3xl font-bold text-white">
                    08
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                    Core Services
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">
                    01
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                    Integrated Team
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-orange-400">
                    ✓
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                    Project Focused
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-background [clip-path:polygon(0_100%,100%_100%,100%_40%,75%_0,50%_35%,25%_5%,0_45%)]" />
        </section>

        {/* =====================================================
            INTRO - WARM SECTION
        ===================================================== */}
        <section className="relative overflow-hidden bg-orange-50 py-20 dark:bg-orange-950/20 sm:py-24">
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl dark:bg-orange-500/10" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600 dark:text-orange-400">
                  What We Do
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  One team.
                  <br />
                  Multiple capabilities.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
                  Our services cover essential infrastructure and
                  construction requirements — from roads and water
                  networks to sewer lines, structures, surveys,
                  project management, materials and equipment.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Infrastructure",
                    "Engineering",
                    "Construction",
                    "Supply",
                    "Equipment",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-orange-900 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES SECTION
        ===================================================== */}
        <section
          id="services"
          className="relative overflow-hidden bg-slate-100 py-24 dark:bg-slate-950 sm:py-32"
        >
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-orange-500" />

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                  Our Expertise
                </p>

                <span className="h-px w-10 bg-orange-500" />
              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Services that move{" "}
                <span className="text-orange-500">
                  projects forward.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Explore our eight core service areas. Select a
                service to reveal more information.
              </p>
            </div>

            {/* Service cards */}
            <div className="mt-16 grid gap-7 md:grid-cols-2">
              {services.map((service, index) => {
                const isOpen = openService === index;

                return (
                  <article
                    key={service.number}
                    className={`group relative overflow-hidden rounded-3xl border bg-white shadow-lg transition-all duration-500 dark:bg-slate-900 ${
                      isOpen
                        ? "border-orange-500/60 shadow-2xl shadow-orange-500/10"
                        : "border-slate-200 hover:-translate-y-2 hover:border-orange-400/50 hover:shadow-2xl dark:border-slate-800"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className={`h-full w-full object-cover transition-transform duration-700 ${
                          isOpen
                            ? "scale-110"
                            : "group-hover:scale-105"
                        }`}
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                      {/* Orange tint on hover */}
                      <div className="absolute inset-0 bg-orange-500/0 transition-colors duration-500 group-hover:bg-orange-500/10" />

                      {/* Number */}
                      <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-slate-950/60 font-mono text-sm font-bold text-white backdrop-blur-md">
                        {service.number}
                      </div>

                      {/* Category */}
                      <div className="absolute bottom-5 left-6">
                        <span className="rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                          {service.category}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="absolute bottom-5 right-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-orange-500">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 sm:p-8">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            {service.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                            {service.short}
                          </p>
                        </div>
                      </div>

                      {/* Dropdown button */}
                      <button
                        type="button"
                        onClick={() => toggleService(index)}
                        aria-expanded={isOpen}
                        className="mt-6 flex w-full items-center justify-between border-t border-slate-200 pt-5 text-left text-sm font-bold text-orange-600 transition-colors hover:text-orange-500 dark:border-slate-800 dark:text-orange-400"
                      >
                        <span>
                          {isOpen
                            ? "Hide details"
                            : "View service details"}
                        </span>

                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 transition-transform duration-300 dark:bg-orange-950/50 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path
                              d="M6 9l6 6 6-6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      {/* Animated dropdown */}
                      <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div
                            className={`pt-5 transition-all duration-500 ${
                              isOpen
                                ? "translate-y-0 opacity-100"
                                : "-translate-y-3 opacity-0"
                            }`}
                          >
                            <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
                              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                                {service.details}
                              </p>

                              <Link
                                to="/contact"
                                className="mt-5 inline-flex items-center text-sm font-bold text-orange-600 transition-all hover:gap-3 dark:text-orange-400"
                              >
                                Discuss this service
                                <span className="ml-2">
                                  →
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className={`h-1 origin-left bg-orange-500 transition-transform duration-500 ${
                        isOpen
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            IMAGE FEATURE SECTION
        ===================================================== */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
          <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* Image */}
              <div className="group relative overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1516939884455-1442c865e6f5?auto=format&fit=crop&w=1400&q=90"
                  alt="Civil engineering construction site"
                  loading="lazy"
                  className="h-[500px] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />

                    <span className="text-sm font-semibold">
                      Infrastructure & Civil Works
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                  Built For The Real World
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Technical capability meets practical execution.
                </h2>

                <p className="mt-7 text-lg leading-8 text-slate-400">
                  Successful infrastructure projects require
                  more than individual services. They require
                  coordination between engineering, materials,
                  equipment, site operations and project
                  management.
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    "Engineering-led project execution",
                    "Construction materials and equipment support",
                    "Infrastructure and civil works capability",
                    "Professional project coordination",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-sm font-bold text-orange-400">
                        0{index + 1}
                      </div>

                      <span className="text-sm font-medium text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
                >
                  Talk About Your Project
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICE PROCESS STRIP
        ===================================================== */}
        <section className="bg-orange-500 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-100">
                  How We Support Projects
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  From planning to execution.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Assess",
                    text: "Understand the site, requirements and technical needs.",
                  },
                  {
                    number: "02",
                    title: "Coordinate",
                    text: "Bring together engineering, materials and resources.",
                  },
                  {
                    number: "03",
                    title: "Deliver",
                    text: "Execute the work with focus on quality and reliability.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                  >
                    <p className="font-mono text-sm font-bold text-orange-100">
                      {item.number}
                    </p>

                    <h3 className="mt-3 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-orange-50/80">
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
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white sm:py-32 dark:bg-black">
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 shadow-2xl shadow-orange-500/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7"
              >
                <path
                  d="M3 21h18"
                  strokeLinecap="round"
                />
                <path d="M5 21V7l7-4 7 4v14" />
                <path d="M9 21v-5h6v5" />
                <path d="M9 9h1" />
                <path d="M14 9h1" />
                <path d="M9 12h1" />
                <path d="M14 12h1" />
              </svg>
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Start Your Project
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Have an infrastructure project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us what you need. Whether it involves roads,
              water, sewer systems, structures, engineering,
              project management, materials or equipment, we can
              discuss the practical way forward.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >
                Request a Consultation
                <span className="ml-2 text-lg">
                  →
                </span>
              </Link>

              <a
                href="tel:+254714544535"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:text-orange-400"
              >
                Call +254 714 544 535
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BackToTop />

      {/* Global animation styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
