import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const IMGS = {
  hero: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&q=80",
  printed: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=900&q=80",
  injection: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1400&q=80",
  design: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",
};

const stats = [
  { value: "2–5 days", label: "Avg. Lead Time" },
  { value: "80%", label: "Cost vs Steel Tooling" },
  { value: "0.1mm", label: "Feature Resolution" },
  { value: "10K+", label: "Shots on Best Molds" },
];

const moldTypes = [
  {
    name: "Injection Molds",
    icon: "⬛",
    shots: "Up to 10,000 shots",
    material: "High-Temp Resin, PA12, Tooling Board",
    leadTime: "2–5 business days",
    best: "Functional prototypes and short-run production parts. Full cavity and core geometry, gating, and ejector system design.",
    compatible: ["POM", "PP", "PE", "ABS (low temp)", "Wax casting"],
    tolerances: "±0.2mm on cavity dimensions",
    maxSize: "300 × 250 × 180mm",
  },
  {
    name: "Blow Molds",
    icon: "◉",
    shots: "Up to 5,000 shots",
    material: "PETG, PA-CF, High-Temp Resin",
    leadTime: "3–6 business days",
    best: "Prototype bottles, hollow containers, and packaging development. Significantly faster than aluminum tooling for new bottle designs.",
    compatible: ["HDPE", "PET", "PP", "LDPE"],
    tolerances: "±0.3mm wall thickness",
    maxSize: "200 × 200 × 400mm",
  },
  {
    name: "Vacuum Form Molds",
    icon: "◻",
    shots: "Unlimited (non-contact surface)",
    material: "ABS, ASA, Tooling Board, High-Temp Resin",
    leadTime: "1–3 business days",
    best: "Packaging trays, clamshells, covers, and formed enclosures. Fastest turnaround in our range. High cycle life due to low forming forces.",
    compatible: ["PET", "ABS", "PETG", "PVC sheet", "HIPS"],
    tolerances: "±0.5mm formed part accuracy",
    maxSize: "600 × 500 × 250mm",
  },
  {
    name: "Silicone Cast Masters",
    icon: "◈",
    shots: "Unlimited (master pattern)",
    material: "Rigid Resin, SLA, Tooling Board",
    leadTime: "2–4 business days",
    best: "Master patterns for silicone rubber mold making. Cast polyurethane, epoxy, or low-temp metal alloys from the resulting silicone tools.",
    compatible: ["Silicone rubber", "Polyurethane", "Epoxy", "Pewter/Zamak"],
    tolerances: "±0.1mm master accuracy (SLA)",
    maxSize: "Unlimited (patterns joined)",
  },
];

const techStack = [
  { tech: "SLA", desc: "Stereolithography — highest detail, smooth surface finish. Best for injection mold cavities and master patterns.", res: "0.05mm", material: "High-Temp Resin, Castable" },
  { tech: "MJF", desc: "Multi Jet Fusion — functional Nylon PA12 parts with excellent mechanical properties and near-isotropic strength.", res: "0.1mm", material: "PA12, PA11, TPU" },
  { tech: "FDM CF", desc: "Carbon fiber filled FDM — strong, stiff, and lightweight. Ideal for vacuum form tools and structural mold backs.", res: "0.15mm", material: "CF-ABS, CF-ASA, CF-PC" },
  { tech: "SLS", desc: "Selective Laser Sintering — functional Nylon/glass-filled parts without support removal. Complex internal geometry.", res: "0.1mm", material: "PA12-GF, PA11, TPU" },
];

const advantages = [
  { num: "10×", desc: "Faster lead time compared to CNC machined aluminum tooling for equivalent prototype molds." },
  { num: "80%", desc: "Typical cost reduction vs. steel or aluminum tooling for short-run and prototype applications." },
  { num: "48hr", desc: "Rush turnaround available for most mold types when designs are confirmed by 10am." },
  { num: "0", desc: "Minimum order quantity. One mold, one cavity — we don't have volume minimums." },
];

