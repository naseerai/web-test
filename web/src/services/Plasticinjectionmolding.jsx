import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function PlasticInjectionMolding() {
  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        
        /* vh for top padding (15vh) */
        .pim-root { font-family: 'DM Sans', sans-serif; background: #fff; color: #111; overflow-x: hidden; padding-top: 9vh; }

        /* HERO - Using vh for height and percentages for layout */
        .pim-hero { display: grid; grid-template-columns: 55% 45%; min-height: 85vh; width: 100%; }
        .pim-hero-left { padding: 5vh 5% 5vh 6%; display: flex; flex-direction: column; justify-content: center; width: 100%; }
        .pim-eyebrow { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.8rem; }
        .pim-eyebrow-line { width: 5%; height: 2px; background: #f4531c; }
        .pim-eyebrow-text { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #f4531c; }
        .pim-hero-left h1 { font-size: clamp(2.2rem, 4vw, 3.6rem); font-weight: 800; letter-spacing: -2px; line-height: 1.0; color: #111; margin-bottom: 1.2rem; }
        .pim-hero-left h1 .pim-hl { color: #f4531c; }
        .pim-hero-left p { font-size: 0.95rem; color: #666; line-height: 1.75; max-width: 85%; margin-bottom: 2.2rem; }
        .pim-hero-actions { display: flex; gap: 1rem; align-items: center; margin-bottom: 3.5rem; flex-wrap: wrap; }
        .pim-btn-primary { background: #f4531c; color: #fff; border: none; padding: 1.5vh 2.5%; border-radius: 6px; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: all 0.25s; min-width: fit-content; }
        .pim-btn-primary:hover { background: #e0451a; transform: translateY(-2px); }
        .pim-btn-link { font-size: 0.78rem; font-weight: 700; color: #111; text-decoration: none; display: flex; align-items: center; gap: 0.4rem; }
        .pim-btn-link:hover { color: #f4531c; }
        
        .pim-metrics { display: flex; gap: 0; border-top: 1px solid #e8e8e8; width: 100%; }
        .pim-metric { padding: 2vh 4% 2vh 0; border-right: 1px solid #e8e8e8; }
        .pim-metric:last-child { border-right: none; }
        .pim-metric-val { font-size: 2rem; font-weight: 800; letter-spacing: -1.5px; color: #111; }
        .pim-metric-val sup { font-size: 0.9rem; color: #f4531c; }
        .pim-metric-lbl { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-top: 0.2rem; }
        
        .pim-hero-right { position: relative; background: #f0f0f0; overflow: hidden; height: 100%; width: 100%; }
        .pim-hero-right > img { width: 100%; height: 100%; object-fit: cover; }
        .pim-hero-tag { position: absolute; top: 3vh; right: 5%; background: #f4531c; color: #fff; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 1vh 1.5%; border-radius: 4px; }
        .pim-hero-bottom { position: absolute; bottom: 3vh; left: 5%; right: 5%; background: #fff; border-radius: 10px; padding: 2vh 3%; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; border-top: 3px solid #f4531c; }
        .pim-mini-stat { text-align: center; }
        .pim-mini-stat strong { display: block; font-size: 1rem; font-weight: 800; color: #111; }
        .pim-mini-stat span { font-size: 0.62rem; color: #888; text-transform: uppercase; letter-spacing: 0.5px; }

        /* SHARED - Use percentages for padding */
        .pim-section { padding: 10vh 6%; width: 100%; }
        .pim-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #f4531c; margin-bottom: 0.6rem; }
        .pim-title { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #111; letter-spacing: -1.5px; line-height: 1.1; }
        .pim-title span { color: #888; font-weight: 400; }
        .pim-desc { font-size: 0.9rem; color: #666; line-height: 1.7; max-width: 540px; margin-top: 0.6rem; }

        /* WHY */
        .pim-why { background: #f5f5f5; }
        .pim-why-layout { display: grid; grid-template-columns: 45% 50%; gap: 5%; margin-top: 5vh; align-items: center; }
        .pim-why-img { position: relative; width: 100%; }
        .pim-why-img img { width: 100%; height: 60vh; object-fit: cover; border-radius: 12px; }
        .pim-why-badge { position: absolute; top: 4vh; right: -5%; background: #f4531c; color: #fff; padding: 2vh 2%; border-radius: 10px; text-align: center; min-width: 120px; box-shadow: 0 10px 25px rgba(244,83,28,0.3); }
        .pim-why-badge strong { display: block; font-size: 1.8rem; font-weight: 800; line-height: 1; }
        .pim-why-badge span { font-size: 0.62rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.85; }
        .pim-why-right h3 { font-size: 1.4rem; font-weight: 700; letter-spacing: -0.8px; margin-bottom: 1rem; }
        .pim-why-right p { font-size: 0.88rem; color: #666; line-height: 1.75; margin-bottom: 1.8rem; }
        .pim-adv { display: grid; grid-template-columns: 48% 48%; gap: 4%; }
        .pim-adv-item { background: #fff; border-radius: 10px; padding: 2vh 4%; border: 1px solid #e8e8e8; transition: all 0.25s; }
        .pim-adv-item:hover { border-color: #f4531c; transform: translateY(-3px); }
        .pim-adv-icon { font-size: 1.4rem; margin-bottom: 0.5rem; }
        .pim-adv-item h5 { font-size: 0.82rem; font-weight: 700; margin-bottom: 0.25rem; }
        .pim-adv-item p { font-size: 0.72rem; color: #666; line-height: 1.5; }

        /* PROCESS */
        .pim-process { background: #111; }
        .pim-process .pim-title { color: #fff; }
        .pim-process .pim-desc { color: #888; }
        .pim-process-layout { display: grid; grid-template-columns: 50% 45%; gap: 5%; margin-top: 5vh; }
        .pim-timeline { position: relative; }
        .pim-timeline::before { content: ''; position: absolute; left: 27px; top: 0; bottom: 0; width: 2px; background: rgba(244,83,28,0.25); }
        .pim-p-step { display: grid; grid-template-columns: 56px 1fr; gap: 1.5rem; margin-bottom: 4vh; }
        .pim-p-num { width: 54px; height: 54px; border-radius: 50%; background: #1a1a1a; border: 2px solid rgba(244,83,28,0.3); color: #f4531c; font-size: 0.75rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; z-index: 1; position: relative; }
        .pim-p-num.act { background: #f4531c; color: #fff; border-color: #f4531c; }
        .pim-p-content { padding-top: 0.8rem; }
        .pim-p-content h4 { font-size: 0.92rem; font-weight: 700; color: #fff; margin-bottom: 0.35rem; }
        .pim-p-content p { font-size: 0.78rem; color: #888; line-height: 1.6; }
        .pim-process-img { width: 100%; height: 75vh; object-fit: cover; border-radius: 12px; }

        /* PRODUCT TYPES */
        .pim-products { background: #fff; }
        .pim-prod-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 5vh; }
        .pim-prod-card { position: relative; border-radius: 12px; overflow: hidden; height: 50vh; cursor: pointer; }
        .pim-prod-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .pim-prod-card:hover img { transform: scale(1.05); }
        .pim-prod-overlay { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(0,0,0,0.85) 20%, transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 2vh 8%; }
        .pim-prod-lbl { font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #f4531c; margin-bottom: 0.3rem; }
        .pim-prod-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.4rem; }
        .pim-prod-desc { font-size: 0.72rem; color: rgba(255,255,255,0.75); line-height: 1.5; }

        /* MATERIALS TABLE */
        .pim-mat { background: #f5f5f5; }
        .pim-mat-layout { display: grid; grid-template-columns: 40% 55%; gap: 5%; margin-top: 5vh; align-items: start; }
        .pim-mat-img img { width: 100%; height: 52vh; object-fit: cover; border-radius: 12px; }
        .pim-mat-table-container {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

/* --- 2. Set a minimum width for the table so it scrolls on mobile --- */
.pim-mat-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; /* This ensures the table doesn't crush on small screens */
}
        .pim-mat-table thead tr { background: #111; }
        .pim-mat-table th { padding: 1.5vh 1rem; text-align: left; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #fff; }
        .pim-mat-table td { padding: 1.5vh 1rem; border-bottom: 1px solid #e8e8e8; font-size: 0.8rem; background: #fff; }
        .pim-mat-table td:first-child { font-weight: 600; }
        .pim-mat-table tr:hover td { background: rgba(244,83,28,0.02); }
        .pim-tag { display: inline-block; font-size: 0.62rem; font-weight: 700; padding: 0.3vh 0.6rem; border-radius: 3px; text-transform: uppercase; }
        .pim-tag-food { background: #e8f5e9; color: #2e7d32; }
        .pim-tag-heat { background: #fff3e0; color: #e65100; }
        .pim-tag-impact { background: #e3f2fd; color: #1565c0; }
        .pim-tag-chem { background: #f3e5f5; color: #6a1b9a; }
        .pim-tag-flex { background: #e8f5e9; color: #388e3c; }
        .pim-tag-bal { background: #f1f8e9; color: #558b2f; }

        /* QUALITY */
        .pim-quality { background: #fff; }
        .pim-quality-layout { display: grid; grid-template-columns: 45% 50%; gap: 5%; margin-top: 5vh; align-items: center; }
        .pim-quality-img img { width: 100%; height: 52vh; object-fit: cover; border-radius: 12px; }
        .pim-q-list { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
        .pim-q-item { display: flex; gap: 0.9rem; align-items: flex-start; padding: 2vh 4%; border-radius: 10px; border: 1px solid #e8e8e8; transition: all 0.25s; }
        .pim-q-item:hover { border-color: #f4531c; background: rgba(244,83,28,0.02); }
        .pim-q-num { min-width: 32px; height: 32px; background: #f4531c; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.68rem; font-weight: 800; flex-shrink: 0; }
        .pim-q-text h5 { font-size: 0.85rem; font-weight: 700; margin-bottom: 0.25rem; }
        .pim-q-text p { font-size: 0.75rem; color: #666; line-height: 1.5; }

        /* GALLERY */
        .pim-gallery { background: #111; padding: 10vh 6%; }
        .pim-gallery .pim-title { color: #fff; }
        .pim-gallery .pim-desc { color: #888; }
        .pim-mosaic { display: grid; grid-template-columns: 50% 25% 25%; grid-template-rows: 30vh 30vh; gap: 10px; margin-top: 5vh; }
        .pim-mosaic-item { border-radius: 8px; overflow: hidden; }
        .pim-mosaic-item:first-child { grid-row: 1 / 3; }
        .pim-mosaic-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .pim-mosaic-item:hover img { transform: scale(1.04); }

        /* CTA */
        .pim-cta { padding: 10vh 6%; background: #f5f5f5; display: grid; grid-template-columns: 60% 35%; gap: 5%; align-items: center; }
        .pim-cta h2 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; letter-spacing: -1.5px; line-height: 1.1; }
        .pim-cta p { color: #666; margin-top: 0.6rem; font-size: 0.9rem; max-width: 460px; }
        .pim-cta-btns { display: flex; flex-direction: column; gap: 0.7rem; }
        .pim-btn-dark { background: #111; color: #fff; border: none; padding: 1.8vh 2rem; border-radius: 7px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; cursor: pointer; white-space: nowrap; transition: all 0.25s; text-align: center; }
        .pim-btn-dark:hover { background: #f4531c; transform: translateY(-2px); }
        .pim-btn-outline { background: transparent; color: #111; border: 1.5px solid #e8e8e8; padding: 1.8vh 2rem; border-radius: 7px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; cursor: pointer; white-space: nowrap; transition: all 0.25s; text-align: center; }
        .pim-btn-outline:hover { border-color: #f4531c; color: #f4531c; }

        @media (max-width: 900px) {
          .pim-hero { grid-template-columns: 1fr; min-height: auto; }
          .pim-hero-right { height: 40vh; }
          .pim-hero-left p { max-width: 100%; }
          .pim-why-layout, .pim-process-layout, .pim-quality-layout, .pim-mat-layout { grid-template-columns: 1fr; gap: 4vh; }
          .pim-why-img img, .pim-process-img, .pim-quality-img img { height: 45vh; }
          .pim-prod-grid { grid-template-columns: 1fr 1fr; }
          .pim-cta { grid-template-columns: 1fr; text-align: center; }
          .pim-cta p { margin: 0.6rem auto; }
          .pim-mosaic { grid-template-columns: 1fr 1fr; grid-template-rows: repeat(3, 20vh); }
          .pim-mosaic-item:first-child { grid-column: 1 / 3; grid-row: 1 / 2; }
          .pim-mat-layout { 
    display: flex; 
    flex-direction: column; /* Stacks image and table vertically */
    gap: 2rem; 
  }
  
  .pim-mat-img img { 
    height: auto; /* Prevents the image from looking stretched or cut off */
    aspect-ratio: 16 / 9; /* Keeps a nice rectangular shape on mobile */
    width: 100%;
    object-fit: cover;
  }

  .pim-mat-table-container {
    margin-top: 1rem;
  }
        }
      `}</style>

      <Header />

      <div className="pim-root">

        {/* HERO */}
        <div className="pim-hero">
          <div className="pim-hero-left">
            <div className="pim-eyebrow"><div className="pim-eyebrow-line"></div><span className="pim-eyebrow-text">Manufacturing Service</span></div>
            <h1>High-Volume Parts.<br/><span className="pim-hl">Precise.</span> Repeatable.</h1>
            <p>Industrial plastic injection molding for consumer products, enclosures, and structural components — from single-cavity prototypes to million-unit production runs.</p>
            <div className="pim-hero-actions">
              <button className="pim-btn-primary">Request Tooling Quote →</button>
              <a href="#" className="pim-btn-link">View Capabilities ↓</a>
            </div>
            <div className="pim-metrics">
              <div className="pim-metric"><div className="pim-metric-val">±0.1<sup>mm</sup></div><div className="pim-metric-lbl">Tolerance</div></div>
              <div className="pim-metric"><div className="pim-metric-val">100K<sup>+</sup></div><div className="pim-metric-lbl">Max Run/Month</div></div>
              <div className="pim-metric"><div className="pim-metric-val">2–4<sup>wk</sup></div><div className="pim-metric-lbl">Tool Lead Time</div></div>
            </div>
          </div>
          <div className="pim-hero-right">
            <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=80" alt="Injection Molding Machine" />
            <div className="pim-hero-tag">ISO 9001:2015</div>
            <div className="pim-hero-bottom">
              <div className="pim-mini-stat"><strong>30+</strong><span>Materials</span></div>
              <div className="pim-mini-stat"><strong>5T–500T</strong><span>Clamp Force</span></div>
              <div className="pim-mini-stat"><strong>24h</strong><span>DFM Feedback</span></div>
            </div>
          </div>
        </div>

        {/* WHY */}
        <section className="pim-section pim-why">
          <div className="pim-label">Why Injection Molding</div>
          <h2 className="pim-title">The Gold Standard <span>for Production Parts</span></h2>
          <div className="pim-why-layout">
            <div className="pim-why-img">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" alt="Mold tooling engineering" />
              <div className="pim-why-badge"><strong>20+</strong><span>Yrs Experience</span></div>
            </div>
            <div className="pim-why-right">
              <h3>From 100 Parts to 10 Million — the Same Precision</h3>
              <p>Injection molding is unmatched for producing consistent, complex plastic parts at scale. Once tooling is made, per-unit cost drops dramatically making it the most economical choice for volume manufacturing.</p>
              <div className="pim-adv">
                {[
                  { icon:'🎯', title:'Tight Tolerances', desc:'±0.1mm achievable across full production run.' },
                  { icon:'⚡', title:'High Speed', desc:'Cycle times as low as 8 seconds for simple parts.' },
                  { icon:'♻️', title:'Low Waste', desc:'Minimal material waste vs. subtractive methods.' },
                  { icon:'🔄', title:'Repeatability', desc:'Part-to-part consistency across millions of cycles.' },
                  { icon:'🎨', title:'Surface Finish', desc:'Class A cosmetic finishes, textures, and gloss levels.' },
                  { icon:'💰', title:'Low Unit Cost', desc:'Economics improve dramatically at 1000+ pieces.' },
                ].map((a, i) => (
                  <div className="pim-adv-item" key={i}>
                    <div className="pim-adv-icon">{a.icon}</div>
                    <h5>{a.title}</h5>
                    <p>{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="pim-section pim-process">
          <div className="pim-label">Process Overview</div>
          <h2 className="pim-title" style={{color:'#fff'}}>From CAD to <span style={{color:'#555'}}>Shipping Box</span></h2>
          <p className="pim-desc">A rigorous 6-stage process with quality gates at every step.</p>
          <div className="pim-process-layout">
            <div className="pim-timeline">
              {[
                { n:'01', act:true, title:'Design for Manufacturability (DFM)', desc:"Our engineers review your CAD for wall thickness, draft angles, sink marks, and gate placement. Feedback within 24 hours." },
                { n:'02', act:false, title:'Mold Flow Analysis', desc:'Simulation of plastic flow, pressure, and cooling to optimize gate location and predict warpage before any metal is cut.' },
                { n:'03', act:false, title:'Tooling Fabrication', desc:'CNC-machined P20, H13, or S7 steel molds with wire EDM for fine features. T1 samples in 2–4 weeks.' },
                { n:'04', act:false, title:'T1 Sample & Validation', desc:'First article inspection with full CMM report. Up to 3 rounds of mold revisions included.' },
                { n:'05', act:false, title:'Production Run', desc:'Automated production with in-process SPC monitoring, visual inspection, and cycle time tracking.' },
                { n:'06', act:false, title:'Pack & Ship', desc:'ESD-safe or custom packaging. Consolidated shipments or JIT delivery to your facility.' },
              ].map((s, i) => (
                <div className="pim-p-step" key={i}>
                  <div className={`pim-p-num${s.act ? ' act' : ''}`}>{s.n}</div>
                  <div className="pim-p-content">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800" alt="Industrial robotic manufacturing arm" className="pim-process-img" />
          </div>
        </section>

        {/* PRODUCT TYPES */}
        <section className="pim-section pim-products">
          <div className="pim-label">Application Areas</div>
          <h2 className="pim-title">What We <span>Manufacture</span></h2>
          <p className="pim-desc">From tiny precision connectors to large automotive panels — our press range covers every category.</p>
          <div className="pim-prod-grid">
            {[
              { img:'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=600', lbl:'Consumer', title:'Consumer Product Housings', desc:'Cosmetic shells, handles, and enclosures requiring Class A surface finish.' },
              { img:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600', lbl:'Electronics', title:'Electronic Enclosures', desc:'EMI-shielded, UL94-rated housings for PCBs, switches, and connectors.' },
              { img:'https://images.unsplash.com/photo-1576091160550-2173dad99a01?auto=format&fit=crop&q=80&w=600', lbl:'Medical', title:'Medical Device Components', desc:'ISO 13485 compliant cleanroom-molded components in medical-grade polymers.' },
              { img:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600', lbl:'Automotive', title:'Automotive Interior Parts', desc:'High-heat, UV-stable parts for dashboards, clips, and structural brackets.' },
              { img:'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600', lbl:'Industrial', title:'Industrial Components', desc:'Gears, cams, valves, and structural elements in engineering-grade polymers.' },
              { img:'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=600', lbl:'Packaging', title:'Custom Packaging', desc:'Caps, closures, thin-wall containers, and custom packaging at scale.' },
            ].map((p, i) => (
              <div className="pim-prod-card" key={i}>
                <img src={p.img} alt={p.title} />
                <div className="pim-prod-overlay">
                  <span className="pim-prod-lbl">{p.lbl}</span>
                  <div className="pim-prod-title">{p.title}</div>
                  <div className="pim-prod-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

     {/* MATERIALS */}
<section className="pim-section pim-mat">
  <div className="pim-label">Materials</div>
  <h2 className="pim-title">30+ Resins <span>for Every Application</span></h2>
  
  <div className="pim-mat-layout">
    <div className="pim-mat-img">
      <img src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg" alt="Plastic raw material pellets" />
    </div>

    {/* Added this wrapper div for horizontal scroll */}
    <div className="pim-mat-table-container">
      <table className="pim-mat-table">
        <thead>
          <tr>
            <th>Material</th>
            <th>Key Property</th>
            <th>Best For</th>
            <th>Tag</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>ABS</td><td>Impact Resistant</td><td>Housings, panels</td><td><span className="pim-tag pim-tag-impact">Impact</span></td></tr>
          <tr><td>PP</td><td>Chemical Resistant</td><td>Containers, hinges</td><td><span className="pim-tag pim-tag-food">Food Safe</span></td></tr>
          <tr><td>PC</td><td>Optically Clear</td><td>Lenses, displays</td><td><span className="pim-tag pim-tag-heat">High Temp</span></td></tr>
          <tr><td>Nylon PA6/66</td><td>Wear Resistant</td><td>Gears, bearings</td><td><span className="pim-tag pim-tag-impact">Impact</span></td></tr>
          <tr><td>PEEK</td><td>Extreme Temp</td><td>Aerospace, medical</td><td><span className="pim-tag pim-tag-heat">High Temp</span></td></tr>
          <tr><td>POM (Delrin)</td><td>Low Friction</td><td>Precision gears, slides</td><td><span className="pim-tag pim-tag-chem">Low Friction</span></td></tr>
          <tr><td>TPE/TPU</td><td>Flexible</td><td>Grips, seals, gaskets</td><td><span className="pim-tag pim-tag-flex">Flex</span></td></tr>
          <tr><td>PC+ABS Blend</td><td>Balanced</td><td>Electronics, auto</td><td><span className="pim-tag pim-tag-bal">Balanced</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

        {/* QUALITY */}
        <section className="pim-section pim-quality">
          <div className="pim-label">Quality Assurance</div>
          <h2 className="pim-title">Built-in <span>Quality at Every Stage</span></h2>
          <div className="pim-quality-layout">
            <div className="pim-quality-img">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Quality inspection of molded part" />
            </div>
            <div>
              <p className="pim-desc" style={{maxWidth:'100%',marginTop:0}}>Our 5-stage quality system ensures every part meets your specification — not just statistically, but actually.</p>
              <div className="pim-q-list">
                {[
                  { n:'QC1', title:'Incoming Material Inspection', desc:'Every resin lot verified for MFI, moisture content, and color consistency before production.' },
                  { n:'QC2', title:'First Article Inspection (FAI)', desc:'Full dimensional report on T1 samples using CMM and optical comparators.' },
                  { n:'QC3', title:'In-Process SPC', desc:'Statistical process control monitoring critical dimensions through the production run.' },
                  { n:'QC4', title:'Visual & Cosmetic Inspection', desc:'Trained inspectors check every part for sink marks, flash, flow lines, and color defects.' },
                  { n:'QC5', title:'Final Outgoing Inspection', desc:'AQL sampling before shipment with full traceability documentation.' },
                ].map((q, i) => (
                  <div className="pim-q-item" key={i}>
                    <div className="pim-q-num">{q.n}</div>
                    <div className="pim-q-text"><h5>{q.title}</h5><p>{q.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="pim-gallery">
          <div className="pim-label" style={{color:'#f4531c'}}>Our Work</div>
          <h2 className="pim-title">Production <span style={{color:'#555'}}>Showcase</span></h2>
          <p className="pim-desc">Parts molded at our facility across industries.</p>
          <div className="pim-mosaic">
            <div className="pim-mosaic-item"><img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" alt="Mold tooling" /></div>
            <div className="pim-mosaic-item"><img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Injection machine" /></div>
            <div className="pim-mosaic-item"><img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600" alt="Detailed part showcase" /></div>
            <div className="pim-mosaic-item"><img src="https://images.unsplash.com/photo-1531251445707-1f000e1e8b6b?auto=format&fit=crop&q=80&w=600" alt="Material storage" /></div>
            <div className="pim-mosaic-item"><img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600" alt="Precision measurement" /></div>
          </div>
        </section>

        {/* CTA */}
        <section className="pim-cta">
          <div>
            <h2>Ready to Start Your<br/>Molding Project?</h2>
            <p>Upload your CAD file for a DFM review and tooling quote within 24 hours. No commitment required.</p>
          </div>
          <div className="pim-cta-btns">
            <button className="pim-btn-dark">Upload CAD for Quote →</button>
            <button className="pim-btn-outline">Schedule Engineering Call</button>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}