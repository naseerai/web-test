import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";


const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&display=swap');

  :root {
    --white: #FDFCFA;
    --cream: #F5F2EC;
    --black: #18100A;
    --orange: #E8530A;
    --orange-warm: #F26522;
    --orange-pale: #FEF0E4;
    --orange-muted: rgba(232,83,10,0.1);
    --tan: #EAE5DC;
    --tan-dark: #D4CEC3;
    --brown: #7A6955;
    --text-muted: #9E907E;

    /* ── Fluid type scale (clamp: min rem, fluid vw, max rem) ── */
    --text-xs:   clamp(0.65rem,  1.2vw,  0.75rem);
    --text-sm:   clamp(0.78rem,  1.4vw,  0.875rem);
    --text-base: clamp(0.875rem, 1.6vw,  1rem);
    --text-lg:   clamp(1rem,     1.8vw,  1.125rem);
    --text-xl:   clamp(1.1rem,   2vw,    1.25rem);
    --text-2xl:  clamp(1.3rem,   2.5vw,  1.5rem);
    --text-3xl:  clamp(1.6rem,   3vw,    2rem);
    --text-4xl:  clamp(2rem,     4vw,    2.75rem);
    --text-hero: clamp(2.8rem,   6.5vw,  5.5rem);

    /* ── Fluid spacing ── */
    --sp-xs:  clamp(0.25rem, 0.5vw,  0.5rem);
    --sp-sm:  clamp(0.5rem,  1vw,    0.75rem);
    --sp-md:  clamp(0.75rem, 1.5vw,  1.25rem);
    --sp-lg:  clamp(1rem,    2vw,    1.75rem);
    --sp-xl:  clamp(1.5rem,  3vw,    2.5rem);
    --sp-2xl: clamp(2rem,    4vw,    3.5rem);
    --sp-3xl: clamp(3rem,    6vw,    5rem);
    --sp-4xl: clamp(4rem,    8vw,    7rem);

    /* ── Section gutters ── */
    --sec-x: clamp(1.25rem, 8vw,  7rem);
    --sec-y: clamp(3rem,    7vh,  7rem);
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; font-size: 100%; }

  body {
    font-family: 'Poppins', sans-serif;
    background: var(--white);
    color: var(--black);
    overflow-x: hidden;
    line-height: 1.6;
  }

  /* ══════════════════════════════
     HERO
  ══════════════════════════════ */
  .hero {
    min-height: 80vh;
    display: grid;
    grid-template-columns: 55% 45%;
    background: var(--cream);
    overflow: hidden;
  }

  .hero-left {
     padding: 6rem var(--sp-2xl) 8vh var(--sec-x); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: var(--sp-xs);
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 1.5rem;
  }
  .breadcrumb span { color: var(--tan-dark); }

  .hero-kicker {
    font-style: normal;
    font-weight: 400;
    font-size: var(--text-lg);
    color: var(--brown);
    margin-bottom: 0.75rem;
  }

  .hero-title {
    font-size: var(--text-hero);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.025em;
    color: var(--black);
  }

  .hero-title em {
    font-style: normal;
    font-weight: 700;
    color: var(--orange);
  }

  .hero-rule {
    display: flex;
    align-items: center;
    gap: var(--sp-md);
    margin: var(--sp-xl) 0;
  }
  .hero-rule-line { width: 4rem; height: 1px; background: var(--tan-dark); }
  .hero-rule-dot  { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }

  .hero-desc {
    font-size: var(--text-base);
    font-weight: 400;
    color: var(--brown);
    line-height: 1.85;
    max-width: 44ch;
    margin-bottom: var(--sp-3xl);
  }

  .hero-cta { display: flex; gap: var(--sp-lg); flex-wrap: wrap; align-items: center; }

  /* ── Buttons ── */
  .btn-main {
    background: var(--orange);
    color: var(--white);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: var(--text-sm);
    padding: 0.85em 2em;
    border: none;
    cursor: pointer;
    letter-spacing: 0.04em;
    border-radius: 2px;
    transition: background 0.25s, transform 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-main:hover { background: var(--orange-warm); transform: translateY(-2px); }

  .btn-text {
    color: var(--black);
    font-family: 'Poppins', sans-serif;
    font-size: var(--text-sm);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: var(--tan-dark);
    cursor: pointer;
    transition: color 0.25s, text-decoration-color 0.25s;
    background: none;
    border: none;
  }
  .btn-text:hover { color: var(--orange); text-decoration-color: var(--orange); }

  /* ── Hero right panel ── */
  .hero-right {
    background: var(--tan);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5vw;
  }

  .doc-stack { position: relative; width: min(320px, 75%); }

  .doc-card {
    background: var(--white);
    border: 1px solid var(--tan-dark);
    border-radius: 4px;
    padding: var(--sp-2xl);
    box-shadow: 0 8px 32px rgba(24,16,10,0.1);
  }
  .doc-card.behind-1 {
    position: absolute;
    top: -16px; left: -16px; right: 16px; height: 100%;
    background: var(--tan-dark);
    border-radius: 4px;
    z-index: 0;
  }
  .doc-card.behind-2 {
    position: absolute;
    top: -8px; left: -8px; right: 8px; height: 100%;
    background: var(--cream);
    border: 1px solid var(--tan-dark);
    border-radius: 4px;
    z-index: 1;
  }
  .doc-card.front { position: relative; z-index: 2; }

  .doc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--sp-xl);
    padding-bottom: var(--sp-md);
    border-bottom: 1px solid var(--tan);
  }
  .doc-seal {
    width: 2.5rem; height: 2.5rem;
    border-radius: 50%;
    border: 2px solid var(--orange);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.5rem; font-weight: 700; letter-spacing: 0.05em;
    text-transform: uppercase; color: var(--orange);
    text-align: center; line-height: 1.2;
  }
  .doc-id { font-size: var(--text-xs); color: var(--text-muted); font-weight: 500; text-align: right; }

  .doc-lines { display: flex; flex-direction: column; gap: var(--sp-sm); }
  .doc-line { height: 8px; background: var(--tan); border-radius: 2px; }
  .doc-line.short  { width: 60%; }
  .doc-line.medium { width: 80%; }
  .doc-line.full   { width: 100%; }
  .doc-line.accent { background: var(--orange-muted); }

  .doc-stamp {
    display: inline-flex; align-items: center; gap: var(--sp-xs);
    background: var(--orange-pale);
    border: 1px solid var(--orange);
    padding: 0.4em 0.8em;
    font-size: var(--text-xs); font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--orange); margin-top: var(--sp-lg); border-radius: 2px;
  }

  .hero-right::before {
    content: '"Protect your innovation"';
    font-style: italic;
    font-size: var(--text-xs);
    color: var(--tan-dark);
    position: absolute;
    bottom: 3vh; right: 3vw;
    max-width: 12ch; text-align: right; line-height: 1.5;
  }

