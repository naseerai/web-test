import { useState } from "react";
import Header from "../components/header"; 
import Footer from "../components/Footer";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --orange: #FF5C00;
    --orange-light: #FF7A2E;
    --orange-pale: #FFF2EA;
    --black: #080808;
    --gray-mid: #555;
    --gray-light: #999;
    --gray-bg: #F5F5F3;
    --white: #FFFFFF;
    --line: #E8E8E8;
  }

  .filaments-page {
    font-family: 'DM Sans', sans-serif;
    color: var(--black);
    background: var(--white);
    overflow-x: hidden;
  }

  /* ── EDITORIAL HERO ── */
.f-hero {
  padding: clamp(5rem, 19vh, 6rem) clamp(1.5rem, 5vw, 6rem) clamp(2rem, 5vw, 4rem); 
  border-bottom: 1px solid var(--line);
}
  .filaments-page {
  display: flex;
  flex-direction: column;
}

  .f-hero-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: clamp(2rem, 5vw, 4rem);
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--line);
    flex-wrap: wrap;
    gap: 1rem;
  }

  .f-brand {
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 0.9rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--orange);
  }

  .f-tagline {
    font-size: 0.8rem;
    color: var(--gray-light);
    letter-spacing: 0.08em;
  }

  .f-issue {
    font-size: 0.75rem;
    color: var(--gray-light);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .f-hero-main {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: clamp(2rem, 5vw, 5rem);
    align-items: start;
  }

  .f-hero-headline {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(3.5rem, 7vw, 7.5rem);
    font-weight: 700;
    line-height: 0.93;
    letter-spacing: -0.03em;
    color: var(--black);
  }

  .f-hero-headline .orange { color: var(--orange); }

  .f-hero-right {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 1rem;
  }

  .f-hero-right p {
    color: var(--gray-mid);
    font-size: clamp(0.9rem, 1.3vw, 1rem);
    line-height: 1.9;
    border-left: 3px solid var(--orange);
    padding-left: 1.25rem;
  }

  .f-hero-mini-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .f-mini-stat {
    padding: 1rem;
    border: 1px solid var(--line);
  }

  .f-mini-stat strong {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--orange);
  }

  .f-mini-stat span {
    font-size: 0.78rem;
    color: var(--gray-mid);
  }

  .f-cta-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn-solid {
    background: var(--black);
    color: var(--white);
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
    padding: 0.8rem 1.75rem;
    cursor: pointer;
    letter-spacing: 0.03em;
    transition: background 0.3s;
  }
  .btn-solid:hover { background: var(--orange); }

  .btn-border {
    background: transparent;
    color: var(--black);
    border: 1.5px solid var(--black);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
    padding: 0.8rem 1.75rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  .btn-border:hover { background: var(--black); color: var(--white); }

  /* ── HERO IMAGE STRIP ── */
  .f-img-strip {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 0.4rem;
    height: clamp(280px, 38vw, 480px);
    padding: 0.4rem clamp(1.5rem, 5vw, 6rem);
  }

  .f-img-strip img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.85) saturate(1.1);
    display: block;
    transition: filter 0.5s;
  }

  .f-img-strip img:hover { filter: brightness(1) saturate(1.3); }

  /* ── PRODUCT GRID ── */
  .f-products {
    padding: clamp(2rem, 4vw, 7rem) clamp(1.5rem, 5vw, 6rem);
  }

  .f-section-header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--line);
    gap: 2rem;
  }

  .f-section-num {
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    color: var(--orange);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .f-section-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 700;
  }

  .f-section-desc {
    color: var(--gray-mid);
    font-size: 0.9rem;
    max-width: 350px;
    line-height: 1.7;
    text-align: right;
  }

  .f-prod-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2px;
    background: #ffffff;
  }

  .f-prod-card {
    background: var(--white);
    padding: 0;
    overflow: hidden;
    cursor: default;
    transition: all 0.3s;
  }

  .f-prod-card:hover { z-index: 1; }

  .f-prod-img {
    height: 200px;
    overflow: hidden;
    position: relative;
  }

  .f-prod-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
    filter: saturate(0.9);
  }

  .f-prod-card:hover .f-prod-img img { transform: scale(1.07); }

  .f-prod-badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    background: var(--orange);
    color: var(--white);
    font-family: 'Poppins', sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.6rem;
  }

  .f-prod-info {
    padding: 1.5rem;
    border-top: 2px solid transparent;
    transition: border-color 0.3s;
  }

  .f-prod-card:hover .f-prod-info { border-color: var(--orange); }

  .f-prod-type {
    font-size: 0.72rem;
    color: var(--gray-light);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.35rem;
  }

  .f-prod-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.35rem;
  }

  .f-prod-spec {
    font-size: 0.8rem;
    color: var(--gray-mid);
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .f-prod-spec span {
    padding: 0.2rem 0.5rem;
    background: var(--gray-bg);
    border-radius: 2px;
  }

  /* ── COMPARISON TABLE ── */
  .f-compare {
    padding: clamp(2rem, 4vw, 7rem) clamp(1.5rem, 5vw, 6rem);
    background: var(--black);
  }

  .f-compare-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700;
    color: var(--white);
    margin-bottom: 3rem;
  }

  .f-table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
  }

  .f-table thead th {
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 1rem 1.25rem;
    text-align: left;
    border-bottom: 1px solid #333;
    color: var(--gray-light);
  }

  .f-table thead th:first-child { color: var(--white); }
  .f-table thead th.highlight { color: var(--orange); }

  .f-table tbody tr {
    border-bottom: 1px solid #1e1e1e;
    transition: background 0.25s;
  }

  .f-table tbody tr:hover { background: #141414; }

  .f-table tbody td {
    padding: 0.9rem 1.25rem;
    font-size: 0.88rem;
    color: #aaa;
  }

  .f-table tbody td:first-child {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: var(--white);
  }

  .f-table tbody td.highlight {
    color: var(--orange);
    font-weight: 600;
  }

  .f-check { color: #5dcc8a; font-size: 1rem; }
  .f-cross { color: #555; font-size: 1rem; }

  /* ── FULL BLEED IMAGE ── */
  .f-bleed {
    height: clamp(300px, 40vw, 500px);
    overflow: hidden;
    position: relative;
  }

  .f-bleed img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.55);
  }

  .f-bleed-caption {
    position: absolute;
    bottom: 3rem;
    right: clamp(1.5rem, 6vw, 7rem);
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 800;
    color: var(--white);
    text-align: right;
    line-height: 1.1;
  }

  .f-bleed-caption em {
    font-style: normal;
    color: var(--orange);
  }

  /* ── APPLICATION ── */
  .f-apps {
    padding: clamp(2rem, 4vw, 7rem) clamp(1.5rem, 5vw, 6rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    
  }

  .f-apps-visual {
    position: relative;
  }

  .f-apps-visual img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    display: block;
  }

  .f-apps-visual-label {
    position: absolute;
    top: 2rem;
    right: -2rem;
    background: var(--orange);
    color: var(--white);
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    writing-mode: vertical-rl;
  }

  .f-app-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 2rem;
  }

  .f-app-item {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--line);
    cursor: default;
    transition: background 0.2s;
  }

  .f-app-item:hover { background: var(--gray-bg); padding-left: 0.75rem; }

  .f-app-icon {
    font-size: 1.6rem;
    flex-shrink: 0;
    width: 3rem;
    text-align: center;
  }

  .f-app-item h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 0.2rem;
  }

  .f-app-item p {
    font-size: 0.82rem;
    color: var(--gray-mid);
    line-height: 1.5;
  }

  /* ── CTA ── */
  .f-cta {
    background: var(--orange);
    padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 6rem);
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 3rem;
  }

  .f-cta h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 800;
    color: var(--white);
    line-height: 1.2;
  }

  .f-cta p {
    color: rgba(255,255,255,0.75);
    margin-top: 0.75rem;
    font-size: 0.97rem;
    max-width: 400px;
    line-height: 1.7;
  }

  .btn-white {
    background: var(--white);
    color: var(--orange);
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    padding: 0.9rem 2rem;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s;
  }

  .btn-white:hover { background: var(--black); color: var(--white); }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .f-hero-main { grid-template-columns: 1fr; }
    .f-hero-right { padding-top: 0; }
    .f-img-strip { grid-template-columns: 1fr 1fr; height: auto; }
    .f-img-strip img:first-child { grid-column: span 2; height: 240px; }
    .f-img-strip img { height: 160px; }
    .f-section-header { grid-template-columns: 1fr; }
    .f-section-desc { text-align: left; }
    .f-apps { grid-template-columns: 1fr; gap: 2.5rem; }
    .f-apps-visual-label { right: 0; }
    .f-cta { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .f-hero-top { flex-direction: column; gap: 0.5rem; }
    .f-img-strip { grid-template-columns: 1fr; }
    .f-img-strip img:first-child { grid-column: auto; height: 220px; }
    .f-img-strip img { height: 200px; }
    .f-table { font-size: 0.78rem; }
    .f-table thead th, .f-table tbody td { padding: 0.75rem 0.6rem; }
  }
