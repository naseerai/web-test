import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

// --- Icons ---
const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // ✅ useLang from Context
  const { lang, setLang, t } = useLang();

  const navItems = [
    { label: t("nav_products"), subMenu: ["My Safe Shutter", "Kiosk", "ERP Modular", "Form 3L", "Fuse 1+ 30W", "Compare Printers"] },
    { label: t("nav_services"), subMenu: ["Embedded Development", "PCB Design", "Cloud Services", "All Services"] },
    { label: t("nav_software"), subMenu: ["Fullstack Development", "Fleet Control", "Factory Solutions"] },
    { label: t("nav_applications"), subMenu: ["Engineering", "Manufacturing", "Dental", "Jewelry"] },
    { label: t("nav_learn"), subMenu: ["Blog", "Resources","Events"] },
    { label: t("nav_support"), subMenu: null, path: "/sales" }, 
  { label: t("nav_contact"), subMenu: null, path: "/contact" }, 
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>{`
      /* 1. Remove the border-bottom by default and set it to transparent */
.fl-header {
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 64px;
  background: #fff; 
  z-index: 1000; 
  /* Changed from #ececec to transparent */
  border-bottom: 1px solid transparent; 
  transition: all 0.3s ease; 
  display: flex; 
  align-items: center;
  overflow: visible;
}

/* 2. Show the border and shadow ONLY when scrolled */
.fl-header.scrolled { 
  background: #fff;
  border-bottom: 1px solid #ececec; /* Line appears on scroll */
  box-shadow: 0 4px 15px rgba(0,0,0,0.05); /* Shadow appears on scroll */
}
        .fl-header-inner {
          width: 100%; height: 100%; padding: 0 24px;
          display: flex; align-items: center; justify-content: space-between;
          position: relative;
        }
        .fl-header-left { display: flex; align-items: center; gap: 8px; flex-shrink: 0; cursor: pointer; }
        .logo-img { height: 22px; width: auto; object-fit: contain; }
        .logo-chevron { color: #888; display: flex; align-items: center; margin-left: 4px; }
        .fl-nav-center {
          position: absolute; left: 50%; transform: translateX(-50%);
          display: flex; align-items: center; gap: 2px;
        }
        .nav-item-wrapper { position: relative; height: 64px; display: flex; align-items: center; }
        .fl-nav-btn {
          background: none; border: none; cursor: pointer; padding: 0 12px; height: 100%;
          font-family: inherit; font-size: 13.5px; font-weight: 500; color: #1a1a1a;
          display: flex; align-items: center; gap: 6px; border-radius: 4px; white-space: nowrap;
          transition: color 0.2s;
        }
        .fl-nav-btn:hover { color: #f4531c; }
        .fl-dropdown {
          position: absolute; top: 100%; left: 0; background: #fff;
          min-width: 180px; border: 1px solid #eee; border-radius: 0 0 8px 8px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          padding: 10px 0; visibility: hidden; opacity: 0;
          transform: translateY(10px); transition: all 0.2s ease;
        }
        .nav-item-wrapper:hover .fl-dropdown { visibility: visible; opacity: 1; transform: translateY(0); }
        .dropdown-link { display: block; padding: 10px 20px; font-size: 13px; color: #444; text-decoration: none; transition: 0.2s; }
        .dropdown-link:hover { background: #f9f9f9; color: #f4531c; }
        .fl-header-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
        .lang-container { position: relative; }
        .lang-btn {
          font-weight: 700; font-size: 11px; border: 1.5px solid #ddd;
          padding: 6px 12px; border-radius: 6px; cursor: pointer;
          display: flex; align-items: center; gap: 6px; background: white;
        }
        .lang-list {
          position: absolute; top: 110%; right: 0; background: white;
          border: 1px solid #eee; border-radius: 8px; box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          padding: 5px 0; min-width: 100px; display: ${langOpen ? 'block' : 'none'};
        }
        .lang-opt { padding: 8px 15px; font-size: 12px; cursor: pointer; }
        .lang-opt:hover { background: #f5f5f5; }

        .fl-cta-btn {
          background: #f4531c; color: #fff; border: none; padding: 10px 12px;
          font-weight: 700; font-size: 10px; border-radius: 4px; cursor: pointer;
          text-transform: uppercase; letter-spacing: 0.3px;
          max-width: 160px; white-space: normal; line-height: 1.3; text-align: center;
        }
        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 5px; margin-left: 5px; color: #1a1a1a; }
        .mobile-drawer {
          position: fixed; top: 64px; left: 0; width: 100%;
          height: ${mobileOpen ? 'calc(100vh - 64px)' : '0'};
          background: white; z-index: 999; overflow-y: auto; transition: height 0.3s ease-in-out;
          border-top: ${mobileOpen ? '1px solid #eee' : 'none'};
        }
        .m-item { border-bottom: 1px solid #f5f5f5; }
        .m-trigger {
          width: 100%; padding: 20px; display: flex; justify-content: space-between;
          font-weight: 600; font-size: 15px; cursor: pointer; background: none; border: none;
        }
        .m-sub { background: #fcfcfc; padding-left: 15px; overflow: hidden; }
        .m-sub-link { display: block; padding: 14px 25px; font-size: 14px; color: #666; text-decoration: none; }

        @media (max-width: 1300px) {
          .fl-nav-center, .fl-cta-btn { display: none; }
          .hamburger { display: block; }
          .fl-header-inner { padding: 0 20px; }
          .logo-img { height: 20px; }
        }
        button:focus, button:active, .fl-nav-btn:focus, .lang-btn:focus {
          outline: none !important; box-shadow: none !important; -webkit-tap-highlight-color: transparent;
        }
        button, a { -webkit-tap-highlight-color: transparent; user-select: none; }
      `}</style>

      <header className={`fl-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="fl-header-inner">

          {/* Logo */}
          <Link to="/" className="fl-header-left" style={{ textDecoration: 'none' }}>
            <img src="/assets/MYACCESS DOT.svg" alt="MYACCESS" className="logo-img" />
            {/* <div className="logo-chevron"><ChevronDown /></div> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="fl-nav-center">
            {navItems.map((item) => (
              <div key={item.label} className="nav-item-wrapper">
               {item.subMenu ? (
  <button className="fl-nav-btn">
    {item.label} <ChevronDown />
  </button>
) : (
  <Link to={item.path || "/"} className="fl-nav-btn" style={{ textDecoration: 'none' }}>
    {item.label}
  </Link>
)}
                {item.subMenu && (
                  <div className="fl-dropdown">
                    {item.subMenu.map(sub => {
                      if (sub === "My Safe Shutter") {
                        return <a key={sub} href="https://mysafeshutter.in/" target="_blank" rel="noopener noreferrer" className="dropdown-link">{sub}</a>
                      } else if (sub === "All Services") {
                        return <Link key={sub} to="/industries" className="dropdown-link">{sub}</Link>
                      }
                      else if (sub === "All Services") {
                        return <Link key={sub} to="/industries" className="dropdown-link">{sub}</Link>
                      }
                      else if (sub === "Embedded Development") {
                        return <Link key={sub} to="/services/embedded-development" className="dropdown-link">{sub}</Link>
                      }
                      else if (sub === "PCB Design") {
                        return <Link key={sub} to="/services/pcb-design" className="dropdown-link">{sub}</Link>
                      }
                       else if (sub === "Cloud Services") {
                        return <Link key={sub} to="/services/cloud-service" className="dropdown-link">{sub}</Link>
                      }
                     else if (sub === "Factory Solutions") {
  // Use "dropdown-link" class to inherit the orange hover effect
  return <Link key={sub} to="/factory-solutions" className="dropdown-link">{sub}</Link>
}else {
                        return <a key={sub} href="#" className="dropdown-link">{sub}</a>
                      }
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="fl-header-right">
            <div className="lang-container">
              <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
                {lang} <ChevronDown />
              </button>
              <div className="lang-list">
                {[
                  { label: "English", code: "EN" },
                   { label: "Telugu", code: "TE" },
                  { label: "Hindi",   code: "HI" },
                  { label: "Tamil",   code: "TA" },
                ].map(l => (
                  <div key={l.code} className="lang-opt" onClick={() => { setLang(l.code); setLangOpen(false); }}>
                    {l.label}
                  </div>
                ))}
              </div>
            </div>

            <button className="fl-cta-btn">{t("find_reseller")}</button>
            <button className="hamburger" onClick={() => { setMobileOpen(!mobileOpen); setActiveSubMenu(null); }}>
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className="mobile-drawer">
        {navItems.map((item) => (
          <div key={item.label} className="m-item">
            <button
              className="m-trigger"
              onClick={() => item.subMenu && setActiveSubMenu(activeSubMenu === item.label ? null : item.label)}
            >
              {item.label}
              {item.subMenu && (
                <span style={{ transform: activeSubMenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s', display: 'flex' }}>
                  <ChevronDown />
                </span>
              )}
            </button>
          {/* Mobile Drawer section lo ee portion ni replace cheyyandi */}
{item.subMenu && activeSubMenu === item.label && (
  <div className="m-sub">
    {item.subMenu.map(sub => {
      if (sub === "My Safe Shutter") {
        return <a key={sub} href="https://mysafeshutter.in/" target="_blank" rel="noopener noreferrer" className="m-sub-link">{sub}</a>
      } 
      else if (sub === "All Services") {
        return <Link key={sub} to="/industries" className="m-sub-link" onClick={() => setMobileOpen(false)}>{sub}</Link>
      }
      else if (sub === "Embedded Development") {
        return <Link key={sub} to="/services/embedded-development" className="m-sub-link" onClick={() => setMobileOpen(false)}>{sub}</Link>
      }
      else if (sub === "PCB Design") {
        return <Link key={sub} to="/services/pcb-design" className="m-sub-link" onClick={() => setMobileOpen(false)}>{sub}</Link>
      }
      else if (sub === "Cloud Services") {
        return <Link key={sub} to="/services/cloud-service" className="m-sub-link" onClick={() => setMobileOpen(false)}>{sub}</Link>
      }
      else if (sub === "Factory Solutions") {
        return <Link key={sub} to="/factory-solutions" className="m-sub-link" onClick={() => setMobileOpen(false)}>{sub}</Link>
      }
      else if (sub === "nav_contact") {
        return <Link key={sub} to="/contact" className="m-sub-link" onClick={() => setMobileOpen(false)}>{sub}</Link>
      }
      else if (sub === "nav_support") {
        return <Link key={sub} to="/sales" className="m-sub-link" onClick={() => setMobileOpen(false)}>{sub}</Link>
      } 
      else {
        return <a key={sub} href="#" className="m-sub-link">{sub}</a>
      }
    })}
  </div>
)}
          </div>
        ))}
        <div style={{ padding: '30px 20px' }}>
          <button className="fl-cta-btn" style={{ width: '100%', height: '54px', fontSize: '13px' }}>
            {t("find_reseller")}
          </button>
        </div>
      </div>
    </>
  );
}