import React from 'react';
// Assuming Header and Footer are in your project
import Header from '../components/header'; 
import Footer from '../components/Footer';

const ACCENT = "#D85A30";
const DARK_BG = "#111111";

const phases = [
  {
    id: "01", title: "Discovery & Technical Requirement Engineering", duration: "2–3 weeks",
    summary: "In-depth analysis of project goals, technical constraints, and market positioning.",
    desc: "This is the most critical phase where we translate your vision into a rigorous technical document. We analyze the environmental conditions where the device will operate and define the communication needs.",
    tasks: [
      "RF Path Analysis — LoRa, NB-IoT, BLE, or Satellite connectivity selection",
      "Power Budgeting — detailed calculation of battery life based on sleep-wake cycles",
      "Regulatory Path — identifying FCC/CE/RoHS requirements early",
      "Sensor selection based on precision, drift, and cost-to-scale ratio"
    ],
    output: "Technical Requirement Document (TRD) & Feasibility Report",
    stat: { value: "2–3", unit: "Weeks", label: "Typical Duration" },
    tag: "Strategy"
  },
  {
    id: "02", title: "Multi-Layer Hardware Architecture", duration: "4–6 weeks",
    summary: "Designing the physical intelligence of the product through advanced PCB engineering.",
    desc: "We move from concepts to schematics. Our engineering team focuses on signal integrity and power distribution networks. We choose components with a minimum 5-year lifecycle to avoid supply chain obsolescence.",
    tasks: [
      "Schematic Capture — designing complex logical connections",
      "BOM Optimization — selecting components with stable lead times",
      "PCB Layout — multi-layer stackup design (4, 6, or 8 layers) with EMI shielding",
      "Thermal Simulation — predicting heat zones and adding heat sinks/vias"
    ],
    output: "Full Schematic Design & Bill of Materials (BOM)",
    stat: { value: "8+", unit: "Layers", label: "Max PCB Stackup" },
    tag: "Hardware"
  },
  {
    id: "03", title: "Embedded Firmware & OS Development", duration: "6–8 weeks",
    summary: "Writing the low-level code that breathes life into the hardware.",
    desc: "Whether it's Bare Metal C, FreeRTOS, or Embedded Linux, we develop firmware that is deterministic and power-efficient. Security is baked in at the kernel level with encrypted bootloaders.",
    tasks: [
      "Driver Development — custom drivers for specialized sensors and peripherals",
      "Edge Computing — implementing local data processing to reduce cloud costs",
      "OTA Architecture — designing secure Over-the-Air update frameworks",
      "Low-Power Optimization — fine-tuning sleep modes and interrupt handlers"
    ],
    output: "Alpha Firmware Stack & API Documentation",
    stat: { value: "OTA", unit: "Ready", label: "Secure Updates" },
    tag: "Firmware"
  },
  {
    id: "04", title: "Industrial Design & Mechanical Integration", duration: "4–5 weeks",
    summary: "Creating the protective shell and ensuring ergonomic and environmental fit.",
    desc: "Hardware needs a home. We design enclosures that are not only aesthetic but also functional — ensuring Ingress Protection ratings and ease of assembly on the production line.",
    tasks: [
      "Enclosure Design — 3D modeling with focus on DFM (Design for Manufacturing)",
      "Material Selection — choosing plastics (ABS/PC) or metals based on durability",
      "Thermal Management — physical airflow design and sealing",
      "User Interface — button tactile feel, LED light piping, and port access"
    ],
    output: "3D CAD Models & Enclosure Prototypes",
    stat: { value: "IP68", unit: "Rated", label: "Ingress Protection" },
    tag: "Industrial"
  },
  {
    id: "05", title: "Verification Testing (DVT & EVT)", duration: "3–4 weeks",
    summary: "Rigorous testing to ensure the product survives real-world conditions.",
    desc: "Before mass production, we try to break the product. Prototypes are subjected to extreme stress to find weak points in hardware or firmware before they reach customers.",
    tasks: [
      "Functional Testing — validating every feature against the TRD",
      "Environmental Testing — thermal cycling (−40°C to +85°C) and humidity exposure",
      "Stress Testing — vibration and drop tests for industrial grade reliability",
      "Compliance Pre-scanning — checking for EMI/EMC issues before lab certification"
    ],
    output: "Validation Report & Golden Sample",
    stat: { value: "−40°", unit: "to +85°C", label: "Thermal Range" },
    tag: "Testing"
  },
  {
    id: "06", title: "Mass Production Scaling", duration: "Ongoing",
    summary: "Transitioning from the lab to the factory floor for high-volume output.",
    desc: "Scaling is a science. We develop the assembly line process, create testing jigs for the factory, and manage the quality control of every single unit produced.",
    tasks: [
      "ICT & FCT Jigs — building automated test fixtures for the production line",
      "Yield Management — optimizing the process to reduce manufacturing defects",
      "Quality Control — implementing AQL (Acceptable Quality Level) standards",
      "Component Procurement — managing bulk buys and warehouse logistics"
    ],
    output: "Mass Produced Units Ready for Shipping",
    stat: { value: "AQL", unit: "Standard", label: "Quality Control" },
    tag: "Production"
  },
  {
    id: "07", title: "Post-Deployment & Lifecycle Management", duration: "Lifetime",
    summary: "Ensuring the fleet of devices stays healthy and updated in the field.",
    desc: "Deployment is just the beginning. We provide the infrastructure to monitor device health, push security patches, and analyze field data for future product iterations.",
    tasks: [
      "Fleet Monitoring — real-time dashboard for device heartbeat and battery levels",
      "Security Patches — remote vulnerability patching via OTA updates",
      "Data Analytics — turning raw sensor data into actionable business insights",
      "Feedback Loop — using field data to improve Version 2.0 of the hardware"
    ],
    output: "Live Fleet Management & Maintenance Support",
    stat: { value: "24/7", unit: "Monitor", label: "Fleet Uptime" },
    tag: "Lifecycle"
  }
];

