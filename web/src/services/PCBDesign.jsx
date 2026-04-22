import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .pd-page { font-family: 'DM Sans', sans-serif; background: #ffffff; color: #111; overflow-x: hidden; }
  .cp-page, .pcb-page, .ed-page, .fw-page, .pd-page, .sr-page {
  padding-top: 40px; /* Adjust this based on your Header's height */
}

  /* HERO */
/* HERO */
.pd-hero { 
  position: relative; 
  width: 100%;              /* Stretches to full width */
  margin: 0; 
  border-radius: 0;         /* Keeps it full-bleed sharp */
  overflow: hidden; 
height: 85vh; min-height: 600px;  display: flex; 
  align-items: center; 
  background: #0a0a0a; 
}  .pd-hero-bg { position: absolute; inset: 0; }
  .pd-hero-bg img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.32); }
  .pd-hero-overlay { position: absolute; inset: 0; background: linear-gradient(110deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, transparent 100%); }
  .pd-hero-inner { position: relative; z-index: 2; width: 100%; padding: 4rem 5%; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .pd-hero-badge { display: inline-block; background: #f4531c; color: #fff; font-size: 0.66rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; padding: 5px 13px; border-radius: 3px; margin-bottom: 1.4rem; }
  .pd-hero h1 { font-size: clamp(2.8rem, 6vw, 5.5rem); font-weight: 700; line-height: 1.0; color: #fff; letter-spacing: -2px; margin-bottom: 1.4rem; }
  .pd-hero h1 em { color: #f4531c; font-style: normal; }
  .pd-hero-sub { font-size: 1rem; color: rgba(255,255,255,0.68); line-height: 1.8; max-width: 460px; margin-bottom: 2.5rem; }
  .pd-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
  .pd-btn-fill { background: #f4531c; color: #fff; border: none; padding: 13px 26px; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 0.73rem; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: .3s; }
  .pd-btn-fill:hover { background: #ff6b35; transform: translateY(-2px); box-shadow: 0 8px 22px rgba(244,83,28,.35); }
  .pd-btn-ghost { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,.45); padding: 13px 26px; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 0.73rem; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: .3s; }
  .pd-btn-ghost:hover { border-color: #fff; }
  .pd-metrics { display: flex; flex-direction: column; gap: 1rem; }
  .pd-metric { background: rgba(255,255,255,0.07); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,.12); border-radius: 10px; padding: 1.2rem 1.8rem; display: flex; justify-content: space-between; align-items: center; transition: .3s;  }
  .pd-metric:hover { border-color: rgba(244,83,28,.5); background: rgba(244,83,28,.06); }
  .pd-metric-val { font-size: 2rem; font-weight: 700; color: #f4531c; line-height: 1; }
  .pd-metric-sub { font-size: 0.68rem; color: rgba(255,255,255,.5); margin-top: 3px; }
  .pd-metric-label { font-size: 0.72rem; color: rgba(255,255,255,.55); text-align: right; line-height: 1.5; }

  /* MARQUEE */
  .pd-marquee { background: #111; padding: 11px 0; overflow: hidden; white-space: nowrap; }
  .pd-marquee-track { display: inline-flex; animation: pdSlide 32s linear infinite; }
  .pd-mitem { font-size: .7rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,.6); padding: 0 2rem; }
  .pd-mitem strong { color: #f4531c; }
  .pd-mdot { color: rgba(255,255,255,.2); padding: 0 .3rem; }
  @keyframes pdSlide { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* SECTIONS */
  .pd-section { max-width: 1320px; margin: 0 auto; padding: 2.5rem 5%; }
  .pd-eyebrow { font-size: .67rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f4531c; margin-bottom: .75rem; display: flex; align-items: center; gap: 10px; }
  .pd-eyebrow::before { content: ''; width: 26px; height: 2px; background: #f4531c; }
  .pd-stitle { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; letter-spacing: -1px; line-height: 1.1; margin-bottom: 1.2rem; }
  .pd-stitle em { color: #f4531c; font-style: normal; }

  /* LAYER STACK */
  .pd-layers-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-top: 4rem; }
  .pd-layer-list { display: flex; flex-direction: column; gap: 8px; }
  .pd-layer { display: flex; align-items: center; gap: 1rem; background: #f7f7f7; border: 1px solid #e8e8e8; border-radius: 8px; padding: .9rem 1.4rem; transition: .25s; cursor: default; }
  .pd-layer:hover { border-color: #f4531c; background: #fff8f5; transform: translateX(5px); }
  .pd-layer-dot { width: 36px; height: 10px; border-radius: 2px; flex-shrink: 0; }
  .pd-layer-name { font-size: .88rem; font-weight: 700; }
  .pd-layer-spec { font-size: .75rem; color: #888; margin-left: auto; }
  .pd-checklist { list-style: none; margin-top: 2rem; }
  .pd-checklist li { display: flex; gap: 12px; align-items: flex-start; padding: .9rem 0; border-bottom: 1px solid #e8e8e8; font-size: .88rem; color: #555; }
  .pd-checklist li:first-child { border-top: 1px solid #e8e8e8; }
  .pd-check-mark { color: #f4531c; font-weight: 700; flex-shrink: 0; margin-top: 1px; }

  /* TOOLS */
  .pd-dark-band { background: #111; padding: 5.5rem 0; }
  .pd-dark-inner { max-width: 1320px; margin: 0 auto; padding: 0 5%; }
  .pd-dark-eyebrow { font-size: .67rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f4531c; margin-bottom: .75rem; display: flex; align-items: center; gap: 10px; }
  .pd-dark-eyebrow::before { content: ''; width: 26px; height: 2px; background: #f4531c; }
  .pd-dark-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; letter-spacing: -1px; line-height: 1.1; margin-bottom: 1.2rem; color: #fff; }
  .pd-dark-title em { color: #f4531c; font-style: normal; }
  .pd-tools-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; margin-top: 3rem; }
  .pd-tool { background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 12px; padding: 2.2rem; text-align: center; transition: .3s; }
  .pd-tool:hover { border-color: #f4531c; transform: translateY(-5px); box-shadow: 0 12px 36px rgba(244,83,28,.12); }
  .pd-tool-icon { font-size: 2rem; display: block; margin-bottom: 1rem; }
  .pd-tool-name { font-size: .9rem; font-weight: 700; color: #fff; margin-bottom: .4rem; }
  .pd-tool-desc { font-size: .78rem; color: #888; line-height: 1.6; }

  /* SPECS TABLE */
    .pd-tbl-wrap { 
    border: 1px solid #e8e8e8; 
    border-radius: 12px; 
    overflow-x: auto; /* Allow horizontal scrolling */
    margin-top: 1.5rem; 
    -webkit-overflow-scrolling: touch; /* Smooth scrolling for iOS */
  }

  .pd-tbl { 
    width: 100%; 
    border-collapse: collapse; 
    min-width: 600px; /* Prevents the table from squishing on small screens */
  }
  .pd-tbl thead { background: #111; }
  .pd-tbl th { color: #fff; font-size: .67rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 1rem 1.4rem; text-align: left; }
  .pd-tbl td { padding: 1.05rem 1.4rem; border-bottom: 1px solid #e8e8e8; font-size: .88rem; background: #fff; transition: .2s; }
  .pd-tbl td:last-child { color: #f4531c; font-weight: 600; }
  .pd-tbl tbody tr:last-child td { border-bottom: none; }
  .pd-tbl tbody tr:hover td { background: #fff8f5; }

  /* WIDE IMAGE */
  .pd-wide-img { border-radius: 14px; overflow: hidden; aspect-ratio: 21/8; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,.1); }
  .pd-wide-img img { width: 100%; height: 100%; object-fit: cover; }
  .pd-wide-img-text { position: absolute; bottom: 2.5rem; left: 4%; z-index: 2; }
  .pd-wide-img-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,.75) 0%, transparent 50%), linear-gradient(to top, rgba(0,0,0,.6) 0%, transparent 50%); }
  .pd-wide-img-text h3 { font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 700; color: #fff; letter-spacing: -0.5px; margin-bottom: .5rem; }
  .pd-wide-img-text p { color: rgba(255,255,255,.6); font-size: .9rem; max-width: 380px; }

  /* CTA CARDS */
  .pd-cta-split { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 4rem; }
  .pd-cta-card { background: #f7f7f7; border: 1px solid #e8e8e8; border-radius: 14px; padding: 3rem; transition: .3s; }
  .pd-cta-card.highlight { background: #fff0eb; border-color: #fde0d6; }
  .pd-cta-card:hover { border-color: #f4531c; transform: translateY(-3px); box-shadow: 0 12px 36px rgba(244,83,28,.08); }
  .pd-cta-card h3 { font-size: 1.4rem; font-weight: 700; margin-bottom: 1rem; }
  .pd-cta-card p { color: #666; font-size: .88rem; line-height: 1.7; margin-bottom: 2rem; }
  
  /* Add this inside your styles string */
  .pd-tool-img-wrap {
    height: 64px;          /* Fixed height for all logo containers */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .pd-tool-img {
    max-height: 100%;      /* Ensures image doesn't exceed container height */
    max-width: 140px;      /* Limits width so logos don't touch the edges */
    object-fit: contain;   /* Maintains aspect ratio without stretching */
    
    /* OPTIONAL: If your logos are black and you want them white to match the dark theme */
    /* filter: brightness(0) invert(1); */
  }

  @media(max-width:960px) {
    .pd-hero { width: 100%; border-radius: 0; margin-top: 0; }
    .pd-hero-inner { grid-template-columns: 1fr; }
    .pd-metrics { display: none; }
    .pd-layers-grid { grid-template-columns: 1fr; }
    .pd-tools-grid { grid-template-columns: repeat(2,1fr); }
    .pd-cta-split { grid-template-columns: 1fr; }
     .pd-wide-img {
      aspect-ratio: 1 / 0.8; /* Makes it a tall rectangle on mobile */
    }

    /* 2. Adjust the text position and width */
    .pd-wide-img-text {
      bottom: 1.5rem;
      left: 1.5rem;
      right: 1.5rem;
    }

    /* 3. Scale down the font sizes */
    .pd-wide-img-text h3 {
      font-size: 1.8rem;
      line-height: 1.2;
    }

    .pd-wide-img-text p {
      font-size: 0.85rem;
      max-width: 100%; /* Let text use full width */
    }

    /* 4. Make the overlay darker on mobile for better readability */
    .pd-wide-img-overlay {
      background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%);
    }
  }
  @media(max-width:540px) {
    .pd-tools-grid { grid-template-columns: 1fr; }
  }

`;

const marqueeItems = ["Schematic Capture","Multi-layer PCB","Impedance Control","DFM/DFT Compliant","3D Step Export","BOM Optimization","Signal Integrity","Gerber Generation"];

const layers = [
  { color:"#d4a017", name:"Top Copper (Signal)", spec:"1oz Cu" },
  { color:"#2563eb", name:"Ground Plane", spec:"Solid Fill" },
  { color:"#7c3aed", name:"Inner Signal 1", spec:"Controlled Z" },
  { color:"#059669", name:"Power Plane", spec:"Split Pour" },
  { color:"#9333ea", name:"Inner Signal 2", spec:"Controlled Z" },
  { color:"#3b82f6", name:"Ground Plane", spec:"Solid Fill" },
  { color:"#ca8a04", name:"Bottom Copper (Signal)", spec:"1oz Cu" },
];

const designChecks = [
  "Complete Schematic Capture & Power budget planning",
  "High-speed routing with controlled impedance (up to 12 Layers)",
  "Custom IPC-compliant library & footprint management",
  "Signal integrity, EMI checks, and thermal zone validation",
  "Comprehensive output: Gerbers, NC Drill, Pick & Place, and 3D Step",
];

const tools = [
  { 
    img: "/assets/services/EASYEDA-removebg-preview.webp", 
    name: "EasyEDA Pro", 
    desc: "Efficient web-based design for rapid development and production.",
    width: "130px" // Individual size
  },
  { 
    img: "/assets/services/Screenshot_2026-04-07_133039-removebg-preview.webp", 
    name: "Altium Designer", 
    desc: "Industry-standard for complex, high-speed multi-layer boards.",
    width: "150px" // Slightly wider
  },
  { 
    img: "/assets/services/KiCad-Logo.svg.webp", 
    name: "KiCAD 6/7", 
    desc: "Powerful open-source suite for professional-grade PCB layout.",
    width: "110px" // Scaled down
  },
  { 
    img: "/assets/services/ChatGPT_Image_Apr_7__2026__01_43_22_PM-removebg-preview.webp", 
    name: "Autodesk Eagle", 
    desc: "Reliable design platform for IoT and embedded hardware.",
    width: "120px" // Custom size
  },
];

const specRows = [
  ["Layer Count","1–4 Layers","Up to 12 Layers"],
  ["Design Rules","Standard DFM","High-Density (HDI)"],
  ["Compliance","IPC Class 2","IPC Class 3 / Mil-Spec"],
  ["Integrity","Basic DC","High-Speed / RF Simulation"],
  ["Outputs","Gerber / BOM","Full Manufacturing Package"],
  ["Applications","IoT / Consumer","Medical / Automotive / Industrial"],
];

export default function PCBDesign() {
  return (
    <div className="pd-page">
      <style>{styles}</style>
       <Header />

      {/* HERO */}
      <div className="pd-hero">
        <div className="pd-hero-bg">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80" alt="PCB Design" />
        </div>
        <div className="pd-hero-overlay" />
        <div className="pd-hero-inner">
          <div>
            <div className="pd-hero-badge">Service</div>
            <h1>PCB<br /><em>Design</em><br />Services</h1>
            <p className="pd-hero-sub">From concept to Gerber, we deliver optimized, reliable, and production-ready PCB designs meeting signal integrity, thermal, and manufacturability requirements. </p>
            <div className="pd-hero-actions">
              <button className="pd-btn-fill">Start Your Design &rsaquo;</button>
              <button className="pd-btn-ghost">View Portfolio</button>
            </div>
          </div>
          <div className="pd-metrics">
            <div className="pd-metric">
              <div><div className="pd-metric-val">12L</div><div className="pd-metric-sub">Max Layer Count</div></div>
              <div className="pd-metric-label">HDI & Standard<br/>Stackup Design</div>
            </div>
            <div className="pd-metric">
              <div><div className="pd-metric-val">3mil</div><div className="pd-metric-sub">Min Trace Width</div></div>
              <div className="pd-metric-label">Fine-Pitch<br/>Capability</div>
            </div>
            <div className="pd-metric">
              <div><div className="pd-metric-val">40GHz</div><div className="pd-metric-sub">Signal Integrity</div></div>
              <div className="pd-metric-label">RF & High-Speed<br/>Design</div>
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="pd-marquee">
        <div className="pd-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="pd-mitem"><strong>{item}</strong></span>
              <span className="pd-mdot">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* LAYER STACK */}
      <div className="pd-section">
        <div className="pd-eyebrow">Stackup Design</div>
        <div className="pd-stitle">Layer <em>Strategy</em></div>
        <div className="pd-layers-grid">
          <div className="pd-layer-list">
            {layers.map((l, i) => (
              <div className="pd-layer" key={i}>
                <div className="pd-layer-dot" style={{ background: l.color }} />
                <div className="pd-layer-name">{l.name}</div>
                <div className="pd-layer-spec">{l.spec}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="pd-eyebrow">Design Philosophy</div>
            <div className="pd-stitle">Engineered <em>Right</em></div>
            <p style={{ color:"#666", lineHeight:"1.8", fontSize:".94rem" }}>Good PCB layout isn't just about fitting components — it's about managing impedance, minimizing EMI, and ensuring the board is manufacturable at scale.</p>
            <ul className="pd-checklist">
              {designChecks.map((c, i) => (
                <li key={i}><span className="pd-check-mark">✓</span>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* WIDE IMAGE */}
      <div className="pd-section" style={{ paddingTop:0 }}>
        <div className="pd-wide-img">
          <div className="pd-wide-img-overlay" />
          <img src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=1400&q=80" alt="PCB Layout" />
          <div className="pd-wide-img-text">
            <h3>Versatile Industry Applications</h3>
            <p>Serving Medical Electronics, Automotive BLDC Drivers, IoT Wearables, Industrial Control, and RF/GNSS/LoRa systems.</p>
          </div>
        </div>
      </div>

      {/* TOOLS */}
      <div className="pd-dark-band">
        <div className="pd-dark-inner">
          <div className="pd-dark-eyebrow">Software & Tools</div>
          <div className="pd-dark-title">Our <em>Toolchain</em></div>
       <div className="pd-tools-grid">
  {tools.map((t, i) => (
    <div className="pd-tool" key={i}>
      <div className="pd-tool-img-wrap">
        <img 
          src={t.img} 
          alt={t.name} 
          className="pd-tool-img" 
          /* This line applies the individual width from the array */
          style={{ width: t.width }} 
        />
      </div>
      <div className="pd-tool-name">{t.name}</div>
      <div className="pd-tool-desc">{t.desc}</div>
    </div>
  ))}
</div>
        </div>
      </div>

      {/* SPECS TABLE */}
      <div className="pd-section">
        <div className="pd-eyebrow">Technical Specs</div>
        <div className="pd-stitle">Design <em>Capabilities</em></div>
        <div className="pd-tbl-wrap">
          <table className="pd-tbl">
            <thead>
              <tr><th>Parameter</th><th>Standard</th><th>Advanced</th></tr>
            </thead>
            <tbody>
              {specRows.map((r, i) => (
                <tr key={i}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pd-cta-split">
          <div className="pd-cta-card">
            <h3>Send Your Schematic</h3>
            <p>Have a schematic ready? We'll review it and provide a layout quote within 48 hours with DFM feedback included.</p>
            <button className="pd-btn-ghost" style={{ color:"#111", borderColor:"#ccc" }}>Upload Schematic &rsaquo;</button>
          </div>
          <div className="pd-cta-card highlight">
            <h3>Start From Scratch</h3>
            <p>Need a full design from concept to Gerber? Our engineers handle schematic capture, simulation, and layout end-to-end.</p>
            <button className="pd-btn-fill">Discuss Your Project &rsaquo;</button>
          </div>
        </div>
      </div>
       <Footer />
    </div>
  );
}