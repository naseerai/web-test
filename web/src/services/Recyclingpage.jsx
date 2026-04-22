import { useState, useEffect, useRef } from "react";
import Header from "../components/header"; // Adjust the path if your file name is different
import Footer from "../components/Footer";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --orange: #FF5C00;
    --orange-light: #FF7A2E;
    --orange-pale: #FFF5EE;
    --black: #0A0A0A;
    --gray-dark: #1A1A1A;
    --gray-mid: #555;
    --gray-light: #999;
    --gray-bg: #F7F7F5;
    --white: #FFFFFF;
  }

  .recycling-page {
    font-family: 'DM Sans', sans-serif;
    color: var(--black);
    background: var(--white);
    overflow-x: hidden;
  }

  /* ── HERO: Full-width split with bold typography ── */
  .r-hero {
    min-height: 100vh;
    background: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: clamp(2rem, 5vw, 5rem);
    position: relative;
    overflow: hidden;
  }

  .r-hero-bg-img {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .r-hero-bg-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.35) saturate(0.7);
  }

  .r-hero-noise {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      160deg,
      rgba(255,92,0,0.18) 0%,
      transparent 50%,
      rgba(0,0,0,0.6) 100%
    );
    z-index: 1;
  }

  .r-hero-content {
    position: relative;
    z-index: 2;
    max-width: 1000px;
  }

  .r-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border: 1.5px solid rgba(255,92,0,0.6);
    color: var(--orange);
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 0.35rem 1rem;
    border-radius: 100px;
    margin-bottom: 2rem;
    animation: rFadeUp 0.9s ease both;
  }

  .r-hero-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(3.5rem, 8vw, 8rem);
    font-weight: 900;
    color: var(--white);
    line-height: 0.95;
    letter-spacing: -0.02em;
    margin-bottom: 2rem;
    animation: rFadeUp 0.9s 0.1s ease both;
  }

  .r-hero-title .accent { color: var(--orange); }

  .r-hero-bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    animation: rFadeUp 0.9s 0.2s ease both;
  }

  .r-hero-desc {
    color: rgba(255,255,255,0.7);
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    line-height: 1.8;
    max-width: 450px;
  }

  .r-hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn-orange {
    background: var(--orange);
    color: var(--white);
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.85rem 2rem;
    cursor: pointer;
    border-radius: 2px;
    transition: background 0.3s;
  }
  .btn-orange:hover { background: var(--orange-light); }

  .btn-ghost {
    background: transparent;
    color: var(--white);
    border: 1.5px solid rgba(255,255,255,0.3);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.85rem 2rem;
    cursor: pointer;
    border-radius: 2px;
    transition: border-color 0.3s;
  }
  .btn-ghost:hover { border-color: rgba(255,255,255,0.7); }

  /* ── IMPACT COUNTERS ── */
  .impact-bar {
    background: var(--orange);
    padding: clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 6vw, 8rem);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 2rem;
  }

  .impact-item {
    text-align: center;
    color: var(--white);
  }

  .impact-number {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    display: block;
    line-height: 1;
    margin-bottom: 0.3rem;
  }

  .impact-label {
    font-size: 0.82rem;
    opacity: 0.8;
    letter-spacing: 0.05em;
  }

  .impact-divider {
    width: 1px;
    background: rgba(255,255,255,0.3);
    align-self: stretch;
  }

  /* ── INTRO ZIGZAG ── */
  .intro-zz {
    padding: clamp(2rem, 4vw, 8rem) clamp(1.5rem, 6vw, 8rem);
  }

  .zz-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    margin-bottom: 5rem;
  }

  .zz-row:last-child { margin-bottom: 0; }
  .zz-row.reverse .zz-text { order: 2; }
  .zz-row.reverse .zz-visual { order: 1; }

  .section-chip {
    display: inline-block;
    background: var(--orange-pale);
    color: var(--orange);
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.35rem 0.85rem;
    border-radius: 2px;
    margin-bottom: 1.25rem;
  }

  .zz-heading {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.25rem;
  }

  .zz-body {
    color: var(--gray-mid);
    font-size: 0.97rem;
    line-height: 1.9;
    margin-bottom: 1.5rem;
  }

  .check-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .check-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    font-size: 0.9rem;
    color: var(--gray-mid);
  }

  .check-list li::before {
    content: '✓';
    color: var(--orange);
    font-weight: 800;
    flex-shrink: 0;
    margin-top: 0.1rem;
  }

  .zz-visual {
    position: relative;
  }

  .zz-visual img {
    width: 100%;
    aspect-ratio: 5/4;
    object-fit: cover;
    display: block;
  }

  .zz-visual-tag {
    position: absolute;
    bottom: -1.5rem;
    left: -1.5rem;
    background: var(--black);
    color: var(--white);
    padding: 1.25rem 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    max-width: 220px;
    line-height: 1.5;
  }

  .zz-visual-tag span {
    color: var(--orange);
    display: block;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 0.25rem;
  }

  /* ── MATERIALS ── */
  .materials-section {
    background: var(--gray-bg);
    padding: clamp(2rem, 4vw, 7rem) clamp(1.5rem, 6vw, 8rem);
  }

  .mat-header {
    text-align: center;
    margin-bottom: 3.5rem;
  }

  .mat-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700;
    margin-top: 0.5rem;
  }

  .mat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .mat-card {
    background: var(--white);
    border: 1px solid #e8e8e8;
    padding: 2rem 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: default;
  }

  .mat-card:hover {
    border-color: var(--orange);
    box-shadow: 0 8px 30px rgba(255,92,0,0.1);
    transform: translateY(-3px);
  }

  .mat-symbol {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--orange);
    display: block;
    margin-bottom: 0.5rem;
  }

  .mat-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 0.35rem;
  }

  .mat-full {
    font-size: 0.78rem;
    color: var(--gray-light);
  }

  /* ── PROCESS TIMELINE ── */
  .timeline-section {
    padding: clamp(2rem, 4vw, 7rem) clamp(1.5rem, 6vw, 8rem);
    position: relative;
  }

  .timeline-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700;
    margin-bottom: 4rem;
    max-width: 400px;
  }

  .timeline {
    position: relative;
    padding-left: 3rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0.75rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--orange), #eee);
  }

  .timeline-item {
    position: relative;
    padding-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  .timeline-item:last-child { padding-bottom: 0; }

  .timeline-dot {
    position: absolute;
    left: -2.25rem;
    top: 0.25rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--orange);
    border: 3px solid var(--white);
    box-shadow: 0 0 0 2px var(--orange);
  }

  .tl-text h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .tl-text p {
    color: var(--gray-mid);
    font-size: 0.88rem;
    line-height: 1.8;
  }

  .tl-meta {
    background: var(--orange-pale);
    border-left: 3px solid var(--orange);
    padding: 0.75rem 1rem;
    font-size: 0.82rem;
    color: var(--gray-dark);
  }

  .tl-meta strong {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    color: var(--orange);
    display: block;
    margin-bottom: 0.15rem;
  }

  /* ── FULL IMAGE BANNER ── */
  .banner-img {
    height: clamp(280px, 40vw, 480px);
    position: relative;
    overflow: hidden;
  }

  .banner-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5) saturate(0.8);
  }

  .banner-text {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    padding: 0 clamp(1.5rem, 8vw, 10rem);
  }

  .banner-text h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 4.5vw, 4rem);
    font-weight: 800;
    color: var(--white);
    max-width: 650px;
    line-height: 1.15;
  }

  .banner-text h2 em {
    font-style: normal;
    color: var(--orange);
  }

  /* ── CTA FOOTER ── */
  .r-cta {
    padding: clamp(2rem, 6vw, 7rem) clamp(1.5rem, 6vw, 8rem);
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    align-items: center;
    border-top: 1px solid #eee;
  }

  .r-cta-text h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .r-cta-text p {
    color: var(--gray-mid);
    font-size: 0.97rem;
    max-width: 450px;
    line-height: 1.8;
  }

  /* ── ANIMATIONS ── */
  @keyframes rFadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .zz-row { grid-template-columns: 1fr; gap: 2.5rem; }
    .zz-row.reverse .zz-text { order: 0; }
    .zz-row.reverse .zz-visual { order: 0; }
    .zz-visual-tag { left: 0; bottom: -1rem; }

    .timeline-item { grid-template-columns: 1fr; gap: 1rem; }

    .r-cta { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .impact-divider { display: none; }
    .r-hero-title { font-size: clamp(2.8rem, 12vw, 5rem); }
    .timeline { padding-left: 1.75rem; }
    .timeline-dot { left: -1.75rem; }
  }