const tagColors = {
  Strategy:   { bg: "#E6F1FB", color: "#0C447C" },
  Hardware:   { bg: "#EAF3DE", color: "#27500A" },
  Firmware:   { bg: "#EEEDFE", color: "#3C3489" },
  Industrial: { bg: "#FAECE7", color: "#993C1D" },
  Testing:    { bg: "#E1F5EE", color: "#0F6E56" },
  Production: { bg: "#FAEEDA", color: "#633806" },
  Lifecycle:  { bg: "#FCEBEB", color: "#791F1F" },
};

const ProductLifecycle = () => {
  return (
    <div className="lifecycle-page">
      <style>{`
        .lifecycle-page {
          font-family: 'Inter', sans-serif;
          color: #1a1a1a;
          background: #fff;
        }

        /* Hero Section Styling */
        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 60px 8%;
          gap: 40px;
          min-height: 80vh;
        }
        .hero-text { flex: 1; max-width: 600px; }
        .hero-diagram { flex: 1; display: flex; justify-content: center; }
        .hero-diagram img { max-width: 100%; height: auto; }

        .badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${ACCENT};
          background: #FFF5F1;
          padding: 8px 18px;
          border-radius: 50px;
          margin-bottom: 24px;
        }

        h1 { font-size: 4.5rem; line-height: 1.1; font-weight: 800; margin: 0 0 24px; letter-spacing: -2px; }
        .hero-p { font-size: 1.2rem; color: #555; line-height: 1.6; margin-bottom: 40px; }

        /* Phases Layout */
        .phases-section { padding: 40px 8% 100px; }
        .phase-card {
          display: flex;
          border: 1px solid #EAEAEA;
          border-radius: 20px;
          margin-bottom: 30px;
          background: #fff;
          overflow: hidden;
        }
        .phase-content { flex: 1; padding: 40px; }
        .phase-info-box {
          width: 280px;
          background: #F9F9F9;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-left: 1px solid #EAEAEA;
          text-align: center;
          padding: 30px;
        }

        .task-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px 30px;
          margin: 30px 0;
        }
        .task-item { display: flex; gap: 10px; font-size: 0.95rem; color: #444; }

        /* Bottom CTA Section (Last Image) */
        .cta-split-section { display: flex; min-height: 400px; }
        .cta-left {
          flex: 1; background: ${DARK_BG}; color: #fff;
          padding: 80px 8%; display: flex; flex-direction: column; justify-content: center;
        }
        .cta-right {
          flex: 1; background: ${ACCENT}; color: #fff;
          padding: 80px 8%; display: flex; flex-direction: column; justify-content: center;
          position: relative;
        }
        .cta-buttons { display: flex; gap: 15px; margin-top: 30px; }

        .btn-orange {
          background: ${ACCENT}; color: white; border: none; padding: 14px 28px;
          border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.3s;
        }
        .btn-outline {
          background: transparent; color: white; border: 1px solid #444; padding: 14px 28px;
          border-radius: 8px; font-weight: 600; cursor: pointer;
        }

        /* Responsiveness */
        @media (max-width: 1100px) {
          h1 { font-size: 3.5rem; }
          .hero-container { flex-direction: column; text-align: center; padding: 60px 5%; }
          .hero-text { max-width: 100%; }
          .phase-info-box { display: none; }
          .task-list { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          h1 { font-size: 2.8rem; }
          .cta-split-section { flex-direction: column; }
          .phase-content { padding: 25px; }
          .cta-buttons { flex-direction: column; }
        }
      `}</style>

      <Header />

      {/* HERO SECTION */}
      <section className="hero-container">
        <div className="hero-text">
          <span className="badge">Standard Engineering Process</span>
          <h1>End-to-End <br /><span style={{color: ACCENT}}>Product</span> <br />Lifecycle.</h1>
          <p className="hero-p">A disciplined, multi-phase approach to building complex electronic products — from initial requirement engineering to mass production and global deployment.</p>
          <button className="btn-orange">Request Phase 01 Audit →</button>
        </div>
        <div className="hero-diagram">
          {/* Replace this SVG/Img with the actual Lifecycle Diagram circles image */}
          <img src="/assets/factory/life cycle.jpg" alt="Product Lifecycle Diagram" />
        </div>
      </section>

      {/* PHASES LIST */}
      <section className="phases-section">
        {phases.map((p) => (
          <div key={p.id} className="phase-card">
            <div className="phase-content">
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap' }}>
                <span style={{ 
                  background: tagColors[p.tag].bg, color: tagColors[p.tag].color, 
                  fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '4px' 
                }}>PHASE {p.id}</span>
                <span style={{ color: '#ccc' }}>/</span>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#999', textTransform: 'uppercase' }}>{p.tag}</span>
                <span style={{ color: '#ccc' }}>/</span>
                <span style={{ fontSize: '12px', fontWeight: '500', color: '#666' }}>{p.duration}</span>
              </div>

              <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{p.title}</h2>
              <p style={{ color: ACCENT, fontWeight: '600', marginBottom: '10px' }}>{p.summary}</p>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>{p.desc}</p>

              <div className="task-list">
                {p.tasks.map((task, i) => (
                  <div key={i} className="task-item">
                    <span style={{ color: ACCENT }}>✓</span> {task}
                  </div>
                ))}
              </div>

              <div style={{ background: '#F5F5F5', padding: '12px 20px', borderRadius: '10px', display: 'inline-block', fontSize: '0.9rem' }}>
                <strong style={{ color: ACCENT, marginRight: '10px', fontSize: '0.7rem', textTransform: 'uppercase' }}>Output:</strong> 
                <strong>{p.output}</strong>
              </div>
            </div>

            <div className="phase-info-box" style={{ background: tagColors[p.tag].bg + '40' }}>
               <div style={{ fontSize: '3rem', fontWeight: '800', color: tagColors[p.tag].color }}>{p.stat.value}</div>
               <div style={{ fontWeight: '700', color: tagColors[p.tag].color }}>{p.stat.unit}</div>
               <div style={{ fontSize: '10px', textTransform: 'uppercase', marginTop: '8px', opacity: 0.6 }}>{p.stat.label}</div>
            </div>
          </div>
        ))}
      </section>

      {/* NEW CTA SECTION (LAST IMAGE) */}
      <section className="cta-split-section">
        <div className="cta-left">
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>Start Your <br />Development Journey.</h2>
          <p style={{ opacity: 0.7, lineHeight: 1.6, maxWidth: '400px' }}>Our engineering team is ready to analyze your requirements and build a custom roadmap for your hardware success.</p>
          <div className="cta-buttons">
            <button className="btn-orange">Request Phase 01 Audit →</button>
            <button className="btn-outline">Download PDF</button>
          </div>
        </div>
        <div className="cta-right">
          <p style={{ fontSize: '1.6rem', fontWeight: '500', lineHeight: 1.4, fontStyle: 'italic' }}>
            "We don't just build hardware. We build the entire technical foundation your product needs to scale from prototype to global deployment."
          </p>
          <p style={{ marginTop: '30px', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
            — MYACCESS ENGINEERING TEAM
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductLifecycle;