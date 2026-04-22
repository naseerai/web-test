import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

const footerLinks = [
  { titleKey: "footer_3dprinters", links: [ "Pellets","Recycling",  "Filaments","Shreddering", "3D Printed Molds",  "FDM and SLA Prints",] },
  { titleKey: "footer_postprocess", links: [ "Our Process","Project Lifecycle","Collaboration Model","Quality Assurance","Delivery & Support"] },
  { titleKey: "footer_materials", links: ["PCB Design", "EMS Assembly","Mechanical CAD", "Soldering & Rework","Testing & Debugging",   "Patent Filing Support","Embedded Development","PCB Fabrication (Local/Global)", "OpenCPU / OpenWRT Firmware",  ] },
  { titleKey: "footer_software", links: [ "Fleet Control","CI/CD & DevOps","Factory Solutions","Fullstack Development (Web + Mobile)",] },
  { titleKey: "footer_industries", links: ["Kiosk","ERP Modular","My Safe Shutter"] },
  { titleKey: "footer_learn", links: [ "Blog",  "Events", "Resources","Applications" ] },
  { titleKey: "footer_company", links: ["Press","About", "Careers",  "Contact", "Community & Impact"] },
  { titleKey: "footer_support", links: ["Support Resources", "Contact Support", "Accessibility"] },
  { titleKey: "footer_sales", links: ["Contact Sales","Find a Reseller"] },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer-root">
      <style>{`
        .footer-root {
          background: #000;
          color: #fff;
          padding: 60px 5% 40px 5%;
          font-family: 'DM Sans', sans-serif;
          border-top: 1px solid #1a1a1a;
        }
        .footer-container { display: flex; flex-direction: row; gap: 40px; margin-bottom: 40px; }
        .brand-side { flex: 0 0 280px; display: flex; flex-direction: column; gap: 30px; }
        .footer-logo img { height: 22px; filter: brightness(0) invert(1); }
        .links-side { flex: 1; display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px 20px; }
        .link-col h4 { font-size: 14px; font-weight: 700; margin-bottom: 20px; color: #fff; }
        .link-col ul { list-style: none; padding: 0; margin: 0; }
        .link-col li { margin-bottom: 10px; }
        .link-col a { color: #888; text-decoration: none; font-size: 13px; transition: color 0.2s; display: block; }
        .link-col a:hover { color: #fff; }
        .email-section { margin-top: 20px; }
        .email-section p { font-size: 13px; font-weight: 500; margin-bottom: 12px; }
        .email-input-wrap { display: flex; align-items: center; border-bottom: 1px solid #444; padding-bottom: 8px; width: 100%; max-width: 250px; }
        .email-input-wrap input { background: transparent; border: none; color: #fff; font-size: 14px; width: 100%; outline: none; }
        .email-input-wrap button { background: transparent; border: none; color: #fff; cursor: pointer; font-size: 18px; }
        .social-row { display: flex; gap: 10px; margin-top: 25px; }
        .social-box { width: 32px; height: 32px; background: #fff; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #000; text-decoration: none; font-weight: 800; font-size: 14px; }
        .footer-bottom { padding-top: 40px; border-top: 1px solid #1a1a1a; color: #efe8e8; font-size: 11px; display: flex; flex-direction: row; justify-content: space-between; align-items: center; }
        .legal-links { display: flex; gap: 15px; flex-wrap: wrap; }
        .legal-links a { color: #666; text-decoration: none; }
        .legal-links a:hover { color: #aaa; }
        @media (max-width: 1024px) {
          .footer-container { flex-direction: column; }
          .links-side { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 600px) {
          .footer-root { padding: 40px 20px; }
          .brand-side { width: 100%; order: 2; margin-top: 40px; }
          .links-side { order: 1; grid-template-columns: repeat(2, 1fr); gap: 30px 15px; }
          .email-input-wrap { max-width: 100%; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 20px; border-top: none; }
        }
      .social-box img {
  /* Change width to max-width to allow individual overrides */
  max-width: 100%; 
  height: auto;
  display: block;
}
      `}</style>

      <div className="footer-container">
        {/* BRAND SECTION */}
        <div className="brand-side">
          <div className="footer-logo">
            <img src="/assets/MYACCESS DOT.svg" alt="MYACCESS" />
          </div>
          <div className="email-section">
            <p>{t("enter_email")}</p>
            <div className="email-input-wrap">
              <input type="email" placeholder={t("email_placeholder")} />
              <button>→</button>
            </div>
      <div className="social-row">
  <a href="https://facebook.com" className="social-box" target="_blank" rel="noreferrer">
    {/* Increased size for Facebook */}
    <img src="/assets/footer/facebook@3x.png" alt="Facebook" style={{ width: '30px' }} />
  </a>
  
  <a href="https://x.com" className="social-box" target="_blank" rel="noreferrer">
    <img src="/assets/footer/twitter@3x.png" alt="X" style={{ width: '18px' }} />
  </a>
  
  <a href="https://instagram.com" className="social-box" target="_blank" rel="noreferrer">
    {/* Increased size for Instagram */}
    <img src="/assets/footer/instagram@3x.png" alt="Instagram" style={{ width: '23px' }} />
  </a>
  
  <a href="https://youtube.com" className="social-box" target="_blank" rel="noreferrer">
    <img src="/assets/footer/youtube@3x.png" alt="YouTube" style={{ width: '25px' }} />
  </a>
  
  <a href="https://linkedin.com" className="social-box" target="_blank" rel="noreferrer">
    <img src="/assets/footer/Linked in @3x.png" alt="LinkedIn" style={{ width: '20px' }} />
  </a>
</div>
          </div>
        </div>

        {/* LINKS GRID */}
        <div className="links-side">
          {footerLinks.map((item, idx) => (
            <div key={idx} className="link-col">
              <h4>{t(item.titleKey)}</h4>
              <ul>
  {item.links.map((link, i) => (
    <li key={i}>
      {link === "About" ? (
        <Link to="/about" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) : link === "Contact" ? (
        <Link to="/contact" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) : link === "Contact Sales" ? (
        <Link to="/sales" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) : link === "Community & Impact" ? (
        <Link to="/community" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) : link === "Careers" ? (
        <Link to="/careers" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) : link === "Factory Solutions" ? (
        <Link to="/factory-solutions" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )
      : link === "Soldering & Rework" ? (
        <Link to="/services/soldering-rework" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )
      : link === "PCB Design" ? (
        <Link to="/services/pcb-design" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
       : link === "Embedded Development" ? (
        <Link to="/services/embedded-development" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
       : link === "OpenCPU / OpenWRT Firmware" ? (
        <Link to="/services/open-cpu-openwrt" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
       : link === "PCB Fabrication (Local/Global)" ? (
        <Link to="/services/pcb-fabrication" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
       : link === "PCB Design" ? (
        <Link to="/services/pcb-design" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )
      : link === "Mechanical CAD" ? (
        <Link to="/services/mechanical-cad" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
       : link === "Testing & Debugging" ? (
        <Link to="/services/testing-debugging" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )  : link === "EMS Assembly" ? (
        <Link to="/services/ems-assembly" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
       : link === "Pellets" ? (
        <Link to="/services/pellets" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
       : link === "Recycling" ? (
        <Link to="/services/recycling" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
       : link === "Filaments" ? (
        <Link to="/services/filaments" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
       : link === "Shreddering" ? (
        <Link to="/services/shredding" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
       : link === "3D Printed Molds" ? (
        <Link to="/services/3d-molds" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
       : link === "FDM and SLA Prints" ? (
        <Link to="/services/fdm-sla" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )
      : link === "Our Process" ? (
        <Link to="/our-process" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
      : link === "Project Lifecycle" ? (
        <Link to="/lifecycle" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
      : link === "Collaboration Model" ? (
        <Link to="/collaboration-model" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
      : link === "Quality Assurance" ? (
        <Link to="/quality-assurance" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )  
        : link === "Delivery & Support" ? (
        <Link to="/delivery-support" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )  
       : link === "CI/CD & DevOps" ? (
        <Link to="/services/cicd" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      ) 
        : link === "Fullstack Development (Web + Mobile)" ? (
        <Link to="/services/fullstack" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )  
       : link === "Community & Impact" ? (
        <Link to="/community-impact" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )  
       : link === "Resources" ? (
        <Link to="/resources" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )  
       : link === "Applications" ? (
        <Link to="/applications" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )  
       : link === "Blog" ? (
        <Link to="/blogs" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )  
       : link === "Events" ? (
        <Link to="/events" style={{ color: '#888', textDecoration: 'none' }}>{link}</Link>
      )  
       : link === "My Safe Shutter" ? (
        /* External Link for My Safe Shutter */
        <a href="https://mysafeshutter.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#888', textDecoration: 'none' }}>
          {link}
        </a>
      ) : (
        <a href="#" style={{ color: '#888', textDecoration: 'none' }}>{link}</a>
      )}
    </li>
  ))}
</ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">{t("copyright")}</div>
        <div className="legal-links">
          <Link to="/legal" state={{ tab: "privacy" }} style={{ color: '#f3f3f3', textDecoration: 'none' }}>{t("privacy")}</Link>
  <Link to="/legal" state={{ tab: "terms" }} style={{ color: '#ede4e4', textDecoration: 'none' }}>{t("terms")}</Link>
  <Link to="/legal" state={{ tab: "faq" }} style={{ color: '#ede7e7', textDecoration: 'none' }}>{t("faq")}</Link>
        </div>
      </div>
    </footer>
  );
}
