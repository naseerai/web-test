import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function ThreeDPrinting() {
  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        
        /* Updated padding-top to 120px (80px Header + 40px Gap) */
        .tdp-root { font-family: 'DM Sans', sans-serif; background: #fff; color: #111; overflow-x: hidden; padding-top: 6vh; }

        /* HERO */
        .tdp-hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 88vh; }
        .tdp-hero-left { background: #111; display: flex; flex-direction: column; justify-content: center; padding: 5rem 4rem 5rem 6%; position: relative; overflow: hidden; }
        .tdp-hero-left::after { content: ''; position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(244,83,28,0.12) 0%, transparent 70%); pointer-events: none; }
        .tdp-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(244,83,28,0.12); border: 1px solid rgba(244,83,28,0.3); color: #f4531c; font-size: 0.68rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 0.4rem 0.9rem; border-radius: 50px; margin-bottom: 1.8rem; width: fit-content; }
        .tdp-badge-dot { width: 6px; height: 6px; background: #f4531c; border-radius: 50%; animation: tdp-pulse 2s infinite; }
        @keyframes tdp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
        .tdp-hero-left h1 { font-size: clamp(2.4rem, 4.5vw, 3.8rem); font-weight: 800; color: #fff; line-height: 1.0; letter-spacing: -2px; margin-bottom: 1.2rem; }
        .tdp-hero-left h1 em { font-style: normal; color: #f4531c; }
        .tdp-hero-left p { font-size: 0.95rem; color: #aaa; line-height: 1.75; max-width: 420px; margin-bottom: 2.2rem; }
        .tdp-hero-btns { display: flex; gap: 0.8rem; flex-wrap: wrap; }
        .tdp-btn-orange { background: #f4531c; color: #fff; border: none; padding: 0.85rem 1.8rem; border-radius: 6px; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: all 0.25s; letter-spacing: 0.3px; }
        .tdp-btn-orange:hover { background: #e0451a; transform: translateY(-2px); }
        .tdp-btn-ghost { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.25); padding: 0.85rem 1.8rem; border-radius: 6px; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: all 0.25s; }
        .tdp-btn-ghost:hover { border-color: #fff; }
        .tdp-stats { display: flex; gap: 2.5rem; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.08); }
        .tdp-stat-num { font-size: 1.8rem; font-weight: 800; color: #fff; letter-spacing: -1px; display: block; }
        .tdp-stat-label { font-size: 0.65rem; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.2rem; }
        .tdp-hero-right { position: relative; overflow: hidden; background: #f0f0f0; }
        .tdp-hero-right img { width: 100%; height: 100%; object-fit: cover; }
        .tdp-hero-card { position: absolute; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; background: rgba(255,255,255,0.96); border-radius: 10px; padding: 1rem 1.2rem; display: flex; align-items: center; gap: 0.9rem; backdrop-filter: blur(10px); }
        .tdp-hero-card-icon { width: 40px; height: 40px; background: #f4531c; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
        .tdp-hero-card strong { font-size: 0.82rem; font-weight: 700; display: block; color: #111; }
        .tdp-hero-card span { font-size: 0.7rem; color: #666; }

        /* SHARED SECTION STYLES */
        .tdp-section { padding: 5rem 6%; }
        .tdp-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #f4531c; margin-bottom: 0.6rem; }
        .tdp-title { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #111; letter-spacing: -1.5px; line-height: 1.1; }
        .tdp-title span { color: #888; font-weight: 400; }
        .tdp-desc { font-size: 0.9rem; color: #666; line-height: 1.7; max-width: 540px; margin-top: 0.6rem; }

        /* OVERVIEW */
        .tdp-overview { background: #fff; }
        .tdp-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; margin-top: 3.5rem; }
        .tdp-img-stack { position: relative; }
        .tdp-img-main { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 12px; }
        .tdp-img-accent { position: absolute; bottom: -1.5rem; right: -1.5rem; width: 45%; aspect-ratio: 1; object-fit: cover; border-radius: 10px; border: 4px solid #fff; box-shadow: 0 16px 40px rgba(0,0,0,0.12); }
        .tdp-overview-content h3 { font-size: 1.6rem; font-weight: 700; letter-spacing: -1px; margin-bottom: 1rem; }
        .tdp-overview-content p { font-size: 0.88rem; color: #666; line-height: 1.75; margin-bottom: 1.2rem; }
        .tdp-feat-list { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; margin-top: 0.5rem; }
        .tdp-feat-list li { display: flex; align-items: flex-start; gap: 0.7rem; font-size: 0.87rem; color: #333; }
        .tdp-feat-list li::before { content: ''; width: 16px; height: 16px; background: #f4531c; border-radius: 50%; flex-shrink: 0; margin-top: 3px; }
        .tdp-feat-list li span { font-weight: 600; }

        /* PROCESS */
        .tdp-process { background: #111; }
        .tdp-process .tdp-title { color: #fff; }
        .tdp-process .tdp-desc { color: #888; }
        .tdp-steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.5px; margin-top: 3.5rem; background: rgba(255,255,255,0.06); border-radius: 12px; overflow: hidden; }
        .tdp-step { background: #1a1a1a; padding: 2rem 1.5rem; transition: background 0.2s; }
        .tdp-step:hover { background: #222; }
        .tdp-step-n { font-size: 0.65rem; font-weight: 700; color: #f4531c; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.2rem; }
        .tdp-step-icon { font-size: 1.8rem; margin-bottom: 0.8rem; }
        .tdp-step h4 { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem; }
        .tdp-step p { font-size: 0.75rem; color: #777; line-height: 1.6; }

        /* CAPABILITIES */
        .tdp-cap { background: #f5f5f5; }
        .tdp-cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; margin-top: 3rem; }
        .tdp-cap-card { background: #fff; border-radius: 12px; padding: 1.8rem; border: 1px solid #e8e8e8; transition: all 0.3s; position: relative; overflow: hidden; }
        .tdp-cap-card::before { content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: transparent; transition: background 0.3s; }
        .tdp-cap-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.07); }
        .tdp-cap-card:hover::before { background: #f4531c; }
        .tdp-cap-icon { width: 44px; height: 44px; background: #f5f5f5; border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 1rem; }
        .tdp-cap-card h4 { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; }
        .tdp-cap-card p { font-size: 0.78rem; color: #666; line-height: 1.6; }
        .tdp-cap-tag { display: inline-block; margin-top: 0.8rem; background: rgba(244,83,28,0.08); color: #f4531c; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.5px; padding: 0.2rem 0.6rem; border-radius: 4px; }

        /* MATERIALS */
        .tdp-mat { background: #fff; }
        .tdp-mat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 3rem; }
        .tdp-mat-card { border: 1.5px solid #e8e8e8; border-radius: 10px; padding: 1.3rem; text-align: center; transition: all 0.25s; cursor: pointer; }
        .tdp-mat-card:hover { border-color: #f4531c; transform: translateY(-3px); }
        .tdp-mat-swatch { width: 48px; height: 48px; border-radius: 9px; margin: 0 auto 0.8rem; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; }
        .tdp-mat-card h5 { font-size: 0.85rem; font-weight: 700; margin-bottom: 0.3rem; }
        .tdp-mat-card p { font-size: 0.72rem; color: #666; line-height: 1.5; }
        .tdp-mat-specs { display: flex; flex-direction: column; gap: 0.3rem; margin-top: 0.6rem; }
        .tdp-mat-spec { font-size: 0.65rem; color: #888; background: #f5f5f5; border-radius: 3px; padding: 0.18rem 0.4rem; }

        /* SPECS TABLE */
        .tdp-specs { background: #f5f5f5; }
        .tdp-specs-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-top: 3rem; align-items: start; }
        .tdp-table { width: 100%; border-collapse: collapse; }
        .tdp-table thead tr { background: #111; }
        .tdp-table th { padding: 0.85rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #fff; }
        .tdp-table td { padding: 0.8rem 1rem; border-bottom: 1px solid #e8e8e8; font-size: 0.82rem; background: #fff; }
        .tdp-table td:first-child { font-weight: 600; color: #444; }
        .tdp-specs-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 12px; }

        /* PRICING */
        .tdp-pricing { background: #fff; }
        .tdp-price-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; margin-top: 3rem; }
        .tdp-price-card { border: 1.5px solid #e8e8e8; border-radius: 14px; padding: 2.2rem 1.8rem; position: relative; transition: all 0.3s; }
        .tdp-price-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.07); }
        .tdp-price-card.featured { border-color: #f4531c; background: #111; color: #fff; }
        .tdp-price-badge { position: absolute; top: -11px; left: 50%; transform: translateX(-50%); background: #f4531c; color: #fff; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 0.25rem 0.8rem; border-radius: 50px; white-space: nowrap; }
        .tdp-price-tier { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #f4531c; margin-bottom: 0.4rem; }
        .tdp-price-name { font-size: 1.3rem; font-weight: 800; margin-bottom: 0.4rem; }
        .tdp-price-card.featured .tdp-price-name { color: #fff; }
        .tdp-price-desc { font-size: 0.78rem; color: #666; line-height: 1.5; margin-bottom: 1.2rem; }
        .tdp-price-card.featured .tdp-price-desc { color: #888; }
        .tdp-price-amt { font-size: 2.2rem; font-weight: 800; letter-spacing: -1.5px; margin-bottom: 0.2rem; }
        .tdp-price-card.featured .tdp-price-amt { color: #fff; }
        .tdp-price-unit { font-size: 0.72rem; color: #888; margin-bottom: 1.5rem; }
        .tdp-price-feats { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.8rem; }
        .tdp-price-feats li { font-size: 0.8rem; display: flex; align-items: flex-start; gap: 0.5rem; color: #444; }
        .tdp-price-card.featured .tdp-price-feats li { color: #ccc; }
        .tdp-price-feats li::before { content: '✓'; color: #f4531c; font-weight: 900; font-size: 0.72rem; flex-shrink: 0; }
        .tdp-price-btn { width: 100%; padding: 0.8rem; border-radius: 7px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: all 0.25s; border: 1.5px solid #e8e8e8; background: transparent; }
        .tdp-price-card.featured .tdp-price-btn { background: #f4531c; color: #fff; border-color: #f4531c; }
        .tdp-price-btn:hover { background: #f4531c; color: #fff; border-color: #f4531c; }

        /* FAQ */
        .tdp-faq { background: #f5f5f5; }
        .tdp-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; margin-top: 3rem; background: #e8e8e8; border-radius: 12px; overflow: hidden; }
        .tdp-faq-item { background: #fff; padding: 1.8rem; }
        .tdp-faq-q { font-size: 0.9rem; font-weight: 700; color: #111; display: flex; justify-content: space-between; align-items: flex-start; gap: 0.8rem; }
        .tdp-faq-q .tdp-faq-icon { color: #f4531c; font-size: 1.1rem; flex-shrink: 0; }
        .tdp-faq-a { font-size: 0.78rem; color: #666; line-height: 1.7; margin-top: 0.7rem; }

        /* CTA */
        .tdp-cta { background: #f4531c; padding: 5rem 6%; text-align: center; }
        .tdp-cta h2 { font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 800; color: #fff; letter-spacing: -1.5px; margin-bottom: 0.6rem; }
        .tdp-cta p { color: rgba(255,255,255,0.8); font-size: 0.95rem; margin-bottom: 2.2rem; }
        .tdp-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .tdp-btn-white { background: #fff; color: #f4531c; border: none; padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: all 0.25s; }
        .tdp-btn-white:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,0,0,0.15); }
        .tdp-btn-outline-white { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.5); padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: all 0.25s; }
        .tdp-btn-outline-white:hover { border-color: #fff; }

     /* --- UPDATED MOBILE RESPONSIVE --- */
        @media (max-width: 900px) {
          /* General Spacing */
          .tdp-section { padding: 3rem 1.2rem; }
          .tdp-hero { grid-template-columns: 1fr; min-height: auto; }
          .tdp-hero-right { height: 300px; }
          .tdp-hero-left { padding: 3rem 1.2rem; }
          .tdp-overview-grid { grid-template-columns: 1fr; gap: 3rem; }

          /* Materials Library: Force 2 Columns & Left Align */
          .tdp-mat-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }
          .tdp-mat-card {
            text-align: left; /* Aligns text to left */
            padding: 1rem;
          }
          .tdp-mat-swatch {
            margin: 0 0 0.8rem 0; /* Moves icon/swatch to the left */
          }

          /* Machine Specifications Table Fix */
          .tdp-specs-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .tdp-table-container {
            width: 100%;
            overflow-x: auto; /* Enables horizontal scroll for the table */
            -webkit-overflow-scrolling: touch;
          }
          .tdp-table {
            display: table;
            min-width: 500px; /* Prevents columns from squishing too much */
          }
          .tdp-table th, .tdp-table td {
            padding: 0.7rem;
            font-size: 0.75rem;
          }

          /* Technologies/Capabilities: 2 Columns */
          .tdp-cap-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }

          /* Steps: 2 Columns */
          .tdp-steps {
            grid-template-columns: repeat(2, 1fr);
          }

          /* Pricing: Single Column for better readability */
          .tdp-price-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          /* FAQ: Single Column */
          .tdp-faq-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Extra fix for very small devices */
        @media (max-width: 480px) {
          .tdp-cap-grid, .tdp-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Header />

      <div className="tdp-root">

        {/* HERO */}
        <div className="tdp-hero">
          <div className="tdp-hero-left">
            <div className="tdp-badge"><span className="tdp-badge-dot"></span>Manufacturing Service</div>
            <h1>Layer by Layer.<br/><em>Idea</em> to Reality.</h1>
            <p>From rapid prototyping to end-use parts — industrial 3D printing delivering precision-grade components in 24–48 hours using FDM, SLA, and SLS technologies.</p>
            <div className="tdp-hero-btns">
              <button className="tdp-btn-orange">Start Your Project →</button>
              <button className="tdp-btn-ghost">View Gallery</button>
            </div>
            <div className="tdp-stats">
              <div><span className="tdp-stat-num">24h</span><span className="tdp-stat-label">Turnaround</span></div>
              <div><span className="tdp-stat-num">50+</span><span className="tdp-stat-label">Materials</span></div>
              <div><span className="tdp-stat-num">0.05mm</span><span className="tdp-stat-label">Tolerance</span></div>
            </div>
          </div>
          <div className="tdp-hero-right">
<img src="/assets/home/bamboo lab.webp" alt="3D Printing Station" />          
          </div>
        </div>

        {/* OVERVIEW */}
        <section className="tdp-section tdp-overview">
          <div className="tdp-label">What We Offer</div>
          <h2 className="tdp-title">Professional 3D Printing <span>for Every Scale</span></h2>
          <div className="tdp-overview-grid">
            <div className="tdp-img-stack">
              <img className="tdp-img-main" src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1470" alt="3D printer operation" />
              <img className="tdp-img-accent" src="https://images.unsplash.com/photo-1563293789-d6ec95b49088?q=80&w=1470" alt="Detailed 3D printed part" />
            </div>
            <div className="tdp-overview-content">
              <h3>From Concept to Component</h3>
              <p>Whether you need a single prototype or a batch of functional parts, our 3D printing services combine speed, material science, and precision engineering.</p>
              <p>Upload your CAD file, select material and finish — we handle the rest. DFM feedback included with every order.</p>
              <ul className="tdp-feat-list">
                <li><span>Same-day quoting</span> — instant feedback on your files</li>
                <li><span>DFM analysis</span> — design for manufacturability included</li>
                <li><span>Post-processing</span> — sanding, painting, assembly ready</li>
                <li><span>Quality inspection</span> — every part measured and certified</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="tdp-section tdp-process">
          <div className="tdp-label">How It Works</div>
          <h2 className="tdp-title" style={{color:'#fff'}}>5-Step <span style={{color:'#555'}}>Production Process</span></h2>
          <p className="tdp-desc">From file upload to finished part — a streamlined, transparent workflow.</p>
          <div className="tdp-steps">
            {[
              { n:'01', icon:'📁', title:'Upload CAD File', desc:'STL, STEP, OBJ formats accepted. Instant DFM analysis provided.' },
              { n:'02', icon:'🧪', title:'Choose Material', desc:'50+ materials: PLA, ABS, PETG, TPU, Resin, Nylon and more.' },
              { n:'03', icon:'⚙️', title:'Print & Monitor', desc:'Industrial printers with real-time process monitoring and QC.' },
              { n:'04', icon:'✨', title:'Post-Processing', desc:'Support removal, sanding, painting, and surface treatments.' },
              { n:'05', icon:'🚚', title:'Deliver or Ship', desc:'Packaged securely. Pan-India delivery with live tracking.' },
            ].map((s, i) => (
              <div className="tdp-step" key={i}>
                <div className="tdp-step-n">{s.n}</div>
                <div className="tdp-step-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="tdp-section tdp-cap">
          <div className="tdp-label">Technologies</div>
          <h2 className="tdp-title">Printing <span>Technologies Available</span></h2>
          <p className="tdp-desc">Three core additive manufacturing technologies — each optimized for specific use cases.</p>
          <div className="tdp-cap-grid">
            {[
              { icon:'🔩', title:'FDM — Fused Deposition Modeling', desc:'Best for functional prototypes, jigs & fixtures. Wide range of engineering-grade materials at competitive cost.', tag:'Most Popular' },
              { icon:'💡', title:'SLA — Stereolithography', desc:'Ultra-high resolution resin printing for detailed miniatures, dental, jewelry, and visual prototypes. Smooth surfaces right off the bed.', tag:'High Detail' },
              { icon:'🌀', title:'SLS — Selective Laser Sintering', desc:'Powder-bed fusion for complex geometries and functional nylon parts. No supports needed. Ideal for end-use production runs.', tag:'Production Grade' },
              { icon:'🎨', title:'Multi-Material Printing', desc:'Dual extrusion systems enabling parts with varying hardness zones — rigid and flexible in a single print.', tag:'Advanced' },
              { icon:'📐', title:'Large Format Printing', desc:'Build volumes up to 600×600×600mm for enclosures, prototypes, and architectural models.', tag:'Large Scale' },
              { icon:'🔬', title:'Micro Precision Printing', desc:'Layer heights down to 25 microns for dental, medical, and microfluidic applications.', tag:'Ultra Fine' },
            ].map((c, i) => (
              <div className="tdp-cap-card" key={i}>
                <div className="tdp-cap-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <span className="tdp-cap-tag">{c.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MATERIALS */}
        <section className="tdp-section tdp-mat">
          <div className="tdp-label">Materials Library</div>
          <h2 className="tdp-title">50+ Materials <span>Ready to Print</span></h2>
          <div className="tdp-mat-grid">
            {[
              { bg:'#e8f4e8', icon:'🌿', name:'PLA', desc:'Biodegradable, easy to print. Perfect for visual prototypes.', s1:'Temp: 180–220°C', s2:'FDM Only' },
              { bg:'#fff4e8', icon:'🔶', name:'ABS', desc:'Impact resistant thermoplastic for functional parts.', s1:'Temp: 220–250°C', s2:'FDM Only' },
              { bg:'#e8eef8', icon:'💙', name:'PETG', desc:'Food-safe, moisture resistant hybrid material.', s1:'Temp: 230–240°C', s2:'FDM Only' },
              { bg:'#f8e8f8', icon:'🟣', name:'TPU / TPE', desc:'Flexible rubber-like material for gaskets and grips.', s1:'Shore 95A', s2:'FDM / SLS' },
              { bg:'#f8f0e8', icon:'🟤', name:'Nylon PA12', desc:'High-strength, durable for end-use mechanical parts.', s1:'SLS Technology', s2:'Production Grade' },
              { bg:'#e8f8f8', icon:'🩵', name:'Standard Resin', desc:'Ultra-smooth surfaces for visual models and molds.', s1:'25μm layers', s2:'SLA Only' },
              { bg:'#f8e8e8', icon:'🔴', name:'Tough Resin', desc:'ABS-like resin for impact-resistant visual prototypes.', s1:'Impact Resistant', s2:'SLA Only' },
              { bg:'#f5f5e8', icon:'⚙️', name:'Carbon Fiber PLA', desc:'Lightweight high-stiffness composite for structural parts.', s1:'High Stiffness', s2:'FDM Only' },
            ].map((m, i) => (
              <div className="tdp-mat-card" key={i}>
                <div className="tdp-mat-swatch" style={{background: m.bg}}>{m.icon}</div>
                <h5>{m.name}</h5>
                <p>{m.desc}</p>
                <div className="tdp-mat-specs">
                  <span className="tdp-mat-spec">{m.s1}</span>
                  <span className="tdp-mat-spec">{m.s2}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      {/* SPECS TABLE SECTION */}
<section className="tdp-section tdp-specs">
  <div className="tdp-label">Technical Details</div>
  <h2 className="tdp-title">Machine <span>Specifications</span></h2>
  <div className="tdp-specs-layout">
    
    {/* ADD THIS WRAPPER DIV HERE */}
    <div className="tdp-table-container">
      <table className="tdp-table">
        <thead>
          <tr><th>Parameter</th><th>FDM</th><th>SLA</th><th>SLS</th></tr>
        </thead>
        <tbody>
          {[
            ['Layer Height','0.1–0.4mm','0.025–0.1mm','0.1mm'],
            ['Build Volume','600×600×600','145×145×175','350×350×380'],
            ['Tolerance','±0.2mm','±0.05mm','±0.3mm'],
            ['Surface Finish','Moderate','Excellent','Good'],
            ['Supports Required','Yes','Yes','No'],
            ['Lead Time','24–48 hrs','24–72 hrs','3–5 days'],
            ['Min Wall Thickness','1.2mm','0.6mm','0.7mm'],
          ].map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* END OF WRAPPER DIV */}

    <img className="tdp-specs-img" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470" alt="Quality control" />
  </div>
</section>

        {/* PRICING */}
        <section className="tdp-section tdp-pricing">
          <div className="tdp-label">Pricing</div>
          <h2 className="tdp-title">Simple, <span>Transparent Pricing</span></h2>
          <div className="tdp-price-grid">
            <div className="tdp-price-card">
              <div className="tdp-price-tier">Starter</div>
              <div className="tdp-price-name">Prototype</div>
              <div className="tdp-price-desc">For individuals and startups validating ideas fast.</div>
              <div className="tdp-price-amt">₹299<span style={{fontSize:'0.9rem',fontWeight:400}}>/part</span></div>
              <div className="tdp-price-unit">Starting price for FDM 10cm³</div>
              <ul className="tdp-price-feats">
                {['FDM Technology','5 materials available','48-hour turnaround','Basic inspection','Standard packaging'].map((f,i)=><li key={i}>{f}</li>)}
              </ul>
              <button className="tdp-price-btn">Get Quote</button>
            </div>
            <div className="tdp-price-card featured">
              <div className="tdp-price-badge">Most Popular</div>
              <div className="tdp-price-tier">Professional</div>
              <div className="tdp-price-name">Production</div>
              <div className="tdp-price-desc">For engineers and teams needing precise, repeatable parts.</div>
              <div className="tdp-price-amt">₹799<span style={{fontSize:'0.9rem',fontWeight:400}}>/part</span></div>
              <div className="tdp-price-unit">Starting for SLA/SLS 10cm³</div>
              <ul className="tdp-price-feats">
                {['All technologies','50+ materials','24-hour turnaround','Full DFM analysis','Certificate of conformance'].map((f,i)=><li key={i}>{f}</li>)}
              </ul>
              <button className="tdp-price-btn">Get Quote</button>
            </div>
            <div className="tdp-price-card">
              <div className="tdp-price-tier">Enterprise</div>
              <div className="tdp-price-name">Volume</div>
              <div className="tdp-price-desc">For manufacturers needing consistent, high-volume runs.</div>
              <div className="tdp-price-amt">Custom</div>
              <div className="tdp-price-unit">Volume-based pricing</div>
              <ul className="tdp-price-feats">
                {['Dedicated capacity','100+ part batches','Priority production','Engineering support','Net-30 payment terms'].map((f,i)=><li key={i}>{f}</li>)}
              </ul>
              <button className="tdp-price-btn">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="tdp-section tdp-faq">
          <div className="tdp-label">FAQs</div>
          <h2 className="tdp-title">Common <span>Questions</span></h2>
          <div className="tdp-faq-grid">
            {[
              { q:'What file formats do you accept?', a:'We accept STL, STEP, OBJ, and 3MF formats. STEP is preferred for dimensional accuracy. Free file repair is included if needed.' },
              { q:'How do I get a quote?', a:'Upload your file, select technology and material, and receive an instant quote. Complex orders include a DFM review within 4 hours.' },
              { q:'What is your minimum order quantity?', a:'There is no minimum order. We print single prototypes as readily as production batches. Volume discounts apply from 10+ identical parts.' },
              { q:'Can you color-match my brand?', a:'Yes — we offer custom color matching through filament selection or post-process painting. Pantone matching available on painted parts.' },
              { q:'Is my IP protected?', a:'Absolutely. We sign NDAs on request and do not share customer files. Files are deleted after 6 months unless archiving is requested.' },
              { q:'Do you ship across India?', a:'Yes — pan-India delivery with tracked express shipping. Same-city orders qualify for same-day delivery in select metros including Hyderabad.' },
            ].map((item, i) => (
              <div className="tdp-faq-item" key={i}>
                <div className="tdp-faq-q">{item.q}<span className="tdp-faq-icon">+</span></div>
                <div className="tdp-faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="tdp-cta">
          <h2>Ready to Print Your Next Idea?</h2>
          <p>Upload your file now and get a quote in minutes — no commitment required.</p>
          <div className="tdp-cta-btns">
            <button className="tdp-btn-white">Upload CAD File →</button>
            <button className="tdp-btn-outline-white">Talk to an Engineer</button>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}