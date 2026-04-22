import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .ed-page { font-family: 'DM Sans', sans-serif; background: #ffffff; color: #111; overflow-x: hidden; }

  .cp-page, .pcb-page, .ed-page, .fw-page, .pd-page, .sr-page {
    padding-top: 50px; 
  }

  /* HERO - UPDATED FOR SIDE-BY-SIDE LAYOUT */
  .ed-hero { 
    position: relative; 
    width: 100%;              
    margin: 0 auto;           
    border-radius: 0;          
    overflow: hidden; 
    min-height: 83vh;        
    display: flex; 
    align-items: center; 
    background: #0a0a0a; 
  } 
  .ed-hero-bg { position: absolute; inset: 0; }
  .ed-hero-bg img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.3); }
  .ed-hero-overlay { position: absolute; inset: 0; background: linear-gradient(100deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 55%, transparent 100%); }
  
  /* Container updated to flex for two columns */
/* Change this line in .ed-hero-content */
.ed-hero-content { 
  position: relative; 
  z-index: 2; 
  padding: 4rem 2%; /* Reduced from 5% to 2% to move it left */
  max-width: 1400px; /* Optional: Increase max-width to allow it to spread more */
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Ensure it starts from the left */
  gap: 4rem;
}

  .ed-hero-text-block {
    flex: 1;
    max-width: 650px;
  }

  .ed-terminal-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(244,83,28,.15); border: 1px solid rgba(244,83,28,.35); color: #f4531c; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; padding: 7px 14px; border-radius: 4px; margin-bottom: 1.6rem; }
  .ed-cursor { width: 8px; height: 14px; background: #f4531c; display: inline-block; animation: edBlink 1.2s step-end infinite; }
  @keyframes edBlink { 0%,100%{opacity:1} 50%{opacity:0} }
  .ed-hero h1 { font-size: clamp(2.8rem, 5vw, 5.5rem); font-weight: 700; line-height: 1.0; color: #fff; letter-spacing: -2px; margin-bottom: 1.4rem; }
  .ed-hero h1 em { color: #f4531c; font-style: normal; }
  .ed-hero-sub { font-size: 1rem; color: rgba(255,255,255,0.65); line-height: 1.8; max-width: 480px; margin-bottom: 2.5rem; }
  .ed-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
  .ed-btn-fill { background: #f4531c; color: #fff; border: none; padding: 13px 26px; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 0.73rem; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: .3s; }
  .ed-btn-fill:hover { background: #ff6b35; transform: translateY(-2px); box-shadow: 0 8px 22px rgba(244,83,28,.35); }
  .ed-btn-ghost { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,.45); padding: 13px 26px; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 0.73rem; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; border-radius: 4px; transition: .3s; }
  .ed-btn-ghost:hover { border-color: #fff; }

  /* CODE WINDOW - UPDATED */
  .ed-code-window { 
    flex: 1;
    background: #0f1a0f; 
    border: 1px solid rgba(244,83,28,.25); 
    border-radius: 10px; 
    overflow: hidden; 
    max-width: 600px; 
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }
  .ed-code-toolbar { background: #0a120a; padding: 10px 14px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(255,255,255,.06); }
  .ed-dot { width: 12px; height: 12px; border-radius: 50%; }
  .ed-dot-r { background: #ef4444; } .ed-dot-y { background: #f59e0b; } .ed-dot-g { background: #22c55e; }
  .ed-code-file { margin-left: auto; font-family: 'JetBrains Mono', monospace; font-size: .68rem; color: #666; }
  .ed-code-body { padding: 1.4rem 1.6rem; font-family: 'JetBrains Mono', monospace; font-size: .8rem; line-height: 2; }
  .ed-ln { color: #2d4a2d; margin-right: 1.2rem; user-select: none; }
  .ed-kw { color: #7dd3fc; } .ed-fn { color: #a78bfa; } .ed-cm { color: #4a6a4a; } .ed-nm { color: #22c55e; } .ed-pu { color: #e2e8f0; }

  /* Responsive update to stack elements on mobile */

  @media(max-width:1100px) {
    .ed-hero { 
      min-height: 80vh; 
      display: flex;
      align-items: flex-start; /* Start content from the top area */
      padding-top: 80px; /* Space for the header */
    }

    .ed-hero-content { 
      flex-direction: column; 
      text-align: left; /* Changed from center to left */
      align-items: flex-start; /* Aligns everything to the left */
      padding: 2rem 7%; 
      gap: 1.2rem;
      max-width: 100%;
    }

    .ed-hero h1 { 
      font-size: 2.8rem; /* Bold, clear title size */
      line-height: 1.1;
      margin-bottom: 0.5rem;
      text-align: left;
    }

    .ed-hero-sub { 
      font-size: 0.95rem; /* Better readability */
      line-height: 1.6;
      color: rgba(255,255,255,0.7);
      margin: 0.5rem 0 2rem 0; /* Space above buttons */
      text-align: left;
      max-width: 100%; 
    }

    .ed-hero-actions { 
      width: 100%;
      flex-direction: column; /* Stacks buttons like the PCB example */
      gap: 10px;
      justify-content: flex-start;
    }

    .ed-btn-fill, .ed-btn-ghost { 
      width: 100%; /* Full width buttons for better mobile UX */
      padding: 15px; 
      text-align: center;
      font-size: 0.75rem;
    }

    .ed-terminal-badge { 
      font-size: 0.65rem; 
      padding: 6px 14px; 
      margin-bottom: 0.5rem;
      background: rgba(244,83,28,0.2);
    }

    .ed-code-window { display: none; } /* Kept hidden for clean mobile view */
  }

  /* MARQUEE */
  .ed-marquee { background: #111; padding: 11px 0; overflow: hidden; white-space: nowrap; }
  .ed-marquee-track { display: inline-flex; animation: edSlide 32s linear infinite; }
  .ed-mitem { font-size: .7rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #f4531c; padding: 0 2rem; }
  .ed-mdot { color: rgba(255,255,255,.4); padding: 0 .3rem; }
  @keyframes edSlide { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* SECTIONS */
  .ed-section { max-width: 1320px; margin: 0 auto; padding: 3.5rem 5%; }
  .ed-eyebrow { font-size: .67rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f4531c; margin-bottom: .75rem; display: flex; align-items: center; gap: 10px; }
  .ed-eyebrow::before { content: ''; width: 26px; height: 2px; background: #f4531c; }
  .ed-stitle { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; letter-spacing: -1px; line-height: 1.1; margin-bottom: 1.2rem; }
  .ed-stitle em { color: #f4531c; font-style: normal; }

  /* PLATFORM GRID */
  .ed-plat-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-top: 3.5rem; }
  .ed-plat { background: #f7f7f7; border: 1px solid #e8e8e8; border-radius: 12px; padding: 2.5rem; transition: .3s; position: relative; overflow: hidden; }
  .ed-plat::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: transparent; transition: .3s; }
  .ed-plat:hover { border-color: #f4531c; transform: translateY(-5px); box-shadow: 0 12px 36px rgba(244,83,28,.08); }
  .ed-plat:hover::before { background: #f4531c; }
  .ed-plat-icon { font-size: 2rem; margin-bottom: 1.2rem; display: block; }
  .ed-plat-name { font-size: 1.05rem; font-weight: 700; margin-bottom: .5rem; }
  .ed-plat-desc { font-size: .82rem; color: #666; line-height: 1.7; margin-bottom: 1rem; }
  .ed-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: .8rem; }
  .ed-chip { background: #fff0eb; border: 1px solid #fde0d6; color: #f4531c; font-size: .62rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 9px; border-radius: 3px; font-family: 'JetBrains Mono', monospace; }

  /* SERVICES TWO COL */
  .ed-dark-band { background: #111; padding: 5.5rem 0; }
  .ed-dark-inner { max-width: 1320px; margin: 0 auto; padding: 0 5%; }
  .ed-dark-eyebrow { font-size: .67rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f4531c; margin-bottom: .75rem; display: flex; align-items: center; gap: 10px; }
  .ed-dark-eyebrow::before { content: ''; width: 26px; height: 2px; background: #f4531c; }
  .ed-dark-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; letter-spacing: -1px; line-height: 1.1; margin-bottom: 1.2rem; color: #fff; }
  .ed-dark-title em { color: #f4531c; font-style: normal; }
  .ed-svc-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-top: 3rem; }
  .ed-svc-col-title { font-size: 1.3rem; font-weight: 700; color: #f4531c; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 12px; }
  .ed-svc-col-title::after { content: ''; flex: 1; height: 1px; background: #2a2a2a; }
  .ed-svc-item { padding: 1.1rem 0; border-bottom: 1px solid #1f1f1f; }
  .ed-svc-item:last-child { border-bottom: none; }
  .ed-svc-item-title { font-size: .88rem; font-weight: 700; color: #fff; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; }
  .ed-svc-item-title::before { content: '▸'; color: #f4531c; font-size: .7rem; }
  .ed-svc-item-desc { font-size: .78rem; color: #777; line-height: 1.6; padding-left: 1.1rem; }

  /* IMAGE + STATS */
  .ed-img-stats { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: center; margin-top: 4rem; }
  .ed-img-box { border-radius: 14px; overflow: hidden; aspect-ratio: 4/3; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,.1); }
  .ed-img-box img { width: 100%; height: 100%; object-fit: cover; }
  .ed-img-box-label { position: absolute; bottom: 1.4rem; left: 1.4rem; background: #f4531c; color: #fff; font-family: 'JetBrains Mono', monospace; font-size: .62rem; padding: 5px 11px; border-radius: 3px; }
  .ed-stat-blocks { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2.5rem; }
  .ed-stat-block { background: #f7f7f7; border: 1px solid #e8e8e8; border-radius: 10px; padding: 1.5rem; transition: .3s; }
  .ed-stat-block:hover { border-color: #f4531c; }
  .ed-stat-val { font-size: 2.2rem; font-weight: 700; color: #f4531c; line-height: 1; }
  .ed-stat-lbl { font-size: .73rem; color: #666; margin-top: 5px; line-height: 1.4; }

  /* TIMELINE */
  .ed-timeline { max-width: 860px; margin: 4rem auto 0; }
  .ed-tl-item { display: flex; gap: 2rem; padding-bottom: 3rem; position: relative; }
  .ed-tl-item:not(:last-child)::before { content: ''; position: absolute; left: 20px; top: 48px; bottom: 0; width: 1px; background: linear-gradient(to bottom, #f4531c, transparent); }
  .ed-tl-dot { width: 42px; height: 42px; border-radius: 50%; border: 2px solid #e8e8e8; background: #fff; display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: .73rem; font-weight: 700; color: #f4531c; flex-shrink: 0; box-shadow: 0 2px 10px rgba(0,0,0,.06); transition: .3s; }
  .ed-tl-item:hover .ed-tl-dot { background: #f4531c; color: #fff; border-color: #f4531c; }
  .ed-tl-title { font-size: 1rem; font-weight: 700; margin-bottom: 6px; }
  .ed-tl-text { font-size: .85rem; color: #666; line-height: 1.7; }

  /* CTA */
  .ed-cta { 
    width: 95%; 
    margin: 4rem auto 3rem; 
    background: #383737; 
    border-radius: 0.25rem; 
    padding: 4.5rem 5%; 
    text-align: center; 
  }  
  .ed-cta h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; color: #fff; letter-spacing: -1px; margin-bottom: 1rem; }
  .ed-cta h2 em { color: #f4531c; font-style: normal; }
  .ed-cta p { color: rgba(255,255,255,.45); font-size: .9rem; max-width: 480px; margin: 0 auto 2.5rem; line-height: 1.7; }
  .ed-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

  @media(max-width:960px) {
    .ed-hero { width: 100%; border-radius: 0; margin-top: 0; }
    .ed-plat-grid { grid-template-columns: 1fr 1fr; }
    .ed-svc-cols { grid-template-columns: 1fr; }
    .ed-img-stats { grid-template-columns: 1fr; }
  }
  @media(max-width:540px) {
    .ed-plat-grid { grid-template-columns: 1fr; }
    .ed-stat-blocks { grid-template-columns: 1fr 1fr; }
  }
`;

const marqueeItems = ["STM32","ESP32","ARM Cortex","FreeRTOS","MQTT","MODBUS","LoRaWAN","CANOpen", 
  "OpenWRT", "Edge AI", "OTA Updates", "Bare-Metal"];

const platforms = [
  { icon:"🎯", name:"Microcontrollers (MCU)", desc:"Expertise in 8-bit and 32-bit architectures including STM32, ESP32, AVR, MSP430, and PIC.", chips:["STM32", "ESP32", "ARM", "AVR"] },
  { icon:"🧠", name:"SoCs & SBCs", desc:"High-performance development on Raspberry Pi, NVIDIA Jetson, and BeagleBone for complex computing.", chips:["RPi 4/5", "Jetson", "BeagleBone"] },
  { icon:"📶", name:"Connectivity Stacks", desc:"Seamless integration of I2C, SPI, UART, RS-485, CAN, USB, and wireless BLE/GSM/LTE protocols.", chips:["RS-485", "LTE", "BLE", "CAN"] },
  { icon:"🌐", name:"OpenCPU / OpenWRT", desc:"Custom services on Linux-based OpenWRT and cellular modules like Neoway and Quectel.", chips:["N58", "N706B", "Quectel"] },
  { icon:"🤖", name:"Edge AI", desc:"Real-time data processing and ML inference at the edge for industrial and robotic use cases.", chips:["TensorFlow", "Edge Impulse"] },
  { icon:"🛡️", name:"Testing & QA", desc:"Rigorous debugging using Logic Analyzers, JTAG/SWD, and thermal/stress testing protocols.", chips:["JTAG", "Logic Pro", "Unit Test"] },
];

const svcCols = [
  {
    title:"Firmware",
    items:[
      { title:"Custom Firmware Development", desc:"Bare-metal, HAL/LL, and RTOS (FreeRTOS/Zephyr) development for mission-critical reliability." },
      { title:"Protocol Development", desc:"Custom UART/I2C protocols, MODBUS, MQTT, and secure TCP/IP/WebSocket communication." },
      { title:"Driver Integration", desc:"Low-level drivers for sensors, flash memory, LCDs, and industrial communication modules." },
      { title:"Power Management", desc:"Sleep mode state machines, dynamic voltage scaling, and sub-µA idle optimization" },
    ]
  },
  {
    title:"Systems",
    items:[
      { title:"Cellular & Gateway Design", desc:"OpenCPU development for IoT gateways and cellular-connected industrial hardware." },
      { title:"Real-Time Processing", desc:"Optimized scheduling and interrupt handling for high-speed industrial data acquisition." },
      { title:"Maintenance & OTA", desc:"Bootloader development and secure Over-the-Air (OTA) update integration for remote fleets." },
      { title:"Testing & CI/CD", desc:"Hardware-in-the-loop testing, unit testing with CppUTest, and automated regression pipelines" },
    ]
  }
];

const statBlocks = [
  { val:"500+", lbl:"Production Firmware Projects" },
  { val:"12", lbl:"RTOS Platforms Supported" },
  { val:"99.9%", lbl:"Uptime in Deployed IoT Nodes" },
  { val:"48H", lbl:"Rapid Prototype Turnaround" },
];

const timeline = [
  { n:"01", title: "Firmware Architecture", text: "Selecting the right MCU and RTOS strategy based on power and performance needs." },
  { n:"02", title: "Development & Driver Logic", text: "Coding in C/C++/MicroPython with layered abstraction for hardware and peripherals." },
  { n:"03", title: "Debugging & QA", text: "Logic analysis and JTAG debugging to ensure 100% stable communication and memory safety." },
  { n:"04", title: "Production Ready Export", text: "Generating flashable binaries (.hex/.bin), API documentation, and protocol sheets." },
  { n:"05", title: "Deployment Support", text: "Handover of source code, test reports, and optional OTA update/Dashboard integration." },
];

export default function EmbeddedDevelopment() {
  return (
    <div className="ed-page">
      <style>{styles}</style>
      <Header/>

      {/* HERO SECTION UPDATED */}
      <div className="ed-hero">
        <div className="ed-hero-bg">
          <img src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1400&q=80" alt="Embedded Systems" />
        </div>
        <div className="ed-hero-overlay" />
        
        <div className="ed-hero-content">
          {/* LEFT COLUMN: TEXT */}
          <div className="ed-hero-text-block">
            <div className="ed-terminal-badge">
              <span>$</span> embedded --init project <div className="ed-cursor" />
            </div>
            <h1>Embedded<br /><em>Development</em></h1>
            <p className="ed-hero-sub">From Firmware to Functionality – We Power the Core of Innovation with optimized, high-performance embedded solutions.</p>
            <div className="ed-hero-actions">
              <button className="ed-btn-fill">Start a Project &rsaquo;</button>
              <button className="ed-btn-ghost">See Our Stack</button>
            </div>
          </div>

          {/* RIGHT COLUMN: CODE WINDOW */}
          <div className="ed-code-window">
            <div className="ed-code-toolbar">
              <div className="ed-dot ed-dot-r" /><div className="ed-dot ed-dot-y" /><div className="ed-dot ed-dot-g" />
              <div className="ed-code-file">main.c — firmware_v2</div>
            </div>
            <div className="ed-code-body">
              <div><span className="ed-ln">1</span><span className="ed-cm">{"/* Sensor polling @ 1kHz on STM32H7 */"}</span></div>
              <div><span className="ed-ln">2</span><span className="ed-kw">void</span> <span className="ed-fn">HAL_TIM_PeriodElapsedCallback</span><span className="ed-pu">{"(TIM_HandleTypeDef *htim) {"}</span></div>
              <div><span className="ed-ln">3</span>&nbsp;&nbsp;<span className="ed-kw">if</span> <span className="ed-pu">{"(htim->Instance == "}</span><span className="ed-nm">TIM6</span><span className="ed-pu">{") {"}</span></div>
              <div><span className="ed-ln">4</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="ed-fn">sensor_read_dma</span><span className="ed-pu">{"(&sensor_data);"}</span></div>
              <div><span className="ed-ln">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="ed-fn">apply_kalman_filter</span><span className="ed-pu">{"(&state);"}</span></div>
              <div><span className="ed-ln">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="ed-fn">RTOS_notify</span><span className="ed-pu">{"("}</span><span className="ed-nm">TASK_PROCESS_DATA</span><span className="ed-pu">{");"}</span></div>
              <div><span className="ed-ln">7</span>&nbsp;&nbsp;<span className="ed-pu">{"}"}</span></div>
              <div><span className="ed-ln">8</span><span className="ed-pu">{"}"}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="ed-marquee">
        <div className="ed-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="ed-mitem">{item}</span>
              <span className="ed-mdot">●</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* PLATFORMS */}
      <div className="ed-section">
        <div className="ed-eyebrow">Supported Platforms</div>
        <div className="ed-stitle">What We <em>Build On</em></div>
        <div className="ed-plat-grid">
          {platforms.map((p, i) => (
            <div className="ed-plat" key={i}>
              <span className="ed-plat-icon">{p.icon}</span>
              <div className="ed-plat-name">{p.name}</div>
              <div className="ed-plat-desc">{p.desc}</div>
              <div className="ed-chips">
                {p.chips.map((c, j) => <span className="ed-chip" key={j}>{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div className="ed-dark-band">
        <div className="ed-dark-inner">
          <div className="ed-dark-eyebrow">Service Areas</div>
          <div className="ed-dark-title">Our <em>Expertise</em></div>
          <div className="ed-svc-cols">
            {svcCols.map((col, i) => (
              <div key={i}>
                <div className="ed-svc-col-title">{col.title}</div>
                {col.items.map((item, j) => (
                  <div className="ed-svc-item" key={j}>
                    <div className="ed-svc-item-title">{item.title}</div>
                    <div className="ed-svc-item-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE + STATS */}
      <div className="ed-section">
        <div className="ed-img-stats">
          <div className="ed-img-box">
            <div className="ed-img-box-label">// RTOS task profiling active</div>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80" alt="Embedded Board" />
          </div>
          <div>
            <div className="ed-eyebrow">Track Record</div>
            <div className="ed-stitle">Proven in <em>Field</em></div>
            <p style={{ color:"#666", lineHeight:"1.8", fontSize:".94rem" }}>Our firmware powers innovation across IoT & Smart Devices, Industrial Automation, EV Controllers/BMS, Smart Home Products, Healthcare, and EdTech Hardware.</p>
            <div className="ed-stat-blocks">
              {statBlocks.map((s, i) => (
                <div className="ed-stat-block" key={i}>
                  <div className="ed-stat-val">{s.val}</div>
                  <div className="ed-stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="ed-dark-band">
        <div className="ed-dark-inner">
          <div className="ed-dark-eyebrow">How We Work</div>
          <div className="ed-dark-title">Development <em>Lifecycle</em></div>
          <div className="ed-timeline">
            {timeline.map((t, i) => (
              <div className="ed-tl-item" key={i}>
                <div className="ed-tl-dot">{t.n}</div>
                <div>
                  <div className="ed-tl-title">{t.title}</div>
                  <div className="ed-tl-text">{t.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="ed-cta">
        <h2>Let's Build <em>Together</em></h2>
        <p>Share your hardware specs and project requirements — we'll scope a development plan within 48 hours.</p>
        <div className="ed-cta-btns">
          <button className="ed-btn-fill">Discuss Your Project &rsaquo;</button>
          <button className="ed-btn-ghost">View Past Work</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}