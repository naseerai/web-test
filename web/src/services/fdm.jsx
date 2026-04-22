import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@700;800;900&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --white: #ffffff;
    --black: #0f0f0f;
    --black-2: #1a1a1a;
    --black-3: #242424;
    --orange: #FF6B00;
    --orange-hover: #FF8C33;
    --orange-pale: #FFF3E8;
    --gray-light: #F6F5F3;
    --gray-mid: #E4E4E4;
    --gray-text: #606060;
    --text-dark: #111111;
    --font-main: 'Barlow', sans-serif;
    --font-display: 'Barlow Condensed', sans-serif;
  }

  .fdm-sla-page {
    font-family: var(--font-main);
    background: var(--white);
    color: var(--text-dark);
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* HERO */
  .hero {
    background: var(--black);
    padding: clamp(120px, 20vh, 200px) 6% 15vh; 
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
    width: 70vw;
    height: 70vw;
    background: radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 65%);
    pointer-events: none;
  }
  .hero-badge {
    display: inline-block;
    background: var(--orange);
    color: var(--white);
    font-size: 0.72rem;
    font-weight: 700;
    padding: 0.3rem 1rem;
    border-radius: 2rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
  .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(2.6rem, 6vw, 4.5rem);
    color: var(--white);
    font-weight: 900;
    line-height: 1.05;
    text-transform: uppercase;
    margin-bottom: 1.25rem;
    letter-spacing: -0.01em;
  }
  .hero h1 span { color: var(--orange); }
  .hero p {
    color: #999;
    font-size: clamp(0.95rem, 2vw, 1.1rem);
    max-width: 580px;
    margin: 0 auto 2.5rem;
    line-height: 1.75;
  }
  .hero-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

  /* BUTTONS */
  .btn-primary {
    background: var(--orange);
    color: var(--white);
    border: none;
    padding: 0.8rem 2.2rem;
    border-radius: 0.35rem;
    font-family: var(--font-main);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.18s;
    display: inline-block;
    text-align: center;
  }
  .btn-primary:hover { background: var(--orange-hover); transform: translateY(-2px); }

  .btn-outline {
    background: transparent;
    color: var(--white);
    border: 1.5px solid #484848;
    padding: 0.8rem 2.2rem;
    border-radius: 0.35rem;
    font-family: var(--font-main);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s, transform 0.18s;
    display: inline-block;
    text-align: center;
  }
  .btn-outline:hover { border-color: var(--orange); color: var(--orange); transform: translateY(-2px); }

  .btn-outline-dark {
    background: transparent;
    color: var(--black);
    border: 1.5px solid var(--gray-mid);
    padding: 0.8rem 2.2rem;
    border-radius: 0.35rem;
    font-family: var(--font-main);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s, transform 0.18s;
    display: inline-block;
    text-align: center;
  }
  .btn-outline-dark:hover { border-color: var(--orange); color: var(--orange); transform: translateY(-2px); }

  /* STATS BAR */
  .stats-bar {
    background: var(--orange);
    padding: 1rem 6%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    text-align: center;
  }
  .stat-item { color: var(--white); }
  .stat-num {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 3.5vw, 2.5rem);
    font-weight: 900;
    display: block;
    line-height: 1;
    letter-spacing: -0.02em;
  }
  .stat-label { font-size: 0.78rem; opacity: 0.9; font-weight: 500; margin-top: 0.2rem; display: block; }

  /* SECTION BASE */
  .section { padding: 6vh 6%; }
  .section-alt { background: var(--gray-light); }
  .section-dark { background: var(--black); }
  .section-tag {
    display: inline-block;
    background: var(--orange-pale);
    color: var(--orange);
    font-size: 0.72rem;
    font-weight: 700;
    padding: 0.25rem 0.85rem;
    border-radius: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 1rem;
  }
  .section-tag-dark {
    display: inline-block;
    background: rgba(255,107,0,0.15);
    color: var(--orange);
    font-size: 0.72rem;
    font-weight: 700;
    padding: 0.25rem 0.85rem;
    border-radius: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 1rem;
  }
  .section-title {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    color: var(--black);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }
  .section-title-white { color: var(--white); }
  .section-sub {
    color: var(--gray-text);
    font-size: 1rem;
    line-height: 1.75;
    max-width: 560px;
    margin-bottom: 3rem;
  }
  .section-sub-light { color: #aaa; }

  /* SERVICE CARDS */
  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: 2rem;
  }
  .service-card {
    background: var(--white);
    border: 1.5px solid var(--gray-mid);
    border-radius: 1rem;
    padding: 2rem;
    transition: border-color 0.22s, box-shadow 0.22s, transform 0.22s;
    cursor: pointer;
  }
  .service-card:hover {
    border-color: var(--orange);
    box-shadow: 0 8px 36px rgba(255,107,0,0.1);
    transform: translateY(-5px);
  }
  .card-icon {
    width: 3rem;
    height: 3rem;
    background: var(--orange-pale);
    border-radius: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
  }
  .card-icon svg { width: 1.4rem; height: 1.4rem; stroke: var(--orange); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
  .service-card h3 { font-size: 1.15rem; color: var(--black); font-weight: 700; margin-bottom: 0.55rem; }
  .service-card p { color: var(--gray-text); font-size: 0.9rem; line-height: 1.7; margin-bottom: 1.25rem; }
  .card-features { list-style: none; }
  .card-features li {
    font-size: 0.86rem;
    color: var(--gray-text);
    padding: 0.4rem 0;
    border-bottom: 1px solid var(--gray-mid);
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }
  .card-features li:last-child { border-bottom: none; }
  .card-features li::before { content: ''; width: 6px; height: 6px; background: var(--orange); border-radius: 50%; flex-shrink: 0; }
  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--orange);
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: 1.25rem;
    text-decoration: none;
    cursor: pointer;
    transition: gap 0.2s;
    background: none;
    border: none;
  }
  .card-link:hover { gap: 0.75rem; }

  /* COMPARE */
  .compare-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
    gap: 2rem;
    margin-top: 2.5rem;
  }
  .compare-card {
    background: var(--black-2);
    border: 1.5px solid #2e2e2e;
    border-radius: 1rem;
    overflow: hidden;
    transition: border-color 0.22s, transform 0.22s;
  }
  .compare-card:hover { border-color: var(--orange); transform: translateY(-5px); }
  .compare-header { background: var(--orange); padding: 1.6rem 2rem; }
  .compare-header h3 { color: var(--white); font-family: var(--font-display); font-size: 1.5rem; font-weight: 900; text-transform: uppercase; }
  .compare-header p { color: rgba(255,255,255,0.85); font-size: 0.85rem; margin-top: 0.3rem; }
  .compare-body { padding: 1.5rem 2rem; }
  .spec-row { display: flex; justify-content: space-between; align-items: flex-start; padding: 0.7rem 0; border-bottom: 1px solid #2a2a2a; gap: 1rem; }
  .spec-row:last-child { border-bottom: none; }
  .spec-label { color: #777; font-size: 0.85rem; flex-shrink: 0; }
  .spec-val { color: var(--white); font-size: 0.85rem; font-weight: 500; text-align: right; }

  /* MATERIALS */
  .tab-nav { display: flex; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap; }
  .tab-btn {
    padding: 0.55rem 1.3rem;
    border-radius: 2rem;
    border: 1.5px solid var(--gray-mid);
    background: transparent;
    color: var(--gray-text);
    font-family: var(--font-main);
    font-size: 0.88rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }
  .tab-btn.active, .tab-btn:hover { background: var(--orange); color: var(--white); border-color: var(--orange); }

  .mat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 185px), 1fr));
    gap: 1rem;
  }
  .mat-card {
    background: var(--white);
    border: 1.5px solid var(--gray-mid);
    border-radius: 0.75rem;
    padding: 1.2rem;
    transition: all 0.22s;
    cursor: pointer;
  }
  .mat-card:hover { border-color: var(--orange); background: var(--orange-pale); }
  .mat-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--orange); margin-bottom: 0.7rem; }
  .mat-card h4 { font-size: 0.95rem; color: var(--black); font-weight: 700; margin-bottom: 0.2rem; }
  .mat-card p { font-size: 0.8rem; color: var(--gray-text); }

  /* PROCESS */
  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 170px), 1fr));
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
  .step {
    background: var(--black-2);
    border: 1.5px solid #2e2e2e;
    border-radius: 1rem;
    padding: 1.5rem;
    transition: border-color 0.22s, transform 0.22s;
  }
  .step:hover { border-color: var(--orange); transform: translateY(-4px); }
  .step-num {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 900;
    color: var(--orange);
    opacity: 0.3;
    line-height: 1;
    margin-bottom: 0.75rem;
  }
  .step h4 { color: var(--white); font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; }
  .step p { color: #888; font-size: 0.83rem; line-height: 1.65; }

  /* USECASES */
  .usecase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
    gap: 1.25rem;
    margin-top: 2rem;
  }
  .uc-card {
    background: var(--white);
    border-radius: 0.75rem;
    padding: 1.4rem;
    border: 1.5px solid var(--gray-mid);
    transition: all 0.22s;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    cursor: pointer;
  }
  .uc-card:hover { border-color: var(--orange); background: var(--orange-pale); }
  .uc-icon {
    width: 2.6rem;
    height: 2.6rem;
    background: var(--black);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .uc-icon svg { width: 1.15rem; height: 1.15rem; stroke: var(--orange); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
  .uc-card h4 { font-size: 0.95rem; color: var(--black); font-weight: 700; margin-bottom: 0.3rem; }
  .uc-card p { font-size: 0.82rem; color: var(--gray-text); line-height: 1.6; }

  /* PRICING */
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 270px), 1fr));
    gap: 1.75rem;
    margin-top: 2rem;
  }
  .price-card {
    border: 1.5px solid var(--gray-mid);
    border-radius: 1rem;
    padding: 2rem;
    background: var(--white);
    transition: all 0.22s;
  }
  .price-card:hover { border-color: var(--orange); transform: translateY(-5px); }
  .price-card.featured { background: var(--black); border-color: var(--orange); }
  .price-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; color: var(--orange); margin-bottom: 0.75rem; }
  .price-card h3 { font-size: 1.2rem; color: var(--black); font-weight: 700; margin-bottom: 0.5rem; }
  .price-card.featured h3 { color: var(--white); }
  .price-amount { font-family: var(--font-display); font-size: 2.4rem; font-weight: 900; color: var(--black); margin: 1rem 0; line-height: 1; }
  .price-card.featured .price-amount { color: var(--white); }
  .price-amount span { font-family: var(--font-main); font-size: 0.88rem; font-weight: 400; color: var(--gray-text); }
  .price-card.featured .price-amount span { color: #888; }
  .price-features { list-style: none; margin: 1.25rem 0; }
  .price-features li {
    font-size: 0.87rem;
    color: var(--gray-text);
    padding: 0.45rem 0;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    border-bottom: 1px solid var(--gray-mid);
  }
  .price-card.featured .price-features li { color: #bbb; border-color: #2a2a2a; }
  .price-features li:last-child { border-bottom: none; }
  .price-features li::before { content: '✓'; color: var(--orange); font-weight: 800; font-size: 0.82rem; }
  .price-btn-wrap { margin-top: 1.25rem; }

  /* FAQ */
  .faq-list { max-width: 800px; margin-top: 2rem; }
  .faq-item {
    background: var(--white);
    border: 1.5px solid var(--gray-mid);
    border-radius: 0.75rem;
    margin-bottom: 1rem;
    overflow: hidden;
    transition: border-color 0.22s;
  }
  .faq-item:hover { border-color: var(--orange); }
  .faq-q {
    padding: 1.25rem 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    font-weight: 600;
    color: var(--black);
    font-size: 0.95rem;
    user-select: none;
  }
  .faq-toggle {
    width: 1.5rem;
    height: 1.5rem;
    background: var(--orange-pale);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 1.1rem;
    color: var(--orange);
    font-weight: 700;
    transition: transform 0.2s, background 0.2s, color 0.2s;
  }
  .faq-toggle.open { transform: rotate(45deg); background: var(--orange); color: var(--white); }
  .faq-a { padding: 0 1.5rem 1.25rem; color: var(--gray-text); font-size: 0.9rem; line-height: 1.75; }

  /* CTA */
  .cta-section { background: var(--black); padding: 8vh 6%; text-align: center; position: relative; overflow: hidden; }
  .cta-section::before {
    content: '';
    position: absolute;
    bottom: -40%;
    left: 50%;
    transform: translateX(-50%);
    width: 60vw;
    height: 60vw;
    background: radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 65%);
    pointer-events: none;
  }
  .cta-section h2 {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: var(--white);
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 1rem;
    letter-spacing: -0.01em;
  }
  .cta-section h2 span { color: var(--orange); }
  .cta-section p { color: #aaa; font-size: 1rem; max-width: 520px; margin: 0 auto 2.5rem; line-height: 1.75; }
  .cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
`;

const fdmMaterials = [
  { name: "PLA+", desc: "Easy to print, rigid, great detail" },
  { name: "ABS", desc: "Heat resistant, impact tough" },
  { name: "PETG", desc: "Food-safe, chemical resistant" },
  { name: "TPU / TPE", desc: "Flexible, rubber-like parts" },
  { name: "Nylon PA12", desc: "Strong, lightweight, low friction" },
  { name: "Carbon Fiber", desc: "Stiff, lightweight, structural" },
];
const slaMaterials = [
  { name: "Standard Resin", desc: "High detail, smooth finish" },
  { name: "Tough Resin", desc: "ABS-like, impact resistant" },
  { name: "Clear Resin", desc: "Transparent optical parts" },
  { name: "Flexible Resin", desc: "Shore 50A, soft touch" },
  { name: "Dental Resin", desc: "Biocompatible, medical grade" },
  { name: "Castable Resin", desc: "Lost-wax casting patterns" },
];

const faqData = [
  { q: "Which process should I choose — FDM or SLA?", a: "Choose FDM for large, functional parts that need strength and durability at lower cost. Choose SLA when you need fine detail, smooth surfaces, or are working with dental/medical applications." },
  { q: "What file formats do you accept?", a: "We accept STL, OBJ, STEP, and 3MF files. For best results, export STL at high resolution (≤0.01mm chord deviation)." },
  { q: "What is the minimum wall thickness?", a: "FDM: minimum 1.2mm wall thickness. SLA: minimum 0.5mm for vertical walls, 1mm for horizontal. Thinner sections may print but structural integrity is not guaranteed." },
  { q: "Do you offer post-processing and finishing?", a: "Yes! We offer sanding, priming, painting, acetone smoothing for ABS, UV coating for resins, and threaded inserts installation. Request finishing options during checkout." },
  { q: "Can I order small batches or single prototypes?", a: "Absolutely. We accept single-piece orders with no minimum quantity. Volume pricing kicks in at 10+ identical parts." },
  { q: "How do you ensure part quality?", a: "Every part goes through a 3-stage QC: print parameter verification, dimensional inspection with calipers, and visual quality check before shipping." },
];

const LayersIcon = () => (
  <svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);
const GridIcon = () => (
  <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
);
const MonitorIcon = () => (
  <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
);
const FlaskIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M9 3h6m-5 8H5a2 2 0 00-2 2v1a2 2 0 002 2h14a2 2 0 002-2v-1a2 2 0 00-2-2h-5M9 3v5l-3 5m9-10v5l3 5"/></svg>
);
const CarIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2l1.5-3h13L19 7a2 2 0 012 2v6a2 2 0 01-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></svg>
);
const PaperPlaneIcon = () => (
  <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);
const CpuIcon = () => (
  <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
);
const BookIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
);

export default function FDMSLAPage() {
  const [matTab, setMatTab] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  const visibleMaterials = matTab === "all"
    ? [...fdmMaterials, ...slaMaterials]
    : matTab === "fdm" ? fdmMaterials : slaMaterials;

  return (
    <>
      <style>{styles}</style>
      
<Header />
      <div className="fdm-sla-page">

        {/* HERO */}
        <section className="hero">
          <div className="hero-badge">3D Printing Services</div>
          <h1>Professional <span>FDM & SLA</span><br />3D Printing Solutions</h1>
          <p>From rapid prototyping to production-ready parts — precision, speed, and quality with industry-leading technologies.</p>
          <div className="hero-btns">
            <button className="btn-primary">Get Instant Quote</button>
            <button className="btn-outline">View Sample Prints</button>
          </div>
        </section>

        {/* STATS */}
        <div className="stats-bar">
          {[["500+","Materials Available"],["24hr","Turnaround Time"],["0.1mm","Tolerance Accuracy"],["10K+","Parts Delivered"]].map(([n,l]) => (
            <div className="stat-item" key={l}>
              <span className="stat-num">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <section className="section">
          <div className="section-tag">Our Technologies</div>
          <h2 className="section-title">Two Powerful Printing Technologies</h2>
          <p className="section-sub">Choose the right process for your project — FDM for strong functional parts, SLA for ultra-fine detail and smooth surfaces.</p>
          <div className="service-grid">
            {[
              {
                icon: <LayersIcon />,
                title: "FDM — Fused Deposition Modeling",
                desc: "Ideal for durable, functional prototypes and end-use parts. FDM builds layer by layer using thermoplastic filaments — fast, cost-effective, and versatile for large parts.",
                features: ["Build volume up to 400 × 400 × 500mm","Layer resolution 0.05mm – 0.3mm","30+ engineering-grade materials","Supports complex geometries with infill control","Best for: jigs, fixtures, enclosures, mockups"]
              },
              {
                icon: <GridIcon />,
                title: "SLA — Stereolithography",
                desc: "For parts demanding exceptional surface finish and intricate detail. SLA uses UV laser to cure resin layer by layer — delivering smooth, precise results perfect for presentation models.",
                features: ["Layer resolution down to 0.025mm","Mirror-smooth surface finish","Clear, flexible, and engineering resins","Exceptional dimensional accuracy","Best for: jewelry, dental, display models"]
              }
            ].map(card => (
              <div className="service-card" key={card.title}>
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <ul className="card-features">
                  {card.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <button className="card-link">Explore More →</button>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARE */}
        <section className="section section-dark">
          <div className="section-tag-dark">FDM vs SLA</div>
          <h2 className="section-title section-title-white">Side-by-Side Comparison</h2>
          <p className="section-sub section-sub-light">Not sure which process fits your project? Compare key specs below.</p>
          <div className="compare-grid">
            {[
              { title:"FDM Printing", sub:"Functional & Cost-Efficient", specs:[["Layer Height","0.05 – 0.3mm"],["Surface Finish","Slightly textured"],["Material Types","PLA, ABS, PETG, TPU, Nylon, CF"],["Build Volume","Up to 400×400×500mm"],["Best For","Functional parts, large prints"],["Cost","★ Low to Medium"],["Turnaround","Same day – 2 days"]] },
              { title:"SLA Printing", sub:"Ultra-detail & Precision", specs:[["Layer Height","0.025 – 0.1mm"],["Surface Finish","Glass-smooth"],["Material Types","Standard, Tough, Flexible, Clear, Dental"],["Build Volume","Up to 145×145×185mm"],["Best For","High detail, visual models"],["Cost","★★ Medium to High"],["Turnaround","1 – 3 days"]] },
            ].map(c => (
              <div className="compare-card" key={c.title}>
                <div className="compare-header"><h3>{c.title}</h3><p>{c.sub}</p></div>
                <div className="compare-body">
                  {c.specs.map(([l,v]) => (
                    <div className="spec-row" key={l}>
                      <span className="spec-label">{l}</span>
                      <span className="spec-val">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MATERIALS */}
        <section className="section">
          <div className="section-tag">Materials Library</div>
          <h2 className="section-title">Extensive Material Options</h2>
          <p className="section-sub">We stock a wide range of materials for every application from prototyping to end-use production.</p>
          <div className="tab-nav">
            {[["all","All Materials"],["fdm","FDM Materials"],["sla","SLA Resins"]].map(([val,label]) => (
              <button key={val} className={`tab-btn${matTab===val?" active":""}`} onClick={() => setMatTab(val)}>{label}</button>
            ))}
          </div>
          <div className="mat-grid">
            {visibleMaterials.map(m => (
              <div className="mat-card" key={m.name}>
                <div className="mat-dot" />
                <h4>{m.name}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="section section-dark">
          <div className="section-tag-dark">How It Works</div>
          <h2 className="section-title section-title-white">Simple 5-Step Process</h2>
          <p className="section-sub section-sub-light">From file upload to part delivery — we make 3D printing effortless.</p>
          <div className="steps">
            {[
              ["01","Upload Your File","Submit STL, OBJ, or STEP files through our secure portal."],
              ["02","Select Process","Choose FDM or SLA, material, finish, and quantity."],
              ["03","Instant Quote","Receive pricing and lead time within seconds."],
              ["04","We Print It","Our machines produce your part with full quality checks."],
              ["05","Fast Delivery","Packaged carefully and shipped directly to you."],
            ].map(([n,h,p]) => (
              <div className="step" key={n}>
                <div className="step-num">{n}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section className="section section-alt">
          <div className="section-tag">Industries We Serve</div>
          <h2 className="section-title">Trusted Across Industries</h2>
          <p className="section-sub">Our FDM and SLA services power innovation in the most demanding sectors.</p>
          <div className="usecase-grid">
            {[
              [<MonitorIcon/>, "Product Design", "Rapid prototyping and concept validation before mass production."],
              [<FlaskIcon/>, "Medical & Dental", "Biocompatible parts, surgical guides, and dental models."],
              [<CarIcon/>, "Automotive", "Functional brackets, fixtures, and custom interior components."],
              [<PaperPlaneIcon/>, "Aerospace", "Lightweight structural components and wind tunnel models."],
              [<CpuIcon/>, "Electronics", "Custom enclosures, PCB holders, and cable management parts."],
              [<BookIcon/>, "Education & Research", "Lab instruments, teaching aids, and research models."],
              [<HeartIcon/>, "Jewelry & Fashion", "Castable wax patterns, display models, and accessories."],
              [<GridIcon/>, "Architecture", "Scale models, facade details, and presentation pieces."],
            ].map(([icon, title, desc]) => (
              <div className="uc-card" key={title}>
                <div className="uc-icon">{icon}</div>
                <div><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="section">
          <div className="section-tag">Pricing Plans</div>
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-sub">No hidden fees. Pay only for what you print. Volume discounts available for production runs.</p>
          <div className="pricing-grid">
            {[
              { label:"Starter", name:"FDM Basic", price:"₹499", unit:"/ part", featured:false,
                features:["PLA / PETG material","Layer height 0.2mm","Standard finish","3–5 day turnaround","Up to 150×150×150mm"] },
              { label:"Most Popular", name:"FDM Pro", price:"₹1,299", unit:"/ part", featured:true,
                features:["All materials including CF & Nylon","Layer height 0.1mm","Sanded & primed finish","24–48hr turnaround","Up to 400×400×500mm"] },
              { label:"Precision", name:"SLA Detail", price:"₹1,899", unit:"/ part", featured:false,
                features:["Full resin material library","Layer height 0.025mm","Glass-smooth finish","1–3 day turnaround","Post-processing included"] },
            ].map(p => (
              <div className={`price-card${p.featured?" featured":""}`} key={p.name}>
                <div className="price-label">{p.label}</div>
                <h3>{p.name}</h3>
                <div className="price-amount">{p.price} <span>{p.unit}</span></div>
                <ul className="price-features">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <div className="price-btn-wrap">
                  <button className="btn-primary" style={{width:"100%"}}>Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt">
          <div className="section-tag">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Everything you need to know before placing your order.</p>
          <div className="faq-list">
            {faqData.map((item, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {item.q}
                  <span className={`faq-toggle${openFaq===i?" open":""}`}>+</span>
                </div>
                {openFaq === i && <div className="faq-a">{item.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Ready to Bring Your <span>Ideas to Life?</span></h2>
          <p>Upload your 3D file and get an instant quote. Our engineers are available to help you choose the right process and material for your application.</p>
          <div className="cta-btns">
            <button className="btn-primary">Upload File & Get Quote</button>
            <button className="btn-outline">Talk to an Engineer</button>
          </div>
        </section>
<Footer />
      </div>
    </>
  );
}