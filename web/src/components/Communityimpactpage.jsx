import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "./Footer";

const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

const CommunityImpactPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const colors = {
    orange: "#f47c20",
    orangeLight: "rgba(244,124,32,0.1)",
    orangeMid: "rgba(244,124,32,0.2)",
    black: "#0f0f0f",
    white: "#ffffff",
    offWhite: "#faf9f7",
    lightBg: "#f8f9fa",
    textMain: "#171717",
    textMuted: "#5f5f5f",
    border: "rgba(0,0,0,0.08)",
    green: "#2d7a4f",
    greenLight: "rgba(45,122,79,0.1)",
  };

  const impactNumbers = [
    { number: "50,000+", label: "Lives Impacted", icon: "❤️" },
    { number: "8", label: "Countries Reached", icon: "🌍" },
    { number: "30%", label: "Avg Energy Saved", icon: "⚡" },
    { number: "₹2Cr+", label: "Community Grants", icon: "💰" },
    { number: "200+", label: "Community Members", icon: "👥" },
    { number: "12", label: "Active Programs", icon: "🚀" },
  ];

  const stories = [
    {
      tag: "Healthcare",
      emoji: "🏥",
      title: "Zero Equipment Loss at Regional Hospital",
      location: "Visakhapatnam, AP",
      impact: "₹18L saved annually",
      desc: "When a 200-bed regional hospital was losing critical medical equipment to misplacement, MYACCESS deployed a BLE-based asset tracking system. Within 3 months, equipment retrieval time dropped by 85% and annual losses went to zero.",
      img: "/assets/impact/hospital.webp",
      color: "#edf8f0",
    },
    {
      tag: "Agriculture",
      emoji: "🌾",
      title: "Smart Irrigation Saves 40% Water in Godavari Delta",
      location: "West Godavari, AP",
      impact: "400 acres transformed",
      desc: "Working with a farmer collective, MYACCESS installed soil moisture sensors and automated irrigation controllers. The result: 40% water reduction, 22% yield increase, and a replicable model now spreading to 6 more districts.",
      img: "/assets/impact/farm.webp",
      color: "#fdf3e8",
    },
    {
      tag: "Education",
      emoji: "🎓",
      title: "Smart Campus: 3,000 Students Get Safer Schools",
      location: "Hyderabad, TS",
      impact: "3 schools transformed",
      desc: "Three government schools received MYACCESS smart access and attendance systems at zero cost — part of our community grant program. Attendance accuracy improved to 99.8% and parent-school communication became seamless.",
      img: "/assets/impact/school.webp",
      color: "#f0f4fd",
    },
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Plant Manager, AutoTech Vizag", text: "MYACCESS didn't just solve our access problem — they reimagined how we think about plant security. The team's depth of knowledge is unmatched.", avatar: "/assets/community/t1.webp", rating: 5 },
    { name: "Dr. Priya Nair", role: "Medical Director, Coastal Hospital", text: "In healthcare, every second matters. MYACCESS's tracking system gave us back time we were wasting chasing equipment. Truly life-changing.", avatar: "/assets/community/t2.webp", rating: 5 },
    { name: "Venkata Rao", role: "Lead Engineer, GreenField Farms", text: "We were skeptical about 'smart farming' until MYACCESS showed us real numbers. The water savings alone paid back the investment in 4 months.", avatar: "/assets/community/t3.webp", rating: 5 },
    { name: "Ananya Sharma", role: "Principal, New Delhi Smart School", text: "What sets MYACCESS apart is their commitment to education. They donated systems to our school and spent a week training our staff. No other company does this.", avatar: "/assets/community/t4.webp", rating: 5 },
  ];

  const programs = [
    { icon: "🎓", title: "Community Grant Program", desc: "We allocate 5% of annual revenue to provide MYACCESS technology free of cost to schools, rural clinics, and non-profits in underserved areas.", stat: "₹2Cr+ Granted", color: "#fdf3e8" },
    { icon: "🌱", title: "Green Tech Initiative", desc: "Every hardware product we ship offsets its carbon footprint through a certified reforestation program. Zero-waste packaging across all product lines by 2025.", stat: "10K Trees Planted", color: "#edf8f0" },
    { icon: "👩‍💻", title: "Women in Tech Mentorship", desc: "A 6-month mentorship program pairing MYACCESS engineers with women students in tier-2 cities pursuing engineering careers.", stat: "120 Mentees", color: "#f0f4fd" },
    { icon: "🔬", title: "Open Research Program", desc: "We publish our research findings and open-source select tools so the wider engineering community can build on our work — not just benefit from it.", stat: "15+ Papers Published", color: "#fdeaea" },
    { icon: "🏘️", title: "Rural Connect Program", desc: "Partnerships with Gram Panchayats to bring smart water monitoring and energy management to rural communities, prioritizing areas with no existing infrastructure.", stat: "18 Villages Covered", color: "#edf8f0" },
    { icon: "🤝", title: "Industry Partnerships", desc: "Collaborating with IITs, polytechnics, and industrial clusters to co-develop solutions, offer internships, and build a pipeline of hardware talent.", stat: "12 Partner Institutions", color: "#fdf3e8" },
  ];

  const events = [
    { type: "Upcoming", date: "May 18, 2024", title: "MYACCESS Tech Day — Hyderabad", desc: "Open-house event featuring live product demos, panel discussions, and hands-on workshops for engineers and entrepreneurs.", tag: "Free Entry" },
    { type: "Upcoming", date: "Jun 5, 2024", title: "World Environment Day Hackathon", desc: "24-hour hackathon focused on building technology solutions for environmental challenges. ₹3L in prizes. Open to all engineers.", tag: "Register Now" },
    { type: "Past", date: "Mar 22, 2024", title: "Water Day Panel: Tech for Conservation", desc: "MYACCESS hosted a panel of engineers, farmers, and policy makers to discuss smart water management technology.", tag: "Watch Recording" },
    { type: "Past", date: "Feb 10, 2024", title: "Women in Engineering Summit", desc: "100+ women engineers gathered for a day of talks, networking, and mentorship sessions with MYACCESS's technical leadership.", tag: "View Highlights" },
  ];

  const partners = [
    { name: "IIT Kharagpur", type: "Research", icon: "🎓" },
    { name: "GITAM University", type: "Academia", icon: "🏫" },
    { name: "JNTUK", type: "Academia", icon: "🏫" },
    { name: "NASSCOM", type: "Industry", icon: "🏢" },
    { name: "Startup India", type: "Government", icon: "🇮🇳" },
    { name: "CII Vizag", type: "Industry", icon: "🏭" },
    { name: "FICCI", type: "Industry", icon: "🤝" },
    { name: "MSME Ministry", type: "Government", icon: "🇮🇳" },
  ];

  const eventTabs = ["All", "Upcoming", "Past"];
  const filteredEvents = activeTab === "All" ? events : events.filter(e => e.type === activeTab);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: colors.white, color: colors.textMain, overflowX: "hidden" }}>
      <FontLoader />
      <Header />

      <style>{`
        .ci-container { width: 90%; max-width: 1300px; margin: 0 auto; padding: 6rem 0; }

        /* Hero */
        .ci-hero { padding-top: 80px; background: ${colors.black}; position: relative; overflow: hidden; }
        .ci-hero-orb1 { position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(244,124,32,0.15) 0%, transparent 70%); pointer-events: none; }
        .ci-hero-orb2 { position: absolute; bottom: -150px; left: -150px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(244,124,32,0.08) 0%, transparent 70%); pointer-events: none; }
        .ci-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }

        /* Impact numbers */
        .impact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

        /* Stories */
        .stories-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }

        /* Programs */
        .programs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }

        /* Events */
        .events-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }

        /* Testimonials */
        .testi-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.8rem; }

        /* Partners */
        .partners-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }

        .orange-tag { display: inline-block; padding: 0.5rem 1.2rem; background: ${colors.orangeLight}; color: ${colors.orange}; border-radius: 50px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-bottom: 1.2rem; letter-spacing: 0.5px; }
        .orange-tag-light { display: inline-block; padding: 0.5rem 1.2rem; background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.9); border-radius: 50px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-bottom: 1.2rem; }

        .btn-orange { background: ${colors.orange}; color: white; border: none; padding: 1rem 2.2rem; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s; font-size: 0.95rem; font-family: inherit; }
        .btn-orange:hover { background: #d96612; transform: translateY(-2px); }

        .card-base { border-radius: 22px; border: 1.5px solid ${colors.border}; background: ${colors.white}; transition: 0.35s; }
        .card-base:hover { transform: translateY(-8px); border-color: ${colors.orange}; box-shadow: 0 20px 50px rgba(244,124,32,0.09); }

        .tab-btn { padding: 0.6rem 1.4rem; border-radius: 50px; border: 1.5px solid ${colors.border}; background: transparent; font-size: 0.88rem; font-weight: 600; cursor: pointer; transition: 0.25s; font-family: inherit; color: ${colors.textMain}; }
        .tab-btn:hover { border-color: ${colors.orange}; color: ${colors.orange}; }
        .tab-btn.active { background: ${colors.orange}; color: white; border-color: ${colors.orange}; }

        .star { color: ${colors.orange}; font-size: 0.9rem; }

        /* Join CTA wave */
        .join-section { background: linear-gradient(135deg, ${colors.orange} 0%, #d96612 100%); position: relative; overflow: hidden; padding: 7rem 0; text-align: center; }
        .join-section::before { content: ''; position: absolute; top: -60px; left: -60px; width: 300px; height: 300px; border-radius: 50%; background: rgba(255,255,255,0.06); }
        .join-section::after { content: ''; position: absolute; bottom: -80px; right: -80px; width: 400px; height: 400px; border-radius: 50%; background: rgba(255,255,255,0.05); }

        /* Responsive */
        @media (max-width: 1100px) {
          .programs-grid { grid-template-columns: repeat(2, 1fr); }
          .partners-grid { grid-template-columns: repeat(3, 1fr); }
          .impact-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 1024px) {
          .ci-hero-grid { grid-template-columns: 1fr; gap: 3rem; }
          .stories-grid { grid-template-columns: 1fr; }
          .testi-grid { grid-template-columns: 1fr; }
          .events-grid { grid-template-columns: 1fr; }
          .impact-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .ci-container { padding: 3.5rem 0; }
          .programs-grid { grid-template-columns: 1fr; }
          .partners-grid { grid-template-columns: repeat(2, 1fr); }
          .impact-grid { grid-template-columns: repeat(2, 1fr); }
          h1 { font-size: 2.6rem !important; }
        }
        @media (max-width: 480px) {
          .impact-grid { grid-template-columns: repeat(2, 1fr); }
          .partners-grid { grid-template-columns: repeat(2, 1fr); }
          h2 { font-size: 1.8rem !important; }
          h1 { font-size: 2rem !important; }
          .ci-container { padding: 3rem 0; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ci-hero">
        <div className="ci-hero-orb1" />
        <div className="ci-hero-orb2" />
        <div className="ci-container">
          <div className="ci-hero-grid">
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="orange-tag-light">Community & Impact</div>
              <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.4rem, 5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.1, color: colors.white, marginBottom: "1.5rem" }}>
                Technology That <span style={{ color: colors.orange }}>Gives Back.</span>
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: "2.5rem", maxWidth: "500px" }}>
                At MYACCESS, building great technology is only half the job. The other half is making sure it reaches people who need it most — and leaves the world better than we found it.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className="btn-orange">Join Our Community</button>
                <button style={{ background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.2)", padding: "1rem 2.2rem", borderRadius: "12px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: "0.95rem", color: colors.white, transition: "0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}>
                  See Our Impact ↓
                </button>
              </div>
            </div>

            {/* Right: Impact snapshot cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", position: "relative", zIndex: 1 }}>
              {[
                { icon: "❤️", val: "50K+", label: "Lives Impacted", bg: "rgba(244,124,32,0.15)" },
                { icon: "🌍", val: "8", label: "Countries", bg: "rgba(255,255,255,0.06)" },
                { icon: "🌱", val: "10K", label: "Trees Planted", bg: "rgba(255,255,255,0.06)" },
                { icon: "💡", val: "12", label: "Active Programs", bg: "rgba(244,124,32,0.15)" },
              ].map((c, i) => (
                <div key={i} style={{ background: c.bg, borderRadius: "20px", padding: "1.8rem", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>{c.icon}</div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: colors.white }}>{c.val}</div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", marginTop: "0.2rem" }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ── */}
      <section style={{ background: colors.offWhite, borderBottom: `1px solid ${colors.border}` }}>
        <div className="ci-container" style={{ padding: "4rem 0" }}>
          <div className="impact-grid">
            {impactNumbers.map((n, i) => (
              <div key={i} style={{ textAlign: "center", padding: "2rem 1rem" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>{n.icon}</div>
                <div style={{ fontSize: "2.8rem", fontWeight: 800, color: colors.orange, lineHeight: 1 }}>{n.number}</div>
                <div style={{ color: colors.textMuted, fontSize: "0.88rem", textTransform: "uppercase", letterSpacing: "1.5px", marginTop: "0.4rem" }}>{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT STORIES ── */}
      <section style={{ background: colors.white }}>
        <div className="ci-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="orange-tag">Real Stories</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, marginBottom: "1rem" }}>Impact You Can Measure</h2>
            <p style={{ color: colors.textMuted, maxWidth: "560px", margin: "0 auto", lineHeight: 1.8 }}>
              These aren't projections. These are real outcomes from real deployments — documented, verified, and shared so others can replicate them.
            </p>
          </div>
          <div className="stories-grid">
            {stories.map((s, i) => (
              <div key={i} style={{ borderRadius: "24px", overflow: "hidden", border: `1.5px solid ${colors.border}`, transition: "0.35s", background: colors.white }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = colors.orange; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = colors.border; }}>
                <div style={{ background: s.color, padding: "2.5rem 2rem 1.5rem", position: "relative" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{s.emoji}</div>
                  <span style={{ padding: "0.3rem 0.9rem", background: "rgba(255,255,255,0.7)", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 800, color: colors.orange }}>{s.tag}</span>
                </div>
                <div style={{ padding: "1.8rem 2rem 2.2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.8rem", color: colors.textMuted }}>📍 {s.location}</span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 800, color: colors.green, background: colors.greenLight, padding: "0.2rem 0.7rem", borderRadius: "50px" }}>{s.impact}</span>
                  </div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, lineHeight: 1.4, marginBottom: "0.9rem" }}>{s.title}</h4>
                  <p style={{ fontSize: "0.88rem", color: colors.textMuted, lineHeight: 1.7, marginBottom: "1.2rem" }}>{s.desc}</p>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: colors.orange, cursor: "pointer" }}>Read Full Story →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY PROGRAMS ── */}
      <section style={{ background: colors.offWhite }}>
        <div className="ci-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="orange-tag">Programs</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, marginBottom: "1rem" }}>How We Give Back</h2>
            <p style={{ color: colors.textMuted, maxWidth: "560px", margin: "0 auto", lineHeight: 1.8 }}>
              Six ongoing programs, each tackling a different dimension of responsible innovation — from education to sustainability to open research.
            </p>
          </div>
          <div className="programs-grid">
            {programs.map((p, i) => (
              <div key={i} className="card-base" style={{ padding: "2.2rem", background: colors.white }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: p.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: "1.3rem" }}>{p.icon}</div>
                <div style={{ display: "inline-block", padding: "0.3rem 0.8rem", background: colors.orangeLight, color: colors.orange, borderRadius: "50px", fontSize: "0.75rem", fontWeight: 800, marginBottom: "1rem" }}>{p.stat}</div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.7rem" }}>{p.title}</h4>
                <p style={{ fontSize: "0.88rem", color: colors.textMuted, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: colors.black }}>
        <div className="ci-container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="orange-tag-light">Voices</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: colors.white, marginBottom: "1rem" }}>
              What the Community Says
            </h2>
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "22px", padding: "2.2rem", transition: "0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(244,124,32,0.08)"; e.currentTarget.style.borderColor = "rgba(244,124,32,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                <div style={{ display: "flex", gap: "0.3rem", marginBottom: "1.2rem" }}>
                  {[...Array(t.rating)].map((_, j) => <span key={j} className="star">★</span>)}
                </div>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.97rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: "1.5rem" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#2a2a2a", overflow: "hidden", flexShrink: 0 }}>
                    <img src={t.avatar} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div>
                    <div style={{ color: colors.white, fontWeight: 800, fontSize: "0.9rem" }}>{t.name}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section style={{ background: colors.white }}>
        <div className="ci-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div>
              <div className="orange-tag">Events</div>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, margin: 0 }}>Community Gatherings</h2>
            </div>
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {eventTabs.map(t => (
                <button key={t} className={`tab-btn ${activeTab === t ? "active" : ""}`} onClick={() => setActiveTab(t)}>{t}</button>
              ))}
            </div>
          </div>
          <div className="events-grid">
            {filteredEvents.map((e, i) => (
              <div key={i} style={{ border: `1.5px solid ${colors.border}`, borderRadius: "20px", padding: "2rem", transition: "0.3s", background: colors.white }}
                onMouseEnter={el => { el.currentTarget.style.borderColor = colors.orange; el.currentTarget.style.boxShadow = "0 12px 40px rgba(244,124,32,0.08)"; }}
                onMouseLeave={el => { el.currentTarget.style.borderColor = colors.border; el.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span style={{ padding: "0.3rem 0.8rem", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800, background: e.type === "Upcoming" ? colors.orangeLight : colors.lightBg, color: e.type === "Upcoming" ? colors.orange : colors.textMuted }}>{e.type}</span>
                  <span style={{ fontSize: "0.82rem", color: colors.textMuted, fontWeight: 600 }}>📅 {e.date}</span>
                </div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.7rem", lineHeight: 1.4 }}>{e.title}</h4>
                <p style={{ fontSize: "0.86rem", color: colors.textMuted, lineHeight: 1.7, marginBottom: "1.3rem" }}>{e.desc}</p>
                <span style={{ display: "inline-block", padding: "0.45rem 1.1rem", background: e.type === "Upcoming" ? colors.orange : colors.lightBg, color: e.type === "Upcoming" ? colors.white : colors.textMain, borderRadius: "50px", fontSize: "0.8rem", fontWeight: 700, cursor: "pointer" }}>{e.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section style={{ background: colors.offWhite }}>
        <div className="ci-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="orange-tag">Partners</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: 400, marginBottom: "1rem" }}>Built With Great Partners</h2>
            <p style={{ color: colors.textMuted, maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              We collaborate with institutions that share our commitment to meaningful, responsible innovation.
            </p>
          </div>
          <div className="partners-grid">
            {partners.map((p, i) => (
              <div key={i} style={{ background: colors.white, borderRadius: "18px", padding: "1.5rem", border: `1.5px solid ${colors.border}`, textAlign: "center", transition: "0.3s", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = colors.orange; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.6rem" }}>{p.icon}</div>
                <div style={{ fontWeight: 800, fontSize: "0.9rem", marginBottom: "0.3rem" }}>{p.name}</div>
                <div style={{ fontSize: "0.72rem", color: colors.orange, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>{p.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="join-section">
        <div style={{ position: "relative", zIndex: 1, width: "90%", maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "0.5rem 1.2rem", background: "rgba(255,255,255,0.2)", color: "white", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1.5rem" }}>Be Part of It</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 400, color: colors.white, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Join a Community That Builds With Purpose.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Whether you're an engineer, researcher, student, or changemaker — there's a place for you in the MYACCESS community. Let's build technology that belongs in the world.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ background: colors.white, color: colors.orange, border: "none", padding: "1.2rem 2.8rem", borderRadius: "14px", fontWeight: 800, cursor: "pointer", fontSize: "1rem", fontFamily: "inherit", transition: "0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = colors.black; e.currentTarget.style.color = colors.white; }}
              onMouseLeave={e => { e.currentTarget.style.background = colors.white; e.currentTarget.style.color = colors.orange; }}>
              Join the Community →
            </button>
            <button style={{ background: "transparent", color: colors.white, border: "2px solid rgba(255,255,255,0.4)", padding: "1.2rem 2.8rem", borderRadius: "14px", fontWeight: 700, cursor: "pointer", fontSize: "1rem", fontFamily: "inherit", transition: "0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "transparent"; }}>
              View All Programs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityImpactPage;