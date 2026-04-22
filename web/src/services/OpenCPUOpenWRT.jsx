import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .fw-page { font-family: 'DM Sans', sans-serif; background: #ffffff; color: #1a1a1a; overflow-x: hidden; }
  .cp-page, .pcb-page, .ed-page, .fw-page, .pd-page, .sr-page {
  padding-top: 85px; /* Adjust this based on your Header's height */
}

  /* HERO */
  .fw-hero {
  position: relative; 
  width: 95%; /* Slightly wider to look better */
  margin: -2vh auto 0; /* Reduced top margin from 1.5rem to 1vh */
  border-radius: 1.0rem; 
  overflow: hidden;
  background: #1a1a1a; 
  min-height: 70vh; 
  display: flex; 
  align-items: flex-end;
}

  .fw-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(244,83,28,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(244,83,28,0.07) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .fw-hero-glow {
    position: absolute; width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(244,83,28,0.22) 0%, transparent 65%);
    top: -150px; right: -80px; pointer-events: none;
  }
  .fw-hero-inner {
    position: relative; z-index: 2; width: 100%;
    padding: 0 5% 5%;
    display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: flex-end;
  }
  .fw-tag {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(244,83,28,0.15); border: 1px solid rgba(244,83,28,0.35);
    padding: 6px 14px; border-radius: 4px;
    font-size: 0.68rem; font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase; color: #f4531c; margin-bottom: 1.2rem;
  }
  .fw-tag-dot {
    width: 6px; height: 6px; border-radius: 50%; background: #f4531c;
    animation: fwBlink 1.5s ease-in-out infinite;
  }
  @keyframes fwBlink { 0%,100%{opacity:1;} 50%{opacity:0.25;} }
  .fw-hero h1 {
    font-size: clamp(2.8rem, 5vw, 5rem); font-weight: 900;
    line-height: 0.93; letter-spacing: -2px; color: #fff; margin-bottom: 1.2rem;
  }
  .fw-hero h1 em { font-style: normal; color: #f4531c; }
  .fw-hero-p { font-size: 1rem; color: #aaa; line-height: 1.7; max-width: 460px; margin-bottom: 2rem; }
  .fw-btns { display: flex; gap: 0.8rem; flex-wrap: wrap; }
  .btn-org {
    background: #f4531c; color: #fff; border: none;
    padding: 13px 26px; font-size: 0.75rem; font-weight: 700;
    border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px;
    transition: all 0.3s;
  }
  .btn-org:hover { background: #d43e10; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(244,83,28,0.4); }
  .btn-ghost-w {
    background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.25);
    padding: 13px 26px; font-size: 0.75rem; font-weight: 700;
    border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s;
  }
  .btn-ghost-w:hover { border-color: #fff; transform: translateY(-2px); }
  .fw-stats { display: flex; flex-direction: column; gap: 0.8rem; }
  .fw-stat-row { display: flex; gap: 0.8rem; }
  .fw-stat-box {
    flex: 1; background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 1.3rem;
  }
  .fw-stat-box::before {
    content: ''; display: block; height: 2px;
    background: linear-gradient(90deg, #f4531c, transparent);
    margin-bottom: 0.8rem; border-radius: 1px;
  }
  .fw-stat-n { font-size: 1.8rem; font-weight: 900; color: #f4531c; }
  .fw-stat-l { font-size: 0.62rem; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-top: 2px; }

  /* TAG CLOUD SECTION */
  .fw-tags-wrap { width: 95%; margin: 2vh auto; }
  .fw-tags-inner {
    background: #1a1a1a; border-radius: 1.25rem;
    padding: 3.5rem 4rem;
    display: grid; grid-template-columns: 1fr 1.1fr; gap: 4rem; align-items: center;
  }
  .fw-tags-inner h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 700; color: #fff; margin-bottom: 0.5rem; line-height: 1.1; }
  .fw-tags-inner h2 span { color: #555; font-weight: 300; }
  .fw-tags-inner p { font-size: 0.88rem; color: #888; line-height: 1.7; margin-bottom: 2rem; max-width: 420px; }
  .fw-tag-cloud { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2rem; }
  .fw-m-tag {
    display: flex; align-items: center; gap: 6px;
    background: #0b0b0b; border: 1px solid #605a5a;
    padding: 0.3rem 0.7rem; height: 2.1rem; border-radius: 6px;
    font-size: 0.73rem; font-weight: 600; cursor: pointer; color: #cdcccc; transition: all 0.2s;
  }
  .fw-m-tag:hover { background: #333; border-color: #f4531c; color: #fff; }
  .fw-visual { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; overflow: hidden; }
  .fw-visual-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; background: #222; }
  .fw-visual-footer {
    padding: 1.2rem 1.5rem; display: flex; justify-content: space-between; align-items: center; background: #f4531c;
  }
  .fw-visual-footer span { font-size: 0.78rem; font-weight: 700; color: #fff; }
  .fw-visual-footer a { color: #fff; font-size: 0.75rem; font-weight: 700; text-decoration: none; }

  /* PAGE BODY */
  .fw-body { width: 90%; margin: 0 auto; }
  .fw-section { padding: 4vh 0; }
  .fw-divider { height: 1px; background: #e8e8e8; margin: 0; }
  .fw-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f4531c; margin-bottom: 0.6rem; }
  .fw-sec-title { font-size: clamp(1.8rem, 3.2vw, 2.8rem); font-weight: 700; line-height: 1.1; color: #1a1a1a; margin-bottom: 0.8rem; }
  .fw-sec-title span { color: #bbb; font-weight: 300; }

  /* WHAT WE DO */
  .fw-what-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 3.5rem; align-items: start; }
  .fw-terminal-card { background: #1a1a1a; border-radius: 14px; padding: 2rem; border: 1px solid #2a2a2a; }
  .fw-term-dots { display: flex; gap: 6px; margin-bottom: 1.2rem; }
  .fw-term-dot { width: 12px; height: 12px; border-radius: 50%; }
  .fw-term-body {
    background: #0a0a0a; border-radius: 8px; padding: 1.3rem;
    font-family: 'Courier New', monospace; font-size: 0.75rem; line-height: 1.9;
    border: 1px solid #1a1a1a;
  }
  .tp { color: #f4531c; } .tc { color: #7dd3fc; } .to { color: #86efac; } .tcm { color: #444; }
  .fw-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.2rem; }
  .fw-chip { background: #111; border: 1px solid #2a2a2a; padding: 4px 12px; border-radius: 4px; font-size: 0.68rem; font-weight: 600; color: #aaa; }
  .fw-chip.active { border-color: #f4531c; color: #f4531c; }
  .fw-points { display: flex; flex-direction: column; gap: 1.8rem; }
  .fw-point { display: flex; gap: 1rem; align-items: flex-start; }
  .fw-p-icon {
    width: 42px; height: 42px; flex-shrink: 0; border-radius: 8px;
    background: #fff5f2; border: 1px solid #fdddd5;
    display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
  }
  .fw-p-title { font-size: 0.93rem; font-weight: 700; color: #1a1a1a; margin-bottom: 3px; }
  .fw-p-desc { font-size: 0.8rem; color: #888; line-height: 1.6; }

  /* SERVICE CARDS */
  .fw-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 3rem; }
  .fw-card {
    background: #1a1a1a; border-radius: 12px; padding: 2rem;
    border: 1px solid #222; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden;
  }
  .fw-card::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
    background: #f4531c; transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
  }
  .fw-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(0,0,0,0.15); border-color: #333; }
  .fw-card:hover::after { transform: scaleX(1); }
  .fw-card-ico { font-size: 1.8rem; margin-bottom: 1rem; }
  .fw-card-t { font-size: 0.93rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem; }
  .fw-card-d { font-size: 0.78rem; color: #666; line-height: 1.6; }
  .fw-card-tag { display: inline-block; margin-top: 1rem; font-size: 0.62rem; font-weight: 700; letter-spacing: 1px; color: #f4531c; text-transform: uppercase; }

  /* PROCESS */
  .fw-process { margin-top: 3.5rem; position: relative; }
  .fw-process::before {
    content: ''; position: absolute; left: 2rem; top: 0; bottom: 0; width: 1px;
    background: linear-gradient(to bottom, transparent, #e8e8e8 10%, #e8e8e8 90%, transparent);
  }
  .fw-step { display: flex; gap: 2.2rem; padding: 2rem 0; align-items: flex-start; }
  .fw-step-num {
    width: 4rem; height: 4rem; flex-shrink: 0; border-radius: 50%;
    background: #fff; border: 2px solid #e8e8e8;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; font-weight: 900; color: #f4531c; z-index: 1; position: relative; transition: all 0.3s;
  }
  .fw-step:hover .fw-step-num { background: #f4531c; color: #fff; border-color: #f4531c; }
  .fw-step-t { font-size: 1rem; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; }
  .fw-step-d { font-size: 0.82rem; color: #888; line-height: 1.6; max-width: 580px; }

  /* MODULES */
  .fw-modules {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
    background: #e8e8e8; border-radius: 12px; overflow: hidden;
    border: 1px solid #e8e8e8; margin-top: 3rem;
  }
  .fw-mc { background: #fff; padding: 1.5rem; transition: background 0.2s; }
  .fw-mc:hover { background: #f7f7f7; }
  .fw-mc-cat { font-size: 0.58rem; letter-spacing: 2px; text-transform: uppercase; color: #f4531c; margin-bottom: 0.4rem; font-weight: 700; }
  .fw-mc-name { font-size: 0.88rem; font-weight: 700; color: #1a1a1a; }
  .fw-mc-sub { font-size: 0.72rem; color: #aaa; margin-top: 2px; }

  /* CTA */
  .fw-cta {
    background: #f4531c; border-radius: 1.25rem;
     padding: 6vh 5rem; margin: 4vh 0 6vh;
    display: flex; justify-content: space-between; align-items: center;
    gap: 2rem; flex-wrap: wrap; position: relative; overflow: hidden;
  }
  .fw-cta::before { content: ''; position: absolute; right: -60px; top: -60px; width: 260px; height: 260px; border-radius: 50%; background: rgba(255,255,255,0.08); }
  .fw-cta h2 { font-size: clamp(1.5rem, 3vw, 2.3rem); font-weight: 900; color: #fff; max-width: 500px; line-height: 1.1; position: relative; z-index: 1; }
  .fw-cta-btn { background: #000; color: #fff; border: none; padding: 13px 28px; font-size: 0.72rem; font-weight: 700; border-radius: 5px; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s; position: relative; z-index: 1; flex-shrink: 0; }
  .fw-cta-btn:hover { background: #111; transform: translateY(-2px); }

 /* --- MOBILE RESPONSIVE UPDATES --- */

  @media(max-width: 900px) {
    /* 1. Hero Section Fix */
    .fw-hero-inner { 
      grid-template-columns: 1fr; 
      padding: 100px 5% 5vh; /* Added top padding for header clearance */
      gap: 2rem;
      align-items: flex-start;
    }
    
    .fw-hero h1 { font-size: 3.2rem; }

    /* 2. Hero Stats Fix (The 200+ boxes) */
    /* We change the rows into a 2x2 grid that fits the screen width */
    .fw-stats { width: 100%; }
    .fw-stat-row { 
      display: grid; 
      grid-template-columns: 1fr 1fr; 
      gap: 0.8rem; 
      margin-bottom: 0.8rem;
    }
    .fw-stat-box { padding: 1rem; }

    /* 3. Firmware Solutions Fix (Tags & Image box) */
    /* Stack the text/tags on top of the image */
    .fw-tags-inner { 
      grid-template-columns: 1fr; 
      padding: 2.5rem 1.5rem; 
      gap: 2.5rem; 
    }
    .fw-tags-inner h2 { font-size: 1.8rem; }
    .fw-tag-cloud { justify-content: flex-start; }

    /* General Layout */
    .fw-what-grid { grid-template-columns: 1fr; }
    .fw-cards { grid-template-columns: 1fr 1fr; }
    .fw-modules { grid-template-columns: 1fr 1fr; }
  }

  @media(max-width: 600px) {
    .fw-hero h1 { font-size: 2.5rem; }
    
    /* Stack stats into a single column on very small phones if 2x2 is too tight */
    .fw-stat-row { grid-template-columns: 1fr; } 
    
    .fw-cards { grid-template-columns: 1fr; }
    .fw-modules { grid-template-columns: 1fr; }
    
    .fw-btns { flex-direction: column; width: 100%; }
    .btn-org, .btn-ghost-w { width: 100%; text-align: center; }

    .fw-cta { padding: 3rem 1.5rem; text-align: center; justify-content: center; }
    .fw-cta h2 { font-size: 1.5rem; margin-bottom: 1.5rem; }
  }
`;

const serviceTags = [
  "🌐 OpenWRT Linux", "📡 OpenCPU SDK", "🔒 Secure Gateway", "🔄 Delta OTA",
  "☁️ AWS/Azure IoT", "📶 4G/5G Modules", "⚙️ LuCI Custom UI", "🛡️ IMEI Binding",
  "📟 AT Command Logic", "🔧 Kernel Patching", "⚡ Power Optimization", "🧩 BSP Integration",
];

const serviceCards = [
  { 
    ico: "🌐", title: "Custom OpenWRT Builds", 
    desc: "Target-specific builds for MediaTek/Qualcomm SoCs with custom LuCI web interfaces, VLAN, and VPN (WireGuard/OpenVPN) support.", 
    tag: "Gateways · Routers · Firewalls" 
  },
  { 
    ico: "📲", title: "OpenCPU App Development", 
    desc: "Run firmware directly on cellular modules (Neoway/Quectel/SIMCom) to eliminate external MCUs, reducing cost and PCB space.", 
    tag: "Compact · Low Power · Cost-Effective" 
  },
  { 
    ico: "☁️", title: "Cloud & MQTT Integration", 
    desc: "Seamless data sync with AWS IoT, Azure, or custom dashboards using MQTT, HTTPS, and REST APIs directly from the modem.", 
    tag: "AWS · Azure · Custom MQTT" 
  },
  { 
    ico: "🔌", title: "Peripheral & Driver Dev", 
    desc: "Hardware driver integration for UART, I2C, SPI, Modbus TCP/RTU, and GPIO-based automation logic for industrial use.", 
    tag: "Modbus · Sensors · I/O Control" 
  },
  { 
    ico: "🛡️", title: "Security & Remote Mgmt", 
    desc: "Implementation of secure boot, IMEI/ICCID binding, watchdog timers, and remote diagnostics for high-reliability deployments.", 
    tag: "Hardened · Remote Debug · Watchdog" 
  },
  { 
    ico: "🔄", title: "FOTA & Update Systems", 
    desc: "Full Over-the-Air (OTA) update infrastructure with fallback logic to ensure your fleet is always running the latest secure firmware.", 
    tag: "Reliable · Remote Upgrade · Rollback" 
  },
];

const steps = [
  { 
    n: "01", t: "Hardware & SDK Audit", 
    d: "Selection of the right SoC (MediaTek/Qualcomm) or Cellular Module (Neoway/Quectel) based on your networking and power needs." 
  },
  { 
    n: "02", t: "BSP & Environment Setup", 
    d: "Configuring the target-specific Build System, toolchains, kernel-level patches, and initial board support package (BSP)." 
  },
  { 
    n: "03", t: "Core Feature Implementation", 
    d: "Developing custom network stacks for OpenWRT or sensor-interfacing logic for OpenCPU application firmware." 
  },
  { 
    n: "04", t: "UI & Integration Layer", 
    d: "Building LuCI web pages for router management or cloud-sync protocols (MQTT/HTTPS) for cellular edge devices." 
  },
  { 
    n: "05", t: "Validation & FOTA Handover", 
    d: "Rigorous testing of watchdog logic, power sleep modes, and delivery of flashable binaries (.BIN/.IMG) with OTA support." 
  },
];

const modules = [
  { cat: "Cellular", name: "Neoway N58 / N706B", sub: "OpenCPU specialized" },
  { cat: "Cellular", name: "Quectel EC200U / BG96", sub: "SDK based development" },
  { cat: "Cellular", name: "SIMCom SIM7600 / 800", sub: "Lua & C development" },
  { cat: "OpenWRT", name: "MediaTek MT7621/7628", sub: "Mainline support" },
  { cat: "OpenWRT", name: "Qualcomm IPQ807x/60xx", sub: "Wi-Fi 6 Enterprise" },
  { cat: "Hardware", name: "GL.iNet / Teltonika", sub: "Industrial Gateway customization" },
  { cat: "Storage", name: "SPI NAND / eMMC", sub: "Custom memory mapping" },
  { cat: "Modems", name: "LTE Cat 4 / 5G NR", sub: "High-speed backhaul" },
];

export default function OpenCPUOpenWRT() {
  return (
    <div className="fw-page">
      <style>{styles}</style>
        <Header />

      {/* HERO */}
      <div className="fw-hero">
        <div className="fw-hero-grid" />
        <div className="fw-hero-glow" />
        <div className="fw-hero-inner">
          <div>
            <div className="fw-tag"><span className="fw-tag-dot" /> Firmware Engineering</div>
            <h1>Open<em>CPU</em> &amp;<br />Open<em>WRT</em></h1>
            <p className="fw-hero-p">Powering secure gateways, IoT hubs, and cellular-edge devices with custom Linux builds and MCU-less cellular firmware.</p>
            <div className="fw-btns">
              <button className="btn-org">Get a Quote ›</button>
              <button className="btn-ghost-w">View Capabilities</button>
            </div>
          </div>
          <div className="fw-stats">
            <div className="fw-stat-row">
              <div className="fw-stat-box"><div className="fw-stat-n">50+</div><div className="fw-stat-l"> OpenWRT Projects</div></div>
              <div className="fw-stat-box"><div className="fw-stat-n">30+</div><div className="fw-stat-l">Cellular Modules</div></div>
            </div>
            <div className="fw-stat-row">
              <div className="fw-stat-box"><div className="fw-stat-n">LTE/5G</div><div className="fw-stat-l">Built-in Connectivity</div></div>
              <div className="fw-stat-box"><div className="fw-stat-n">ZERO</div><div className="fw-stat-l">External MCU Cost</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* TAG CLOUD (like your "Solve Complex Challenges" section) */}
      <div className="fw-tags-wrap">
        <div className="fw-tags-inner">
          <div>
            <h2>Firmware Solutions <span>built for your hardware.</span></h2>
            <p>From cellular modem integration to full OpenWRT router builds — every layer of the stack, handled end-to-end.</p>
            <div className="fw-tag-cloud">
              {serviceTags.map((t, i) => <div key={i} className="fw-m-tag">{t}</div>)}
            </div>
            <button className="btn-org">Explore All Firmware Services ›</button>
          </div>
          <div>
            <div className="fw-visual">
              <img src="/assets/home/open_cpu.webp" className="fw-visual-img" alt="OpenCPU OpenWRT" />
              <div className="fw-visual-footer">
                <span>Quectel · SIMCom · GL.iNet · MT7621 · IPQ807x</span>
                <a href="#">Learn More ›</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fw-body">

        {/* WHAT WE DO */}
        <div className="fw-section">
          <div className="fw-divider" style={{ marginBottom: "2rem" }} />
          <div className="fw-label">What We Do</div>
          <h2 className="fw-sec-title">Embedded intelligence, <span>firmware-first</span></h2>
          <div className="fw-what-grid">
            <div className="fw-terminal-card">
              <div className="fw-term-dots">
                <div className="fw-term-dot" style={{ background: "#ff5f56" }} />
                <div className="fw-term-dot" style={{ background: "#ffbd2e" }} />
                <div className="fw-term-dot" style={{ background: "#27c93f" }} />
              </div>
              <div className="fw-term-body">
                <div><span className="tcm"># OpenCPU SDK Init</span></div>
                <div><span className="tp">$ </span><span className="tc">./sdk-init.sh --target EC21 --net LTE</span></div>
                <div><span className="to">✔ Toolchain ready</span></div>
                <div><span className="to">✔ Kernel 5.4 patched</span></div>
                <div>&nbsp;</div>
                <div><span className="tcm"># OpenWRT Build</span></div>
                <div><span className="tp">$ </span><span className="tc">make menuconfig &amp;&amp; make -j8</span></div>
                <div><span className="to">✔ .bin image → 4.2 MB</span></div>
                <div><span className="to">✔ OTA package signed</span></div>
                <div>&nbsp;</div>
                <div><span className="tp">$ </span><span className="tc">flash.sh --device /dev/ttyUSB0</span></div>
                <div><span className="to">✔ Flashing complete. Rebooting…</span></div>
              </div>
              <div className="fw-chips">
                {["Quectel", "SIMCom", "MediaTek", "Qualcomm", "MT7621", "IPQ807x"].map((c, i) => (
                  <span key={i} className={`fw-chip${i < 2 ? " active" : ""}`}>{c}</span>
                ))}
              </div>
            </div>
            <div className="fw-points">
              {[
                { ico: "⚙️", t: "OpenCPU Application Development", d: "Write embedded C/C++ apps directly on cellular modules — no external MCU needed. SDK setup, AT command interfacing, and GPIO/UART control." },
                { ico: "📡", t: "OpenWRT Custom Builds", d: "Full Linux router firmware tailored for your hardware — custom packages, firewall rules, VPN configs, wireless drivers, and branded LuCI UI." },
                { ico: "🔄", t: "OTA Update Infrastructure", d: "Secure, signed over-the-air firmware pipelines — delta updates, rollback safety, and fleet management for deployed devices." },
                { ico: "🔒", t: "Security Hardening", d: "Secure boot chains, encrypted file systems, TLS pinning, and FOTA signing — protecting your firmware from root to cloud." },
              ].map((p, i) => (
                <div key={i} className="fw-point">
                  <div className="fw-p-icon">{p.ico}</div>
                  <div><div className="fw-p-title">{p.t}</div><div className="fw-p-desc">{p.d}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fw-divider" />

        {/* SERVICE CARDS */}
        <div className="fw-section">
          <div className="fw-label">Services</div>
          <h2 className="fw-sec-title">Everything firmware, <span>end-to-end</span></h2>
          <div className="fw-cards">
            {serviceCards.map((c, i) => (
              <div key={i} className="fw-card">
                <div className="fw-card-ico">{c.ico}</div>
                <div className="fw-card-t">{c.title}</div>
                <div className="fw-card-d">{c.desc}</div>
                <span className="fw-card-tag">{c.tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fw-divider" />

        {/* PROCESS */}
        <div className="fw-section">
          <div className="fw-label">Our Process</div>
          <h2 className="fw-sec-title">How we build <span>your firmware</span></h2>
          <div className="fw-process">
            {steps.map((s, i) => (
              <div key={i} className="fw-step">
                <div className="fw-step-num">{s.n}</div>
                <div style={{ paddingTop: "0.6rem" }}>
                  <div className="fw-step-t">{s.t}</div>
                  <div className="fw-step-d">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fw-divider" />

        {/* MODULE SUPPORT */}
        <div className="fw-section">
          <div className="fw-label">Module Coverage</div>
          <h2 className="fw-sec-title">Supported platforms <span>&amp; chipsets</span></h2>
          <div className="fw-modules">
            {modules.map((m, i) => (
              <div key={i} className="fw-mc">
                <div className="fw-mc-cat">{m.cat}</div>
                <div className="fw-mc-name">{m.name}</div>
                <div className="fw-mc-sub">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="fw-cta">
          <h2>Ready to build smarter firmware for your product?</h2>
          <button className="fw-cta-btn">Start Your Project ›</button>
        </div>

      </div>
        <Footer />
    </div>
  );
}