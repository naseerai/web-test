import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function FullstackDevelopment() {
  // 1. State to track the active tab
  const [activeTab, setActiveTab] = useState("Frontend");

  // 2. Data object for all categories
  const techStackData = {
    "Frontend": [
      { e: '⚛️', n: 'React', r: 'UI Framework' },
      { e: '▲', n: 'Next.js', r: 'SSR / SSG' },
      { e: '🔷', n: 'TypeScript', r: 'Type Safety' },
      { e: '💨', n: 'Tailwind', r: 'Styling' },
      { e: '🐻', n: 'Zustand', r: 'State Mgmt' },
      { e: '📈', n: 'Recharts', r: 'Data Viz' },
      { e: '🎭', n: 'Cypress', r: 'E2E Testing' },
      { e: '📦', n: 'Vite', r: 'Build Tool' },
    ],
    "Backend": [
      { e: '🟢', n: 'Node.js', r: 'Runtime' },
      { e: '🚀', n: 'Express', r: 'API Framework' },
      { e: '🐍', n: 'Python', r: 'Scripting/AI' },
      { e: '⚡', n: 'FastAPI', r: 'High Perf API' },
      { e: '🛡️', n: 'NestJS', r: 'Architecture' },
      { e: '🔌', n: 'Socket.io', r: 'Real-time' },
      { e: '💎', n: 'Prisma', r: 'ORM' },
      { e: '🐹', n: 'Go', r: 'Microservices' },
    ],
    "Cloud & DevOps": [
      { e: '☁️', n: 'AWS', r: 'Infrastructure' },
      { e: '🐳', n: 'Docker', r: 'Containerization' },
      { e: '☸️', n: 'Kubernetes', r: 'Orchestration' },
      { e: '🔄', n: 'CI/CD', r: 'Automation' },
      { e: '🛠️', n: 'Terraform', r: 'IaC' },
      { e: '🌍', n: 'Nginx', r: 'Web Server' },
      { e: '📊', n: 'Prometheus', r: 'Monitoring' },
      { e: '🔐', n: 'Vault', r: 'Secrets' },
    ],
    "IoT & Embedded": [
      { e: '📡', n: 'MQTT', r: 'Messaging' },
      { e: '📟', n: 'ESP32', r: 'Hardware' },
      { e: '🔗', n: 'Modbus', r: 'Protocol' },
      { e: '📶', n: 'BLE', r: 'Connectivity' },
      { e: '🤖', n: 'ROS', r: 'Robotics' },
      { e: '🍓', n: 'Raspberry Pi', r: 'Gateway' },
      { e: '⚙️', n: 'C/C++', r: 'Firmware' },
      { e: '🕒', n: 'FreeRTOS', r: 'Real-time OS' },
    ],
    "Databases": [
      { e: '🐘', n: 'PostgreSQL', r: 'Relational' },
      { e: '🍃', n: 'MongoDB', r: 'NoSQL' },
      { e: '🔥', n: 'Redis', r: 'Caching' },
      { e: '⏱️', n: 'InfluxDB', r: 'Time Series' },
      { e: '🔍', n: 'Elastic', r: 'Search' },
      { e: '❄️', n: 'Snowflake', r: 'Warehousing' },
      { e: '📊', n: 'MySQL', r: 'Relational' },
      { e: '⚡', n: 'DynamoDB', r: 'Serverless DB' },
    ]
  };

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
        .fsd-root { font-family: 'DM Sans', sans-serif; background: #fff; color: #111; overflow-x: hidden; padding-top: 4.0rem; }

        /* HERO */
        .fsd-hero { background: #0d1117; display: grid; grid-template-columns: 1fr 1fr; min-height: 85vh; position: relative; overflow: hidden; }
        .fsd-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 15% 50%, rgba(244,83,28,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(37,99,235,0.05) 0%, transparent 50%); pointer-events: none; }
        .fsd-hero-left { padding: 6rem 4rem 6rem 6%; display: flex; flex-direction: column; justify-content: center; z-index: 1; }
        .fsd-pill { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.8rem; width: fit-content; }
        .fsd-pill-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px #22c55e; animation: fsd-blink 2s infinite; }
        @keyframes fsd-blink { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .fsd-pill-text { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #888; font-family: 'JetBrains Mono', monospace; }
        .fsd-hero-left h1 { font-size: clamp(2.2rem, 4vw, 3.6rem); font-weight: 800; color: #fff; letter-spacing: -2px; line-height: 1.0; margin-bottom: 1.2rem; }
        .fsd-hero-left h1 .fsd-accent { color: #f4531c; }
        .fsd-hero-left h1 .fsd-dim { color: #444; }
        .fsd-hero-left p { font-size: 0.92rem; color: #888; line-height: 1.8; max-width: 430px; margin-bottom: 2.2rem; }
        .fsd-hero-btns { display: flex; gap: 0.8rem; margin-bottom: 3rem; flex-wrap: wrap; }
        .fsd-btn-orange { background: #f4531c; color: #fff; border: none; padding: 0.85rem 1.8rem; border-radius: 6px; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: all 0.25s; }
        .fsd-btn-orange:hover { background: #e0451a; transform: translateY(-2px); }
        .fsd-btn-ghost-dark { background: transparent; color: #ccc; border: 1.5px solid #333; padding: 0.85rem 1.8rem; border-radius: 6px; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: all 0.25s; }
        .fsd-btn-ghost-dark:hover { border-color: #fff; color: #fff; }
        .fsd-tech-strip { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .fsd-chip { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #ccc; font-size: 0.65rem; font-weight: 600; padding: 0.28rem 0.6rem; border-radius: 4px; font-family: 'JetBrains Mono', monospace; transition: all 0.2s; }
        .fsd-chip:hover { background: rgba(244,83,28,0.12); border-color: rgba(244,83,28,0.35); color: #f4531c; }
        .fsd-hero-right { display: flex; align-items: center; justify-content: center; padding: 4rem 3rem; z-index: 1; }
        .fsd-code-win { background: #161b22; border: 1px solid #30363d; border-radius: 12px; width: 100%; max-width: 460px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.5); }
        .fsd-titlebar { background: #21262d; padding: 0.7rem 1rem; display: flex; align-items: center; gap: 0.4rem; border-bottom: 1px solid #30363d; }
        .fsd-dot { width: 11px; height: 11px; border-radius: 50%; }
        .fsd-dot-r { background: #ff5f57; }
        .fsd-dot-y { background: #febc2e; }
        .fsd-dot-g { background: #28c840; }
        .fsd-fname { font-size: 0.68rem; color: #888; font-family: 'JetBrains Mono', monospace; margin-left: 0.4rem; }
        .fsd-code { padding: 1.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; line-height: 1.8; }
        .fsd-cm { color: #6e7681; }
        .fsd-kw { color: #ff7b72; }
        .fsd-fn { color: #d2a8ff; }
        .fsd-str { color: #a5d6ff; }
        .fsd-var { color: #ffa657; }
        .fsd-p { color: #c9d1d9; }
        .fsd-code-line { display: block; }
        .fsd-i { display: inline-block; width: 20px; }

        /* BREADCRUMB */
        .fsd-crumb { padding: 1.2rem 6%; display: flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; color: #888; border-bottom: 1px solid #eee; background: #fff; }
        .fsd-crumb a { color: #888; text-decoration: none; }
        .fsd-crumb a:hover { color: #f4531c; }
        .fsd-crumb-sep { color: #ddd; }
        .fsd-crumb-cur { color: #111; font-weight: 600; }

        /* SHARED */
        .fsd-section { padding: 2.5rem 6%; }
        .fsd-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #f4531c; margin-bottom: 0.6rem; }
        .fsd-title { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #111; letter-spacing: -1.5px; line-height: 1.1; }
        .fsd-title span { color: #888; font-weight: 400; }
        .fsd-desc { font-size: 0.9rem; color: #666; line-height: 1.7; max-width: 540px; margin-top: 0.6rem; }

        /* SERVICES */
        .fsd-svc { background: #fff; }
        .fsd-svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; margin-top: 3rem; }
        .fsd-svc-card { border: 1px solid #e8e8e8; border-radius: 12px; padding: 1.8rem; position: relative; overflow: hidden; transition: all 0.3s; }
        .fsd-svc-card::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: transparent; transition: background 0.3s; }
        .fsd-svc-card:hover::after { background: #f4531c; }
        .fsd-svc-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.07); }
        .fsd-svc-icon { width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1.1rem; }
        .fsd-svc-card h4 { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; }
        .fsd-svc-card p { font-size: 0.78rem; color: #666; line-height: 1.65; margin-bottom: 1rem; }
        .fsd-svc-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .fsd-svc-tag { font-size: 0.62rem; font-weight: 700; font-family: 'JetBrains Mono', monospace; background: #f5f5f5; color: #444; padding: 0.18rem 0.55rem; border-radius: 3px; }

        /* TECH STACK */
        .fsd-stack { background: #f5f5f5; }
        .fsd-stack-layout { display: grid; grid-template-columns: 220px 1fr; gap: 3rem; margin-top: 3rem; align-items: start; }
        .fsd-stack-nav { display: flex; flex-direction: column; gap: 0.4rem; }
        .fsd-stab { padding: 0.9rem 1.1rem; border-radius: 8px; cursor: pointer; border: 1px solid transparent; transition: all 0.2s; display: flex; align-items: center; justify-content: space-between; }
        .fsd-stab:hover { background: #fff; border-color: #e8e8e8; }
        .fsd-stab.active { background: #fff; border-color: #e8e8e8; box-shadow: 0 3px 10px rgba(0,0,0,0.05); }
        .fsd-stab-label { font-size: 0.82rem; font-weight: 700; color: #111; }
        .fsd-stab.active .fsd-stab-label { color: #f4531c; }
        .fsd-stab-count { font-size: 0.65rem; background: #f5f5f5; color: #888; padding: 0.15rem 0.45rem; border-radius: 3px; font-weight: 600; }
        .fsd-tech-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; }
        .fsd-tech-card { background: #fff; border: 1px solid #e8e8e8; border-radius: 10px; padding: 1.1rem; text-align: center; transition: all 0.25s; }
        .fsd-tech-card:hover { border-color: #f4531c; transform: translateY(-3px); }
        .fsd-tech-emoji { font-size: 1.7rem; margin-bottom: 0.45rem; display: block; }
        .fsd-tech-name { font-size: 0.75rem; font-weight: 700; font-family: 'JetBrains Mono', monospace; }
        .fsd-tech-role { font-size: 0.65rem; color: #888; margin-top: 0.15rem; }

        /* WORK PROCESS */
        .fsd-wp { background: #111; }
        .fsd-wp .fsd-title { color: #fff; }
        .fsd-wp .fsd-desc { color: #888; }
        .fsd-wp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5px; margin-top: 3.5rem; background: rgba(255,255,255,0.05); border-radius: 12px; overflow: hidden; }
        .fsd-wp-step { background: #1a1a1a; padding: 2.2rem 1.8rem; transition: background 0.2s; }
        .fsd-wp-step:hover { background: #222; }
        .fsd-wp-num { font-size: 2.8rem; font-weight: 800; color: rgba(244,83,28,0.12); letter-spacing: -2px; font-family: 'JetBrains Mono', monospace; margin-bottom: 0.8rem; }
        .fsd-wp-icon { font-size: 1.6rem; margin-bottom: 0.7rem; }
        .fsd-wp-step h4 { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem; }
        .fsd-wp-step p { font-size: 0.75rem; color: #777; line-height: 1.6; }

        /* PORTFOLIO */
        .fsd-port { background: #fff; }
        .fsd-port-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.2rem; margin-top: 3rem; }
        .fsd-port-card { border: 1px solid #e8e8e8; border-radius: 14px; overflow: hidden; transition: all 0.3s; }
        .fsd-port-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.07); }
        .fsd-port-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; }
        .fsd-port-body { padding: 1.6rem; }
        .fsd-port-tags { display: flex; gap: 0.45rem; margin-bottom: 0.7rem; flex-wrap: wrap; }
        .fsd-port-tag { font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 0.22rem 0.55rem; border-radius: 3px; }
        .fsd-pt-iot { background: rgba(244,83,28,0.1); color: #f4531c; }
        .fsd-pt-cloud { background: rgba(34,197,94,0.1); color: #16a34a; }
        .fsd-pt-web { background: rgba(37,99,235,0.1); color: #2563eb; }
        .fsd-pt-mob { background: rgba(168,85,247,0.1); color: #7c3aed; }
        .fsd-pt-ai { background: rgba(234,179,8,0.1); color: #a16207; }
        .fsd-port-body h4 { font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; }
        .fsd-port-body p { font-size: 0.78rem; color: #666; line-height: 1.6; margin-bottom: 0.9rem; }
        .fsd-port-link { font-size: 0.75rem; font-weight: 700; color: #f4531c; text-decoration: none; display: flex; align-items: center; gap: 0.3rem; }
        .fsd-port-link:hover { gap: 0.6rem; }

        /* WHY US */
        .fsd-why { background: #f5f5f5; }
        .fsd-why-layout { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: center; margin-top: 3rem; }
        .fsd-why-img img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 12px; }
        .fsd-why-points { display: flex; flex-direction: column; gap: 1.3rem; }
        .fsd-why-point { display: flex; gap: 1rem; align-items: flex-start; }
        .fsd-why-icon { width: 42px; height: 42px; border-radius: 9px; background: #fff; border: 1px solid #e8e8e8; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; transition: all 0.25s; }
        .fsd-why-point:hover .fsd-why-icon { background: #f4531c; border-color: #f4531c; }
        .fsd-why-point h5 { font-size: 0.87rem; font-weight: 700; margin-bottom: 0.25rem; }
        .fsd-why-point p { font-size: 0.77rem; color: #666; line-height: 1.6; }

        /* PRICING */
        .fsd-pricing { background: #fff; }
        .fsd-price-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; margin-top: 3rem; }
        .fsd-price-card { border: 1.5px solid #e8e8e8; border-radius: 14px; padding: 2.2rem 1.8rem; position: relative; transition: all 0.3s; }
        .fsd-price-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.07); }
        .fsd-price-card.featured { border-color: #f4531c; background: #111; }
        .fsd-price-badge { position: absolute; top: -11px; left: 50%; transform: translateX(-50%); background: #f4531c; color: #fff; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 0.25rem 0.8rem; border-radius: 50px; white-space: nowrap; }
        .fsd-price-tier { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #f4531c; margin-bottom: 0.4rem; }
        .fsd-price-name { font-size: 1.3rem; font-weight: 800; margin-bottom: 0.4rem; }
        .fsd-price-card.featured .fsd-price-name { color: #fff; }
        .fsd-price-desc { font-size: 0.78rem; color: #888; line-height: 1.5; margin-bottom: 1.2rem; }
        .fsd-price-amt { font-size: 2.1rem; font-weight: 800; letter-spacing: -1.5px; margin-bottom: 0.2rem; }
        .fsd-price-card.featured .fsd-price-amt { color: #fff; }
        .fsd-price-unit { font-size: 0.72rem; color: #888; margin-bottom: 1.5rem; }
        .fsd-price-feats { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.8rem; }
        .fsd-price-feats li { font-size: 0.78rem; display: flex; gap: 0.5rem; align-items: flex-start; color: #444; }
        .fsd-price-card.featured .fsd-price-feats li { color: #ccc; }
        .fsd-price-feats li::before { content: '✓'; color: #f4531c; font-weight: 900; font-size: 0.7rem; flex-shrink: 0; }
        .fsd-price-btn { width: 100%; padding: 0.8rem; border-radius: 7px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: all 0.25s; border: 1.5px solid #e8e8e8; background: transparent; }
        .fsd-price-card.featured .fsd-price-btn { background: #f4531c; color: #fff; border-color: #f4531c; }
        .fsd-price-btn:hover { background: #f4531c; color: #fff; border-color: #f4531c; }

        /* TESTIMONIALS */
        .fsd-test { background: #f5f5f5; }
        .fsd-test-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; margin-top: 3rem; }
        .fsd-test-card { background: #fff; border-radius: 12px; padding: 1.8rem; border: 1px solid #e8e8e8; }
        .fsd-stars { color: #f4531c; font-size: 0.8rem; margin-bottom: 0.9rem; letter-spacing: 2px; }
        .fsd-test-quote { font-size: 0.84rem; color: #444; line-height: 1.7; margin-bottom: 1.3rem; font-style: italic; }
        .fsd-test-author { display: flex; align-items: center; gap: 0.7rem; }
        .fsd-test-avatar { width: 38px; height: 38px; border-radius: 50%; background: #f5f5f5; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; }
        .fsd-test-name { font-size: 0.82rem; font-weight: 700; }
        .fsd-test-role { font-size: 0.68rem; color: #888; }

        /* CTA */
        .fsd-cta { background: #111; padding: 6rem 6%; display: grid; grid-template-columns: 1fr auto; gap: 4rem; align-items: center; position: relative; overflow: hidden; }
        .fsd-cta::before { content: '</build>'; position: absolute; right: -10px; bottom: -30px; font-family: 'JetBrains Mono', monospace; font-size: 7rem; font-weight: 800; color: rgba(255,255,255,0.025); pointer-events: none; }
        .fsd-cta h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; color: #fff; letter-spacing: -1.5px; line-height: 1.1; }
        .fsd-cta p { color: #888; font-size: 0.9rem; margin-top: 0.5rem; max-width: 460px; }
        .fsd-cta-actions { display: flex; flex-direction: column; gap: 0.7rem; }
        .fsd-cta .fsd-btn-orange { white-space: nowrap; }
        .fsd-btn-outline-light { background: transparent; color: #ccc; border: 1.5px solid #333; padding: 0.85rem 1.8rem; border-radius: 7px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; cursor: pointer; white-space: nowrap; transition: all 0.25s; }
        .fsd-btn-outline-light:hover { border-color: #fff; color: #fff; }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .fsd-svc-grid { grid-template-columns: repeat(2, 1fr); }
          .fsd-stack-layout { grid-template-columns: 1fr; }
          .fsd-stack-nav { flex-direction: row; overflow-x: auto; padding-bottom: 0.5rem; }
          .fsd-wp-grid { grid-template-columns: repeat(2, 1fr); }
          .fsd-why-layout { grid-template-columns: 1fr; gap: 3rem; }
          .fsd-price-grid { grid-template-columns: 1fr; max-width: 400px; margin-left: auto; margin-right: auto; }
          .fsd-test-grid { grid-template-columns: 1fr 1fr; }
          .fsd-cta { grid-template-columns: 1fr; }
          .fsd-tech-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .fsd-hero { grid-template-columns: 1fr; min-height: auto; }
          .fsd-hero-right { padding: 3rem 5%; }
          .fsd-port-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .fsd-section { padding: 3.5rem 5%; }
          .fsd-cta { padding: 3.5rem 5%; }
          .fsd-svc-grid { grid-template-columns: 1fr; }
          .fsd-tech-grid { grid-template-columns: repeat(2, 1fr); }
          .fsd-test-grid { grid-template-columns: 1fr; }
          .fsd-wp-grid { grid-template-columns: 1fr; }
          .fsd-hero-left { padding: 4rem 5%; }
        }
      `}</style>

      <Header />

      <div className="fsd-root">

        {/* HERO */}
        <div className="fsd-hero">
          <div className="fsd-hero-left">
            <div className="fsd-pill"><span className="fsd-pill-dot"></span><span className="fsd-pill-text">Development Service // Available</span></div>
            <h1>We <span className="fsd-accent">Build</span><br/><span className="fsd-dim">the Software</span><br/>Behind the Hardware.</h1>
            <p>End-to-end fullstack development for IoT platforms, industrial dashboards, cloud APIs, and mobile apps — by engineers who understand both code and circuits.</p>
            <div className="fsd-hero-btns">
              <button className="fsd-btn-orange">Start a Project →</button>
              <button className="fsd-btn-ghost-dark">View Portfolio</button>
            </div>
            <div className="fsd-tech-strip">
              {['React','Node.js','Python','AWS','MQTT','PostgreSQL','Docker','TypeScript'].map((t,i)=>(
                <span className="fsd-chip" key={i}>{t}</span>
              ))}
            </div>
          </div>
          <div className="fsd-hero-right">
            <div className="fsd-code-win">
              <div className="fsd-titlebar">
                <div className="fsd-dot fsd-dot-r"></div>
                <div className="fsd-dot fsd-dot-y"></div>
                <div className="fsd-dot fsd-dot-g"></div>
                <span className="fsd-fname">iot-dashboard.ts</span>
              </div>
              <div className="fsd-code">
                <span className="fsd-code-line"><span className="fsd-cm">// Real-time IoT telemetry handler</span></span>
                <span className="fsd-code-line">&nbsp;</span>
                <span className="fsd-code-line"><span className="fsd-kw">import</span> <span className="fsd-p">{"{ "}</span><span className="fsd-var">mqtt</span><span className="fsd-p">{", "}</span><span className="fsd-var">ws</span><span className="fsd-p">{" }"}</span> <span className="fsd-kw">from</span> <span className="fsd-str">'@myaccess/iot'</span></span>
                <span className="fsd-code-line">&nbsp;</span>
                <span className="fsd-code-line"><span className="fsd-kw">const</span> <span className="fsd-var">device</span> <span className="fsd-p">= </span><span className="fsd-kw">await</span> <span className="fsd-fn">connect</span><span className="fsd-p">{"({"}</span></span>
                <span className="fsd-code-line"><span className="fsd-i"></span><span className="fsd-var">broker</span><span className="fsd-p">: </span><span className="fsd-str">'mqtt://prod.myaccess.in'</span><span className="fsd-p">,</span></span>
                <span className="fsd-code-line"><span className="fsd-i"></span><span className="fsd-var">deviceId</span><span className="fsd-p">: </span><span className="fsd-str">'MA-0x4F2C'</span><span className="fsd-p">,</span></span>
                <span className="fsd-code-line"><span className="fsd-i"></span><span className="fsd-var">protocol</span><span className="fsd-p">: </span><span className="fsd-str">'mqtts'</span></span>
                <span className="fsd-code-line"><span className="fsd-p">{"})"}  </span></span>
                <span className="fsd-code-line">&nbsp;</span>
                <span className="fsd-code-line"><span className="fsd-var">device</span><span className="fsd-p">.</span><span className="fsd-fn">on</span><span className="fsd-p">{'('}</span><span className="fsd-str">'telemetry'</span><span className="fsd-p">{', (data) => {'}</span></span>
                <span className="fsd-code-line"><span className="fsd-i"></span><span className="fsd-fn">broadcast</span><span className="fsd-p">{'(ws.clients, {'}</span></span>
                <span className="fsd-code-line"><span className="fsd-i"></span><span className="fsd-i"></span><span className="fsd-var">temp</span><span className="fsd-p">: </span><span className="fsd-var">data</span><span className="fsd-p">.temperature,</span></span>
                <span className="fsd-code-line"><span className="fsd-i"></span><span className="fsd-i"></span><span className="fsd-var">ts</span><span className="fsd-p">: </span><span className="fsd-var">Date</span><span className="fsd-p">.Now()</span></span>
                <span className="fsd-code-line"><span className="fsd-i"></span><span className="fsd-p">{"})"}  </span></span>
                <span className="fsd-code-line"><span className="fsd-p">{"})"}  </span></span>
                <span className="fsd-code-line">&nbsp;</span>
                <span className="fsd-code-line"><span className="fsd-cm">// ✓ Connected — 24 devices online</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <section className="fsd-section fsd-svc">
          <div className="fsd-label">What We Build</div>
          <h2 className="fsd-title">Fullstack Services <span>End to End</span></h2>
          <p className="fsd-desc">From IoT firmware bridging to cloud APIs to customer-facing dashboards — we handle the entire software stack.</p>
          <div className="fsd-svc-grid">
            {[
              { icon:'🌐', bg:'#eff6ff', title:'Web Application Development', desc:'Custom web apps built with React, Next.js, and TypeScript. B2B SaaS platforms, customer portals, and admin dashboards.', tags:['React','Next.js','TypeScript','Tailwind'] },
              { icon:'🔌', bg:'#fef3f2', title:'IoT Platform & Device Integration', desc:'Connect embedded hardware to cloud. MQTT brokers, WebSocket dashboards, OTA updates, and device management portals.', tags:['MQTT','WebSocket','Node.js','InfluxDB'] },
              { icon:'☁️', bg:'#f0fdf4', title:'Cloud Backend & APIs', desc:'Scalable REST and GraphQL APIs, serverless functions, microservices, and database architecture on AWS, GCP, or Azure.', tags:['AWS','GraphQL','Docker','Postgres'] },
              { icon:'📱', bg:'#fdf4ff', title:'Mobile App Development', desc:'Cross-platform mobile apps in React Native with BLE, Wi-Fi, and push notification integration. Ship once to iOS and Android.', tags:['React Native','BLE','Expo','Firebase'] },
              { icon:'📊', bg:'#fff7ed', title:'Industrial Dashboards & Analytics', desc:'Real-time monitoring dashboards for manufacturing lines, sensor networks, and fleet management with alerting and reporting.', tags:['Grafana','D3.js','TimeSeries','OPC-UA'] },
              { icon:'🤖', bg:'#f0f9ff', title:'AI / ML Integration', desc:'Integrate computer vision, predictive maintenance, anomaly detection, and LLM features into your existing product.', tags:['Python','OpenCV','LangChain','TensorFlow'] },
            ].map((s, i) => (
              <div className="fsd-svc-card" key={i}>
                <div className="fsd-svc-icon" style={{background: s.bg}}>{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <div className="fsd-svc-tags">{s.tags.map((t,j)=><span className="fsd-svc-tag" key={j}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="fsd-section fsd-stack">
          <div className="fsd-label">Technology</div>
          <h2 className="fsd-title">Our Tech Stack <span>— Curated, Not Random</span></h2>
          <p className="fsd-desc">Battle-tested technologies chosen for performance, maintainability, and long-term support.</p>
          <div className="fsd-stack-layout">
            <div className="fsd-stack-nav">
              {Object.keys(techStackData).map((category, i) => (
                <div 
                  className={`fsd-stab ${activeTab === category ? 'active' : ''}`} 
                  key={i}
                  onClick={() => setActiveTab(category)}
                >
                  <span className="fsd-stab-label">{category}</span>
                  <span className="fsd-stab-count">{techStackData[category].length}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="fsd-tech-grid">
                {techStackData[activeTab].map((t, i) => (
                  <div className="fsd-tech-card" key={i}>
                    <span className="fsd-tech-emoji">{t.e}</span>
                    <div className="fsd-tech-name">{t.n}</div>
                    <div className="fsd-tech-role">{t.r}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK PROCESS */}
        <section className="fsd-section fsd-wp">
          <div className="fsd-label">Engagement Model</div>
          <h2 className="fsd-title" style={{color:'#fff'}}>How We <span style={{color:'#555'}}>Deliver Projects</span></h2>
          <p className="fsd-desc">An agile, transparent process with clear milestones and regular client check-ins.</p>
          <div className="fsd-wp-grid">
            {[
              { n:'01', icon:'🎯', title:'Discovery & Scoping', desc:'We map your goals, users, and constraints into a detailed scope document with timelines, milestones, and tech decisions.' },
              { n:'02', icon:'🎨', title:'Design & Architecture', desc:'UI/UX wireframes, system architecture diagrams, API contracts, and database schema — all reviewed before a single line of code.' },
              { n:'03', icon:'⚡', title:'Agile Development', desc:'2-week sprints with live staging environments. Weekly demo calls. You see and test progress continuously — not just at the end.' },
              { n:'04', icon:'🚀', title:'Deploy & Support', desc:'CI/CD pipeline setup, production deployment, monitoring with Sentry and CloudWatch, and 3-month post-launch support included.' },
            ].map((s, i) => (
              <div className="fsd-wp-step" key={i}>
                <div className="fsd-wp-num">{s.n}</div>
                <div className="fsd-wp-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="fsd-section fsd-port">
          <div className="fsd-label">Portfolio</div>
          <h2 className="fsd-title">Selected <span>Projects</span></h2>
          <p className="fsd-desc">A sample of recent work across IoT, SaaS, and industrial software.</p>
          <div className="fsd-port-grid">
            {[
              { img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', tags:[{c:'fsd-pt-iot',l:'IoT'},{c:'fsd-pt-cloud',l:'Cloud'}], title:'Smart Factory Monitoring Platform', desc:'Real-time monitoring dashboard for 200+ machines across 3 factory floors. MQTT telemetry, predictive maintenance alerts, and shift reporting.' },
              { img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', tags:[{c:'fsd-pt-web',l:'Web App'},{c:'fsd-pt-cloud',l:'SaaS'}], title:'ERP & Inventory Management SaaS', desc:'Multi-tenant SaaS platform for electronics manufacturers. BOM management, purchase orders, supplier tracking, and financial reporting.' },
              { img:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', tags:[{c:'fsd-pt-mob',l:'Mobile'},{c:'fsd-pt-iot',l:'BLE'}], title:'IoT Device Control App', desc:'React Native app for configuring, controlling, and monitoring BLE-connected hardware. OTA updates, live telemetry, and device provisioning.' },
              { img:'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80', tags:[{c:'fsd-pt-ai',l:'AI/ML'},{c:'fsd-pt-cloud',l:'Vision'}], title:'PCB Quality Inspection AI', desc:'Computer vision pipeline for automated PCB defect detection. 99.2% accuracy on solder joint classification using custom-trained YOLOv8 models.' },
            ].map((p, i) => (
              <div className="fsd-port-card" key={i}>
                <img className="fsd-port-img" src={p.img} alt={p.title} />
                <div className="fsd-port-body">
                  <div className="fsd-port-tags">{p.tags.map((t,j)=><span className={`fsd-port-tag ${t.c}`} key={j}>{t.l}</span>)}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <a href="#" className="fsd-port-link">View Case Study →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section className="fsd-section fsd-why">
          <div className="fsd-label">Why MYACCESS Dev</div>
          <h2 className="fsd-title">Software Engineers Who <span>Speak Hardware</span></h2>
          <div className="fsd-why-layout">
            <div className="fsd-why-img">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team" />
            </div>
            <div className="fsd-why-points">
              {[
                { icon:'🔩', title:'Hardware-Software Integration Experts', desc:"Our devs understand embedded systems, serial protocols, and hardware constraints — no 'lost in translation' between firmware and app teams." },
                { icon:'🏭', title:'Industrial Domain Knowledge', desc:'We\'ve built for EMS, robotics, agriculture, and medical industries. We understand OEE, SCADA, Modbus, and industrial connectivity challenges.' },
                { icon:'🔒', title:'Security-First Development', desc:'TLS everywhere, OWASP compliance, secrets management, and regular security audits. Security is foundational, not bolted on.' },
                { icon:'🔄', title:'Ongoing Maintenance Options', desc:'Retainer plans for bug fixes, feature additions, performance optimization, and dependency updates. Long-term partnership.' },
              ].map((w, i) => (
                <div className="fsd-why-point" key={i}>
                  <div className="fsd-why-icon">{w.icon}</div>
                  <div><h5>{w.title}</h5><p>{w.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="fsd-section fsd-pricing">
          <div className="fsd-label">Engagement Plans</div>
          <h2 className="fsd-title">Flexible <span>Pricing Models</span></h2>
          <div className="fsd-price-grid">
            <div className="fsd-price-card">
              <div className="fsd-price-tier">Project</div>
              <div className="fsd-price-name">Fixed Scope</div>
              <div className="fsd-price-desc">Defined deliverables with fixed price and timeline. Best for greenfield projects.</div>
              <div className="fsd-price-amt">₹2L+</div>
              <div className="fsd-price-unit">per project, scope-based</div>
              <ul className="fsd-price-feats">
                {['Detailed scope document','UI/UX design included','Staging + production deploy','30-day post-launch support','Full source code handover'].map((f,i)=><li key={i}>{f}</li>)}
              </ul>
              <button className="fsd-price-btn">Get Estimate</button>
            </div>
            <div className="fsd-price-card featured">
              <div className="fsd-price-badge">Most Flexible</div>
              <div className="fsd-price-tier">Team</div>
              <div className="fsd-price-name">Dedicated Dev</div>
              <div className="fsd-price-desc">Your extended engineering team. Full-time senior developers embedded in your workflow.</div>
              <div className="fsd-price-amt">₹1.2L<span style={{fontSize:'0.9rem',fontWeight:400}}>/mo</span></div>
              <div className="fsd-price-unit">per developer</div>
              <ul className="fsd-price-feats">
                {['Full-time senior developer','Your tools & processes','Daily standups','Cancel with 30-day notice','Scale up/down as needed'].map((f,i)=><li key={i}>{f}</li>)}
              </ul>
              <button className="fsd-price-btn">Start Trial Month</button>
            </div>
            <div className="fsd-price-card">
              <div className="fsd-price-tier">Support</div>
              <div className="fsd-price-name">Retainer</div>
              <div className="fsd-price-desc">Ongoing maintenance, feature additions, and priority bug fixes for existing products.</div>
              <div className="fsd-price-amt">₹40K<span style={{fontSize:'0.9rem',fontWeight:400}}>/mo</span></div>
              <div className="fsd-price-unit">20 hours/month</div>
              <ul className="fsd-price-feats">
                {['Bug fixes & patches','Dependency updates','Feature additions (scoped)','Priority response SLA','Monthly status report'].map((f,i)=><li key={i}>{f}</li>)}
              </ul>
              <button className="fsd-price-btn">Enquire Now</button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="fsd-section fsd-test">
          <div className="fsd-label">Client Feedback</div>
          <h2 className="fsd-title">What Clients <span>Say</span></h2>
          <div className="fsd-test-grid">
            {[
              { quote:'"MYACCESS built our factory monitoring platform from scratch. What impressed us was how naturally they understood the hardware side — zero hand-holding on MQTT or sensor protocols."', name:'Rajan Mehta', role:'CTO, AutoFab Industries' },
              { quote:'"The team delivered a clean, well-documented codebase with a CI/CD pipeline on day one. Three months post-launch, we\'ve had zero production outages. Exceptional quality."', name:'Priya Nambiar', role:'Founder, AgriSense' },
              { quote:'"We brought them in for a 3-month IoT app project and extended the engagement. The dedicated dev model gives us the flexibility of an in-house engineer without the overhead."', name:'Arun Sharma', role:'Product Manager, TechBridge' },
            ].map((t, i) => (
              <div className="fsd-test-card" key={i}>
                <div className="fsd-stars">★★★★★</div>
                <p className="fsd-test-quote">{t.quote}</p>
                <div className="fsd-test-author">
                  <div className="fsd-test-avatar">👤</div>
                  <div><div className="fsd-test-name">{t.name}</div><div className="fsd-test-role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="fsd-cta">
          <div>
            <h2>Let's Build Something<br/>Worth Shipping.</h2>
            <p>Schedule a free 30-minute discovery call. We'll map out what you need, what's feasible, and what it'll take.</p>
          </div>
          <div className="fsd-cta-actions">
            <button className="fsd-btn-orange">Book Discovery Call →</button>
            <button className="fsd-btn-outline-light">View All Projects</button>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}