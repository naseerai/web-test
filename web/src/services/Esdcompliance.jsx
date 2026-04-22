import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { useLang } from "../context/LanguageContext";

export default function ESDCompliance() {
  const { t } = useLang();

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Poppins:wght@400;500;600;700;800;900&display=swap');

        :root {
          --orange: #f4531c;
          --black: #111111;
          --mid: #444;
          --muted: #888;
          --light: #f7f5f2;
          --white: #ffffff;
          --border: #e8e4de;
          --card-bg: #faf9f7;
          --green: #22c55e;
          --red: #ef4444;
          --amber: #f59e0b;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'DM Sans', sans-serif; }

        /* ── HERO ── */
        .esd-hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 85vh;  margin-top: 3vh;}
        .esd-hero-left {
          background: var(--light); padding: 6rem 4% 6rem 7%;
          display: flex; flex-direction: column; justify-content: center;
          position: relative; overflow: hidden;
        }
          
        .esd-hero-left::after {
          content: 'ESD';
          position: absolute; right: -30px; bottom: -20px;
          font-family: 'Poppins', sans-serif; font-size: 14rem; font-weight: 900;
          color: rgba(244,83,28,0.05); pointer-events: none; line-height: 1; letter-spacing: -8px;
        }
        .esd-breadcrumb { display: flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--orange); margin-bottom: 2.5rem; }
        .esd-breadcrumb span { color: #aaa; }
        .esd-hero-tag { display: inline-flex; align-items: center; gap: 0.5rem; background: #fff; border: 1px solid var(--border); color: var(--mid); font-size: 0.7rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 0.4rem 1rem; border-radius: 30px; margin-bottom: 1.8rem; width: fit-content; }
        .esd-tag-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--green); }
        
        /* Changed to Poppins */
        .esd-hero-title { font-family: 'Poppins', sans-serif; font-size: clamp(2.5rem, 4vw, 3.8rem); font-weight: 800; line-height: 1.0; letter-spacing: -2px; margin-bottom: 1.5rem; }
        .esd-hero-title em { font-style: normal; -webkit-text-stroke: 2px var(--black); color: transparent; }
        
        .esd-hero-desc { font-size: 0.97rem; color: #666; line-height: 1.75; max-width: 420px; margin-bottom: 2.5rem; }
        .esd-pill-list { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 3rem; }
        .esd-pill { background: #fff; border: 1px solid var(--border); padding: 0.4rem 1rem; border-radius: 30px; font-size: 0.75rem; font-weight: 600; color: var(--mid); }
        .esd-pill-active { background: var(--orange) !important; color: #fff !important; border-color: var(--orange) !important; }
        .esd-btn-primary { background: var(--orange); color: #fff; padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 700; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 0.8px; transition: 0.2s; }
        .esd-btn-primary:hover { background: #d83e0e; transform: translateY(-2px); }
        .esd-btn-secondary { background: var(--white); color: var(--black); padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 700; border: 1.5px solid var(--border); cursor: pointer; text-transform: uppercase; letter-spacing: 0.8px; transition: 0.2s; }
        .esd-btn-secondary:hover { border-color: var(--black); }

        .esd-hero-right { background: var(--white); padding: 4rem 5%; display: flex; flex-direction: column; justify-content: center; }

        /* checklist preview */
        .esd-cp { border: 1.5px solid var(--border); border-radius: 14px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.06); }
        .esd-cp-header { background: var(--black); color: #fff; padding: 1.2rem 1.8rem; display: flex; align-items: center; justify-content: space-between; }
        
        /* Changed to Poppins */
        .esd-cp-header-title { font-family: 'Poppins', sans-serif; font-size: 0.85rem; font-weight: 700; }
        
        .esd-cp-badge { background: var(--orange); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.25rem 0.7rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px; }
        .esd-cp-progress { background: #f0ede8; padding: 1.2rem 1.8rem; border-bottom: 1px solid var(--border); }
        .esd-cp-prog-label { display: flex; justify-content: space-between; font-size: 0.72rem; font-weight: 600; color: var(--muted); margin-bottom: 0.6rem; }
        .esd-progress-bar { height: 6px; background: #ddd; border-radius: 3px; }
        .esd-progress-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--orange), #ff7846); width: 68%; }
        .esd-cp-section { padding: 0.8rem 1.8rem; }
        .esd-cp-section-title { font-size: 0.65rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); margin-bottom: 0.7rem; }
        .esd-cp-item { display: flex; align-items: center; gap: 0.8rem; padding: 0.55rem 0; border-bottom: 1px solid #f5f3f0; }
        .esd-cp-item:last-child { border-bottom: none; }
        .esd-cp-check { width: 18px; height: 18px; border-radius: 4px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 700; }
        .esd-check-pass { background: #dcfce7; color: var(--green); }
        .esd-check-fail { background: #fee2e2; color: var(--red); }
        .esd-check-warn { background: #fef9c3; color: var(--amber); }
        .esd-check-pending { background: #f3f4f6; color: #9ca3af; }
        .esd-cp-item-text { flex: 1; font-size: 0.8rem; color: var(--black); }
        .esd-cp-item-tag { font-size: 0.6rem; font-weight: 700; letter-spacing: 1px; padding: 0.2rem 0.5rem; border-radius: 3px; text-transform: uppercase; }
        .esd-tag-critical { background: #fee2e2; color: var(--red); }
        .esd-tag-advisory { background: #fef9c3; color: #b45309; }
        .esd-tag-ok { background: #dcfce7; color: #15803d; }
        .esd-cp-footer { padding: 1.2rem 1.8rem; background: #faf9f7; border-top: 1px solid var(--border); display: flex; gap: 1.5rem; }
        .esd-cp-stat { text-align: center; flex: 1; }
        
        /* Changed to Poppins */
        .esd-cp-stat-num { font-family: 'Poppins', sans-serif; font-size: 1.4rem; font-weight: 800; }
        
        .esd-cp-stat-label { font-size: 0.65rem; color: var(--muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 0.2rem; }

        /* ── SECTION BASE ── */
        .esd-section { padding: 3rem 7%; }
        .esd-section-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--orange); margin-bottom: 1rem; }
        
        /* Changed to Poppins */
        .esd-section-title { font-family: 'Poppins', sans-serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 800; letter-spacing: -1.5px; color: var(--black); line-height: 1.05; margin-bottom: 1.2rem; }
        
        .esd-section-sub { font-size: 1rem; color: var(--muted); line-height: 1.7; max-width: 580px; }

        /* ── STANDARDS ── */
        .esd-standards { background: var(--black); padding: 6rem 7%; }
        .esd-standards .esd-section-title { color: #fff; }
        .esd-standards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #1e1e1e; border-radius: 12px; overflow: hidden; margin-top: 3.5rem; }
        .esd-std-card { background: #111; padding: 2.5rem 2rem; transition: 0.3s; position: relative; }
        .esd-std-card::before { content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: transparent; transition: 0.3s; }
        .esd-std-card:hover::before { background: var(--orange); }
        
        /* Changed to Poppins */
        .esd-std-logo { font-family: 'Poppins', sans-serif; font-size: 2rem; font-weight: 800; color: var(--orange); margin-bottom: 1rem; line-height: 1; }
        
        .esd-std-full { font-size: 0.72rem; font-weight: 600; color: #555; letter-spacing: 0.5px; margin-bottom: 1.5rem; text-transform: uppercase; }
        .esd-std-title { font-size: 1rem; font-weight: 700; color: #ddd; margin-bottom: 0.8rem; }
        .esd-std-desc { font-size: 0.82rem; color: #666; line-height: 1.6; }

        /* ── IMAGE ROW ── */
        .esd-img-row-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; height: 380px; }
        .esd-img-row-grid img { width: 100%; height: 100%; object-fit: cover; border-right: 4px solid #fff; }
        .esd-img-row-grid img:last-child { border-right: none; }

        /* ── CATEGORIES ── */
        .esd-cat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-top: 3.5rem; }
        .esd-cat-card { background: var(--white); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; transition: 0.3s; }
        .esd-cat-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.07); transform: translateY(-3px); }
        .esd-cat-card-header { padding: 1.8rem 2rem 1.2rem; display: flex; align-items: flex-start; gap: 1.2rem; }
        .esd-cat-icon { width: 52px; height: 52px; border-radius: 10px; background: rgba(244,83,28,0.1); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0; }
        
        /* Changed to Poppins */
        .esd-cat-title { font-family: 'Poppins', sans-serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 0.4rem; }
        
        .esd-cat-count { font-size: 0.75rem; color: var(--muted); }
        .esd-cat-items { padding: 0 2rem 1.8rem; }
        .esd-cat-item { display: flex; align-items: center; gap: 0.8rem; padding: 0.55rem 0; border-top: 1px solid #f5f3f0; font-size: 0.83rem; color: var(--mid); }
        .esd-cat-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }

        /* ── PROCESS ── */
        .esd-process-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; margin-top: 3.5rem; }
        .esd-process-img-wrap img { width: 100%; height: 480px; border-radius: 12px; object-fit: cover; }
        .esd-process-img-tag {
          position: absolute; top: 2rem; right: -2rem;
          background: var(--orange); color: #fff;
          padding: 1.2rem 1.5rem; border-radius: 10px; text-align: center;
        }
        
        /* Changed to Poppins */
        .esd-process-img-tag-num { font-family: 'Poppins', sans-serif; font-size: 2rem; font-weight: 800; line-height: 1; }
        
        .esd-process-img-tag small { font-size: 0.65rem; font-weight: 600; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px; display: block; margin-top: 0.2rem; }
        .esd-process-step-item { display: grid; grid-template-columns: 3rem 1fr; gap: 1.2rem; padding: 1.8rem 0; border-bottom: 1px solid var(--border); }
        .esd-process-step-item:last-child { border-bottom: none; }
        
        /* Changed to Poppins */
        .esd-ps-num { font-family: 'Poppins', sans-serif; font-size: 0.8rem; font-weight: 800; color: var(--orange); padding-top: 0.15rem; }
        .esd-ps-title { font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; }
        
        .esd-ps-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }

        /* ── REPORT PREVIEW ── */
        .esd-report-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-top: 2rem; }
        .esd-report-doc { border: 1.5px solid var(--border); border-radius: 12px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.06); }
        .esd-rdoc-header { background: var(--orange); color: #fff; padding: 1.2rem 1.8rem; display: flex; align-items: center; justify-content: space-between; }
        
        /* Changed to Poppins */
        .esd-rdoc-title { font-family: 'Poppins', sans-serif; font-size: 0.85rem; font-weight: 800; }
        
        .esd-rdoc-date { font-size: 0.7rem; opacity: 0.8; }
        .esd-rdoc-body { padding: 1.5rem 1.8rem; background: #fff; }
        .esd-rdoc-row { display: flex; justify-content: space-between; align-items: center; padding: 0.65rem 0; border-bottom: 1px solid #f3f1ee; font-size: 0.82rem; }
        .esd-rdoc-row:last-child { border-bottom: none; }
        .esd-rdoc-label { color: var(--mid); font-weight: 500; }
        .esd-rdoc-status { font-size: 0.7rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 4px; }
        .esd-status-pass { background: #dcfce7; color: #15803d; }
        .esd-status-fail { background: #fee2e2; color: #dc2626; }
        .esd-status-warn { background: #fef9c3; color: #a16207; }
        .esd-rdoc-footer { background: #f7f5f2; padding: 1rem 1.8rem; display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem; color: var(--muted); }
        .esd-rf-item { display: flex; align-items: flex-start; gap: 0.8rem; margin-bottom: 1rem; }
        .esd-rf-icon { width: 36px; height: 36px; background: rgba(244,83,28,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
        .esd-rf-title { font-weight: 700; color: var(--black); font-size: 0.88rem; margin-bottom: 0.2rem; }
        .esd-rf-text { font-size: 0.85rem; color: var(--mid); line-height: 1.5; }

        /* ── CTA ── */
        .esd-cta { background: var(--black); color: #fff; text-align: center; padding: 7rem 7%; position: relative; overflow: hidden;margin-bottom: 0px; }
        .esd-cta::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 600px; height: 600px; background: radial-gradient(circle, rgba(244,83,28,0.12) 0%, transparent 70%); pointer-events: none; }
        .esd-cta .esd-section-title { color: #fff; margin: 0 auto 1.5rem; max-width: 700px; }
        .esd-cta .esd-section-sub { margin: 0 auto 3rem; color: #666; }
        .esd-cta-buttons { display: flex; gap: 1rem; justify-content: center; }
        .esd-btn-ghost { background: transparent; color: #ccc; padding: 0.9rem 2rem; border-radius: 7px; font-size: 0.8rem; font-weight: 600; border: 1px solid #333; cursor: pointer; text-transform: uppercase; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
  .esd-hero { 
    grid-template-columns: 1fr; 
    margin-top: -1vh; /* Tightened gap from header */
    min-height: auto; 
  }          .esd-hero-right { padding: 3rem 5%; }
          .esd-section { padding: 4rem 5%; }
          .esd-standards { padding: 4rem 5%; }
          .esd-standards-grid { grid-template-columns: 1fr; }
          .esd-img-row-grid { grid-template-columns: 1fr; height: auto; }
          .esd-img-row-grid img { height: 250px; border-right: none; border-bottom: 4px solid #fff; }
          .esd-cat-grid { grid-template-columns: 1fr; }
          .esd-process-grid { grid-template-columns: 1fr; }
          .esd-process-img-tag { right: 1rem; }
          .esd-report-layout { grid-template-columns: 1fr; }
          .esd-cta { padding: 4rem 5%; }
          .esd-cta-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>

      <Header />

      {/* HERO */}
      <div className="esd-hero">
        <div className="esd-hero-left">
          <div className="esd-breadcrumb">Services <span>›</span> EMI/EMC Pre-Compliance</div>
          <span className="esd-hero-tag"><span className="esd-tag-dot"></span> Active Compliance Program</span>
          <h1 className="esd-hero-title">ESD<br /><em>Compliance</em><br />Checklist</h1>
          <p className="esd-hero-desc">Avoid costly failures at the certification lab. We provide early-stage testing for Conducted & Radiated Emissions, ESD, Surge, and Immunity to ensure your hardware is market-ready.</p>
          <div className="esd-pill-list">
            {['CISPR 32','FCC Part 15','IEC 61000-4','EN 55035'].map((p, i) => (
              <span key={i} className={`esd-pill${i === 0 ? ' esd-pill-active' : ''}`}>{p}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="esd-btn-primary">↓ Download Checklist</button>
            <button className="esd-btn-secondary">Request Audit</button>
          </div>
        </div>
        <div className="esd-hero-right">
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.2rem' }}>LIVE CHECKLIST PREVIEW</p>
          <div className="esd-cp">
            <div className="esd-cp-header">
              <span className="esd-cp-header-title">ESD Compliance Assessment — Rev 3.1</span>
              <span className="esd-cp-badge">In Progress</span>
            </div>
            <div className="esd-cp-progress">
              <div className="esd-cp-prog-label"><span>Overall Completion</span><span>68% — 34 of 50 items</span></div>
              <div className="esd-progress-bar"><div className="esd-progress-fill"></div></div>
            </div>
            <div className="esd-cp-section">
              <div className="esd-cp-section-title">Zone & Facility Controls</div>
              {[
                { check: '✓', cls: 'esd-check-pass', text: 'Conducted Emissions (LISN) - 150kHz to 30MHz', tag: 'Pass', tagCls: 'esd-tag-ok' },
                { check: '✓', cls: 'esd-check-pass', text: 'Radiated Emissions - 30MHz to 1GHz (Vertical)', tag: 'Warn (3dB Margin)', tagCls: 'esd-tag-ok' },
                { check: '✗', cls: 'esd-check-fail', text: 'ESD Immunity - ±8kV Air Discharge', tag: 'Critical (Reset Observed)', tagCls: 'esd-tag-critical' },
                { check: '!', cls: 'esd-check-warn', text: 'Surge Immunity - 1kV Differential Mode', tag: 'Pass', tagCls: 'esd-tag-advisory' },
              ].map((item, i) => (
                <div key={i} className="esd-cp-item">
                  <div className={`esd-cp-check ${item.cls}`}>{item.check}</div>
                  <span className="esd-cp-item-text">{item.text}</span>
                  <span className={`esd-cp-item-tag ${item.tagCls}`}>{item.tag}</span>
                </div>
              ))}
            </div>
            <div className="esd-cp-section">
              <div className="esd-cp-section-title">Personnel Grounding</div>
              {[
                { check: '✓', cls: 'esd-check-pass', text: 'Wrist strap tester verified at workstation entry', tag: 'Pass', tagCls: 'esd-tag-ok' },
                { check: '✓', cls: 'esd-check-pass', text: 'ESD footwear tested < 35MΩ resistance', tag: 'Pass', tagCls: 'esd-tag-ok' },
                { check: '—', cls: 'esd-check-pending', text: 'Garment body voltage test logged per shift', tag: 'Pending', tagCls: '' },
              ].map((item, i) => (
                <div key={i} className="esd-cp-item">
                  <div className={`esd-cp-check ${item.cls}`}>{item.check}</div>
                  <span className="esd-cp-item-text">{item.text}</span>
                  <span className="esd-cp-item-tag" style={{ background: '#f3f4f6', color: '#9ca3af' }}>{item.tag}</span>
                </div>
              ))}
            </div>
            <div className="esd-cp-footer">
              {[
                { num: '27', color: 'var(--green)', label: 'Passed' },
                { num: '4', color: 'var(--red)', label: 'Failed' },
                { num: '3', color: 'var(--amber)', label: 'Advisory' },
                { num: '16', color: '#9ca3af', label: 'Pending' },
              ].map((s, i) => (
                <div key={i} className="esd-cp-stat">
                  <div className="esd-cp-stat-num" style={{ color: s.color }}>{s.num}</div>
                  <div className="esd-cp-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STANDARDS */}
      <section className="esd-standards">
        <p className="esd-section-label">Compliance Standards</p>
        <h2 className="esd-section-title">We Audit Against Global ESD Standards</h2>
        <div className="esd-standards-grid">
          {[
            { logo: 'CISPR\n32/35', full: 'Multimedia Equipment Compliance', title: 'Emissions & Immunity Standards', desc: 'The gold standard for IT and multimedia gear. We test conducted/radiated emissions and ensure your device handles external interference.' },
            { logo: 'IEC\n61000', full: 'International Electrotechnical Commission', title: 'Industrial & Residential Immunity', desc: 'Covers the "Big 4": ESD (4-2), EFT/Burst (4-4), Surge (4-5), and Conducted Immunity (4-6). Essential for CE marking.' },
            { logo: 'FCC\nPART 15', full: 'Federal Communications Commission', title: 'US Radio Frequency Requirements', desc: 'Mandatory for products sold in the USA. We verify your digital circuitry doesn’t exceed unintentional radiation limits.' },
          ].map((std, i) => (
            <div key={i} className="esd-std-card">
              <div className="esd-std-logo" style={{ whiteSpace: 'pre-line' }}>{std.logo}</div>
              <div className="esd-std-full">{std.full}</div>
              <div className="esd-std-title">{std.title}</div>
              <div className="esd-std-desc">{std.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE ROW */}
      <div className="esd-img-row-grid">
        <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Workstation Setup" />
        <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80" alt="ESD Testing" />
        <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800" alt="Clean Room Facility" />
      </div>

      {/* CATEGORIES */}
      <section className="esd-section" style={{ background: 'var(--light)' }}>
        <p className="esd-section-label">Checklist Scope</p>
        <h2 className="esd-section-title">50-Point Compliance Checklist Categories</h2>
        <p className="esd-section-sub">Every checklist item is mapped to a specific standard clause, making it easy to demonstrate compliance to customers and auditors.</p>
        <div className="esd-cat-grid">
          {[
          { 
    icon: '📡', title: 'Emission Testing', count: 'Radiated & Conducted', 
    items: ['Radiated Emissions (30MHz - 6GHz)','Conducted Emissions via LISN','Harmonics and Flicker (61000-3-2)','Spectrum Analysis for Peak/QP/Avg'] 
  },
  { 
    icon: '⚡', title: 'Transient Immunity', count: 'High Voltage Simulation', 
    items: ['ESD (Contact ±8kV / Air ±15kV)','EFT / Burst (Power & I/O lines)','Surge (Lightning/Switching)','Voltage Dips & Interruptions'] 
  },
  { 
    icon: '📶', title: 'RF Immunity', count: 'Signal Interference', 
    items: ['Radiated RF Immunity (80MHz - 1GHz+)','Conducted RF Immunity (150kHz - 80MHz)','Magnetic Field Immunity','RF Shielding Effectiveness'] 
  },
  { 
    icon: '📋', title: 'Documentation & Fixes', count: 'Reporting', 
    items: ['Raw Data & Peak Table Screenshots','Annotated Test Observations','Risk Assessment & Fail Root Cause','EMI Mitigation Recommendations'] 
  },
          ].map((cat, i) => (
            <div key={i} className="esd-cat-card">
              <div className="esd-cat-card-header">
                <div className="esd-cat-icon">{cat.icon}</div>
                <div>
                  <div className="esd-cat-title">{cat.title}</div>
                  <div className="esd-cat-count">{cat.count}</div>
                </div>
              </div>
              <div className="esd-cat-items">
                {cat.items.map((item, j) => (
                  <div key={j} className="esd-cat-item"><span className="esd-cat-dot"></span>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="esd-section" style={{ background: '#fff' }}>
        <div className="esd-process-grid">
          <div style={{ position: 'relative' }} className="esd-process-img-wrap">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Audit in Progress" />
            <div className="esd-process-img-tag">
              <div className="esd-process-img-tag-num">50+</div>
              <small>Check Points</small>
            </div>
          </div>
          <div>
            <p className="esd-section-label">Audit Process</p>
            <h2 className="esd-section-title">How the ESD Audit Works</h2>
            <p className="esd-section-sub" style={{ marginBottom: '2.5rem' }}>A thorough on-site or documentation-based review that leaves no compliance gap unidentified.</p>
            {[
              { num: '01', title: 'EUT Setup', desc: 'Configure the Device Under Test (DUT) with cables, grounding, and operational firmware.' },
              { num: '02', title: 'Baseline Scan', desc: ' Initial peak detection scan to identify "hot" frequencies and transient sensitivities.' },
              { num: '03', title: 'Formal Pre-Scan', desc: 'Full sweep against Limit Lines (CISPR/FCC) using Quasi-Peak and Average detectors.' },
              { num: '04', title: 'Mitigation (If Failed)', desc: 'On-the-spot troubleshooting using ferrites, capacitors, or shielding changes.' },
              { num: '05', title: 'Final Summary', desc: 'Delivery of the Pre-Compliance Report with "Safe to Certify" confidence levels.' },
            ].map((step, i) => (
              <div key={i} className="esd-process-step-item">
                <div className="esd-ps-num">{step.num}</div>
                <div>
                  <div className="esd-ps-title">{step.title}</div>
                  <div className="esd-ps-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORT PREVIEW */}
      <section className="esd-section" style={{ background: 'var(--card-bg)' }}>
        <div className="esd-report-layout">
          <div>
            <p className="esd-section-label">What You Receive</p>
            <h2 className="esd-section-title">Structured Compliance Report</h2>
            <p className="esd-section-sub" style={{ marginBottom: '2rem' }}>A professional, auditable report your team and customers can rely on.</p>
            {[
              { icon: '📄', title: 'Standard-Referenced Findings', text: 'Every non-conformance mapped to the exact clause in IEC 61340 or ANSI/ESD S20.20.' },
              { icon: '📸', title: 'Photo Evidence', text: 'Annotated photographs documenting each finding — critical for root cause and closure verification.' },
              { icon: '✅', title: 'Corrective Action Plan', text: 'Prioritized action items with recommended solutions, responsible owners, and target closure dates.' },
            ].map((rf, i) => (
              <div key={i} className="esd-rf-item">
                <div className="esd-rf-icon">{rf.icon}</div>
                <div>
                  <div className="esd-rf-title">{rf.title}</div>
                  <div className="esd-rf-text">{rf.text}</div>
                </div>
              </div>
            ))}
            <button className="esd-btn-primary" style={{ marginTop: '1.5rem' }}>Request Full Sample Report</button>
          </div>
          <div className="esd-report-doc">
            <div className="esd-rdoc-header">
              <span className="esd-rdoc-title">ESD COMPLIANCE AUDIT REPORT</span>
              <span className="esd-rdoc-date">March 2026</span>
            </div>
            <div className="esd-rdoc-body">
              {[
                { label: 'Conducted Emissions (L1)', status: 'PASS — 6dB Margin', cls: 'esd-status-pass' },
                { label: 'Radiated (30-300MHz)', status: 'WARN — 1.2dB Margin', cls: 'esd-status-pass' },
                { label: 'ESD (Contact 4kV)', status: 'FAIL — System Reboot', cls: 'esd-status-fail' },
                { label: 'EFT (Power Line 1kV)', status: 'PASS — No Effect', cls: 'esd-status-pass' },
                { label: 'Surge (Line-to-Line)', status: 'PASS — Resettable Fuse OK', cls: 'esd-status-warn' },
                { label: 'ESD packaging at receiving', status: 'PASS — SOP followed', cls: 'esd-status-pass' },
                { label: 'Training records current', status: 'PASS — All staff', cls: 'esd-status-pass' },
                { label: 'Insulator control in EPA', status: 'FAIL — 2 violations', cls: 'esd-status-fail' },
              ].map((row, i) => (
                <div key={i} className="esd-rdoc-row">
                  <span className="esd-rdoc-label">{row.label}</span>
                  <span className={`esd-rdoc-status ${row.cls}`}>{row.status}</span>
                </div>
              ))}
            </div>
            <div className="esd-rdoc-footer">
              <span>MYACCESS ESD Services · Rev 3.1</span>
              <span>Certified ESD Specialist</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="esd-cta">
        <p className="esd-section-label" style={{ color: 'var(--orange)' }}>Get Compliant</p>
        <h2 className="esd-section-title">Ready to Achieve ESD Compliance?</h2>
        <p className="esd-section-sub">Download our free 50-point ESD checklist or schedule a full on-site audit with one of our certified ESD specialists.</p>
        <div className="esd-cta-buttons">
          <button className="esd-btn-primary">↓ Free Checklist Download</button>
          <button className="esd-btn-ghost">Schedule Audit</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}