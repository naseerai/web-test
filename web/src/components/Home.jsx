import React, { useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { useLang } from "../context/LanguageContext";

const industryItems = [];

const serviceTags = [
  { name: "Soldering & Rework",        icon: "/assets/home/SOLDERING@3x.webp",    media: "/assets/home/soldering_rework.webp",     type: "photo" },
  { name: "PCB Design",                icon: "/assets/home/pcbdesign@3x.webp",    media: "/assets/home/pcb_design.webp",           type: "photo" },
  { name: "Embedded Development",      icon: "/assets/home/icon3.png",            media: "/assets/home/embedded_development.webp", type: "photo" },
  { name: "OpenCPU",                   icon: "/assets/home/cpu@3x.webp",          media: "/assets/home/open_cpu.webp",             type: "photo" },
  { name: "OpenWrt",                   icon: "/assets/home/wrt@3x.webp",          media: "/assets/home/open_wrt.webp",             type: "photo" },
  { name: "PCB Fabrication",           icon: "/assets/home/fabrication@3x.webp",  media: "/assets/home/pcb fabrications.webp",     type: "photo" },
  { name: "Component Procurement",     icon: "/assets/home/PROCUREMENT@3x.webp",  media: "/assets/home/pcb_image.jpg",             type: "photo" },
  { name: "EMS Assembly",              icon: "/assets/home/ems@3x.webp",          media: "/assets/home/pcb_image.jpg",             type: "photo" },
  { name: "Testing & Debugging",       icon: "/assets/home/debug@3x.webp",        media: "/assets/home/pcb_image.jpg",             type: "photo" },
  { name: "ESD Compliance Checklist",  icon: "/assets/home/Asset 17.svg",         media: "/assets/home/pcb_image.jpg",             type: "photo" },
  { name: "Mechanical CAD",            icon: "/assets/home/mcad@3x.webp",         media: "/assets/home/pcb_image.jpg",             type: "photo" },
  { name: "3D Printing",               icon: "/assets/home/3d print.webp",        media: "/assets/home/pcb_image.jpg",             type: "photo" },
  { name: "Plastic Injection Molding", icon: "/assets/home/icon8.png",            media: "/assets/home/pcb_image.jpg",             type: "photo" },
  { name: "Fullstack Development",     icon: "/assets/home/fullstack@3x.webp",    media: "/assets/home/pcb_image.jpg",             type: "photo" },
  { name: "Cloud Services",            icon: "/assets/home/cloud.webp",           media: "/assets/home/pcb_image.jpg",             type: "photo" },
  { name: "CI/CD & DevOps",            icon: "/assets/home/devops.webp",          media: "/assets/home/pcb_image.jpg",             type: "photo" },
  { name: "Patent Filing Support",     icon: "/assets/home/patent@3x.webp",       media: "/assets/home/pcb_image.jpg",             type: "photo" },
];

const makeAnythingData = [
  {
    hero: { titleKey: "home_rapid_title", descKey: "home_rapid_desc", linkKey: "home_watch_webinar", image: "/assets/home/bamboo lab1.webp" },
    grid: [
      { titleKey: "home_concept",    img: "/assets/home/img1.webp" },
      { titleKey: "home_looks",      img: "/assets/home/img2.webp" },
      { titleKey: "home_functional", img: "/assets/home/img3.webp" },
      { titleKey: "home_validation", img: "/assets/home/img4.webp" },
    ]
  },
  {
    hero: { titleKey: "aux_hero_title", descKey: "aux_hero_desc", linkKey: "aux_link", image: "/assets/home/aux_hero.jpg" },
    grid: [
      { titleKey: "aux_item1", img: "/assets/home/aux1.jpg" },
      { titleKey: "aux_item2", img: "/assets/home/aux2.jpg" },
      { titleKey: "aux_item3", img: "/assets/home/aux3.jpg" },
      { titleKey: "aux_item4", img: "/assets/home/aux4.jpg" },
    ]
  },
  {
    hero: { titleKey: "giveaway_hero_title", descKey: "giveaway_hero_desc", linkKey: "giveaway_link", image: "/assets/home/giveaway_hero.jpg" },
    grid: [
      { titleKey: "giveaway_item1", img: "/assets/home/give1.jpg" },
      { titleKey: "giveaway_item2", img: "/assets/home/give2.jpg" },
      { titleKey: "giveaway_item3", img: "/assets/home/give3.jpg" },
      { titleKey: "giveaway_item4", img: "/assets/home/give4.jpg" },
    ]
  },
  {
    hero: { titleKey: "lab_hero_title", descKey: "lab_hero_desc", linkKey: "lab_link", image: "/assets/home/lab_hero.jpg" },
    grid: [
      { titleKey: "lab_item1", img: "/assets/home/lab1.jpg" },
      { titleKey: "lab_item2", img: "/assets/home/lab2.jpg" },
      { titleKey: "lab_item3", img: "/assets/home/lab3.jpg" },
      { titleKey: "lab_item4", img: "/assets/home/lab4.jpg" },
    ]
  },
  {
    hero: { titleKey: "skill_hero_title", descKey: "skill_hero_desc", linkKey: "skill_link", image: "/assets/home/skill_hero.jpg" },
    grid: [
      { titleKey: "skill_item1", img: "/assets/home/skill1.jpg" },
      { titleKey: "skill_item2", img: "/assets/home/skill2.jpg" },
      { titleKey: "skill_item3", img: "/assets/home/skill3.jpg" },
      { titleKey: "skill_item4", img: "/assets/home/skill4.jpg" },
    ]
  }
];

export default function Home() {
  const { t } = useLang();
  const [activeService, setActiveService] = useState(serviceTags[0]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const marqueeItems = [
    t("ind_ems"), t("ind_robotics"), t("ind_3dprint"),
    t("ind_ai"), t("ind_m2m"), t("ind_proddev"), t("ind_allservices")
  ];

  const featureNews = {
    category: t("home_feature_cat"),
    title:    t("home_feature_title"),
    desc:     t("home_feature_desc"),
    image:    "/assets/home/myaccess.webp"
  };

  const newsItems = [
    { categoryKey: "home_news1_cat", titleKey: "home_news1_title", image: "/assets/home/bamboo lab1.webp" },
    { categoryKey: "home_news2_cat", titleKey: "home_news2_title", image: "/assets/home/image_2_4k.webp" },
    { categoryKey: "home_news3_cat", titleKey: "home_news3_title", image: "/assets/home/ERP.webp" },
  ];

  return (
    <div className="home-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { width: 100%; overflow-x: hidden; background: #fff; font-family: 'DM Sans', sans-serif; -webkit-text-size-adjust: 100%; }

        /* ══════════════════════════════════════════
           HEADER HEIGHT CSS VARIABLE
           Define header height once here.
           Header component must also use this same value.
           Change this one number if header height changes.
        ══════════════════════════════════════════ */
        :root {
          --header-h-mobile:  70px;   /* mobile header height  */
          --header-h-tablet:  64px;   /* tablet header height  */
          --header-h-desktop: 72px;   /* desktop header height */
        }

        /* ══ LAYOUT SHELL ══
           padding-top = exact header height per breakpoint.
           No vh — no gap scaling with viewport height.        */
        .home-main {
          padding-top: 69px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ══ HERO ══
           Strategy:
           • height = 100vh - header height → hero fills remaining screen exactly on every device.
           • max-height caps cinema ratio on very tall/wide monitors.
           • min-height prevents collapse on very short landscape phones.
        ══════════════════════════════════════ */
        .hero-container {
          position: relative;
          width: 96%;
          /* Fill exactly the visible area below the header */
          height: calc(100vh - var(--header-h-desktop));
          /* Never taller than a nice 16:7 ratio (prevents excessive height on portrait tablets) */
          max-height: calc(95vw * 6.5 / 16);
          /* Never shorter than 320px (landscape phones) */
          min-height: 320px;
          border-radius: 1.25rem 1.25rem 0 0;
          overflow: hidden;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
        }
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0.9;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.25);
          z-index: 2;
        }
        .hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 56rem;
          padding: 2rem 1.5rem;
        }
        .hero-content h1 {
          font-size: clamp(1.5rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.08;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: -1px;
        }
        .hero-content p {
          font-size: clamp(0.9rem, 2vw, 1.4rem);
          margin-bottom: 2rem;
          font-weight: 500;
        }
        .hero-btns {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .h-btn {
          padding: 0.85rem 1.8rem;
          font-size: clamp(0.7rem, 1.4vw, 0.875rem);
          font-weight: 700;
          border-radius: 0.375rem;
          cursor: pointer;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          transition: transform 0.25s, box-shadow 0.25s;
          white-space: nowrap;
        }
        .btn-orange  { background: #f4531c; color: #fff; }
        .btn-outline { background: transparent; color: #fff; border: 1.5px solid #fff; }
        .h-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.3); }

        /* ══ MARQUEE ══ */
        .home-marquee {
          background: #f4531c;
          padding: 13px 0;
          overflow: hidden;
          width: 96%;
          border-radius: 0 0 1.25rem 1.25rem;
          margin-top: -1px;
        }
        .home-marquee-track {
          display: inline-flex;
          white-space: nowrap;
          animation: homeSlide 30s linear infinite;
        }
        .home-mitem {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #fff;
          padding: 0 2rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .home-mdot { color: rgba(255,255,255,0.4); }
        @keyframes homeSlide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ══ INDUSTRY GRID ══ */
        .industry-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          width: 95%;
          gap: 0.75rem;
          margin-top: 1.5rem;
          margin-bottom: 4rem;
        }
        .industry-card {
          background: #1a1a1a;
          border-radius: 0.75rem;
          padding: 1rem;
          text-decoration: none;
          color: #fff;
          aspect-ratio: 1 / 1;
          display: flex;
          flex-direction: column;
          transition: background 0.25s, transform 0.25s;
        }
        .industry-card:hover { background: #000; transform: translateY(-5px); }
        .industry-card span  { font-size: 0.75rem; font-weight: 600; opacity: 0.9; margin-bottom: 0.5rem; }
        .icon-container      { flex: 1; display: flex; align-items: center; justify-content: center; }
        .industry-icon       { width: 50%; height: auto; object-fit: contain; opacity: 0.8; }

        /* ══ NEWS SECTION ══ */
        .news-section {
          width: 90%;
          margin-top: 3rem;
          margin-bottom: 2rem;
        }
        .section-title {
          font-size: clamp(1.4rem, 3vw, 2.375rem);
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }
        .news-feature-card {
          display: flex;
          flex-direction: row;
          background: #0f1113;
          border-radius: 1rem;
          margin-bottom: 1rem;
          padding: 0.6rem;
          gap: 0.6rem;
          align-items: stretch;
        }
        .feature-img {
          width: 55%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: 0.75rem;
          display: block;
          flex-shrink: 0;
        }
        .feature-content {
          flex: 1;
          min-width: 0;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
          background: rgba(255,255,255,0.02);
          border-radius: 0.75rem;
        }
        .news-cat {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #999;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
        }
        .news-title {
          font-size: clamp(1.1rem, 2.2vw, 1.75rem);
          font-weight: 500;
          line-height: 1.25;
          margin-bottom: 1rem;
        }
        .news-desc {
          font-size: 0.88rem;
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 1.8rem;
          opacity: 0.8;
        }
        .learn-more-btn {
          background: #fff;
          color: #000;
          font-weight: 700;
          font-size: 0.7rem;
          padding: 0.6rem 1.2rem;
          border-radius: 0.25rem;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          width: fit-content;
        }
        .news-sub-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
        }
        .small-news-card {
          background: #0f1113;
          border-radius: 0.75rem;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          padding: 0.5rem;
        }
        .small-news-img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border-radius: 0.5rem;
          display: block;
        }
        .small-news-content {
          padding: 1.2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .small-news-title {
          color: #fff;
          font-size: 0.92rem;
          font-weight: 500;
          line-height: 1.4;
          margin-top: 0.5rem;
        }
        .news-footer {
          display: flex;
          justify-content: center;
          margin-top: 2.5rem;
        }
        .all-news-btn {
          background: #f4531c;
          color: #fff;
          border: none;
          padding: 0.875rem 1.8rem;
          font-weight: 700;
          font-size: 0.75rem;
          border-radius: 0.25rem;
          cursor: pointer;
          text-transform: uppercase;
        }

        /* ══ MATERIALS / SERVICES ══ */
        .materials-wrapper {
          width: 100%;
          background: #1a1a1a;
          color: #fff;
          padding: 3.5rem 0;
          margin-top: 3rem;
          display: flex;
          justify-content: center;
        }
        .materials-inner {
          width: 90%;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .materials-left { text-align: left; }
        .materials-left h2 {
          font-size: clamp(1.4rem, 3vw, 2.8rem);
          line-height: 1.12;
          margin-bottom: 1.8rem;
        }
        .materials-left h2 span { color: #888; font-weight: 400; }
        .tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-bottom: 2rem;
        }
        .m-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0b0b0b;
          border: 1px solid #605a5a;
          padding: 0.28rem 0.6rem;
          height: 2.1rem;
          border-radius: 6px;
          font-size: 0.74rem;
          font-weight: 600;
          cursor: pointer;
          color: #cdcccc;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .m-tag img { width: 22px; height: 22px; object-fit: contain; }
        .m-tag:hover { background: #444; border-color: #f4531c; }
        .material-hero-card {
          background: #f4531c;
          border-radius: 1rem;
          overflow: hidden;
          width: 100%;
        }
        .m-hero-img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          display: block;
        }
        .m-hero-footer {
          padding: 1.2rem 1.8rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* ══ MAKE ANYTHING ══ */
        .apps-wrapper {
          width: 90%;
          margin: 3.5rem auto;
        }
        .apps-title {
          font-size: clamp(1.5rem, 3.5vw, 3rem);
          font-weight: 700;
          margin-bottom: 1.8rem;
          color: #1a1a1a;
        }
        .apps-title span { font-weight: 400; color: #666; }
        .apps-tabs {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 2.5rem;
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: none;
        }
        .apps-tabs::-webkit-scrollbar { display: none; }
        .app-tab {
          background: transparent;
          border: 1.5px solid #ddd;
          padding: 0.55rem 1.1rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .app-tab.active { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }
        .app-hero-card {
          display: flex;
          flex-direction: row;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 1rem;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        .app-hero-img {
          width: 50%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          display: block;
          flex-shrink: 0;
        }
        .app-hero-content {
          flex: 1;
          min-width: 0;
          padding: 3.5rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .app-hero-content h3 {
          font-size: clamp(1.3rem, 2.5vw, 2.2rem);
          margin-bottom: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
        }
        .app-hero-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-size: 15px;
        }
        .app-hero-actions {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .app-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 15px;
        }
        .app-small-card {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 0.8rem;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
          text-decoration: none;
        }
        .app-small-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.06); }
        .app-small-img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          display: block;
        }
        .card-footer {
          padding: 1.2rem;
          font-weight: 600;
          font-size: 0.88rem;
          color: #1a1a1a;
        }

        /* ══ GET IN TOUCH ══ */
        .git-section { width: 90%; margin: 0 auto 2.5rem; }
        .get-in-touch-banner {
          width: 100%;
          aspect-ratio: 16 / 5;
          min-height: 200px;
          background: url('/assets/home/banner.webp') center / cover no-repeat;
          border-radius: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .get-in-touch-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.22);
          z-index: 1;
        }
        .get-in-touch-banner h2 {
          position: relative;
          z-index: 2;
          font-size: clamp(1.6rem, 6vw, 5rem);
          font-weight: 800;
          margin-bottom: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .git-btn-black {
          position: relative;
          z-index: 2;
          background: #000;
          color: #fff;
          padding: 0.9rem 2.2rem;
          border-radius: 8px;
          font-weight: 700;
          border: none;
          font-size: 0.65rem;
          cursor: pointer;
          text-transform: uppercase;
        }

        /* ══════════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ══════════════════════════════════════ */

        /* Large desktop — header slightly taller on very wide screens */
        @media (min-width: 1400px) {
          :root { --header-h-desktop: 80px; }
        }

        /* Tablet landscape */
        @media (max-width: 1150px) {
          .industry-grid {
            display: flex;
            overflow-x: auto;
            width: 100%;
            padding: 0 5% 1rem;
            gap: 1rem;
            scrollbar-width: none;
          }
          .industry-grid::-webkit-scrollbar { display: none; }
          .industry-card { flex: 0 0 9.5rem; }
          .app-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        /* Tablet portrait */
        @media (max-width: 1024px) {
          :root { --header-h-desktop: var(--header-h-tablet); }
          .home-main { padding-top: var(--header-h-tablet); }
          .hero-container {
            height: calc(100vh - var(--header-h-tablet));
            max-height: calc(95vw * 7 / 16);
          }
          .app-hero-card    { flex-direction: column; }
          .app-hero-img     { width: 100%; }
          .app-hero-content { padding: 2.5rem; }
        }

        /* Large mobile / small tablet */
        @media (max-width: 900px) {
          :root { --header-h-desktop: var(--header-h-mobile); }
          .home-main { padding-top: var(--header-h-mobile); }
          .hero-container {
            width: 92%;
            /* On mobile, max-height removed so it can be taller */
            height: 60vh;
            max-height: 75vh;
            min-height: 360px;
          }
          .home-marquee { width: 92%; }
          .news-section { width: 92%; }

          .news-feature-card { flex-direction: column; }
          .feature-img { width: 100%; aspect-ratio: 16 / 9; }
          .feature-content { padding: 1.8rem 1.4rem; }

          .news-sub-grid { grid-template-columns: minmax(0, 1fr); }

          .materials-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .materials-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .tag-cloud { justify-content: center; }
        }
          

        /* Small mobile */
        @media (max-width: 600px) {
          .hero-container { min-height: 320px; max-height: 80vh; }
          .hero-btns { flex-direction: column; width: 100%; max-width: 18rem; margin: 0 auto; }
          .h-btn { width: 100%; justify-content: center; }
          .feature-content  { padding: 1.4rem 1rem; }
          .app-hero-content { padding: 1.5rem; }
          .app-grid { grid-template-columns: minmax(0, 1fr); }
          .get-in-touch-banner { aspect-ratio: 4 / 3; }
        }
      `}</style>

      <Header />

      <main className="home-main">

        {/* HERO */}
        <section className="hero-container">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/assets/home/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>{t("home_hero_title")}</h1>
            <p>{t("home_hero_sub")}</p>
            <div className="hero-btns">
              <button className="h-btn btn-orange">{t("home_hero_btn1")} <span>›</span></button>
              <button className="h-btn btn-outline">{t("home_hero_btn2")} <span>›</span></button>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="home-marquee">
          <div className="home-marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="home-mitem">
                {item} <span className="home-mdot">●</span>
              </span>
            ))}
          </div>
        </div>

        {/* INDUSTRY BOXES */}
        {industryItems.length > 0 && (
          <section className="industry-grid">
            {industryItems.map((item, index) => (
              <Link key={index} to={item.link} className="industry-card">
                <span>{t(item.nameKey)}</span>
                <div className="icon-container">
                  <img
                    src={item.icon} alt={t(item.nameKey)} className="industry-icon"
                    style={{ width: item.customWidth || '50%', opacity: item.customWidth ? 1 : 0.8 }}
                  />
                </div>
              </Link>
            ))}
          </section>
        )}

        {/* NEWS */}
        <section className="news-section">
          <h2 className="section-title">{t("home_latest_news")}</h2>
          <div className="news-feature-card">
            <img src={featureNews.image} alt="Feature" className="feature-img" />
            <div className="feature-content">
              <span className="news-cat">{featureNews.category}</span>
              <h3 className="news-title">{featureNews.title}</h3>
              <p className="news-desc">{featureNews.desc}</p>
              <button className="learn-more-btn">{t("learn_more_btn")}</button>
            </div>
          </div>
          <div className="news-sub-grid">
            {newsItems.map((item, idx) => (
              <a href="#" key={idx} className="small-news-card">
                <img src={item.image} alt={t(item.titleKey)} className="small-news-img" />
                <div className="small-news-content">
                  <span className="news-cat">{t(item.categoryKey)}</span>
                  <h4 className="small-news-title">{t(item.titleKey)}</h4>
                </div>
              </a>
            ))}
          </div>
          <div className="news-footer">
            <button className="all-news-btn">{t("home_read_all_news")}</button>
          </div>
        </section>

        {/* MATERIALS / SERVICES */}
        <section className="materials-wrapper">
          <div className="materials-inner">
            <div className="materials-left">
              <h2>{t("home_solve_title")} <span>{t("home_solve_sub")}</span></h2>
              <div className="tag-cloud">
                {serviceTags.map((tag, index) => (
                  <div key={index} className="m-tag" onClick={() => setActiveService(tag)}>
                    <img src={tag.icon} alt="" />
                    {tag.name}
                  </div>
                ))}
              </div>
              <Link to="/industries" style={{ textDecoration: 'none' }}>
                <button className="h-btn btn-orange">{t("home_explore_services")} <span>›</span></button>
              </Link>
            </div>
            <div className="material-hero-card">
              {activeService.type === "video" ? (
                <video key={activeService.media} className="m-hero-img" autoPlay muted loop playsInline>
                  <source src={activeService.media} type="video/mp4" />
                </video>
              ) : (
                <img src={activeService.media} className="m-hero-img" alt={activeService.name} />
              )}
              <div className="m-hero-footer">
                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{t("home_biocompat")}</span>
                <a href="#" style={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none' }}>
                  {t("learn_more_btn")} ›
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MAKE ANYTHING */}
        <section className="apps-wrapper">
          <h2 className="apps-title">
            {t("home_make_anything")} <span>{t("home_make_anything_sub")}</span>
          </h2>
          <div className="apps-tabs">
            {[t("tab_products"), t("tab_auxiliary"), t("tab_giveaway"), t("tab_lab"), t("tab_skill")].map((nav, i) => (
              <button key={i} className={`app-tab ${activeTabIndex === i ? 'active' : ''}`} onClick={() => setActiveTabIndex(i)}>
                {nav}
              </button>
            ))}
          </div>
          <div className="app-hero-card">
            <img src={makeAnythingData[activeTabIndex].hero.image} className="app-hero-img" alt="Hero" />
            <div className="app-hero-content">
              <h3>{t(makeAnythingData[activeTabIndex].hero.titleKey)}</h3>
              <p>{t(makeAnythingData[activeTabIndex].hero.descKey)}</p>
              <div className="app-hero-actions">
                <button className="h-btn" style={{ background: '#000', color: '#fff', padding: '12px 25px', fontSize: '11px' }}>
                  {t("learn_more_btn")}
                </button>
                <a href="#" style={{ fontWeight: 700, fontSize: '0.8rem', color: '#000', textDecoration: 'none' }}>
                  {t(makeAnythingData[activeTabIndex].hero.linkKey)}
                </a>
              </div>
            </div>
          </div>
          <div className="app-grid">
            {makeAnythingData[activeTabIndex].grid.map((item, idx) => (
              <a key={idx} href="#" className="app-small-card">
                <img src={item.img} className="app-small-img" alt={t(item.titleKey)} />
                <div className="card-footer">{t(item.titleKey)}</div>
              </a>
            ))}
          </div>
        </section>

        {/* GET IN TOUCH */}
        <div className="git-section">
          <div className="get-in-touch-banner">
            <h2>{t("home_get_in_touch")}</h2>
            <button className="git-btn-black">{t("find_reseller")}</button>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}