const workflow = [
  { step: "1", title: "Upload CAD File", desc: "Upload STEP, IGES, or STL file. We accept design files from all major CAD platforms — SolidWorks, Fusion 360, CATIA, PTC Creo." },
  { step: "2", title: "DFM Review", desc: "Our engineers review your design for moldability — draft angles, wall thickness, undercuts, parting lines — and feedback within 4 hours." },
  { step: "3", title: "Quote & Confirm", desc: "You receive a detailed quote with mold cost, material recommendation, shot life estimate, and lead time. Confirm with a PO or card." },
  { step: "4", title: "Print & Prep", desc: "Mold printed on appropriate technology, post-processed, and surface treated (sanded, sealed, or coated as required for your application)." },
  { step: "5", title: "QA & Dispatch", desc: "Dimensional inspection against your drawing. First-article inspection report available. Shipped next business day after QA sign-off." },
];

export default function MoldsPage() {
  const [visible, setVisible] = useState(false);
  const [activeMold, setActiveMold] = useState(0);
  const [hovAdv, setHovAdv] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
    const t = setInterval(() => setRotate(r => r + 0.5), 30);
    return () => clearInterval(t);
  }, []);

  const faqs = [
    { q: "What CAD formats do you accept?", a: "STEP is preferred for best accuracy. We also accept IGES, STL, OBJ, and native files from SolidWorks, Fusion 360, CATIA, and PTC Creo. If in doubt, export as STEP." },
    { q: "Can we get a first-article inspection report?", a: "Yes — a CMM-based dimensional inspection report is available as an add-on for any mold order. Turnaround adds 1 business day to lead time." },
    { q: "How many shots before the mold degrades?", a: "Shot life depends on material type and injection pressure. Our High-Temp Resin molds achieve 500–2000 shots with ABS. PA12 molds reach 5000–10,000. See our mold selection guide for specific combinations." },
    { q: "Do you offer design support if we don't have CAD?", a: "Yes — our design team can generate mold geometry from physical samples, 2D drawings, or concept sketches. DFM consultation included in design fees." },
  ];

  return (
    <div style={s.root}>
<style>{`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
  *{box-sizing:border-box}
`}</style>
<Header />
      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroBg}>
          <img src={IMGS.hero} alt="3D printing molds" style={s.heroBgImg} />
          <div style={s.heroBgOverlay} />
        </div>
        <div style={{ ...s.heroInner, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(32px)", transition: "all 0.9s ease 0.1s" }}>
          <div style={s.badge}><span style={s.badgeDot} />3D Printed Tooling</div>
          <h1 style={s.heroTitle}>Molds Without<br />the <span style={s.accent}>Wait.</span></h1>
          <p style={s.heroSub}>Custom 3D printed molds for injection, blow, vacuum forming, and casting. Production-ready tooling delivered in days — not months. Engineered for performance, priced for prototyping.</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Btn primary>Upload Your CAD File</Btn>
            <Btn light>View Case Studies →</Btn>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={s.statsBar}>
        {stats.map((st, i) => (
          <div key={i} style={s.statItem}>
            <div style={s.statVal}>{st.value}</div>
            <div style={s.statLbl}>{st.label}</div>
          </div>
        ))}
      </section>

      {/* INTRO + IMAGE */}
      <section style={s.twoCol}>
        <div style={s.colText}>
          <div style={s.tag}>ABOUT 3D PRINTED MOLDS</div>
          <h2 style={s.h2}>Faster tooling without sacrificing performance.</h2>
          <p style={s.body}>Traditional injection molds machined from steel or aluminum take 6–14 weeks and cost tens of thousands of dollars. For design validation, short-run production, and market testing, that timeline kills momentum.</p>
          <p style={s.body}>3D printed molds use engineering-grade photopolymers, Nylon composites, and carbon fiber-filled materials to produce mold tools in days — at 10–20% of conventional tooling cost. They're not a compromise; they're a strategic choice for the right application.</p>
          <p style={s.body}>Our team designs, prints, post-processes, and validates your mold in-house. From the DFM review to the first-article inspection report, we handle the entire tooling workflow so you can focus on your product.</p>
        </div>
        <div style={s.colImg}>
          <img src={IMGS.printed} alt="3D printed mold" style={s.img} />
          <div style={s.imgCap}>SLA high-temp resin injection mold — 2000 shot life</div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section style={{ ...s.section, background: "#fafafa" }}>
        <div style={s.sectionHead}>
          <div style={s.tag}>WHY 3D PRINTED MOLDS</div>
          <h2 style={s.h2}>The numbers speak.</h2>
        </div>
        <div style={s.advGrid}>
          {advantages.map((a, i) => (
            <div key={i} style={{ ...s.advCard, ...(hovAdv === i ? { borderColor: "#FF6B00", transform: "translateY(-4px)", boxShadow: "0 12px 36px rgba(255,107,0,0.1)" } : {}) }}
              onMouseEnter={() => setHovAdv(i)} onMouseLeave={() => setHovAdv(null)}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, color: hovAdv === i ? "#FF6B00" : "#1a1a1a", lineHeight: 1, transition: "color 0.25s", marginBottom: "0.5rem" }}>{a.num}</div>
              <div style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.65 }}>{a.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MOLD TYPES */}
      <section style={s.section}>
        <div style={s.sectionHead}>
          <div style={s.tag}>MOLD TYPES</div>
          <h2 style={s.h2}>What we manufacture.</h2>
        </div>
        <div style={s.moldTabs}>
          {moldTypes.map((m, i) => (
            <div key={i} style={{ ...s.moldTab, ...(activeMold === i ? { borderColor: "#FF6B00", background: "#fff8f4" } : {}) }}
              onClick={() => setActiveMold(i)}>
              <span style={{ color: activeMold === i ? "#FF6B00" : "#ccc", transition: "color 0.2s" }}>{m.icon}</span>
              <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{m.name}</span>
              {activeMold === i && <span style={{ marginLeft: "auto", color: "#FF6B00", fontSize: "0.8rem" }}>→</span>}
            </div>
          ))}
        </div>
        <div style={s.moldDetail}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>{moldTypes[activeMold].name}</h3>
            <span style={{ fontSize: "0.72rem", color: "#FF6B00", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid #FF6B00", padding: "0.2rem 0.6rem", borderRadius: "999px" }}>{moldTypes[activeMold].shots}</span>
          </div>
          <p style={{ ...s.body, maxWidth: "640px" }}>{moldTypes[activeMold].best}</p>
          <div style={s.moldDetailGrid}>
            <div>
              <div style={s.tag}>PRINT MATERIAL</div>
              <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{moldTypes[activeMold].material}</div>
            </div>
            <div>
              <div style={s.tag}>LEAD TIME</div>
              <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{moldTypes[activeMold].leadTime}</div>
            </div>
            <div>
              <div style={s.tag}>PART TOLERANCES</div>
              <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{moldTypes[activeMold].tolerances}</div>
            </div>
            <div>
              <div style={s.tag}>MAX MOLD SIZE</div>
              <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{moldTypes[activeMold].maxSize}</div>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <div style={s.tag}>COMPATIBLE MATERIALS</div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
              {moldTypes[activeMold].compatible.map((c, i) => (
                <span key={i} style={{ padding: "0.3rem 0.75rem", background: "#f5f5f5", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 600 }}>{c}</span>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Btn primary>Quote This Mold Type</Btn>
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section style={s.imgBreak}>
        <img src={IMGS.injection} alt="injection molding" style={s.imgBreakImg} />
        <div style={s.imgBreakOverlay}>
          <div>
            <div style={{ ...s.tag, color: "#FF6B00" }}>PRODUCTION CAPABILITY</div>
            <h2 style={{ ...s.h2, color: "#fff", maxWidth: "520px" }}>From prototype to bridge production without retooling.</h2>
            <p style={{ fontSize: "0.93rem", color: "rgba(255,255,255,0.72)", maxWidth: "460px", lineHeight: 1.75, margin: "0 0 2rem" }}>Our high-temp molds withstand injection pressures up to 600 bar and temperatures up to 130°C — bridging the gap between prototype testing and full-volume steel tooling. Many customers run their first 1000 production parts on 3D printed tooling.</p>
            <Btn light>See Production Case Studies</Btn>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section style={{ ...s.section, background: "#fafafa" }}>
        <div style={s.sectionHead}>
          <div style={s.tag}>PRINT TECHNOLOGIES</div>
          <h2 style={s.h2}>We use the best process for your mold.</h2>
        </div>
        <div style={s.techGrid}>
          {techStack.map((t, i) => (
            <TechCard key={i} {...t} />
          ))}
        </div>
      </section>

      {/* WORKFLOW + IMAGE */}
      <section style={s.twoCol}>
        <div style={s.colImg}>
          <img src={IMGS.design} alt="mold design on screen" style={s.img} />
          <div style={s.imgCap}>DFM review and mold design — included with every order</div>
        </div>
        <div style={s.colText}>
          <div style={s.tag}>HOW IT WORKS</div>
          <h2 style={s.h2}>From CAD to mold in 5 steps.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1rem" }}>
            {workflow.map((w, i) => (
              <div key={i} style={{ display: "flex", gap: "1.25rem" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#FF6B00", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800, flexShrink: 0, marginTop: "2px" }}>{w.step}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.25rem" }}>{w.title}</div>
                  <div style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.65 }}>{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...s.section, background: "#fafafa" }}>
        <div style={s.sectionHead}>
          <div style={s.tag}>QUESTIONS</div>
          <h2 style={s.h2}>Common questions.</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "760px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ border: "1px solid", borderColor: openFaq === i ? "#FF6B00" : "#eee", borderRadius: "8px", padding: "1.25rem 1.5rem", cursor: "pointer", transition: "border-color 0.2s", background: "#fff" }}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 600, fontSize: "0.95rem" }}>
                <span>{faq.q}</span>
                <span style={{ fontSize: "1.4rem", color: "#FF6B00", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", lineHeight: 1 }}>+</span>
              </div>
              {openFaq === i && <div style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.7, marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #f0f0f0" }}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={s.cta}>
        <h2 style={s.ctaTitle}>Have a CAD file ready?<br /><span style={{ color: "#FF6B00" }}>Get an instant quote.</span></h2>
        <p style={s.ctaSub}>Upload your STEP or STL file and receive a detailed quote with lead time and material recommendations within 4 hours.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Btn primary large>Upload CAD File</Btn>
          <Btn light large>Talk to an Engineer</Btn>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function TechCard({ tech, desc, res, material }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ padding: "2rem", border: "1px solid", borderColor: hov ? "#FF6B00" : "#e5e5e5", borderRadius: "10px", background: "#fff", transition: "all 0.25s ease", cursor: "default", transform: hov ? "translateY(-3px)" : "none", boxShadow: hov ? "0 10px 30px rgba(255,107,0,0.1)" : "none" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.5rem", fontWeight: 800, color: hov ? "#FF6B00" : "#1a1a1a", marginBottom: "0.75rem", transition: "color 0.25s" }}>{tech}</div>
      <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.65, marginBottom: "1rem" }}>{desc}</p>
      <div style={{ fontSize: "0.72rem", color: "#aaa", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <span>Resolution: <strong style={{ color: "#555" }}>{res}</strong></span>
        <span>Materials: <strong style={{ color: "#555" }}>{material}</strong></span>
      </div>
    </div>
  );
}

function Btn({ children, primary, light, large }) {
  const [hov, setHov] = useState(false);
  return (
    <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      padding: large ? "1rem 2.5rem" : "0.75rem 1.75rem", fontSize: large ? "1rem" : "0.88rem",
      fontFamily: "'DM Sans',sans-serif", fontWeight: 600,
      border: primary ? "none" : light ? "1.5px solid rgba(255,255,255,0.4)" : "1.5px solid #1a1a1a",
      borderRadius: "4px", cursor: "pointer", letterSpacing: "0.02em", transition: "all 0.25s ease",
      background: primary ? (hov ? "#e05e00" : "#FF6B00") : hov ? "rgba(255,255,255,0.15)" : "transparent",
      color: primary ? "#fff" : light ? "#fff" : hov ? "#FF6B00" : "#1a1a1a",
      transform: hov ? "translateY(-2px)" : "none",
      boxShadow: hov && primary ? "0 8px 24px rgba(255,107,0,0.35)" : "none",
    }}>{children}</button>
  );
}

const s = {
  root: { fontFamily: "'DM Sans',sans-serif", background: "#fff", color: "#1a1a1a" },
  hero: { position: "relative", minHeight: "92vh", display: "flex", alignItems: "center" },
  heroBg: { position: "absolute", inset: 0, zIndex: 0 },
  heroBgImg: { width: "100%", height: "100%", objectFit: "cover" },
  heroBgOverlay: { position: "absolute", inset: 0, background: "linear-gradient(110deg,rgba(0,0,0,0.85) 52%,rgba(0,0,0,0.2) 100%)" },
  heroInner: { position: "relative", zIndex: 1, padding: "6rem 6%", maxWidth: "680px" },
  badge: { display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 0.9rem", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: "1.5rem" },
  badgeDot: { width: "6px", height: "6px", borderRadius: "50%", background: "#FF6B00", display: "inline-block" },
  heroTitle: { fontFamily: "'Syne',sans-serif", fontSize: "clamp(3rem,7vw,5.5rem)", fontWeight: 800, lineHeight: 1.05, color: "#fff", margin: "0 0 1.25rem", letterSpacing: "-0.03em" },
  accent: { color: "#FF6B00" },
  heroSub: { fontSize: "clamp(0.95rem,1.8vw,1.08rem)", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, maxWidth: "520px", margin: "0 0 2rem" },
  statsBar: { display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "1rem", background: "#1a1a1a", padding: "1rem 6%" },
  statItem: { textAlign: "center", padding: "0.5rem 1rem" },
  statVal: { fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.4rem,2.8vw,2.2rem)", fontWeight: 800, color: "#FF6B00", lineHeight: 1 },
  statLbl: { fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", marginTop: "0.4rem" },
  twoCol: { display: "flex", alignItems: "center", gap: "4rem", padding: "3.5rem 6%", flexWrap: "wrap" },
  colText: { flex: "1 1 min(400px,100%)" },
  colImg: { flex: "1 1 min(360px,100%)", display: "flex", flexDirection: "column", gap: "0.5rem" },
  img: { width: "100%", borderRadius: "10px", objectFit: "cover", height: "380px", display: "block" },
  imgCap: { fontSize: "0.73rem", color: "#bbb", textAlign: "center" },
  tag: { fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF6B00", fontWeight: 700, marginBottom: "0.75rem" },
  h2: { fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.7rem)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 1.25rem" },
  body: { fontSize: "0.93rem", color: "#555", lineHeight: 1.78, marginBottom: "1rem" },
  section: { padding: "3.5rem 6%" },
  sectionHead: { marginBottom: "2.5rem" },
  advGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(200px,100%),1fr))", gap: "1.5rem" },
  advCard: { padding: "2rem", border: "1px solid #e5e5e5", borderRadius: "10px", cursor: "default", transition: "all 0.25s ease", background: "#fff" },
  moldTabs: { display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem", maxWidth: "520px" },
  moldTab: { display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.9rem 1.25rem", border: "1px solid #e5e5e5", borderRadius: "6px", cursor: "pointer", transition: "all 0.2s ease", background: "#fff" },
  moldDetail: { padding: "2rem", border: "1px solid #e5e5e5", borderRadius: "10px", background: "#fafafa" },
  moldDetailGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(180px,100%),1fr))", gap: "1.5rem", margin: "1.25rem 0" },
  imgBreak: { position: "relative", height: "clamp(480px,59vh,540px)", overflow: "hidden" },
  imgBreakImg: { width: "100%", height: "100%", objectFit: "cover" },
  imgBreakOverlay: { position: "absolute", inset: 0, background: "linear-gradient(100deg,rgba(0,0,0,0.88) 52%,rgba(0,0,0,0.15) 100%)", display: "flex", alignItems: "center", padding: "0 6%" },
  techGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(240px,100%),1fr))", gap: "1.25rem" },
  cta: { padding: "6rem 6%", background: "#1a1a1a", textAlign: "center" },
  ctaTitle: { fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", margin: "0 0 1rem", lineHeight: 1.2, letterSpacing: "-0.02em" },
  ctaSub: { fontSize: "1rem", color: "#aaa", margin: "0 auto 2.5rem", maxWidth: "520px", lineHeight: 1.7 },
};