import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PastProjects } from "@/components/PastProjects";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Home = () => {
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
      title: "Web Development",
      description:
        "High-performance websites and web applications designed around your users, business goals, and brand.",
      icon: "⌘",
    },
    {
      number: "02",
      title: "Software Solutions",
      description:
        "Custom digital systems that simplify complex workflows, eliminate repetitive tasks, and help teams work smarter.",
      icon: "◈",
    },
    {
      number: "03",
      title: "AI & Automation",
      description:
        "Practical AI and automation solutions that turn manual processes into faster, more intelligent workflows.",
      icon: "✦",
    },
    {
      number: "04",
      title: "Data & Analytics",
      description:
        "Transform scattered data into useful insights, dashboards, and decisions your team can act on.",
      icon: "◌",
    },
  ];

  const advantages = [
    {
      title: "Built around the problem",
      description:
        "We start with what needs to be solved, not with a predetermined technology stack or template.",
    },
    {
      title: "Designed for real users",
      description:
        "Every solution is shaped around usability, clarity, performance, and the people who will actually use it.",
    },
    {
      title: "Technology with purpose",
      description:
        "Modern technology only matters when it creates a measurable improvement for the business behind it.",
    },
    {
      title: "Made to evolve",
      description:
        "Solutions are built with flexibility in mind, so they can grow as your users, requirements, and ambitions change.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discover",
      description:
        "We understand the challenge, users, requirements, and outcomes that matter.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "We turn the problem into a clear solution, experience, and technical direction.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "We develop, test, refine, and bring the solution to life with attention to detail.",
    },
    {
      step: "04",
      title: "Launch & Improve",
      description:
        "We launch with confidence and continue improving as real-world feedback comes in.",
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Python",
    "Node.js",
    "SQL",
    "AI",
    "Automation",
    "Cloud",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Skip to content
      </a>

      <Header
        onThemeToggle={toggleTheme}
        isDark={isDark}
      />

      <main id="main" tabIndex={-1}>

        {/* HERO */}
        <Hero />

        {/* TRUST / CREDIBILITY */}
        <section className="border-y border-border/60 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
              <p className="text-center text-sm font-medium text-muted-foreground md:text-left">
                Technology built to solve real business problems.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold text-muted-foreground">
                <span>WEB</span>
                <span>SOFTWARE</span>
                <span>AI</span>
                <span>AUTOMATION</span>
                <span>DATA</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="relative overflow-hidden py-24 sm:py-32"
        >
          <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                What we do
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Digital solutions built around{" "}
                <span className="text-primary">
                  what matters.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                From websites and software to AI-powered workflows and
                data solutions, we turn complex requirements into
                technology people can actually use.
              </p>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="group bg-background p-8 transition-all duration-300 hover:bg-muted/50"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-3xl font-light text-primary">
                      {service.icon}
                    </span>

                    <span className="text-xs font-mono text-muted-foreground">
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

        {/* WHY ELFREYZZ */}
        <section
          id="why-us"
          className="bg-muted/40 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Why Elfreyzz
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  We don't build technology{" "}
                  <span className="text-primary">
                    just to build it.
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  The best digital products aren't defined by how
                  complicated they are. They're defined by how much
                  easier they make something that used to be difficult.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
                >
                  Let's solve something together
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="grid gap-0 divide-y divide-border rounded-2xl border border-border bg-background">
                {advantages.map((advantage, index) => (
                  <div
                    key={advantage.title}
                    className="group grid gap-4 p-7 sm:grid-cols-[40px_1fr] sm:p-8"
                  >
                    <span className="font-mono text-sm text-primary">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-lg font-semibold">
                        {advantage.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <PastProjects />

        {/* PROCESS */}
        <section
          id="process"
          className="py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                How we work
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                From idea to{" "}
                <span className="text-primary">
                  something real.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                A straightforward process keeps the work focused,
                collaborative, and aligned with the outcome you're
                trying to achieve.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="relative">
                  <span className="text-5xl font-bold text-primary/15">
                    {item.step}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-border">
                    <div className="h-px w-10 bg-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="border-y border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Our toolkit
                </p>

                <h2 className="text-2xl font-bold sm:text-3xl">
                  Modern technology. Practical application.
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  We use the right tools for the problem rather than
                  forcing every project into the same technical stack.
                </p>
              </div>

              <div className="flex max-w-2xl flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="contact"
          className="relative overflow-hidden py-24 sm:py-32"
        >
          <div className="absolute inset-0 -z-10 bg-primary/[0.04]" />

          <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Start something meaningful
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Have a problem worth{" "}
              <span className="text-primary">
                solving?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Whether you have a clear product idea or simply know
              something in your business could work better, let's
              figure out what technology can do about it.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@elfreyzz.com"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                Start a conversation
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                Explore our work
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

export default Home;
