import React from "react";
import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/Footer";
import { 
  Truck, Headset, Activity, Database, ShieldCheck, 
  Globe, Zap, FileCheck, Users, Box, Cpu, HardDrive 
} from "lucide-react";

export default function DeliverySupport() {

  
  // Expanded Service Data
  const mainServices = [
    {
      title: "Global Logistics & Bulk Shipping",
      desc: "Comprehensive supply chain management for industrial automation units. We handle everything from international customs to serialized last-mile delivery.",
      details: ["Export/Import Compliance", "Anti-Static Packaging", "Real-time GPS Tracking", "Bulk Batch Management"],
      icon: <Truck size={28} />,
    },
    {
      title: "IoT Remote Diagnostics",
      desc: "Our systems utilize encrypted MQTT protocols to stream real-time telemetry. Our engineers monitor performance 24/7 to detect anomalies before they cause downtime.",
      details: ["Real-time Telemetry", "Anomaly Detection", "Cloud Health Dashboards", "Data Sovereignty"],
      icon: <Activity size={28} />,
    },
    {
      title: "Firmware Over-The-Air (FOTA)",
      desc: "Seamless remote updates for STM32, ESP32, and OpenCPU architectures. We deploy security patches and feature enhancements without on-site intervention.",
      details: ["End-to-End Encryption", "Version Rollback Support", "Delta Update Compression", "Low-Power Optimization"],
      icon: <Database size={28} />,
    },
    {
      title: "On-Site Field Engineering",
      desc: "A dedicated network of field engineers available across industrial hubs. We provide physical commissioning, calibration, and emergency hardware support.",
      details: ["Physical Commissioning", "Calibration Services", "Operator Certification", "Emergency Rapid Response"],
      icon: <Headset size={28} />,
    },
    {
      title: "Quality Control & Certification",
      desc: "Every deployed unit is backed by ISO 9001:2015 standards. We provide full traceability and Certificates of Analysis (CoA) for all hardware outputs.",
      details: ["REACH & RoHS Compliance", "Dimensional Inspection", "Environmental Stress Testing", "CE/FCC Certification Support"],
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Asset Lifecycle Management",
      desc: "Continuous improvement based on field data. We manage hardware revision cycles (A, B, C) to ensure product longevity and performance scaling.",
      details: ["Hardware Revisions", "MTBF Analysis", "Sustainability Reporting", "E-waste Management"],
      icon: <Zap size={28} />,
    },
  ];

  const roadmapSteps = [
    { step: "01", title: "Pre-Deployment", text: "Final burn-in testing (168 hours) and configuration of IoT credentials for secure handshakes." },
    { step: "02", title: "Global Logistics", text: "Secure transit via specialized industrial carriers with full insurance and serialized tracking." },
    { step: "03", title: "Field Commissioning", text: "On-site installation by MYACCESS engineers and system integration with client infrastructure." },
    { step: "04", title: "Live Monitoring", text: "Activation of real-time cloud diagnostics and 24/7 technical oversight via our NOC." },
    { step: "05", title: "Lifecycle Support", text: "Periodic FOTA updates, predictive maintenance alerts, and hardware revision audits." },
  ];

  return (
    <div className="ds-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; overflow-x: hidden; }

        .ds-main { padding-top: 80px; width: 100%; display: flex; flex-direction: column; align-items: center; }

        /* Intro Section */
        .ds-intro { text-align: center; max-width: 950px; padding: 80px 20px; width: 100%; }
        .ds-intro h1 { font-size: clamp(32px, 6vw, 56px); font-weight: 700; line-height: 1.1; margin-bottom: 30px; color: #1a1a1a; letter-spacing: -1px; }
        .ds-intro p { font-size: clamp(16px, 2.2vw, 19px); line-height: 1.8; color: #555; max-width: 800px; margin: 0 auto; }

        /* Grid Styling - Mirroring Industry Cards */
        .ds-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; width: 90%; max-width: 1300px; margin-bottom: 100px; }
        .ds-card { background: #f8f8f8; border-radius: 4px; padding: 45px 35px; transition: all 0.3s ease; display: flex; flex-direction: column; border: 1px solid transparent; }
        .ds-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.06); border-color: #FF5C00; background: #fff; }
        .ds-card-icon { color: #FF5C00; margin-bottom: 25px; }
        .ds-card h3 { font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 15px; }
        .ds-card p { font-size: 15px; color: #666; line-height: 1.7; margin-bottom: 25px; }
        .ds-card-details { margin-top: auto; list-style: none; padding: 0; }
        .ds-card-details li { font-size: 13.5px; font-weight: 600; color: #1a1a1a; display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .ds-card-details li::before { content: ""; width: 8px; height: 2px; background: #FF5C00; }

        /* Roadmap Section */
        .roadmap-sec { width: 100%; background: #000; color: #fff; padding: 100px 0; display: flex; flex-direction: column; align-items: center; }
        .roadmap-container { width: 90%; max-width: 1300px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
        .roadmap-item { position: relative; padding: 20px; border-top: 2px solid #333; transition: 0.3s; }
        .roadmap-item:hover { border-color: #FF5C00; }
        .roadmap-num { font-size: 40px; font-weight: 700; color: #FF5C00; margin-bottom: 15px; display: block; }
        .roadmap-item h4 { font-size: 18px; margin-bottom: 10px; }
        .roadmap-item p { font-size: 14px; color: #aaa; line-height: 1.6; }

        /* Technical Specs Bar */
        .tech-bar { width: 90%; max-width: 1300px; background: #f2f2f2; padding: 40px; border-radius: 8px; display: flex; justify-content: space-between; margin: -50px 0 100px; z-index: 10; gap: 30px; }
        .tech-col { flex: 1; }
        .tech-col h5 { font-size: 14px; text-transform: uppercase; color: #888; letter-spacing: 1px; margin-bottom: 10px; }
        .tech-col p { font-size: 16px; font-weight: 700; color: #1a1a1a; }

        /* Support Banner */
        .ds-banner { width: 90%; max-width: 1300px; background: #FF5C00; padding: 40px 60px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 100px; color: #fff; }
        .banner-left { display: flex; align-items: center; gap: 30px; }
        .banner-text h4 { font-size: 24px; font-weight: 700; margin-bottom: 5px; }
        .banner-text p  { font-size: 16px; opacity: 0.8; }
        .banner-btn { background: #fff; color: #FF5C00; border: none; padding: 15px 35px; border-radius: 30px; font-weight: 700; cursor: pointer; transition: 0.3s; }
        .banner-btn:hover { background: #f0f0f0; transform: scale(1.05); }

        /* Metrics */
        .metrics-sec { text-align: center; padding: 100px 20px; background: #fff; width: 100%; border-top: 1px solid #eee; }
        .metrics-sec h2 { font-size: clamp(30px, 5vw, 48px); font-weight: 700; margin-bottom: 60px; }
        .metrics-grid { display: flex; justify-content: center; gap: 80px; flex-wrap: wrap; }
        .metric-item h5 { font-size: 56px; color: #FF5C00; font-weight: 700; margin-bottom: 10px; }
        .metric-item p { font-size: 14px; color: #666; text-transform: uppercase; font-weight: 600; letter-spacing: 2px; }

        @media (max-width: 1100px) {
          .ds-grid { grid-template-columns: repeat(2, 1fr); }
          .roadmap-container { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .ds-grid { grid-template-columns: 1fr; }
          .tech-bar { flex-direction: column; text-align: center; margin-top: 0; margin-bottom: 50px; }
          .ds-banner { flex-direction: column; text-align: center; padding: 40px 20px; gap: 30px; }
          .roadmap-container { grid-template-columns: 1fr; }
          .metrics-grid { gap: 40px; }
        }
      `}</style>

      <Header />

      <main className="ds-main">
        {/* Intro */}
        <section className="ds-intro">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Ensuring Operational Success <br /> Through Advanced Lifecycle Support
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            From high-precision delivery of 3,250+ units to real-time cloud monitoring. 
            We provide the engineering backbone required to keep industrial systems running 
            without interruption across the globe.
          </motion.p>
        </section>

        {/* Support Services Grid */}
        <div className="ds-grid">
          {mainServices.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="ds-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="ds-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul className="ds-card-details">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Roadmap / Process Section */}
        <section className="roadmap-sec">
          <h2 style={{ marginBottom: "60px", fontSize: "32px" }}>The Deployment Roadmap</h2>
          <div className="roadmap-container">
            {roadmapSteps.map((s, i) => (
              <div className="roadmap-item" key={i}>
                <span className="roadmap-num">{s.step}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Data Bar */}
        <div className="tech-bar">
          <div className="tech-col">
            <h5>Data Protocol</h5>
            <p>MQTT over TLS 1.3 / LoRaWAN</p>
          </div>
          <div className="tech-col">
            <h5>Updates</h5>
            <p>FOTA / Encrypted Delta Patching</p>
          </div>
          <div className="tech-col">
            <h5>Compliance</h5>
            <p>ISO 9001 / REACH / RoHS</p>
          </div>
          <div className="tech-col">
            <h5>Hardware Monitoring</h5>
            <p>Real-time Telemetry NOC</p>
          </div>
        </div>

        {/* Blue Call to Action Banner */}
        <div className="ds-banner">
          <div className="banner-left">
            <div className="banner-text">
              <h4>Ready to Scale Your Production?</h4>
              <p>Join the 50+ industrial clients relying on MYACCESS for zero-downtime operations.</p>
            </div>
          </div>
          <button className="banner-btn">Initiate Partnership</button>
        </div>

        {/* Final Metrics */}
        <section className="metrics-sec">
          <h2>Operational Performance</h2>
          <div className="metrics-grid">
            <div className="metric-item">
              <h5>99.2%</h5>
              <p>System Uptime</p>
            </div>
            <div className="metric-item">
              <h5>3,250+</h5>
              <p>Units Deployed</p>
            </div>
            <div className="metric-item">
              <h5>Pan India</h5>
              <p>Engineer Support</p>
            </div>
            <div className="metric-item">
              <h5>100%</h5>
              <p>Digital Accountability</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}