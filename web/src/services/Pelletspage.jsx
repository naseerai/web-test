import { useState, useEffect, useRef } from "react";
// Assuming these are the paths to your existing components
import Header from "../components/header"; 
import Footer from "../components/Footer";


const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --orange: #FF5C00;
    --orange-light: #FF7A2E;
    --orange-pale: #FFF0E8;
    --black: #0A0A0A;
    --gray-dark: #1C1C1C;
    --gray-mid: #555;
    --gray-light: #999;
    --gray-bg: #F5F5F3;
    --white: #FFFFFF;
  }

  .pellets-page {
    font-family: 'DM Sans', sans-serif;
    color: var(--black);
    background: var(--white);
    overflow-x: hidden;
  }

  /* ── HERO ── */
  .hero {
    position: relative;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
  }

  /* Ensure content doesn't get hidden behind a fixed header if your header is fixed */
  .hero-left {
    background: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8% 6% 8% 8%;
    position: relative;
    z-index: 2;
  }

  .hero-left::after {
    content: '';
    position: absolute;
    right: -60px;
    top: 0;
    bottom: 0;
    width: 120px;
    background: var(--black);
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    z-index: 3;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--orange);
    color: var(--white);
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 0.4rem 1rem;
    border-radius: 2px;
    width: fit-content;
    margin-bottom: 2rem;
    animation: fadeUp 0.8s ease both;
  }

  .hero-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(3rem, 5vw, 5.5rem);
    font-weight: 800;
    color: var(--white);
    line-height: 1.05;
    margin-bottom: 1.5rem;
    animation: fadeUp 0.8s 0.15s ease both;
  }

  .hero-title span {
    color: var(--orange);
  }

  .hero-desc {
    color: #aaa;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    line-height: 1.8;
    max-width: 420px;
    margin-bottom: 3rem;
    animation: fadeUp 0.8s 0.3s ease both;
  }

  .hero-cta {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    animation: fadeUp 0.8s 0.45s ease both;
    flex-wrap: wrap;
  }

  .btn-primary {
    background: var(--orange);
    color: var(--white);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.9rem 2rem;
    border: none;
    cursor: pointer;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.15);
    transform: translateX(-100%);
    transition: transform 0.4s ease;
  }

  .btn-primary:hover::after { transform: translateX(0); }

  .btn-link {
    color: #aaa;
    font-size: 0.9rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: color 0.3s;
  }

  .btn-link:hover { color: var(--white); }

  .hero-right {
    position: relative;
    overflow: hidden;
  }

  .hero-right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.8);
    transition: transform 8s ease;
    transform: scale(1.05);
  }

  .hero-right:hover img { transform: scale(1); }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(10,10,10,0.3), transparent);
  }

  .hero-stat-row {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    gap: 1.5rem;
  }

  .hero-stat {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.2);
    padding: 0.8rem 1.2rem;
    text-align: center;
  }

  .hero-stat strong {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--white);
  }

  .hero-stat span {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.7);
    letter-spacing: 0.05em;
  }

  /* ── MARQUEE ── */
  .marquee-strip {
    background: var(--orange);
    overflow: hidden;
    padding: 0.75rem 0;
    white-space: nowrap;
  }

  .marquee-inner {
    display: inline-flex;
    animation: marquee 20s linear infinite;
  }

  .marquee-item {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--white);
    padding: 0 2.5rem;
  }

  .marquee-dot {
    color: rgba(255,255,255,0.5);
  }

  /* ── INTRO ── */
  .intro-section {
    padding: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 8rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .section-label {
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 1rem;
  }

  .intro-heading {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  .intro-text {
    color: var(--gray-mid);
    font-size: 1rem;
    line-height: 1.9;
    margin-bottom: 2rem;
  }

  .spec-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .spec-item {
    border-left: 3px solid var(--orange);
    padding: 0.75rem 1rem;
    background: var(--gray-bg);
  }

  .spec-item strong {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
  }

  .spec-item span {
    font-size: 0.8rem;
    color: var(--gray-mid);
  }

  .intro-image-wrap {
    position: relative;
  }

  .intro-image-wrap img {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    display: block;
  }

  .intro-image-badge {
    position: absolute;
    top: -1.5rem;
    right: -1.5rem;
    background: var(--orange);
    color: var(--white);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    box-shadow: 0 10px 30px rgba(255,92,0,0.35);
    z-index: 5;
  }

  .intro-image-badge strong {
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1;
  }

  .intro-image-badge span {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  /* ── TYPES SECTION ── */
  .types-section {
    background: var(--black);
    padding: clamp(2rem, 5vw, 7rem) clamp(1.5rem, 6vw, 8rem);
  }

  .types-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 3.5rem;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .types-heading {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 700;
    color: var(--white);
    max-width: 400px;
    line-height: 1.2;
  }

  .types-sub {
    color: #777;
    max-width: 350px;
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5px;
    background: #333;
  }

  .type-card {
    background: var(--gray-dark);
    padding: 2.5rem;
    transition: background 0.3s ease;
    cursor: default;
    position: relative;
    overflow: hidden;
  }

  .type-card::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--orange);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  .type-card:hover { background: #222; }
  .type-card:hover::before { transform: scaleX(1); }

  .type-num {
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #333;
    line-height: 1;
    margin-bottom: 1.5rem;
    transition: color 0.3s;
  }

  .type-card:hover .type-num { color: #444; }

  .type-name {
    font-family: 'Poppins', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.75rem;
  }

  .type-desc {
    color: #777;
    font-size: 0.88rem;
    line-height: 1.8;
  }

  /* ── IMAGE BREAK ── */
  .img-break {
    position: relative;
    height: clamp(300px, 45vw, 520px);
    overflow: hidden;
  }

  .img-break img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5) grayscale(0.2);
  }

  .img-break-content {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    z-index: 5;
  }

  .img-break-content h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 800;
    color: var(--white);
    margin-bottom: 1rem;
  }

  .img-break-content p {
    color: rgba(255,255,255,0.75);
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    max-width: 600px;
  }

  /* ── PROCESS ── */
  .process-section {
    padding: clamp(2rem, 4vw, 7rem) clamp(1.5rem, 6vw, 8rem);
    background: var(--gray-bg);
  }

  .process-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .process-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 700;
    margin-top: 0.5rem;
  }

  .process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0;
    position: relative;
  }

  .process-steps::before {
    content: '';
    position: absolute;
    top: 2.5rem;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(to right, var(--orange), transparent);
  }

  .process-step {
    padding: 0 2rem;
    position: relative;
    text-align: center;
  }

  .step-circle {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: var(--white);
    border: 2px solid var(--orange);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--orange);
    margin: 0 auto 1.5rem;
    position: relative;
    z-index: 1;
    box-shadow: 0 4px 20px rgba(255,92,0,0.15);
  }

  .step-title {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .step-desc {
    color: var(--gray-mid);
    font-size: 0.85rem;
    line-height: 1.7;
  }

  /* ── APPLICATIONS ── */
  .apps-section {
    padding: clamp(2rem, 4vw, 7rem) clamp(1.5rem, 6vw, 8rem);
  }

  .apps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .app-card {
    border: 1px solid #eee;
    padding: 2rem;
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;
  }

  .app-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 4px;
    height: 100%;
    background: var(--orange);
    transform: scaleY(0);
    transition: transform 0.35s ease;
    transform-origin: top;
  }

  .app-card:hover {
    border-color: transparent;
    box-shadow: 0 12px 40px rgba(0,0,0,0.08);
    transform: translateY(-4px);
  }

  .app-card:hover::after { transform: scaleY(1); }

  .app-icon {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .app-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  .app-text {
    color: var(--gray-mid);
    font-size: 0.88rem;
    line-height: 1.75;
  }

  /* ── CTA ── */
  .cta-section {
    background: var(--black);
    padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 8rem);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .cta-section::before {
    content: 'PELLETS';
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: clamp(5rem, 15vw, 14rem);
    color: rgba(255,255,255,0.03);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    pointer-events: none;
  }

  .cta-label {
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 1rem;
  }

  .cta-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 800;
    color: var(--white);
    margin-bottom: 1.5rem;
    position: relative;
  }

  .cta-text {
    color: #777;
    font-size: 1rem;
    max-width: 500px;
    margin: 0 auto 2.5rem;
    line-height: 1.8;
    position: relative;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
  }

  .btn-outline {
    background: transparent;
    color: var(--white);
    border: 1.5px solid #444;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.9rem 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-outline:hover {
    border-color: var(--white);
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; min-height: auto; }
    .hero-left { padding: 5rem 2rem 3rem; }
    .hero-left::after { display: none; }
    .hero-right { height: 55vw; min-height: 280px; }
    .hero-stat-row { bottom: 1rem; right: 1rem; gap: 0.75rem; }

    .intro-section { grid-template-columns: 1fr; gap: 2.5rem; }
    .intro-image-wrap { order: -1; }
    .intro-image-badge { right: 0.5rem; top: -1rem; width: 90px; height: 90px; }
    .intro-image-badge strong { font-size: 1.4rem; }

    .types-header { flex-direction: column; align-items: flex-start; }

    .process-steps::before { display: none; }
  }

  @media (max-width: 600px) {
    .hero-stat-row { flex-direction: column; gap: 0.5rem; }
    .hero-stat { padding: 0.6rem 1rem; }
    .hero-stat strong { font-size: 1.1rem; }
    .spec-list { grid-template-columns: 1fr; }
    .process-step { padding: 0 0.5rem; margin-bottom: 2rem; }
  }