`;

const products = [
  { type: "Standard", name: "PLA Filament", badge: "Bestseller", specs: ["1.75mm", "2.85mm"], img: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=600&auto=format&fit=crop" },
  { type: "Engineering", name: "PETG Filament", badge: "Industrial", specs: ["1.75mm", "2.85mm"], img: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=600&q=80" },
  { type: "High Performance", name: "ABS Filament", badge: "Pro Grade", specs: ["1.75mm"], img: "https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=600&q=80" },
  { type: "Specialty", name: "TPU Flexible", badge: "Flexible", specs: ["1.75mm"], img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=600&auto=format&fit=crop" },
  { type: "Composite", name: "Carbon Fibre PLA", badge: "Premium", specs: ["1.75mm"], img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80" },
  { type: "Engineering", name: "Nylon PA12", badge: "Advanced", specs: ["1.75mm", "2.85mm"], img: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=600&auto=format&fit=crop" },
];

const compare = [
  { prop: "Strength", pla: "Medium", petg: "High", abs: "High", tpu: "Low" },
  { prop: "Flexibility", pla: "Low", petg: "Medium", abs: "Low", tpu: "Very High" },
  { prop: "Heat Resistance", pla: "~60°C", petg: "~80°C", abs: "~100°C", tpu: "~80°C" },
  { prop: "Print Difficulty", pla: "Easy", petg: "Easy", abs: "Hard", tpu: "Medium" },
  { prop: "Food Safe", pla: "✓", petg: "✓", abs: "✗", tpu: "✗" },
];

const apps = [
  { icon: "🖨️", title: "FDM 3D Printing", desc: "Precision-wound on quality spools for consistent tension and zero tangles during long prints." },
  { icon: "🏭", title: "Industrial FGF", desc: "Pellet-compatible grades for large-format Fused Granulate Fabrication printers." },
  { icon: "🔬", title: "Prototyping", desc: "Dimensionally accurate parts for functional testing and design validation." },
  { icon: "🎨", title: "Creative & Artistic", desc: "High-detail, vibrant colour-matched filaments for sculptural and artistic applications." },
];

export default function FilamentsPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <style>{styles}</style>
      <div className="filaments-page">
        <Header />

        {/* HERO */}
        <section className="f-hero">
         
          <div className="f-hero-main">
            <h1 className="f-hero-headline">
              The<br />
              Science<br />
              of<br />
              <span className="orange">Filament.</span>
            </h1>
            <div className="f-hero-right">
              <p>
                Every spool we produce is the result of rigorous polymer science — from precisely calibrated extrusion temperatures to tolerances measured in microns. Print with confidence, every time.
              </p>
              <div className="f-hero-mini-stats">
                <div className="f-mini-stat">
                  <strong>±0.02mm</strong>
                  <span>Diameter tolerance</span>
                </div>
                <div className="f-mini-stat">
                  <strong>30+</strong>
                  <span>Material grades</span>
                </div>
                <div className="f-mini-stat">
                  <strong>500g–5kg</strong>
                  <span>Spool options</span>
                </div>
                <div className="f-mini-stat">
                  <strong>99.7%</strong>
                  <span>Roundness rating</span>
                </div>
              </div>
              <div className="f-cta-row">
                <button className="btn-solid">Browse Catalogue →</button>
                <button className="btn-border">Download TDS</button>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE STRIP */}
        <div className="f-img-strip">
          <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop" alt="Filament spool" />
          <img src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=500&q=80" alt="3D printing" />
          <img src="https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=500&q=80" alt="Printed parts" />
        </div>

        {/* PRODUCTS */}
        <section className="f-products">
          <div className="f-section-header">
            <div>
              <div className="f-section-num">01 — Product Range</div>
              <h2 className="f-section-title">Our Filament Collection</h2>
            </div>
            <p className="f-section-desc">Each grade is independently extruded and quality-checked before leaving our facility.</p>
          </div>
          <div className="f-prod-grid">
            {products.map((p) => (
              <div className="f-prod-card" key={p.name}>
                <div className="f-prod-img">
                  <img src={p.img} alt={p.name} />
                  <div className="f-prod-badge">{p.badge}</div>
                </div>
                <div className="f-prod-info">
                  <div className="f-prod-type">{p.type}</div>
                  <div className="f-prod-name">{p.name}</div>
                  <div className="f-prod-spec">
                    {p.specs.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARE */}
        <section className="f-compare">
          <h2 className="f-compare-title">Material Comparison Guide</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="f-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th className="highlight">PLA</th>
                  <th>PETG</th>
                  <th>ABS</th>
                  <th>TPU</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.prop}>
                    <td>{row.prop}</td>
                    <td className="highlight">{row.pla}</td>
                    <td>{row.petg}</td>
                    <td>{row.abs}</td>
                    <td>{row.tpu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* BLEED IMAGE */}
        <div className="f-bleed">
          <img
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=1600&q=80"
            alt="3D Printing detail"
          />
          <div className="f-bleed-caption">
            Engineered<br />
            for <em>precision.</em><br />
            Built to print.
          </div>
        </div>

        {/* APPLICATIONS */}
        <section className="f-apps">
          <div className="f-apps-visual">
            <img
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80"
              alt="Filament applications"
            />
            <div className="f-apps-visual-label">Applications</div>
          </div>
          <div>
            <div className="f-section-num">02 — Use Cases</div>
            <h2 className="f-section-title" style={{ marginBottom: "0.5rem" }}>Where Our Filaments Perform</h2>
            <p style={{ color: "var(--gray-mid)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>
              From desktop FDM printers to large-format industrial systems, our filaments are engineered to perform across the full spectrum of additive manufacturing.
            </p>
            <div className="f-app-list">
              {apps.map((a) => (
                <div className="f-app-item" key={a.title}>
                  <div className="f-app-icon">{a.icon}</div>
                  <div>
                    <h4>{a.title}</h4>
                    <p>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* CTA */}
        <div className="f-cta">
          <div>
            <h2>Ready to Upgrade Your Print Quality?</h2>
            <p>Order samples, download technical data sheets, or talk to our materials engineers about custom formulations.</p>
          </div>
          <button className="btn-white">Request Samples →</button>
        </div>
<Footer />
      </div>
    </>
  );
}