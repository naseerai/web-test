import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { useLang } from "../context/LanguageContext";

export default function TestingDebugging() {
  const { t } = useLang();

  return (
    <div className="td-page-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');

        :root {
          --orange: #f4531c;
          --black: #111111;
          --dark: #1a1a1a;
          --mid: #444;
          --muted: #888;
          --light: #f7f5f2;
          --white: #ffffff;
          --border: #e8e4de;
          --card-bg: #faf9f7;
          --heading-font: 'Poppins', sans-serif;
          --body-font: 'Poppins', sans-serif;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        
        body { 
          font-family: var(--body-font); 
          background-color: #fff; 
        }

        /* ── GAP FIX ── */
        .td-page-container {
          padding-top: 90px; 
        }

        /* ── NEW MODERN HERO ── */
        .td-hero { 
          display: flex;
          align-items: center;
          min-height: 80vh; 
          width: 100%; 
          background: var(--black);
          position: relative;
          overflow: hidden;
          padding: 1rem 5%;
        }

        .td-hero-content {
          flex: 1;
          z-index: 2;
          max-width: 650px;
        }

        .td-hero-visual {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 100%;
        }

        .td-hero-bg-glow {
          position: absolute;
          top: 50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(244,83,28,0.15) 0%, transparent 70%);
          transform: translateY(-50%);
          pointer-events: none;
        }

        .td-breadcrumb { display: flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--orange); margin-bottom: 2rem; }
        .td-breadcrumb span { color: #555; }
        
        .td-hero-title { 
          font-family: var(--heading-font); 
          font-size: clamp(3rem, 5vw, 4.5rem); 
          font-weight: 800; 
          line-height: 1; 
          letter-spacing: -2px; 
          margin-bottom: 2rem; 
          color: #fff;
        }
        .td-hero-title em { font-style: normal; color: var(--orange); }
        
        .td-hero-desc { font-size: 1.1rem; color: #aaa; line-height: 1.8; max-width: 500px; margin-bottom: 3rem; font-weight: 300; }
        
        .td-hero-actions { display: flex; gap: 1.2rem; align-items: center; }
        .td-btn-primary { background: var(--orange); color: #fff; padding: 1.1rem 2.5rem; border-radius: 4px; font-size: 0.85rem; font-weight: 700; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: 0.3s; }
        .td-btn-primary:hover { background: #d83e0e; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(244,83,28,0.2); }
        .td-btn-ghost { background: transparent; color: #fff; padding: 1.1rem 2rem; border-radius: 4px; font-size: 0.85rem; font-weight: 600; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: 0.3s; }
        .td-btn-ghost:hover { border-color: var(--orange); color: var(--orange); }

        .td-hero-main-img {
          width: 85%;
          height: 550px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          position: relative;
          z-index: 1;
        }

        .td-hero-floating-card {
          position: absolute;
          bottom: -20px;
          left: 0;
          background: var(--orange);
          color: #fff;
          padding: 2rem;
          border-radius: 15px;
          z-index: 3;
          box-shadow: 0 20px 40px rgba(244,83,28,0.3);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          min-width: 280px;
        }

        .td-hero-stat-item {
          display: flex;
          flex-direction: column;
        }
        .td-hero-stat-num { font-size: 2rem; font-weight: 800; line-height: 1; }
        .td-hero-stat-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9; margin-top: 5px; font-weight: 600; }

        /* ── MARQUEE ── */
        .td-marquee-bar { background: var(--black); color: #f4531c; padding: 0.75rem 0; overflow: hidden; white-space: nowrap; }
        .td-marquee-track { display: inline-block; animation: tdMarquee 22s linear infinite; }
        .td-marquee-track span { font-size: 0.72rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 0 2.5rem; opacity: 0.85; }
        .td-marquee-track span.dot { opacity: 0.4; padding: 0 1rem; }
        @keyframes tdMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* ── SHARED SECTION ── */
        .td-section { padding: 3.5rem 7%; }
        .td-section-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--orange); margin-bottom: 1rem; }
        .td-section-title { font-family: var(--heading-font); font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 700; letter-spacing: -1px; color: var(--black); line-height: 1.1; margin-bottom: 1.2rem; }
        .td-section-sub { font-size: 1rem; color: var(--muted); line-height: 1.7; max-width: 580px; }

        /* ── OVERVIEW ── */
        .td-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .td-overview-img-wrap { position: relative; }
        .td-overview-img-wrap img { width: 100%; border-radius: 1rem; display: block; }
        .td-overview-accent {
          position: absolute; bottom: -1.5rem; right: -1.5rem;
          background: var(--orange); color: #fff;
          padding: 1.5rem 2rem; border-radius: 10px;
          font-family: var(--heading-font); font-size: 1.8rem; font-weight: 700; line-height: 1.1; min-width: 160px;
        }
        .td-overview-accent small { display: block; font-family: var(--body-font); font-size: 0.7rem; font-weight: 600; letter-spacing: 1px; opacity: 0.8; margin-top: 0.3rem; text-transform: uppercase; }
        .td-check-list { list-style: none; margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1.1rem; }
        .td-check-list li { display: flex; align-items: flex-start; gap: 0.9rem; font-size: 0.92rem; color: var(--mid); line-height: 1.5; }
        .td-check-icon { min-width: 20px; height: 20px; background: var(--orange); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: #fff; font-size: 0.65rem; font-weight: 700; margin-top: 1px; flex-shrink: 0; }

        /* ── CAPABILITIES ── */
        .td-cap-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; }
        .td-cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: var(--border); border-radius: 12px; overflow: hidden; }
        .td-cap-card { background: var(--white); padding: 2.5rem 2rem; transition: 0.3s; }
        .td-cap-card:hover { background: var(--black); }
        .td-cap-card:hover .td-cap-title { color: #fff; }
        .td-cap-card:hover .td-cap-desc { color: #888; }
        .td-cap-card:hover .td-cap-num { color: rgba(244,83,28,0.3); }
        .td-cap-num { font-family: var(--heading-font); font-size: 3.5rem; font-weight: 700; color: var(--light); line-height: 1; margin-bottom: 1.5rem; transition: 0.3s; }
        .td-cap-title { font-family: var(--heading-font); font-size: 1.05rem; font-weight: 700; margin-bottom: 0.8rem; transition: 0.3s; }
        .td-cap-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.6; transition: 0.3s; }
        .td-cap-accent { background: var(--orange) !important; }
        .td-cap-accent .td-cap-num, .td-cap-accent .td-cap-title, .td-cap-accent .td-cap-desc { color: #fff !important; }
        .td-cap-accent .td-cap-desc { opacity: 0.8; }

        /* ── IMAGE FEATURE ── */
        .td-img-feature-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 2px; border-radius: 14px; overflow: hidden; height: 560px; }
        .td-img-feature-main { position: relative; }
        .td-img-feature-main img { width: 100%; height: 100%; object-fit: cover; }
        .td-img-main-overlay {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.85));
          padding: 2.5rem 2rem; color: #fff;
        }
        .td-img-main-overlay h3 { font-family: var(--heading-font); font-size: 1.4rem; font-weight: 700; }
        .td-img-main-overlay p { font-size: 0.82rem; color: #bbb; margin-top: 0.4rem; }
        .td-img-feature-side { display: grid; grid-template-rows: 1fr 1fr; gap: 2px; }
        .td-img-feature-side img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ── PROCESS ── */
        .td-process-timeline { margin-top: 4rem; display: flex; gap: 0; position: relative; }
        .td-process-timeline::before { content: ''; position: absolute; top: 2rem; left: 0; right: 0; height: 2px; background: var(--border); }
        .td-process-step { flex: 1; position: relative; padding-right: 2rem; }
        .td-step-dot { width: 4rem; height: 4rem; border-radius: 50%; background: var(--white); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: var(--heading-font); font-size: 0.85rem; font-weight: 700; color: var(--muted); margin-bottom: 2rem; position: relative; z-index: 1; transition: 0.3s; }
        .td-process-step:hover .td-step-dot { background: var(--orange); border-color: var(--orange); color: #fff; }
        .td-step-title { font-family: var(--heading-font); font-size: 0.95rem; font-weight: 700; margin-bottom: 0.6rem; }
        .td-step-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }

        /* ── TOOLS ── */
        .td-tools-section { background: var(--black); color: #fff; padding: 3.5rem 7%; }
        .td-tools-section .td-section-title { color: #fff; }
        .td-tools-section .td-section-sub { color: #777; }
        .td-tools-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: #222; border-radius: 12px; overflow: hidden; margin-top: 3.5rem; }
        .td-tool-card { background: #111; padding: 2rem 1.5rem; transition: 0.3s; }
        .td-tool-card:hover { background: #1a1a1a; }
        .td-tool-icon { font-size: 2rem; margin-bottom: 1.2rem; }
        .td-tool-name { font-size: 0.88rem; font-weight: 700; color: #ddd; margin-bottom: 0.5rem; }
        .td-tool-desc { font-size: 0.77rem; color: #555; line-height: 1.5; }
        .td-tool-tag { display: inline-block; margin-top: 1rem; font-size: 0.65rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--orange); border: 1px solid rgba(244,83,28,0.3); padding: 0.25rem 0.6rem; border-radius: 4px; }

        /* ── DELIVERABLES ── */
        .td-del-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-top: 3.5rem; }
        .td-del-card { border: 1px solid var(--border); border-radius: 10px; padding: 2rem; transition: 0.3s; }
        .td-del-card:hover { border-color: var(--orange); box-shadow: 0 4px 20px rgba(244,83,28,0.08); }
        .td-del-card-head { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
        .td-del-icon { width: 44px; height: 44px; background: var(--light); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
        .td-del-title { font-family: var(--heading-font); font-size: 0.95rem; font-weight: 700; }
        .td-del-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.6; }

        /* ── CTA ── */
        .td-cta { 
          background: var(--black); color: #fff; text-align: center; 
          padding: 7rem 7%; position: relative; overflow: hidden; 
        }
        .td-cta::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 600px; background: radial-gradient(circle, rgba(244,83,28,0.12) 0%, transparent 70%); pointer-events: none; }
        .td-cta .td-section-title { color: #fff; margin: 0 auto 1.5rem; max-width: 700px; }
        .td-cta .td-section-sub { margin: 0 auto 3rem; color: #666; }
        .td-cta-buttons { display: flex; gap: 1rem; justify-content: center; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .td-hero { flex-direction: column; padding-top: 3rem; text-align: center; gap: 4rem; }
          .td-hero-content { max-width: 100%; display: flex; flex-direction: column; align-items: center; }
 .td-hero-visual {
    display: none !important;
  }          .td-hero-main-img { width: 100%; height: 400px; }
          .td-hero-floating-card { position: relative; bottom: 0; left: 0; margin-top: -50px; width: 90%; }
          .td-hero-stat-item { flex-direction: row; justify-content: space-between; align-items: center; }
          .td-overview-grid { grid-template-columns: 1fr; gap: 3rem; }
          .td-cap-grid { grid-template-columns: 1fr; }
          .td-tools-grid { grid-template-columns: repeat(2, 1fr); }
          .td-process-timeline { flex-direction: column; }
          .td-process-timeline::before { display: none; }
        }
          /* 1. Prevent the whole page from scrolling horizontally */
.td-page-container {
  padding-top: 60px;
  overflow-x: hidden; /* Add this */
  width: 100%;        /* Add this */
}

/* 2. Update the Deliverables Grid responsive behavior */
@media (max-width: 768px) {
  .td-del-grid {
    grid-template-columns: 1fr !important; /* Force single column */
    gap: 1rem;
    width: 100%;
  }

  .td-del-card {
    padding: 1.5rem; /* Slightly less padding on mobile */
    margin: 0;
    width: 100%;
    box-sizing: border-box; /* Ensures padding doesn't increase width */
  }

  .td-section {
    padding: 3rem 5% !important; /* Ensure consistent side margins */
  }
}
  .td-overview-accent {
    right: 1rem !important;  /* Changed from -1.5rem to 1rem */
    bottom: 1rem !important; /* Changed from -1.5rem to 1rem */
    padding: 1rem 1.5rem !important;
    font-size: 1.4rem !important;
    min-width: 120px !important;
  }
    .td-section {
    padding: 2.5rem 5% !important; /* Reduced from 3rem or 6rem */
  }
      `}</style>

      <Header />

      {/* NEW HERO SECTION */}
      <section className="td-hero">
        <div className="td-hero-bg-glow"></div>
        
        <div className="td-hero-content">
          <div className="td-breadcrumb">
            Services <span>›</span> Testing & Debugging
          </div>
          <h1 className="td-hero-title">
            Precision Testing.<br />
            Flawless <em>Execution.</em>
          </h1>
          <p className="td-hero-desc">
            We provide world-class hardware validation and deep-level debugging. From signal integrity to environmental stress, we ensure your hardware is market-ready.
          </p>
          <div className="td-hero-actions">
            <button className="td-btn-primary">Start a Project</button>
            <button className="td-btn-ghost">Our Process</button>
          </div>
        </div>

        <div className="td-hero-visual">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" 
            alt="Hardware Testing" 
            className="td-hero-main-img"
          />
          <div className="td-hero-floating-card">
            <div className="td-hero-stat-item">
              <span className="td-hero-stat-num">98.4%</span>
              <span className="td-hero-stat-label">Detection Rate</span>
            </div>
            <div style={{height: '1px', background: 'rgba(255,255,255,0.2)'}}></div>
            <div className="td-hero-stat-item">
              <span className="td-hero-stat-num">500+</span>
              <span className="td-hero-stat-label">Projects Certified</span>
            </div>
            <div style={{height: '1px', background: 'rgba(255,255,255,0.2)'}}></div>
            <div className="td-hero-stat-item">
              <span className="td-hero-stat-num">ISO</span>
              <span className="td-hero-stat-label">9001 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="td-marquee-bar">
        <div className="td-marquee-track">
          {['Functional Testing','Signal Integrity','Firmware Debugging','Boundary Scan','In-Circuit Testing','EMI/EMC Analysis','Stress Testing','Failure Analysis',
            'Functional Testing','Signal Integrity','Firmware Debugging','Boundary Scan','In-Circuit Testing','EMI/EMC Analysis','Stress Testing','Failure Analysis'].map((item, i) => (
            <span key={i}>{item}<span className="dot"> ◆ </span></span>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="td-section" style={{ background: '#fff' }}>
        <div className="td-overview-grid">
          <div className="td-overview-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
              alt="Hardware Testing Lab"
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '1rem', display: 'block' }}
            />
            <div className="td-overview-accent">500+<br /><small>Boards Tested</small></div>
          </div>
          <div>
            <p className="td-section-label">What We Do</p>
            <h2 className="td-section-title">End-to-End Hardware Validation</h2>
            <p className="td-section-sub">From bare-board inspection to full system functional testing, our engineers use industry-grade tools to ensure your product performs reliably.</p>
            <ul className="td-check-list">
              {[
                'Automated optical inspection (AOI) for solder joint quality and component placement',
                'In-circuit testing (ICT) to verify component values and board connectivity',
                'Functional testing against your exact product specifications',
                'Firmware flashing, validation, and regression testing pipelines',
                'Boundary scan (JTAG) for high-density BGA and complex PCB designs',
                'Real-time oscilloscope and logic analyzer debugging for signal-level issues',
              ].map((item, i) => (
                <li key={i}><span className="td-check-icon">✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="td-section" style={{ background: 'var(--card-bg)' }}>
        <div className="td-cap-header">
          <div>
            <p className="td-section-label">Core Capabilities</p>
            <h2 className="td-section-title">What Our Lab Covers</h2>
          </div>
        </div>
        <div className="td-cap-grid">
          {[
            { num: '01', title: 'Functional Testing', desc: 'Full-board functional validation against design specs. Power-up sequencing, I/O verification, communication protocol checks (I2C, SPI, UART, USB).', accent: true },
            { num: '02', title: 'Signal Debugging', desc: 'Deep-dive waveform analysis using digital oscilloscopes and logic analyzers. Identify noise, glitches, timing violations, and crosstalk.' },
            { num: '03', title: 'Firmware Validation', desc: 'JTAG/SWD-based firmware flashing and debugging. Unit test execution, boundary condition testing, and OTA update validation.' },
            { num: '04', title: 'Environmental Stress', desc: 'Thermal cycling, humidity exposure, and vibration testing. Verify product robustness under worst-case operating conditions.' },
            { num: '05', title: 'In-Circuit Testing', desc: 'Bed-of-nails ICT fixture testing for high-volume boards. Fast, repeatable verification of component population and values.' },
            { num: '06', title: 'Failure Analysis', desc: 'Root cause investigation for field returns and production rejects. Detailed reports with corrective action recommendations.' },
          ].map((cap, i) => (
            <div key={i} className={`td-cap-card${cap.accent ? ' td-cap-accent' : ''}`}>
              <div className="td-cap-num">{cap.num}</div>
              <div className="td-cap-title">{cap.title}</div>
              <div className="td-cap-desc">{cap.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE FEATURE */}
      <div style={{ background: 'var(--light)', overflow: 'hidden' }}>
        <div className="td-img-feature-grid">
          <div className="td-img-feature-main">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80"
              alt="Engineers at Test Station"
              style={{ width: '100%', height: '100%', minHeight: '560px', objectFit: 'cover', display: 'block' }}
            />
            <div className="td-img-main-overlay">
              <h3>State-of-the-Art Test Lab</h3>
              <p>Over 50 instruments and 3 dedicated test benches</p>
            </div>
          </div>
          <div className="td-img-feature-side">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
              alt="Oscilloscope Waveform"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <img
              src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80"
              alt="PCB Under Inspection"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <section className="td-section" style={{ background: '#fff' }}>
        <p className="td-section-label">How It Works</p>
        <h2 className="td-section-title">Our Testing Process</h2>
        <p className="td-section-sub">A structured approach that ensures nothing slips through the cracks — from brief to final report.</p>
        <div className="td-process-timeline">
          {[
            { num: '01', title: 'Requirements Intake', desc: 'Submit your design files, BOM, and test requirements. We review and confirm scope within 24 hours.' },
            { num: '02', title: 'Test Plan Design', desc: 'Engineers create a tailored test strategy covering all functional blocks and known risk areas.' },
            { num: '03', title: 'Fixture & Setup', desc: 'Test fixtures, jigs, and software scripts are developed and validated before production testing begins.' },
            { num: '04', title: 'Execution', desc: 'Systematic testing against the plan with real-time logging. Anomalies flagged and escalated immediately.' },
            { num: '05', title: 'Report & Debrief', desc: 'Detailed test report with pass/fail data, defect analysis, and recommendations for resolution.' },
          ].map((step, i) => (
            <div key={i} className="td-process-step">
              <div className="td-step-dot">{step.num}</div>
              <h4 className="td-step-title">{step.title}</h4>
              <p className="td-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="td-tools-section">
        <p className="td-section-label">Equipment & Tools</p>
        <h2 className="td-section-title">Our Instrument Arsenal</h2>
        <p className="td-section-sub">Professional-grade equipment used by engineers worldwide.</p>
        <div className="td-tools-grid">
          {[
            { icon: '📡', name: 'Digital Oscilloscopes', desc: '4-channel, 500 MHz bandwidth for high-speed signal analysis', tag: 'Signal' },
            { icon: '🔌', name: 'Logic Analyzers', desc: '32-channel protocol-aware analyzers for digital bus debugging', tag: 'Digital' },
            { icon: '🔍', name: 'AOI Systems', desc: 'Automated optical inspection for solder quality and placement accuracy', tag: 'Inspection' },
            { icon: '⚡', name: 'Programmable PSU', desc: 'Multi-channel programmable power supplies for controlled power testing', tag: 'Power' },
            { icon: '🌡️', name: 'Thermal Camera', desc: 'IR thermal imaging for hotspot detection and thermal profiling', tag: 'Thermal' },
            { icon: '💻', name: 'JTAG Debuggers', desc: 'Full suite of JTAG/SWD probes for embedded firmware debugging', tag: 'Firmware' },
            { icon: '📊', name: 'LCR Meters', desc: 'Precision component measurement — inductance, capacitance, resistance', tag: 'Measurement' },
            { icon: '🛡️', name: 'ICT Fixtures', desc: 'Custom bed-of-nails fixtures for high-volume in-circuit testing', tag: 'Production' },
          ].map((tool, i) => (
            <div key={i} className="td-tool-card">
              <div className="td-tool-icon">{tool.icon}</div>
              <div className="td-tool-name">{tool.name}</div>
              <div className="td-tool-desc">{tool.desc}</div>
              <span className="td-tool-tag">{tool.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="td-section" style={{ background: '#fff' }}>
        <p className="td-section-label">What You Receive</p>
        <h2 className="td-section-title">Testing Deliverables</h2>
        <p className="td-section-sub">Every engagement produces comprehensive, actionable documentation your team can act on immediately.</p>
        <div className="td-del-grid">
          {[
            { icon: '📋', title: 'Test Execution Report', desc: 'Complete pass/fail results for every test case, with waveform captures, screenshots, and measurement logs. Traceable to requirements.' },
            { icon: '🔎', title: 'Defect Analysis Report', desc: 'Root cause identification for each failure, with annotated images, hypothesis chain, and corrective action recommendations.' },
            { icon: '📈', title: 'Yield & Trend Data', desc: 'Statistical analysis of pass rates across batches. Identify systematic issues before they scale into costly production problems.' },
            { icon: '🛠️', title: 'Rework Recommendations', desc: 'Clear repair procedures for failed boards, prioritized by effort vs. impact. Optional rework service available in-house.' },
          ].map((del, i) => (
            <div key={i} className="td-del-card">
              <div className="td-del-card-head">
                <div className="td-del-icon">{del.icon}</div>
                <h4 className="td-del-title">{del.title}</h4>
              </div>
              <p className="td-del-desc">{del.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="td-cta">
        <p className="td-section-label" style={{ color: 'var(--orange)' }}>Ready to Proceed?</p>
        <h2 className="td-section-title">Start Testing Your Product Today</h2>
        <p className="td-section-sub">Send us your design files and we'll respond with a testing plan and quote within 24 hours.</p>
        <div className="td-cta-buttons">
          <button className="td-btn-primary">Submit Test Request</button>
          <button className="td-btn-ghost">Download Capabilities Deck</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}