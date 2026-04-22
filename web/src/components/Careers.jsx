import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const JOBS = [
  {
    id: 1,
    title: "Embedded Systems Engineer",
    team: "Engineering",
    loc: "Visakhapatnam, India",
    type: "Full-time",
    tag: "employment",
    description:
      "Join MYACCESS PRIVATE LIMITED as an Embedded Systems Engineer and contribute to the core of our product technology by developing embedded software for ESP32 and STM32 platforms using IDF and HAL. Work with Real-Time Operating Systems (RTOS) and OpenWRT to deliver high-performance, reliable solutions.",
    responsibilities: [
      { title: "Embedded Software Development", body: "Develop and maintain software for ESP32 and STM32 microcontrollers using IDF and HAL, ensuring optimal integration into our products." },
      { title: "RTOS Integration", body: "Implement and manage RTOS-based applications to enhance real-time capabilities and system reliability." },
      { title: "OpenWRT Customization", body: "Customize and optimize OpenWRT for various network applications and devices, ensuring robust and secure connectivity solutions." },
      { title: "System Testing & Debugging", body: "Perform comprehensive testing and debugging to validate functionality and performance of embedded systems." },
      { title: "Performance Optimization", body: "Optimize existing embedded systems for better performance and reliability, focusing on low-power consumption." },
    ],
    skills: [
      "Bachelor's in Computer Science, Electrical Engineering, or related field",
      "Strong experience with ESP32 and STM32 microcontrollers, IDF and HAL",
      "Experience with RTOS and networking protocols for OpenWRT",
      "Proficiency in C and C++",
      "Excellent problem-solving and attention to detail",
    ],
    offer: [
      "Opportunity to work on cutting-edge technology projects",
      "Collaborative and innovative work environment",
      "Professional growth and career advancement",
      "Competitive salary and benefits package",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    team: "Engineering",
    loc: "Visakhapatnam, India",
    type: "Full-time",
    tag: "employment",
    description:
      "Design, develop, and maintain software applications across AI, IoT, and automation domains. You'll architect scalable solutions that bridge hardware and cloud, working alongside brilliant minds redefining what technology can do.",
    responsibilities: [
      { title: "Application Development", body: "Build robust, scalable software solutions that meet product specifications and business requirements." },
      { title: "Code Review", body: "Participate in peer reviews to maintain code quality and share knowledge across the team." },
      { title: "System Design", body: "Architect software modules that integrate seamlessly with hardware and cloud services." },
    ],
    skills: [
      "Bachelor's in Computer Science or related field",
      "Proficiency in Python, JavaScript, or C++",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Strong understanding of data structures and algorithms",
    ],
    offer: [
      "Competitive compensation and benefits",
      "Flexible working hours and remote work options",
      "Continuous learning and development programs",
      "Collaborative and inclusive work culture",
    ],
  },
  {
    id: 3,
    title: "Product Manager",
    team: "Product",
    loc: "Visakhapatnam, India",
    type: "Full-time",
    tag: "employment",
    description:
      "Lead product strategy and roadmap for MYACCESS's suite of IoT, automation, and AI-driven products. Shape the future of intelligent living — from concept to launch — at one of India's fastest-growing deep tech companies.",
    responsibilities: [
      { title: "Roadmap Planning", body: "Define and maintain the product roadmap aligned with business goals and customer needs." },
      { title: "Cross-functional Collaboration", body: "Work closely with engineering, design, and sales to deliver high-quality product increments." },
      { title: "Market Analysis", body: "Conduct market research and competitive analysis to identify opportunities and trends." },
    ],
    skills: [
      "Experience in product management for tech products",
      "Strong analytical and communication skills",
      "Familiarity with IoT, AI, or automation domains preferred",
      "Ability to work in a fast-paced environment",
    ],
    offer: [
      "High-impact role shaping product direction",
      "Competitive salary and equity options",
      "Professional development opportunities",
      "Dynamic and innovative team environment",
    ],
  },
  {
    id: 4,
    title: "AI Research Scientist",
    team: "R&D",
    loc: "Visakhapatnam, India",
    type: "Full-time",
    tag: "employment",
    description:
      "Drive research and innovation in AI and machine learning for real-world applications in IoT and Industry 4.0/5.0. Push the boundaries of what machines can perceive, decide, and act on — at the edge and beyond.",
    responsibilities: [
      { title: "AI Research", body: "Conduct original research in machine learning, deep learning, and AI applications." },
      { title: "Model Development", body: "Design and train AI models for deployment on edge devices and cloud platforms." },
      { title: "Publication & Documentation", body: "Publish research findings and maintain thorough documentation of methodologies." },
    ],
    skills: [
      "PhD or Master's in Computer Science, AI, or related field",
      "Strong background in TensorFlow, PyTorch",
      "Experience with edge AI and IoT data processing",
      "Excellent research and communication skills",
    ],
    offer: [
      "Work at the cutting edge of AI research",
      "Access to state-of-the-art tools and datasets",
      "Collaborative research environment",
      "Competitive compensation and conference sponsorships",
    ],
  },
  {
    id: 5,
    title: "Sales & Marketing Executive",
    team: "Sales",
    loc: "Visakhapatnam, India",
    type: "Full-time",
    tag: "employment",
    description:
      "Drive growth for MYACCESS by identifying opportunities, building lasting client relationships, and executing bold marketing strategies in industries that are transforming the world.",
    responsibilities: [
      { title: "Business Development", body: "Identify and pursue new business opportunities across target industries." },
      { title: "Campaign Management", body: "Plan and execute marketing campaigns across digital and offline channels." },
      { title: "Client Relations", body: "Build and maintain strong relationships with existing and potential clients." },
    ],
    skills: [
      "Bachelor's in Business, Marketing, or related field",
      "Excellent communication and negotiation skills",
      "Experience in B2B sales or tech industry preferred",
      "Proficiency in CRM tools and digital marketing platforms",
    ],
    offer: [
      "Attractive performance-based incentives",
      "Opportunity to work with global clientele",
      "Supportive and growth-oriented team",
      "Flexible working arrangements",
    ],
  },
  {
    id: 6,
    title: "Customer Support Specialist",
    team: "Support",
    loc: "Visakhapatnam, India",
    type: "Full-time",
    tag: "employment",
    description:
      "Deliver exceptional support experiences to MYACCESS clients and partners across our growing product portfolio. Be the human face of technology — empathetic, fast, and always one step ahead.",
    responsibilities: [
      { title: "Client Support", body: "Respond to and resolve customer queries via email, phone, and chat in a timely manner." },
      { title: "Issue Escalation", body: "Identify, document, and escalate technical issues to the engineering team with clear context." },
      { title: "Knowledge Base", body: "Contribute to and maintain the internal and external support knowledge base." },
    ],
    skills: [
      "Excellent verbal and written communication skills",
      "Strong problem-solving and empathy skills",
      "Basic understanding of technology products",
      "Experience with support ticketing systems is a plus",
    ],
    offer: [
      "Stable and supportive work environment",
      "Training and upskilling programs",
      "Employee wellness and mental health support",
      "Competitive salary and benefits",
    ],
  },
];

const INTERNSHIPS = [
  { id: 101, title: "IoT System Architecture", domain: "IoT", duration: "3–6 Months", tag: "internship", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80", description: "Dive deep into the design and implementation of IoT systems, focusing on integration of various IoT components. Learn to build the nervous system of connected devices.", curriculum: ["Introduction to IoT: Understanding the basics, key components, and architecture.", "IoT Networking and Communication: MQTT, CoAP, and more.", "IoT Security: Security challenges and protocols in IoT architecture.", "Case Studies: Analyze real-world IoT systems and their architecture."] },
  { id: 102, title: "Embedded Systems", domain: "Hardware", duration: "3–6 Months", tag: "internship", img: "https://images.unsplash.com/photo-1601132359864-c974e79890ac?w=600&q=80", description: "Gain practical experience in developing and programming microcontroller-based devices. Write code that runs on silicon, controls actuators, and reads the physical world directly.", curriculum: ["Fundamentals of Embedded Systems: Microcontrollers, processors, and peripherals.", "Programming Microcontrollers: Hands-on with Arduino, Raspberry Pi, and more.", "Sensor Integration: Techniques for integrating various sensors with microcontrollers.", "Embedded System Design & Troubleshooting: Practical challenges and solutions."] },
  { id: 103, title: "IoT Development", domain: "IoT", duration: "3–6 Months", tag: "internship", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80", description: "Focus on developing IoT devices and systems end-to-end — sensors, actuators, connectivity, and cloud integration. Ship a real product by the time you leave.", curriculum: ["Developing IoT Devices: From conceptualization to development and testing.", "Working with IoT Platforms: AWS IoT, Google IoT Core, and more.", "IoT Project Lifecycle: Planning, executing, and managing an IoT project.", "IoT in Action: Building a small IoT system to solve a practical problem."] },
  { id: 104, title: "IoT & AI Integration", domain: "AI / IoT", duration: "3–6 Months", tag: "internship", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80", description: "Explore how IoT and AI combine to create intelligent, autonomous systems. Give devices a brain — teach them to sense, reason, and act without human intervention.", curriculum: ["Basics of AI for IoT: AI technologies that enhance IoT solutions.", "AI-Driven Data Analysis for IoT: Machine learning on IoT device data.", "Building Smart IoT Systems: Integrating AI to make IoT devices smarter.", "Project: Develop an AI-enhanced IoT solution from scratch."] },
  { id: 105, title: "Industry 4.0", domain: "Industrial", duration: "3–6 Months", tag: "internship", img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80", description: "Understand the fourth industrial revolution — smart manufacturing, robotics, and real-time data integration. The factory floor is becoming a software system.", curriculum: ["Overview of Industry 4.0: Key concepts and technologies.", "Smart Manufacturing: Integrating IoT and AI in manufacturing.", "Robotics and Automation: Hands-on with industrial robots.", "Data Integration and Cyber-Physical Systems."] },
  { id: 106, title: "Industry 5.0", domain: "Industrial", duration: "3–6 Months", tag: "internship", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80", description: "Look beyond automation to collaboration between humans and machines. Industry 5.0 is about personalization, sustainability, and machines that amplify human potential.", curriculum: ["Introduction to Industry 5.0: Collaboration between humans and machines.", "Sustainability and Personalization: Sustainable practices and customization.", "Human-Centric Technology Solutions: Enhancing human capabilities.", "Innovative Case Studies: Successful Industry 5.0 implementations."] },
];

const INTERN_RESPONSIBILITIES = [
  { title: "Project Development", body: "Work on live projects with real-world impact. Bring innovative solutions and ideas to problems that matter." },
  { title: "Research & Analysis", body: "Research the latest technologies and industry trends. Evaluate existing systems for improvements and upgrades." },
  { title: "Technical Documentation", body: "Prepare reports and documentation to support project development and outcomes." },
  { title: "Team Collaboration", body: "Collaborate with team members on project tasks and problem-solving. Participate in planning sessions." },
  { title: "Presentation & Review", body: "Present results and findings to the team and management. Give and receive peer feedback." },
];

const MUST_HAVE = [
  "Currently enrolled in or a recent graduate of a program in Electronics, Computer Science, IT, Mechanical Engineering, or related fields.",
  "Basic programming knowledge relevant to the domain (Python for AI, C/C++ for Embedded Systems).",
  "Understanding of core concepts in the respective technological field.",
  "Strong analytical and problem-solving skills with a proactive approach.",
  "Good written and verbal communication skills.",
];

const HIGHLIGHTS = [
  { num: "01", title: "Real-World Impact", body: "Work on meaningful projects that tangibly contribute to the company. Not just exercises — actual products used by real people." },
  { num: "02", title: "Mentorship Model", body: "Paired with experienced professionals who guide learning through doing and exploration, not just instruction." },
  { num: "03", title: "Performance-Based Evaluation", body: "Assessed on quality of contributions, not just task completion. Excellence and innovation are rewarded." },
  { num: "04", title: "Cutting-Edge Technologies", body: "Hands-on with IoT, AI, Industry 4.0, and Industry 5.0 — the technologies shaping the next decade." },
  { num: "05", title: "Affordable Access", body: "Unlike programs charging lakhs, our internships deliver real-world training at a fraction of the cost." },
  { num: "06", title: "Flexible Environment", body: "Attendance is strict, but balance matters — treats and playtime are integral parts of our program." },
];

const STATS = [
  { value: "2021", label: "Founded" },
  { value: "100+", label: "Projects Delivered" },
  { value: "7+", label: "Industry Domains" },
  { value: "100%", label: "Growth Focused" },
];

const VALUES = [
  { title: "Innovation", body: "We relentlessly pursue cutting-edge solutions, pushing the boundaries of what technology can achieve." },
  { title: "Integrity", body: "We operate with transparency and honesty, building trust with our customers, partners, and team." },
  { title: "Sustainability", body: "We commit to environmental stewardship, integrating sustainable practices into our products and operations." },
  { title: "Empowerment", body: "We believe in empowering our community — tools that enhance capabilities and foster independence." },
  { title: "Collaboration", body: "We value teamwork both within our organization and with our partners, believing together we create greater impact." },
  { title: "Excellence", body: "We strive for excellence in every aspect — from product development to customer service." },
];

const WHAT_WE_OFFER = [
  { icon: "◈", title: "Innovative Work Environment", body: "Projects involving AI, IoT, automation, and more. An environment that encourages creative problem-solving at the edge of what's possible." },
  { icon: "◉", title: "Professional Growth", body: "Continuous learning opportunities, development programs, and regular performance feedback to accelerate your career." },
  { icon: "◎", title: "Competitive Compensation", body: "Attractive salary packages, health insurance, retirement plans, and performance bonuses." },
  { icon: "◌", title: "Work-Life Balance", body: "Flexible schedules, remote work options, and generous leave policies for a healthy balance." },
  { icon: "◈", title: "Diversity & Inclusion", body: "A workplace culture that values diversity — where everyone is respected and has the opportunity to contribute." },
  { icon: "◉", title: "State-of-the-Art Tools", body: "Access to the latest tools and technologies in the industry, giving you everything you need to excel." },
];

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const T = {
  bg:        "#F8F6F1",
  bgAlt:     "#EFECE5",
  bgCard:    "#FFFFFF",
  bgDark:    "#111009",
  bgDark2:   "#1A1812",
  text:      "#0E0D09",
  textMid:   "#2A2820",
  textSub:   "#615C4E",
  textLight: "#9A9283",
  gold:      "#8B6914",
  goldMid:   "#B8903C",
  goldLight: "#D4AA60",
  goldPale:  "#FBF4E4",
  goldPale2: "#F5EBD0",
  border:    "#DDD8CC",
  borderMid: "#C9C2B0",
  borderHi:  "#B8903C",
  ink:       "#0E0D09",
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function useReveal(threshold = 0.07) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function Reveal({ children, delay = 0, as: Tag = "div", style = {} }) {
  const [ref, vis] = useReveal();
  return (
    <Tag ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(28px)",
      transition: `opacity .7s cubic-bezier(.4,0,.2,1) ${delay}ms, transform .7s cubic-bezier(.4,0,.2,1) ${delay}ms`,
      ...style
    }}>
      {children}
    </Tag>
  );
}

function EyebrowLabel({ children, dark = false, style = {} }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 12,
      fontSize: 10, fontWeight: 700, letterSpacing: "3.5px",
      textTransform: "uppercase",
      color: dark ? T.goldLight : T.gold,
      marginBottom: 16, ...style,
    }}>
      <span style={{ width: 32, height: 1, background: dark ? T.goldLight : T.gold, display: "block", flexShrink: 0 }} />
      {children}
    </div>
  );
}

// ─── MODAL ────────────────────────────────────────────────────────────────────

function ModalSection({ title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{
        fontSize: 10, fontWeight: 800, letterSpacing: "3px",
        textTransform: "uppercase", color: T.gold,
        marginBottom: 14, paddingBottom: 10,
        borderBottom: `1px solid ${T.border}`,
      }}>{title}</div>
      {children}
    </div>
  );
}

function JobModal({ job, onClose }) {
  useEffect(() => {
    document.body.style.overflow = job ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [job]);
  if (!job) return null;
  const intern = job.tag === "internship";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(14,13,9,.62)",
        backdropFilter: "blur(14px)",
        zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "mfade .2s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: T.bgCard,
          border: `1px solid ${T.border}`,
          boxShadow: "0 40px 80px rgba(14,13,9,.2)",
          maxWidth: 700, width: "100%",
          maxHeight: "90vh", overflowY: "auto",
          padding: "52px",
          position: "relative",
          borderRadius: 6,
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 20, right: 20,
            width: 36, height: 36, border: `1px solid ${T.border}`,
            background: "transparent", cursor: "pointer",
            color: T.textSub, fontSize: 13, borderRadius: 4,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all .18s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = T.goldPale; e.currentTarget.style.color = T.gold; e.currentTarget.style.borderColor = T.goldMid; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = T.textSub; e.currentTarget.style.borderColor = T.border; }}
        >✕</button>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, fontWeight: 700, letterSpacing: "2.5px",
          textTransform: "uppercase", color: T.gold,
          background: T.goldPale, padding: "5px 14px",
          borderRadius: 3, marginBottom: 18, border: `1px solid ${T.goldPale2}`,
        }}>
          {intern ? `${job.domain}  ·  ${job.duration}` : `${job.team}  ·  ${job.loc}`}
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(26px,3vw,34px)", fontWeight: 700,
          color: T.text, marginBottom: 18, letterSpacing: "-.5px", lineHeight: 1.15,
        }}>{job.title}</h2>

        <p style={{
          fontSize: 14.5, lineHeight: 1.88, color: T.textMid,
          marginBottom: 32,
          borderLeft: `3px solid ${T.goldMid}`,
          paddingLeft: 20, background: T.goldPale,
          padding: "16px 20px", borderRadius: "0 4px 4px 0",
        }}>{job.description}</p>

        {intern && (
          <>
            <ModalSection title="Curriculum">
              <ul style={{ listStyle: "none", padding: 0 }}>
                {job.curriculum.map((c, i) => (
                  <li key={i} style={{ fontSize: 13.5, color: T.textMid, lineHeight: 1.82, marginBottom: 10, paddingLeft: 22, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: T.gold, fontWeight: 700 }}>›</span>{c}
                  </li>
                ))}
              </ul>
            </ModalSection>
            <ModalSection title="Your Responsibilities">
              {INTERN_RESPONSIBILITIES.map((r, i) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  <span style={{ color: T.text, fontWeight: 700, fontSize: 13.5 }}>{r.title}:</span>{" "}
                  <span style={{ color: T.textMid, fontSize: 13.5 }}>{r.body}</span>
                </div>
              ))}
            </ModalSection>
            <ModalSection title="Must-Have Qualifications">
              <ul style={{ listStyle: "none", padding: 0 }}>
                {MUST_HAVE.map((s, i) => (
                  <li key={i} style={{ fontSize: 13.5, color: T.textMid, lineHeight: 1.82, marginBottom: 9, paddingLeft: 22, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: T.gold }}>›</span>{s}
                  </li>
                ))}
              </ul>
            </ModalSection>
          </>
        )}

        {!intern && (
          <>
            <ModalSection title="Key Responsibilities">
              {job.responsibilities.map((r, i) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  <span style={{ color: T.text, fontWeight: 700, fontSize: 13.5 }}>{r.title}:</span>{" "}
                  <span style={{ color: T.textMid, fontSize: 13.5 }}>{r.body}</span>
                </div>
              ))}
            </ModalSection>
            <ModalSection title="Skills & Qualifications">
              <ul style={{ listStyle: "none", padding: 0 }}>
                {job.skills.map((s, i) => (
                  <li key={i} style={{ fontSize: 13.5, color: T.textMid, lineHeight: 1.82, marginBottom: 9, paddingLeft: 22, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: T.gold }}>›</span>{s}
                  </li>
                ))}
              </ul>
            </ModalSection>
            <ModalSection title="What We Offer">
              <ul style={{ listStyle: "none", padding: 0 }}>
                {job.offer.map((o, i) => (
                  <li key={i} style={{ fontSize: 13.5, color: T.textMid, lineHeight: 1.82, marginBottom: 9, paddingLeft: 22, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: T.gold }}>›</span>{o}
                  </li>
                ))}
              </ul>
            </ModalSection>
          </>
        )}

        <a
          href="mailto:careers@myaccessio.com"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10, marginTop: 10,
            background: T.gold, color: "#fff",
            padding: "14px 32px", fontWeight: 700, fontSize: 11,
            letterSpacing: "2.5px", textDecoration: "none", textTransform: "uppercase",
            borderRadius: 4, transition: "all .2s",
            boxShadow: "0 4px 20px rgba(139,105,20,.28)",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = T.goldMid; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = T.gold; e.currentTarget.style.transform = "none"; }}
        >Apply for This Role →</a>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function Careers() {
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [hRow, setHRow] = useState(null);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const allRoles = [...JOBS, ...INTERNSHIPS];
  const filtered = allRoles.filter(r => {
    const ok = tab === "all" || r.tag === tab;
    const q = search.toLowerCase();
    return ok && (r.title.toLowerCase().includes(q) || (r.team || r.domain || "").toLowerCase().includes(q));
  });

  return (
    <div style={{ fontFamily: "'DM Sans', 'Inter', sans-serif", background: T.bg, color: T.text, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:auto}         body{background:${T.bg}}
        ::selection{background:${T.goldPale2};color:${T.text}}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:${T.bgAlt}}
        ::-webkit-scrollbar-thumb{background:${T.goldMid};border-radius:3px}

        @keyframes mfade  {from{opacity:0}to{opacity:1}}
        @keyframes heroUp {from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float  {0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes shimmer{0%{background-position:-600px 0}100%{background-position:600px 0}}

        .vc{padding:32px 30px;border:1px solid ${T.border};background:${T.bgCard};transition:all .3s;position:relative;overflow:hidden;border-radius:4px}
        .vc::before{content:'';position:absolute;bottom:0;left:0;height:3px;width:0;background:${T.gold};transition:width .4s}
        .vc:hover{border-color:${T.borderHi};transform:translateY(-4px);box-shadow:0 16px 40px rgba(14,13,9,.08)}
        .vc:hover::before{width:100%}

        .hc{padding:30px 28px;border:1px solid ${T.border};background:${T.bgCard};border-radius:4px;transition:all .3s}
        .hc:hover{border-color:${T.borderHi};box-shadow:0 10px 28px rgba(14,13,9,.07);transform:translateY(-2px)}

        .ps{padding:38px 34px;border:1px solid ${T.border};background:${T.bgCard};border-radius:4px;transition:all .3s;position:relative;overflow:hidden}
        .ps::before{content:attr(data-n);position:absolute;right:-10px;top:-18px;font-size:96px;font-weight:700;color:rgba(14,13,9,.04);font-family:'Cormorant Garamond',Georgia,serif;line-height:1;pointer-events:none;letter-spacing:-4px}
        .ps:hover{border-color:${T.borderHi};box-shadow:0 8px 24px rgba(14,13,9,.07)}

        .pc{border:1px solid ${T.border};background:${T.bgCard};border-radius:6px;cursor:pointer;transition:all .3s;position:relative;overflow:hidden;display:flex;flex-direction:column}
        .pc:hover{border-color:${T.borderHi};transform:translateY(-5px);box-shadow:0 20px 48px rgba(14,13,9,.11)}
        .pc .card-img{height:200px;overflow:hidden;position:relative}
        .pc .card-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s;display:block}
        .pc:hover .card-img img{transform:scale(1.05)}
        .pc .card-img::after{content:'';position:absolute;inset:0;background:linear-gradient(to bottom,transparent 40%,rgba(14,13,9,.32))}
        .pc .card-body{padding:26px;flex:1;display:flex;flex-direction:column}

        .rr{display:grid;grid-template-columns:2fr 1fr 1fr 130px 44px;align-items:center;padding:20px 30px;gap:16px;border-bottom:1px solid ${T.border};cursor:pointer;transition:all .18s}
        .rr:hover{background:${T.goldPale}}
        .rr:last-child{border-bottom:none}

        .tb{padding:10px 22px;background:transparent;border:none;font-size:11px;font-weight:700;letter-spacing:1px;cursor:pointer;font-family:'DM Sans',sans-serif;color:${T.textSub};transition:all .2s;text-transform:uppercase}
        .tb.on{color:${T.gold};background:${T.goldPale}}
        .tb:hover:not(.on){color:${T.text};background:${T.bgAlt}}

        .si{background:${T.bgCard};border:1.5px solid ${T.border};color:${T.text};padding:12px 18px;font-size:13.5px;font-family:'DM Sans',sans-serif;outline:none;transition:border-color .2s,box-shadow .2s;flex:1;min-width:200px;border-radius:4px}
        .si::placeholder{color:${T.textLight}}
        .si:focus{border-color:${T.goldMid};box-shadow:0 0 0 3px rgba(184,144,60,.12)}

        .nl{color:${T.textSub};text-decoration:none;font-size:12px;font-weight:600;letter-spacing:.8px;transition:color .2s}
        .nl:hover{color:${T.gold}}
        .nb{color:${T.gold}!important;border:1.5px solid ${T.gold};padding:8px 20px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;border-radius:4px;transition:all .2s;background:transparent}
        .nb:hover{background:${T.gold};color:#fff!important}

        .cta-btn{display:inline-flex;align-items:center;gap:10px;background:${T.gold};color:#fff;padding:14px 36px;font-weight:700;font-size:11px;letter-spacing:2px;text-decoration:none;text-transform:uppercase;border-radius:4px;transition:all .22s;box-shadow:0 4px 20px rgba(139,105,20,.22)}
        .cta-btn:hover{background:${T.goldMid};transform:translateY(-2px);box-shadow:0 8px 30px rgba(139,105,20,.32)}

        .ghost-btn{display:inline-flex;align-items:center;gap:10px;color:${T.gold};border:1.5px solid ${T.goldMid};padding:14px 36px;font-weight:700;font-size:11px;letter-spacing:2px;text-decoration:none;text-transform:uppercase;border-radius:4px;transition:all .22s;background:transparent}
        .ghost-btn:hover{background:${T.goldPale}}

        @media(max-width:960px){
          .g3{grid-template-columns:repeat(2,1fr)!important}
          .g2{grid-template-columns:1fr!important;gap:48px!important}
          .rr{grid-template-columns:1fr auto}
          .ch{display:none!important}
          .hero-img{display:none!important}
        }
        @media(max-width:640px){
          .g3{grid-template-columns:1fr!important}
          .g4{grid-template-columns:1fr 1fr!important}
          .hbtns{flex-direction:column;align-items:stretch!important}
          .hbtns a{text-align:center}
          .fgrid{grid-template-columns:1fr!important}
          .fright{border-left:none!important;padding-left:0!important;border-top:1px solid rgba(255,255,255,.1);padding-top:36px!important}
          .egrid{grid-template-columns:1fr!important}
          .hnav{display:none!important}
          .hero-split{flex-direction:column!important}
        }
      `}</style>

      {/* NAV */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 5%", zIndex: 1000,
        background: navScrolled ? "rgba(248,246,241,.96)" : "rgba(248,246,241,.85)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${navScrolled ? T.border : "transparent"}`,
        transition: "border-color .3s, background .3s",
        boxShadow: navScrolled ? "0 1px 20px rgba(14,13,9,.06)" : "none",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="/assets/MYACCESS DOT.svg" alt="MYACCESS" style={{ height: 17 }} />
          <span style={{ width: 1, height: 18, background: T.border, display: "block" }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: T.gold }}>Careers</span>
        </div>
        <nav className="hnav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a href="#mission" className="nl">Mission</a>
          <a href="#internships" className="nl">Internships</a>
          <a href="#roles" className="nl">Open Roles</a>
          <Link to="/" className="nb">← MYACCESS.com</Link>
        </nav>
      </header>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "68px 5% 0", position: "relative", overflow: "hidden", background: T.bg,
      }}>
        {/* Grid texture */}
        <div style={{
          position: "absolute", inset: 0, opacity: .025, pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 59px,${T.gold} 59px,${T.gold} 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,${T.gold} 59px,${T.gold} 60px)`,
        }} />
        {/* Warm glow */}
        <div style={{
          position: "absolute", top: "10%", right: "8%",
          width: 700, height: 700,
          background: `radial-gradient(circle,rgba(184,144,60,.07) 0%,transparent 65%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 80, padding: "80px 0" }} className="hero-split">
          {/* Left */}
          <div style={{ flex: "0 0 55%", maxWidth: 620 }}>
            <div style={{ animation: "heroUp .9s ease .05s both" }}>
              <EyebrowLabel>MYACCESS PRIVATE LIMITED</EyebrowLabel>
            </div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "clamp(52px,8vw,96px)", fontWeight: 600,
              lineHeight: .96, letterSpacing: "-3px", color: T.text,
              animation: "heroUp .9s ease .15s both", marginBottom: 8,
            }}>Build the</h1>
            <h1 style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "clamp(52px,8vw,96px)", fontWeight: 700,
              lineHeight: .96, letterSpacing: "-3px",
              animation: "heroUp .9s ease .22s both, shimmer 5s linear infinite 1s",
              marginBottom: 36, display: "block",
              background: `linear-gradient(135deg,${T.gold} 0%,${T.goldMid} 40%,${T.goldLight} 60%,${T.gold} 100%)`,
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Future.</h1>

            <p style={{
              fontSize: "clamp(15px,1.8vw,17.5px)", color: T.textMid, lineHeight: 1.85,
              maxWidth: 500, marginBottom: 44, animation: "heroUp .9s ease .32s both", fontWeight: 400,
            }}>
              We pioneer solutions in AI, IoT, and automation — enhancing lives globally. Join a team that builds technology with genuine purpose and lasting impact.
            </p>

            <div className="hbtns" style={{ display: "flex", gap: 14, animation: "heroUp .9s ease .42s both", flexWrap: "wrap" }}>
              <a href="#roles" className="cta-btn">View Open Roles →</a>
              <a href="#internships" className="ghost-btn">Explore Internships</a>
            </div>

            {/* Stats row */}
            <div style={{
              display: "flex", gap: 36, marginTop: 52,
              paddingTop: 36, borderTop: `1px solid ${T.border}`,
              animation: "heroUp .9s ease .5s both",
            }}>
              {STATS.map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    fontSize: "clamp(22px,3vw,30px)", fontWeight: 700,
                    color: T.gold, lineHeight: 1,
                  }}>{s.value}</div>
                  <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: T.textSub, marginTop: 4, fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image mosaic */}
          <div className="hero-img" style={{ flex: 1, position: "relative", height: 580, animation: "heroUp .9s ease .3s both" }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
              display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 12,
            }}>
              {[
                { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=85", r: "12px 4px 4px 4px" },
                { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=85", r: "4px 12px 4px 4px", offset: true },
                { src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=85", r: "4px 4px 4px 12px" },
                { src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=85", r: "4px 4px 12px 4px", offset: true },
              ].map((img, i) => (
                <div key={i} style={{
                  borderRadius: img.r, overflow: "hidden", position: "relative",
                  transform: img.offset ? "translateY(12px)" : "none",
                }}>
                  <img src={img.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  {i === 0 && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(139,105,20,.2),transparent)" }} />}
                </div>
              ))}
            </div>
            {/* Floating badge */}
            <div style={{
              position: "absolute", bottom: -20, left: -20,
              background: T.bgDark, color: "#fff",
              padding: "16px 22px", borderRadius: 6,
              boxShadow: "0 12px 32px rgba(14,13,9,.22)",
              animation: "float 6s ease-in-out infinite", zIndex: 2,
            }}>
              <div style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", color: T.goldLight, marginBottom: 4, fontWeight: 700 }}>Currently Hiring</div>
              <div style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Cormorant Garamond',Georgia,serif", color: "#fff" }}>{JOBS.length + INTERNSHIPS.length} Open Roles</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: .3,
        }}>
          <span style={{ fontSize: 9, letterSpacing: "3px", textTransform: "uppercase", color: T.textSub }}>Scroll</span>
          <div style={{ width: 1, height: 38, background: `linear-gradient(to bottom,${T.gold},transparent)` }} />
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" style={{ padding: "110px 5%", background: T.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", marginBottom: 90 }} className="g2">
            <Reveal>
              <EyebrowLabel>Who We Are</EyebrowLabel>
              <h2 style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "clamp(28px,4vw,50px)", fontWeight: 700,
                lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 22, color: T.text,
              }}>Our Mission</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.9, color: T.textMid, marginBottom: 18 }}>
                At MYACCESS PRIVATE LIMITED, our mission is to revolutionize the integration of technology into daily life by pioneering advanced solutions in AI, IoT, and automation. We strive to enhance the quality of life globally through innovative, sustainable technologies.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.9, color: T.textSub }}>
                Founded September 28, 2021 by visionary founders{" "}
                <strong style={{ color: T.text, fontWeight: 600 }}>Surya Tamarapalli</strong> and{" "}
                <strong style={{ color: T.text, fontWeight: 600 }}>Naveen Kumar Gavara</strong>.
                Headquartered in Visakhapatnam, Andhra Pradesh, India.
              </p>
              <div style={{ marginTop: 32, borderRadius: 8, overflow: "hidden", height: 240, position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85"
                  alt="Team collaboration"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(139,105,20,.15),transparent)" }} />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <EyebrowLabel>What We Build</EyebrowLabel>
              <h2 style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "clamp(28px,4vw,50px)", fontWeight: 700,
                lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 22, color: T.text,
              }}>Industries We Transform</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.9, color: T.textMid, marginBottom: 28 }}>
                Agricultural IoT, automobile automation, bio-medical diagnostics, commercial building management, domestic smart homes, educational learning systems, and smart industrial automation.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { label: "Founded", value: "Sep 28, 2021" },
                  { label: "Headquarters", value: "Vizag, India" },
                  { label: "Industry", value: "AI · IoT · Automation" },
                  { label: "Contact", value: "careers@myaccessio.com" },
                ].map(item => (
                  <div key={item.label} style={{
                    background: T.bgCard, border: `1px solid ${T.border}`,
                    padding: "14px 16px", borderRadius: 5,
                    borderLeft: `3px solid ${T.gold}`,
                  }}>
                    <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "2.5px", color: T.gold, textTransform: "uppercase", marginBottom: 5 }}>{item.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <EyebrowLabel>Core Values</EyebrowLabel>
            <h2 style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "clamp(26px,4vw,46px)", fontWeight: 700,
              letterSpacing: "-1px", color: T.text, marginBottom: 36,
            }}>What We Stand For</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, alignItems: "stretch" }} className="g3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 55} style={{ height: "100%" }}>
                <div className="vc" style={{ height: "100%" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "3px", color: T.gold, textTransform: "uppercase", marginBottom: 16 }}>0{i + 1}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: T.text }}>{v.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.84, color: T.textSub }}>{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER — dark section */}
      <section style={{ padding: "110px 5%", background: T.bgDark, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 900, height: 600,
          background: "radial-gradient(ellipse,rgba(184,144,60,.06) 0%,transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <Reveal>
            <EyebrowLabel dark>Why Join Us</EyebrowLabel>
            <h2 style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 700,
              letterSpacing: "-1.5px", color: "#F5F3EE", marginBottom: 14,
            }}>What We Offer</h2>
            <p style={{ fontSize: 15.5, color: "rgba(245,243,238,.5)", lineHeight: 1.78, maxWidth: 480, marginBottom: 52 }}>
              An environment where talent thrives and every team member feels genuinely valued.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, alignItems: "stretch" }} className="g3">
            {WHAT_WE_OFFER.map((o, i) => (
              <Reveal key={o.title} delay={i * 60} style={{ height: "100%" }}>
                <div style={{
                  padding: "32px 28px",
                  border: "1px solid rgba(255,255,255,.07)",
                  background: "rgba(255,255,255,.03)",
                  borderRadius: 5, transition: "all .3s", height: "100%",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(184,144,60,.3)"; e.currentTarget.style.background = "rgba(184,144,60,.05)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.07)"; e.currentTarget.style.background = "rgba(255,255,255,.03)"; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ fontSize: 22, marginBottom: 18, color: T.goldLight }}>{o.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: "#F5F3EE" }}>{o.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.84, color: "rgba(245,243,238,.5)" }}>{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIPS */}
      <section id="internships" style={{ padding: "110px 5%", background: T.bg, borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header + image */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 80, alignItems: "center" }} className="g2">
            <Reveal>
              <EyebrowLabel>Internship Program</EyebrowLabel>
              <h2 style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "clamp(28px,5vw,58px)", fontWeight: 700,
                letterSpacing: "-2px", lineHeight: 1.05, color: T.text, marginBottom: 22,
              }}>Unlock Your<br />Potential.</h2>
              <p style={{ fontSize: 15.5, color: T.textMid, lineHeight: 1.9, maxWidth: 440 }}>
                Our internships are designed to challenge and refine your skills through rigorous real-world applications. We focus on the right fit for your interests and potential — not just your academic records.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div style={{ borderRadius: 10, overflow: "hidden", height: 360, position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85"
                  alt="Interns working"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(139,105,20,.18),transparent 60%)" }} />
                <div style={{
                  position: "absolute", bottom: 20, right: 20,
                  background: T.gold, color: "#fff",
                  padding: "12px 18px", borderRadius: 5,
                  fontSize: 12, fontWeight: 700, letterSpacing: "1px",
                }}>6 Programs Available</div>
              </div>
            </Reveal>
          </div>

          {/* Highlights */}
          <Reveal><EyebrowLabel style={{ marginBottom: 20 }}>What Sets Us Apart</EyebrowLabel></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 76, alignItems: "stretch" }} className="g3">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.num} delay={i * 50} style={{ height: "100%" }}>
                <div className="hc" style={{ height: "100%" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "3px", color: T.gold, marginBottom: 14 }}>{h.num}</div>
                  <h3 style={{ fontSize: 15.5, fontWeight: 700, color: T.text, marginBottom: 9 }}>{h.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.84, color: T.textSub }}>{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Eligibility */}
          <Reveal>
            <div style={{
              border: `1px solid ${T.border}`, padding: "44px",
              background: T.bgCard, borderRadius: 6, marginBottom: 76,
              boxShadow: "0 4px 24px rgba(14,13,9,.05)",
            }}>
              <EyebrowLabel>Eligibility</EyebrowLabel>
              <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 26, fontWeight: 700, color: T.text, marginBottom: 10 }}>Who Can Apply?</h3>
              <p style={{ fontSize: 14.5, color: T.textMid, marginBottom: 32, lineHeight: 1.8 }}>Open to a wide range of students passionate about technology and innovation.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="egrid">
                {[
                  { who: "Diploma Students", body: "Currently pursuing or completed a diploma in any technical field." },
                  { who: "Degree Students", body: "Pursuing degrees in Computer Science, IT, Electronics, and related fields." },
                  { who: "Engineering Students", body: "Any engineering discipline — Mechanical, Electrical, Electronics, and more." },
                ].map(e => (
                  <div key={e.who} style={{ borderLeft: `3px solid ${T.gold}`, paddingLeft: 18 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: T.text, marginBottom: 8 }}>{e.who}</div>
                    <p style={{ fontSize: 13.5, color: T.textSub, lineHeight: 1.8 }}>{e.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Programs with images */}
          <Reveal>
            <EyebrowLabel style={{ marginBottom: 16 }}>Programs Offered</EyebrowLabel>
            <h3 style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "clamp(22px,3.5vw,38px)", fontWeight: 700,
              color: T.text, marginBottom: 36, letterSpacing: "-.8px",
            }}>Choose Your Domain</h3>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, alignItems: "stretch" }} className="g3">
            {INTERNSHIPS.map((it, i) => (
              <Reveal key={it.id} delay={i * 55} style={{ height: "100%", display: "flex" }}>
                <div className="pc" style={{ width: "100%" }} onClick={() => setSelected(it)}>
                  <div className="card-img">
                    <img src={it.img} alt={it.title} />
                    <div style={{
                      position: "absolute", top: 16, left: 16, zIndex: 2,
                      fontSize: 10, fontWeight: 700, letterSpacing: "2px",
                      textTransform: "uppercase", color: "#fff",
                      background: "rgba(14,13,9,.6)", backdropFilter: "blur(8px)",
                      padding: "5px 12px", borderRadius: 3,
                      border: "1px solid rgba(255,255,255,.15)",
                    }}>{it.domain}</div>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: T.text, marginBottom: 8 }}>{it.title}</h3>
                    <p style={{ fontSize: 13.5, lineHeight: 1.84, color: T.textSub, marginBottom: 20, flex: 1 }}>{it.description}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: `1px solid ${T.border}` }}>
                      <span style={{ fontSize: 12, color: T.textSub, fontWeight: 500 }}>⏱ {it.duration}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: T.gold, letterSpacing: ".5px" }}>View Details →</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "110px 5%", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <EyebrowLabel>How It Works</EyebrowLabel>
            <h2 style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "clamp(28px,4vw,48px)", fontWeight: 700,
              letterSpacing: "-1px", color: T.text, marginBottom: 52,
            }}>Our Hiring Process</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, alignItems: "stretch" }} className="g3">
            {[
              { num: "01", title: "Application Review", body: "Submit your resume through our website. Each application is reviewed with care to match skills, experience, and potential with what we're building." },
              { num: "02", title: "Conversations", body: "Engage in discussions with our team — technical and cultural. It's about where you fit and where your passion lies, not just your marks." },
              { num: "03", title: "Offer & Onboarding", body: "If selected, you'll receive an offer followed by a comprehensive onboarding to immerse you in our team, projects, and culture." },
            ].map((p, i) => (
              <Reveal key={p.num} delay={i * 90} style={{ height: "100%" }}>
                <div className="ps" data-n={p.num} style={{ height: "100%" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "3px", color: T.gold, marginBottom: 24 }}>{p.num}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 20, fontWeight: 700, color: T.text, marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.88, color: T.textMid }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="roles" style={{ padding: "110px 5%", background: T.bg, borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <EyebrowLabel>Open Positions</EyebrowLabel>
            <h2 style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "clamp(28px,4vw,48px)", fontWeight: 700,
              letterSpacing: "-1px", color: T.text, marginBottom: 44,
            }}>All Open Roles</h2>
          </Reveal>

          <Reveal>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 28, flexWrap: "wrap" }}>
              <input className="si" placeholder="Search for a role or team..." value={search} onChange={e => setSearch(e.target.value)} />
              <div style={{ display: "flex", border: `1.5px solid ${T.border}`, overflow: "hidden", borderRadius: 4, background: T.bgCard }}>
                {[["all", "All"], ["employment", "Full-time"], ["internship", "Internships"]].map(([k, l]) => (
                  <button key={k} className={`tb${tab === k ? " on" : ""}`} onClick={() => setTab(k)}>{l}</button>
                ))}
              </div>
            </div>
          </Reveal>

          <div style={{ background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: 6, overflow: "hidden", boxShadow: "0 2px 14px rgba(14,13,9,.05)" }}>
            {/* Header row */}
            <div style={{
              display: "grid", gridTemplateColumns: "2fr 1fr 1fr 130px 44px",
              padding: "13px 30px", gap: 16,
              background: T.bgAlt, borderBottom: `1px solid ${T.border}`,
            }}>
              {["Role", "Team", "Location", "Type", ""].map((h, i) => (
                <div key={i} className={i >= 1 && i <= 3 ? "ch" : ""} style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: T.textSub }}>{h}</div>
              ))}
            </div>

            {filtered.map((role, i) => (
              <Reveal key={role.id} delay={i * 28}>
                <div className="rr" onClick={() => setSelected(role)} onMouseEnter={() => setHRow(role.id)} onMouseLeave={() => setHRow(null)}>
                  <div style={{ fontSize: 15.5, fontWeight: 700, color: hRow === role.id ? T.gold : T.text, transition: "color .18s" }}>{role.title}</div>
                  <div className="ch" style={{ fontSize: 13.5, color: T.textSub }}>{role.team || role.domain}</div>
                  <div className="ch" style={{ fontSize: 13.5, color: T.textSub }}>{role.loc || role.duration}</div>
                  <div className="ch">
                    <span style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
                      padding: "4px 12px", borderRadius: 3,
                      background: role.tag === "internship" ? T.goldPale : T.bgAlt,
                      color: role.tag === "internship" ? T.gold : T.textSub,
                      border: `1px solid ${role.tag === "internship" ? T.goldPale2 : T.border}`,
                    }}>
                      {role.tag === "internship" ? "Internship" : "Full-time"}
                    </span>
                  </div>
                  <div style={{ fontSize: 16, color: T.gold, fontWeight: 700, textAlign: "right" }}>→</div>
                </div>
              </Reveal>
            ))}

            {!filtered.length && (
              <div style={{ textAlign: "center", padding: "72px 0", color: T.textSub, fontSize: 15 }}>
                No roles found for "<strong>{search}</strong>"
              </div>
            )}
          </div>

          <p style={{ fontSize: 12.5, color: T.textSub, marginTop: 24, lineHeight: 1.9 }}>
            To all recruitment agencies: MYACCESS does not accept agency resumes.&nbsp;&nbsp;·&nbsp;&nbsp;
            Internships: <a href="mailto:internships@myaccessio.com" style={{ color: T.gold, textDecoration: "none", fontWeight: 600 }}>internships@myaccessio.com</a>&nbsp;&nbsp;·&nbsp;&nbsp;
            Careers: <a href="mailto:careers@myaccessio.com" style={{ color: T.gold, textDecoration: "none", fontWeight: 600 }}>careers@myaccessio.com</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "100px 5% 56px", background: T.bgDark, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, opacity: .03, pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 59px,${T.gold} 59px,${T.gold} 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,${T.gold} 59px,${T.gold} 60px)`,
        }} />
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 800, height: 400,
          background: "radial-gradient(ellipse at 50% 0%,rgba(184,144,60,.07) 0%,transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", marginBottom: 60 }} className="fgrid">
            <Reveal>
              <EyebrowLabel dark>MYACCESS PRIVATE LIMITED</EyebrowLabel>
              <h2 style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 700,
                color: "#F5F3EE", lineHeight: 1.2, marginBottom: 32, letterSpacing: "-1px",
              }}>Hear about career opportunities first.</h2>
              <a href="mailto:careers@myaccessio.com" className="cta-btn" style={{ color: "#fff", textDecoration: "none" }}>
                Join Our Talent Community →
              </a>
            </Reveal>
            <Reveal delay={110}>
              <div className="fright" style={{ borderLeft: "1px solid rgba(255,255,255,.08)", paddingLeft: "56px" }}>
                {[
                  { label: "Address", value: "Visakhapatnam, Andhra Pradesh, India" },
                  { label: "Phone", value: "+91 7674014444" },
                  { label: "Website", value: "myaccess.cloud", href: "https://myaccess.cloud" },
                  { label: "Careers", value: "careers@myaccessio.com", href: "mailto:careers@myaccessio.com" },
                ].map(item => (
                  <div key={item.label} style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2.5px", color: T.goldLight, textTransform: "uppercase", marginBottom: 5 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: 14, color: "rgba(245,243,238,.45)", textDecoration: "none" }}>{item.value}</a>
                      : <p style={{ fontSize: 14, color: "rgba(245,243,238,.45)", lineHeight: 1.6 }}>{item.value}</p>}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.07)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
  <span style={{ fontSize: 12, color: "rgba(245,243,238,.2)" }}>© 2021 MYACCESS PRIVATE LIMITED. All rights reserved.</span>

  <div style={{ display: "flex", gap: 20 }}>
    {/* Privacy Policy Link */}
    <Link 
      to="/legal" 
      state={{ tab: "privacy" }} 
      style={{ fontSize: 12, color: "rgba(245,243,238,.2)", textDecoration: "none", transition: "color .2s" }}
      onMouseEnter={e => e.currentTarget.style.color = T.goldLight}
      onMouseLeave={e => e.currentTarget.style.color = "rgba(245,243,238,.2)"}
    >
      Privacy Policy
    </Link>

    {/* Terms of Service Link */}
    <Link 
      to="/legal" 
      state={{ tab: "terms" }} 
      style={{ fontSize: 12, color: "rgba(245,243,238,.2)", textDecoration: "none", transition: "color .2s" }}
      onMouseEnter={e => e.currentTarget.style.color = T.goldLight}
      onMouseLeave={e => e.currentTarget.style.color = "rgba(245,243,238,.2)"}
    >
      Terms of Service
    </Link>
  </div>
</div>
        </div>
      </footer>

      <JobModal job={selected} onClose={() => setSelected(null)} />
    </div>
  );
}