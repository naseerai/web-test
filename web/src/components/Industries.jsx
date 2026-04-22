import React from "react";
import Header from "./header";
import Footer from "./Footer";
import { useLang } from "../context/LanguageContext";
import { useLocation, Link, useNavigate } from "react-router-dom";

const industries = [
  { nameKey: "ind_solder_rework",        img: "/assets/industry/SOLDER.webp",            path: "/services/soldering-rework" },
  { nameKey: "ind_pcb_design",           img: "/assets/industry/ecad.webp",           path: "/services/pcb-design" },
  { nameKey: "ind_embedded_development", img: "/assets/industry/embed.webp",      path: "/services/embedded-development" },
  { nameKey: "ind_test_debug",           img: "/assets/industry/test and debug.webp", path: "/services/testing-debugging" },
  { nameKey: "ind_compliance_checklist", img: "/assets/industry/esd.webp",     path: "/services/esd-compliance" },
  { nameKey: "ind_mechanical_cad",       img: "/assets/industry/mcad.jpg",                path: "/services/mechanical-cad" },
  { nameKey: "ind_opencpu_firm",         img: "/assets/industry/engineers_demo_4k.png",   path: "/services/open-cpu-openwrt" },
  { nameKey: "ind_pcb_fabrication",      img: "/assets/industry/pcbs.webp",    path: "/services/pcb-fabrication" },
  { nameKey: "ind_component_procurement",img: "/assets/industry/procurement.webp",        path: "/services/component-procurement" },
  { nameKey: "ind_ems_assembly",         img: "/assets/industry/ems.webp",        path: "/services/ems-assembly" },
  { nameKey: "ind_3d",                   img: "/assets/industry/bambu-labs-a1-3d-printer-finished (1).webp",        path: "/services/3d-printing" },
  { nameKey: "ind_plastic",             img: "/assets/industry/pim.webp",        path: "/services/injection-molding" },
  { nameKey: "ind_3d_mold",             img: "/assets/industry/3D Printing mold.webp",        path: "/services/mold-pipeline" },
  { nameKey: "ind_mob",                 img: "/assets/industry/fullstack.webp",        path: "/services/fullstack" },
  { nameKey: "ind_cld_service",         img: "/assets/industry/cloud-services.webp",        path: "/services/cloud-service" },
  { nameKey: "ind_cicd",               img: "/assets/industry/cicd.webp",        path: "/services/cicd" },
  { nameKey: "ind_patent_filing",       img: "/assets/industry/PCT-patent-filing.webp",        path: "/services/patent-filing" },
];

export default function Industries() {
  const { t } = useLang();

  return (
    <div className="ind-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; overflow-x: hidden; }

        .ind-main {
          padding-top: 80px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Intro */
        .ind-intro {
          text-align: center;
          max-width: 850px;
          padding: 30px 20px;
          width: 100%;
        }
        .ind-intro h1 {
          font-size: clamp(22px, 4vw, 42px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 25px;
          color: #1a1a1a;
        }
        .ind-intro p {
          font-size: clamp(14px, 2vw, 16px);
          line-height: 1.6;
          color: #444;
        }

        .ind-grid-title {
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
          margin-bottom: 40px;
          color: #1a1a1a;
          text-align: center;
          width: 90%;
        }

        /* ── GRID ──
           KEY FIX: minmax so columns shrink gracefully on any screen width.
           No fixed pixel columns. */
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
          width: 90%;
          max-width: 1300px;
          margin-bottom: 80px;
        }

        .ind-card {
          text-decoration: none;
          background: #f8f8f8;
          border-radius: 4px;
          overflow: hidden;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .ind-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        /* KEY FIX: aspect-ratio replaces fixed height — image never cuts */
        .ind-card-img {
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          display: block;
        }

        .ind-card-text {
          padding: 25px;
          background: #f8f8f8;
          flex: 1;
        }
        .ind-card-text h3 {
          font-size: clamp(15px, 2vw, 19px);
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
        }
        .ind-card-text span {
          font-size: 13.5px;
          font-weight: 600;
          color: #0056b3;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        /* Banner */
        .ind-banner {
          width: 90%;
          max-width: 1300px;
          background: #f2f2f2;
          padding: 25px 40px;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 100px;
          gap: 20px;
        }
        .banner-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .banner-icon {
          width: 45px;
          height: 45px;
          flex-shrink: 0;
          background: #0056b3;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
        }
        .banner-text h4 { font-size: 16px; margin-bottom: 5px; color: #1a1a1a; }
        .banner-text p  { font-size: 14px; color: #666; }
        .banner-btn {
          background: #0056b3;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          font-size: 13px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Scaling section */
        .scaling-sec {
          text-align: center;
          padding: 3px 10px 0;
          width: 100%;
        }
        .scaling-sec h2 {
          font-size: clamp(26px, 5vw, 56px);
          font-weight: 700;
          margin-bottom: 30px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.1;
        }
        .scaling-sec p {
          max-width: 700px;
          margin: 0 auto 40px;
          color: #444;
          line-height: 1.6;
          font-size: clamp(14px, 2vw, 16px);
        }
        .scaling-btns {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }
        .scale-btn {
          padding: 14px 28px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          border: none;
        }
        .btn-blue { background: #0056b3; color: white; }
        .btn-outline-blue { background: transparent; border: 1.5px solid #0056b3; color: #0056b3; }

        /* ════════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════════ */

        /* Medium screens: 2 columns */
        @media (max-width: 1100px) {
          .ind-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        /* Tablets */
        @media (max-width: 768px) {
          /* 1 column on mobile */
          .ind-grid { grid-template-columns: minmax(0, 1fr); }

          .ind-banner {
            flex-direction: column;
            text-align: center;
            padding: 25px 20px;
          }
          .banner-left { flex-direction: column; }

          .scaling-btns { flex-direction: column; align-items: center; }
          .scale-btn { width: 100%; max-width: 300px; }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .ind-intro { padding: 40px 16px; }
          .ind-card-text { padding: 18px; }
        }
      `}</style>

      <Header />

      <main className="ind-main">
        <section className="ind-intro">
          <h1>{t("ind_headline")}</h1>
          <p>{t("ind_subtext")}</p>
        </section>

        <h2 className="ind-grid-title">{t("select_industry")}</h2>

        <div className="ind-grid">
          {industries.map((item, idx) => (
            <Link key={idx} to={item.path || "/contact"} className="ind-card">
              <img src={item.img} alt={t(item.nameKey)} className="ind-card-img" />
              <div className="ind-card-text">
                <h3>{t(item.nameKey)}</h3>
                <span>{t("learn_more")} &gt;</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="ind-banner">
          <div className="banner-left">
            <div className="banner-icon">📞</div>
            <div className="banner-text">
              <h4>{t("ind_banner_title")}</h4>
              <p>{t("ind_banner_sub")}</p>
            </div>
          </div>
          <button className="banner-btn">{t("find_reseller1")}</button>
        </div>

        <section className="scaling-sec">
          <h2>{t("scaling_title")}</h2>
          <p>{t("scaling_sub")}</p>
          <div className="scaling-btns">
            <button className="scale-btn btn-blue">{t("explore_printers")}</button>
            <button className="scale-btn btn-outline-blue">{t("find_reseller1")}</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}