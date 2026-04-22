import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

  * { margin:0; padding:0; box-sizing:border-box; }
  :root {
    --orange:#FF5500;
    --orange2:#FF7733;
    --oglow:rgba(255,85,0,0.10);
    --black:#0D0D0D;
    --dark:#181818;
    --g8:#2C2C2C;
    --g6:#555;
    --g3:#C0C0C0;
    --g1:#F4F4F4;
    --white:#FFFFFF;
  }
  .mold-wrap { 
    font-family:'Poppins',sans-serif; 
    background:var(--white); 
    color:var(--black); 
    overflow-x:hidden; 
    font-size: 1rem;
  }

  /* HERO */
  .hero { 
    min-height:100vh; 
    background:var(--black); 
    display:flex; 
    flex-direction:column; 
    justify-content:flex-end; 
    position:relative; 
    overflow:hidden; 
  }
  .hero-bg { 
    position:absolute;inset:0; 
    background-image:url('https://images.unsplash.com/photo-1574558884768-5fba9b7c60f7?w=1400&q=80'); 
    background-size:cover; 
    background-position:center; 
    opacity:.22; 
    filter:saturate(.35); 
  }
  .hero-grid { 
    position:absolute;inset:0; 
    background-image:linear-gradient(rgba(255,85,0,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,85,0,.05) 1px,transparent 1px); 
    background-size:3.5rem 3.5rem; 
  }
  .hero-body { 
    position:relative;z-index:2; 
    padding:5rem 5% 3.5rem; 
    display:grid; 
    grid-template-columns:1.2fr 1fr; 
    gap:4rem; 
    align-items:end; 
  }
  .hero-eye {
    display: flex; /* Changed from inline-flex to flex */
    align-items: center; 
    gap: 0.8rem;
    font-family: 'Space Mono', monospace; 
    font-size: 0.625rem; 
    letter-spacing: 0.15rem; /* Slightly reduced for better fit */
    text-transform: uppercase; 
    color: var(--orange);
    margin-bottom: 1.75rem;
    width: 100%; /* Ensure it stays within parent bounds */
    white-space: nowrap; /* Prevents awkward line breaks */
  }
  .hero-eye::after { content:''; flex:1; height:1px; background:rgba(255,85,0,.35); }
  .hero-h1 { font-size:clamp(3rem, 7vw, 6rem); font-weight:900; line-height:.93; color:var(--white); margin-bottom:2rem; }
  .hero-h1 .accent { color:var(--orange); display:block; }
  .hero-p { font-size:1rem; line-height:1.8; color:rgba(255,255,255,.5); max-width:32.5rem; margin-bottom:2.75rem; }
  .hero-p strong { color:rgba(255,255,255,.85); font-weight:600; }
  .chips { display:flex; flex-wrap:wrap; gap:0.5rem; }
  .chip { font-family:'Space Mono',monospace; font-size:0.625rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06rem; padding:0.4rem 0.9rem; border:1px solid; border-radius:0.125rem; }
  .chip-o { border-color:var(--orange); color:var(--orange); }
  .chip-w { border-color:rgba(255,255,255,.18); color:rgba(255,255,255,.45); }

  /* Terminal-style card */
  .hero-card { background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.07); border-radius:0.25rem; overflow:hidden; align-self:center; width:100%; }
  .card-bar { background:rgba(255,255,255,.05); padding:0.7rem 1rem; display:flex; align-items:center; gap:0.45rem; }
  .dot { width:0.625rem;height:0.625rem;border-radius:50%; }
  .dot.r{background:#ff5f57;}.dot.y{background:#ffbd2e;}.dot.g{background:#28c840;}
  .card-title { margin-left:auto; font-family:'Space Mono',monospace; font-size:0.625rem; color:rgba(255,255,255,.25); }
  .card-body { padding:1.4rem; }
  .card-row { font-family:'Space Mono',monospace; font-size:0.75rem; line-height:2.1; }
  .cp { color:var(--orange); }.cc { color:var(--white); }.co { color:rgba(255,255,255,.45); padding-left:1.1rem; }.cs { color:#22c55e; padding-left:1.1rem; }

  /* Stats bar */
  .hero-stats { position:relative;z-index:2; border-top:1px solid rgba(255,255,255,.06); padding:1.4rem 5%; display:flex; gap:0; }
  .hs { flex:1; padding:0 2.25rem 0 0; border-right:1px solid rgba(255,255,255,.07); display:flex; flex-direction:column; gap:0.2rem; }
  .hs:first-child{padding-left:0;} .hs:last-child{border:none;}
  .hs-n { font-size:2.125rem; font-weight:800; color:var(--orange); line-height:1; }
  .hs-l { font-size:0.625rem; color:rgba(255,255,255,.35); text-transform:uppercase; letter-spacing:0.1rem; }

  /* PIPELINE */
  .pipe-sec { padding:3rem 5%; background:var(--g1); }
  .sec-tag { font-family:'Space Mono',monospace; font-size:0.625rem; letter-spacing:0.2rem; text-transform:uppercase; color:var(--orange); margin-bottom:0.9rem; }
  .sec-h2 { font-size:clamp(2.25rem, 4.5vw, 4rem); font-weight:800; line-height:1; margin-bottom:4.5rem; }
  .sec-h2 span { color:var(--orange); }

  .pipe-step { display:grid; grid-template-columns:4.5rem 1fr 1fr; gap:2.25rem; align-items:stretch; position:relative; }
  .pipe-step:not(:last-child)::before { content:''; position:absolute; left:2.2rem; top:4.5rem; bottom:-2.6rem; width:2px; background:linear-gradient(to bottom,var(--orange),rgba(255,85,0,.08)); }
  .step-num-col { display:flex;flex-direction:column;align-items:center;padding-top:0.1rem; }
  .step-circle { width:3.25rem;height:3.25rem;border-radius:50%;background:var(--orange);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;flex-shrink:0;position:relative;z-index:1; }
  .step-body { padding:1.6rem 0 3.1rem; }
  .step-phase { font-family:'Space Mono',monospace; font-size:0.625rem; letter-spacing:0.125rem; text-transform:uppercase; color:var(--orange); margin-bottom:0.45rem; }
  .step-title { font-size:1.5rem; font-weight:800; color:var(--black); margin-bottom:0.9rem; line-height:1.1; }
  .step-desc { font-size:0.875rem; line-height:1.85; color:var(--g6); margin-bottom:1.25rem; }
  .step-list { list-style:none; display:flex; flex-direction:column; gap:0.45rem; }
  .step-list li { font-size:0.75rem; color:var(--g6); padding-left:1.1rem; position:relative; }
  .step-list li::before { content:'→'; position:absolute;left:0; color:var(--orange); font-weight:700; }
  .step-img { height:17rem; overflow:hidden; align-self:center; box-shadow:0 0.9rem 2.5rem rgba(0,0,0,.1); margin-bottom:3rem; border-radius:0.125rem; }
  .step-img img { width:100%;height:100%;object-fit:cover;transition:transform .5s;filter:saturate(.8); }
  .step-img:hover img { transform:scale(1.04);filter:saturate(1); }

  /* WORKFLOW */
  .wf-sec { padding:3rem 5%; background:var(--white); }
  .wf-cards { display:grid; grid-template-columns:repeat(5,1fr); gap:0; margin-top:2.75rem; position:relative; }
  .wf-cards::before { content:''; position:absolute; top:2.75rem;left:10%;right:10%;height:2px; background:linear-gradient(to right,transparent,var(--orange),var(--orange),transparent); z-index:0; }
  .wf-card { display:flex;flex-direction:column;align-items:center;padding:1rem 0.75rem 1.75rem;text-align:center;position:relative;z-index:1; }
  .wf-dot { width:5.5rem;height:5.5rem;background:var(--white);border:3px solid var(--g1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.875rem;margin-bottom:1.1rem;transition:border-color .2s,background .2s;box-shadow:0 0.25rem 1.25rem rgba(0,0,0,.06); cursor:default; }
  .wf-card:hover .wf-dot { border-color:var(--orange); background:var(--oglow); }
  .wf-card h4 { font-size:0.81rem; font-weight:700; margin-bottom:0.3rem; }
  .wf-card p { font-size:0.7rem; color:var(--g6); line-height:1.5; }

  /* MATERIALS */
  .mat-sec { padding:3rem 5%; background:var(--black); }
  .mat-sec .sec-h2 { color:var(--white); }
  .mat-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; margin-top:2.75rem; }
  .mat-card { background:var(--dark); padding:2.75rem 2rem; border-bottom:3px solid transparent; transition:border-color .3s,background .3s; cursor:default; }
  .mat-card:hover { border-color:var(--orange); background:#1e1e1e; }
  .mat-icon { font-size:2.125rem; margin-bottom:1.1rem; }
  .mat-card h3 { font-size:1.125rem; font-weight:700; color:var(--white); margin-bottom:0.6rem; }
  .mat-card p { font-size:0.81rem; color:#666; line-height:1.7; margin-bottom:1.1rem; }
  .mat-tags { display:flex;flex-wrap:wrap;gap:0.3rem; }
  .m-tag { font-family:'Space Mono',monospace; font-size:0.56rem;letter-spacing:0.06rem;text-transform:uppercase;padding:0.2rem 0.5rem;background:rgba(255,85,0,.1);color:var(--orange);border-radius:0.125rem; }

  /* COMPARE */
  .cmp-sec { padding:3rem 5%; background:var(--white); }
   .table-wrapper { 
    width: 100%; 
    overflow-x: auto; 
    margin-top: 2.75rem; 
    /* Smooth scrolling for mobile */
    -webkit-overflow-scrolling: touch; 
  }

  table { 
    width: 100%; 
    /* Force a minimum width so horizontal scroll triggers on small screens */
    min-width: 800px; 
    border-collapse: collapse; 
    font-size: 0.81rem; 
  }

  thead th { 
    background: var(--black); 
    color: var(--white); 
    padding: 1.1rem 1.4rem; 
    text-align: left; 
    font-weight: 700; 
    font-size: 0.75rem; 
    text-transform: uppercase; 
    letter-spacing: 0.06rem; 
  }
  thead th:first-child { color:#666; }
  thead th.active { background:var(--orange); }
  td { padding:1.1rem 1.4rem; border-bottom:1px solid var(--g1); vertical-align:middle; }
  tr:hover td { background:rgba(255,85,0,.04); }
  td:first-child { font-weight:600; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.03rem; color:var(--g6); }
  td.win { color:var(--orange); font-weight:700; }

  /* GALLERY */
  .gal-sec { padding: 1rem 5% 4rem; }
  .gal-h { margin-bottom:2.25rem; }
  .gal-grid { display:grid; grid-template-columns:repeat(4,1fr); grid-template-rows:14rem 10.5rem; gap:0.3rem; }
  .gi { overflow:hidden; position:relative; }
  .gi:nth-child(1){grid-column:1/3;} .gi:nth-child(4){grid-column:3/5;}
  .gi img { width:100%;height:100%;object-fit:cover;transition:transform .5s,filter .4s;filter:saturate(.7); }
  .gi:hover img { transform:scale(1.07);filter:saturate(1.1); }
  .gi-cap { position:absolute;bottom:0;left:0;background:var(--orange);color:#fff;font-family:'Space Mono',monospace;font-size:0.56rem;letter-spacing:0.125rem;text-transform:uppercase;padding:0.3rem 0.75rem;opacity:0;transition:opacity .3s; }
  .gi:hover .gi-cap { opacity:1; }

  /* CTA */
  .cta { background:var(--orange); padding:5.6rem 5%; display:grid; grid-template-columns:1fr 1fr; gap:3.75rem; align-items:center; }
  .cta-title { font-size:clamp(2rem, 4vw, 3.5rem); font-weight:900; color:var(--black); line-height:1; }
  .cta-title em { font-style:normal; color:var(--white); }
  .cta-body { font-size:0.9rem; line-height:1.8; color:rgba(0,0,0,.6); margin-bottom:1.75rem; }
  .btn-group { display:flex;gap:0.9rem;flex-wrap:wrap; }
  .btn1 { display:inline-flex;align-items:center;gap:0.5rem;background:var(--black);color:#fff;padding:0.9rem 1.8rem;font-family:'Poppins',sans-serif;font-weight:700;font-size:0.81rem;text-decoration:none;text-transform:uppercase;letter-spacing:0.06rem;transition:background .2s;cursor:pointer;border:none; }
  .btn1:hover{background:#333;}
  .btn2 { display:inline-flex;align-items:center;gap:0.5rem;background:transparent;color:var(--black);border:2px solid var(--black);padding:0.9rem 1.8rem;font-family:'Poppins',sans-serif;font-weight:700;font-size:0.81rem;text-decoration:none;text-transform:uppercase;letter-spacing:0.06rem;transition:background .2s,color .2s;cursor:pointer; }
  .btn2:hover{background:var(--black);color:#fff;}
  .gal-h { margin-bottom: 3rem; }
  
  .gal-grid { 
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    grid-auto-rows: 14rem; 
    gap: 1rem; 
  }

  .gi { overflow: hidden; position: relative; border-radius: 0.25rem; }
  
  /* Desktop Layout Arrangement */
  .gi:nth-child(1) { grid-column: span 2; grid-row: span 1; } /* Large Wide */
  .gi:nth-child(2) { grid-column: span 1; grid-row: span 1; }
  .gi:nth-child(3) { grid-column: span 1; grid-row: span 1; }
  .gi:nth-child(4) { grid-column: span 1; grid-row: span 1; }
  .gi:nth-child(5) { grid-column: span 1; grid-row: span 1; }
  .gi:nth-child(6) { grid-column: span 2; grid-row: span 1; } /* Large Wide */

  .gi img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s, filter .4s; filter: saturate(.7); }
  .gi:hover img { transform: scale(1.07); filter: saturate(1.1); }
  
  .gi-cap { 
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8)); 
    color: #fff; font-family: 'Space Mono', monospace; font-size: 0.65rem; 
    letter-spacing: 0.1rem; text-transform: uppercase; padding: 2rem 1rem 0.75rem; 
    opacity: 0; transition: opacity 0.3s; 
  }
  .gi:hover .gi-cap { opacity: 1; }

  @media(max-width:1100px){
    .hero-body{grid-template-columns:1fr;gap:2.25rem;} 
    .hero-stats{padding:1.4rem 5%;flex-wrap:wrap;}
    .hs{padding:0 1.25rem 0 0;border:none;flex:1 0 40%;}
    .pipe-step{grid-template-columns:3.75rem 1fr;} .step-img{display:none;}
    .mat-grid{grid-template-columns:1fr 1fr;} .cta{grid-template-columns:1fr;}
    .gal-grid{grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto;}
    .gi:nth-child(1),.gi:nth-child(4){grid-column:auto;height:10.5rem;} .gi{height:10.5rem;}
  }
  @media(max-width:700px){
    .hero-body,.pipe-sec,.wf-sec,.mat-sec,.cmp-sec,.gal-sec,.cta{padding:2.5rem 5%;}
    .pipe-step{grid-template-columns:2.8rem 1fr;gap:1rem;}
    .mat-grid{grid-template-columns:1fr;} .wf-cards{grid-template-columns:repeat(2,1fr);} .wf-cards::before{display:none;}
    .gal-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 12rem; }
    .gi:nth-child(1), .gi:nth-child(6) { grid-column: span 2; }
  }
      @media(max-width:480px) {
    .hero-eye {
      font-size: 0.55rem; /* Shrink font slightly on small phones */
      letter-spacing: 0.05rem; /* Drastically reduce spacing to prevent cutoff */
      gap: 0.5rem;
    }
  }
     @media(max-width:700px){
    .hero {
      min-height: auto; /* Allow the hero to grow with content on small screens */
      padding-top: 3rem; 
    }
    .hero-body {
      padding: 2rem 5% 2rem; /* Reduce top padding so content moves up */
      gap: 1.5rem;
    }
    .hero-h1 {
      font-size: 2.8rem; /* Slightly smaller to fit mobile screens better */
      margin-bottom: 1.5rem;
    }
    .hero-card {
      margin-top: 1rem; /* Space between text and terminal card */
    }
  }
  
`;

const pipelineSteps = [
  {
    phase:"Phase 01 — Design", title:"Concept Design & DFM Analysis",
    desc:"Your concept arrives as a sketch, CAD file, or even a rough drawing. Our engineers translate it into a mold-ready 3D model, running DFM checks to ensure the part will demold cleanly and hold tolerances.",
    bullets:["Wall thickness analysis and draft angle verification","Parting line and gate location optimization","Shrinkage and warp prediction modeling","Material selection guidance for mold and part"],
    img:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80"
  },
  {
    phase:"Phase 02 — Print", title:"High-Resolution Mold Printing",
    desc:"Mold halves are printed in engineering-grade photopolymers capable of withstanding injection pressures up to 5,000 psi and temperatures up to 200°C. Post-cure ensures max hardness and dimensional stability.",
    bullets:["SLA printing at 25–50 micron layer resolution","High-temp resin options (HDT up to 238°C)","Rigid, flexible, and elastomeric mold materials","Overnight printing — multi-cavity possible"],
    img:"https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    phase:"Phase 03 — Trial", title:"Prototype Injection & Iteration",
    desc:"First shots run on our injection press within 24 hours of mold completion. Parts are measured against CAD and any deviations corrected digitally — mold reprinted overnight, not re-machined over weeks.",
    bullets:["First article inspection with full GD&T report","Rapid iteration — modify and reprint overnight","Material matching: ABS, PP, TPU, Nylon, PETG","Functional prototype parts for testing and user trials"],
    img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
  },
  {
    phase:"Phase 04 — Scale", title:"Bridge to Production Tooling",
    desc:"Once prototypes are approved, validated design data transfers seamlessly to hard aluminum or steel tooling for production volumes. You're not starting over — you pick up with proven geometry.",
    bullets:["Smooth handoff to aluminum (P20) or steel (H13) tooling","Process parameters carry over — no requalification from scratch","Low-volume production possible with printed molds (500–2,000 shots)","Full mold documentation and parting data packages included"],
    img:"https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
  },
];

const workflow = [
  {icon:"📐",title:"Upload Design",desc:"CAD, STEP, STL or sketch"},
  {icon:"🔬",title:"DFM Review",desc:"24hr engineering feedback"},
  {icon:"🖨️",title:"Print Mold",desc:"Overnight high-res print"},
  {icon:"💉",title:"Inject & Test",desc:"Real parts in 24 hours"},
  {icon:"🚀",title:"Scale Up",desc:"Bridge to hard tooling"},
];

const materials = [
  {icon:"🟧",name:"High-Temp Rigid Resin",desc:"Best for tight-tolerance injection molds. HDT of 238°C, excellent surface finish. Ideal for ABS, PP, and PC injection runs up to 500 shots.",tags:["HDT 238°C","≤500 Shots","±0.1mm"]},
  {icon:"⬜",name:"Industrial SLS Nylon",desc:"Tough, slightly flexible inserts with excellent fatigue resistance. Great for complex geometries and undercuts that benefit from mold flex during demolding.",tags:["PA12","High Fatigue","Undercuts"]},
  {icon:"🔩",name:"Metal-Filled Composite",desc:"Aluminum or steel-filled photopolymers that increase thermal conductivity and wear resistance dramatically. Bridge to true metal tooling.",tags:["2000+ Shots","Conductive","High Pressure"]},
  {icon:"🫧",name:"Silicone & Urethane",desc:"Cast silicone molds from printed masters. Perfect for vacuum casting, soft parts, overmolds, and medical prototypes with biocompatible options.",tags:["Vacuum Cast","Biocompatible","Overmold"]},
  {icon:"⚡",name:"Carbon Fiber Reinforced",desc:"CF-filled SLS nylon molds offer stiffness-to-weight ratios approaching aluminum tooling at a fraction of the lead time and cost.",tags:["CF-PA12","Stiff","Lightweight"]},
  {icon:"🌡️",name:"Ceramic-Filled Resin",desc:"Ultra-high temp applications including die casting and glass molding. Withstands thermal shock up to 300°C continuous service temperature.",tags:["300°C","Die Cast","Glass Mold"]},
];

const compareRows = [
  ["Lead Time","1–3 Days","3–5 Weeks","8–14 Weeks","A"],
  ["Tooling Cost","$200–$1,500","$3,000–$15,000","$10,000–$100K+","A"],
  ["Design Iterations","Overnight Reprint","2–3 Weeks","4–6 Weeks","A"],
  ["Shot Life","500–2,000","50,000–100,000","1M+","C"],
  ["Tolerance (part)","±0.2mm","±0.1mm","±0.05mm","C"],
  ["Best For","Prototype / Bridge","Mid Volume","Mass Production","A"],
  ["Risk Level","Very Low","Medium","High","A"],
];

const gallery = [
  {src:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",cap:"Consumer Electronics Housing"},
  {src:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",cap:"Automotive Clip Prototype"},
  {src:"https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=800&q=80",cap:"Medical Device Casing"},
  {src:"https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?w=800&q=80",cap:"Industrial Connector"},
  {src:"https://images.unsplash.com/photo-1525498128493-380d1990a112?w=400&q=80",cap:"Mold Insert Detail"},
  {src:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",cap:"Lab Prototype Validation"},
];

export default function MoldPipeline() {
  return (
    <div className="mold-wrap">
      <style>{style}</style>
      <Header/>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" /><div className="hero-grid" />
        <div className="hero-body">
          <div>
            <div className="hero-eye">Prototype → Production Pipeline</div>
            <h1 className="hero-h1">3D Printed<br /><span className="accent">Mold</span> Fabrication</h1>
            <p className="hero-p">From a concept sketch to a <strong>production-ready injection mold in days, not months.</strong> Our end-to-end pipeline bridges rapid prototyping and full-scale manufacturing.</p>
            <div className="chips">
              <span className="chip chip-o">SLA / SLS / FDM</span>
              <span className="chip chip-w">Injection Molding</span>
              <span className="chip chip-w">Vacuum Casting</span>
              <span className="chip chip-o">Low-Volume Production</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-bar">
              <div className="dot r"/><div className="dot y"/><div className="dot g"/>
              <span className="card-title">mold-pipeline.log</span>
            </div>
            <div className="card-body">
              {[
                ["$","terraform apply --env production","p"],
                [">","Provisioning SLA print job...","o"],
                ["✓","Mold halves printed — 47µm layers","s"],
                [">","Running injection trial #1...","o"],
                ["✓","First shot: ±0.12mm from nominal","s"],
                [">","DFM feedback applied, reprinting...","o"],
                ["✓","Trial #2 passed — GD&T approved","s"],
                [">","Handing off to Al tooling...","o"],
                ["✓","Production tooling order placed","s"],
              ].map(([p,t,type],i)=>(
                <div className="card-row" key={i}>
                  <span className={type==="p"?"cp":type==="o"?"co":"cs"}>{p} </span>
                  <span className="cc">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hs"><span className="hs-n">72hr</span><span className="hs-l">First Prototype</span></div>
          <div className="hs"><span className="hs-n">10K+</span><span className="hs-l">Mold Shots</span></div>
          <div className="hs"><span className="hs-n">85%</span><span className="hs-l">Cost vs Steel Tooling</span></div>
          <div className="hs"><span className="hs-n">0.1mm</span><span className="hs-l">Print Accuracy</span></div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="pipe-sec">
        <div className="sec-tag">The Process</div>
        <h2 className="sec-h2">From Idea to <span>Production</span></h2>
        <div style={{display:"flex",flexDirection:"column"}}>
          {pipelineSteps.map((s,i)=>(
            <div className="pipe-step" key={i}>
              <div className="step-num-col"><div className="step-circle">{i+1}</div></div>
              <div className="step-body">
                <div className="step-phase">{s.phase}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
                <ul className="step-list">{s.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>
              </div>
              <div className="step-img"><img src={s.img} alt={s.title}/></div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="wf-sec">
        <div className="sec-tag">Workflow Summary</div>
        <h2 className="sec-h2">5 Steps. <span>Days, Not Months.</span></h2>
        <div className="wf-cards">
          {workflow.map((w,i)=>(
            <div className="wf-card" key={i}>
              <div className="wf-dot">{w.icon}</div>
              <h4>{w.title}</h4><p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section className="mat-sec">
        <div className="sec-tag">Mold Materials</div>
        <h2 className="sec-h2">Right Material for<br /><span>Every Application</span></h2>
        <div className="mat-grid">
          {materials.map((m,i)=>(
            <div className="mat-card" key={i}>
              <div className="mat-icon">{m.icon}</div>
              <h3>{m.name}</h3>
              <p>{m.desc}</p>
              <div className="mat-tags">{m.tags.map((t,j)=><span className="m-tag" key={j}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
{/* COMPARE SECTION */}
      <section className="cmp-sec">
        <div className="sec-tag">Why 3D Printed Molds</div>
        <h2 className="sec-h2">Compare <span>Tooling Options</span></h2>
        
        {/* Only this wrapper will scroll horizontally */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th className="active">3D Printed Mold ★</th>
                <th>Aluminum Tooling</th>
                <th>Steel Tooling</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map(([feat, a, b, c, win], i) => (
                <tr key={i}>
                  <td>{feat}</td>
                  <td className={win === "A" ? "win" : ""}>{a}</td>
                  <td className={win === "B" ? "win" : ""}>{b}</td>
                  <td className={win === "C" ? "win" : ""}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* GALLERY */}
      <section className="gal-sec">
        <div className="gal-h">
          <div className="sec-tag">Work Samples</div>
          <h2 className="sec-h2" style={{marginBottom:0}}>Molds We've <span>Built</span></h2>
        </div>
        <div className="gal-grid">
          {gallery.map((g,i)=>(
            <div className="gi" key={i}>
              <img src={g.src} alt={g.cap}/>
              <div className="gi-cap">{g.cap}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2 className="cta-title">Your prototype<br /><em>starts today.</em></h2>
        <div>
          <p className="cta-body">Upload your CAD file and receive a DFM report and quote within 24 hours. No minimum order, no long wait. Prototype-to-production under one roof.</p>
          <div className="btn-group">
            <button className="btn1">Upload CAD File →</button>
            <button className="btn2">View Case Studies</button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}