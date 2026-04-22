import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --orange: #FF5C00;
    --orange-dim: rgba(255,92,0,0.12);
    --black: #080808;
    --charcoal: #111;
    --gray-dark: #1A1A1A;
    --gray-mid: #555;
    --gray-light: #888;
    --gray-bg: #F4F4F2;
    --white: #FFFFFF;
    --mono: 'DM Mono', monospace;
  }

  .shredding-page {
    font-family: 'DM Sans', sans-serif;
    color: var(--black);
    background: var(--white);
    overflow-x: hidden;
  }

  /* ── HERO: industrial dark full-bleed ── */
 /* ── Update this block ── */
  .sh-hero {
    background: var(--charcoal);
    min-height: 100vh;
    display: grid;
    /* Use 'auto' instead of '1fr' to keep elements grouped correctly */
    grid-template-rows: auto auto auto; 
    position: relative;
    overflow: hidden;
    /* Increased padding-top for tablet/mobile headers */
    padding-top: clamp(40px, 5vw, 110px); 
  }

  .sh-hero-img {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .sh-hero-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.18;
    filter: grayscale(1);
  }

 .sh-top-bar {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* Reduced top/bottom padding to pull content up */
    padding: 0.5rem clamp(1.5rem, 5vw, 5rem); 
    border-bottom: 1px solid rgba(255,255,255,0.08);
    flex-wrap: wrap;
    gap: 1rem;
  }

  .sh-service-tag {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--orange);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .sh-metrics-row {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .sh-metric {
    text-align: right;
  }

  .sh-metric strong {
    display: block;
    font-family: var(--mono);
    font-size: 0.85rem;
    color: var(--white);
  }

  .sh-metric span {
    font-family: var(--mono);
    font-size: 0.65rem;
    color: var(--gray-light);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .sh-hero-center {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    padding: 1.5rem clamp(1.5rem, 5vw, 5rem) clamp(1.5rem, 5vw, 5rem);
  }

  .sh-hero-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(4rem, 10vw, 11rem);
    font-weight: 900;
    color: var(--white);
    line-height: 0.9;
    letter-spacing: -0.03em;
  }

  .sh-hero-title .line2 {
    display: block;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(255,255,255,0.4);
  }

  .sh-hero-title .line3 {
    display: block;
    color: var(--orange);
  }

  .sh-hero-aside {
    margin-left: auto;
    max-width: 340px;
    padding-left: 3rem;
  }

  .sh-hero-aside p {
    color: rgba(255,255,255,0.5);
    font-size: 0.92rem;
    line-height: 1.9;
    margin-bottom: 2rem;
    border-left: 2px solid var(--orange);
    padding-left: 1.25rem;
  }

  .sh-hero-btn {
    background: var(--orange);
    color: var(--white);
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    padding: 0.9rem 2rem;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .sh-hero-btn:hover { background: #FF7A2E; }

  .sh-hero-bottom {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    border-top: 1px solid rgba(255,255,255,0.08);
  }

  .sh-hero-stat {
    flex: 1;
    padding: 1.5rem clamp(1.5rem, 3vw, 3rem);
    border-right: 1px solid rgba(255,255,255,0.08);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .sh-hero-stat:last-child { border-right: none; }

  .sh-hero-stat strong {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 800;
    color: var(--white);
    line-height: 1;
  }

  .sh-hero-stat span {
    font-family: var(--mono);
    font-size: 0.65rem;
    color: rgba(255,255,255,0.4);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* ── MARQUEE ── */
  .sh-marquee {
    background: #111;
    padding: 0.7rem 0;
    overflow: hidden;
    white-space: nowrap;
  }

  .sh-marquee-inner {
    display: inline-flex;
    animation: shMarquee 18s linear infinite;
  }

  .sh-marquee-item {
    font-family: var(--mono);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--orange);
    padding: 0 2rem;
  }

  /* ── CAPABILITIES ── */
  .sh-caps {
    padding: clamp(2rem, 4vw, 5rem) clamp(1.5rem, 5vw, 6rem);
  }

  .sh-caps-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: start;
  }

  .sh-caps-left h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 1.5rem;
  }

  .sh-caps-left h2 span { color: var(--orange); }

  .sh-caps-left p {
    color: var(--gray-mid);
    font-size: 0.97rem;
    line-height: 1.9;
    margin-bottom: 2.5rem;
  }

  .sh-cap-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .sh-cap-item {
    display: flex;
    gap: 1.25rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid #eee;
    align-items: flex-start;
    cursor: default;
    transition: padding-left 0.3s ease;
  }

  .sh-cap-item:hover { padding-left: 0.75rem; }

  .sh-cap-num {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--orange);
    padding-top: 0.2rem;
    flex-shrink: 0;
  }

  .sh-cap-item h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
  }

  .sh-cap-item p {
    font-size: 0.82rem;
    color: var(--gray-mid);
    line-height: 1.65;
  }

  .sh-caps-right {
    position: relative;
  }

  .sh-caps-right img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    display: block;
    filter: brightness(0.9) saturate(0.9);
  }

  .sh-caps-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 50%);
    padding: 2rem;
  }

  .sh-caps-overlay p {
    font-family: var(--mono);
    font-size: 0.72rem;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.3rem;
  }

  .sh-caps-overlay strong {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--white);
  }

  /* ── MACHINE SPECS ── */
  .sh-specs-section {
    background: var(--gray-bg);
    padding: clamp(2rem, 4vw, 7rem) clamp(1.5rem, 5vw, 6rem);
  }

  .sh-specs-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
    align-items: end;
  }

  .sh-specs-header h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3vw, 2.5rem);
    font-weight: 700;
  }

  .sh-specs-header p {
    color: var(--gray-mid);
    font-size: 0.92rem;
    line-height: 1.8;
  }

  .sh-specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2px;
    background: #e4e4e4;
  }

  .sh-spec-card {
    background: var(--white);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: background 0.25s;
  }

  .sh-spec-card:hover { background: var(--charcoal); }

  .sh-spec-label {
    font-family: var(--mono);
    font-size: 0.65rem;
    color: var(--gray-light);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    transition: color 0.25s;
  }

  .sh-spec-card:hover .sh-spec-label { color: rgba(255,255,255,0.4); }

  .sh-spec-value {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 800;
    color: var(--orange);
    line-height: 1;
  }

  .sh-spec-sub {
    font-size: 0.8rem;
    color: var(--gray-mid);
    transition: color 0.25s;
  }

  .sh-spec-card:hover .sh-spec-sub { color: rgba(255,255,255,0.5); }

  /* ── MATERIALS TABLE ── */
  .sh-materials {
    padding: clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 6rem);
  }

  .sh-materials h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 3rem;
  }

