import { useState, useEffect, useRef } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  :root {
    --orange: #FF5500;
    --orange2: #FF7733;
    --orange-bg: rgba(255,85,0,0.08);
    --black: #0A0A0A;
    --gray9: #1A1A1A;
    --gray7: #444;
    --gray5: #888;
    --gray2: #E8E8E8;
    --gray1: #F6F6F6;
    --white: #FFFFFF;
    --side-gap: 6vw;
  }

  .ems-wrap { 
    font-family: 'Poppins', sans-serif; 
    background: var(--white); 
    color: var(--black); 
    overflow-x: hidden; 
    width: 100%;
  }

  /* HERO SECTION */
  .hero { 
    display: grid; 
    grid-template-columns: 1.1fr 0.9fr; 
    min-height: 100vh; 
    width: 100%;
    background: var(--black);
  }

  .hero-l { 
    background: var(--black); 
    padding: 15vh var(--side-gap) 10vh; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    overflow: hidden;
  }

  .badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: var(--orange); color: #fff;
    font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase;
    padding: 0.6rem 1.2rem; border-radius: 2px; width: fit-content; margin-bottom: 2.5rem;
    animation: fadeUp .6s ease both;
  }

  .badge-dot { width: 6px; height: 6px; background: #fff; border-radius: 50%; animation: pulse 1.5s infinite; }

  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.6)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

  .hero-title {
    font-size: clamp(2.4rem, 7.5vw, 6.5rem); font-weight: 900; line-height: 0.92;
    color: var(--white); margin-bottom: 1.5rem;
    animation: fadeUp .6s .1s ease both;
    word-wrap: break-word;
    max-width: 100%;
  }

  .hero-title .org { color: var(--orange); }

  .hero-sub {
    font-size: clamp(1.1rem, 2.5vw, 2.5rem); font-weight: 300; color: #666; margin-bottom: 2rem;
    animation: fadeUp .6s .2s ease both;
  }

  .hero-desc {
    font-size: 1rem; line-height: 1.8; color: #aaa; max-width: 480px; margin-bottom: 3.5rem;
    animation: fadeUp .6s .3s ease both;
  }

  .hero-stats { display: flex; gap: 3rem; flex-wrap: wrap; animation: fadeUp .6s .4s ease both; }
  .stat { display: flex; flex-direction: column; gap: 0.3rem; }
  .stat-n { font-size: 2.2rem; font-weight: 800; color: var(--orange); line-height: 1; }
  .stat-l { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; color: #555; font-weight: 600; }

  .hero-r { position: relative; overflow: hidden; height: 100%; min-height: 40vh; }
  .hero-r img { width: 100%; height: 100%; object-fit: cover; filter: saturate(.8); transition: transform 8s ease; }
  .hero-r:hover img { transform: scale(1.05); }
  
  .hero-r-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,85,0,.15) 0%, transparent 60%); }
  
  .hero-tag {
    position: absolute; bottom: 2.5rem; left: 2.5rem; z-index: 2;
    background: var(--orange); color: #fff; padding: 0.7rem 1.4rem;
    font-size: 0.7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
    transform: rotate(-2deg);
  }

  /* MARQUEE */
  .marquee { background: var(--orange); padding: 1rem 0; overflow: hidden; white-space: nowrap; }
  .marquee-inner { display: inline-block; animation: marquee 35s linear infinite; }
  .marquee-inner span { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #fff; margin: 0 3rem; }
  .marquee-inner span::before { content: '◆ '; }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* SECTION COMMON */
  .sec { padding: 12vh var(--side-gap); }
  .sec-tag { display: flex; align-items: center; gap: 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--orange); margin-bottom: 1.5rem; }
  .sec-tag::before { content: ''; width: 2rem; height: 2px; background: var(--orange); }
  .sec-h2 { font-size: clamp(2.2rem, 5vw, 4.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 2rem; }
  .sec-h2 span { color: var(--orange); }
  .sec-p { font-size: 1rem; line-height: 1.8; color: var(--gray7); max-width: 700px; }

  /* PROCESS */
  .proc-sec { background: var(--black); padding: 12vh var(--side-gap); }
  .proc-sec .sec-h2 { color: var(--white); }
  .proc-sec .sec-p { color: #666; }
  .proc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; margin-top: 5rem; background: #222; }
  .proc-card {
    background: var(--gray9); padding: 3.5rem 2.2rem; position: relative; overflow: hidden;
    cursor: default; transition: background .3s;
  }
  .proc-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--orange); transform: scaleX(0); transform-origin: left; transition: transform .3s;
  }
  .proc-card:hover { background: #222; }
  .proc-card:hover::before { transform: scaleX(1); }
  .proc-n { position: absolute; top: 1rem; right: 1rem; font-size: 4.5rem; font-weight: 900; color: rgba(255,85,0,.08); line-height: 1; }
  .proc-icon { width: 3.2rem; height: 3.2rem; background: var(--orange); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 1.8rem; }
  .proc-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--white); margin-bottom: 1rem; }
  .proc-card p { font-size: 0.9rem; color: #777; line-height: 1.7; }

  /* CAPABILITIES */
  .cap-sec { padding: 12vh var(--side-gap); background: var(--gray1); }
  .cap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6vw; align-items: center; margin-top: 5rem; }
  .cap-imgs { position: relative; height: 65vh; min-height: 450px; }
  .cap-img1 { position: absolute; width: 80%; height: 75%; object-fit: cover; top: 0; left: 0; box-shadow: 0 20px 60px rgba(0,0,0,.15); }
  .cap-img2 { position: absolute; width: 55%; height: 50%; object-fit: cover; bottom: 0; right: 0; border: 10px solid var(--white); box-shadow: 0 15px 40px rgba(0,0,0,.15); }
  .cap-badge {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    background: var(--orange); color: #fff; width: 6rem; height: 6rem; border-radius: 50%;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; font-size: 0.85rem; font-weight: 800; z-index: 3; line-height: 1.2;
    box-shadow: 0 0 0 12px rgba(255,85,0,.15); animation: spin 15s linear infinite;
  }
  @keyframes spin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
  
  .cap-list { list-style: none; display: flex; flex-direction: column; gap: 1.2rem; margin-top: 2.5rem; }
  .cap-item {
    display: flex; align-items: flex-start; gap: 1.2rem; padding: 1.8rem;
    background: var(--white); border-left: 5px solid transparent; transition: all .3s;
  }
  .cap-item:hover { border-color: var(--orange); box-shadow: 0 15px 40px rgba(0,0,0,0.06); transform: translateX(8px); }
  .cap-ico { width: 2.8rem; height: 2.8rem; flex-shrink: 0; background: var(--orange-bg); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; }
  .cap-txt h4 { font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; }
  .cap-txt p { font-size: 0.85rem; color: var(--gray5); line-height: 1.6; }

  /* SPECS SECTION WITH HORIZONTAL SCROLL */
  .specs-sec { padding: 12vh var(--side-gap); }
  
  .specs-scroll-container {
    width: 100%;
    overflow-x: auto;
    margin-top: 4rem;
    border: 1px solid var(--gray2);
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: var(--orange) transparent;
  }

  .specs-scroll-container::-webkit-scrollbar { height: 4px; }
  .specs-scroll-container::-webkit-scrollbar-thumb { background: var(--orange); border-radius: 10px; }

  .specs-grid { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 1px; 
    background: var(--gray2);
    min-width: 800px; /* Force minimum width to ensure horizontal scroll on mobile */
  }

  .spec-row { 
    background: var(--white); 
    padding: 1.8rem 2.2rem; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    gap: 20px;
  }
  .spec-row:hover { background: rgba(255,85,0,.03); }
  .spec-lbl { 
    font-size: 0.75rem; 
    color: var(--gray5); 
    text-transform: uppercase; 
    letter-spacing: 1.5px; 
    font-weight: 600; 
    flex: 1;
  }
  .spec-val { 
    font-family: 'JetBrains Mono', monospace; 
    font-size: 0.95rem; 
    font-weight: 700; 
    text-align: right;
  }
  .spec-val.hi { color: var(--orange); }

  /* GALLERY */
  .gal-sec { padding: 5vh var(--side-gap) 12vh; }
  .gal-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 22rem 16rem; gap: 0.8rem; margin-top: 3.5rem; }
  .gal-item { overflow: hidden; position: relative; cursor: pointer; }
  .gal-item:first-child { grid-row: 1 / 3; }
  .gal-item img { width: 100%; height: 100%; object-fit: cover; filter: saturate(.8); transition: transform .6s, filter .4s; }
  .gal-item:hover img { transform: scale(1.1); filter: saturate(1); }
  .gal-lbl { position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: #fff; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; opacity: 0; transition: opacity .3s; }
  .gal-item:hover .gal-lbl { opacity: 1; }

  /* CTA */
  .cta { background: var(--orange); padding: 10vh var(--side-gap); display: flex; align-items: center; justify-content: space-between; gap: 3rem; flex-wrap: wrap; }
  .cta-title { font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 900; color: #fff; line-height: 1.1; }
  .cta-title em { font-style: normal; color: var(--black); }
  .cta-sub { font-size: 1.1rem; color: rgba(255,255,255,0.85); margin-top: 0.8rem; }
  .cta-btn {
    flex-shrink: 0; display: inline-flex; align-items: center; gap: 1rem;
    background: var(--black); color: #fff; padding: 1.4rem 3rem;
    font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 1rem;
    text-decoration: none; text-transform: uppercase; letter-spacing: 1.5px;
    transition: all .3s; cursor: pointer; border: none;
  }
  .cta-btn:hover { background: #222; transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.25); }

  /* --- RESPONSIVE LOGIC --- */
  @media (max-width: 1100px) {
    .proc-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; }
    .hero-r { height: 45vh; }
    .hero-l { padding-top: 18vh; }
    .cap-grid { grid-template-columns: 1fr; gap: 4rem; }
    .cap-imgs { height: 50vh; }
    .specs-grid { min-width: 700px; } /* Adjust scroll width for smaller tabs */
  }

  @media (max-width: 600px) {
    :root { --side-gap: 5vw; }
    .proc-grid { grid-template-columns: 1fr; }
    .gal-grid { grid-template-columns: 1fr; grid-template-rows: repeat(5, 18rem); }
    .gal-item:first-child { grid-row: auto; }
    .hero-stats { gap: 1.5rem; }
    .cta { justify-content: center; text-align: center; }
    .cta-btn { width: 100%; justify-content: center; }
    .specs-grid { min-width: 600px; grid-template-columns: 1fr; } /* Stack rows but keep horizontal container */
  }
`;

const processSteps = [
  { icon: "📝", title: "BOM Audit", desc: "BOM optimization and alternate part suggestions to ensure supply chain stability and cost-efficiency." },
  { icon: "📦", title: "Sourcing", desc: "Local and Global component procurement with 100% original parts and full batch traceability." },
  { icon: "🔧", title: "Fabrication", desc: "Coordination of Rigid, Flex, or Rigid-Flex PCBs (2L to 12L) through vetted production partners." },
  { icon: "🤖", title: "PCBA", desc: "High-precision SMD, THT, and Mixed assembly using RoHS-compliant lead-free soldering processes." },
  { icon: "🧪", title: "Testing (QC)", desc: "Multi-stage validation: Visual inspection, ICT, continuity, and full functional power-on tests." },
  { icon: "🔥", title: "Coating", desc: "Optional conformal coating or potting services to protect assemblies from environmental factors." },
  { icon: "🧩", title: "Integration", desc: "Final box build including cable harnesses, connectors, and enclosure fitting (CNC/3D/Sheet Metal)." },
  { icon: "📋", title: "Logistics", desc: "Batch records, component consumption reports, and QC sign-offs delivered with every shipment." },
];

const capabilities = [
  { icon: "⚙️", title: "SMD & THT Mixed Assembly", desc: "Handling complex boards with manual and semi-automated soldering for maximum flexibility." },
  { icon: "🔍", title: "Testing & Quality Control", desc: "ESD-safe workstations with ICT, functional testing, and full rework/repair support." },
  { icon: "🏢", title: "Sub-System Integration", desc: "Complete assembly of housings, connectors, and mechanical integration for market-ready products." },
  { icon: "🏷️", title: "Process Traceability", desc: "Operator-based tracking with job cards, material logs, and batch records for full accountability." },
  { icon: "💡", title: "Prototyping & Pilot Runs", desc: "Optimized for startups and R&D teams needing reliable, repeatable quality for small to mid-scale production." },
];

const specs = [
  ["PCB Layers", "2L to 12L", true],
  ["Substrates", "FR4, Aluminum, High-TG, Rogers", false],
  ["Assembly Type", "SMD, THT, Mixed", true],
  ["Compliance", "RoHS / Lead-Free", true],
  ["Quality Standards", "IPC-A-610 Class II/III", true],
  ["Traceability", "MES / Job Card System", false],
  ["Testing", "ICT, FCT, Visual", true],
  ["Add-ons", "Conformal Coating, Potting", false],
  ["Programming", "Firmware Burning & Verification", false],
  ["Packaging", "ESD-Safe / Barcoded", false],
];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200", label: "Main SMT Floor" },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", label: "AOI Station" },
  { src: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=800", label: "Functional Testing" },
  { src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800", label: "Component Placement" },
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", label: "Robotic Pick & Place" },
];

const marqueeWords = [
  "SMD & THT Assembly", "RoHS Lead-Free", "Mixed Assembly", 
  "BOM Optimization", "Traceability Logs", "Conformal Coating", 
  "Box Build", "Firmware Burning", "IP-Rated Enclosures", "IPC-A-610"
];
export default function EMSAssembly() {
  return (
    <div className="ems-wrap">
      <style>{style}</style>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-l">
          <div className="badge"><span className="badge-dot" />Live Production Line</div>
          <h1 className="hero-title">EMS<br /><span className="org">Assembly</span></h1>
          <div className="hero-sub">From Concept to Scale</div>
          <p className="hero-desc">End-to-End Electronics Manufacturing Services — handling everything from PCB fabrication and component sourcing to final box-build integration and functional testing.</p>
          <div className="hero-stats">
            <div className="stat"><span className="stat-n">98.7%</span><span className="stat-l">First Pass Yield</span></div>
            <div className="stat"><span className="stat-n">24hr</span><span className="stat-l">Prototype Turnaround</span></div>
            <div className="stat"><span className="stat-n">500K+</span><span className="stat-l">Boards / Month</span></div>
          </div>
        </div>
        <div className="hero-r">
          <div className="hero-r-overlay" />
          <img src="https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&q=80&w=1200" alt="SMT Assembly Line" />
          <div className="hero-tag">SMT Production Floor</div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-inner">
          {[...marqueeWords, ...marqueeWords].map((w, i) => <span key={i}>{w}</span>)}
        </div>
      </div>

      {/* PROCESS */}
      <section className="proc-sec sec">
        <div className="sec-tag">How We Work</div>
        <h2 className="sec-h2">Assembly <span>Process</span></h2>
        <p className="sec-p">Our 8-stage process ensures consistent quality from prototype to mass production. Every board passes rigorous checks at each stage.</p>
        <div className="proc-grid">
          {processSteps.map((s, i) => (
            <div className="proc-card" key={i}>
              <div className="proc-n">0{i + 1}</div>
              <div className="proc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="cap-sec sec">
        <div className="sec-tag">Our Capabilities</div>
        <h2 className="sec-h2">Built for <span>Every Scale</span></h2>
        <div className="cap-grid">
          <div className="cap-imgs">
            <img className="cap-img1" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="PCB close-up" />
            <img className="cap-img2" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600" alt="Assembly robot" />
            <div className="cap-badge">IPC<br />CLASS 3</div>
          </div>
          <div>
            <p className="sec-p" style={{ marginBottom: '1.5rem' }}>From a single prototype board to 100,000-unit runs, our flexible cells scale without compromising quality. AS9100D and ISO 9001 certified.</p>
            <ul className="cap-list">
              {capabilities.map((c, i) => (
                <li className="cap-item" key={i}>
                  <div className="cap-ico">{c.icon}</div>
                  <div className="cap-txt"><h4>{c.title}</h4><p>{c.desc}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPECS WITH HORIZONTAL SCROLL */}
      <section className="specs-sec sec">
        <div className="sec-tag">Technical Specifications</div>
        <h2 className="sec-h2">Line <span>Specs</span></h2>
        <div className="specs-scroll-container">
          <div className="specs-grid">
            {specs.map(([lbl, val, hi], i) => (
              <div className="spec-row" key={i}>
                <span className="spec-lbl">{lbl}</span>
                <span className={`spec-val ${hi ? "hi" : ""}`}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gal-sec sec">
        <div className="gal-head">
          <div>
            <div className="sec-tag">Visual Tour</div>
            <h2 className="sec-h2" style={{ margin: 0 }}>Our <span>Floor</span></h2>
          </div>
        </div>
        <div className="gal-grid">
          {galleryItems.map((g, i) => (
            <div className="gal-item" key={i}>
              <img src={g.src} alt={g.label} />
              <div className="gal-lbl">{g.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta sec">
        <div>
          <h2 className="cta-title">Ready to build<br /><em>your next board?</em></h2>
          <p className="cta-sub">Upload Gerbers — get a quote in under 2 hours.</p>
        </div>
        <button className="cta-btn">Start Your Build →</button>
      </section>

      <Footer />
    </div>
  );
}