/* ── TRUST STRIP MARQUEE ── */
  .trust-strip {
    background: var(--black);
    padding: 1.1rem 0; /* Slim desktop height */
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  /* Fixed label on the left */
  .trust-label {
    padding: 0 var(--sp-lg) 0 var(--sec-x);
    font-size: var(--text-xs); 
    font-weight: 800;
    letter-spacing: 0.15em; 
    text-transform: uppercase;
    color: var(--orange);
    background: var(--black); /* Matches background to hide scrolling items underneath */
    z-index: 10;
    white-space: nowrap;
  }

  /* Scrolling track */
  .trust-track {
    display: flex;
    animation: trustScroll 45s linear infinite;
    width: max-content;
  }

  .trust-item {
    font-size: var(--text-sm); 
    color: #908d89; 
    font-weight: 500;
    display: inline-flex; 
    align-items: center; 
    gap: 0.5rem;
    padding: 0 3.5rem; /* Space between items */
    white-space: nowrap;
  }
  
  .trust-item::before { content: '✓'; color: var(--orange); font-weight: 700; }

  @keyframes trustScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }


  /* ══════════════════════════════
     SERVICES
  ══════════════════════════════ */
  .services { padding: var(--sec-y) var(--sec-x); }

  .services-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem, 4vw, 5rem);
    align-items: flex-start;
    margin-bottom: var(--sp-4xl);
  }

  .section-eyebrow {
    font-size: var(--text-xs); font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--orange); margin-bottom: var(--sp-sm);
  }

  .section-heading {
    font-size: var(--text-4xl);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
  .section-heading em { font-style: normal; font-weight: 700; color: var(--orange); }

  .section-desc { font-size: var(--text-base); color: var(--brown); line-height: 1.8; padding-top: 1.9rem;  }

  .service-list { display: flex; flex-direction: column; }

  .service-row {
    display: grid;
    grid-template-columns: 3rem 1fr auto;
    gap: var(--sp-xl);
    align-items: center;
    padding: var(--sp-xl) 0;
    border-bottom: 1px solid var(--tan);
    transition: background 0.25s, padding 0.25s, margin 0.25s, border-color 0.25s;
  }
  .service-row:first-child { border-top: 1px solid var(--tan); }
  .service-row:hover {
    background: var(--orange-pale);
    padding-left: var(--sp-lg); padding-right: var(--sp-lg);
    margin: 0 calc(-1 * var(--sp-lg));
    border-radius: 4px; border-color: transparent;
  }

  .sr-num { font-size: var(--text-base); font-weight: 600; color: var(--orange); font-style: normal; }

  .sr-title { font-weight: 700; font-size: var(--text-lg); margin-bottom: 0.3em; color: var(--black); }
  .sr-text  { font-size: var(--text-sm); color: var(--brown); line-height: 1.7; max-width: 60ch; }

  .sr-tag {
    font-size: var(--text-xs); font-weight: 600; letter-spacing: 0.1em;
    text-transform: uppercase; padding: 0.35em 0.9em;
    background: var(--tan); color: var(--brown); border-radius: 20px; white-space: nowrap;
  }

  /* ══════════════════════════════
     HOW IT WORKS
  ══════════════════════════════ */
  .how {
    background: var(--black);
    padding: var(--sec-y) var(--sec-x);
  }
  .how .section-eyebrow { color: var(--orange); }
  .how .section-heading { color: var(--white); margin-bottom: var(--sp-4xl); }
  .how .section-heading em { color: var(--orange); }

  .timeline { display: flex; flex-direction: column; max-width: 780px; }

  .tl-item {
    display: grid;
    grid-template-columns: 4rem 1px 1fr;
    gap: 0 var(--sp-xl);
    padding-bottom: var(--sp-3xl);
  }
  .tl-item:last-child { padding-bottom: 0; }

  .tl-num {
    font-size: var(--text-2xl); font-style: normal; font-weight: 700;
    color: var(--orange); text-align: right; padding-top: 0.15em;
  }

  .tl-line { background: #2C2420; position: relative; margin: 0.5rem 0; }
  .tl-item:last-child .tl-line { background: transparent; }
  .tl-line::before {
    content: '';
    position: absolute; top: 0; left: 50%; transform: translateX(-50%);
    width: 10px; height: 10px; border-radius: 50%; background: var(--orange);
    margin-top: -4px; margin-left: -4px;
  }

  .tl-body { padding-left: var(--sp-md); }
  .tl-title { font-weight: 700; font-size: var(--text-xl); color: var(--white); margin-bottom: var(--sp-sm); }
  .tl-text  { font-size: var(--text-sm); color: #6B6359; line-height: 1.75; }

  /* ══════════════════════════════
     WHY US
  ══════════════════════════════ */
  .why { padding: var(--sec-y) var(--sec-x); background: var(--orange-pale); }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1rem, 2vw, 1.5rem);
    margin-top: var(--sp-3xl);
  }

  .why-card {
    background: var(--white);
    border: 1px solid var(--tan-dark);
    border-radius: 6px;
    padding: var(--sp-2xl) clamp(1rem, 2.5vw, 1.8rem);
    transition: box-shadow 0.25s, transform 0.25s;
  }
  .why-card:hover { box-shadow: 0 12px 40px rgba(232,83,10,0.12); transform: translateY(-4px); }

  .wc-icon { font-size: clamp(1.4rem, 2.5vw, 1.8rem); margin-bottom: var(--sp-lg); display: block; }
  .wc-title { font-weight: 700; font-size: var(--text-base); margin-bottom: var(--sp-sm); color: var(--black); }
  .wc-text  { font-size: var(--text-sm); color: var(--brown); line-height: 1.75; }

  /* ══════════════════════════════
     CONTACT CTA
  ══════════════════════════════ */
  .contact-cta {
    padding: var(--sec-y) var(--sec-x);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem, 6vw, 6rem);
    align-items: center;
  }

  .cta-content .section-eyebrow { margin-bottom: var(--sp-sm); }
  .cta-content .section-heading { margin-bottom: var(--sp-lg); }
  .cta-content p { font-size: var(--text-base); color: var(--brown); line-height: 1.85; margin-bottom: var(--sp-2xl); }

  .contact-form {
    background: var(--cream);
    border-radius: 8px;
    padding: clamp(1.5rem, 3vw, 2.5rem);
    border: 1px solid var(--tan-dark);
  }

  .form-title { font-weight: 700; font-size: var(--text-xl); margin-bottom: var(--sp-xl); color: var(--black); }

  .form-field { margin-bottom: var(--sp-lg); }
  .form-field label {
    display: block;
    font-size: var(--text-xs); font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--brown); margin-bottom: 0.4em;
  }

  .form-field input,
  .form-field select,
  .form-field textarea {
    width: 100%;
    background: var(--white);
    border: 1px solid var(--tan-dark);
    border-radius: 3px;
    padding: 0.75em 1em;
    font-family: 'Poppins', sans-serif;
    font-size: var(--text-sm);
    color: var(--black);
    outline: none;
    transition: border-color 0.25s;
    appearance: none;
  }
  .form-field input:focus,
  .form-field select:focus,
  .form-field textarea:focus { border-color: var(--orange); }
  .form-field textarea { resize: vertical; min-height: 90px; }

  .form-submit {
    width: 100%;
    background: var(--orange);
    color: var(--white);
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: var(--text-sm);
    padding: 0.9em;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    letter-spacing: 0.04em;
    transition: background 0.25s, transform 0.2s;
    margin-top: var(--sp-sm);
  }
  .form-submit:hover { background: var(--orange-warm); transform: translateY(-1px); }

  .form-note { font-size: var(--text-xs); color: var(--text-muted); margin-top: var(--sp-sm); text-align: center; }

  /* ══════════════════════════════
     RESPONSIVE BREAKPOINTS
     (rem-based so font-scale is respected)
  ══════════════════════════════ */

  /* ≤ 64rem  (≈1024px) */
  @media (max-width: 64rem) {
    .hero { grid-template-columns: 60% 40%; }
  }

  /* ≤ 56.25rem  (≈900px) */
  @media (max-width: 56.25rem) {
    .hero { grid-template-columns: 1fr; min-height: auto; }
    .hero-right { display: none; }
    .hero-left { padding: 5rem var(--sec-x) 4vh; }
    .services-header { grid-template-columns: 1fr; }
    .why-grid { grid-template-columns: repeat(2, 1fr); }
    .contact-cta { grid-template-columns: 1fr; }
    .service-row { grid-template-columns: 2.5rem 1fr; }
    .sr-tag { display: none; }
    .tl-item { grid-template-columns: 3rem 1px 1fr; gap: 0 var(--sp-lg); }
    .trust-strip { padding: 1.25rem 0; }
    .trust-label { padding-left: 1.25rem; }
    .section-desc { padding-top: 0; margin-top: 0.1rem; }
  }

  /* ≤ 37.5rem  (≈600px) */
  @media (max-width: 37.5rem) {
    :root {
      --sec-x: clamp(1rem, 5vw, 1.5rem);
      --sec-y: clamp(2.5rem, 6vh, 4rem);
    }
    .why-grid { grid-template-columns: 1fr; }
    .trust-strip { flex-direction: column; gap: var(--sp-md); align-items: flex-start; }
    .trust-items { gap: var(--sp-md); }
    .hero-cta { flex-direction: column; align-items: stretch; }
    .btn-main { text-align: center; }
    .tl-item { grid-template-columns: 2.5rem 1px 1fr; gap: 0 var(--sp-md); }
    .tl-num { font-size: var(--text-xl); }
  }

  /* ≤ 25rem  (≈400px) */
  @media (max-width: 25rem) {
    :root { --text-hero: clamp(2.4rem, 13vw, 3rem); }
    .services-header { margin-bottom: var(--sp-2xl); }
  }
