import React from "react";
import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/Footer";
import { 
  ShieldCheck, Activity, Cpu, Settings, 
  Ruler, Thermometer, Database, CheckCircle2, 
  FileText, Search, Gauge, Globe, Zap, AlertCircle
} from "lucide-react";

export default function QualityAssurance() {

  // 01. Core Testing Domains
  const testingDomains = [
    {
      title: "Hardware Signal Integrity",
      desc: "Our electronic labs utilize high-frequency oscilloscopes and spectrum analyzers to eliminate EMI/EMC issues. We verify every signal path on multi-layer PCBs to ensure 100% data accuracy in industrial environments.",
      points: ["Impedance Matching", "Cross-talk Analysis", "Power Rail Stability"],
      icon: <Activity size={24} />,
    },
    {
      title: "Firmware Determinism",
      desc: "For STM32 and ESP32 architectures, we perform rigorous regression testing. We audit RTOS task scheduling to ensure mission-critical processes are never delayed by memory leaks or kernel overflows.",
      points: ["Unit Testing", "Static Code Analysis", "Memory Leak Audits"],
      icon: <Cpu size={24} />,
    },
    {
      title: "Environmental Stress (ESS)",
      desc: "Hardware is subjected to the 'Industrial Stress Loop'—testing reliability under high humidity, dust, and temperature cycles from -20°C up to +85°C to simulate real-world fuel and factory floors.",
      points: ["Thermal Cycling", "Vibration Endurance", "IP65/67 Ingress Testing"],
      icon: <Thermometer size={24} />,
    },
    {
      title: "Dimensional Metrology",
      desc: "Using high-precision digital scanners and calipers, we ensure that every mechanical enclosure meets a ±0.01mm tolerance. This guarantees perfect assembly fitment for mass production cycles.",
      points: ["GD&T Analysis", "Chord Deviation Check", "Fitment Simulation"],
      icon: <Ruler size={24} />,
    }
  ];

  // 02. The QC Roadmap
  const roadmap = [
    { step: "01", name: "Requirement Verification", text: "Benchmarking technical requirements against industrial safety standards (CE/FCC/BIS)." },
    { step: "02", name: "Design For Mfg (DFM)", text: "Internal audits to ensure the hardware is optimized for high-yield, low-error manufacturing." },
    { step: "03", name: "Component Traceability", text: "Every resistor and IC is sourced from authorized vendors with full RoHS & REACH traceability." },
    { step: "04", name: "168-Hour Burn-in", text: "Continuous operational testing at peak load to detect infant mortality failures before shipping." },
    { step: "05", name: "Final CoA Issuance", text: "Issuance of the Certificate of Analysis and final digital accountability logging for each unit." },
  ];

  return (
    <div className="qa-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; overflow-x: hidden; color: #1a1a1a; }

        .qa-main { padding-top: 30px; width: 100%; display: flex; flex-direction: column; align-items: center; }

        /* ── HERO ── */
        .qa-hero { text-align: center; max-width: 1000px; padding: 100px 20px; width: 100%; }
        .qa-hero h4 { color: #888; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; margin-bottom: 20px; font-weight: 700; }
        .qa-hero h1 { font-size: clamp(32px, 6vw, 64px); font-weight: 700; line-height: 1.1; margin-bottom: 30px; letter-spacing: -1px; }
        .qa-hero h1 span { color: #FF5C00; }
        .qa-hero p { font-size: 19px; color: #555; line-height: 1.8; max-width: 800px; margin: 0 auto; }

        /* ── SECTION TITLES ── */
        .sec-header { width: 90%; max-width: 1300px; margin-bottom: 60px; text-align: left; }
        .sec-header h2 { font-size: 36px; font-weight: 700; margin-bottom: 15px; }
        .sec-header .line { width: 60px; height: 4px; background: #FF5C00; }

        /* ── TECHNICAL GRID ── */
        .qa-grid-container { width: 90%; max-width: 1300px; margin-bottom: 120px; }
        .qa-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
        .qa-card { background: #f8f8f8; padding: 50px; border-radius: 4px; transition: 0.3s; border-top: 1px solid #eee; }
        .qa-card:hover { background: #fff; box-shadow: 0 30px 60px rgba(0,0,0,0.05); border-top-color: FF5C00; }
        .qa-icon-box { color: #0056b3; margin-bottom: 25px; }
        .qa-card h3 { font-size: 24px; font-weight: 700; margin-bottom: 15px; }
        .qa-card p { font-size: 15.5px; color: #666; line-height: 1.7; margin-bottom: 25px; }
        .qa-points { list-style: none; display: flex; gap: 15px; flex-wrap: wrap; }
        .qa-points li { font-size: 12px; font-weight: 700; text-transform: uppercase; background: #eee; padding: 5px 12px; border-radius: 20px; color: #555; }

        /* ── QC ROADMAP ── */
        .roadmap-sec { width: 100%; background: #111; color: #fff; padding: 100px 8%; margin-bottom: 120px; }
        .roadmap-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 30px; margin-top: 60px; }
        .road-item { position: relative; }
        .road-num { font-size: 48px; font-weight: 700; color: #FF5C00; margin-bottom: 20px; display: block; opacity: 0.8; }
        .road-item h5 { font-size: 18px; margin-bottom: 10px; font-weight: 700; color: #fff; }
        .road-item p { font-size: 14px; color: #888; line-height: 1.6; }

        /* ── DATA & COMPLIANCE ── */
        .compliance-box { width: 90%; max-width: 1300px; display: grid; grid-template-columns: 1.5fr 1fr; gap: 60px; margin-bottom: 120px; align-items: center; }
        .comp-text h2 { font-size: 40px; font-weight: 700; margin-bottom: 25px; }
        .comp-text p { font-size: 17px; color: #555; line-height: 1.8; margin-bottom: 40px; }
        .comp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .comp-card { border: 1px solid #eee; padding: 25px; border-radius: 8px; text-align: center; background: #fcfcfc; }
        .comp-card h6 { font-size: 13px; color: #888; text-transform: uppercase; margin-bottom: 5px; letter-spacing: 1px; }
        .comp-card span { font-size: 20px; font-weight: 700; color: #FF5C00; }

        .comp-visual { background: #f8f8f8; padding: 60px; border-radius: 12px; text-align: center; border: 1px solid #eee; }
        .comp-visual h3 { font-size: 64px; font-weight: 700; color: #1a1a1a; margin-bottom: 10px; }
        .comp-visual p { font-size: 14px; color: #888; text-transform: uppercase; font-weight: 700; letter-spacing: 2px; }

        /* ── CTA ── */
        .qa-footer { width: 100%; background: #f2f2f2; padding: 100px 20px; text-align: center; }
        .qa-footer h2 { font-size: 36px; font-weight: 700; margin-bottom: 30px; }
        .btn-blue { background: #FF5C00; color: #fff; padding: 18px 45px; border-radius: 35px; border: none; font-weight: 700; cursor: pointer; transition: 0.3s; }
        .btn-blue:hover { background: #FF5C00; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,86,179,0.2); }

        @media (max-width: 1000px) {
          .qa-grid { grid-template-columns: 1fr; }
          .roadmap-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
          .compliance-box { grid-template-columns: 1fr; }
        }
      `}</style>

      <Header />

      <main className="qa-main">
        {/* Section 01: Hero */}
        <section className="qa-hero">
          <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Commitment to Precision</motion.h4>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Our <span>Zero-Error</span> Verification <br /> & Industrial Compliance Framework
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Beyond standard testing, MYACCESS implements an aggressive Verification Loop. 
            From signal integrity to environmental endurance, we ensure your industrial 
            hardware functions flawlessly under extreme field conditions.
          </motion.p>
        </section>

        {/* Section 02: Testing Domains Grid */}
        <div className="sec-header">
          <h2>Verification Pillars</h2>
          <div className="line"></div>
        </div>
        <div className="qa-grid-container">
          <div className="qa-grid">
            {testingDomains.map((item, idx) => (
              <motion.div 
                key={idx} className="qa-card"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              >
                <div className="qa-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul className="qa-points">
                  {item.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 03: QC Roadmap (The Process) */}
        <section className="roadmap-sec">
          <div className="sec-header">
            <h2 style={{ color: '#fff' }}>The QC Lifecycle</h2>
            <div className="line"></div>
          </div>
          <div className="roadmap-grid">
            {roadmap.map((s, i) => (
              <div key={i} className="road-item">
                <span className="road-num">{s.step}</span>
                <h5>{s.name}</h5>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Compliance & Big Data */}
        <section className="compliance-box">
          <div className="comp-text">
            <h2>Industrial Compliance & Field Reliability</h2>
            <p>
              Every unit produced at MYACCESS carries a digital material passport. 
              We don't just meet standards; we define them by tracking Mean Time Between Failures (MTBF) 
              for 3,250+ units currently operational in high-risk environments like Fuel Parks 
              and Public Infrastructure.
            </p>
            <div className="comp-grid">
              <div className="comp-card"><h6>Standard</h6><span>ISO 9001:2015</span></div>
              <div className="comp-card"><h6>Environment</h6><span>RoHS / REACH</span></div>
              <div className="comp-card"><h6>Safety</h6><span>BIS / CE Ready</span></div>
              <div className="comp-card"><h6>Traceability</h6><span>NABL Certified</span></div>
            </div>
          </div>
          <div className="comp-visual">
            <h3>98.2%</h3>
            <p>Material Recovery Rate</p>
            <div style={{ marginTop: '40px' }}>
                <h3>168hr</h3>
                <p>Peak Load Burn-in</p>
            </div>
          </div>
        </section>

        {/* Section 05: Final CTA */}
        <section className="qa-footer">
          <h2>Ready to Initiate High-Scale Production?</h2>
          <p style={{ marginBottom: '40px', color: '#666' }}>Consult with our QA Engineers to design your custom verification protocol.</p>
          <button className="btn-blue">Request Quality Manual (PDF)</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}