`;

const materials = [
  { sym: "PET", name: "Polyethylene Terephthalate", full: "Bottles & Packaging" },
  { sym: "HDPE", name: "High-Density Polyethylene", full: "Cans & Pipes" },
  { sym: "PP", name: "Polypropylene", full: "Automotive & Furniture" },
  { sym: "PS", name: "Polystyrene", full: "Food & Electronics" },
  { sym: "ABS", name: "Acrylonitrile Butadiene Styrene", full: "Electronics & Auto" },
  { sym: "PVC", name: "Polyvinyl Chloride", full: "Pipes & Cables" },
];

const steps = [
  { h: "Collection & Sorting", p: "Post-consumer and post-industrial plastic waste is collected from approved sources, then sorted by resin type using NIR spectroscopy and manual verification.", meta: { val: "99%", label: "Sorting Accuracy" } },
  { h: "Shredding & Washing", p: "Sorted plastics are mechanically shredded, then processed through a hot-wash system with food-grade detergents to remove contaminants, labels, and adhesives.", meta: { val: "70°C", label: "Wash Temperature" } },
  { h: "Extrusion & Re-pelletising", p: "Clean flakes are fed into a twin-screw extruder where they are melted, filtered, degassed, and re-pelletised into uniform recycled pellets.", meta: { val: "230°C", label: "Melt Temperature" } },
  { h: "Quality Control", p: "Finished recycled pellets are tested for MFI, density, tensile strength, and contamination against ASTM and ISO standards before release.", meta: { val: "ISO 9001", label: "Certified Process" } },
];

export default function RecyclingPage() {
  return (
    <>
      <style>{styles}</style>
      <div className="recycling-page">
         <Header />

        {/* HERO */}
        <section className="r-hero">
          <div className="r-hero-bg-img">
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1800&q=80"
              alt="Recycling facility"
            />
          </div>
          <div className="r-hero-noise" />
          <div className="r-hero-content">
            <div className="r-pill">🌱 Circular Economy</div>
            <h1 className="r-hero-title">
              Plastic<br />
              <span className="accent">Recycling</span><br />
              Services
            </h1>
            <div className="r-hero-bottom">
              <p className="r-hero-desc">
                Transforming waste into high-value raw materials. Our advanced recycling process closes the loop on plastic — keeping it out of landfill and back into production.
              </p>
              <div className="r-hero-cta">
                <button className="btn-orange">Start Recycling →</button>
                <button className="btn-ghost">Learn More ↓</button>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <div className="impact-bar">
          {[
            { val: "5,000+", label: "Tonnes Recycled Annually" },
            { val: "98%", label: "Diversion from Landfill" },
            { val: "40%", label: "CO₂ Reduction vs Virgin" },
            { val: "12", label: "Polymer Types Processed" },
          ].map((item, i, arr) => (
            <>
              <div className="impact-item" key={item.label}>
                <strong className="impact-number">{item.val}</strong>
                <span className="impact-label">{item.label}</span>
              </div>
              {i < arr.length - 1 && <div className="impact-divider" key={`d${i}`} />}
            </>
          ))}
        </div>

        {/* INTRO ZIG-ZAG */}
        <section className="intro-zz">
          <div className="zz-row">
            <div className="zz-text">
              <span className="section-chip">Our Commitment</span>
              <h2 className="zz-heading">Advanced Plastic Recycling at Industrial Scale</h2>
              <p className="zz-body">
                We don't just collect plastic — we engineer its second life. Our facility combines mechanical and chemical recycling technologies to maximise material recovery and quality, producing recycled pellets that rival virgin material performance.
              </p>
              <ul className="check-list">
                <li>Accepts post-consumer and post-industrial waste streams</li>
                <li>NIR-based automated sorting for resin purity</li>
                <li>GreenCircle certified recycled content claims</li>
                <li>Full chain-of-custody documentation</li>
              </ul>
            </div>
            <div className="zz-visual">
              <img
                src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=900&q=80"
                alt="Sorting facility"
              />
              <div className="zz-visual-tag">
                <span>98%</span>
                Material recovery rate achieved
              </div>
            </div>
          </div>

          <div className="zz-row reverse">
            <div className="zz-text">
              <span className="section-chip">Certifications</span>
              <h2 className="zz-heading">Compliance You Can Trust</h2>
              <p className="zz-body">
                Every batch of recycled material is traceable from source to output. Our operation holds ISO 14001 environmental management certification, and all recycled pellets are documented with material passports for downstream compliance.
              </p>
              <ul className="check-list">
                <li>ISO 14001 Environmental Management</li>
                <li>REACH & RoHS compliant outputs</li>
                <li>Full lot traceability and CoA provided</li>
                <li>Compatible with EU Packaging Regulation targets</li>
              </ul>
            </div>
            <div className="zz-visual">
              <img
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80"
                alt="Certification lab"
              />
              <div className="zz-visual-tag">
                <span>ISO</span>
                14001 & 9001 Certified Operation
              </div>
            </div>
          </div>
        </section>

        {/* MATERIALS */}
        <section className="materials-section">
          <div className="mat-header">
            <div className="section-chip">What We Accept</div>
            <h2 className="mat-title">Plastics We Recycle</h2>
          </div>
          <div className="mat-grid">
            {materials.map((m) => (
              <div className="mat-card" key={m.sym}>
                <span className="mat-symbol">{m.sym}</span>
                <div className="mat-name">{m.name}</div>
                <div className="mat-full">{m.full}</div>
              </div>
            ))}
          </div>
        </section>

        {/* BANNER */}
        <div className="banner-img">
          <img
            src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=1600&q=80"
            alt="Recycling process"
          />
          <div className="banner-text">
            <h2>The Same Plastic. <em>Infinitely</em> Better.</h2>
          </div>
        </div>

        {/* PROCESS TIMELINE */}
        <section className="timeline-section">
          <h2 className="timeline-title">How Our Recycling Process Works</h2>
          <div className="timeline">
            {steps.map((s) => (
              <div className="timeline-item" key={s.h}>
                <div className="timeline-dot" />
                <div className="tl-text">
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
                <div className="tl-meta">
                  <strong>{s.meta.val}</strong>
                  {s.meta.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="r-cta">
          <div className="r-cta-text">
            <h2>Have Plastic Waste to Recycle?</h2>
            <p>Whether you're managing industrial scrap or setting up a take-back programme, our team will design the right solution for your volume and material type.</p>
          </div>
          <button className="btn-orange" style={{ whiteSpace: "nowrap" }}>Get a Collection Quote →</button>
        </div>
         <Footer />

      </div>
    </>
  );
}