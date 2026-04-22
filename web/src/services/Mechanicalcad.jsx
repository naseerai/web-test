import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { useLang } from "../context/LanguageContext";

export default function MechanicalCAD() {
  const { t } = useLang();

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');

        :root {
          --orange: #f4531c;
          --black: #111;
          --mid: #444;
          --muted: #888;
          --light: #f7f5f2;
          --white: #ffffff;
          --border: #e8e4de;
          --card-bg: #faf9f7;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .mcad-page { font-family: 'DM Sans', sans-serif; padding-top: 60px; }

        /* ── HERO ── */
        .mcad-hero { background: var(--black); min-height: 92vh; display: flex; flex-direction: column; position: relative; overflow: hidden; }
        .mcad-hero-bg-text {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          font-family: 'Poppins', sans-serif; font-size: 24vw; font-weight: 800;
          color: rgba(255,255,255,0.03); white-space: nowrap; pointer-events: none;
          letter-spacing: -10px; line-height: 1; user-select: none;
        }
        .mcad-hero-top { flex: 1; display: grid; grid-template-columns: 1fr 1fr; min-height: 60vh; }
        .mcad-hero-content {
padding: 6vh 4% 6vh 7%;          display: flex; flex-direction: column; justify-content: center;
          position: relative; z-index: 2; color: #fff;
        }
        .mcad-breadcrumb { display: flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--orange); margin-bottom: 2rem; }
        .mcad-breadcrumb span { color: #555; }
        .mcad-hero-title { font-family: 'Poppins', sans-serif; font-size: clamp(3rem, 5.5vw, 5.5rem); font-weight: 800; line-height: 0.95; letter-spacing: -3px; margin-bottom: 2rem; }
        .mcad-hero-title .line2 { color: var(--orange); display: block; }
        .mcad-hero-title .line3 { color: #555; font-weight: 400; display: block; font-size: 0.6em; letter-spacing: -1px; margin-top: 0.3em; }
        .mcad-hero-desc { font-size: 0.97rem; color: #888; line-height: 1.75; max-width: 400px; margin-bottom: 3rem; }
        .mcad-hero-actions { display: flex; gap: 1rem; }
        .mcad-btn-primary { background: var(--orange); color: #fff; padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 700; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 0.8px; transition: 0.2s; }
        .mcad-btn-primary:hover { background: #d83e0e; transform: translateY(-2px); }
        .mcad-btn-outline { background: transparent; color: #fff; padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 600; border: 1px solid #333; cursor: pointer; text-transform: uppercase; transition: 0.2s; }
        .mcad-btn-outline:hover { border-color: #666; }
        .mcad-hero-visual { position: relative; z-index: 2; background: #0a0a0a; }
        .mcad-hero-visual img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6); }
        .mcad-cad-overlay { position: absolute; top: 2rem; right: 2rem; display: flex; flex-direction: column; gap: 0.7rem; }
        .mcad-cad-badge { background: rgba(244,83,28,0.9); color: #fff; padding: 0.6rem 1rem; border-radius: 6px; font-size: 0.7rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .mcad-cad-badge-dark { background: rgba(0,0,0,0.75); border: 1px solid #333; }
        .mcad-hero-bottom { border-top: 1px solid #1a1a1a; display: grid; grid-template-columns: repeat(4, 1fr); position: relative; z-index: 2; }
        .mcad-hb-item { padding: 2rem 7%; border-right: 1px solid #1a1a1a; }
        .mcad-hb-item:last-child { border-right: none; }
        .mcad-hb-num { font-family: 'Poppins', sans-serif; font-size: 2.5rem; font-weight: 800; color: #fff; line-height: 1; }
        .mcad-hb-label { font-size: 0.72rem; color: #555; font-weight: 500; margin-top: 0.3rem; }

        /* ── SECTIONS ── */
        .mcad-section { padding: 6vh 7%;}
        .mcad-section-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--orange); margin-bottom: 1rem; }
        .mcad-section-title { font-family: 'Poppins', sans-serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 800; letter-spacing: -1.5px; color: var(--black); line-height: 1.05; margin-bottom: 1.2rem; }
        .mcad-section-sub { font-size: 1rem; color: var(--muted); line-height: 1.7; max-width: 580px; }

        /* ── SOFTWARE ── */
        .mcad-sw-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 3.5rem; }
        .mcad-sw-card { background: var(--white); border: 1px solid var(--border); border-radius: 10px; padding: 2rem 1.5rem; text-align: center; transition: 0.3s; }
        .mcad-sw-card:hover { border-color: var(--orange); box-shadow: 0 4px 24px rgba(244,83,28,0.08); transform: translateY(-3px); }
        .mcad-sw-logo { font-family: 'Poppins', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--orange); margin-bottom: 0.8rem; }
        .mcad-sw-name { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem; }
        .mcad-sw-type { font-size: 0.72rem; color: var(--muted); font-weight: 500; }

        /* ── SERVICES ── */
        .mcad-svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3.5rem; }
        .mcad-svc-card { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; transition: 0.3s; background: #fff; }
        .mcad-svc-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.07); transform: translateY(-4px); }
        .mcad-svc-img { height: 210px; width: 100%; object-fit: cover; display: block; }
        .mcad-svc-body { padding: 1.8rem; }
        .mcad-svc-tag { font-size: 0.65rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--orange); margin-bottom: 0.8rem; }
        .mcad-svc-title { font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.7rem; }
        .mcad-svc-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }
        .mcad-svc-link { display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 1.2rem; font-size: 0.78rem; font-weight: 700; color: var(--orange); text-decoration: none; cursor: pointer; }

        /* ── IMAGE BREAK (THE MIDDLE PART) ── */
        .mcad-img-break { background: var(--black); padding: 2px 0; }
        .mcad-img-break-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; height: 500px; gap: 4px; }
        .mcad-img-break-main { position: relative; overflow: hidden; }
        .mcad-img-break-main img { width: 100%; height: 100%; object-fit: cover; opacity: 0.75; transition: 0.5s; }
        .mcad-img-break-main:hover img { transform: scale(1.05); }
        .mcad-img-break-label { position: absolute; bottom: 2.5rem; left: 2.5rem; color: #fff; z-index: 2; }
        .mcad-img-break-label h3 { font-family: 'Poppins', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; }
        .mcad-img-break-label p { font-size: 0.9rem; color: #ccc; }
        
        .mcad-img-break-right-col { display: grid; grid-template-rows: 1fr 1fr; gap: 4px; }
        .mcad-img-break-right-col img { width: 100%; height: 100%; object-fit: cover; opacity: 0.85; transition: 0.5s; }
        .mcad-img-break-right-col img:hover { opacity: 1; }

        /* ── WORKFLOW ── */
        .mcad-workflow-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: flex-start; margin-top: 2.5rem; }
        .mcad-wf-step { display: flex; gap: 1.5rem; padding: 2rem 0; border-bottom: 1px solid var(--border); }
        .mcad-wf-step:last-child { border-bottom: none; }
        .mcad-wf-step-left { display: flex; flex-direction: column; align-items: center; }
        .mcad-wf-num { width: 40px; height: 40px; border-radius: 50%; background: var(--white); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: 'Poppins', sans-serif; font-size: 0.75rem; font-weight: 800; color: var(--muted); flex-shrink: 0; transition: 0.3s; }
        .mcad-wf-step:hover .mcad-wf-num { background: var(--orange); border-color: var(--orange); color: #fff; }
        .mcad-wf-line { flex: 1; width: 1px; background: var(--border); margin: 6px 0; }
        .mcad-wf-title { font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; }
        .mcad-wf-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.6; }
        .mcad-wf-output { display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 0.8rem; font-size: 0.72rem; font-weight: 600; color: var(--orange); background: rgba(244,83,28,0.08); padding: 0.25rem 0.7rem; border-radius: 4px; }
        
        .mcad-workflow-visual { position: sticky; top: 100px; height: 450px; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        .mcad-workflow-visual img { width: 100%; height: 100%; object-fit: cover; }
        .mcad-wv-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.5rem; }
        .mcad-wv-tag { background: var(--white); border: 1px solid var(--border); padding: 0.4rem 0.9rem; border-radius: 6px; font-size: 0.72rem; font-weight: 600; color: var(--mid); }

        /* ── FORMATS ── */
        .mcad-formats { background: var(--black); padding: 6rem 7%; }
        .mcad-formats .mcad-section-title { color: #fff; }
        .mcad-formats-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1px; background: #1a1a1a; border-radius: 10px; overflow: hidden; margin-top: 3.5rem; }
        .mcad-fmt-card { background: #111; padding: 1.5rem 1.2rem; text-align: center; transition: 0.3s; }
        .mcad-fmt-card:hover { background: #161616; }
        .mcad-fmt-ext { font-family: 'Poppins', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--orange); margin-bottom: 0.6rem; }
        .mcad-fmt-name { font-size: 0.72rem; color: #666; font-weight: 500; line-height: 1.4; }

        /* ── PORTFOLIO ── */
        .mcad-port-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 3.5rem; }
        .mcad-port-card { background: var(--white); border-radius: 10px; overflow: hidden; transition: 0.3s; border: 1px solid var(--border); }
        .mcad-port-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.08); transform: translateY(-4px); }
        .mcad-port-img { height: 210px; width: 100%; object-fit: cover; display: block; }
        .mcad-port-body { padding: 1.5rem; }
        .mcad-port-industry { font-size: 0.68rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--orange); margin-bottom: 0.5rem; }
        .mcad-port-title { font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; }
        .mcad-port-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.5; }
        .mcad-port-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; }
        .mcad-port-tag { font-size: 0.65rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 4px; background: var(--light); color: var(--mid); border: 1px solid var(--border); }

        /* ── CTA ── */
        .mcad-cta { background: var(--orange); color: #fff; text-align: center; padding: 7rem 7%; position: relative; overflow: hidden; }
        .mcad-cta::before { content: ''; position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 800px; height: 500px; background: radial-gradient(ellipse, rgba(255,255,255,0.1) 0%, transparent 70%); pointer-events: none; }
        .mcad-cta .mcad-section-title { color: #fff; margin: 0 auto 1.5rem; max-width: 700px; }
        .mcad-cta .mcad-section-sub { margin: 0 auto 3rem; color: rgba(255,255,255,0.7); }
        .mcad-cta-buttons { display: flex; gap: 1rem; justify-content: center; }
        .mcad-btn-white { background: #fff; color: var(--orange); padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 700; border: none; cursor: pointer; text-transform: uppercase; }
        .mcad-btn-outline-white { background: transparent; color: #fff; padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 600; border: 2px solid rgba(255,255,255,0.4); cursor: pointer; text-transform: uppercase; }

        @media (max-width: 900px) {
          .mcad-hero-top { grid-template-columns: 1fr; }
          .mcad-hero-visual { display: none; }
          .mcad-hero-bottom { grid-template-columns: repeat(2, 1fr); }
          .mcad-section { padding: 4rem 5%; }
          .mcad-sw-grid { grid-template-columns: repeat(2, 1fr); }
          .mcad-svc-grid { grid-template-columns: 1fr; }
          .mcad-img-break-grid { grid-template-columns: 1fr; height: auto; }
          .mcad-img-break-right-col { grid-template-columns: 1fr 1fr; grid-template-rows: unset; }
          .mcad-workflow-layout { grid-template-columns: 1fr; }
          .mcad-workflow-visual { position: static; height: 300px; }
          .mcad-formats-grid { grid-template-columns: repeat(3, 1fr); }
          .mcad-port-grid { grid-template-columns: 1fr; }
          .mcad-hb-item { padding: 1.5rem 5%; }
          .mcad-page { padding-top: 50px; } /* Reduce gap from fixed header */

  .mcad-hero-content {
    padding: 6vh 7% !important; /* Tighten mobile hero padding */
  }

  .mcad-section, 
  .mcad-formats { 
    padding: 5vh 4% !important; /* Smaller gaps between sections on mobile */
  }

  .mcad-cta { 
    padding: 6vh 5% !important; 
  }

  .mcad-hero-title {
    font-size: 2.5rem; /* Specific mobile title size */
  }
        }
      `}</style>

      <Header />

      <div className="mcad-page">
        {/* HERO */}
        <div className="mcad-hero">
          <div className="mcad-hero-bg-text">CAD</div>
          <div className="mcad-hero-top">
            <div className="mcad-hero-content">
              <div className="mcad-breadcrumb">Services <span>›</span> Mechanical CAD</div>
              <h1 className="mcad-hero-title">
                Mechanical
                <span className="line2">CAD Design</span>
                <span className="line3">From Concept to Manufacturing – Precision in Every Detail</span>
              </h1>
              <p className="mcad-hero-desc">High-precision parametric models, assembly designs, and production-ready hardware engineering. We bridge the gap between your PCB layout and a functional physical product.</p>
              <div className="mcad-hero-actions">
                <button className="mcad-btn-primary">Start Your Design</button>
                <button className="mcad-btn-outline">View Portfolio</button>
              </div>
            </div>
            <div className="mcad-hero-visual">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470" alt="CAD Design Hero" />
              <div className="mcad-cad-overlay">
                <div className="mcad-cad-badge">SolidWorks</div>
                <div className="mcad-cad-badge mcad-cad-badge-dark">STEP · IGES · DXF</div>
              </div>
            </div>
          </div>
          <div className="mcad-hero-bottom">
            {[
              { num: '300+', label: 'CAD Models Delivered' },
              { num: '48h', label: 'Concept-to-Draft Turnaround' },
              { num: '10+', label: 'CAD Software Supported' },
              { num: '100%', label: 'Manufacture-Ready Files' },
            ].map((item, i) => (
              <div key={i} className="mcad-hb-item">
                <div className="mcad-hb-num">{item.num}</div>
                <div className="mcad-hb-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SOFTWARE */}
        <section className="mcad-section" style={{ background: 'var(--light)' }}>
          <p className="mcad-section-label">Software Proficiency</p>
          <h2 className="mcad-section-title">Tools We Design With</h2>
          <p className="mcad-section-sub">Our engineers are certified in industry-standard CAD platforms, so we work in your preferred format.</p>
          <div className="mcad-sw-grid">
            {[
              { logo: 'F360', name: 'Fusion 360', type: 'Cloud-Based CAD/CAM/CAE' },
  { logo: 'SW', name: 'SolidWorks', type: 'Professional Parametric Modeling' },
  { logo: 'ACAD', name: 'AutoCAD', type: '2D Technical Documentation' },
  { logo: 'FC', name: 'FreeCAD', type: 'Open-Source Engineering' },
  { logo: 'OS', name: 'Onshape', type: 'Collaborative Browser-CAD' },
  { logo: 'BOM', name: 'BOM Expert', type: 'Material List Management' },
              { logo: 'FBX', name: 'FreeCAD', type: 'Open-source Parametric' },
              { logo: 'INV', name: 'Inventor', type: 'Assembly & Motion Simulation' },
            ].map((sw, i) => (
              <div key={i} className="mcad-sw-card">
                <div className="mcad-sw-logo">{sw.logo}</div>
                <div className="mcad-sw-name">{sw.name}</div>
                <div className="mcad-sw-type">{sw.type}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="mcad-section" style={{ background: '#fff' }}>
          <p className="mcad-section-label">What We Design</p>
          <h2 className="mcad-section-title">Mechanical CAD Services</h2>
          <p className="mcad-section-sub">Comprehensive design services covering every aspect of your product's physical form.</p>
          <div className="mcad-svc-grid">
            {[
              { tag: 'Modeling', title: '3D CAD & Assembly', img: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1470', desc: 'High-precision parametric models and multi-part assemblies with motion constraints for prototyping and production.' },
              { tag: 'Electronics', title: 'Enclosure Design', img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1470', desc: 'PCB-based integration featuring IP-rated protection, thermal optimization, snap-fits, and screw bosses.' },
              { tag: 'Optimization', title: 'Design for Manufacture (DFM)',   img: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=1470&q=80'
, desc: 'Parts optimized for injection molding, 3D printing, sheet metal, and CNC machining to reduce production costs.' },
              { tag: 'Engineering', title: 'Reverse Engineering', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470', desc: 'Recreating lost designs from existing physical parts with accurate mechanical tolerances and assembly corrections.' },
              { tag: 'Documentation', title: '2D Technical Drawing', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470', desc: 'Production-ready documentation including GD&T (Geometric Dimensioning and Tolerancing) and exploded views.' },
              { tag: 'Validation', title: 'Simulation & Analysis', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1470', desc: 'Stress, thermal, and fitment simulations including tolerance stack-up analysis for perfect PCB-component alignment.' },
            ].map((svc, i) => (
              <div key={i} className="mcad-svc-card">
                <img className="mcad-svc-img" src={svc.img} alt={svc.title} />
                <div className="mcad-svc-body">
                  <div className="mcad-svc-tag">{svc.tag}</div>
                  <h3 className="mcad-svc-title">{svc.title}</h3>
                  <p className="mcad-svc-desc">{svc.desc}</p>
                  <span className="mcad-svc-link">Learn More →</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGE BREAK (THE FIXED MIDDLE PART) */}
        <div className="mcad-img-break">
          <div className="mcad-img-break-grid">
            <div className="mcad-img-break-main">
              <img src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=1470" alt="Workstation" />
              <div className="mcad-img-break-label">
                <h3>Where Design Meets Engineering</h3>
                <p>State-of-the-art design workstations for complex assemblies</p>
              </div>
            </div>
            <div className="mcad-img-break-right-col">
<img src="https://picsum.photos/800/500" alt="3D Printing" />           
   <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1470" alt="Hardware Review" />
            </div>
            <div className="mcad-img-break-right-col">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1470" alt="Enclosure Test" />
<img src="https://picsum.photos/800/500?random=2" alt="Rendering Workflow" />           
 </div>
          </div>
        </div>

        {/* WORKFLOW */}
        <section className="mcad-section" style={{ background: 'var(--card-bg)' }}>
          <div className="mcad-workflow-layout">
            <div>
              <p className="mcad-section-label">Our Process</p>
              <h2 className="mcad-section-title">From Brief to Production Files</h2>
              <p className="mcad-section-sub" style={{ marginBottom: '2.5rem' }}>A collaborative, iterative process that keeps you in control at every stage.</p>
              {[
                { num: '01', title: 'Requirements & Brief', desc: 'Share your PCB layout, space constraints, and environmental goals. We confirm feasibility.', output: 'Project Scope Document' },
                { num: '02', title: 'Concept Sketches', desc: 'Rapid 2D concept sketches exploring design directions before full 3D modeling.', output: 'Sketch PDF for Approval' },
                { num: '03', title: '3D CAD Modeling', desc: 'Full parametric 3D model with all design intent captured and interference checking.', output: 'STEP / Native CAD File' },
                { num: '04', title: 'Design for Manufacture Review', desc: 'DFM analysis identifying potential manufacturing issues and cost-reduction opportunities.', output: 'DFM Report' },
                { num: '05', title: 'Drawing Package & Handoff', desc: 'Complete 2D drawing package with GD&T, material callouts, and native CAD archives.', output: 'Full Archive' },
              ].map((step, i, arr) => (
                <div key={i} className="mcad-wf-step">
                  <div className="mcad-wf-step-left">
                    <div className="mcad-wf-num">{step.num}</div>
                    {i < arr.length - 1 && <div className="mcad-wf-line"></div>}
                  </div>
                  <div>
                    <div className="mcad-wf-title">{step.title}</div>
                    <div className="mcad-wf-desc">{step.desc}</div>
                    <span className="mcad-wf-output">↳ {step.output}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mcad-workflow-visual">
              <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1374" alt="CAD Workflow View" />
              <div className="mcad-wv-tags">
                {['Toleranced Drawings','Interference Analysis','Revision Control','DXF Flat Patterns','Render-Ready Models','BOM Export'].map((tag, i) => (
                  <span key={i} className="mcad-wv-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FILE FORMATS */}
        <section className="mcad-formats">
          <p className="mcad-section-label">Deliverable Formats</p>
          <h2 className="mcad-section-title">We Deliver in Your Format</h2>
          <p className="mcad-section-sub" style={{ color: '#666' }}>Every project includes native CAD files plus neutral exchange formats for manufacturing.</p>
          <div className="mcad-formats-grid">
            {[
              { ext: '.STEP', name: '.IGES (Universal 3D)' },
              { ext: '.STL', name: '3D Printing Ready' },
              { ext: '.DXF', name: '.DWG (Laser Cut & 2D)' },
              { ext: '.PDF', name: 'Technical Drawings' },
              { ext: '.BOM', name: 'Material Lists' },
              { ext: '.SAT', name: 'ACIS Solid Modeling' },
            ].map((fmt, i) => (
              <div key={i} className="mcad-fmt-card">
                <div className="mcad-fmt-ext">{fmt.ext}</div>
                <div className="mcad-fmt-name">{fmt.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="mcad-section" style={{ background: 'var(--light)' }}>
          <p className="mcad-section-label">Recent Work</p>
          <h2 className="mcad-section-title">Selected Portfolio</h2>
          <p className="mcad-section-sub">A snapshot of recent mechanical design projects across industries.</p>
          <div className="mcad-port-grid">
            {[
              { industry: 'IoT Enclosuresr', title: 'Smart devices and gateway housings', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470', desc: 'DIN-rail mountable IP65 enclosure for a gateway PCB. Sheet metal finish.', tags: ['Sheet Metal','IP65','DIN Rail'] },
              { industry: 'Lab Equipment', title: 'Instrumentation and medical device cases.', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1470', desc: 'Ergonomic injection-molded housing for a portable diagnostic device.', tags: ['Injection Mold','Medical','Ergonomics'] },
              { industry: 'EV Subassemblies', title: 'Battery packs and controller mounts', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470', desc: 'Lightweight aluminum chassis with motor mounts and wiring channels.', tags: ['Aluminum','Assembly','FEA Validated'] },
            ].map((port, i) => (
              <div key={i} className="mcad-port-card">
                <img className="mcad-port-img" src={port.img} alt={port.title} />
                <div className="mcad-port-body">
                  <div className="mcad-port-industry">{port.industry}</div>
                  <h4 className="mcad-port-title">{port.title}</h4>
                  <p className="mcad-port-desc">{port.desc}</p>
                  <div className="mcad-port-tags">
                    {port.tags.map((tag, j) => <span key={j} className="mcad-port-tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mcad-cta">
          <p className="mcad-section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Start Your Project</p>
          <h2 className="mcad-section-title">Turn Your Idea Into Engineering Reality</h2>
          <p className="mcad-section-sub">Share your requirements and we'll turn it into production-ready mechanical CAD.</p>
          <div className="mcad-cta-buttons">
            <button className="mcad-btn-white">Submit Your Brief</button>
            <button className="mcad-btn-outline-white">Download Capabilities</button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}