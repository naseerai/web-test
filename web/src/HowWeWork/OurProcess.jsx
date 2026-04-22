import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Cpu, Layers, Cloud, Settings, Monitor, Database, Terminal
} from 'lucide-react';

// --- IMPORTED COMPONENTS ---
import Header from "../components/header";
import Footer from "../components/Footer";

const OurProcess = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const processData = [
    {
      id: "01",
      title: "Electronic Hardware Engineering",
      icon: <Cpu size={40} />,
      shortDesc: "Architecting high-performance, industrial-grade PCB systems.",
      longDesc: "Our hardware team focuses on multi-layer PCB design, signal integrity, and power distribution efficiency. We bridge the gap between complex schematics and manufacturing-ready layouts.",
      technicalDetails: [
        { label: "Design Tools", val: "Altium Designer, KiCad, Cadence Allegro" },
        { label: "Layer Stack", val: "2 to 12 Layer High-Density Interconnect" },
        { label: "Signal Integrity", val: "Impedance matching, Crosstalk analysis" },
        { label: "Thermal", val: "FEA Thermal Analysis & Active Cooling" }
      ],
      tags: ["Mixed-Signal", "RF Design", "Power Electronics"]
    },
    {
      id: "02",
      title: "Embedded Firmware & OS",
      icon: <Layers size={40} />,
      shortDesc: "Low-level system programming for mission-critical hardware.",
      longDesc: "Developing deterministic firmware for ARM Cortex, ESP32, and STM32 architectures. We implement RTOS for multi-threaded industrial task management.",
      technicalDetails: [
        { label: "Languages", val: "Embedded C, C++, Rust, MicroPython" },
        { label: "Frameworks", val: "FreeRTOS, Zephyr Project, Bare Metal" },
        { label: "Protocols", val: "CANBus, Modbus, RS485, I2C, SPI" },
        { label: "Safety", val: "Watchdog Timers, Memory Protection Units" }
      ],
      tags: ["Deterministic", "Kernel Tuning", "Bootloaders"]
    },
    {
      id: "03",
      title: "IoT Ecosystem & Cloud Integration",
      icon: <Cloud size={40} />,
      shortDesc: "Building the digital bridge between hardware and users.",
      longDesc: "Secure data transmission from edge devices to centralized cloud clusters. We specialize in MQTT brokers and real-time visualization platforms.",
      technicalDetails: [
        { label: "Connectivity", val: "LTE Cat-M1, NB-IoT, LoRaWAN, WiFi 6" },
        { label: "Cloud Platforms", val: "AWS IoT Core, Azure IoT Hub, Google Cloud" },
        { label: "Security", val: "TLS/SSL Encryption, JWT, X.509 Certificates" },
        { label: "Updates", val: "Robust Firmware Over-The-Air (FOTA)" }
      ],
      tags: ["Scalable", "Edge Computing", "Big Data"]
    },
    {
      id: "05",
      title: "Full Stack Digital Solutions",
      icon: <Monitor size={40} />,
      shortDesc: "Scalable web and mobile interfaces for industrial control.",
      longDesc: "We build high-performance dashboards and mobile apps to monitor hardware telemetry in real-time. Our stack ensures high availability and seamless data flow.",
      technicalDetails: [
        { label: "Frontend", val: "React.js, Next.js, Tailwind CSS, TypeScript" },
        { label: "Backend", val: "Node.js, Python (FastAPI), GoLang" },
        { label: "Database", val: "PostgreSQL, MongoDB, Redis, InfluxDB" },
        { label: "DevOps", val: "Docker, Kubernetes, AWS, CI/CD Pipelines" }
      ],
      tags: ["SaaS", "Real-time Dashboards", "Cross-platform"]
    },
    {
      id: "04",
      title: "Mechanical & Industrial Design",
      icon: <Settings size={40} />,
      shortDesc: "Ruggedized enclosures for extreme operational environments.",
      longDesc: "Our mechanical engineers design IP-rated enclosures for the Fuel Automation and SmartLoo systems mentioned in our portfolio.",
      technicalDetails: [
        { label: "CAD Modeling", val: "SolidWorks, Autodesk Fusion 360" },
        { label: "Prototyping", val: "SLA/FDM 3D Printing, CNC Machining" },
        { label: "Ingress", val: "IP65, IP67, IP68 Rated Engineering" },
        { label: "Materials", val: "ABS, Polycarbonate, Aluminum Alloy 6061" }
      ],
      tags: ["Rugged", "Ergonomic", "DFM Optimized"]
    }
  ];

  return (
    <div style={{ backgroundColor: '#fff', color: '#000', overflowX: 'hidden' }}>
      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          margin-bottom: 15vh;
          align-items: center;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        @media (max-width: 1024px) {
          .process-grid { gap: 3rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .process-grid { 
            grid-template-columns: 1fr; 
            margin-bottom: 10vh;
            gap: 2rem;
          }
          .process-item-content { order: 2 !important; }
          .process-item-card { order: 3 !important; padding: 2rem !important; }
          .stats-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: clamp(2.5rem, 12vw, 5rem) !important; }
        }
      `}</style>
      
      <Header />

      {/* --- HERO SECTION --- */}
      <section style={{ minHeight: '90vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '100px 5%' }}>
        <motion.div style={{ position: 'absolute', inset: 0, opacity: 0.3, scale }}>
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Process Background" />
        </motion.div>
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', width: '100%' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ color: '#FF6B00', fontWeight: '900', letterSpacing: '8px', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>Methodology</motion.span>
          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: '#fff', fontWeight: '950', lineHeight: 0.9, letterSpacing: '-4px' }}>
            ENGINEERING <br /> <span style={{ color: '#FF6B00' }}>PRECISION.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ color: '#aaa', maxWidth: '700px', margin: '3rem auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
            Our multi-disciplinary process transforms complex requirements into scalable industrial solutions. We bridge the gap from concept to mass production.
          </motion.p>
        </div>
      </section>

      {/* --- TECHNICAL SPECS GRID --- */}
      <section style={{ padding: '10vh 8%' }}>
        {processData.map((process, idx) => (
          <motion.div 
            key={idx}
            className="process-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="process-item-content" style={{ order: idx % 2 === 0 ? 1 : 2, position: 'relative' }}>
              <div style={{ fontSize: 'clamp(4rem, 10vw, 6rem)', fontWeight: '900', color: '#f0f0f0', position: 'absolute', top: '-3rem', left: '-1rem', zIndex: -1 }}>{process.id}</div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ color: '#FF6B00', marginBottom: '2rem' }}>{process.icon}</div>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: 1.1 }}>{process.title}</h2>
                <p style={{ fontSize: '1.1rem', color: '#333', fontWeight: '600', marginBottom: '1.5rem' }}>{process.shortDesc}</p>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.8, marginBottom: '3rem' }}>{process.longDesc}</p>
                
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  {process.tags.map(tag => (
                    <span key={tag} style={{ border: '1px solid #FF6B00', color: '#FF6B00', padding: '0.4rem 1.2rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 'bold' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="process-item-card" style={{ 
              order: idx % 2 === 0 ? 2 : 1, 
              background: '#0A0A0A', 
              padding: '4rem', 
              borderRadius: '2.5rem', 
              color: '#fff',
              boxShadow: '0 40px 80px rgba(0,0,0,0.15)'
            }}>
              <h4 style={{ color: '#FF6B00', fontWeight: '900', marginBottom: '2rem', fontSize: '1.2rem', borderBottom: '2px solid #222', paddingBottom: '1rem' }}>TECHNICAL SPECIFICATIONS</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {process.technicalDetails.map((detail, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: '#888', fontSize: '0.9rem', fontWeight: 'bold' }}>{detail.label}</span>
                    <span style={{ color: '#fff', fontSize: '0.9rem', textAlign: 'right', maxWidth: '60%' }}>{detail.val}</span>
                  </div>
                ))}
              </div>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#FF6B00', color: '#fff' }}
                style={{ marginTop: '3rem', width: '100%', padding: '1.2rem', background: 'transparent', border: '1px solid #FF6B00', color: '#FF6B00', fontWeight: 'bold', borderRadius: '0.5rem', cursor: 'pointer' }}>
                VIEW CASE STUDY
              </motion.button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* --- PROCESS SUMMARY BANNER --- */}
      <section style={{ padding: '10vh 8%', background: '#f8f8f8', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '900', marginBottom: '4rem' }}>
          Concept Validation <ArrowRight style={{ verticalAlign: 'middle' }} /> Prototype <ArrowRight style={{ verticalAlign: 'middle' }} /> Mass Production
        </h2>
        <div className="stats-grid">
          {[
            { label: "R&D Capacity", val: "15+ Projects" },
            { label: "Production Scale", val: "3,250+ Units" },
            { label: "Full Stack", val: "Web & Mobile" },
            { label: "QC Protocol", val: "Zero-Error" }
          ].map((stat, idx) => (
            <div key={idx} style={{ background: '#fff', padding: '2rem', borderRadius: '1rem', border: '1px solid #eee' }}>
              <div style={{ color: '#FF6B00', fontSize: '2rem', fontWeight: '900' }}>{stat.val}</div>
              <div style={{ color: '#999', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ArrowRight = ({ style }) => (
  <svg style={style} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

export default OurProcess;