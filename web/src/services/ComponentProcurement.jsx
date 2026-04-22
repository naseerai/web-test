import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .cp-page { font-family: 'DM Sans', sans-serif; background: #ffffff; color: #1a1a1a; overflow-x: hidden; }
  .cp-page, .pcb-page, .ed-page, .fw-page, .pd-page, .sr-page {
  padding-top: 41px; /* Adjust this based on your Header's height */
}

  /* HERO */
  .cp-hero {
    width: 95%; margin: 1.5rem auto 0; border-radius: 1.25rem; overflow: hidden;
    min-height: 36rem; display: grid; grid-template-columns: 1fr 1fr; position: relative;
  }
  .cp-hero-left {
    background: #f4531c; padding: 5% 6% 5% 7%;
    display: flex; flex-direction: column; justify-content: flex-end;
    position: relative; overflow: hidden;
  }
  .cp-hero-left::before { content: ''; position: absolute; width: 500px; height: 500px; border-radius: 50%; background: rgba(255,255,255,0.07); top: -200px; left: -150px; }
  .cp-hero-left::after { content: ''; position: absolute; width: 350px; height: 350px; border-radius: 50%; background: rgba(0,0,0,0.1); bottom: -100px; right: -100px; }
  .cp-eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.65); margin-bottom: 1.2rem; position: relative; z-index: 2; }
  .cp-hero-left h1 { font-size: clamp(2.8rem, 5vw, 5rem); font-weight: 900; line-height: 0.9; letter-spacing: -2px; color: #fff; margin-bottom: 1.5rem; position: relative; z-index: 2; }
  .cp-hero-left h1 em { font-style: normal; opacity: 0.3; font-weight: 300; }
  .cp-hero-left p { font-size: 1rem; color: rgba(255,255,255,0.78); line-height: 1.7; max-width: 420px; margin-bottom: 2.5rem; position: relative; z-index: 2; }
  .cp-hero-btns { display: flex; gap: 0.8rem; flex-wrap: wrap; position: relative; z-index: 2; }
  .cp-btn-dark { background: #000; color: #fff; border: none; padding: 13px 26px; font-size: 0.75rem; font-weight: 700; border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s; }
  .cp-btn-dark:hover { background: #111; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
  .cp-btn-ghost { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.4); padding: 13px 26px; font-size: 0.75rem; font-weight: 700; border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s; }
  .cp-btn-ghost:hover { border-color: #fff; transform: translateY(-2px); }

  .cp-hero-right {
    background: #1a1a1a; padding: 5% 5%;
    display: flex; flex-direction: column; justify-content: center; gap: 1rem;
  }
  .cp-supply-card { background: #111; border: 1px solid #2a2a2a; border-radius: 10px; padding: 1.3rem 1.5rem; display: flex; align-items: center; gap: 1rem; transition: all 0.3s; }
  .cp-supply-card:hover { border-color: rgba(244,83,28,0.3); transform: translateX(4px); }
  .cp-sc-icon { width: 44px; height: 44px; flex-shrink: 0; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
  .cp-sc-body { flex: 1; }
  .cp-sc-title { font-size: 0.88rem; font-weight: 700; color: #fff; margin-bottom: 3px; }
  .cp-sc-sub { font-size: 0.72rem; color: #555; line-height: 1.4; }
  .cp-sc-badge { font-size: 0.6rem; font-weight: 700; letter-spacing: 1px; padding: 4px 9px; border-radius: 3px; text-transform: uppercase; flex-shrink: 0; }
  .badge-g { background: rgba(34,197,94,0.12); color: #22c55e; }
  .badge-b { background: rgba(59,130,246,0.12); color: #3b82f6; }
  .badge-y { background: rgba(234,179,8,0.12); color: #eab308; }
  .badge-o { background: rgba(244,83,28,0.12); color: #f4531c; }

  /* TAG CLOUD */
  .cp-tags-wrap { width: 95%; margin: 1rem auto; }
  .cp-tags-inner {
    background: #1a1a1a; border-radius: 1.25rem; padding: 3.5rem 4rem;
    display: grid; grid-template-columns: 1fr 1.1fr; gap: 4rem; align-items: center;
  }
  .cp-tags-inner h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 700; color: #fff; margin-bottom: 0.5rem; line-height: 1.1; }
  .cp-tags-inner h2 span { color: #555; font-weight: 300; }
  .cp-tags-inner p { font-size: 0.88rem; color: #888; line-height: 1.7; margin-bottom: 2rem; max-width: 420px; }
  .cp-tag-cloud { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2rem; }
  .cp-m-tag { display: flex; align-items: center; gap: 6px; background: #0b0b0b; border: 1px solid #605a5a; padding: 0.3rem 0.7rem; height: 2.1rem; border-radius: 6px; font-size: 0.73rem; font-weight: 600; cursor: pointer; color: #cdcccc; transition: all 0.2s; }
  .cp-m-tag:hover { background: #333; border-color: #f4531c; color: #fff; }
  .cp-visual { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; overflow: hidden; }
  .cp-visual-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; background: #222; }
  .cp-visual-footer { padding: 1.2rem 1.5rem; display: flex; justify-content: space-between; align-items: center; background: #f4531c; }
  .cp-visual-footer span { font-size: 0.78rem; font-weight: 700; color: #fff; }
  .cp-visual-footer a { color: #fff; font-size: 0.75rem; font-weight: 700; text-decoration: none; }
  .cp-btn-org { background: #f4531c; color: #fff; border: none; padding: 13px 26px; font-size: 0.75rem; font-weight: 700; border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s; }
  .cp-btn-org:hover { background: #d43e10; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(244,83,28,0.4); }

  /* PAGE BODY */
  .cp-body { width: 90%; margin: 0 auto; }
  .cp-section { padding: 2rem 0; }
  .cp-divider { height: 1px; background: #e8e8e8; }
  .cp-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f4531c; margin-bottom: 0.6rem; }
  .cp-sec-title { font-size: clamp(1.8rem, 3.2vw, 2.8rem); font-weight: 700; line-height: 1.1; color: #1a1a1a; margin-bottom: 0.8rem; }
  .cp-sec-title span { color: #bbb; font-weight: 300; }
  .cp-sec-p { font-size: 0.9rem; color: #888; line-height: 1.7; max-width: 500px; margin-bottom: 3rem; }

  /* PROCESS FLOW */
  .cp-flow { display: flex; gap: 0; margin-top: 3rem; position: relative; }
  .cp-flow::before { content: ''; position: absolute; top: 2.2rem; left: calc(100%/12); right: calc(100%/12); height: 1px; background: linear-gradient(90deg, transparent, #f4531c, #f4531c, transparent); }
  .cp-flow-step { flex: 1; text-align: center; padding: 0 0.5rem; }
  .cp-flow-circle { width: 4.5rem; height: 4.5rem; border-radius: 50%; background: #fff; border: 2px solid #e8e8e8; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin: 0 auto 1rem; position: relative; z-index: 1; transition: all 0.3s; }
  .cp-flow-step:hover .cp-flow-circle { background: #f4531c; border-color: #f4531c; }
  .cp-flow-label { font-size: 0.72rem; font-weight: 700; color: #888; line-height: 1.4; }

  /* SOURCE GRID */
  .cp-source-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: #e8e8e8; border-radius: 14px; overflow: hidden; border: 1px solid #e8e8e8; margin-top: 3rem; }
  .cp-source-panel { background: #fff; padding: 2.5rem 2rem; transition: background 0.2s; }
  .cp-source-panel:hover { background: #fafafa; }
  .cp-sp-ico { font-size: 2rem; margin-bottom: 1.2rem; }
  .cp-sp-t { font-size: 1rem; font-weight: 700; color: #1a1a1a; margin-bottom: 0.6rem; }
  .cp-sp-d { font-size: 0.78rem; color: #888; line-height: 1.6; margin-bottom: 1.5rem; }
  .cp-sp-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .cp-sp-tag { font-size: 0.62rem; font-weight: 600; padding: 4px 9px; border-radius: 3px; background: #f7f7f7; border: 1px solid #e8e8e8; color: #888; text-transform: uppercase; letter-spacing: 0.5px; }

  /* BOM TABLE */
  .cp-bom-wrap { background: #fff; border: 1px solid #e8e8e8; border-radius: 12px; overflow: hidden; margin-top: 3rem; overflow-x: auto; }
  .cp-bom-hdr { display: grid; grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 1fr; background: #fff5f2; border-bottom: 1px solid #e8e8e8; padding: 0.9rem 1.5rem; min-width: 700px; }
  .cp-bom-hdr span { font-size: 0.62rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #f4531c; }
  .cp-bom-row { display: grid; grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 1fr; padding: 1rem 1.5rem; border-bottom: 1px solid #f0f0f0; transition: background 0.2s; align-items: center; min-width: 700px; }
  .cp-bom-row:hover { background: #fafafa; }
  .cp-bom-row:last-child { border-bottom: none; }
  .cp-bom-row span { font-size: 0.78rem; color: #888; }
  .cp-bom-row .cp-part { color: #1a1a1a; font-weight: 700; font-size: 0.82rem; }
  .cp-status { display: inline-flex; align-items: center; gap: 5px; font-size: 0.65rem; font-weight: 700; padding: 3px 8px; border-radius: 3px; }
  .st-ok { background: rgba(34,197,94,0.1); color: #16a34a; }
  .st-al { background: rgba(234,179,8,0.1); color: #b45309; }
  .st-lo { background: rgba(244,83,28,0.1); color: #f4531c; }

  /* CATEGORY TILES */
  .cp-cat-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; margin-top: 3rem; }
  .cp-cat-tile { background: #fff; border: 1px solid #e8e8e8; border-radius: 10px; padding: 1.8rem 1.5rem; text-align: center; transition: all 0.3s; cursor: pointer; position: relative; overflow: hidden; }
  .cp-cat-tile::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: #f4531c; transform: scaleX(0); transition: transform 0.3s; }
  .cp-cat-tile:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.06); border-color: #fdddd5; }
  .cp-cat-tile:hover::after { transform: scaleX(1); }
  .cp-ct-ico { font-size: 2rem; margin-bottom: 0.8rem; }
  .cp-ct-name { font-size: 0.85rem; font-weight: 700; color: #1a1a1a; margin-bottom: 0.3rem; }
  .cp-ct-sub { font-size: 0.7rem; color: #aaa; }

  /* BRANDS */
  .cp-brands-top { border-top: 1px solid #e8e8e8; padding-top: 3rem; margin-top: 4rem; }
  .cp-brands-title { font-size: 0.62rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #ccc; margin-bottom: 1.5rem; text-align: center; }
  .cp-brands-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.6rem; }
  .cp-brand { background: #fafafa; border: 1px solid #e8e8e8; padding: 9px 18px; border-radius: 6px; font-size: 0.75rem; font-weight: 700; color: #bbb; transition: all 0.2s; cursor: default; }
  .cp-brand:hover { color: #1a1a1a; border-color: #ccc; }

  /* VALUE PROPS */
  .cp-vp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 3rem; }
  .cp-vp-card { background: #fff; border: 1px solid #e8e8e8; border-radius: 12px; padding: 2.5rem; display: flex; gap: 1.5rem; transition: all 0.3s; }
  .cp-vp-card:hover { border-color: #fdddd5; box-shadow: 0 8px 24px rgba(244,83,28,0.06); transform: translateY(-3px); }
  .cp-vp-num { font-size: 2.5rem; font-weight: 900; color: rgba(244,83,28,0.12); line-height: 1; flex-shrink: 0; width: 3rem; }
  .cp-vp-t { font-size: 1rem; font-weight: 700; color: #1a1a1a; margin-bottom: 0.5rem; }
  .cp-vp-d { font-size: 0.8rem; color: #888; line-height: 1.6; }

  /* CTA */
  .cp-cta {
    background: #1a1a1a; border-radius: 1.25rem;
    padding: 5rem; margin: 1rem 0 3rem;
    display: flex; gap: 5rem; align-items: center;
    position: relative; overflow: hidden;
  }
  .cp-cta::before { content: ''; position: absolute; left: -80px; top: -80px; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(244,83,28,0.18), transparent 70%); }
  .cp-cta::after { content: ''; position: absolute; right: -80px; bottom: -80px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(244,83,28,0.08), transparent 70%); }
  .cp-cta-copy { flex: 1; position: relative; z-index: 1; }
  .cp-cta-copy h2 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 900; color: #fff; margin-bottom: 1rem; line-height: 1.1; }
  .cp-cta-copy h2 em { font-style: normal; color: #f4531c; }
  .cp-cta-copy p { font-size: 0.9rem; color: #666; line-height: 1.7; max-width: 500px; }
  .cp-cta-actions { display: flex; flex-direction: column; gap: 1rem; flex-shrink: 0; position: relative; z-index: 1; }
  .cp-cta-btn-org { background: #f4531c; color: #fff; border: none; padding: 14px 32px; font-size: 0.75rem; font-weight: 700; border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s; white-space: nowrap; }
  .cp-cta-btn-org:hover { background: #d43e10; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(244,83,28,0.35); }
  .cp-cta-btn-b { background: transparent; color: #fff; border: 1.5px solid #333; padding: 14px 32px; font-size: 0.75rem; font-weight: 700; border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s; white-space: nowrap; }
  .cp-cta-btn-b:hover { border-color: #666; transform: translateY(-2px); }

/* --- MOBILE RESPONSIVE UPDATES --- */

  @media(max-width:1024px){
    .cp-hero { grid-template-columns: 1fr; }
    .cp-hero-right { padding: 3rem 5%; }
    
    /* Tags Section - Left Aligned & 2 Column Grid */
    .cp-tags-inner { 
      grid-template-columns: 1fr; 
      gap: 2.5rem; 
      padding: 3rem 1.5rem; 
      text-align: left; /* Keep everything left aligned */
    }
    
    .cp-tag-cloud { 
      display: grid; 
      grid-template-columns: repeat(2, 1fr); /* 2 tags per row */
      gap: 10px; 
    }
    
    .cp-m-tag { 
      width: 100%; 
      justify-content: flex-start; /* Ensure icon + text starts from left */
      font-size: 0.7rem;
      padding: 0 0.6rem;
    }

    .cp-cat-grid { grid-template-columns: repeat(2,1fr); }
    .cp-vp-grid { grid-template-columns: 1fr; }
    .cp-cta { flex-direction: column; gap: 2rem; padding: 3rem 2rem; }
    .cp-source-grid { grid-template-columns: 1fr; }
  }

  @media(max-width:600px){
    .cp-flow { flex-wrap: wrap; justify-content: flex-start; }
    .cp-flow-step { flex: 0 0 33.33%; margin-bottom: 1.5rem; }
    .cp-flow::before { display: none; }
    .cp-cat-grid { grid-template-columns: 1fr 1fr; }
    .cp-section { padding: 2rem 0; }
    
    /* Ensure the tags stay as 2 columns on very small screens */
    .cp-tag-cloud { grid-template-columns: 1fr 1fr; }
    
    .cp-visual-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
`;

const supplyCards = [
  { ico:"🏭", bg:"rgba(34,197,94,0.1)", t:"Authorized Distributors", s:"Arrow, Digi-Key, Mouser, Avnet, Future Electronics — direct line access for genuine parts", badge:"Genuine", cls:"badge-g" },
  { ico:"🔄", bg:"rgba(59,130,246,0.1)", t:"Alternate & Cross-Reference", s:"Pin-compatible substitutes when originals are unavailable or over-budget — validated by our engineers", badge:"Verified", cls:"badge-b" },
  { ico:"🔎", bg:"rgba(234,179,8,0.1)", t:"Obsolete & Long-Lead", s:"End-of-life and long-lead items sourced through vetted broker networks with full counterfeit screening", badge:"Screened", cls:"badge-y" },
  { ico:"⚡", bg:"rgba(244,83,28,0.1)", t:"Spot Buy & Emergency", s:"24–48 hour turnaround for critical shortages — NPI support and production floor emergencies covered", badge:"48hr", cls:"badge-o" },
];

const serviceTags = [
  "🌐 Authorized Sourcing", "🔄 Alternate Parts", "🛡️ Counterfeit Screening", 
  "📋 BOM Management", "⚡ Spot Buy", "🔎 Obsolete Parts", 
  "📦 Kitting Services", "🚚 DDP Delivery", "🧪 Incoming QC", 
  "📊 Price Benchmarking", "🔗 Supply Chain Risk", "🤝 OEM Allocation"
];
const flowSteps = [
  { ico:"📋", label:"BOM Upload" }, { ico:"🔍", label:"Part Review" },
  { ico:"💱", label:"Multi-Source Quote" }, { ico:"✅", label:"Approval & PO" },
  { ico:"🧪", label:"QC Inspection" }, { ico:"📦", label:"Delivery & CoC" },
];

const bomRows = [
  { part:"STM32F407VGT6", mfr:"STMicroelectronics", qty:"500", stock:"2,400", price:"₹420", st:"ok", stTxt:"● In Stock" },
  { part:"BCM2711 SoC", mfr:"Broadcom", qty:"200", stock:"200", price:"₹1,850", st:"al", stTxt:"◐ Limited" },
  { part:"LM358BPWR", mfr:"Texas Instruments", qty:"2,000", stock:"15,000", price:"₹18", st:"ok", stTxt:"● In Stock" },
  { part:"W25Q128JVSIQ", mfr:"Winbond", qty:"800", stock:"800", price:"₹52", st:"al", stTxt:"◐ Allocated" },
  { part:"AT91SAM9263", mfr:"Microchip (EOL)", qty:"100", stock:"0 (Broker)", price:"₹2,200", st:"lo", stTxt:"▲ Sourcing" },
  { part:"ESP32-S3-WROOM-1", mfr:"Espressif", qty:"1,000", stock:"8,000", price:"₹280", st:"ok", stTxt:"● In Stock" },
];

const catTiles = [
  { ico:"🖥️", name:"Microcontrollers & SoCs", sub:"STM32 · ESP32 · NXP · TI · FPGA" },
  { ico:"📻", name:"Wireless Modules", sub:"Wi-Fi · BLE · LoRa · NB-IoT · 4G/5G" },
  { ico:"⚡", name:"Power Management", sub:"PMICs · LDOs · Buck/Boost · Battery ICs" },
  { ico:"💾", name:"Memory & Storage", sub:"NAND · NOR · DRAM · eMMC" },
  { ico:"🔌", name:"Connectors", sub:"Molex · TE · Amphenol · Hirose" },
  { ico:"📡", name:"RF & Antenna", sub:"PA · LNA · Filters · RF Switches" },
  { ico:"👁️", name:"Sensors", sub:"IMU · Pressure · Temperature · Optical" },
  { ico:"🔋", name:"Passives", sub:"Resistors · Capacitors · Inductors · Fuses" },
];

const brands = ["Texas Instruments","STMicroelectronics","NXP","Infineon","Microchip","Nordic Semi","Renesas","Espressif","Qualcomm","Broadcom","Murata","TDK","Vishay","Yageo","TE Connectivity","Molex"];

const vpCards = [
  { n:"01", t:"Single-Point BOM Execution", d:"Upload your BOM once. We handle sourcing, pricing, purchasing, receiving, QC, and delivery — you get a kitted package, not boxes of problems." },
  { n:"02", t:"Risk-Optimized Sourcing", d:"We proactively identify allocation risks, lead-time spikes, and obsolescence before they hit your production line — not after." },
  { n:"03", t:"Counterfeit-Safe Supply Chain", d:"Every non-authorized purchase goes through incoming inspection — electrical testing, marking analysis, and package X-ray as standard." },
  { n:"04", t:"Seamless EMS Integration", d:"Components procured through us flow directly into our EMS assembly pipeline — no re-kitting, no delays, no finger-pointing between vendors." },
];

export default function ComponentProcurement() {
  return (
    <div className="cp-page">
      <style>{styles}</style>
      <Header/>

      {/* HERO */}
      <div className="cp-hero">
        <div className="cp-hero-left">
          <div className="cp-eyebrow">Component Procurement Services</div>
          <h1>Source.<br /><em>Smart.</em><br />Fast.</h1>
          <p>End-to-end electronic component procurement — from BOM review and sourcing strategy to quality inspection and on-time delivery across India and global markets.</p>
          <div className="cp-hero-btns">
            <button className="cp-btn-dark">Upload BOM ›</button>
            <button className="cp-btn-ghost">Talk to Our Team</button>
          </div>
        </div>
        <div className="cp-hero-right">
          {supplyCards.map((c,i) => (
            <div key={i} className="cp-supply-card">
              <div className="cp-sc-icon" style={{background:c.bg}}>{c.ico}</div>
              <div className="cp-sc-body">
                <div className="cp-sc-title">{c.t}</div>
                <div className="cp-sc-sub">{c.s}</div>
              </div>
              <span className={`cp-sc-badge ${c.cls}`}>{c.badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TAG CLOUD */}
      <div className="cp-tags-wrap">
        <div className="cp-tags-inner">
          <div>
            <h2>Complete supply chain, <span>zero compromise.</span></h2>
            <p>Authorized, alternate, obsolete, and spot buy — every component need handled with speed, quality, and full traceability.</p>
            <div className="cp-tag-cloud">
              {serviceTags.map((t,i) => <div key={i} className="cp-m-tag">{t}</div>)}
            </div>
            <button className="cp-btn-org">Explore All Procurement Services ›</button>
          </div>
          <div>
            <div className="cp-visual">
              <img src="/assets/home/pcb_image.jpg" className="cp-visual-img" alt="Component Procurement" />
              <div className="cp-visual-footer">
                <span>Digi-Key · Mouser · Arrow · Avnet · RS Components</span>
                <a href="#">Learn More ›</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cp-body">

        {/* PROCESS */}
        <div className="cp-section">
          <div className="cp-divider" style={{marginBottom:"2rem"}} />
          <div className="cp-label">How It Works</div>
          <h2 className="cp-sec-title">From BOM to <span>your dock</span></h2>
          <p className="cp-sec-p">A streamlined 6-step process designed to remove friction, reduce risk, and get parts to your production line on time.</p>
          <div className="cp-flow">
            {flowSteps.map((s,i)=>(
              <div key={i} className="cp-flow-step">
                <div className="cp-flow-circle">{s.ico}</div>
                <div className="cp-flow-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="cp-divider" />

        {/* SOURCING MODES */}
        <div className="cp-section">
          <div className="cp-label">Sourcing Models</div>
          <h2 className="cp-sec-title">Every procurement <span>scenario covered</span></h2>
          <div className="cp-source-grid">
            {[
              { ico:"🌐", t:"Global Authorized Sourcing", d:"Direct OEM allocations and authorized distributor channels for new, genuine components with full traceability and manufacturer warranty.", tags:["Digi-Key","Mouser","Arrow","Avnet","RS Components"] },
              { ico:"🔄", t:"Alternate Part Sourcing", d:"When your first-choice part is NPI, NRND, or constrained — our engineers identify and validate pin-compatible alternates that pass your design specs.", tags:["Cross-Ref DB","Form-Fit-Function","EE Sign-off"] },
              { ico:"🛡️", t:"Counterfeit Mitigation", d:"Every broker-sourced part undergoes incoming QC — visual inspection, decapsulation, electrical parametric testing, and X-ray analysis.", tags:["AS6081","IDEA-STD-1010","X-Ray","Decap"] },
            ].map((p,i)=>(
              <div key={i} className="cp-source-panel">
                <div className="cp-sp-ico">{p.ico}</div>
                <div className="cp-sp-t">{p.t}</div>
                <div className="cp-sp-d">{p.d}</div>
                <div className="cp-sp-tags">{p.tags.map((tag,j)=><span key={j} className="cp-sp-tag">{tag}</span>)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="cp-divider" />

        {/* BOM TABLE */}
        <div className="cp-section">
          <div className="cp-label">BOM Management</div>
          <h2 className="cp-sec-title">Real-time visibility <span>into your supply chain</span></h2>
          <p className="cp-sec-p">We manage your BOM with full transparency — live price, availability, and risk tracking across all line items.</p>
          <div className="cp-bom-wrap">
            <div className="cp-bom-hdr">
              <span>Part Number</span><span>Manufacturer</span>
              <span>Qty</span><span>Stock</span>
              <span>Unit Price</span><span>Status</span>
            </div>
            {bomRows.map((r,i)=>(
              <div key={i} className="cp-bom-row">
                <span className="cp-part">{r.part}</span>
                <span>{r.mfr}</span>
                <span>{r.qty}</span>
                <span>{r.stock}</span>
                <span>{r.price}</span>
                <span className={`cp-status st-${r.st}`}>{r.stTxt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cp-divider" />

        {/* CATEGORIES */}
        <div className="cp-section">
          <div className="cp-label">Coverage</div>
          <h2 className="cp-sec-title">Every component <span>category</span></h2>
          <div className="cp-cat-grid">
            {catTiles.map((c,i)=>(
              <div key={i} className="cp-cat-tile">
                <div className="cp-ct-ico">{c.ico}</div>
                <div className="cp-ct-name">{c.name}</div>
                <div className="cp-ct-sub">{c.sub}</div>
              </div>
            ))}
          </div>
          <div className="cp-brands-top">
            <div className="cp-brands-title">Brands we source from</div>
            <div className="cp-brands-row">
              {brands.map((b,i)=><span key={i} className="cp-brand">{b}</span>)}
            </div>
          </div>
        </div>

        <div className="cp-divider" />

        {/* VALUE PROPS */}
        <div className="cp-section">
          <div className="cp-label">Why Choose Us</div>
          <h2 className="cp-sec-title">Built for engineers <span>who can't afford delays</span></h2>
          <div className="cp-vp-grid">
            {vpCards.map((v,i)=>(
              <div key={i} className="cp-vp-card">
                <div className="cp-vp-num">{v.n}</div>
                <div><div className="cp-vp-t">{v.t}</div><div className="cp-vp-d">{v.d}</div></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="cp-cta">
          <div className="cp-cta-copy">
            <h2>Ready to solve your <em>supply chain</em> challenges?</h2>
            <p>Share your BOM and we'll come back with availability, alternates, lead times, and a competitive price — usually within the same business day.</p>
          </div>
          <div className="cp-cta-actions">
            <button className="cp-cta-btn-org">Upload Your BOM ›</button>
            <button className="cp-cta-btn-b">Talk to a Procurement Engineer</button>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}