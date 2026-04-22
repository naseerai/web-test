import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./Footer";
import { useLang } from "../context/LanguageContext";

// ── Inline SVG Icons ──────────────────────────────────────────────
// Replace FleetIcon with this:
const FleetIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circular network of nodes */}
    <circle cx="28" cy="10" r="3" stroke="#e87722" strokeWidth="1.5" fill="none"/>
    <circle cx="46" cy="22" r="3" stroke="#333" strokeWidth="1.5" fill="none"/>
    <circle cx="46" cy="38" r="3" stroke="#333" strokeWidth="1.5" fill="none"/>
    <circle cx="28" cy="48" r="3" stroke="#333" strokeWidth="1.5" fill="none"/>
    <circle cx="10" cy="38" r="3" stroke="#e87722" strokeWidth="1.5" fill="none"/>
    <circle cx="10" cy="22" r="3" stroke="#e87722" strokeWidth="1.5" fill="none"/>
    <line x1="28" y1="13" x2="44" y2="20" stroke="#333" strokeWidth="1.2"/>
    <line x1="46" y1="25" x2="46" y2="35" stroke="#333" strokeWidth="1.2"/>
    <line x1="44" y1="40" x2="30" y2="46" stroke="#333" strokeWidth="1.2"/>
    <line x1="26" y1="46" x2="12" y2="40" stroke="#333" strokeWidth="1.2"/>
    <line x1="10" y1="35" x2="10" y2="25" stroke="#333" strokeWidth="1.2"/>
    <line x1="12" y1="20" x2="26" y2="13" stroke="#333" strokeWidth="1.2"/>
    {/* Plus button at bottom-left */}
    <circle cx="16" cy="42" r="6" fill="#fff" stroke="#0060d0" strokeWidth="1.5"/>
    <line x1="16" y1="39" x2="16" y2="45" stroke="#0060d0" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="13" y1="42" x2="19" y2="42" stroke="#0060d0" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Replace MaterialsIcon with this:
const MaterialsIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Flask body */}
    <path d="M22 8 L22 24 L12 42 Q10 46 14 46 L42 46 Q46 46 44 42 L34 24 L34 8 Z" 
      stroke="#0060d0" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
    {/* Flask neck top bar */}
    <line x1="19" y1="8" x2="37" y2="8" stroke="#0060d0" strokeWidth="2" strokeLinecap="round"/>
    {/* Liquid/layers inside flask bottom */}
    <path d="M16 38 Q28 33 40 38 L42 44 Q28 40 14 44 Z" fill="#0060d0" opacity="0.15"/>
    <path d="M14 42 Q28 38 42 42" stroke="#0060d0" strokeWidth="1.2" fill="none"/>
    {/* Bubbles */}
    <circle cx="24" cy="34" r="1.5" fill="#0060d0" opacity="0.5"/>
    <circle cx="30" cy="30" r="1" fill="#0060d0" opacity="0.4"/>
  </svg>
);

// Replace AutomationIcon with this:
const AutomationIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Monitor/screen */}
    <rect x="6" y="8" width="30" height="22" rx="2" stroke="#e87722" strokeWidth="1.8" fill="none"/>
    <rect x="9" y="11" width="24" height="16" rx="1" fill="#e87722" opacity="0.08"/>
    {/* Lines on screen */}
    <line x1="11" y1="15" x2="22" y2="15" stroke="#e87722" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="11" y1="18" x2="19" y2="18" stroke="#e87722" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="11" y1="21" x2="20" y2="21" stroke="#e87722" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Robotic arm */}
    <line x1="38" y1="12" x2="38" y2="24" stroke="#0060d0" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="38" y1="24" x2="48" y2="30" stroke="#0060d0" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="48" y1="30" x2="48" y2="40" stroke="#0060d0" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Arm joint circles */}
    <circle cx="38" cy="12" r="3" stroke="#0060d0" strokeWidth="1.5" fill="white"/>
    <circle cx="38" cy="24" r="3" stroke="#0060d0" strokeWidth="1.5" fill="white"/>
    <circle cx="48" cy="30" r="3" stroke="#0060d0" strokeWidth="1.5" fill="white"/>
    {/* Gripper */}
    <line x1="44" y1="40" x2="48" y2="40" stroke="#0060d0" strokeWidth="2" strokeLinecap="round"/>
    <line x1="48" y1="40" x2="52" y2="40" stroke="#0060d0" strokeWidth="2" strokeLinecap="round"/>
    {/* Base stand */}
    <rect x="34" y="40" width="8" height="4" rx="1" fill="#0060d0" opacity="0.3" stroke="#0060d0" strokeWidth="1.2"/>
    {/* Monitor stand */}
    <line x1="21" y1="30" x2="21" y2="36" stroke="#e87722" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="15" y1="36" x2="27" y2="36" stroke="#e87722" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
// ─────────────────────────────────────────────────────────────────

