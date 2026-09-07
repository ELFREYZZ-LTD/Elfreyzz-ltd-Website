
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
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

  return (
    <div
      className="min-h-screen overflow-hidden bg-[#2B2E33] text-white"
      style={
        {
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
      }
    >
      <Header />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden bg-[#2B2E33]">
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#A33615]/10 blur-[110px]" />

          <div className="absolute right-[-160px] top-[-100px] h-[520px] w-[520px] rounded-full bg-[#55585C]/45 blur-[120px]" />

          <div className="absolute bottom-[-180px] left-[35%] h-[420px] w-[420px] rounded-full bg-[#ED932C]/[0.06] blur-[120px]" />

          <div className="absolute inset-x-0 top-0 h-px bg-[#55585C]/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Hero copy */}
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#55585C] bg-[#34373B]/80 px-4 py-2 text-sm font-medium text-[#B8B8B8] shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#ED932C] shadow-[0_0_12px_rgba(237,147,44,0.45)]" />

                Professional Construction Solutions
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Building solutions
                <span className="block bg-gradient-to-r from-[#C05A1E] via-[#ED932C] to-[#F0A34A] bg-clip-text text-transparent">
                  designed to last.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#B8B8B8] sm:text-xl">
                From roads and civil infrastructure to structures, water
                systems, engineering surveys and construction supplies, we
                deliver dependable solutions built around quality,
                functionality and long-term value.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#A33615] via-[#C05A1E] to-[#ED932C] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#A33615]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#A33615]/30"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5.5A2.5 2.5 0 015.5 3H7l2 5-2 1.5A15 15 0 0014.5 17L16 15l5 2v1.5a2.5 2.5 0 01-2.5 2.5C10.94 21 3 13.06 3 5.5z"
                    />
                  </svg>

                  Request a Consultation

                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6l6 6-6 6"
                    />
                  </svg>
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#55585C] bg-[#34373B]/40 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ED932C]/60 hover:bg-[#34373B] hover:text-[#F0A34A]"
                >
                  Explore Our Services

                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6l6 6-6 6"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-[#55585C] pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-2xl font-bold text-white">8+</p>

                  <p className="mt-1 text-sm text-[#B8B8B8]">
                    Core Services
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-white">Quality</p>

                  <p className="mt-1 text-sm text-[#B8B8B8]">
                    Driven Delivery
                  </p>
                </div>

                <div className="hidden sm:block">
                  <p className="text-2xl font-bold text-white">Kenya</p>

                  <p className="mt-1 text-sm text-[#B8B8B8]">
                    & Beyond
                  </p>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#A33615]/20 via-transparent to-[#55585C]/40 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#55585C] bg-[#34373B] p-3 shadow-2xl shadow-black/25">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85"
                    alt="Construction project"
                    className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2E33]/90 via-[#2B2E33]/15 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#F0A34A]">
                      ELFREYZZ LTD.
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white">
                      Quality construction. Practical solutions.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="bg-[#3B3D40] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ED932C]">
                What We Do
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Construction expertise with a practical approach.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-[#B8B8B8]">
                ELFREYZZ Ltd. provides professional construction services
                across building, roads, civil works, infrastructure,
                procurement and related construction solutions. We combine
                technical knowledge, practical experience and dependable
                coordination to help clients move projects from concept to
                completion.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#B8B8B8]">
                Our services are structured to support both individual project
                requirements and broader construction programmes, giving
                clients access to construction expertise, materials,
                equipment and project support through one dependable partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#2B2E33] py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#ED932C]/[0.035] blur-[120px]" />

          <div className="absolute right-[-180px] bottom-[10%] h-[450px] w-[450px] rounded-full bg-[#55585C]/30 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ED932C]">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Complete solutions for construction and infrastructure.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#B8B8B8]">
              Explore our range of construction, civil works, engineering,
              supply and equipment services.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const isOpen = openService === index;

              return (
                <div
                  key={service.number}
                  className={`group relative overflow-hidden rounded-2xl border bg-[#34373B] transition-all duration-500 ${
                    isOpen
                      ? "border-[#ED932C]/70 shadow-xl shadow-[#A33615]/15"
                      : "border-[#55585C] shadow-lg shadow-black/10 hover:-translate-y-2 hover:border-[#C05A1E]/70 hover:shadow-xl hover:shadow-black/20"
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B2E33]/90 via-[#2B2E33]/20 to-transparent" />

                    {/* Icon */}
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-[#2B2E33]/60 text-[#F0A34A] shadow-lg backdrop-blur-md">
                      {service.icon}
                    </div>

                    {/* Number */}
                    <span className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-[#2B2E33]/65 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#ED932C]">
                      {service.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#B8B8B8]">
                      {service.short}
                    </p>

                    {/* Expandable details */}
                    <div
                      className={`grid transition-all duration-500 ${
                        isOpen
                          ? "mt-4 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[#55585C] pt-4">
                          <p className="text-sm leading-6 text-[#B8B8B8]">
                            {service.details}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => toggleService(index)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#F0A34A]"
                      >
                        {isOpen ? "Show Less" : "Learn More"}

                        <svg
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <Link
                        to="/contact"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#55585C] bg-[#2B2E33] text-[#ED932C] transition-all duration-300 hover:border-[#ED932C]/70 hover:bg-gradient-to-br hover:from-[#A33615] hover:to-[#ED932C] hover:text-white"
                        aria-label={`Contact us about ${service.title}`}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14m-6-6l6 6-6 6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE
      ========================================================== */}
      <section className="bg-[#3B3D40] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] border border-[#55585C] bg-[#34373B] shadow-2xl shadow-black/15 lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[420px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=1400&q=85"
                alt="Civil engineering and construction work"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#2B2E33]/80 via-[#2B2E33]/25 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <span className="inline-flex rounded-full border border-white/15 bg-[#2B2E33]/60 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-md">
                  Built for Performance
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ED932C]">
                One Construction Partner
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                From infrastructure to materials, we support the entire
                construction journey.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#B8B8B8]">
                Our combination of construction expertise, engineering support,
                procurement capability and equipment solutions enables us to
                provide practical services around the needs of each project.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Quality-focused execution",
                  "Practical engineering solutions",
                  "Reliable procurement",
                  "Project-focused coordination",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#ED932C]/30 bg-[#2B2E33] text-[#ED932C]">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12l4 4L19 6"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-medium text-[#B8B8B8]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#A33615] via-[#C05A1E] to-[#ED932C] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#A33615]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#A33615]/25"
                >
                  Discuss Your Project

                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6l6 6-6 6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS STRIP
      ========================================================== */}
      <section className="border-y border-[#55585C] bg-[#2B2E33] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                text: "We begin by understanding the project, requirements and expected outcomes.",
              },
              {
                number: "02",
                title: "Plan",
                text: "We develop a practical approach around scope, resources, technical needs and timelines.",
              },
              {
                number: "03",
                title: "Deliver",
                text: "Our teams coordinate the required construction activities with attention to quality and safety.",
              },
              {
                number: "04",
                title: "Complete",
                text: "We focus on delivering functional results that provide lasting value to our clients.",
              },
            ].map((step) => (
              <div key={step.number} className="relative">
                <span className="text-5xl font-bold text-[#ED932C]/20">
                  {step.number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#B8B8B8]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#2B2E33] py-20 text-white lg:py-24">
        {/* CTA glow */}
        <div className="pointer-events-none absolute left-[-160px] top-[-160px] h-[430px] w-[430px] rounded-full bg-[#A33615]/12 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-220px] right-[-120px] h-[520px] w-[520px] rounded-full bg-[#ED932C]/[0.07] blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F0A34A]">
            Ready to Get Started?
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something that lasts.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#B8B8B8]">
            Tell us about your construction, civil works, infrastructure or
            supply requirements and let&apos;s discuss how ELFREYZZ Ltd. can
            support your project.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#A33615] via-[#C05A1E] to-[#ED932C] px-7 py-4 font-semibold text-white shadow-xl shadow-[#A33615]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#A33615]/30"
            >
              Request a Consultation

              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>
            </Link>

            <a
              href="tel:+254714544535"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#55585C] bg-[#34373B]/50 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ED932C]/60 hover:bg-[#34373B]"
            >
              <svg
                className="h-5 w-5 text-[#ED932C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5.5A2.5 2.5 0 015.5 3H7l2 5-2 1.5A15 15 0 0014.5 17L16 15l5 2v1.5a2.5 2.5 0 01-2.5 2.5C10.94 21 3 13.06 3 5.5z"
                />
              </svg>

              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <BackToTop />

      {/* =========================================================
          ANIMATIONS
      ========================================================== */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.7s ease-out both;
        }

        @keyframes softGlow {
          0%,
          100% {
            opacity: 0.5;
          }

          50% {
            opacity: 0.8;
          }
        }

        .soft-glow {
          animation: softGlow 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