/* ── Find this block and update it ── */
  .sh-mat-list {
    display: grid;
    /* Changed 300px to 280px to fit better on small phones */
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
    /* Increased gap from 1.5rem to 2rem */
    gap: 2rem; 
  }

  .sh-mat-item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    align-items: center;
    padding: 1.25rem;
    border: 1px solid #eee;
    transition: all 0.3s;
    cursor: default;
  }

  .sh-mat-item:hover {
    border-color: var(--orange);
    background: var(--orange-dim);
  }

  .sh-mat-icon {
    width: 2.5rem;
    height: 2.5rem;
    background: var(--gray-bg);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .sh-mat-item h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    margin-bottom: 0.15rem;
  }

  .sh-mat-item span {
    font-size: 0.75rem;
    color: var(--gray-mid);
  }

  .sh-mat-size {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--orange);
    font-weight: 500;
    white-space: nowrap;
  }

  /* ── FULL IMAGE ── */
  .sh-full-img {
    height: clamp(300px, 38vw, 460px);
    position: relative;
    overflow: hidden;
  }

  .sh-full-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.45) saturate(0.7);
  }

  .sh-full-img-text {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    padding: 0 clamp(1.5rem, 7vw, 9rem);
  }

  .sh-full-img-text div {
    max-width: 600px;
  }

  .sh-full-img-text p {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--orange);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 0.75rem;
  }

  .sh-full-img-text h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 800;
    color: var(--white);
    line-height: 1.15;
  }

  /* ── CTA ── */
  .sh-cta {
    background: var(--black);
    padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 6rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .sh-cta-left h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 800;
    color: var(--white);
    margin-bottom: 1rem;
  }

  .sh-cta-left p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.8;
  }

  .sh-cta-right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .sh-cta-form-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .sh-cta-input {
    background: #1a1a1a;
    border: 1px solid #333;
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    padding: 0.75rem 1rem;
    outline: none;
    transition: border-color 0.3s;
    width: 100%;
  }

  .sh-cta-input::placeholder { color: #555; }
  .sh-cta-input:focus { border-color: var(--orange); }

  .sh-cta-submit {
    background: var(--orange);
    color: var(--white);
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    padding: 0.9rem 2rem;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: background 0.3s;
  }

  .sh-cta-submit:hover { background: #FF7A2E; }

  /* ── ANIMATIONS ── */
  @keyframes shMarquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .sh-hero-center { flex-direction: column; gap: 2.5rem; align-items: flex-start; 
      text-align: left; }
    .sh-hero-aside { margin-left: 0; padding-left: 0; max-width: 100%; }
    .sh-hero-bottom { flex-wrap: wrap; }
    .sh-hero-stat { min-width: 40%; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .sh-caps-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .sh-specs-header { grid-template-columns: 1fr; }
    .sh-cta { grid-template-columns: 1fr; gap: 2.5rem; }
    .sh-cta-form-group { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .sh-metrics-row { display: none; }
    .sh-hero-title { font-size: clamp(3rem, 14vw, 5rem); }
    .sh-hero-stat { min-width: 50%; }
  }
    
`;

const specs = [
  { label: "Throughput", value: "2,000 kg/h", sub: "Maximum processing rate" },
  { label: "Rotor Diameter", value: "800mm", sub: "Heavy-duty rotor size" },
  { label: "Output Size", value: "5–100mm", sub: "Adjustable screen mesh" },
  { label: "Motor Power", value: "160 kW", sub: "Peak installed power" },
  { label: "Torque", value: "12,000 Nm", sub: "Cutting force rating" },
  { label: "Noise Level", value: "<80 dB", sub: "Sound-insulated housing" },
];

const materials = [
  { icon: "🗑️", name: "PET Bottles", sub: "Post-consumer packaging", size: "10–30mm" },
  { icon: "🥤", name: "HDPE Drums", sub: "Industrial containers", size: "15–50mm" },
  { icon: "🚗", name: "PP Auto Parts", sub: "Bumpers, panels", size: "20–80mm" },
  { icon: "📦", name: "Foam / EPS", sub: "Expanded polystyrene", size: "5–25mm" },
  { icon: "🔌", name: "E-Waste Casings", sub: "PC, ABS enclosures", size: "10–40mm" },
  { icon: "🧱", name: "Rigid Profiles", sub: "Pipes, sheets, boards", size: "20–100mm" },
];

const caps = [
  { title: "Single-Shaft Shredding", desc: "Optimised for bulky, rigid plastics. Single rotor with hardened steel blades for consistent particle output." },
  { title: "Twin-Shaft Shredding", desc: "Dual counter-rotating shafts for high-torque shredding of tough, mixed-material waste streams." },
  { title: "Granulation", desc: "Post-shredding granulation to achieve tight size fractions down to 5mm for direct re-processing." },
  { title: "Size Classification", desc: "Integrated screening ensures only on-spec particles exit the system — oversize is automatically recycled." },
];

export default function ShreddingPage() {
  return (
    <>
      <style>{styles}</style>
      <Header />

      <div className="shredding-page">

        {/* HERO */}
        <section className="sh-hero">
          <div className="sh-hero-img">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80" alt="Industrial shredder" />
          </div>

          <div className="sh-top-bar">
            <div className="sh-service-tag">SHREDDING_SERVICES — ACTIVE</div>
            <div className="sh-metrics-row">
              <div className="sh-metric">
                <strong>24/7</strong>
                <span>Operation</span>
              </div>
              <div className="sh-metric">
                <strong>2,000 kg/h</strong>
                <span>Max. Throughput</span>
              </div>
              <div className="sh-metric">
                <strong>ISO 9001</strong>
                <span>Certified</span>
              </div>
            </div>
          </div>

          <div className="sh-hero-center">
            <h1 className="sh-hero-title">
              SIZE
              <span className="line2">REDUCTION</span>
              <span className="line3">SERVICES</span>
            </h1>
            <div className="sh-hero-aside">
              <p>
                Industrial-grade plastic shredding and granulation — transforming bulky waste into optimised feedstock for reprocessing. Built for volume. Engineered for precision.
              </p>
              <button className="sh-hero-btn">Get a Processing Quote →</button>
            </div>
          </div>

          <div className="sh-hero-bottom">
            {[
              { val: "2,000 kg", sub: "Per Hour Throughput" },
              { val: "5–100mm", sub: "Output Particle Size" },
              { val: "98%", sub: "Uptime Guaranteed" },
              { val: "50+", sub: "Plastic Types Accepted" },
            ].map((s) => (
              <div className="sh-hero-stat" key={s.sub}>
                <strong>{s.val}</strong>
                <span>{s.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MARQUEE */}
        <div className="sh-marquee">
          <div className="sh-marquee-inner">
            {[...Array(2)].map((_, i) =>
              ["Single-Shaft", "Twin-Shaft", "Granulation", "Size Reduction", "Post-Industrial", "Post-Consumer", "Film & Fibre", "Rigid Plastics"].map((t, j) => (
                <span className="sh-marquee-item" key={`${i}-${j}`}>{t}. </span>
              ))
            )}
          </div>
        </div>

        {/* CAPABILITIES */}
        <section className="sh-caps">
          <div className="sh-caps-grid">
            <div className="sh-caps-left">
              <h2>Precision <span>Shredding</span> at Industrial Scale</h2>
              <p>
                Our shredding facility operates multiple machines across single-shaft, twin-shaft, and granulator configurations — allowing us to handle everything from film and fibre to thick-walled rigid parts and large-format profiles.
              </p>
              <div className="sh-cap-list">
                {caps.map((c, i) => (
                  <div className="sh-cap-item" key={c.title}>
                    <span className="sh-cap-num">0{i + 1}</span>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sh-caps-right">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=800"
                alt="Shredding operation"
              />
              <div className="sh-caps-overlay">
                <p>Daily processing volume</p>
                <strong>15+ Tonnes</strong>
              </div>
            </div>
          </div>
        </section>

        {/* MACHINE SPECS */}
        <section className="sh-specs-section">
          <div className="sh-specs-header">
            <h2>Machine Specifications</h2>
            <p>Our shredders are heavy-duty industrial machines maintained to OEM specifications, ensuring consistent performance and minimal downtime.</p>
          </div>
          <div className="sh-specs-grid">
            {specs.map((s) => (
              <div className="sh-spec-card" key={s.label}>
                <div className="sh-spec-label">{s.label}</div>
                <div className="sh-spec-value">{s.value}</div>
                <div className="sh-spec-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MATERIALS */}
        <section className="sh-materials">
          <h2>Materials We Shred</h2>
          <div className="sh-mat-list">
            {materials.map((m) => (
              <div className="sh-mat-item" key={m.name}>
                <div className="sh-mat-icon">{m.icon}</div>
                <div>
                  <h4>{m.name}</h4>
                  <span>{m.sub}</span>
                </div>
                <div className="sh-mat-size">{m.size}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FULL IMAGE */}
        <div className="sh-full-img">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80"
            alt="Industrial machinery"
          />
          <div className="sh-full-img-text">
            <div>
              <p> Our promise</p>
              <h2>Consistent Output.<br />Every Single Run.</h2>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="sh-cta">
          <div className="sh-cta-left">
            <h2>Start a Shredding Project</h2>
            <p>
              Tell us your material type, volume, and target particle size. We'll come back with a processing plan and pricing within one business day.
            </p>
          </div>
          <div className="sh-cta-right">
            <div className="sh-cta-form-group">
              <input className="sh-cta-input" placeholder="Company name" />
              <input className="sh-cta-input" placeholder="Material type" />
            </div>
            <input className="sh-cta-input" placeholder="Monthly volume (kg)" style={{ width: "100%" }} />
            <button className="sh-cta-submit">Request Processing Quote →</button>
          </div>
        </section>
 <Footer />
      </div>
    </>
  );
}