`;

const typeCards = [
  { num: "01", name: "Virgin Pellets", desc: "First-run polymer pellets with the highest material purity, produced directly from raw resin sources." },
  { num: "02", name: "Recycled Pellets", desc: "Re-processed from post-consumer or industrial waste, maintaining tight quality specifications." },
  { num: "03", name: "Compound Pellets", desc: "Custom-blended pellets with additives like UV stabilizers, flame retardants, and colorants." },
  { num: "04", name: "Biodegradable Pellets", desc: "PLA and biopolymer-based materials formulated for compostable end-of-life requirements." },
];

const steps = [
  { n: "01", title: "Raw Sourcing", desc: "Procuring base polymers from certified resin manufacturers worldwide." },
  { n: "02", title: "Extrusion", desc: "Precision twin-screw extruder processes the polymer melt under controlled parameters." },
  { n: "03", title: "Strand Cutting", desc: "Homogeneous strand die and water bath followed by precision strand pelletizer." },
  { n: "04", title: "QA & Grading", desc: "MFI, density, and contamination checks before packaging and dispatch." },
];

const apps = [
  { icon: "⚙️", title: "Injection Moulding", text: "High-flow pellets optimised for complex cavity fills and thin-wall moulding applications." },
  { icon: "🏗️", title: "Extrusion & Blow Moulding", text: "Consistent melt index for pipes, films, sheets, and blow-moulded hollow parts." },
  { icon: "🖨️", title: "3D Printing Feedstock", text: "Uniform pellet geometry for reliable extrusion in large-format industrial FGF printers." },
  { icon: "🔬", title: "Compounding", text: "Base substrate for downstream compounders who add specialty additives and fillers." },
  { icon: "🌿", title: "Green Packaging", desc: "Compostable biopolymer grades meeting EN 13432 and ASTM D6400 standards." },
  { icon: "🚗", title: "Automotive Interiors", text: "Low-VOC, high-heat grades suitable for dashboard, trim, and under-bonnet components." },
];

export default function PelletsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="pellets-page">
        
        {/* IMPORTED HEADER */}
        <Header scrolled={scrolled} />

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="hero-tag">Industrial Grade · Premium Quality</div>
            <h1 className="hero-title">
              Precision<br />
              <span>Polymer</span><br />
              Pellets
            </h1>
            <p className="hero-desc">
              Engineered plastic pellets manufactured to the tightest tolerances — the fundamental building block for every high-performance plastic product.
            </p>
            <div className="hero-cta">
              <button className="btn-primary">Request a Sample →</button>
              <a href="#specs" className="btn-link">View Specs ↓</a>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80"
              alt="Industrial Plastic pellets"
            />
            <div className="hero-overlay" />
            <div className="hero-stat-row">
              <div className="hero-stat">
                <strong>99.8%</strong>
                <span>Purity</span>
              </div>
              <div className="hero-stat">
                <strong>50+</strong>
                <span>Polymer Grades</span>
              </div>
              <div className="hero-stat">
                <strong>ISO</strong>
                <span>9001 Certified</span>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee-strip">
          <div className="marquee-inner">
            {[...Array(2)].map((_, i) =>
              ["PP Pellets", "PE Pellets", "ABS", "PET", "Nylon PA6", "Polycarbonate", "PLA Bio", "HDPE", "LDPE", "TPU"].map((t, j) => (
                <span className="marquee-item" key={`${i}-${j}`}>
                  {t} <span className="marquee-dot">◆</span>
                </span>
              ))
            )}
          </div>
        </div>

        {/* INTRO */}
        <section className="intro-section" id="specs">
          <div>
            <div className="section-label">What We Offer</div>
            <h2 className="intro-heading">
              The Foundation of Every Plastic Product
            </h2>
            <p className="intro-text">
              Our pellets are produced through precision extrusion processes, delivering consistent melt flow index, particle geometry, and material properties batch after batch. From virgin resins to engineered compounds, our portfolio covers virtually every thermoplastic need.
            </p>
            <div className="spec-list">
              <div className="spec-item">
                <strong>2–5 mm</strong>
                <span>Pellet diameter</span>
              </div>
              <div className="spec-item">
                <strong>±0.1 g/10min</strong>
                <span>MFI tolerance</span>
              </div>
              <div className="spec-item">
                <strong>&lt;100 ppm</strong>
                <span>Moisture content</span>
              </div>
              <div className="spec-item">
                <strong>25 kg</strong>
                <span>Standard bag size</span>
              </div>
            </div>
          </div>
          <div className="intro-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000"
              alt="Quality Lab Testing"
            />
            <div className="intro-image-badge">
              <strong>12+</strong>
              <span>Years in<br />Industry</span>
            </div>
          </div>
        </section>

        {/* TYPES */}
        <section className="types-section">
          <div className="types-header">
            <h2 className="types-heading">Our Pellet<br />Product Range</h2>
            <p className="types-sub">
              Each grade is independently tested against international standards before leaving our facility.
            </p>
          </div>
          <div className="types-grid">
            {typeCards.map((c) => (
              <div className="type-card" key={c.num}>
                <div className="type-num">{c.num}</div>
                <div className="type-name">{c.name}</div>
                <div className="type-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGE BREAK */}
        <div className="img-break">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920"
            alt="Manufacturing Process"
          />
          <div className="img-break-content">
            <h2>Made With Precision.<br />Built For Scale.</h2>
            <p>From lab-scale formulation to multi-tonne production runs, our process adapts to your output requirements without compromising quality.</p>
          </div>
        </div>

        {/* PROCESS */}
        <section className="process-section">
          <div className="process-header">
            <div className="section-label">Our Methodology</div>
            <h2 className="process-title">From Resin to Ready-to-Use Pellet</h2>
          </div>
          <div className="process-steps">
            {steps.map((s) => (
              <div className="process-step" key={s.n}>
                <div className="step-circle">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="apps-section">
          <div className="section-label">Applications</div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 700 }}>
            Where Our Pellets Go
          </h2>
          <div className="apps-grid">
            {apps.map((a) => (
              <div className="app-card" key={a.title}>
                <div className="app-icon">{a.icon}</div>
                <div className="app-title">{a.title}</div>
                <div className="app-text">{a.text || a.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-label">Get Started</div>
          <h2 className="cta-title">Ready to Source Premium Pellets?</h2>
          <p className="cta-text">Talk to our materials team. Get data sheets, samples, and competitive pricing within 24 hours.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Request Quote →</button>
            <button className="btn-outline">Download Data Sheet</button>
          </div>
        </section>

        {/* IMPORTED FOOTER */}
        <Footer />

      </div>
    </>
  );
}