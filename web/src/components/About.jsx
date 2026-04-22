import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "./Footer";

/* ─── Premium Fonts ─── */
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

const AboutUsPage = () => {
  const colors = {
    orange: "#f47c20",
    orangeHover: "#d96612",
    black: "#0f0f0f",
    white: "#ffffff",
    lightBg: "#f8f9fa",
    textMain: "#171717",
    textMuted: "#5f5f5f",
    border: "rgba(0,0,0,0.08)",
  };

  const stats = [
    { number: "120+", label: "Projects Completed" },
    { number: "60+", label: "Global Clients" },
    { number: "5+", label: "Years of Innovation" },
    { number: "15+", label: "Patents & Research" },
  ];

  const leadership = [
    { name: "Surya", role: "Founder", img: "/assets/aboutus/surya.webp", bio: "Surya is the visionary driving MYACCESS towards 'Natural Technology.' He focuses on solving complex problems by reshaping technology to align with nature and human needs." },
    { name: "Naveen", role: "Co-Founder", img: "/assets/aboutus/naveen1.webp", imgStyle: { scale: "1.0", position: "center 20%" }, bio: "Naveen leads the technical strategy, ensuring that every MYACCESS innovation is built with precision, scalability, and excellence to meet industrial demands." },
  ];

  const advisors = [
    { name: "Dr. Shekar", role: "GPT Principal", img: "/assets/aboutus/a1.webp", bio: "Principal of Government Polytechnic Pendurthi. Expert in Mechanical Engineering." },
    { name: "Dr. B.T. Krishna", role: "Professor", img: "/assets/aboutus/a2.webp", bio: "Professor of ECE at UCEK, JNTUK. Expert in Nanoelectronics and Analog VLSI. Fellow of IEEE." },
    { name: "Md Khwaja Moinuddin Chishty", role: "Assistant Professor", img: "/assets/aboutus/a3.webp", bio: "Award-winning inventor and expert in AI and embedded systems at GITAM University." },
    { name: "Dr. Bhaskara Rao Jammu", role: "Associate Professor", img: "/assets/aboutus/a4.webp", bio: "Associate Professor at GVP College. Specializing in ASIC design and FPGA development." },
  ];

  const frontlineTeam = [
    { role: "Frontend & Embedded Dev", bio: "Builds responsive React interfaces and develops embedded solutions for smart devices.", img: "/assets/aboutus/jaideep.webp", imgStyle: { scale: "1.8) translateX(10%", position: "center -116%" } },
    { role: "Back-End Developer", bio: "Uses Django to build robust, scalable web apps with deep expertise in data-driven systems.", img: "/assets/aboutus/sai.webp" },
    { role: "Hardware Engineer", bio: "Validates performance and durability of products through comprehensive stress tests.", img: "/assets/aboutus/reshma1.webp", imgStyle: { scale: "1.0", position: "center 39%" } },
    { role: "Procurement Engineer", bio: "Crucial in sourcing and managing services that support our technological innovations.", img: "/assets/aboutus/chandana1.webp", imgStyle: { scale: "1.0", position: "center 32%" } },
    { role: "Electronics Engineer", bio: "Designs and implements circuitry and systems that power our innovative devices.", img: "/assets/aboutus/kalla.webp", imgStyle: { scale: "1.4", position: "center 106%" } },
    { role: "Embedded Developer", bio: "Specializes in embedded systems, focusing on reliable hardware integration.", img: "/assets/aboutus/anusha.webp", imgStyle: { scale: "1.0", position: "center 46%" } },
    { role: "EMS Technician", bio: "Handles electronic manufacturing, ensuring precise component integration.", img: "/assets/aboutus/uma1.webp", imgStyle: { scale: "1.3", position: "center 36%" } },
    { role: "Cloud Engineer", bio: "Builds and manages scalable, secure, and high-performance cloud infrastructure.", img: "/assets/aboutus/ali.webp", imgStyle: { scale: "1.0", position: "center 35%" } },
    { role: "Front-End Developer", bio: "Creates modern, responsive web interfaces focused on seamless user experience.", img: "/assets/aboutus/gopii.webp", imgStyle: { scale: "1.1", position: "center 40%" } },
  ];

  // ── NEW: Journey / Timeline Data ──
  const journey = [
    { year: "2019", title: "The Spark", desc: "MYACCESS was founded with a single belief — technology must coexist with nature. The first prototype for an access-control system was born in a small workshop." },
    { year: "2020", title: "First Patents Filed", desc: "Our R&D team filed the first batch of patents in embedded systems and IoT-based access solutions, laying the groundwork for a product-first culture." },
    { year: "2021", title: "Industry Recognition", desc: "MYACCESS won its first national innovation award, validating the team's unconventional approach to solving real-world problems with natural technology." },
    { year: "2022", title: "Scaling Up", desc: "Expanded the team across hardware, software, and cloud domains. Crossed 40+ clients and began serving industries like manufacturing, healthcare, and education." },
    { year: "2023", title: "Global Footprint", desc: "Reached 60+ global clients across 8 countries. Launched a cloud-first platform to remotely manage and monitor deployments at scale." },
    { year: "2024+", title: "The Next Chapter", desc: "Doubling down on AI-powered access solutions, sustainable hardware, and community-driven innovation. The mission continues — one breakthrough at a time." },
  ];

  // ── NEW: Core Values Data ──
  const coreValues = [
    { icon: "🌿", title: "Natural First", desc: "Every solution we build is evaluated for its environmental footprint. If technology harms nature, we redesign it — no exceptions." },
    { icon: "🔍", title: "Problem Obsessed", desc: "We don't just solve problems — we find problems hidden inside solutions. That extra layer of scrutiny is what makes our work last." },
    { icon: "🤝", title: "Human-Centered", desc: "Technology serves people. Our designs begin and end with the user's dignity, time, and quality of life at the center." },
    { icon: "⚙️", title: "Built to Last", desc: "We engineer for durability, not trends. Every component, every line of code, every decision is made with long-term reliability in mind." },
    { icon: "💡", title: "Crazy Ideas Welcome", desc: "Wild ideas are not filtered out in our culture — they are cultivated. Some of our best innovations came from questions that seemed absurd." },
    { icon: "🏆", title: "Excellence as Default", desc: "Good enough is never enough. We hold each other to the highest standards because the people we serve deserve nothing less." },
  ];

  // ── NEW: Differentiators Data ──
  const differentiators = [
    {
      title: "Natural Technology Philosophy",
      desc: "Unlike conventional tech companies, we evaluate every innovation through the lens of nature and sustainability. We ask not just 'can we build it?' but 'should we, and does it belong?'",
      highlight: "Our guiding filter for every product decision.",
    },
    {
      title: "Cross-Domain Team Under One Roof",
      desc: "Hardware engineers, cloud architects, embedded developers, and procurement specialists collaborate daily in the same space. This vertical integration means faster iteration and fewer gaps.",
      highlight: "From PCB design to cloud deployment — all in-house.",
    },
    {
      title: "Research-Backed Innovation",
      desc: "With 15+ patents and an advisory board of PhDs and IEEE fellows, our innovations are not just functional — they are academically validated and industry-tested.",
      highlight: "Science meets engineering meets real-world impact.",
    },
  ];

  // ── NEW: Technologies Data ──
  const techStack = [
    { category: "Embedded & Hardware", items: ["ESP32 / STM32", "FPGA / ASIC Design", "PCB Design & EMS", "IoT Protocols (MQTT, BLE, Zigbee)"] },
    { category: "Software & Web", items: ["React.js / Next.js", "Django / Python", "REST APIs & WebSockets", "Node.js / Express"] },
    { category: "Cloud & Infrastructure", items: ["AWS / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Scalable Microservices"] },
    { category: "AI & Intelligence", items: ["Edge AI Inference", "Computer Vision", "Predictive Analytics", "Natural Language Processing"] },
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: colors.white, color: colors.textMain, overflowX: "hidden" }}>
      <FontLoader />
      <Header />

      <style>{`
        .section-container { width: 90%; max-width: 1300px; margin: 0 auto; padding: 2.8rem 0; }
        .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 5rem; align-items: center; min-height: 80vh; }
        .advisor-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; text-align: center; }
        .identity-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .founder-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }

        /* Journey section grids */
        .journey-header { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-bottom: 4rem; }
        .awards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; margin-bottom: 4rem; }
        .milestone-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 4rem; }
        .timeline-cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .tech-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .diff-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }

        /* Timeline */
        .timeline { position: relative; padding-left: 2rem; }
        .timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: linear-gradient(180deg, ${colors.orange}, transparent); border-radius: 3px; }
        .timeline-item { position: relative; padding: 0 0 3rem 2.5rem; }
        .timeline-item::before { content: ''; position: absolute; left: -2.35rem; top: 0.4rem; width: 14px; height: 14px; border-radius: 50%; background: ${colors.orange}; border: 3px solid ${colors.white}; box-shadow: 0 0 0 3px ${colors.orange}; }
        .timeline-year { display: inline-block; background: ${colors.orange}; color: white; padding: 0.3rem 1rem; border-radius: 50px; font-size: 0.8rem; font-weight: 800; margin-bottom: 0.8rem; }
        .timeline-title { font-size: 1.3rem; font-weight: 800; margin-bottom: 0.6rem; color: ${colors.textMain}; }
        .timeline-desc { color: ${colors.textMuted}; line-height: 1.7; font-size: 0.95rem; }

        .btn-orange { background: ${colors.orange}; color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s; font-size: 1rem; }
        .btn-orange:hover { background: ${colors.black}; transform: translateY(-3px); }
        .btn-outline { background: transparent; color: ${colors.black}; border: 2px solid ${colors.border}; padding: 1.2rem 2.5rem; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s; }
        .btn-outline:hover { border-color: ${colors.orange}; color: ${colors.orange}; }

        .card-hover { transition: 0.4s; border: 1px solid ${colors.border}; background: #fff; height: 100%; border-radius: 24px; }
        .card-hover:hover { transform: translateY(-10px); border-color: ${colors.orange}; box-shadow: 0 20px 40px rgba(0,0,0,0.05); }

        .img-container { width: 100%; aspect-ratio: 1/1; border-radius: 18px; overflow: hidden; background: #f0f0f0; margin-bottom: 1.2rem; }
        .img-container img { width: 100%; height: 100%; object-fit: cover; }

        .orange-tag { display: inline-block; padding: 0.5rem 1.2rem; background: rgba(244,124,32,0.1); color: ${colors.orange}; border-radius: 50px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-bottom: 1.5rem; }

        .founder-card { display: flex; gap: 2rem; padding: 2.5rem; align-items: center; }

        /* Highlight badge inside differentiator card */
        .highlight-badge { display: inline-block; margin-top: 1rem; padding: 0.4rem 1rem; background: rgba(244,124,32,0.1); color: ${colors.orange}; border-radius: 50px; font-size: 0.78rem; font-weight: 700; }

        /* Tech list */
        .tech-list { list-style: none; padding: 0; margin: 0; }
        .tech-list li { padding: 0.55rem 0; border-bottom: 1px solid ${colors.border}; font-size: 0.9rem; color: ${colors.textMuted}; display: flex; align-items: center; gap: 0.5rem; }
        .tech-list li::before { content: '→'; color: ${colors.orange}; font-weight: 700; font-size: 0.85rem; }
        .tech-list li:last-child { border-bottom: none; }

        /* Responsive */
        @media (max-width: 1100px) {
          .advisor-grid { grid-template-columns: repeat(2, 1fr); }
          .tech-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-grid { gap: 3rem; }
          .milestone-grid { grid-template-columns: repeat(2, 1fr); }
          .timeline-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; }
          .hero-grid .img-wrapper { max-width: 500px; margin: 0 auto; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .founder-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: repeat(2, 1fr); }
          .diff-grid { grid-template-columns: 1fr; }
          .journey-header { grid-template-columns: 1fr !important; gap: 2rem; }
          .awards-grid { grid-template-columns: repeat(3, 1fr); }
          .milestone-grid { grid-template-columns: repeat(2, 1fr); }
          .timeline-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .identity-grid, .team-grid, .values-grid, .tech-grid { grid-template-columns: 1fr; }
          .hero-btns { flex-direction: column; }
          .advisor-grid { grid-template-columns: repeat(2, 1fr); }
          .founder-card { flex-direction: column; text-align: center; padding: 1.5rem; }
          .journey-header { grid-template-columns: 1fr !important; gap: 1.5rem; }
          .awards-grid { grid-template-columns: repeat(3, 1fr); }
          .milestone-grid { grid-template-columns: 1fr 1fr !important; gap: 0.8rem; }
          .timeline-cards-grid { grid-template-columns: 1fr; }
          .diff-grid { grid-template-columns: 1fr; }
          .section-container { padding: 3.5rem 0; }
          h1 { font-size: 2.8rem !important; }
          .milestone-grid > div { padding: 0.9rem !important; }
          .milestone-grid > div span:first-child { font-size: 1.3rem !important; }
          .milestone-grid > div > div > div:first-child { font-size: 0.82rem !important; }
          .milestone-grid > div > div > div:last-child { font-size: 0.7rem !important; }
        }
        @media (max-width: 480px) {
          .awards-grid { grid-template-columns: 1fr !important; }
          .milestone-grid { grid-template-columns: 1fr 1fr !important; gap: 0.6rem; }
          .advisor-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .values-grid { grid-template-columns: 1fr; }
          .journey-header { grid-template-columns: 1fr !important; }
          .timeline-cards-grid { grid-template-columns: 1fr !important; }
          .milestone-grid > div { padding: 0.8rem !important; gap: 0.5rem !important; }
          .milestone-grid > div span:first-child { font-size: 1.2rem !important; }
          .milestone-grid > div > div > div:first-child { font-size: 0.78rem !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .milestone-grid > div > div > div:last-child { font-size: 0.65rem !important; }
          h2 { font-size: 1.8rem !important; }
          h1 { font-size: 2rem !important; }
          .section-container { padding: 3rem 0; }
          .hero-btns button { width: 100%; }
        }
      `}</style>

      {/* ── HERO ── (unchanged) */}
      <section style={{ background: `linear-gradient(135deg, ${colors.white} 0%, #fff5ee 100%)`, overflow: "hidden", paddingTop: "80px" }}>
        <div className="section-container hero-grid">
          <div>
            <div className="orange-tag">About MyAccess</div>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900, lineHeight: 1.1, color: colors.black, marginBottom: "2rem" }}>
              Builds <span style={{ color: colors.orange }}>Natural Technology</span> for Meaningful Solutions
            </h1>
            <p style={{ fontSize: "1.15rem", color: colors.textMuted, lineHeight: 1.8, marginBottom: "2.5rem" }}>
              We transform the perspective of technology. Our works justify that technology doesn't always kill nature. We find problems even in solutions and reshape technology to its good side.
            </p>
            <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
              <button className="btn-orange">Explore Impact</button>
              <button className="btn-outline">View Awards</button>
            </div>
          </div>
          <div className="img-wrapper">
            <div style={{ width: "100%", height: "auto", aspectRatio: "1/1.1", background: "#eee", borderRadius: "40px", overflow: "hidden", border: `8px solid ${colors.white}`, boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}>
              <img src="/assets/aboutus/team1.webp" alt="MyAccess Team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── (unchanged) */}
      <section style={{ background: colors.black }}>
        <div className="section-container stats-grid" style={{ padding: "4rem 0" }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: "3.5rem", fontWeight: 800, color: colors.orange }}>{s.number}</div>
              <div style={{ color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.85rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── IDENTITY ── (unchanged) */}
      <section style={{ backgroundColor: colors.lightBg }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="orange-tag">Identity</div>
            <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>What We Stand For</h2>
          </div>
          <div className="identity-grid">
            <div className="card-hover" style={{ padding: "3rem" }}>
              <h3 style={{ marginBottom: "1.5rem", color: colors.orange }}>Who We Are</h3>
              <p style={{ lineHeight: 1.8, color: colors.textMuted }}>We consider places, machines, thoughts, and things as a team because they help in completing us. We are a community making technology a means to keep alive togetherness.</p>
            </div>
            <div className="card-hover" style={{ padding: "3rem", background: colors.black, color: colors.white }}>
              <h3 style={{ marginBottom: "1.5rem", color: colors.orange }}>Our Mission</h3>
              <p style={{ lineHeight: 1.8, opacity: 0.8 }}>Give each individual the quality of life and time they deserve for a lifetime by solving problems through natural technology.</p>
            </div>
            <div className="card-hover" style={{ padding: "3rem" }}>
              <h3 style={{ marginBottom: "1.5rem", color: colors.orange }}>Our Vision</h3>
              <p style={{ lineHeight: 1.8, color: colors.textMuted }}>To be the world's best company shaping technology to its silver lining, ensuring a sustainable and connected future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEW ① — OUR STORY / JOURNEY
      ══════════════════════════════════════════ */}
      <section style={{ background: colors.white }}>
        <div className="section-container">

          {/* — Header row — */}
          <div className="journey-header">
            <div>
              <div className="orange-tag">Our Journey</div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.2rem" }}>
                Five Years of Turning <span style={{ color: colors.orange }}>Ideas Into Impact</span>
              </h2>
              <p style={{ color: colors.textMuted, lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1rem" }}>
                MYACCESS didn't start with funding or a boardroom. It started with a restless question: <em>"Why does technology so often work against people and the planet?"</em>
              </p>
              <p style={{ color: colors.textMuted, lineHeight: 1.8, fontSize: "1.05rem" }}>
                From a first prototype built in a small workshop to serving clients across 8 countries, each chapter of our story is driven by the same obsession — build technology that belongs in the world.
              </p>
            </div>

            {/* Founder quote card */}
            <div style={{ background: colors.black, borderRadius: "24px", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-10px", left: "1.5rem", fontSize: "7rem", color: colors.orange, opacity: 0.15, fontFamily: "Georgia, serif", lineHeight: 1 }}>"</div>
              <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", lineHeight: 1.9, fontStyle: "italic", margin: "0 0 1.5rem", position: "relative", zIndex: 1 }}>
                "We don't just build technology — we question it, reshape it, and make sure it earns its place in the world."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", overflow: "hidden", background: "#333", flexShrink: 0 }}>
                  <img src="/assets/aboutus/surya.webp" alt="Surya" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ color: colors.white, fontWeight: 800 }}>Surya</div>
                  <div style={{ color: colors.orange, fontSize: "0.82rem", fontWeight: 600 }}>Founder, MYACCESS</div>
                </div>
              </div>
            </div>
          </div>

          {/* — Awards row — */}
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "1.5rem" }}>🏆</span>
              <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>Recognized for Innovation</span>
              <span style={{ color: colors.textMuted, fontSize: "0.9rem" }}>— National &amp; International Awards</span>
            </div>
            <div className="awards-grid">
              {[
                { src: "/assets/aboutus/award1.webp", label: "Innovation Award", year: "2021" },
                { src: "/assets/aboutus/award2.webp", label: "Best Startup", year: "2022" },
                { src: "/assets/aboutus/award3.webp", label: "Tech Excellence", year: "2023" },
              ].map((a, i) => (
                <div key={i} style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.1)", position: "relative" }}>
                  <img src={a.src} alt={a.label} style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.82))", padding: "1.5rem 1.2rem 1rem" }}>
                    <div style={{ color: colors.orange, fontSize: "0.75rem", fontWeight: 800, marginBottom: "0.2rem" }}>{a.year}</div>
                    <div style={{ color: "#fff", fontSize: "1rem", fontWeight: 700 }}>{a.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* — Milestone stats — */}
          <div className="milestone-grid">
            {[
              { icon: "🌍", label: "8 Countries", sub: "Global Client Reach" },
              { icon: "📜", label: "15+ Patents", sub: "Filed & Approved" },
              { icon: "🚀", label: "Since 2019", sub: "5 Years of Building" },
              { icon: "👥", label: "120+ Projects", sub: "Successfully Delivered" },
            ].map((m, i) => (
              <div key={i} style={{ background: colors.lightBg, borderRadius: "16px", padding: "1.4rem", border: `1px solid ${colors.border}`, display: "flex", alignItems: "center", gap: "0.8rem", minWidth: 0 }}>
                <span style={{ fontSize: "1.8rem", flexShrink: 0 }}>{m.icon}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: "1rem", color: colors.textMain, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.label}</div>
                  <div style={{ fontSize: "0.78rem", color: colors.textMuted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* — Timeline cards — */}
          <div className="timeline-cards-grid">
            {journey.map((item, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? colors.lightBg : colors.white, border: `1px solid ${colors.border}`, borderRadius: "20px", padding: "2rem", transition: "0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = colors.orange; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.07)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "inline-block", background: colors.orange, color: "#fff", padding: "0.3rem 1rem", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 800, marginBottom: "1rem" }}>{item.year}</div>
                <div style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.7rem", color: colors.textMain }}>{item.title}</div>
                <p style={{ color: colors.textMuted, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* — Industries served — */}
          <div style={{ marginTop: "3rem", background: colors.lightBg, borderRadius: "20px", padding: "2rem", border: `1px solid ${colors.border}` }}>
            <div style={{ fontWeight: 800, fontSize: "0.85rem", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "1.2rem" }}>Industries We Serve</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {["Manufacturing", "Healthcare", "Education", "Agriculture", "Logistics", "Smart Buildings", "Retail", "Defence"].map((tag, i) => (
                <span key={i} style={{ padding: "0.45rem 1.1rem", borderRadius: "50px", background: colors.white, border: `1px solid ${colors.border}`, fontSize: "0.85rem", fontWeight: 600, color: colors.textMain }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEW ② — CORE VALUES
      ══════════════════════════════════════════ */}
      <section style={{ background: colors.lightBg }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="orange-tag">Core Values</div>
            <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>The Principles We Build By</h2>
            <p style={{ color: colors.textMuted, maxWidth: "600px", margin: "1rem auto 0", lineHeight: 1.7 }}>
              These aren't posters on a wall. They are filters through which every product decision, hire, and partnership is made.
            </p>
          </div>
          <div className="values-grid">
            {coreValues.map((v, i) => (
              <div key={i} className="card-hover" style={{ padding: "2.5rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1.2rem" }}>{v.icon}</div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.8rem" }}>{v.title}</h4>
                <p style={{ color: colors.textMuted, lineHeight: 1.7, fontSize: "0.95rem" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── (unchanged) */}
      <section>
        <div className="section-container">
          <div style={{ marginBottom: "4rem" }}>
            <div className="orange-tag">Founders</div>
            <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>Visionary Leadership</h2>
          </div>
          <div className="founder-grid">
            {leadership.map((l, i) => (
              <div key={i} className="card-hover founder-card">
                <div style={{ width: "180px", height: "180px", borderRadius: "20px", overflow: "hidden", flexShrink: 0, background: "#f0f0f0" }}>
                  <img
                    src={l.img}
                    alt={l.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: `scale(${l.imgStyle?.scale || "1"})`,
                      objectPosition: l.imgStyle?.position || "center",
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.6rem", margin: "0 0 0.5rem" }}>{l.name}</h3>
                  <div style={{ color: colors.orange, fontWeight: 700, marginBottom: "1rem" }}>{l.role}</div>
                  <p style={{ color: colors.textMuted, fontSize: "0.95rem", lineHeight: 1.6 }}>{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVISORY COMMITTEE ── (unchanged) */}
      <section style={{ background: colors.lightBg }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="orange-tag">Advisory Committee</div>
            <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>Expert Guidance</h2>
          </div>
          <div className="advisor-grid">
            {advisors.map((a, i) => (
              <div key={i} className="card-hover" style={{ padding: "1.5rem" }}>
                <div className="img-container">
                  <img src={a.img} alt={a.name} />
                </div>
                <h4 style={{ fontSize: "1.15rem", marginBottom: "0.4rem" }}>{a.name}</h4>
                <div style={{ color: colors.orange, fontSize: "0.8rem", fontWeight: 800, marginBottom: "0.8rem" }}>{a.role}</div>
                <p style={{ fontSize: "0.85rem", color: colors.textMuted, lineHeight: 1.5 }}>{a.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEW ③ — WHAT MAKES US DIFFERENT
      ══════════════════════════════════════════ */}
      <section style={{ background: colors.white }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="orange-tag">Differentiators</div>
            <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>What Makes Us Different</h2>
            <p style={{ color: colors.textMuted, maxWidth: "600px", margin: "1rem auto 0", lineHeight: 1.7 }}>
              Many companies build technology. Few ask whether that technology truly belongs. Here is what sets MYACCESS apart.
            </p>
          </div>
          <div className="diff-grid">
            {differentiators.map((d, i) => (
              <div key={i} className="card-hover" style={{ padding: "2.5rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `rgba(244,124,32,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "1.4rem" }}>{["🌿", "🔧", "🎓"][i]}</span>
                </div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem" }}>{d.title}</h4>
                <p style={{ color: colors.textMuted, lineHeight: 1.7, fontSize: "0.95rem" }}>{d.desc}</p>
                <div className="highlight-badge">{d.highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEW ④ — TECHNOLOGIES WE USE
      ══════════════════════════════════════════ */}
      <section style={{ background: colors.black }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="orange-tag" style={{ background: "rgba(255,255,255,0.1)", color: "white" }}>Tech Stack</div>
            <h2 style={{ fontSize: "3rem", fontWeight: 800, color: colors.white }}>
              Built With the <span style={{ color: colors.orange }}>Best Tools</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "1rem auto 0", lineHeight: 1.7 }}>
              From bare-metal firmware to cloud-scale infrastructure, our stack covers every layer of the technology spectrum.
            </p>
          </div>
          <div className="tech-grid">
            {techStack.map((t, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "2rem", transition: "0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = colors.orange; e.currentTarget.style.background = "rgba(244,124,32,0.07)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
              >
                <h4 style={{ color: colors.orange, fontWeight: 800, marginBottom: "1.2rem", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "1px" }}>{t.category}</h4>
                <ul className="tech-list">
                  {t.items.map((item, j) => (
                    <li key={j} style={{ color: "rgba(255,255,255,0.75)", borderBottomColor: "rgba(255,255,255,0.08)" }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRONTLINE TEAM ── (unchanged) */}
      <section>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="orange-tag">The Frontline</div>
            <h2 style={{ fontSize: "3rem", fontWeight: 800 }}>People Powering Innovation</h2>
          </div>
          <div className="team-grid">
            {frontlineTeam.map((m, i) => (
              <div key={i} className="card-hover" style={{ padding: "2rem", textAlign: "center" }}>
                <div className="img-container" style={{ borderRadius: "50%", width: "100px", height: "100px", margin: "0 auto 1.5rem" }}>
                  <img
                    src={m.img}
                    alt={m.role}
                    style={{
                      transform: `scale(${m.imgStyle?.scale || "1"})`,
                      objectPosition: m.imgStyle?.position || "center",
                    }}
                  />
                </div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{m.role}</h4>
                <p style={{ fontSize: "0.88rem", color: colors.textMuted, lineHeight: 1.6 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── (unchanged) */}
      <section style={{ padding: "8rem 0", background: colors.black, textAlign: "center", position: "relative" }}>
        <div className="section-container" style={{ padding: 0 }}>
          <div className="orange-tag" style={{ background: "rgba(255,255,255,0.1)", color: "white" }}>Our Commitment</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: colors.white, marginBottom: "2rem" }}>
            Thinking <span style={{ color: colors.orange }}>Crazy</span>, Building Meaningfully.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.2rem", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
            At MYACCESS, we champion unconventional thinking. We believe unique ideas drive progress. We prioritize solving problems with excellence and integrity.
          </p>
          <button className="btn-orange" style={{ padding: "1.5rem 4rem" }}>Join Our Community</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;