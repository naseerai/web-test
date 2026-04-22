import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "./Footer";

const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

const ResourcesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const colors = {
    orange: "#f47c20",
    orangeLight: "rgba(244,124,32,0.1)",
    orangeMid: "rgba(244,124,32,0.18)",
    black: "#0f0f0f",
    white: "#ffffff",
    cream: "#fdf8f3",
    lightBg: "#f8f9fa",
    textMain: "#171717",
    textMuted: "#5f5f5f",
    border: "rgba(0,0,0,0.08)",
    borderOrange: "rgba(244,124,32,0.3)",
  };

  const filters = ["All", "Guides", "Whitepapers", "Tools", "Case Studies", "Videos"];

  const featured = {
    tag: "Featured Resource",
    title: "The Natural Technology Manifesto",
    desc: "A comprehensive guide to understanding how technology can be reshaped to align with human needs and environmental sustainability. This manifesto outlines the philosophy, principles, and practical applications that drive every MYACCESS innovation.",
    type: "Whitepaper",
    readTime: "12 min read",
    date: "March 2024",
    img: "/assets/resources/featured.webp",
  };

  const resources = [
    {
      category: "Guides",
      icon: "📘",
      title: "Getting Started with IoT-Based Access Control",
      desc: "A step-by-step guide to deploying smart access systems in industrial environments. Covers hardware setup, cloud integration, and security protocols.",
      readTime: "8 min read",
      date: "Jan 2024",
      tag: "Beginner",
      color: "#e8f4fd",
    },
    {
      category: "Whitepapers",
      icon: "📄",
      title: "Embedded AI at the Edge: Architecture Patterns",
      desc: "Deep dive into deploying AI inference on constrained hardware. Real-world benchmarks from MYACCESS projects across manufacturing and healthcare sectors.",
      readTime: "18 min read",
      date: "Feb 2024",
      tag: "Advanced",
      color: "#fdf3e8",
    },
    {
      category: "Tools",
      icon: "🔧",
      title: "MYACCESS Device Configuration Toolkit",
      desc: "Open-source CLI tool for provisioning, testing, and monitoring embedded devices remotely. Supports ESP32, STM32, and custom MYACCESS hardware.",
      readTime: "Tool",
      date: "Dec 2023",
      tag: "Open Source",
      color: "#edf8f0",
    },
    {
      category: "Case Studies",
      icon: "🏭",
      title: "Smart Manufacturing: 40% Downtime Reduction",
      desc: "How a Vizag-based manufacturer reduced production downtime by 40% using MYACCESS predictive maintenance and real-time sensor monitoring.",
      readTime: "6 min read",
      date: "Nov 2023",
      tag: "Case Study",
      color: "#f3edfb",
    },
    {
      category: "Videos",
      icon: "🎬",
      title: "Live Demo: Cloud Dashboard for Fleet Monitoring",
      desc: "Watch our engineers walk through the full MYACCESS cloud platform — from device onboarding to live telemetry visualization and alert configuration.",
      readTime: "22 min watch",
      date: "Mar 2024",
      tag: "Video",
      color: "#fdf3e8",
    },
    {
      category: "Guides",
      icon: "🔐",
      title: "Security Hardening Guide for IoT Deployments",
      desc: "Best practices for securing MQTT communications, firmware updates, and device authentication in production IoT environments.",
      readTime: "10 min read",
      date: "Oct 2023",
      tag: "Security",
      color: "#fdeaea",
    },
    {
      category: "Case Studies",
      icon: "🏥",
      title: "Healthcare Asset Tracking: Zero Loss Quarter",
      desc: "A regional hospital eliminated equipment loss entirely using MYACCESS BLE tracking. Complete implementation story with ROI breakdown.",
      readTime: "5 min read",
      date: "Sep 2023",
      tag: "Case Study",
      color: "#edf8f0",
    },
    {
      category: "Tools",
      icon: "☁️",
      title: "Cloud Cost Estimator for IoT Projects",
      desc: "Calculate your expected cloud infrastructure costs before deployment. Input device count, data frequency, and storage needs to get an instant estimate.",
      readTime: "Tool",
      date: "Aug 2023",
      tag: "Calculator",
      color: "#e8f4fd",
    },
    {
      category: "Whitepapers",
      icon: "🌱",
      title: "Sustainable Hardware Design: MYACCESS Framework",
      desc: "How we design embedded hardware with longevity, repairability, and minimal environmental impact. Includes lifecycle analysis and component selection criteria.",
      readTime: "14 min read",
      date: "Jul 2023",
      tag: "Sustainability",
      color: "#edf8f0",
    },
  ];

  const docSections = [
    { icon: "⚡", title: "Quick Start", desc: "Set up your first MYACCESS device in under 30 minutes", links: ["Hardware Unboxing Guide", "Firmware Flashing 101", "Cloud Pairing Walkthrough", "First Dashboard Setup"] },
    { icon: "🔌", title: "API Reference", desc: "Complete REST & WebSocket API documentation", links: ["Authentication & Tokens", "Device Management API", "Telemetry Endpoints", "Webhook Configuration"] },
    { icon: "📡", title: "Hardware Docs", desc: "Schematics, datasheets, and integration guides", links: ["ESP32 Module Pinout", "STM32 Integration Guide", "Custom PCB Templates", "EMS Assembly Specs"] },
    { icon: "☁️", title: "Cloud Platform", desc: "Deploy, monitor, and scale your deployments", links: ["Dashboard Overview", "Alert Configuration", "Multi-Site Management", "Data Export & Analytics"] },
  ];

  const stats = [
    { number: "200+", label: "Resources Published" },
    { number: "15K+", label: "Downloads This Year" },
    { number: "48", label: "Video Tutorials" },
    { number: "Free", label: "All Core Resources" },
  ];

  const filtered = activeFilter === "All" ? resources : resources.filter(r => r.category === activeFilter);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: colors.white, color: colors.textMain, overflowX: "hidden" }}>
      <FontLoader />
      <Header />

      <style>{`
        .res-container { width: 90%; max-width: 1300px; margin: 0 auto; padding: 6rem 0; }

        /* Hero */
        .res-hero { padding-top: 80px; background: ${colors.cream}; position: relative; overflow: hidden; }
        .res-hero::before { content: ''; position: absolute; top: -120px; right: -120px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(244,124,32,0.12) 0%, transparent 70%); pointer-events: none; }
        .res-hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, ${colors.borderOrange}, transparent); }

        .res-hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 5rem; align-items: center; }

        /* Stats bar */
        .res-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .res-stat-item { padding: 2.5rem; border-right: 1px solid ${colors.border}; }
        .res-stat-item:last-child { border-right: none; }

        /* Featured */
        .featured-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-radius: 28px; overflow: hidden; box-shadow: 0 24px 60px rgba(0,0,0,0.08); }

        /* Filter bar */
        .filter-scroll { display: flex; gap: 0.6rem; flex-wrap: wrap; }
        .filter-btn { padding: 0.6rem 1.4rem; border-radius: 50px; border: 1.5px solid ${colors.border}; background: transparent; font-size: 0.88rem; font-weight: 600; cursor: pointer; transition: 0.25s; font-family: inherit; color: ${colors.textMain}; }
        .filter-btn:hover { border-color: ${colors.orange}; color: ${colors.orange}; }
        .filter-btn.active { background: ${colors.orange}; color: white; border-color: ${colors.orange}; }

        /* Resource cards grid */
        .res-cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }

        /* Resource card */
        .res-card { border-radius: 22px; border: 1.5px solid ${colors.border}; background: ${colors.white}; transition: 0.35s; display: flex; flex-direction: column; overflow: hidden; }
        .res-card:hover { transform: translateY(-8px); border-color: ${colors.orange}; box-shadow: 0 20px 50px rgba(244,124,32,0.1); }

        /* Docs grid */
        .docs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }

        /* Newsletter */
        .newsletter-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }

        .orange-tag { display: inline-block; padding: 0.5rem 1.2rem; background: ${colors.orangeLight}; color: ${colors.orange}; border-radius: 50px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-bottom: 1.2rem; letter-spacing: 0.5px; }
        .orange-tag-dark { display: inline-block; padding: 0.5rem 1.2rem; background: rgba(255,255,255,0.12); color: white; border-radius: 50px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-bottom: 1.2rem; }

        .btn-orange { background: ${colors.orange}; color: white; border: none; padding: 1rem 2.2rem; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s; font-size: 0.95rem; font-family: inherit; }
        .btn-orange:hover { background: ${colors.black}; transform: translateY(-2px); }
        .btn-outline-dark { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.3); padding: 1rem 2.2rem; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s; font-size: 0.95rem; font-family: inherit; }
        .btn-outline-dark:hover { border-color: white; background: rgba(255,255,255,0.08); }

        .doc-link { display: flex; align-items: center; gap: 0.5rem; padding: 0.55rem 0; border-bottom: 1px solid ${colors.border}; font-size: 0.88rem; color: ${colors.textMuted}; text-decoration: none; transition: 0.2s; cursor: pointer; }
        .doc-link:last-child { border-bottom: none; }
        .doc-link:hover { color: ${colors.orange}; padding-left: 4px; }
        .doc-link::before { content: '→'; color: ${colors.orange}; font-size: 0.8rem; transition: 0.2s; }

        /* Responsive */
        @media (max-width: 1100px) {
          .res-cards-grid { grid-template-columns: repeat(2, 1fr); }
          .docs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 1024px) {
          .res-hero-grid { grid-template-columns: 1fr; gap: 3rem; }
          .featured-grid { grid-template-columns: 1fr; }
          .featured-grid .feat-img { height: 280px; }
          .newsletter-inner { grid-template-columns: 1fr; gap: 2rem; }
          .res-stats { grid-template-columns: repeat(2, 1fr); }
          .res-stat-item { border-right: none; border-bottom: 1px solid ${colors.border}; }
          .res-stat-item:nth-child(2n) { border-right: none; }
        }
        @media (max-width: 768px) {
          .res-container { padding: 3.5rem 0; }
          .res-cards-grid { grid-template-columns: 1fr; }
          .docs-grid { grid-template-columns: 1fr; }
          .res-stats { grid-template-columns: repeat(2, 1fr); }
          h1 { font-size: 2.6rem !important; }
        }
        @media (max-width: 480px) {
          .res-stats { grid-template-columns: 1fr 1fr; }
          .featured-grid { border-radius: 18px; }
          h2 { font-size: 1.8rem !important; }
          h1 { font-size: 2rem !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="res-hero">
        <div className="res-container">
          <div className="res-hero-grid">
            <div>
              <div className="orange-tag">Resources Hub</div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, color: colors.black, marginBottom: "1.5rem" }}>
                Everything You Need to <span style={{ color: colors.orange, fontStyle: "italic" }}>Build Better.</span>
              </h1>
              <p style={{ fontSize: "1.1rem", color: colors.textMuted, lineHeight: 1.9, marginBottom: "2.5rem", maxWidth: "520px" }}>
                Guides, whitepapers, tools, case studies, and video tutorials — all free, all built from real MYACCESS projects and research. No fluff. Just knowledge that works.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className="btn-orange">Browse All Resources</button>
                <button style={{ background: "transparent", border: `2px solid ${colors.border}`, padding: "1rem 2.2rem", borderRadius: "12px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: "0.95rem", color: colors.textMain, transition: "0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = colors.orange; e.currentTarget.style.color = colors.orange; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.textMain; }}>
                  View Documentation
                </button>
              </div>
            </div>

            {/* Right: Floating resource preview cards */}
            <div style={{ position: "relative", height: "380px" }}>
              {[
                { top: "0%", left: "10%", icon: "📘", label: "Guides", count: "42 Resources", bg: "#e8f4fd" },
                { top: "22%", left: "50%", icon: "🎬", label: "Videos", count: "48 Tutorials", bg: "#fdf3e8" },
                { top: "55%", left: "5%", icon: "📄", label: "Whitepapers", count: "28 Papers", bg: "#edf8f0" },
                { top: "68%", left: "48%", icon: "🔧", label: "Tools", count: "15 Tools", bg: "#f3edfb" },
              ].map((c, i) => (
                <div key={i} style={{
                  position: "absolute", top: c.top, left: c.left,
                  background: colors.white, borderRadius: "18px", padding: "1.2rem 1.5rem",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)", border: `1px solid ${colors.border}`,
                  display: "flex", alignItems: "center", gap: "0.8rem", minWidth: "180px",
                  animation: `float${i} 4s ease-in-out infinite`,
                }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "0.9rem" }}>{c.label}</div>
                    <div style={{ fontSize: "0.75rem", color: colors.textMuted }}>{c.count}</div>
                  </div>
                </div>
              ))}
              <style>{`
                @keyframes float0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
                @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
                @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
                @keyframes float3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: colors.black, borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <div className="res-stats">
            {stats.map((s, i) => (
              <div key={i} className="res-stat-item" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: "2.8rem", fontWeight: 800, color: colors.orange }}>{s.number}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED RESOURCE ── */}
      <section style={{ background: colors.lightBg }}>
        <div className="res-container">
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="orange-tag">Featured</div>
            <h2 style={{ fontSize: "2.6rem", fontWeight: 800 }}>This Month's Must-Read</h2>
          </div>
          <div className="featured-grid" style={{ border: `1.5px solid ${colors.borderOrange}` }}>
            {/* Left: Image */}
            <div className="feat-img" style={{ background: `linear-gradient(135deg, ${colors.black} 0%, #1a1a1a 100%)`, minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "3rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "2rem", left: "2rem", background: colors.orange, color: "white", padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 800 }}>{featured.type}</div>
              <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", background: `radial-gradient(circle, rgba(244,124,32,0.2) 0%, transparent 70%)`, pointerEvents: "none" }} />
              <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📋</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: colors.white, lineHeight: 1.3, marginBottom: "1rem" }}>{featured.title}</h3>
              <div style={{ display: "flex", gap: "1rem" }}>
                <span style={{ color: colors.orange, fontSize: "0.82rem", fontWeight: 700 }}>{featured.readTime}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem" }}>{featured.date}</span>
              </div>
            </div>
            {/* Right: Content */}
            <div style={{ background: colors.white, padding: "3.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="orange-tag">Featured Whitepaper</div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "1.2rem", lineHeight: 1.3 }}>{featured.title}</h3>
              <p style={{ color: colors.textMuted, lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.97rem" }}>{featured.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                {["Philosophy", "Sustainability", "System Design", "Innovation"].map((t, i) => (
                  <span key={i} style={{ padding: "0.3rem 0.9rem", background: colors.orangeLight, color: colors.orange, borderRadius: "50px", fontSize: "0.78rem", fontWeight: 700 }}>{t}</span>
                ))}
              </div>
              <button className="btn-orange" style={{ alignSelf: "flex-start" }}>Download Free PDF →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESOURCE LIBRARY ── */}
      <section style={{ background: colors.white }}>
        <div className="res-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div>
              <div className="orange-tag">Library</div>
              <h2 style={{ fontSize: "2.6rem", fontWeight: 800, margin: 0 }}>All Resources</h2>
            </div>
            <div className="filter-scroll">
              {filters.map(f => (
                <button key={f} className={`filter-btn ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
              ))}
            </div>
          </div>
          <div className="res-cards-grid">
            {filtered.map((r, i) => (
              <div key={i} className="res-card">
                <div style={{ background: r.color, padding: "1.8rem 1.8rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "2.2rem" }}>{r.icon}</span>
                  <span style={{ padding: "0.3rem 0.8rem", background: "rgba(255,255,255,0.7)", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800, color: colors.textMain }}>{r.tag}</span>
                </div>
                <div style={{ padding: "1.5rem 1.8rem 2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: colors.orange, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.6rem" }}>{r.category}</div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 800, lineHeight: 1.4, marginBottom: "0.8rem", color: colors.textMain }}>{r.title}</h4>
                  <p style={{ fontSize: "0.86rem", color: colors.textMuted, lineHeight: 1.7, flex: 1, marginBottom: "1.5rem" }}>{r.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1rem", borderTop: `1px solid ${colors.border}` }}>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <span style={{ fontSize: "0.78rem", color: colors.textMuted }}>{r.readTime}</span>
                      <span style={{ fontSize: "0.78rem", color: colors.textMuted }}>{r.date}</span>
                    </div>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: colors.orange, cursor: "pointer" }}>Access →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem", color: colors.textMuted }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
              <p>No resources found for this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* ── DOCUMENTATION HUB ── */}
      <section style={{ background: colors.cream }}>
        <div className="res-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="orange-tag">Documentation</div>
            <h2 style={{ fontSize: "2.6rem", fontWeight: 800, marginBottom: "1rem" }}>Developer & Engineer Docs</h2>
            <p style={{ color: colors.textMuted, maxWidth: "560px", margin: "0 auto", lineHeight: 1.8 }}>
              Everything from unboxing to production deployment. Our documentation is maintained by the same engineers who build the products.
            </p>
          </div>
          <div className="docs-grid">
            {docSections.map((d, i) => (
              <div key={i} style={{ background: colors.white, borderRadius: "22px", padding: "2rem", border: `1.5px solid ${colors.border}`, transition: "0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = colors.orange; e.currentTarget.style.boxShadow = "0 12px 40px rgba(244,124,32,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: colors.orangeLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1.2rem" }}>{d.icon}</div>
                <h4 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.4rem" }}>{d.title}</h4>
                <p style={{ fontSize: "0.83rem", color: colors.textMuted, marginBottom: "1.2rem", lineHeight: 1.6 }}>{d.desc}</p>
                <div>
                  {d.links.map((l, j) => (
                    <div key={j} className="doc-link">{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER / CTA ── */}
      <section style={{ background: colors.black, padding: "6rem 0" }}>
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <div className="newsletter-inner">
            <div>
              <div className="orange-tag-dark">Stay Updated</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: colors.white, lineHeight: 1.2, marginBottom: "1.2rem" }}>
                New Resources, <span style={{ color: colors.orange }}>Every Month.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "1rem" }}>
                Join 3,000+ engineers and innovators who get MYACCESS resources delivered to their inbox — whitepapers, tools, case studies, and early access to new releases.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2.5rem" }}>
              <h4 style={{ color: colors.white, fontWeight: 800, marginBottom: "1.5rem", fontSize: "1.1rem" }}>Get Free Access</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input type="text" placeholder="Your Name" style={{ padding: "1rem 1.2rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: colors.white, fontSize: "0.95rem", outline: "none", fontFamily: "inherit" }} />
                <input type="email" placeholder="Work Email Address" style={{ padding: "1rem 1.2rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: colors.white, fontSize: "0.95rem", outline: "none", fontFamily: "inherit" }} />
                <button className="btn-orange" style={{ padding: "1.1rem", fontSize: "1rem" }}>Subscribe & Get Instant Access</button>
              </div>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", marginTop: "1rem", textAlign: "center" }}>No spam. Unsubscribe anytime. Your data is safe with us.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;