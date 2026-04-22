import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "./Footer";

const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

const ApplicationsPage = () => {
  const [activeIndustry, setActiveIndustry] = useState("All");

  const colors = {
    orange: "#f47c20",
    orangeLight: "rgba(244,124,32,0.1)",
    orangeMid: "rgba(244,124,32,0.18)",
    black: "#0f0f0f",
    white: "#ffffff",
    offWhite: "#faf9f7",
    lightBg: "#f4f4f4",
    textMain: "#171717",
    textMuted: "#5f5f5f",
    border: "rgba(0,0,0,0.08)",
  };

  const industries = ["All", "Manufacturing", "Healthcare", "Education", "Agriculture", "Logistics", "Smart Buildings"];

  const heroStats = [
    { number: "120+", label: "Deployments" },
    { number: "8", label: "Industries" },
    { number: "99.8%", label: "Uptime" },
    { number: "40%", label: "Avg Cost Saved" },
  ];

  const applications = [
    {
      industry: "Manufacturing",
      icon: "🏭",
      title: "Smart Factory Access & Safety Control",
      shortDesc: "Zone-based access control with real-time safety compliance monitoring for large-scale manufacturing plants.",
      fullDesc: "MYACCESS deploys multi-zone embedded access control systems that enforce safety protocols, prevent unauthorized entry into hazardous areas, and monitor worker presence in real-time. Integrated with ERP systems for seamless compliance reporting.",
      metrics: ["40% reduction in safety incidents", "Real-time worker tracking", "Automated compliance logs", "Integration with SAP/ERP"],
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
      tag: "Most Deployed",
      tagColor: colors.orange,
      techStack: ["ESP32", "MQTT", "Django", "AWS IoT"],
    },
    {
      industry: "Healthcare",
      icon: "🏥",
      title: "Hospital Asset Tracking & Patient Safety",
      shortDesc: "BLE-based real-time tracking of medical equipment, staff, and patients across multi-floor hospital facilities.",
      fullDesc: "Hospitals lose thousands of hours annually to equipment misplacement. MYACCESS deploys a BLE mesh network that tracks every tagged asset in real-time, sends alerts when critical equipment leaves designated zones, and provides usage analytics for procurement decisions.",
      metrics: ["Zero equipment loss achieved", "85% faster asset retrieval", "₹18L+ saved annually", "HIPAA-ready data handling"],
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
      tag: "High Impact",
      tagColor: "#2d7a4f",
      techStack: ["BLE 5.0", "Node.js", "Azure", "React"],
    },
    {
      industry: "Education",
      icon: "🎓",
      title: "Smart Campus Attendance & Security",
      shortDesc: "Automated attendance, visitor management, and perimeter security for schools and universities.",
      fullDesc: "MYACCESS transforms traditional campuses into smart, secure environments. RFID-based student attendance eliminates proxy marking, smart gates control visitor access, and real-time dashboards give administrators complete visibility. Parent notification systems ensure student safety.",
      metrics: ["99.8% attendance accuracy", "Zero proxy marking", "Instant parent alerts", "Works for 10–10,000 students"],
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
      tag: "Community Favorite",
      tagColor: "#4a6fa5",
      techStack: ["RFID", "React Native", "Django", "Firebase"],
    },
    {
      industry: "Agriculture",
      icon: "🌾",
      title: "Precision Agriculture & Smart Irrigation",
      shortDesc: "Soil sensor networks, automated irrigation, and crop health monitoring for modern farming operations.",
      fullDesc: "MYACCESS brings embedded intelligence to the field. A network of soil moisture, temperature, and pH sensors feeds real-time data to a cloud dashboard. Automated irrigation controllers respond to sensor readings, reducing water usage by up to 40% while improving crop yields.",
      metrics: ["40% water reduction", "22% yield increase", "Solar-powered sensors", "Works offline with edge compute"],
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
      tag: "Sustainability Award",
      tagColor: "#2d7a4f",
      techStack: ["LoRaWAN", "Edge AI", "MQTT", "Python"],
    },
    {
      industry: "Logistics",
      icon: "🚚",
      title: "Fleet Monitoring & Cold Chain Management",
      shortDesc: "GPS + IoT-based real-time fleet tracking with temperature monitoring for cold-chain logistics.",
      fullDesc: "For logistics operators, MYACCESS provides end-to-end visibility — GPS tracking every vehicle, IoT sensors monitoring cargo temperature, automated alerts for route deviations, and a cloud dashboard that gives dispatchers a live map of their entire fleet.",
      metrics: ["Real-time GPS tracking", "±0.5°C temp accuracy", "30% fuel savings via routing", "Automated SLA compliance"],
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
      tag: "New",
      tagColor: colors.orange,
      techStack: ["GPS/GNSS", "4G LTE", "React", "AWS"],
    },
    {
      industry: "Smart Buildings",
      icon: "🏢",
      title: "Intelligent Building Management System",
      shortDesc: "Unified control of energy, access, HVAC, and security for commercial and residential buildings.",
      fullDesc: "MYACCESS BMS integrates access control, energy metering, HVAC automation, and security into a single cloud platform. Machine learning models predict occupancy patterns and automatically adjust lighting and temperature, reducing energy costs by up to 35%.",
      metrics: ["35% energy savings", "Unified control dashboard", "Predictive HVAC control", "Multi-building management"],
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      tag: "Smart City Ready",
      tagColor: "#4a6fa5",
      techStack: ["Modbus", "BACnet", "Edge AI", "React"],
    },
  ];

  const techCapabilities = [
    { icon: "📡", title: "Wireless Protocols", items: ["BLE 5.0 & Zigbee", "LoRaWAN for long range", "Wi-Fi 6 & 4G LTE", "RFID & NFC"] },
    { icon: "⚙️", title: "Edge Computing", items: ["ESP32 & STM32 MCUs", "FPGA acceleration", "On-device AI inference", "OTA firmware updates"] },
    { icon: "☁️", title: "Cloud Integration", items: ["AWS IoT Core", "Azure IoT Hub", "Custom MQTT brokers", "REST & WebSocket APIs"] },
    { icon: "🔒", title: "Security", items: ["End-to-end encryption", "Hardware security modules", "Role-based access control", "Audit trail logging"] },
  ];

  const caseHighlight = {
    company: "AutoTech Vizag",
    industry: "Manufacturing",
    challenge: "A 2,000-employee auto-parts plant had zero visibility into who was in which zone at any given time. Three safety incidents in one year triggered a mandate for a complete overhaul.",
    solution: "MYACCESS deployed 48 access control nodes across 12 zones, integrated with the plant's existing SAP system, and built a real-time safety dashboard visible on every floor.",
    result: "Zero safety incidents in 14 months following deployment. Worker evacuation time in drills dropped from 18 minutes to 4 minutes.",
    metrics: [{ val: "0", label: "Safety Incidents" }, { val: "4 min", label: "Evacuation Time" }, { val: "48", label: "Control Nodes" }, { val: "14mo+", label: "Incident-Free" }],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  };

  const filtered = activeIndustry === "All" ? applications : applications.filter(a => a.industry === activeIndustry);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: colors.white, color: colors.textMain, overflowX: "hidden" }}>
      <FontLoader />
      <Header />

      <style>{`
        .app-container { width: 90%; max-width: 1300px; margin: 0 auto; padding: 6rem 0; }

        /* Hero */
        .app-hero { padding-top: 80px; background: ${colors.black}; position: relative; overflow: hidden; }
        .app-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; min-height: 82vh; }
        .app-hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse at 80% 50%, rgba(244,124,32,0.12) 0%, transparent 60%); pointer-events: none; }

        /* Hero image mosaic */
        .hero-mosaic { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 1rem; height: 480px; }
        .mosaic-main { grid-row: 1 / 3; border-radius: 22px; overflow: hidden; }
        .mosaic-sm { border-radius: 18px; overflow: hidden; }
        .mosaic-main img, .mosaic-sm img { width: 100%; height: 100%; object-fit: cover; }

        /* Stats bar */
        .app-stats { display: grid; grid-template-columns: repeat(4,1fr); }

        /* Filter */
        .industry-filter { display: flex; gap: 0.6rem; flex-wrap: wrap; }
        .filter-btn { padding: 0.6rem 1.4rem; border-radius: 50px; border: 1.5px solid ${colors.border}; background: transparent; font-size: 0.88rem; font-weight: 600; cursor: pointer; transition: 0.25s; font-family: inherit; color: ${colors.textMain}; }
        .filter-btn:hover { border-color: ${colors.orange}; color: ${colors.orange}; }
        .filter-btn.active { background: ${colors.orange}; color: white; border-color: ${colors.orange}; }

        /* App cards */
        .app-cards-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 2rem; }
        .app-card { border-radius: 26px; overflow: hidden; border: 1.5px solid ${colors.border}; background: ${colors.white}; transition: 0.35s; }
        .app-card:hover { transform: translateY(-8px); border-color: ${colors.orange}; box-shadow: 0 24px 60px rgba(244,124,32,0.1); }
        .app-card-img { width: 100%; height: 220px; object-fit: cover; display: block; }
        .app-card-body { padding: 2rem; }

        /* Metric pills */
        .metric-pill { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px solid ${colors.border}; font-size: 0.84rem; color: ${colors.textMuted}; }
        .metric-pill:last-child { border-bottom: none; }
        .metric-pill::before { content: '✓'; color: ${colors.orange}; font-weight: 900; font-size: 0.8rem; }

        /* Tech stack tags */
        .tech-tag { padding: 0.25rem 0.7rem; background: ${colors.lightBg}; border-radius: 6px; font-size: 0.72rem; font-weight: 700; color: ${colors.textMuted}; }

        /* Case highlight */
        .case-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .case-metrics { display: grid; grid-template-columns: repeat(2,1fr); gap: 1rem; margin-top: 2rem; }

        /* Tech capabilities */
        .tech-cap-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; }

        /* Industry grid */
        .industry-showcase { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }

        .orange-tag { display: inline-block; padding: 0.5rem 1.2rem; background: ${colors.orangeLight}; color: ${colors.orange}; border-radius: 50px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-bottom: 1.2rem; }
        .white-tag { display: inline-block; padding: 0.5rem 1.2rem; background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.85); border-radius: 50px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-bottom: 1.2rem; }
        .btn-orange { background: ${colors.orange}; color: white; border: none; padding: 1rem 2.2rem; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s; font-size: 0.95rem; font-family: inherit; }
        .btn-orange:hover { background: #d96612; transform: translateY(-2px); }

        @media (max-width: 1100px) {
          .tech-cap-grid { grid-template-columns: repeat(2,1fr); }
          .industry-showcase { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 1024px) {
          .app-hero-grid { grid-template-columns: 1fr; min-height: auto; gap: 3rem; }
          .hero-mosaic { height: 320px; }
          .case-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .app-stats { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .app-container { padding: 3.5rem 0; }
          .app-cards-grid { grid-template-columns: 1fr; }
          .tech-cap-grid { grid-template-columns: 1fr; }
          .industry-showcase { grid-template-columns: 1fr; }
          .case-metrics { grid-template-columns: repeat(2,1fr); }
          h1 { font-size: 2.6rem !important; }
        }
        @media (max-width: 480px) {
          .hero-mosaic { height: 240px; gap: 0.6rem; }
          .app-stats { grid-template-columns: repeat(2,1fr); }
          h2 { font-size: 1.8rem !important; }
          h1 { font-size: 2rem !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="app-hero">
        <div className="app-hero-bg" />
        <div className="app-container">
          <div className="app-hero-grid">
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="white-tag">Applications</div>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.4rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, color: colors.white, marginBottom: "1.5rem" }}>
                Real Solutions.<br /><span style={{ color: colors.orange }}>Real Industries.</span><br />Real Impact.
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.9, marginBottom: "2.5rem", maxWidth: "500px" }}>
                MYACCESS technology is deployed across manufacturing floors, hospital corridors, farm fields, and smart buildings — solving problems that matter, at scale.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className="btn-orange">Explore Applications</button>
                <button style={{ background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.18)", padding: "1rem 2.2rem", borderRadius: "12px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: "0.95rem", color: colors.white, transition: "0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
                  Request a Demo
                </button>
              </div>
            </div>

            {/* Image Mosaic */}
            <div className="hero-mosaic" style={{ position: "relative", zIndex: 1 }}>
              <div className="mosaic-main">
                <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80" alt="Manufacturing" />
              </div>
              <div className="mosaic-sm">
                <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&q=80" alt="Healthcare" />
              </div>
              <div className="mosaic-sm" style={{ position: "relative" }}>
                <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80" alt="Agriculture" />
                <div style={{ position: "absolute", bottom: "0.8rem", left: "0.8rem", background: colors.orange, color: "white", padding: "0.3rem 0.8rem", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800 }}>6 Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: colors.orange }}>
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <div className="app-stats">
            {heroStats.map((s, i) => (
              <div key={i} style={{ padding: "2.5rem 2rem", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.25)" : "none", textAlign: "center" }}>
                <div style={{ fontSize: "2.8rem", fontWeight: 800, color: colors.white }}>{s.number}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", marginTop: "0.2rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION LIBRARY ── */}
      <section style={{ background: colors.white }}>
        <div className="app-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }}>
            <div>
              <div className="orange-tag">Application Library</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 800, margin: 0 }}>What We Build & Deploy</h2>
            </div>
            <div className="industry-filter">
              {industries.map(ind => (
                <button key={ind} className={`filter-btn ${activeIndustry === ind ? "active" : ""}`} onClick={() => setActiveIndustry(ind)}>{ind}</button>
              ))}
            </div>
          </div>

          <div className="app-cards-grid">
            {filtered.map((app, i) => (
              <div key={i} className="app-card">
                <div style={{ position: "relative" }}>
                  <img src={app.image} alt={app.title} className="app-card-img" />
                  <div style={{ position: "absolute", top: "1rem", left: "1rem", background: app.tagColor, color: "white", padding: "0.35rem 0.9rem", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 800 }}>{app.tag}</div>
                  <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", color: "white", padding: "0.35rem 0.9rem", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 700 }}>{app.industry}</div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(transparent, rgba(0,0,0,0.5))" }} />
                </div>
                <div className="app-card-body">
                  <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>{app.icon}</div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.7rem", lineHeight: 1.3 }}>{app.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: colors.textMuted, lineHeight: 1.7, marginBottom: "1.5rem" }}>{app.fullDesc}</p>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 800, color: colors.orange, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.8rem" }}>Key Outcomes</div>
                    {app.metrics.map((m, j) => <div key={j} className="metric-pill">{m}</div>)}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1.2rem", borderTop: `1px solid ${colors.border}` }}>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {app.techStack.map((t, j) => <span key={j} className="tech-tag">{t}</span>)}
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: colors.orange, cursor: "pointer", whiteSpace: "nowrap" }}>Case Study →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE HIGHLIGHT ── */}
      <section style={{ background: colors.offWhite }}>
        <div className="app-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="orange-tag">Spotlight</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 800, marginBottom: "0.8rem" }}>Deep Dive: AutoTech Vizag</h2>
            <p style={{ color: colors.textMuted, maxWidth: "560px", margin: "0 auto", lineHeight: 1.8 }}>A complete story — from the problem, to the build, to the measurable outcome.</p>
          </div>
          <div className="case-grid">
            <div style={{ borderRadius: "28px", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.1)" }}>
              <img src={caseHighlight.image} alt="AutoTech" style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
            </div>
            <div>
              <div style={{ display: "inline-block", padding: "0.3rem 0.9rem", background: colors.orangeLight, color: colors.orange, borderRadius: "50px", fontSize: "0.75rem", fontWeight: 800, marginBottom: "1.5rem" }}>{caseHighlight.industry}</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem", lineHeight: 1.3 }}>{caseHighlight.company}</h3>

              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontWeight: 800, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "1px", color: colors.orange, marginBottom: "0.5rem" }}>The Challenge</div>
                <p style={{ color: colors.textMuted, lineHeight: 1.7, fontSize: "0.92rem" }}>{caseHighlight.challenge}</p>
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontWeight: 800, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "1px", color: colors.orange, marginBottom: "0.5rem" }}>The Solution</div>
                <p style={{ color: colors.textMuted, lineHeight: 1.7, fontSize: "0.92rem" }}>{caseHighlight.solution}</p>
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontWeight: 800, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "1px", color: colors.orange, marginBottom: "0.5rem" }}>The Result</div>
                <p style={{ color: colors.textMuted, lineHeight: 1.7, fontSize: "0.92rem" }}>{caseHighlight.result}</p>
              </div>

              <div className="case-metrics">
                {caseHighlight.metrics.map((m, i) => (
                  <div key={i} style={{ background: colors.white, borderRadius: "16px", padding: "1.3rem", border: `1px solid ${colors.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 800, color: colors.orange }}>{m.val}</div>
                    <div style={{ fontSize: "0.75rem", color: colors.textMuted, marginTop: "0.2rem" }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH CAPABILITIES ── */}
      <section style={{ background: colors.black }}>
        <div className="app-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="white-tag">Under the Hood</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 800, color: colors.white, marginBottom: "0.8rem" }}>
              Technology That <span style={{ color: colors.orange }}>Powers It All</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>From bare-metal firmware to cloud dashboards — every layer built and owned by MYACCESS.</p>
          </div>
          <div className="tech-cap-grid">
            {techCapabilities.map((t, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "22px", padding: "2rem", transition: "0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = colors.orange; e.currentTarget.style.background = "rgba(244,124,32,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t.icon}</div>
                <h4 style={{ color: colors.white, fontWeight: 800, marginBottom: "1rem", fontSize: "1rem" }}>{t.title}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {t.items.map((item, j) => (
                    <li key={j} style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", padding: "0.45rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                      <span style={{ color: colors.orange, fontWeight: 800 }}>→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: colors.offWhite, padding: "7rem 0", textAlign: "center" }}>
        <div style={{ width: "90%", maxWidth: "800px", margin: "0 auto" }}>
          <div className="orange-tag">Get Started</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, marginBottom: "1.2rem", lineHeight: 1.2 }}>
            Have a Problem Worth Solving?
          </h2>
          <p style={{ color: colors.textMuted, fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Tell us your industry and challenge. Our engineers will scope a solution, share relevant case studies, and walk you through a live demo — all for free.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-orange" style={{ padding: "1.2rem 2.8rem", fontSize: "1rem" }}>Book a Free Consultation</button>
            <button style={{ background: "transparent", border: `2px solid ${colors.border}`, padding: "1.2rem 2.8rem", borderRadius: "12px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: "1rem", color: colors.textMain, transition: "0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = colors.orange; e.currentTarget.style.color = colors.orange; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.textMain; }}>
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationsPage;