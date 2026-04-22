import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/Footer";
import { 
  Briefcase, Handshake, ShieldCheck, 
  Rocket, PenTool, Lock, GitBranch, CheckCircle2 
} from "lucide-react";

export default function CollaborationModel() {
  const [activeModel, setActiveModel] = useState(0);

  const models = [
    {
      id: "Model 01",
      title: "Managed R&D & Prototyping",
      subtitle: "For Startups & Innovation Labs",
      desc: "This model is designed for high-risk, high-reward innovations where technical feasibility is the primary hurdle. We function as your offshore engineering department, taking concepts from a napkin sketch to a field-ready functional prototype.",
      features: [
        "Component Feasibility Analysis",
        "Multi-layer PCB Schematic Design",
        "Rapid Hardware Iteration (SLA/FDM)",
        "Firmware Alpha/Beta Development",
        "Sensor Fusion Optimization",
        "Initial Lab Validation"
      ],
      deliverables: [
        "Full Gerber & Design Files",
        "Source Code (Git Access)",
        "Validated Functional Prototype",
        "BOM Optimization Report"
      ],
    },
    {
      id: "Model 02",
      title: "Production & Scale Partner",
      subtitle: "For Established Enterprises",
      desc: "Designed for clients who have a validated design but require professional manufacturing oversight. We optimize architecture for DFM to increase yield and reduce per-unit costs.",
      features: [
        "Supply Chain Hardening",
        "Custom QC Testing Rig Design",
        "Injection Molding Management",
        "Batch Production Cycles",
        "ISO 9001 Compliant Assembly",
        "Serialized Tracking Frameworks"
      ],
      deliverables: [
        "Manufacturing Design Pack",
        "Automated Test Reports",
        "Global Logistics Logs",
        "Lifecycle Support Plan"
      ],
    },
    {
      id: "Model 03",
      title: "Strategic Tech Partnership",
      subtitle: "For Long-term Ecosystems",
      desc: "A deep-tech alliance focused on building entire technology platforms. We build the cloud backend, data security, and remote maintenance infrastructure for global fleets.",
      features: [
        "Scalable Cloud (MQTT/TLS 1.3)",
        "Firmware Over-The-Air (FOTA)",
        "Predictive Health Telemetry",
        "Secure SaaS Dashboards",
        "Data Encryption Hardening",
        "Hardware Revision Management"
      ],
      deliverables: [
        "Cloud Deployment Logic",
        "Custom SaaS Application",
        "FOTA Management Keys",
        "Strategic Roadmap Access"
      ],
    }
  ];

  const protocolSteps = [
    { num: "01", title: "Technical Inquiry", text: "Submit your requirement. Our architects perform a 48-hour feasibility check." },
    { num: "02", title: "Tech Audit & NDA", text: "Detailed consultation session under a rigorous NDA to protect your IP." },
    { num: "03", title: "Sprint Definition", text: "We select the ideal model and define the sprint-based roadmap." },
    { num: "04", title: "Agile Execution", text: "Bi-weekly technical reviews with live access to Git repositories." },
    { num: "05", title: "Asset Handover", text: "Final delivery of hardware, assets, and 100% intellectual property transfer." },
  ];

  return (
    <div className="coll-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; color: #1a1a1a; overflow-x: hidden; }

        /* General Container - Now Wider for Large Screens */
        .section-container {
  width: 100%;
  /* Remove margin: 0 auto; */
  margin: 0; 
  /* Use a percentage or fixed padding to align with the logo */
  padding-left: 5%; 
  padding-right: 5%;
  max-width: 100%; /* Allow it to span the full width */
}
        /* ── HERO ── */
        .coll-hero {
          width: 100%;
          background: #fcfcfc;
          padding: clamp(50px, 5vh, 200px) 0;
          border-bottom: 1px solid #eee;
        }
        .hero-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }
        .coll-hero-text { flex: 1; max-width: 900px; }
        .coll-hero-text h1 { font-size: clamp(34px, 5vw, 72px); font-weight: 700; line-height: 1.1; margin-bottom: 30px; letter-spacing: -1.5px; }
        .coll-hero-text h1 span { color: #FF5C00; }
        .coll-hero-text p { font-size: clamp(16px, 1.5vw, 20px); color: #555; line-height: 1.6; max-width: 700px; }
        
        .hero-abstract { 
          width: 30vw; height: 30vw; max-width: 450px; max-height: 450px;
          background: radial-gradient(circle, #ffe9dc 0%, transparent 70%); 
          border-radius: 50%; position: relative; flex-shrink: 0; 
        }

        /* ── INTERACTIVE SELECTOR ── */
        .model-selector-sec {
          margin-top: -80px;
          margin-bottom: 60px;
          display: grid;
          grid-template-columns: 350px 1fr;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          border: 1px solid #eee;
          overflow: hidden;
        }

        .selector-sidebar { background: #111; display: flex; flex-direction: column; }
        .select-btn {
          width: 100%; padding: 35px 40px; text-align: left;
          background: transparent; border: none; color: #666;
          cursor: pointer; transition: 0.3s; border-left: 4px solid transparent;
        }
        .select-btn.active { color: #fff; background: #1a1a1a; border-left-color: #FF5C00; }
        .select-btn h5 { font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px; }
        .select-btn h3 { font-size: 18px; font-weight: 700; }

        .model-content { padding: clamp(30px, 5vw, 70px); background: #fff; }
        .tab-data-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; margin-top: 40px; }
        
        .feat-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 15px; font-size: 15px; font-weight: 500; }
        .feat-item svg { color: #FF5C00; flex-shrink: 0; }

        .deliverables-box { background: #f8f8f8; padding: 30px; border-radius: 8px; height: fit-content; }
        .deliv-item { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 13px; margin-bottom: 12px; }
        .deliv-dot { width: 6px; height: 6px; background: #FF5C00; border-radius: 50%; }

        /* ── PROTOCOL ── */
        .protocol-sec { background: #000; padding: 100px 0; color: #fff; }
        .protocol-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
          gap: 20px; margin-top: 60px; 
        }
        .protocol-card { padding: 30px; border-top: 1px solid #333; }
        .protocol-card h2 { color: #FF5C00; font-size: 40px; margin-bottom: 15px; }

        /* ── PILLARS ── */
        .pillars-sec { padding: 60px 0; }
        .pillars-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
          gap: 30px; margin-top: 50px; 
        }
        .pillar-card { border: 1px solid #eee; padding: 40px; border-radius: 12px; transition: 0.3s; }
        .pillar-card:hover { border-color: #FF5C00; background: #fafafa; }

        /* ── CTA ── */
        .eng-bar { background: #FF5C00; padding: 80px 0; color: #fff; }
        .eng-flex { display: flex; justify-content: space-between; align-items: center; gap: 30px; }
        .btn-white { background: #fff; color: #FF5C00; padding: 18px 40px; border-radius: 50px; font-weight: 700; cursor: pointer; border: none; }

        /* ── RESPONSIVE FIXES ── */
        @media (max-width: 1024px) {
          .model-selector-sec { grid-template-columns: 1fr; margin-top: 0; }
          .selector-sidebar { flex-direction: row; overflow-x: auto; scroll-snap-type: x mandatory; }
          .select-btn { min-width: 280px; scroll-snap-align: start; border-left: none; border-bottom: 4px solid transparent; padding: 25px; text-align: center; }
          .select-btn.active { border-bottom-color: #FF5C00; }
          .tab-data-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
         .coll-hero { 
    /* This adds the necessary gap from the header on mobile */
    padding-top: 120px !important; 
    padding-bottom: 80px;
  }
          .hero-flex { flex-direction: column; text-align: center; }
          .hero-abstract { display: none; }
          .eng-flex { flex-direction: column; text-align: center; }
          .btn-white { width: 100%; }
        }
      `}</style>

      <Header />

      <main className="coll-main">
        {/* Hero Section */}
        <section className="coll-hero">
          <div className="section-container hero-flex">
            <div className="coll-hero-text">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                The <span>Architecture</span> of <br /> Strategic Partnership
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                We provide more than engineering—we provide a roadmap. Bridge the gap from 
                your first sketch to global production with our proven engagement frameworks.
              </motion.p>
            </div>
            <div className="hero-abstract" />
          </div>
        </section>

        {/* Interactive Model Switcher */}
        <div className="section-container">
          <section className="model-selector-sec">
            <div className="selector-sidebar">
              {models.map((m, i) => (
                <button 
                  key={i} 
                  className={`select-btn ${activeModel === i ? 'active' : ''}`}
                  onClick={() => setActiveModel(i)}
                >
                  <h5>{m.id}</h5>
                  <h3>{m.title}</h3>
                </button>
              ))}
            </div>
            
            <div className="model-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModel}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 style={{ color: '#FF5C00', fontSize: '14px', fontWeight: 700, marginBottom: '10px' }}>{models[activeModel].subtitle}</h4>
                  <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700 }}>{models[activeModel].title}</h2>
                  <p style={{ marginTop: '20px', color: '#555', fontSize: '17px', lineHeight: 1.7 }}>{models[activeModel].desc}</p>

                  <div className="tab-data-grid">
                    <div>
                      <h6 style={{ fontSize: '12px', letterSpacing: '2px', color: '#999', marginBottom: '20px' }}>CORE OPERATIONS</h6>
                      {models[activeModel].features.map((f, idx) => (
                        <div className="feat-item" key={idx}>
                          <CheckCircle2 size={18} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="deliverables-box">
                      <h6 style={{ fontSize: '12px', letterSpacing: '2px', color: '#999', marginBottom: '20px' }}>DELIVERABLES</h6>
                      {models[activeModel].deliverables.map((d, idx) => (
                        <div className="deliv-item" key={idx}>
                          <div className="deliv-dot" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        </div>

        {/* Onboarding Journey */}
        <section className="protocol-sec">
          <div className="section-container">
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 700, textAlign: 'center' }}>The Onboarding Journey</h2>
            <div className="protocol-grid">
              {protocolSteps.map((step, i) => (
                <div key={i} className="protocol-card">
                  <h2>{step.num}</h2>
                  <h4 style={{ marginBottom: '10px' }}>{step.title}</h4>
                  <p style={{ color: '#aaa', fontSize: '14px' }}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="pillars-sec">
          <div className="section-container">
            <h2 style={{ fontSize: '32px', fontWeight: 700 }}>Engagement Foundations</h2>
            <div className="pillars-grid">
              {[
                { icon: <Lock />, title: "Full IP Ownership", desc: "100% of designs and source code ownership is transferred to the client." },
                { icon: <GitBranch />, title: "Traceable Progress", desc: "Live access to Git repositories and project boards for full transparency." },
                { icon: <ShieldCheck />, title: "Rigorous NDA", desc: "Strict confidentiality to protect industrial innovations and trade secrets." },
                { icon: <Rocket />, title: "Scalable Output", desc: "Built using production-ready components to ensure zero redesign costs." }
              ].map((p, i) => (
                <div className="pillar-card" key={i}>
                  <div style={{ color: '#FF5C00', marginBottom: '20px' }}>{p.icon}</div>
                  <h4>{p.title}</h4>
                  <p style={{ color: '#777', marginTop: '10px' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="eng-bar">
          <div className="section-container eng-flex">
            <div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700 }}>Ready to Initiate a Project?</h2>
              <p style={{ opacity: 0.9, marginTop: '5px' }}>Let's find the ideal partnership model for your engineering challenge.</p>
            </div>
            <button className="btn-white">Book Tech Consultation</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}