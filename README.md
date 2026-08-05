# elfreyzz-ltd

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ELFREYZZ LTD — Civil & Infrastructure Construction</title>
  <meta name="description" content="ELFREYZZ LTD — End-to-end civil construction: access roads, sewer lines, piped water, structural works, and engineering surveys." />
  <meta property="og:title" content="ELFREYZZ LTD — Civil & Infrastructure Construction" />
  <meta property="og:description" content="Professional infrastructure delivery for developers & municipalities." />
  <meta name="theme-color" content="#ffffff" id="meta-theme-color">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">

  <!-- Font Awesome (CDN) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" xintegrity="sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!-- Calendly widget script (for inline embed) -->
  <script src="https://assets.calendly.com/assets/external/widget.js" defer></script>

  <style>
    /* ===================================================
        ELFREYZZ LTD — Single-file CSS (internal)
        Well-commented, CSS variables for theme + responsive
        =================================================== */

    /* ---------- Color system sampled from provided image ---------- */
    :root{
      --elf-primary: #a14134;   /* warm rust / maroon */
      --elf-accent:  #e59944;   /* golden orange */
      --elf-ink:     #1f2933;   /* dark slate for text */
      --bg:          #ffffff;
      --muted:       #6b7176;
      --card-bg:     #fbfbfb;
      --glass:       rgba(255,255,255,0.6);
      --radius:      12px;
      --container:   1100px;
      --transition:  320ms cubic-bezier(.2,.8,.2,1);
      --shadow-soft: 0 6px 24px rgba(16,24,40,0.08);
      --accent-contrast: #ffffff;
      --focus-ring:  3px solid rgba(229,153,68,0.22);
    }

    /* Dark theme overrides */
    :root[data-theme="dark"]{
      --bg:          #0b0f12;
      --muted:       #9aa1a7;
      --card-bg:     rgba(255,255,255,0.03);
      --glass:       rgba(16,20,24,0.6);
      --elf-ink:     #e6eef3;
      --accent-contrast: #0b0f12;
      --shadow-soft: 0 8px 28px rgba(2,6,12,0.6);
    }

    /* Base reset & typography */
    *{box-sizing: border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      font-family: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      color:var(--elf-ink);
      background:linear-gradient(180deg, var(--bg), var(--bg));
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      line-height:1.45;
      -webkit-tap-highlight-color: transparent;
    }

    a { color: inherit; text-decoration: none; }
    img { max-width:100%; display:block; }

    /* ---------- Layout containers ---------- */
    .container{
      width: 95%;
      max-width: var(--container);
      margin: 0 auto;
      padding: 0 16px;
    }

    /* Skip link for accessibility */
    .skip-link{
      position: absolute;
      left: -999px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow:hidden;
    }
    .skip-link:focus{
      left: 16px;
      top: 12px;
      width: auto;
      height: auto;
      background:var(--elf-accent);
      color:var(--accent-contrast);
      padding:8px 12px;
      border-radius:6px;
      z-index:9999;
    }

    /* ---------- Header / Nav ---------- */
    header{
      position: fixed;
      inset: 0 0 auto 0;
      display:flex;
      align-items:center;
      justify-content:space-between;
      height:72px;
      padding: 0 16px;
      z-index: 120;
      backdrop-filter: blur(6px);
      background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.55));
      box-shadow: 0 1px 0 rgba(0,0,0,0.04);
      transition: background var(--transition), box-shadow var(--transition);
    }
    :root[data-theme="dark"] header{
      background: linear-gradient(180deg, rgba(11,15,18,0.6), rgba(11,15,18,0.55));
    }

    .brand{
      display:flex;
      gap:12px;
      align-items:center;
      font-family: "Poppins", sans-serif;
      font-weight:700;
    }
    .brand svg{height:36px; width:36px; border-radius:8px}
    .brand .title{font-size:1rem; line-height:1; color:var(--elf-ink)}
    .nav{
      display:flex;
      gap:18px;
      align-items:center;
    }
    nav ul{
      display:flex;
      gap:14px;
      list-style:none;
      margin:0;
      padding:0;
      align-items:center;
    }
    nav a{
      padding:8px 10px;
      border-radius:8px;
      color:var(--elf-ink);
      font-weight:600;
      font-size:0.95rem;
      transition: background var(--transition), color var(--transition), transform var(--transition);
    }
    nav a:hover, nav a:focus{
      background: rgba(0,0,0,0.04);
      transform: translateY(-2px);
      outline: none;
    }
    nav a.active{
        color: var(--elf-primary);
        background: rgba(161, 65, 52, 0.08);
    }
    .cta-primary{
      display:inline-flex;
      align-items:center;
      gap:10px;
      background:var(--elf-primary);
      color:var(--accent-contrast);
      padding:9px 14px;
      border-radius:10px;
      box-shadow: var(--shadow-soft);
      font-weight:700;
      font-family: "Poppins", sans-serif;
      border: none;
      cursor:pointer;
    }
    .theme-toggle, .mobile-toggle{
      background:transparent;
      border:none;
      cursor:pointer;
      padding:8px;
      border-radius:8px;
      color:var(--elf-ink);
      font-size:18px;
    }

    /* ---------- Mobile nav ---------- */
    .mobile-toggle{ display:none; }
    .mobile-nav{
        display: none;
        position: absolute;
        right: 16px;
        top: 72px;
        background: var(--bg);
        padding: 12px;
        border-radius: 10px;
        box-shadow: var(--shadow-soft);
        border: 1px solid rgba(0,0,0,0.04);
        opacity: 0;
        transform: translateY(10px) scale(0.98);
        transition: opacity var(--transition), transform var(--transition);
        z-index: 110; /* Below header */
    }
    .mobile-nav.is-open {
        display: block;
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    :root[data-theme="dark"] .mobile-nav {
        border-color: rgba(255,255,255,0.08);
    }

    /* ---------- Hero ---------- */
    .hero{
      padding-top:120px; /* account for fixed header */
      padding-bottom:56px;
      min-height: 68vh;
      display:flex;
      align-items:center;
      position:relative;
    }
    .hero-grid{
      display:grid;
      grid-template-columns: 1fr 440px;
      gap:32px;
      align-items:center;
    }
    .hero h1{
      font-family:"Poppins",sans-serif;
      font-size:clamp(28px,4vw,44px);
      line-height:1.02;
      margin:0 0 12px 0;
      color:var(--elf-ink);
      letter-spacing:-0.4px;
    }
    .hero p.lead{
      margin:0 0 22px 0;
      color:var(--muted);
      max-width:64ch;
    }
    .hero .hero-actions{ display:flex; gap:12px; align-items:center; flex-wrap:wrap }
    .hero .secondary{
      background:transparent;
      border:1px solid rgba(0,0,0,0.06);
      padding:10px 14px;
      border-radius:10px;
      cursor:pointer;
    }
    .hero-visual{
      border-radius:16px;
      padding:14px;
      background: linear-gradient(180deg, var(--card-bg), transparent);
      box-shadow: var(--shadow-soft);
    }
    .hero-visual .accent-box{
      height:240px;
      border-radius:12px;
      background: linear-gradient(135deg, rgba(161,65,52,0.06), rgba(229,153,68,0.06));
      display:flex;
      align-items:center;
      justify-content:center;
      color:var(--muted);
      font-weight:600;
    }

    /* ---------- Sections common ---------- */
    section{
      padding: 56px 0;
      position:relative;
    }
    h2{
      font-family:"Poppins",sans-serif;
      font-size:1.35rem;
      margin:0 0 12px 0;
      color:var(--elf-ink);
    }
    .sub{
      color:var(--muted);
      margin-bottom:22px;
    }

    /* ---------- Services ---------- */
    .services-grid{
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap:18px;
    }
    .service-card{
      background:var(--card-bg);
      padding:18px;
      border-radius:12px;
      box-shadow: var(--shadow-soft);
      display:flex;
      gap:14px;
      align-items:flex-start;
      transition: transform var(--transition), box-shadow var(--transition);
    }
    .service-card:hover, .service-card:focus-within{
      transform: translateY(-6px);
      box-shadow: 0 18px 40px rgba(16,24,40,0.08);
      outline: none;
    }
    .service-card i{
      font-size:22px;
      background: linear-gradient(180deg, var(--elf-primary), var(--elf-accent));
      color:var(--accent-contrast);
      padding:12px;
      border-radius:10px;
      min-width:48px;
      text-align:center;
    }
    .service-card h3{
      margin:0 0 6px 0;
      font-size:1rem;
    }
    .service-card p{ margin:0; color:var(--muted); font-size:0.95rem; }

    /* ---------- Process (3 step) ---------- */
    .process {
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap:18px;
    }
    .step{
      background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
      padding:20px;
      border-radius:12px;
      text-align:center;
      box-shadow: var(--shadow-soft);
    }
    .step .num{
      display:inline-block;
      width:44px;
      height:44px;
      line-height:44px;
      border-radius:10px;
      background:var(--elf-accent);
      color:var(--accent-contrast);
      font-weight:700;
      margin-bottom:12px;
      font-family:"Poppins",sans-serif;
    }
    .step h4{ margin:0 0 8px 0; }
    .step p{ margin:0; color:var(--muted); }

    /* ---------- Video embed ---------- */
    .video-wrap{
      position:relative;
      padding-top:56.25%;
      border-radius:12px;
      overflow:hidden;
      background: #000;
      box-shadow: var(--shadow-soft);
    }
    .video-wrap iframe{
      position:absolute;
      inset:0;
      width:100%;
      height:100%;
      border:0;
    }

    /* ---------- Testimonials ---------- */
    .testimonials { display:flex; gap:18px; align-items:stretch; flex-wrap:wrap;}
    .testimonial-card{
      background:var(--card-bg);
      padding:18px;
      border-radius:12px;
      box-shadow: var(--shadow-soft);
      min-width:240px;
      flex:1 1 300px;
    }
    .testimonial-card blockquote{
      margin:0 0 12px 0;
      color:var(--muted);
      font-style:italic;
    }
    .testimonial-meta{ display:flex; gap:10px; align-items:center; }
    .testimonial-meta img{ width:40px; height:40px; border-radius:50%; object-fit:cover }

    /* ---------- Cost estimator ---------- */
    .estimator{
      display:grid;
      grid-template-columns: 320px 1fr;
      gap:18px;
      align-items:start;
    }
    .estimator .panel{
      background:var(--card-bg);
      padding:18px;
      border-radius:12px;
      box-shadow: var(--shadow-soft);
    }
    .estimator label{ display:block; font-weight:600; margin-bottom:6px; font-size:0.95rem; }
    .estimator input[type="range"]{ width:100% }
    .price-output{
      font-family:"Poppins",sans-serif;
      font-size:1.35rem;
      font-weight:800;
      margin-top:10px;
      color:var(--elf-primary)
    }
    .disclaimer{ font-size:0.85rem; color:var(--muted); margin-top:8px }

    /* ---------- Contact / Form ---------- */
    .contact-grid{
      display:grid;
      grid-template-columns: 1fr 420px;
      gap:18px;
      align-items:start;
    }
    form{
      background:var(--card-bg);
      padding:18px;
      border-radius:12px;
      box-shadow: var(--shadow-soft);
    }
    .form-row{ display:flex; gap:10px; }
    label{ font-size:0.9rem; }
    input[type="text"], input[type="email"], input[type="tel"], select, textarea{
      width:100%;
      padding:10px 12px;
      border-radius:8px;
      border:1px solid rgba(0,0,0,0.06);
      background:transparent;
      color:var(--elf-ink);
      font-size:0.95rem;
      resize:vertical;
    }
    input:focus, select:focus, textarea:focus{ outline:none; box-shadow: var(--focus-ring); }
    :root[data-theme="dark"] input, :root[data-theme="dark"] select, :root[data-theme="dark"] textarea {
        border-color: rgba(255,255,255,0.08);
    }

    .form-actions{ display:flex; gap:10px; margin-top:12px; }
    .btn{
      padding:10px 14px;
      border-radius:10px;
      border:none;
      cursor:pointer;
      font-weight:700;
    }
    .btn-primary{ background:var(--elf-primary); color:var(--accent-contrast); }
    .btn-ghost{ background:transparent; border:1px solid rgba(0,0,0,0.06) }
    :root[data-theme="dark"] .btn-ghost { border-color: rgba(255,255,255,0.08); }

    /* ---------- Back to top ---------- */
    .back-to-top{
      position:fixed;
      right:18px;
      bottom:22px;
      width:48px;
      height:48px;
      border-radius:50%;
      display:grid;
      place-items:center;
      background:var(--elf-primary);
      color:var(--accent-contrast);
      box-shadow: 0 10px 30px rgba(16,24,40,0.12);
      z-index:999;
      cursor:pointer;
      transition: transform var(--transition), opacity var(--transition);
      opacity:0;
      transform: translateY(12px) scale(.9);
      border:none;
      visibility: hidden;
    }
    .back-to-top.show{ opacity:1; transform: translateY(0) scale(1); visibility: visible; }

    /* ---------- Small utilities ---------- */
    .muted{ color:var(--muted) }
    .flex{ display:flex; gap:12px; align-items:center }
    .center{ text-align:center }
    .reveal{ opacity:0; transform: translateY(12px); transition: opacity 600ms var(--transition), transform 600ms var(--transition) }
    .reveal.in-view{ opacity:1; transform: translateY(0) }

    /* ---------- Footer ---------- */
    footer{
      padding:24px 0;
      border-top:1px solid rgba(0,0,0,0.04);
      margin-top:24px;
    }
    :root[data-theme="dark"] footer { border-color: rgba(255,255,255,0.08); }

    /* ---------- Responsive Breakpoints ---------- */
    @media (max-width: 1024px){
      .hero-grid{ grid-template-columns: 1fr 360px; }
      .services-grid{ grid-template-columns: repeat(2, 1fr); }
      .process{ grid-template-columns: 1fr 1fr; }
      .estimator{ grid-template-columns: 1fr; }
      .contact-grid{ grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
        .mobile-toggle{ display:inline-flex }
        nav ul#primaryNav{ display:none }
    }
    @media (max-width: 640px){
      header{ height:64px }
      .hero-grid{ grid-template-columns: 1fr; gap:20px; }
      .hero-visual{ order: -1 }
      .services-grid{ grid-template-columns: 1fr; }
      .process{ grid-template-columns: 1fr; }
      .testimonial-card{ min-width:unset }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <!-- Fixed header -->
  <header role="banner" aria-label="Main header">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;">
      <a href="#home" class="brand" aria-label="ELFREYZZ LTD Home">
        <!-- simple svg logo -->
        <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
          <rect x="4" y="4" width="56" height="56" rx="10" fill="#a14134"></rect>
          <path d="M14 44 L28 20 L34 34 L50 12" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div>
          <div class="title">ELFREYZZ LTD</div>
          <div style="font-size:11px;color:var(--muted)">Civil & Infrastructure Construction</div>
        </div>
      </a>

      <div class="nav">
        <nav role="navigation" aria-label="Primary navigation">
          <button class="mobile-toggle" id="mobileToggle" aria-controls="mobileNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>

          <ul id="primaryNav">
            <li><a href="#home" data-link>Home</a></li>
            <li><a href="#services" data-link>Services</a></li>
            <li><a href="#about" data-link>About</a></li>
            <li><a href="#past" data-link>Past experiences</a></li>
            <li><a href="#estimation" data-link>Cost estimation</a></li>
            <li><a href="#contact" data-link>Contact</a></li>
          </ul>
        </nav>

        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme" title="Toggle theme">
          <i id="themeIcon" class="fa fa-moon"></i>
        </button>
        <button class="cta-primary" onclick="Calendly.showPopupWidget('https://calendly.com/d/cn3g-p2f-g3q/elfreyzz-ltd-consultation');return false;">
          <i class="fa fa-calendar-check"></i> Book a Call
        </button>
      </div>
    </div>

    <!-- Simple mobile nav -->
    <div id="mobileNav" class="mobile-nav">
      <ul style="list-style:none;margin:0;padding:8px;display:flex;flex-direction:column;gap:6px;">
        <li><a href="#home" data-link>Home</a></li>
        <li><a href="#services" data-link>Services</a></li>
        <li><a href="#about" data-link>About</a></li>
        <li><a href="#past" data-link>Past experiences</a></li>
        <li><a href="#estimation" data-link>Cost estimation</a></li>
        <li><a href="#contact" data-link>Contact</a></li>
      </ul>
    </div>
  </header>

  <main id="main" tabindex="-1">
    <!-- HERO -->
    <section id="home" class="hero container" aria-label="Hero section">
      <div class="hero-grid">
        <div>
          <h1>ELFREYZZ LTD — Building reliable infrastructure that lasts.</h1>
          <p class="lead">Access roads • Sewer lines • Piped water • Structural works • Engineering surveys. End-to-end civil construction services tailored to developers, municipalities and large estate projects.</p>

          <div class="hero-actions">
            <button class="cta-primary" onclick="Calendly.showPopupWidget('https://calendly.com/d/cn3g-p2f-g3q/elfreyzz-ltd-consultation');return false;"><i class="fa fa-phone"></i> Book a Free Consultation</button>
            <a class="secondary" href="#services">Our Services</a>
            <a class="secondary" href="#past">See Past Projects</a>
          </div>

          <div style="margin-top:20px" class="muted">Trusted by developers, municipalities and private clients across East Africa.</div>
        </div>

        <aside class="hero-visual" aria-hidden="true">
          <div class="accent-box">
            <div>
              <strong style="display:block;margin-bottom:6px">Featured:</strong>
              <div style="font-size:0.95rem">Turnkey access road & sewer project — 1200m</div>
              <div style="margin-top:12px;font-size:0.85rem;color:var(--muted)">Placeholder for project image or interactive hero illustration.</div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="container reveal" aria-labelledby="servicesHeading">
      <h2 id="servicesHeading">Services</h2>
      <p class="sub">Comprehensive civil infrastructure services delivered with technical excellence and robust project management.</p>

      <div class="services-grid" role="list">
        <article class="service-card" role="listitem" tabindex="0">
          <i class="fa-solid fa-road" aria-hidden="true"></i>
          <div>
            <h3>Access Roads</h3>
            <p>Design and construction of paved & unpaved access roads, earthworks, drainage and surfacing.</p>
          </div>
        </article>

        <article class="service-card" role="listitem" tabindex="0">
          <i class="fa-solid fa-water" aria-hidden="true"></i>
          <div>
            <h3>Piped Water</h3>
            <p>Potable water network design, mainlines, distribution networks and connection works.</p>
          </div>
        </article>

        <article class="service-card" role="listitem" tabindex="0">
          <i class="fa-solid fa-toilet-paper" aria-hidden="true"></i>
          <div>
            <h3>Sewer Lines</h3>
            <p>Gravity sewers, manholes, pumping stations and full sanitation solutions.</p>
          </div>
        </article>

        <article class="service-card" role="listitem" tabindex="0">
          <i class="fa-solid fa-building" aria-hidden="true"></i>
          <div>
            <h3>Structures</h3>
            <p>Foundations, retaining walls, reinforced concrete structures and structural repairs.</p>
          </div>
        </article>

        <article class="service-card" role="listitem" tabindex="0">
          <i class="fa-solid fa-ruler" aria-hidden="true"></i>
          <div>
            <h3>Engineering Survey</h3>
            <p>Topographic surveys, setting out, and geotechnical coordination for accurate project delivery.</p>
          </div>
        </article>
          
        <article class="service-card" role="listitem" tabindex="0">
          <i class="fa-solid fa-helmet-safety" aria-hidden="true"></i>
          <div>
            <h3>Project Management</h3>
            <p>End-to-end project oversight, quality control, and stakeholder communication.</p>
          </div>
        </article>

        <article class="service-card" role="listitem" tabindex="0">
          <i class="fa-solid fa-truck-ramp-box" aria-hidden="true"></i>
          <div>
            <h3>Materials Supply</h3>
            <p>Supply of high-quality construction materials including aggregates, sand, and pre-cast concrete items.</p>
          </div>
        </article>

        <article class="service-card" role="listitem" tabindex="0">
          <i class="fa-solid fa-tractor" aria-hidden="true"></i>
          <div>
            <h3>Equipment Hire</h3>
            <p>Flexible hire options for a wide range of heavy construction machinery and equipment.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- PROCESS -->
    <section id="about" class="container reveal" aria-labelledby="processHeading">
      <h2 id="processHeading">Our Process — Simple, clear, deliverable</h2>
      <p class="sub">A three-step engagement model that reduces risk and keeps projects on time.</p>

      <div class="process">
        <article class="step" tabindex="0">
          <div class="num">1</div>
          <h4>Consultation</h4>
          <p>We meet to understand scope, constraints and client priorities. Site visits & initial feasibility checks.</p>
        </article>

        <article class="step" tabindex="0">
          <div class="num">2</div>
          <h4>Design & Estimate</h4>
          <p>Detailed proposals, drawings and transparent cost estimation delivered for approval.</p>
        </article>

        <article class="step" tabindex="0">
          <div class="num">3</div>
          <h4>Delivery & Handover</h4>
          <p>On-time construction with quality control, testing and formal handover documentation.</p>
        </article>
      </div>
    </section>

    <!-- EMBEDDED VIDEO -->
    <section class="container reveal" id="video" aria-labelledby="videoHeading">
      <h2 id="videoHeading">Project Highlights</h2>
      <p class="sub">Short overview video of our methodology and past projects.</p>

      <div class="video-wrap" role="region" aria-label="Project video">
        <!-- Replace with a relevant video ID -->
        <iframe loading="lazy" title="ELFREYZZ project highlights" src="https://www.youtube.com/embed/Scxs7L0hZqo?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>

    <!-- PAST EXPERIENCES / TESTIMONIALS -->
    <section id="past" class="container reveal" aria-labelledby="pastHeading">
      <h2 id="pastHeading">Past Experiences & Testimonials</h2>
      <p class="sub">Work samples and feedback from clients who trust us to deliver.</p>

      <div class="testimonials" role="list">
        <article class="testimonial-card" role="listitem" tabindex="0">
          <blockquote>"ELFREYZZ delivered our access road project on time and under estimate. Their team were highly professional throughout."</blockquote>
          <div class="testimonial-meta">
            <img src="https://i.pravatar.cc/40?u=jane" alt="Client photo for Jane Mwangi">
            <div>
              <div style="font-weight:700">Jane Mwangi</div>
              <div class="muted" style="font-size:0.85rem">Project Manager — Acme Developments</div>
            </div>
          </div>
        </article>

        <article class="testimonial-card" role="listitem" tabindex="0">
          <blockquote>"Reliable, technically strong and excellent site management. We recommend them for large civil works."</blockquote>
          <div class="testimonial-meta">
            <img src="https://i.pravatar.cc/40?u=peter" alt="Client photo for Eng. Peter Otieno">
            <div>
              <div style="font-weight:700">Eng. Peter Otieno</div>
              <div class="muted" style="font-size:0.85rem">Municipal Infrastructure</div>
            </div>
          </div>
        </article>
          
        <article class="testimonial-card" role="listitem" tabindex="0">
          <blockquote>"Their survey data was accurate and foundational to our planning approvals. A very thorough team."</blockquote>
          <div class="testimonial-meta">
            <img src="https://i.pravatar.cc/40?u=samuel" alt="Client photo for Samuel Kimani">
            <div>
              <div style="font-weight:700">Samuel Kimani</div>
              <div class="muted" style="font-size:0.85rem">Lead Architect — UrbanScape Planners</div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- COST ESTIMATION -->
    <section id="estimation" class="container reveal" aria-labelledby="estimationHeading">
      <h2 id="estimationHeading">Cost Estimation (Quick Calculator)</h2>
      <p class="sub">Use this interactive tool for a rough budget estimate. This is indicative only and not a formal quote.</p>

      <div class="estimator" role="region" aria-label="Cost estimator">
        <div class="panel">
          <label for="projectType">Project type</label>
          <select id="projectType" aria-label="Project type">
            <option value="roads">Access roads</option>
            <option value="sewer">Sewer lines</option>
            <option value="water">Piped water</option>
            <option value="structures">Structures</option>
            <option value="survey">Engineering survey</option>
          </select>

          <div style="margin-top:12px;">
            <label for="size" id="sizeLabel">Project Length (km)</label>
            <input id="size" type="range" min="0.1" max="5" step="0.1" value="1" aria-valuemin="0.1" aria-valuemax="5" aria-label="Project size multiplier">
            <div style="display:flex;justify-content:space-between;font-size:0.85rem;color:var(--muted)"><span>Small</span><span>Large</span></div>
          </div>

          <div style="margin-top:12px;">
            <label for="complexity">Complexity</label>
            <select id="complexity" aria-label="Complexity">
              <option value="1">Low (Flat terrain, clear access)</option>
              <option value="1.25">Medium (Uneven terrain, some obstacles)</option>
              <option value="1.6">High (Rocky, urban area, high traffic)</option>
            </select>
          </div>

          <div class="price-output" id="priceOutput">KSH 0</div>
          <div class="disclaimer">Indicative only. Final price depends on site visit, design and material rates.</div>
        </div>

        <div class="panel">
          <h3>How it works</h3>
          <p class="muted">We use base rates per project type multiplied by scale and complexity to provide a quick estimate.</p>

          <ul class="muted" style="margin-top:12px; font-size: 0.9rem; line-height: 1.6;">
            <li><strong>Base rates (sample):</strong><br>Roads KES 8M/km, Sewer KES 7M/km, Water KES 6M/km, Structures KES 14k/m², Survey KES 80k base</li>
          </ul>

          <div style="margin-top:12px">
            <a href="#contact" class="btn btn-primary">Request Formal Quote</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT + CALENDLY INLINE WIDGET -->
    <section id="contact" class="container reveal" aria-labelledby="contactHeading">
      <h2 id="contactHeading">Contact & Bookings</h2>
      <p class="sub">Reach out or schedule a call directly via Calendly.</p>

      <div class="contact-grid">
        <form id="contactForm" novalidate>
          <div class="form-row" style="flex-direction:column;gap:8px">
            <div>
              <label for="name">Full name</label>
              <input id="name" name="name" type="text" required aria-required="true">
            </div>
            <div>
              <label for="email">Email</label>
              <input id="email" name="email" type="email" required aria-required="true">
            </div>
            <div>
              <label for="phone">Phone</label>
              <input id="phone" name="phone" type="tel" inputmode="tel">
            </div>
            <div>
              <label for="projectTypeForm">Project type</label>
              <select id="projectTypeForm" name="projectTypeForm">
                <option>Access roads</option>
                <option>Sewer lines</option>
                <option>Piped water</option>
                <option>Structures</option>
                <option>Engineering survey</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label for="message">Message / Project details</label>
              <textarea id="message" name="message" rows="5" placeholder="Brief project details"></textarea>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Send message</button>
          </div>

          <div aria-live="polite" id="formStatus" style="margin-top:10px;color:var(--muted);font-size:0.95rem"></div>
        </form>

        <aside>
          <div class="panel" id="calendlyPanel">
            <div style="margin-bottom:10px"><strong>Book a meeting</strong></div>
            <p class="muted" style="margin-bottom:12px">Select a convenient time using our inline Calendly panel below.</p>

            <!-- Calendly inline container (will be initialised by JS) -->
            <div id="calendlyInline" style="min-height:480px;border-radius:8px;overflow:hidden"></div>

            <div style="margin-top:12px" class="muted">Or <a id="calendlyFallback" href="https://calendly.com/d/cn3g-p2f-g3q/elfreyzz-ltd-consultation" target="_blank" rel="noopener">open Calendly in a new tab</a>.</div>
          </div>

          <div style="margin-top:12px" class="panel">
            <strong>Office</strong>
            <div class="muted" style="margin-top:6px">Nairobi, Kenya — +254 700 000000 — info@elfreyzz.co.ke</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Footer -->
    <footer class="container">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div class="muted">© <span id="year"></span> ELFREZZ LTD. All rights reserved.</div>
        <div class="muted">Designed for high-ticket infrastructure projects • <a href="#contact">Get in touch</a></div>
      </div>
    </footer>
  </main>

  <!-- Back to top -->
  <button class="back-to-top" id="backToTop" aria-label="Back to top" title="Back to top">
    <i class="fa fa-chevron-up" aria-hidden="true"></i>
  </button>

  <!-- ======================
      JavaScript — Single file
      Comments explain each module
      ====================== -->
  <script>
    /* ============================================================
        JS MODULES:
         - Mobile nav toggling
         - Smooth scrolling & active link highlighting
         - Theme switcher (localStorage) + meta theme-color sync
         - IntersectionObserver reveal animations
         - Back-to-top visibility
         - Cost estimator logic (debounced)
         - Contact form (client-side validation + fake submit)
         - Calendly inline initialisation + theme sync strategy
        ============================================================ */

    // Helper: DOM ready
    document.addEventListener('DOMContentLoaded', function() {
      const root = document.documentElement;
      document.getElementById('year').textContent = new Date().getFullYear();

      // --- Debounce helper ---
      function debounce(func, wait = 20) {
        let timeout;
        return function(...args) {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            func.apply(this, args);
          }, wait);
        };
      }
      
      // -----------------------------
      // Theme switcher & persistence
      // -----------------------------
      const THEME_KEY = 'elfreyzz-theme';
      const themeToggle = document.getElementById('themeToggle');
      const themeIcon = document.getElementById('themeIcon');
      const metaTheme = document.getElementById('meta-theme-color');

      function applyTheme(theme) {
        if (theme === 'dark') {
          root.setAttribute('data-theme', 'dark');
          themeIcon.className = 'fa fa-sun';
          metaTheme.setAttribute('content', '#0b0f12');
        } else {
          root.removeAttribute('data-theme');
          themeIcon.className = 'fa fa-moon';
          metaTheme.setAttribute('content', '#ffffff');
        }
      }

      const savedTheme = localStorage.getItem(THEME_KEY);
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      applyTheme(initialTheme);
      
      themeToggle.addEventListener('click', () => {
        const currentTheme = root.hasAttribute('data-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
        initCalendlyInline(true); // Force re-init with new theme colors
      });

      // -----------------------------
      // Mobile Nav
      // -----------------------------
      const mobileToggle = document.getElementById('mobileToggle');
      const mobileNav = document.getElementById('mobileNav');
      const mobileNavIcon = mobileToggle.querySelector('i');

      mobileToggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('is-open');
        mobileToggle.setAttribute('aria-expanded', isOpen);
        mobileNavIcon.className = isOpen ? 'fa fa-times' : 'fa fa-bars';
      });

      // -----------------------------
      // Smooth Scroll & Active Nav
      // -----------------------------
      const navLinks = document.querySelectorAll('a[data-link]');
      const sections = document.querySelectorAll('section[id]');
      
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (mobileNav.classList.contains('is-open')) {
                mobileNav.classList.remove('is-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileNavIcon.className = 'fa fa-bars';
            }
          }
        });
      });

      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60% 0px',
        threshold: 0
      };

      const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              }
            });
          }
        });
      }, observerOptions);

      sections.forEach(section => sectionObserver.observe(section));


      // -----------------------------
      // Reveal on Scroll
      // -----------------------------
      const revealElements = document.querySelectorAll('.reveal');
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      revealElements.forEach(el => revealObserver.observe(el));


      // -----------------------------
      // Back to Top button
      // -----------------------------
      const backToTop = document.getElementById('backToTop');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          backToTop.classList.add('show');
        } else {
          backToTop.classList.remove('show');
        }
      });
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });


      // -----------------------------
      // Cost Estimator
      // -----------------------------
      const projectTypeEl = document.getElementById('projectType');
      const sizeEl = document.getElementById('size');
      const complexityEl = document.getElementById('complexity');
      const priceOutputEl = document.getElementById('priceOutput');
      const sizeLabelEl = document.getElementById('sizeLabel');

      const baseRates = {
        roads: 8000000,
        sewer: 7000000,
        water: 6000000,
        structures: 14000,
        survey: 80000
      };

      function calculatePrice() {
        const type = projectTypeEl.value;
        const size = parseFloat(sizeEl.value);
        const complexity = parseFloat(complexityEl.value);
        let finalPrice = 0;

        if (type === 'survey') {
          finalPrice = baseRates.survey * complexity;
          sizeLabelEl.textContent = 'Scale (N/A for surveys)';
        } else if(type === 'structures') {
            sizeLabelEl.textContent = `Area (x100 m²) - currently ${size*100} m²`;
            finalPrice = baseRates.structures * (size*100) * complexity;
        }else {
          sizeLabelEl.textContent = `Length (km) - currently ${size} km`;
          finalPrice = baseRates[type] * size * complexity;
        }

        priceOutputEl.textContent = new Intl.NumberFormat('en-KE', {
          style: 'currency',
          currency: 'KES',
          minimumFractionDigits: 0
        }).format(finalPrice);
      }
      
      [projectTypeEl, sizeEl, complexityEl].forEach(el => {
        el.addEventListener('input', debounce(calculatePrice, 50));
      });
      calculatePrice(); // Initial calculation

      // -----------------------------
      // Contact Form
      // -----------------------------
      const contactForm = document.getElementById('contactForm');
      const formStatus = document.getElementById('formStatus');

      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.elements.name.value;
        const email = this.elements.email.value;

        if (!name.trim() || !email.trim()) {
          formStatus.textContent = 'Please fill in your name and email.';
          formStatus.style.color = 'var(--elf-primary)';
          return;
        }

        formStatus.textContent = 'Sending message...';
        formStatus.style.color = 'var(--muted)';

        setTimeout(() => {
          formStatus.textContent = 'Thank you! Your message has been sent. We will get back to you shortly.';
          formStatus.style.color = 'green';
          this.reset();
        }, 1500);
      });
      
      // -----------------------------
      // Calendly Integration
      // -----------------------------
      let calendlyInitialized = false;
      function initCalendlyInline(force = false) {
        if (!force && calendlyInitialized) return;

        const container = document.getElementById('calendlyInline');
        if (typeof Calendly !== 'undefined' && container) {
          // Clear previous instance if forcing a refresh
          if (force) container.innerHTML = '';

          const theme = root.hasAttribute('data-theme') ? 'dark' : 'light';
          const styles = getComputedStyle(root);
          
          Calendly.initInlineWidget({
            url: 'https://calendly.com/d/cn3g-p2f-g3q/elfreyzz-ltd-consultation',
            parentElement: container,
            prefill: {},
            utm: {},
            branding: false,
            theme: theme,
            textColor: styles.getPropertyValue('--elf-ink').trim().substring(1),
            primaryColor: styles.getPropertyValue('--elf-primary').trim().substring(1)
          });
          calendlyInitialized = true;
        }
      }

      // Initialise Calendly once the script is loaded
      const calendlyInterval = setInterval(() => {
          if (typeof Calendly !== 'undefined') {
              initCalendlyInline();
              clearInterval(calendlyInterval);
          }
      }, 200);

    });
  </script>
</body>
</html>

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://elfreyzz-ltd.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/64ea4d4a-6689-4831-a324-bf647df48cf5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
