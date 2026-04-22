import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "./Footer";

const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,900;1,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const colors = {
    orange: "#f47c20",
    orangeLight: "rgba(244,124,32,0.1)",
    orangeMid: "rgba(244,124,32,0.2)",
    black: "#0f0f0f",
    white: "#ffffff",
    cream: "#fdf8f3",
    lightBg: "#f4f4f4",
    textMain: "#171717",
    textMuted: "#5f5f5f",
    border: "rgba(0,0,0,0.08)",
  };

  const filters = ["All", "Conference", "Workshop", "Hackathon", "Webinar", "Community"];

  const featuredEvent = {
    title: "MYACCESS Tech Day 2024",
    date: "May 18, 2024",
    day: "Saturday",
    time: "9:00 AM – 6:00 PM IST",
    location: "HICC, Hyderabad, Telangana",
    type: "Conference",
    desc: "Our flagship annual event — a full day of live product demos, technical deep-dives, panel discussions with industry leaders, hands-on workshops, and networking with 500+ engineers, entrepreneurs, and innovators.",
    speakers: ["Surya — Founder, MYACCESS", "Dr. B.T. Krishna — IEEE Fellow", "Naveen — CTO, MYACCESS", "Md. Chishty — AI Expert, GITAM"],
    highlights: ["8 technical sessions", "3 hands-on workshops", "Live product launches", "Networking lunch & dinner", "Innovation showcase", "500+ attendees expected"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    tag: "Flagship Event",
    price: "Free Entry",
  };

  const events = [
    {
      type: "Hackathon",
      title: "GreenHack 2024 — Build for the Planet",
      date: "Jun 5–6, 2024",
      time: "24 Hours",
      location: "MYACCESS HQ, Vizag + Virtual",
      desc: "A 24-hour hackathon on World Environment Day, focused on building embedded and software solutions for climate and environmental challenges. ₹3L in prizes across 3 tracks.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      prize: "₹3L Prize Pool",
      registrations: "280 Registered",
      status: "Upcoming",
      seats: "42 seats left",
      color: "#edf8f0",
    },
    {
      type: "Workshop",
      title: "Embedded Systems Bootcamp — ESP32 Masterclass",
      date: "Jun 22, 2024",
      time: "10:00 AM – 4:00 PM",
      location: "MYACCESS Lab, Vizag",
      desc: "A hands-on full-day workshop covering ESP32 programming, MQTT communication, and deploying a live IoT sensor project from scratch. Kits provided. Limited to 30 participants.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      prize: null,
      registrations: "27 / 30 Registered",
      status: "Upcoming",
      seats: "3 seats left",
      color: "#fdf3e8",
    },
    {
      type: "Webinar",
      title: "AI at the Edge: Deploying ML on Microcontrollers",
      date: "Jul 10, 2024",
      time: "6:00 PM IST",
      location: "Online — Zoom",
      desc: "Our embedded AI team walks through the complete pipeline of training, quantizing, and deploying ML models on ESP32 and STM32 microcontrollers. Q&A session included.",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&q=80",
      prize: null,
      registrations: "512 Registered",
      status: "Upcoming",
      seats: "Open",
      color: "#f0f4fd",
    },
    {
      type: "Community",
      title: "Women in Engineering — Mentorship Mixer",
      date: "Jul 27, 2024",
      time: "2:00 PM – 7:00 PM",
      location: "GITAM University, Vizag",
      desc: "An afternoon of talks, speed-mentoring sessions, and networking for women pursuing engineering careers. 15 senior engineers from MYACCESS and partner companies participate as mentors.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      prize: null,
      registrations: "143 Registered",
      status: "Upcoming",
      seats: "Open",
      color: "#f3edfb",
    },
    {
      type: "Conference",
      title: "Water Day Panel: Tech for Conservation",
      date: "Mar 22, 2024",
      time: "3:00 PM – 6:00 PM",
      location: "Novotel, Vizag",
      desc: "A multi-stakeholder panel on deploying IoT and embedded technology for water conservation. MYACCESS hosted engineers, farmers, policy makers, and NGOs for a landmark discussion.",
      image: "https://images.unsplash.com/photo-1536232252168-a0a68aec668f?w=800&q=80",
      prize: null,
      registrations: "210 Attended",
      status: "Past",
      seats: null,
      color: "#fdeaea",
    },
    {
      type: "Workshop",
      title: "PCB Design for IoT — Beginner to Pro",
      date: "Feb 17, 2024",
      time: "9:00 AM – 5:00 PM",
      location: "MYACCESS Lab, Vizag",
      desc: "Hands-on workshop covering schematic capture, PCB layout, DRC checks, and fab file generation using KiCad. Students took home a working PCB they designed themselves.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      prize: null,
      registrations: "30 Attended",
      status: "Past",
      seats: null,
      color: "#edf8f0",
    },
    {
      type: "Hackathon",
      title: "SmartCity Hack — Build Urban Solutions",
      date: "Jan 13–14, 2024",
      time: "36 Hours",
      location: "MYACCESS HQ + Virtual",
      desc: "36-hour hackathon focused on smart city challenges. 48 teams competed across tracks including traffic management, waste monitoring, and public safety.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      prize: "₹2L Prizes Awarded",
      registrations: "310 Participated",
      status: "Past",
      seats: null,
      color: "#f0f4fd",
    },
    {
      type: "Webinar",
      title: "From Prototype to Production: Scaling IoT",
      date: "Dec 14, 2023",
      time: "6:00 PM IST",
      location: "Online — YouTube Live",
      desc: "Our CTO walked through the real challenges of scaling from 10 to 10,000 devices — firmware OTA, cloud architecture, hardware QA, and supply chain management.",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&q=80",
      prize: null,
      registrations: "1,240 Watched",
      status: "Past",
      seats: null,
      color: "#fdf3e8",
    },
  ];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", span: "wide" },
    { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", span: "normal" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80", span: "normal" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", span: "normal" },
    { src: "https://images.unsplash.com/photo-1536232252168-a0a68aec668f?w=600&q=80", span: "wide" },
  ];

  const filtered = activeFilter === "All" ? events : events.filter(e => e.type === activeFilter);
  const upcoming = filtered.filter(e => e.status === "Upcoming");
  const past = filtered.filter(e => e.status === "Past");

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: colors.white, color: colors.textMain, overflowX: "hidden" }}>
      <FontLoader />
      <Header />

      <style>{`
        .ev-container { width: 90%; max-width: 1300px; margin: 0 auto; padding: 6rem 0; }

        /* Hero */
        .ev-hero { padding-top: 80px; background: ${colors.cream}; position: relative; overflow: hidden; }
        .ev-hero::before { content: ''; position: absolute; top: 0; right: 0; width: 600px; height: 100%; background: url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80') center/cover; opacity: 0.08; pointer-events: none; }

        /* Featured event */
        .feat-ev-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 0; border-radius: 30px; overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,0.12); border: 1.5px solid rgba(244,124,32,0.2); }

        /* Filter */
        .ev-filter { display: flex; gap: 0.6rem; flex-wrap: wrap; }
        .ev-filter-btn { padding: 0.6rem 1.4rem; border-radius: 50px; border: 1.5px solid ${colors.border}; background: transparent; font-size: 0.88rem; font-weight: 600; cursor: pointer; transition: 0.25s; font-family: inherit; color: ${colors.textMain}; }
        .ev-filter-btn:hover { border-color: ${colors.orange}; color: ${colors.orange}; }
        .ev-filter-btn.active { background: ${colors.orange}; color: white; border-color: ${colors.orange}; }

        /* Event cards */
        .ev-cards-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.8rem; }
        .ev-card { border-radius: 24px; overflow: hidden; border: 1.5px solid ${colors.border}; transition: 0.35s; background: ${colors.white}; }
        .ev-card:hover { transform: translateY(-8px); border-color: ${colors.orange}; box-shadow: 0 24px 60px rgba(244,124,32,0.1); }

        /* Gallery */
        .gallery-grid { display: grid; grid-template-columns: repeat(4,1fr); grid-auto-rows: 220px; gap: 1rem; }
        .gallery-wide { grid-column: span 2; }
        .gallery-img { width: 100%; height: 100%; object-fit: cover; border-radius: 18px; display: block; transition: 0.4s; }
        .gallery-img:hover { transform: scale(1.03); }
        .gallery-item { overflow: hidden; border-radius: 18px; }

        /* Newsletter */
        .ev-newsletter { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }

        .orange-tag { display: inline-block; padding: 0.5rem 1.2rem; background: ${colors.orangeLight}; color: ${colors.orange}; border-radius: 50px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-bottom: 1.2rem; }
        .btn-orange { background: ${colors.orange}; color: white; border: none; padding: 1rem 2.2rem; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s; font-size: 0.95rem; font-family: inherit; }
        .btn-orange:hover { background: #d96612; transform: translateY(-2px); }

        /* Section label */
        .section-label { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
        .section-label::after { content: ''; flex: 1; height: 1px; background: ${colors.border}; }

        @media (max-width: 1024px) {
          .feat-ev-grid { grid-template-columns: 1fr; }
          .ev-newsletter { grid-template-columns: 1fr; gap: 2rem; }
          .gallery-grid { grid-template-columns: repeat(2,1fr); }
          .gallery-wide { grid-column: span 2; }
        }
        @media (max-width: 768px) {
          .ev-container { padding: 3.5rem 0; }
          .ev-cards-grid { grid-template-columns: 1fr; }
          .gallery-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 180px; }
          h1 { font-size: 2.6rem !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 200px; }
          .gallery-wide { grid-column: span 1; }
          h2 { font-size: 1.8rem !important; }
          h1 { font-size: 2rem !important; }
          .ev-container { padding: 3rem 0; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ev-hero">
        <div className="ev-container">
          <div style={{ maxWidth: "700px", position: "relative", zIndex: 1 }}>
            <div className="orange-tag">Events</div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.4rem,5vw,4.5rem)", fontWeight: 900, lineHeight: 1.1, color: colors.black, marginBottom: "1.5rem" }}>
              Where Engineers,<br />
              <span style={{ color: colors.orange, fontStyle: "italic" }}>Ideas & Impact</span><br />
              Come Together.
            </h1>
            <p style={{ fontSize: "1.1rem", color: colors.textMuted, lineHeight: 1.9, marginBottom: "2.5rem", maxWidth: "520px" }}>
              From flagship conferences to intimate workshops and 24-hour hackathons — MYACCESS events are where the engineering community learns, builds, and connects.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button className="btn-orange">Register for Tech Day →</button>
              <button style={{ background: "transparent", border: `2px solid ${colors.border}`, padding: "1rem 2.2rem", borderRadius: "12px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: "0.95rem", color: colors.textMain, transition: "0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = colors.orange; e.currentTarget.style.color = colors.orange; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.textMain; }}>
                View All Events
              </button>
            </div>
            <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", paddingTop: "2.5rem", borderTop: `1px solid ${colors.border}` }}>
              {[["12+", "Events / Year"], ["3,000+", "Attendees"], ["₹5L+", "Prizes Awarded"], ["Free", "Most Events"]].map(([val, lab], i) => (
                <div key={i}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: colors.orange }}>{val}</div>
                  <div style={{ fontSize: "0.78rem", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1px" }}>{lab}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENT ── */}
      <section style={{ background: colors.white }}>
        <div className="ev-container">
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="orange-tag">Don't Miss</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 900 }}>Flagship Event of 2024</h2>
          </div>
          <div className="feat-ev-grid">
            {/* Left: Image */}
            <div style={{ position: "relative", minHeight: "500px" }}>
              <img src={featuredEvent.image} alt={featuredEvent.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
                <span style={{ background: colors.orange, color: "white", padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 800 }}>{featuredEvent.tag}</span>
              </div>
              <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem" }}>
                <div style={{ fontSize: "2.5rem", fontFamily: "'Fraunces', serif", fontWeight: 900, color: "white", lineHeight: 1.2, marginBottom: "0.8rem" }}>{featuredEvent.title}</div>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem" }}>📅 {featuredEvent.date}</span>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem" }}>📍 {featuredEvent.location}</span>
                </div>
              </div>
            </div>
            {/* Right: Details */}
            <div style={{ background: colors.white, padding: "3rem" }}>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                <span style={{ padding: "0.3rem 0.8rem", background: colors.orangeLight, color: colors.orange, borderRadius: "50px", fontSize: "0.75rem", fontWeight: 800 }}>{featuredEvent.type}</span>
                <span style={{ padding: "0.3rem 0.8rem", background: "#edf8f0", color: "#2d7a4f", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 800 }}>{featuredEvent.price}</span>
              </div>
              <p style={{ color: colors.textMuted, lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1.8rem" }}>{featuredEvent.desc}</p>

              <div style={{ marginBottom: "1.8rem" }}>
                <div style={{ fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: colors.orange, marginBottom: "0.8rem" }}>Speakers</div>
                {featuredEvent.speakers.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.7rem", padding: "0.5rem 0", borderBottom: `1px solid ${colors.border}` }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: colors.orangeLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", flexShrink: 0 }}>🎤</div>
                    <span style={{ fontSize: "0.88rem", color: colors.textMain }}>{s}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: colors.orange, marginBottom: "0.8rem" }}>Event Highlights</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  {featuredEvent.highlights.map((h, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.4rem", alignItems: "center", fontSize: "0.84rem", color: colors.textMuted }}>
                      <span style={{ color: colors.orange, fontWeight: 800 }}>✓</span>{h}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.2rem", background: colors.lightBg, borderRadius: "14px", marginBottom: "1.5rem" }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.88rem" }}>🕘 {featuredEvent.time}</div>
                  <div style={{ fontSize: "0.78rem", color: colors.textMuted }}>{featuredEvent.day}, {featuredEvent.date}</div>
                </div>
              </div>
              <button className="btn-orange" style={{ width: "100%", padding: "1.1rem" }}>Reserve My Free Spot →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL EVENTS ── */}
      <section style={{ background: colors.cream }}>
        <div className="ev-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }}>
            <div>
              <div className="orange-tag">All Events</div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem,4vw,2.6rem)", fontWeight: 900, margin: 0 }}>Workshops, Talks & More</h2>
            </div>
            <div className="ev-filter">
              {filters.map(f => (
                <button key={f} className={`ev-filter-btn ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
              ))}
            </div>
          </div>

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <>
              <div className="section-label">
                <span style={{ fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", color: colors.orange }}>Upcoming</span>
              </div>
              <div className="ev-cards-grid" style={{ marginBottom: "3rem" }}>
                {upcoming.map((ev, i) => (
                  <div key={i} className="ev-card">
                    <div style={{ position: "relative" }}>
                      <img src={ev.image} alt={ev.title} style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }} />
                      <div style={{ position: "absolute", top: "1rem", left: "1rem", display: "flex", gap: "0.5rem" }}>
                        <span style={{ background: colors.orange, color: "white", padding: "0.3rem 0.8rem", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800 }}>{ev.type}</span>
                        {ev.seats === "3 seats left" && <span style={{ background: "#ff4d4f", color: "white", padding: "0.3rem 0.8rem", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800 }}>Almost Full!</span>}
                      </div>
                    </div>
                    <div style={{ background: ev.color, padding: "1rem 1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: colors.textMain }}>📅 {ev.date}</span>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: colors.textMain }}>⏱ {ev.time}</span>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: colors.textMain }}>📍 {ev.location}</span>
                    </div>
                    <div style={{ padding: "1.5rem 1.8rem 2rem" }}>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.7rem", lineHeight: 1.4 }}>{ev.title}</h4>
                      <p style={{ fontSize: "0.87rem", color: colors.textMuted, lineHeight: 1.7, marginBottom: "1.3rem" }}>{ev.desc}</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.8rem" }}>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                          {ev.prize && <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#2d7a4f", background: "#edf8f0", padding: "0.3rem 0.8rem", borderRadius: "50px" }}>{ev.prize}</span>}
                          <span style={{ fontSize: "0.8rem", color: colors.textMuted }}>{ev.registrations}</span>
                        </div>
                        <button className="btn-orange" style={{ padding: "0.6rem 1.4rem", fontSize: "0.85rem" }}>Register {ev.seats !== "Open" ? `· ${ev.seats}` : "Free"}</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Past */}
          {past.length > 0 && (
            <>
              <div className="section-label">
                <span style={{ fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", color: colors.textMuted }}>Past Events</span>
              </div>
              <div className="ev-cards-grid">
                {past.map((ev, i) => (
                  <div key={i} className="ev-card" style={{ opacity: 0.9 }}>
                    <div style={{ position: "relative" }}>
                      <img src={ev.image} alt={ev.title} style={{ width: "100%", height: "180px", objectFit: "cover", display: "block", filter: "grayscale(20%)" }} />
                      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)" }} />
                      <span style={{ position: "absolute", top: "1rem", left: "1rem", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", color: "white", padding: "0.3rem 0.8rem", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800 }}>{ev.type}</span>
                    </div>
                    <div style={{ padding: "1.5rem 1.8rem 2rem" }}>
                      <div style={{ display: "flex", gap: "1rem", marginBottom: "0.8rem", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "0.78rem", color: colors.textMuted }}>📅 {ev.date}</span>
                        <span style={{ fontSize: "0.78rem", color: colors.textMuted }}>📍 {ev.location}</span>
                      </div>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.7rem", lineHeight: 1.4, color: colors.textMain }}>{ev.title}</h4>
                      <p style={{ fontSize: "0.86rem", color: colors.textMuted, lineHeight: 1.7, marginBottom: "1.2rem" }}>{ev.desc}</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "0.8rem", color: colors.textMuted }}>{ev.registrations}</span>
                        {ev.prize && <span style={{ fontSize: "0.8rem", fontWeight: 700, color: colors.orange }}>{ev.prize}</span>}
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: colors.orange, cursor: "pointer" }}>Watch Recording →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ background: colors.black }}>
        <div className="ev-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "inline-block", padding: "0.5rem 1.2rem", background: "rgba(255,255,255,0.1)", color: "white", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem" }}>Gallery</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem,4vw,2.6rem)", fontWeight: 900, color: colors.white }}>Moments From Our Events</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className={`gallery-item ${img.span === "wide" ? "gallery-wide" : ""}`}>
                <img src={img.src} alt={`Event ${i + 1}`} className="gallery-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER + PROPOSE ── */}
      <section style={{ background: colors.white, padding: "6rem 0" }}>
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <div className="ev-newsletter">
            <div>
              <div className="orange-tag">Stay Notified</div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1.2rem" }}>
                Never Miss an <span style={{ color: colors.orange }}>Event Again.</span>
              </h2>
              <p style={{ color: colors.textMuted, lineHeight: 1.8, fontSize: "1rem", marginBottom: "2rem" }}>
                Get early access, registration links, and event recaps delivered directly to your inbox. We send one email per event — never spam.
              </p>
              <div style={{ background: colors.cream, borderRadius: "20px", padding: "1.8rem", border: `1px solid ${colors.border}` }}>
                <div style={{ fontWeight: 800, marginBottom: "1rem", fontSize: "0.95rem" }}>🎤 Want to Speak or Host?</div>
                <p style={{ color: colors.textMuted, fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                  We welcome speaker proposals, workshop ideas, and partnership proposals for future MYACCESS events. Reach out with your topic and we'll be in touch.
                </p>
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: colors.orange, cursor: "pointer" }}>Submit a Proposal →</span>
              </div>
            </div>
            <div style={{ background: colors.lightBg, borderRadius: "24px", padding: "2.5rem" }}>
              <h4 style={{ fontWeight: 800, marginBottom: "1.5rem", fontSize: "1.1rem" }}>Get Event Alerts</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input type="text" placeholder="Your Name" style={{ padding: "1rem 1.2rem", borderRadius: "12px", border: `1.5px solid ${colors.border}`, background: colors.white, fontSize: "0.95rem", outline: "none", fontFamily: "inherit", color: colors.textMain }} />
                <input type="email" placeholder="Email Address" style={{ padding: "1rem 1.2rem", borderRadius: "12px", border: `1.5px solid ${colors.border}`, background: colors.white, fontSize: "0.95rem", outline: "none", fontFamily: "inherit", color: colors.textMain }} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                  {filters.slice(1).map(f => (
                    <label key={f} style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.85rem", cursor: "pointer", color: colors.textMuted }}>
                      <input type="checkbox" style={{ accentColor: colors.orange }} /> {f}
                    </label>
                  ))}
                </div>
                <button className="btn-orange" style={{ padding: "1.1rem" }}>Subscribe to Event Alerts</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;