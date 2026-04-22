import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .pcb-page { font-family: 'DM Sans', sans-serif; background: #ffffff; color: #1a1a1a; overflow-x: hidden; }
  
  .pcb-page {
    padding-top: 0px; /* Header spacing handled inside Hero for better control */
  }

  /* HERO SECTION - FIXED TO VH AND NO BOTTOM GAP */
  .pcb-hero {
    position: relative; 
    width: 100%;
    margin: 0;               /* Removed margin to stick to marquee */
    border-radius: 0;
    background: #1a1a1a; 
    height: 80vh;            /* Set height to vh as requested */
    min-height: 600px;       /* Ensuring it doesn't get too small on laptops */
    display: flex; 
    align-items: center; 
    overflow: hidden;
  }

  .pcb-hero-traces { position: absolute; inset: 0; overflow: hidden; opacity: 0.1; }
  .pcb-trace {
    position: absolute; background: #f4531c;
    animation: traceGlow 3s ease-in-out infinite alternate;
  }
  @keyframes traceGlow { from { opacity: 0.4; } to { opacity: 1; } }
  .pcb-via {
    position: absolute; width: 10px; height: 10px; border-radius: 50%;
    border: 1.5px solid #f4531c;
    animation: viaPulse 2s ease-in-out infinite;
  }
  @keyframes viaPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(244,83,28,0.5); }
    50% { box-shadow: 0 0 0 6px rgba(244,83,28,0); }
  }

  .pcb-hero-inner {
    position: relative; z-index: 2; width: 100%; 
    padding: 80px 5% 0; /* 80px top padding for fixed header */
    display: grid; 
    grid-template-columns: 1.3fr 1fr; 
    gap: 3rem; 
    align-items: center;
  }

  .pcb-hero-pill {
    display: inline-flex; align-items: center; gap: 8px;
    border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04);
    padding: 7px 16px; border-radius: 100px;
    font-size: 0.68rem; font-weight: 700; letter-spacing: 2px; color: #aaa; text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
  .pcb-pill-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; animation: pcbBlink 1.5s ease-in-out infinite; }
  @keyframes pcbBlink { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

  .pcb-hero h1 {
    font-size: clamp(2.8rem, 5.5vw, 5rem); font-weight: 900;
    line-height: 0.93; letter-spacing: -2px; color: #fff; margin-bottom: 1.2rem;
  }
  .pcb-hero h1 em { font-style: normal; color: #f4531c; }
  .pcb-hero-p { font-size: 1.05rem; color: #aaa; line-height: 1.7; max-width: 480px; margin-bottom: 2rem; }
  
  .pcb-btns { display: flex; gap: 0.8rem; flex-wrap: wrap; }
  .btn-org { background: #f4531c; color: #fff; border: none; padding: 13px 26px; font-size: 0.75rem; font-weight: 700; border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s; }
  .btn-org:hover { background: #d43e10; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(244,83,28,0.4); }
  .btn-ghost-w { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.25); padding: 13px 26px; font-size: 0.75rem; font-weight: 700; border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s; }
  .btn-ghost-w:hover { border-color: #fff; transform: translateY(-2px); }

  .pcb-hero-meta { display: flex; flex-direction: column; gap: 1.8rem; align-items: flex-end; }
  .pcb-meta-stat { text-align: right; }
  .pcb-meta-n { font-size: 2.8rem; font-weight: 900; color: #fff; line-height: 1; }
  .pcb-meta-n em { font-style: normal; color: #f4531c; }
  .pcb-meta-l { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; color: #666; margin-top: 4px; }

  /* TICKER - ATTACHED TO HERO */
  .pcb-ticker { background: #111; padding: 15px 0; overflow: hidden; position: relative; z-index: 10; }
  .pcb-ticker-inner { display: flex; gap: 3rem; animation: tickerScroll 28s linear infinite; white-space: nowrap; }
  @keyframes tickerScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .pcb-ticker-item { display: flex; align-items: center; gap: 0.6rem; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #f4531c; flex-shrink: 0; }
  .pcb-ticker-item::before { content: '●'; opacity: 0.5; font-size: 0.45rem; }

  /* TAG CLOUD */
  .pcb-tags-wrap { width: 95%; margin: 2rem auto; }
  .pcb-tags-inner {
    background: #1a1a1a; border-radius: 1.25rem; padding: 3.5rem 4rem;
    display: grid; grid-template-columns: 1fr 1.1fr; gap: 4rem; align-items: center;
  }
  .pcb-tags-inner h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 700; color: #fff; margin-bottom: 0.5rem; line-height: 1.1; }
  .pcb-tags-inner h2 span { color: #555; font-weight: 300; }
  .pcb-tags-inner p { font-size: 0.88rem; color: #888; line-height: 1.7; margin-bottom: 2rem; max-width: 420px; }
  .pcb-tag-cloud { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2rem; }
  .pcb-m-tag { display: flex; align-items: center; gap: 6px; background: #0b0b0b; border: 1px solid #605a5a; padding: 0.3rem 0.7rem; height: 2.1rem; border-radius: 6px; font-size: 0.73rem; font-weight: 600; cursor: pointer; color: #cdcccc; transition: all 0.2s; }
  .pcb-m-tag:hover { background: #333; border-color: #f4531c; color: #fff; }
  .pcb-visual { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; overflow: hidden; }
  .pcb-visual-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; background: #222; }
  .pcb-visual-footer { padding: 1.2rem 1.5rem; display: flex; justify-content: space-between; align-items: center; background: #f4531c; }
  .pcb-visual-footer span { font-size: 0.78rem; font-weight: 700; color: #fff; }
  .pcb-visual-footer a { color: #fff; font-size: 0.75rem; font-weight: 700; text-decoration: none; }

  /* PAGE BODY */
  .pcb-body { width: 90%; margin: 0 auto; }
  .pcb-section { padding: 2rem 0; }
  .pcb-divider { height: 1px; background: #e8e8e8;  }
  .pcb-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f4531c; margin-bottom: 0.6rem; }
  .pcb-sec-title { font-size: clamp(1.8rem, 3.2vw, 2.8rem); font-weight: 700; line-height: 1.1; color: #1a1a1a; margin-bottom: 0.8rem; }
  .pcb-sec-title span { color: #bbb; font-weight: 300; }

  /* SPEC LAYOUT */
  .pcb-spec-layout { display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: start; margin-top: 3rem; }
  .pcb-spec-table { border: 1px solid #e8e8e8; border-radius: 12px; overflow: hidden; }
  .pcb-spec-row { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid #e8e8e8; }
  .pcb-spec-row:last-child { border-bottom: none; }
  .pcb-spec-cell { padding: 1.1rem 1.3rem; font-size: 0.82rem; border-right: 1px solid #e8e8e8; }
  .pcb-spec-cell:last-child { border-right: none; }
  .pcb-spec-cell.hdr { background: #fff5f2; font-size: 0.65rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #f4531c; grid-column: span 2; }
  .pcb-spec-key { color: #999; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px; }
  .pcb-spec-val { color: #1a1a1a; font-weight: 600; font-size: 0.85rem; }
  .pcb-layer-card { background: #f7f7f7; border: 1px solid #e8e8e8; border-radius: 12px; padding: 1.8rem; }
  .pcb-layer-title { font-size: 0.78rem; font-weight: 700; margin-bottom: 1.2rem; color: #888; }
  .pcb-layer-stack { display: flex; flex-direction: column; gap: 3px; }
  .pcb-layer-item { display: flex; align-items: center; gap: 0.8rem; padding: 8px 12px; border-radius: 6px; font-size: 0.76rem; font-weight: 600; transition: all 0.2s; cursor: default; }
  .pcb-layer-item:hover { transform: translateX(4px); }
  .pcb-layer-bar { width: 4px; height: 20px; border-radius: 2px; flex-shrink: 0; }
  .pcb-layer-name { flex: 1; }
  .pcb-layer-thick { font-size: 0.68rem; color: #aaa; }
  .l-cu { background: rgba(185,115,0,0.07); } .l-cu .pcb-layer-bar { background: #b97300; }
  .l-pre { background: rgba(150,150,150,0.07); } .l-pre .pcb-layer-bar { background: #999; }
  .l-core { background: rgba(100,149,237,0.08); } .l-core .pcb-layer-bar { background: #6495ed; }
  .l-mask { background: rgba(34,197,94,0.07); } .l-mask .pcb-layer-bar { background: #22c55e; }
  .l-silk { background: rgba(0,0,0,0.03); } .l-silk .pcb-layer-bar { background: #aaa; }

  /* FINISH CHIPS */
  .pcb-finish-row { display: flex; gap: 0.7rem; flex-wrap: wrap; margin-top: 1.5rem; }
  .pcb-finish-chip { display: flex; align-items: center; gap: 7px; background: #fff; border: 1px solid #e8e8e8; padding: 9px 14px; border-radius: 7px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
  .pcb-finish-chip:hover { border-color: #f4531c; color: #f4531c; }
  .pcb-f-dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }

  /* CAPABILITY CARDS */
  .pcb-cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 3rem; }
  .pcb-cap-card { background: #1a1a1a; border-radius: 12px; padding: 2rem; border: 1px solid #222; transition: all 0.3s; position: relative; overflow: hidden; }
  .pcb-cap-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(0,0,0,0.12); }
  .pcb-cap-num { font-size: 3rem; font-weight: 900; color: rgba(244,83,28,0.1); position: absolute; top: 1rem; right: 1.2rem; line-height: 1; }
  .pcb-cap-ico { font-size: 1.7rem; margin-bottom: 1rem; }
  .pcb-cap-t { font-size: 0.93rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem; }
  .pcb-cap-d { font-size: 0.78rem; color: #666; line-height: 1.6; }
  .pcb-cap-badge { margin-top: 1rem; display: inline-block; background: rgba(244,83,28,0.1); border: 1px solid rgba(244,83,28,0.2); color: #f4531c; font-size: 0.62rem; font-weight: 700; padding: 4px 10px; border-radius: 3px; letter-spacing: 1px; text-transform: uppercase; }

  /* LOCAL VS GLOBAL */
  .pcb-lvg { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; margin-top: 3rem; border-radius: 14px; overflow: hidden; border: 1px solid #e8e8e8; }
  .pcb-lvg-panel { background: #fff; padding: 3rem; }
  .pcb-lvg-panel.local { border-right: 1px solid #e8e8e8; background: #fafafa; }
  .pcb-lvg-head { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 2rem; }
  .pcb-lvg-badge { padding: 5px 12px; border-radius: 4px; font-size: 0.62rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
  .pcb-loc { background: rgba(34,197,94,0.12); color: #16a34a; }
  .pcb-glo { background: rgba(244,83,28,0.1); color: #f4531c; }
  .pcb-lvg-title { font-size: 1.2rem; font-weight: 700; color: #1a1a1a; }
  .pcb-lvg-list { list-style: none; display: flex; flex-direction: column; gap: 0.9rem; }
  .pcb-lvg-list li { display: flex; gap: 0.8rem; font-size: 0.83rem; color: #555; line-height: 1.5; }
  .pcb-lvg-list li::before { content: '→'; color: #f4531c; flex-shrink: 0; font-weight: 700; }
  .pcb-lvg-foot { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #e8e8e8; font-size: 0.75rem; color: #aaa; }
  .pcb-lvg-foot strong { color: #1a1a1a; }

  /* CTA WITH FORM */
  .pcb-cta-split { display: grid; grid-template-columns: 1fr 1fr; border-radius: 1.25rem; overflow: hidden; border: 1px solid #e8e8e8; margin: 1.0rem 0 3rem; }
  .pcb-cta-left { padding: 4rem; background: #f4531c; position: relative; overflow: hidden; }
  .pcb-cta-left::after { content: 'PCB'; position: absolute; right: -1rem; bottom: -1.5rem; font-size: 7rem; font-weight: 900; color: rgba(255,255,255,0.07); line-height: 1; letter-spacing: -4px; }
  .pcb-cta-left h2 { font-size: clamp(1.4rem, 2.8vw, 2rem); font-weight: 900; color: #fff; margin-bottom: 0.8rem; position: relative; z-index: 1; }
  .pcb-cta-left p { font-size: 0.85rem; color: rgba(255,255,255,0.78); line-height: 1.6; margin-bottom: 2rem; position: relative; z-index: 1; }
  .pcb-cta-dark-btn { background: #000; color: #fff; border: none; padding: 13px 26px; font-size: 0.72rem; font-weight: 700; border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s; position: relative; z-index: 1; }
  .pcb-cta-dark-btn:hover { background: #111; transform: translateY(-2px); }
  .pcb-cta-right { padding: 4rem; background: #fafafa; display: flex; flex-direction: column; justify-content: center; }
  .pcb-form-title { font-size: 0.95rem; font-weight: 700; margin-bottom: 1.5rem; color: #888; }
  .pcb-field { margin-bottom: 1rem; }
  .pcb-field label { display: block; font-size: 0.65rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #aaa; margin-bottom: 5px; }
  .pcb-field select, .pcb-field input { width: 100%; background: #fff; border: 1px solid #e8e8e8; color: #1a1a1a; padding: 10px 14px; border-radius: 6px; font-size: 0.82rem; outline: none; transition: border 0.2s; font-family: 'DM Sans', sans-serif; }
  .pcb-field select:focus, .pcb-field input:focus { border-color: #f4531c; }
  .pcb-submit { width: 100%; background: #f4531c; color: #fff; border: none; padding: 13px; font-size: 0.75rem; font-weight: 700; border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.5rem; transition: all 0.3s; }
  .pcb-submit:hover { background: #d43e10; }

 /* --- UPDATED MOBILE RESPONSIVE --- */

  @media(max-width:900px){
    .pcb-hero { height: auto; min-height: 100vh; align-items: flex-start; padding-bottom: 50px; }
    .pcb-hero-inner { grid-template-columns: 1fr; gap: 4rem; padding-top: 100px; }
    
    .pcb-hero-meta { align-items: flex-start; }
    .pcb-meta-stat { text-align: left; }
    .pcb-meta-n { font-size: 2.2rem; }

    /* TAGS SECTION UPDATES */
    .pcb-tags-wrap { width: 100%; margin: 1rem 0; }
    .pcb-tags-inner { 
        grid-template-columns: 1fr; 
        padding: 3rem 1.5rem; 
        border-radius: 0; 
        text-align: left; /* Force left alignment */
    }
    
    .pcb-tag-cloud { 
        display: grid; 
        grid-template-columns: repeat(2, 1fr); /* 2-column grid as requested */
        gap: 8px; 
    }
    
    .pcb-m-tag { 
        width: 100%; 
        justify-content: flex-start; 
        font-size: 0.7rem; 
        padding: 0.5rem;
    }

    .pcb-visual-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }

    .pcb-spec-layout { grid-template-columns: 1fr; }
    .pcb-cap-grid { grid-template-columns: 1fr 1fr; }
    .pcb-lvg { grid-template-columns: 1fr; }
    .pcb-cta-split { grid-template-columns: 1fr; }
    .pcb-cta-left { padding: 3rem 2rem; }
    .pcb-cta-right { padding: 3rem 2rem; }
  }

  @media(max-width:600px){
    .pcb-hero h1 { font-size: 3rem; }
    .pcb-cap-grid { grid-template-columns: 1fr; }
    .pcb-section { padding: 1.5rem 0; }
    .pcb-btns { flex-direction: column; width: 100%; }
    .btn-org, .btn-ghost-w { width: 100%; text-align: center; }
    
    /* Ensure 2 columns stay even on very small screens */
    .pcb-tag-cloud { grid-template-columns: 1fr 1fr; } 
  }
`;

const tickerItems = [
  "Gerber RS-274X", "3-5 Day Express", "0.2mm Min Drill", 
  "ENIG / HASL / OSP", "Impedance Control", "FR-4 / Rogers / Polyimide", 
  "IPC-A-600 Class 3", "Flying Probe Testing"
];
const capCards = [
  { n:"01", ico:"🚀", t:"Prototype & Express", d:"Rapid iteration with 3–5 day lead times. Small batches (1-10 units) up to mid-volume production runs.", b:"3-Day Lead Time" },
  { n:"02", ico:"📐", t:"Controlled Impedance", d:"Precision stack-ups for high-speed digital and RF designs with impedance test reports on request.", b:"±5% Tolerance" },
  { n:"03", ico:"💎", t:"Surface Finishes", d:"Wide range of finishes: HASL Lead-Free, ENIG (Gold), OSP, Immersion Silver, and Hard Gold for connectors.", b:"ENIG / HASL / OSP" },
  { n:"04", ico:"⚡", t:"Advanced Drilling", d:"Support for blind & buried vias, microvias, and castellated holes for modular designs.", b:"Microvia · 0.2mm" },
  { n:"05", ico:"🛡️", t:"IPC Quality Assurance", d:"Adherence to IPC-A-600 Class 2 and Class 3. Includes AOI, Flying Probe, and X-Ray BGA inspection.", b:"Class 2 & 3" },
  { n:"06", ico:"📦", t:"Flexible Materials", d:"Polyimide-based Flex and Rigid-Flex fabrication for wearables and aerospace-grade constraints.", b:"PI / Rogers / FR4" },
];

const layers = [
  { cls:"l-silk", name:"Silkscreen", thick:"0.01mm" },
  { cls:"l-mask", name:"Solder Mask", thick:"0.02mm" },
  { cls:"l-cu", name:"Top Copper (L1)", thick:"35µm" },
  { cls:"l-pre", name:"Prepreg", thick:"0.1mm" },
  { cls:"l-cu", name:"Inner Layer (L2 – GND)", thick:"17µm" },
  { cls:"l-core", name:"FR4 Core", thick:"0.8mm" },
  { cls:"l-cu", name:"Inner Layer (L3 – PWR)", thick:"17µm" },
  { cls:"l-pre", name:"Prepreg", thick:"0.1mm" },
  { cls:"l-cu", name:"Bottom Copper (L4)", thick:"35µm" },
  { cls:"l-mask", name:"Solder Mask (Bottom)", thick:"0.02mm" },
  { cls:"l-silk", name:"Silkscreen (Bottom)", thick:"0.01mm" },
];

const finishes = [
  { color:"#d4af37", name:"ENIG" }, { color:"#ccc", name:"HASL Lead-Free" },
  { color:"#e8e8e8", name:"OSP" }, { color:"#c0c0c0", name:"Immersion Silver" },
  { color:"#f4e4ba", name:"Immersion Tin" }, { color:"#ffd700", name:"Hard Gold" },
];

const serviceTags = [
  "🚀 3-Day Express", "📦 1–1000+ Units", "📐 Controlled Impedance", 
  "🌊 Flex / Rigid-Flex", "🔥 High TG180", "🔬 0.2mm Min Via", 
  "✅ IPC Class 2/3", "🧪 Flying Probe Test", "🏭 Local India Fabs", 
  "🌐 Global Tier-1 Fabs", "🛡️ ISO 9001", "🚚 DDP Shipping"
];
export default function PCBFabrication() {
  const [qty, setQty] = useState("");
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="pcb-page">
      <style>{styles}</style>
      <Header/>

      {/* HERO */}
      <div className="pcb-hero">
        <div className="pcb-hero-traces">
          {[{w:"1px",h:"40%",t:"10%",l:"20%"},{w:"30%",h:"1px",t:"10%",l:"20%"},{w:"1px",h:"20%",t:"10%",l:"50%"},{w:"1px",h:"30%",t:"30%",l:"70%"},{w:"20%",h:"1px",t:"30%",l:"50%"},{w:"1px",h:"40%",t:"40%",l:"35%"},{w:"30%",h:"1px",t:"60%",l:"35%"}].map((s,i)=>(
            <div key={i} className="pcb-trace" style={{width:s.w,height:s.h,top:s.t,left:s.l,animationDelay:`${i*0.2}s`}} />
          ))}
          {[{t:"10%",l:"20%"},{t:"10%",l:"50%"},{t:"30%",l:"50%"},{t:"30%",l:"70%"},{t:"60%",l:"35%"},{t:"60%",l:"65%"}].map((s,i)=>(
            <div key={i} className="pcb-via" style={{top:s.t,left:s.l,animationDelay:`${i*0.3}s`}} />
          ))}
        </div>
        <div className="pcb-hero-inner">
          <div>
            <div className="pcb-hero-pill"><span className="pcb-pill-dot" /> Fabrication Live — 3–5 Day Turnaround Available</div>
            <h1>PCB <em>Fabri</em>cation</h1>
            <p className="pcb-hero-p">From Prototype to Production – Reliable Boards Built to Your Exact Specifications. Local speed with Global Tier-1 quality standards.</p>
            <div className="pcb-btns">
              <button className="btn-org">Upload Gerber Files ›</button>
              <button className="btn-ghost-w">View Capabilities</button>
            </div>
          </div>
          <div className="pcb-hero-meta">
            <div className="pcb-meta-stat"><div className="pcb-meta-n">1–<em>32</em></div><div className="pcb-meta-l">Layers</div></div>
            <div className="pcb-meta-stat"><div className="pcb-meta-n"><em>3–5</em> Day</div><div className="pcb-meta-l">Lead Time</div></div>
            <div className="pcb-meta-stat"><div className="pcb-meta-n"><em>98</em>%</div><div className="pcb-meta-l">First-Pass Yield</div></div>
          </div>
        </div>
      </div>

      {/* TICKER - Directly attached to hero */}
      <div className="pcb-ticker">
        <div className="pcb-ticker-inner">
          {doubled.map((item,i) => <span key={i} className="pcb-ticker-item">{item}</span>)}
        </div>
      </div>

      {/* TAG CLOUD */}
      <div className="pcb-tags-wrap">
        <div className="pcb-tags-inner">
          <div>
            <h2>Precision fabrication, <span>every layer.</span></h2>
            <p>From prototype to production — local 3-day builds and global Tier-1 fabs for complex, high-volume requirements.</p>
            <div className="pcb-tag-cloud">
              {serviceTags.map((t,i) => <div key={i} className="pcb-m-tag">{t}</div>)}
            </div>
            <button className="btn-org">Explore All Capabilities ›</button>
          </div>
          <div>
            <div className="pcb-visual">
              <img src="/assets/home/pcb fabrications.webp" className="pcb-visual-img" alt="PCB Fabrication" />
              <div className="pcb-visual-footer">
                <span>FR4 · Rogers · Aluminium · Flex · Rigid-Flex</span>
                <a href="#">Learn More ›</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pcb-body">

        {/* SPECIFICATIONS */}
        <div className="pcb-section">
          <div className="pcb-divider" style={{marginBottom:"3rem"}} />
          <div className="pcb-label">Technical Specifications</div>
          <h2 className="pcb-sec-title">Built to <span>your exact tolerances</span></h2>
          <div className="pcb-spec-layout">
            <div>
              <div className="pcb-spec-table">
                <div className="pcb-spec-row"><div className="pcb-spec-cell hdr">Board Specifications</div></div>
                {[
                  ["Layer Count","1 – 32 layers","Board Thickness","0.4 – 2.0 mm (Custom up to 6.0mm)"],
                  ["Min Trace / Space","3 mil / 3 mil","Min Drill Size","0.2 mm (Standard) / 0.1 mm (Laser)"],
                  ["Max Board Size","500 × 600 mm","Copper Weight","0.5 – 6 oz"],
                ].map((row,i)=>(
                  <div key={i} className="pcb-spec-row">
                    <div className="pcb-spec-cell"><div className="pcb-spec-key">{row[0]}</div><div className="pcb-spec-val">{row[1]}</div></div>
                    <div className="pcb-spec-cell"><div className="pcb-spec-key">{row[2]}</div><div className="pcb-spec-val">{row[3]}</div></div>
                  </div>
                ))}
                <div className="pcb-spec-row"><div className="pcb-spec-cell hdr">Materials</div></div>
                {[
                  ["Standard","FR4 TG130–TG180","RF / HF","Rogers 4003C/4350B"],
                  ["Thermal","Aluminium Core","Flexible","Polyimide (PI)"],
                ].map((row,i)=>(
                  <div key={i} className="pcb-spec-row">
                    <div className="pcb-spec-cell"><div className="pcb-spec-key">{row[0]}</div><div className="pcb-spec-val">{row[1]}</div></div>
                    <div className="pcb-spec-cell"><div className="pcb-spec-key">{row[2]}</div><div className="pcb-spec-val">{row[3]}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="pcb-layer-card">
                <div className="pcb-layer-title">Cross-Section — 4-Layer Stack</div>
                <div className="pcb-layer-stack">
                  {layers.map((l,i)=>(
                    <div key={i} className={`pcb-layer-item ${l.cls}`}>
                      <div className="pcb-layer-bar" />
                      <div className="pcb-layer-name">{l.name}</div>
                      <div className="pcb-layer-thick">{l.thick}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{marginTop:"1.5rem"}}>
                <div className="pcb-label" style={{marginBottom:"0.5rem"}}>Surface Finish Options</div>
                <div className="pcb-finish-row">
                  {finishes.map((f,i)=>(
                    <div key={i} className="pcb-finish-chip">
                      <div className="pcb-f-dot" style={{background:f.color}} />
                      {f.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pcb-divider" />

        {/* CAPABILITIES */}
        <div className="pcb-section">
          <div className="pcb-label">Capabilities</div>
          <h2 className="pcb-sec-title">Advanced manufacturing <span>for complex designs</span></h2>
          <div className="pcb-cap-grid">
            {capCards.map((c,i)=>(
              <div key={i} className="pcb-cap-card">
                <div className="pcb-cap-num">{c.n}</div>
                <div className="pcb-cap-ico">{c.ico}</div>
                <div className="pcb-cap-t">{c.t}</div>
                <div className="pcb-cap-d">{c.d}</div>
                <span className="pcb-cap-badge">{c.b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pcb-divider" />

        {/* LOCAL VS GLOBAL */}
        <div className="pcb-section">
          <div className="pcb-label">Sourcing Options</div>
          <h2 className="pcb-sec-title">Local speed. <span>Global scale.</span></h2>
          <div className="pcb-lvg">
            <div className="pcb-lvg-panel local">
              <div className="pcb-lvg-head">
                <span className="pcb-lvg-badge pcb-loc">● Local</span>
                <div className="pcb-lvg-title">India Manufacturing</div>
              </div>
              <ul className="pcb-lvg-list">
                {["3–7 day standard turnaround — ideal for rapid iteration and NPI","Direct factory liaison — real-time DFM feedback and engineering support","No minimum order quantity for prototype runs (1 piece onwards)","Same-day engineering review and Gerber verification","Reduced customs and import duties — faster to your bench","Seamless integration with our in-house EMS assembly line"].map((t,i)=>(
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <div className="pcb-lvg-foot">Ideal for: <strong>Prototypes · NPI · R&amp;D · Urgent Builds</strong></div>
            </div>
            <div className="pcb-lvg-panel">
              <div className="pcb-lvg-head">
                <span className="pcb-lvg-badge pcb-glo">◈ Global</span>
                <div className="pcb-lvg-title">International Sourcing</div>
              </div>
              <ul className="pcb-lvg-list">
                {["Access to Tier-1 certified fabs in China, Taiwan, Germany, and USA","Competitive pricing for medium-to-high volume production runs","Advanced capabilities — 32+ layer, any-layer HDI, µBGA","UL, IPC, ISO 9001, IATF 16949, and AS9100 certified partners","Full procurement, QA, and logistics management by our team","Consolidated shipment and DDP delivery to your facility"].map((t,i)=>(
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <div className="pcb-lvg-foot">Ideal for: <strong>Production · High-Volume · Complex RF · Export Projects</strong></div>
            </div>
          </div>
        </div>

        {/* CTA + FORM */}
        <div className="pcb-cta-split">
          <div className="pcb-cta-left">
            <h2>Get an instant PCB fabrication quote</h2>
            <p>Upload your Gerbers and get a detailed quotation within hours — no back-and-forth, no hidden costs.</p>
            <button className="pcb-cta-dark-btn">Download Capabilities PDF ›</button>
          </div>
          <div className="pcb-cta-right">
            <div className="pcb-form-title">Quick Quote</div>
            <div className="pcb-field"><label>Layers</label><select><option>1 Layer</option><option>2 Layers</option><option>4 Layers</option><option>6+ Layers</option></select></div>
            <div className="pcb-field"><label>Quantity</label><input type="text" placeholder="e.g. 10 pcs" value={qty} onChange={e=>setQty(e.target.value)} /></div>
            <div className="pcb-field"><label>Material</label><select><option>FR4 TG135</option><option>FR4 TG170</option><option>Rogers</option><option>Polyimide (Flex)</option></select></div>
            <div className="pcb-field"><label>Surface Finish</label><select><option>ENIG</option><option>HASL Lead-Free</option><option>OSP</option><option>Immersion Silver</option></select></div>
            <button className="pcb-submit">Get Quote ›</button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}