`;

/* ── Data ── */
const services = [
  { num: "01.", title: "Prior Art Search & Patentability Analysis",  text: "Comprehensive database searches across USPTO, EPO, and WIPO to assess novelty and non-obviousness of your invention before committing to a full application.", tag: "Phase 1" },
  { num: "02.", title: "Provisional Patent Application",              text: "Establish your priority filing date quickly and affordably with a provisional application — buying 12 months to refine your invention before full filing.", tag: "Phase 2" },
  { num: "03.", title: "Patent Drafting & Claim Engineering",         text: "Expert patent agents draft precise claims, detailed descriptions, and technical drawings that maximise the scope of protection for your technology.", tag: "Phase 3" },
  { num: "04.", title: "Non-Provisional (Utility) Patent Filing",     text: "Full patent application filing with the USPTO or relevant patent office, including all formal documentation, drawings, and government fee management.", tag: "Phase 4" },
  { num: "05.", title: "Office Action Responses",                     text: "Professional responses to patent examiner rejections — addressing § 102 and § 103 rejections with amended claims and persuasive arguments to advance prosecution.", tag: "Phase 5" },
  { num: "06.", title: "International PCT Filing",                    text: "Extend your IP protection to 150+ countries through PCT (Patent Cooperation Treaty) applications with coordinated national phase entry strategies.", tag: "Global" },
];

const timelineSteps = [
  { num: "1.", title: "Invention Disclosure Meeting",  text: "We sit with your team (engineers, founders, product leads) and extract every technically novel element of your invention through a structured interview process." },
  { num: "2.", title: "Patentability Search Report",   text: "We deliver a written patentability opinion within 5–7 days, identifying the strongest novel angles to pursue in your application." },
  { num: "3.", title: "Application Drafting",          text: "Our patent agents draft the full specification, claims, abstract, and technical drawings — reviewed and approved by you before filing." },
  { num: "4.", title: "Filing & Prosecution",          text: "We file with the relevant patent office and manage the entire prosecution — responding to examiners, amending claims, and keeping you informed at each step." },
  { num: "5.", title: "Grant & Portfolio Management",  text: "Upon grant, we advise on annuity payments, continuation applications, and building a defensible patent portfolio around your core technology." },
];

const whyCards = [
  { icon: "🔬", title: "Tech-First Expertise",  text: "Our agents have engineering and computer science backgrounds — they understand your invention at a technical depth most law firms cannot match." },
  { icon: "⚡", title: "Fast Turnaround",        text: "Provisional applications drafted in as little as 72 hours. We move at startup speed without cutting corners on quality or protection scope." },
  { icon: "🌐", title: "Global Coverage",        text: "US, EU, India, China, and 150+ countries through PCT. We coordinate your international IP strategy from a single point of contact." },
  { icon: "💡", title: "Claim Strategy",         text: "We don't just file — we engineer claims to maximise protection breadth while anticipating examiner objections and competitor workarounds." },
  { icon: "🔒", title: "Strict Confidentiality", text: "NDA-protected from day one. Your invention details are never shared, and all communications are encrypted and attorney-privileged." },
  { icon: "📊", title: "Transparent Pricing",    text: "No surprise bills. Fixed-fee packages for drafting and filing with clear government fee breakdowns — budgeting made predictable." },
];

const trustItems = ["USPTO & EPO Filing", "Tech-Specialised Experts", "95% Grant Rate", "Provisional to Full Patent", "International PCT Coverage", "Confidential & Secure"];

/* ── Component ── */
export default function PatentFiling() {
  const [formData, setFormData] = useState({ name: "", company: "", category: "Software / Algorithm", description: "" });

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = () => alert("Thank you! We'll be in touch shortly.");
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{styles}</style>
        <Header />


      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <div className="breadcrumb">Services <span>›</span> Patent Filing Support</div>
          <div className="hero-kicker">Protecting what you build</div>
          <h1 className="hero-title">Patent<br />Filing <em>Made</em><br />Simple</h1>
          <div className="hero-rule">
            <div className="hero-rule-line" />
            <div className="hero-rule-dot" />
          </div>
          <p className="hero-desc">We guide technology companies and innovators through the entire patent filing process — from prior art research to grant — with expert guidance at every step.</p>
          <div className="hero-cta">
            <button className="btn-main" onClick={() => scrollTo("contact")}>Start Your Application</button>
            <button className="btn-text"  onClick={() => scrollTo("services")}>View Services →</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="doc-stack">
            <div className="doc-card behind-1" />
            <div className="doc-card behind-2" />
            <div className="doc-card front">
              <div className="doc-header">
                <div className="doc-seal">PATENT<br />FILING</div>
                <div className="doc-id">Application No.<br />#US-2024-XXXXXX</div>
              </div>
              <div className="doc-lines">
                {[["medium","accent"],["full"],["full"],["short"],["full"],["medium"],["full"],["short","accent"],["full"],["medium"]].map((cls, i) => (
                  <div key={i} className={["doc-line", ...cls].join(" ")} />
                ))}
              </div>
              <div className="doc-stamp">⚖ Claims Drafted · Ready to File</div>
            </div>
          </div>
        </div>
      </section>

    {/* ── TRUST STRIP MARQUEE ── */}
      <div className="trust-strip">
        <div className="trust-label">Why Us</div>
        <div className="trust-track">
          {[...trustItems, ...trustItems].map((t, i) => (
            <div className="trust-item" key={i}>{t}</div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="services" id="services">
        <div className="services-header">
          <div>
            <div className="section-eyebrow">Our Services</div>
            <h2 className="section-heading">End-to-End<br />Patent <em>Support</em></h2>
          </div>
          <p className="section-desc">From the moment you have an invention idea to the day your patent is granted, we handle every legal and procedural step — leaving you free to keep building.</p>
        </div>
        <div className="service-list">
          {services.map((s) => (
            <div className="service-row" key={s.num}>
              <div className="sr-num">{s.num}</div>
              <div className="sr-body">
                <div className="sr-title">{s.title}</div>
                <div className="sr-text">{s.text}</div>
              </div>
              <div className="sr-tag">{s.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how">
        <div className="section-eyebrow">The Process</div>
        <h2 className="section-heading">From <em>Invention</em><br />to Grant</h2>
        <div className="timeline">
          {timelineSteps.map((s, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-num">{s.num}</div>
              <div className="tl-line" />
              <div className="tl-body">
                <div className="tl-title">{s.title}</div>
                <div className="tl-text">{s.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why">
        <div className="section-eyebrow">Why Choose Us</div>
        <h2 className="section-heading">Patent Experts<br />Who <em>Speak Tech</em></h2>
        <div className="why-grid">
          {whyCards.map((c) => (
            <div className="why-card" key={c.title}>
              <span className="wc-icon">{c.icon}</span>
              <div className="wc-title">{c.title}</div>
              <div className="wc-text">{c.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="contact-cta" id="contact">
        <div className="cta-content">
          <div className="section-eyebrow">Get Started</div>
          <h2 className="section-heading">Protect Your<br /><em>Innovation</em><br />Today</h2>
          <p>Every day without a filing date is a day your invention can be claimed by someone else. Let us secure your priority date and build a patent strategy around your technology.</p>
          <button className="btn-main">Schedule Free Consultation</button>
        </div>

        <div className="contact-form">
          <div className="form-title">Tell Us About Your Invention</div>

          <div className="form-field">
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Dr. Jane Smith" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Company / Organisation</label>
            <input type="text" name="company" placeholder="Acme Technologies Pvt Ltd" value={formData.company} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Invention Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option>Software / Algorithm</option>
              <option>Hardware / Device</option>
              <option>Biotech / Pharma</option>
              <option>Manufacturing Process</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-field">
            <label>Brief Description</label>
            <textarea name="description" placeholder="Describe your invention in 2–3 sentences..." value={formData.description} onChange={handleChange} />
          </div>

          <button className="form-submit" onClick={handleSubmit}>Submit for Free Review →</button>
          <p className="form-note">🔒 All submissions are protected by attorney-client privilege</p>
        </div>
      </section>
      <Footer />
    </>
  );
}