export default function FactorySolutions() {
  const { t } = useLang();
  const [activeSection, setActiveSection] = useState("fleet");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    ["fleet", "materials", "automation"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        .fs-wrapper,
        .fs-main {
          overflow: visible !important;
        }

        .fs-main { width: 100%; background: #fff; color: #000; }

        /* Hero */
        .fs-hero {
          position: relative;
          height: 80vh;
          min-height: 450px;
          display: flex;
          align-items: center;
          padding: 0 8%;
          color: #fff;
          overflow: hidden;
        }
        .hero-video {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%;
          object-fit: cover; z-index: 1;
        }
        .hero-overlay {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.3); z-index: 2;
        }
        .hero-content { position: relative; z-index: 3; }
        .fs-hero h1 { font-size: 42px; font-weight: 550; margin-bottom: 20px; }

        /* Bring to Production */
        .bring-prod-sec {
          display: flex; align-items: center;
          padding: 80px 8%; gap: 60px; background: #fff;
        }
        .bring-text { flex: 1; }
        .bring-text h2 { font-size: 42px; margin-bottom: 30px; font-weight: 700; }
        .bring-text p { font-size: 18px; line-height: 1.6; color: #333; margin-bottom: 20px; }
        .bring-img { flex: 1; }
        .bring-img img { width: 100%; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

        /* Production Solutions Cards */
        .prod-solutions-sec {
          background: #f5f5f5;
          padding: 80px 8%;
          text-align: center;
        }
        .prod-solutions-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #000;
        }
        .prod-solutions-sub {
          font-size: 16px;
          color: #555;
          margin-bottom: 48px;
        }
       .prod-cards-row {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}
        .prod-card {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 40px 32px;
          flex: 1;
          max-width: 400px;
          text-align: left;
          cursor: pointer;
          transition: box-shadow 0.2s;
        }
        .prod-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .prod-card-icon { margin-bottom: 24px; }
        .prod-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #000; }
        .prod-card p { font-size: 15px; line-height: 1.6; color: #555; margin: 0; }

        /* Layout */
        .fs-layout {
          display: flex;
          padding: 80px 8%;
          gap: 60px;
          max-width: 1400px;
          margin: 0 auto;
          overflow: visible;
        }

        /* Sidebar */
        .sidebar-container {
          width: 260px;
          min-width: 260px;
          align-self: flex-start;
          position: sticky;
          top: 100px;
          overflow: visible;
        }
        .sidebar-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 20px;
          border-bottom: 2px solid #0060d0;
          padding-bottom: 10px;
        }
        .sidebar-nav { list-style: none; padding: 0; margin: 0; }
        .sidebar-nav li { margin-bottom: 18px; }
        .sidebar-nav a {
          text-decoration: none;
          color: #555;
          font-weight: 600;
          font-size: 15px;
          display: block;
          transition: color 0.2s;
        }
        .sidebar-nav a:hover { color: #0060d0; }
        .sidebar-nav a.active { color: #0060d0; font-weight: 700; }

        /* Section header */
        .section-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }
        .section-header h2 {
          font-size: 36px; font-weight: 700; margin: 0; white-space: nowrap;
        }

        /* Content */
        .main-scroll-content { flex: 1; min-width: 0; }
        .section-block { margin-bottom: 120px; scroll-margin-top: 90px; }
        .large-media { width: 100%; border-radius: 8px; margin-bottom: 24px; display: block; }
        .section-block p { font-size: 16px; line-height: 1.7; color: #333; }
        .btn-pill {
          background: #0060d0; color: #fff;
          padding: 12px 30px; border-radius: 25px;
          text-decoration: none; font-weight: 700;
          display: inline-block; margin-top: 16px;
        }
        .btn-pill:hover { background: #0050b0; }

        /* Blue CTA */
        .blue-ready-banner {
          background: #0060d0; color: #fff;
          text-align: center; padding: 40px 5%;
        }
.blue-ready-banner h2 { font-size: 28px; margin-bottom: 30px; font-weight: 700; }        .white-btn {
          background: #fff; color: #0060d0;
          padding: 15px 40px; border-radius: 30px;
          text-decoration: none; font-weight: 700; display: inline-block;
        }
        .white-btn:hover { background: #f0f0f0; }

        @media (max-width: 960px) {
          .sidebar-container {
            position: static;
            width: 100%; min-width: unset;
            border-bottom: 1px solid #eee;
            padding-bottom: 24px; margin-bottom: 40px;
          }
          .fs-layout { flex-direction: column; padding: 40px 5%; gap: 0; }
          .sidebar-nav { display: flex; gap: 20px; flex-wrap: wrap; }
          .sidebar-nav li { margin-bottom: 0; }
          .bring-prod-sec { flex-direction: column; text-align: center; }
          .fs-hero h1 { font-size: 34px; }
          .section-header h2 { white-space: normal; font-size: 28px; }
        }
      `}</style>

      <div className="fs-wrapper">
        <Header />

        <main className="fs-main">

          {/* HERO */}
          <section className="fs-hero">
            <video className="hero-video" autoPlay muted loop playsInline>
              <source src="/assets/factory/brose_userstory_loop_30sec_h264_copy.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay" />
           <div className="hero-content">
  <h1>{t("fs_hero_title")}</h1>
    <p>Work with MYACCESS to build an additive manufacturing solution for your<br />company's most important production challenges.</p>
  <p style={{marginTop: "16px"}}>Have a production goal in mind? Let's get in touch.</p>
  <a href="/sales" className="btn-pill" style={{marginTop: "24px"}}>
    {t("fs_hero_contact")}
  </a>
</div>
          </section>

          {/* BRING TO PRODUCTION */}
          <section className="bring-prod-sec">
            <div className="bring-text">
              <h2>{t("fs_bring_title")}</h2>
              <p>{t("fs_bring_p1")}</p>
              <p>{t("fs_bring_p2")}</p>
            </div>
            <div className="bring-img">
              <img src="/assets/factory/02282021_fuse_print_farm_114s.webp" alt="Production" />
            </div>
          </section>

          {/* PRODUCTION SOLUTIONS CARDS */}
          <section className="prod-solutions-sec">
            <h2 className="prod-solutions-title">{t("fs_solutions_title") || "Production Solutions Built for You"}</h2>
            <p className="prod-solutions-sub">{t("fs_solutions_sub") || "Our offerings are custom-designed to meet your manufacturing needs."}</p>
            <div className="prod-cards-row">
              <div className="prod-card" onClick={() => scrollToSection("fleet")}>
                <div className="prod-card-icon"><FleetIcon /></div>
                <h3>{t("fs_section1_title")}</h3>
                <p>{t("fs_card1_desc") || "Implement production 3D printing solutions with services built to enable your success."}</p>
              </div>
              <div className="prod-card prod-card--active" onClick={() => scrollToSection("materials")}>
                <div className="prod-card-icon"><MaterialsIcon /></div>
                <h3>{t("fs_section2_title")}</h3>
                <p>{t("fs_card2_desc") }</p>
              </div>
              <div className="prod-card" onClick={() => scrollToSection("automation")}>
                <div className="prod-card-icon"><AutomationIcon /></div>
                <h3>{t("fs_section3_title")}</h3>
                <p>{t("fs_card3_desc") }</p>
              </div>
            </div>
          </section>

          {/* MAIN LAYOUT */}
          <div className="fs-layout">

            {/* SIDEBAR */}
            <aside className="sidebar-container">
              <div className="sidebar-title">{t("fs_toc_title")}</div>
              <ul className="sidebar-nav">
                <li>
                  <a
                    href="#fleet"
                    className={activeSection === "fleet" ? "active" : ""}
                    onClick={(e) => { e.preventDefault(); scrollToSection("fleet"); }}
                  >
                    {t("fs_section1_title")}
                  </a>
                </li>
                <li>
                  <a
                    href="#materials"
                    className={activeSection === "materials" ? "active" : ""}
                    onClick={(e) => { e.preventDefault(); scrollToSection("materials"); }}
                  >
                    {t("fs_section2_title")}
                  </a>
                </li>
                <li>
                  <a
                    href="#automation"
                    className={activeSection === "automation" ? "active" : ""}
                    onClick={(e) => { e.preventDefault(); scrollToSection("automation"); }}
                  >
                    {t("fs_section3_title")}
                  </a>
                </li>
              </ul>
            </aside>

            {/* SECTIONS */}
            <div className="main-scroll-content">

              <section className="section-block" id="fleet">
                <div className="section-header">
                  <FleetIcon />
                  <h2>{t("fs_section1_title")}</h2>
                </div>
                <img src="/assets/factory/02282021_fuse_print_farm_114s.webp" className="large-media" alt="" />
                <p>{t("fs_fleet_desc")}</p>
                <a href="#" className="btn-pill">{t("fs_download_whitepaper")}</a>
              </section>

              <section className="section-block" id="materials">
                <div className="section-header">
                  <MaterialsIcon />
                  <h2>{t("fs_section2_title")}</h2>
                </div>
                <img src="/assets/factory/factory_solutions_materials_lab.webp" className="large-media" alt="" />
                <p>{t("fs_mat_desc")}</p>
                <a href="#" className="btn-pill">{t("fs_explore_materials")}</a>
              </section>

              <section className="section-block" id="automation">
                <div className="section-header">
                  <AutomationIcon />
                  <h2>{t("fs_section3_title")}</h2>
                </div>
                <img src="/assets/factory/factory_solutions_materials_lab.webp" className="large-media" alt="" />
                <p>{t("fs_auto_desc")}</p>
                <a href="#" className="btn-pill">{t("fs_explore_software")}</a>
              </section>

            </div>
          </div>

          
          {/* BLUE BANNER */}
<section className="blue-ready-banner">
  <h2>Ready to collaborate, develop, and<br />manufacture with MYACCESS?</h2>
  <a href="/sales" className="white-btn">{t("fs_ready_btn")}</a>
</section>

        </main>

        <Footer />
      </div>
    </>
  );
}