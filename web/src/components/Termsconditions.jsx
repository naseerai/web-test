// @legal-pages
import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TERMS_SECTIONS = [
  { id: "t-acceptance",      num: "01", title: "Acceptance of Terms" },
  { id: "t-eligibility",     num: "02", title: "Eligibility" },
  { id: "t-internship",      num: "03", title: "Internship Program" },
  { id: "t-employment",      num: "04", title: "Job Applications & Employment" },
  { id: "t-ip",              num: "05", title: "Intellectual Property" },
  { id: "t-confidentiality", num: "06", title: "Confidentiality" },
  { id: "t-conduct",         num: "07", title: "Code of Conduct" },
  { id: "t-data",            num: "08", title: "Data & Privacy" },
  { id: "t-termination",     num: "09", title: "Termination" },
  { id: "t-liability",       num: "10", title: "Limitation of Liability" },
  { id: "t-governing",       num: "11", title: "Governing Law" },
  { id: "t-contact",         num: "12", title: "Contact" },
];

const PRIVACY_SECTIONS = [
  { id: "p-overview",      num: "01", title: "Overview" },
  { id: "p-collection",    num: "02", title: "Data We Collect" },
  { id: "p-use",           num: "03", title: "How We Use Your Data" },
  { id: "p-storage",       num: "04", title: "Storage & Security" },
  { id: "p-sharing",       num: "05", title: "Data Sharing" },
  { id: "p-retention",     num: "06", title: "Retention Period" },
  { id: "p-rights",        num: "07", title: "Your Rights" },
  { id: "p-cookies",       num: "08", title: "Cookies" },
  { id: "p-children",      num: "09", title: "Minors" },
  { id: "p-changes",       num: "10", title: "Policy Changes" },
  { id: "p-contact",       num: "11", title: "Contact" },
];

const FAQ_DATA = [
  {
    category: "Internship Program",
    items: [
      { q: "Who is eligible to apply for an internship at MYACCESS?", a: "Our internships are open to diploma students, undergraduate degree students, and engineering students across disciplines including Computer Science, IT, Electronics, Mechanical, and Electrical Engineering. Recent graduates may also apply. We prioritize passion, curiosity, and potential over academic records alone." },
      { q: "What domains does the internship program cover?", a: "We offer six internship tracks: IoT System Architecture, Embedded Systems, IoT Development, IoT & AI Integration, Industry 4.0, and Industry 5.0. Each program is designed with a structured curriculum, real-world project work, and mentorship." },
      { q: "How long is the internship?", a: "All internship programs run for a duration of 3 to 6 months, depending on the track and project requirements. The exact duration will be communicated at the time of your offer." },
      { q: "Is the internship paid?", a: "Stipend eligibility is determined on an individual basis and will be communicated at the time of your offer letter. Stipends, where applicable, are performance-based." },
      { q: "Will I receive a certificate upon completion?", a: "Yes. Interns who successfully complete the program will receive an official Certificate of Completion from MYACCESS PRIVATE LIMITED. Exceptional performers may also receive a Letter of Recommendation." },
      { q: "What happens if I withdraw mid-program?", a: "Interns who voluntarily withdraw before completing the program may not be eligible for certification or stipend disbursement. Early withdrawal must be communicated with at least two weeks' notice." },
      { q: "How are interns evaluated?", a: "Evaluation is based on quality of project contributions, innovation, attendance, collaboration, and professional conduct — not just task completion. You will receive regular feedback from your mentor throughout the program." },
    ],
  },
  {
    category: "Job Applications",
    items: [
      { q: "What positions are currently open at MYACCESS?", a: "We are hiring for Embedded Systems Engineers, Software Engineers, Product Managers, AI Research Scientists, Sales & Marketing Executives, and Customer Support Specialists. All positions are based in Visakhapatnam, India, and are full-time roles." },
      { q: "How do I apply for a full-time role?", a: "You can apply directly through our careers page at myaccess.cloud or by sending your resume to careers@myaccessio.com. Please mention the role you are applying for in the subject line." },
      { q: "Does MYACCESS work with recruitment agencies?", a: "No. MYACCESS does not accept unsolicited resumes from recruitment agencies. Any agency submissions made without a prior signed agreement will be treated as property of MYACCESS with no fee obligation." },
      { q: "What is the hiring process like?", a: "Our hiring process has three stages: (1) Application Review — we carefully assess each submission for skills, experience, and cultural fit. (2) Conversations — technical and cultural interviews with relevant team members. (3) Offer & Onboarding — a formal offer followed by comprehensive onboarding." },
      { q: "Is there a probationary period?", a: "Yes, all new full-time employees are subject to a probationary period as specified in their individual employment contracts. During this period, performance is formally evaluated." },
    ],
  },
  {
    category: "Company & Technology",
    items: [
      { q: "What does MYACCESS PRIVATE LIMITED do?", a: "MYACCESS is a deep-tech company pioneering solutions in AI, IoT, and automation. We build across seven domains: Agricultural IoT, Automobile Automation, Bio-medical Diagnostics, Commercial Building Management, Domestic Smart Homes, Educational Learning Systems, and Smart Industrial Automation." },
      { q: "When was MYACCESS founded?", a: "MYACCESS PRIVATE LIMITED was founded on September 28, 2021 by Surya Tamarapalli and Naveen Kumar Gavara. We are headquartered in Visakhapatnam, Andhra Pradesh, India." },
      { q: "What technologies does the team work with?", a: "Our teams work with ESP32 and STM32 microcontrollers, IDF and HAL frameworks, RTOS, OpenWRT, Python, C/C++, JavaScript, TensorFlow, PyTorch, AWS IoT, Google Cloud IoT, and more — across embedded, cloud, AI, and automation stacks." },
      { q: "How can I contact MYACCESS?", a: "You can reach us at careers@myaccessio.com for job-related enquiries, internships@myaccessio.com for internship queries, or by phone at +91 7674014444. Our office is located in Visakhapatnam, Andhra Pradesh, India." },
    ],
  },
  {
    category: "Data & Privacy",
    items: [
      { q: "What personal data does MYACCESS collect from applicants?", a: "We collect your name, contact details, educational background, work experience, and any other information you voluntarily submit in your application. We may also collect technical assessment results if applicable." },
      { q: "How long does MYACCESS retain my application data?", a: "Application data is retained for up to 24 months from the date of submission for future consideration, unless you request earlier deletion. Data submitted by successful candidates becomes part of their employment record." },
      { q: "Will my data be shared with third parties?", a: "No. MYACCESS does not sell or share your personal data with third parties for commercial purposes. Data may only be shared with internal teams involved in the hiring process or as required by applicable law." },
      { q: "How do I request deletion of my data?", a: "You may request access to, correction of, or deletion of your personal data by contacting us at careers@myaccessio.com. We will respond to all data requests within 5 business days." },
    ],
  },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function useActiveSection(sections) {
  const [active, setActive] = useState(sections[0]?.id || "");
  useEffect(() => {
    const handler = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 110) {
          setActive(sections[i].id);
          return;
        }
      }
      setActive(sections[0]?.id || "");
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [sections]);
  return [active, setActive];
}

function useReveal() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
}

// ─── UI PRIMITIVES ────────────────────────────────────────────────────────────

function P({ children, muted }) {
  return <p style={{ marginBottom: 16, color: muted ? "#888884" : "#2E2E2A", fontSize: 15, lineHeight: 1.88 }}>{children}</p>;
}
function B({ children }) {
  return <strong style={{ color: "#0A0A08", fontWeight: 600 }}>{children}</strong>;
}
function Ul({ items }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px" }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 12, marginBottom: 10, fontSize: 15, color: "#2E2E2A", lineHeight: 1.82 }}>
          <span style={{ color: "#0A0A08", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ id, num, title, children }) {
  const [ref, vis] = useReveal();
  return (
    <section id={id} ref={ref} style={{
      padding: "clamp(32px, 8vw, 64px) 0",
      borderBottom: "1px solid #EBEBЕ7",
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateY(18px)",
      transition: "opacity .55s ease, transform .55s ease",
    }}>
      <div style={{ display: "flex", gap: 0, alignItems: "flex-start" }}>
        <span style={{
          flexShrink: 0, width: 56,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 12, fontWeight: 600, color: "#C8C8C4",
          letterSpacing: "1px", paddingTop: 6, display: "block",
        }}>{num}</span>
        <div style={{ flex: 1 }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(20px, 2.4vw, 28px)",
            fontWeight: 700, color: "#0A0A08",
            letterSpacing: "-.4px", lineHeight: 1.2, marginBottom: 24,
          }}>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────

function Sidebar({ sections, active }) {
  return (
    <aside className="legal-sidebar" style={{
      width: 220, flexShrink: 0,
      position: "sticky", top: 58,
      height: "calc(100vh - 58px)",
      overflowY: "auto",
      borderRight: "1px solid #EBEBЕ7",
      padding: "36px 24px 36px 0",
    }}>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#C8C8C4", marginBottom: 16 }}>Contents</div>
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          style={{
            display: "flex", alignItems: "baseline", gap: 10, width: "100%",
            background: "none", border: "none", cursor: "pointer",
            padding: "8px 0", textAlign: "left",
            borderBottom: "1px solid #F4F4F0",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12.5, fontWeight: active === s.id ? 700 : 400,
            color: active === s.id ? "#0A0A08" : "#9A9A96",
            transition: "color .15s",
          }}
          onMouseEnter={e => { if (active !== s.id) e.currentTarget.style.color = "#0A0A08"; }}
          onMouseLeave={e => { if (active !== s.id) e.currentTarget.style.color = "#9A9A96"; }}
        >
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 11, color: active === s.id ? "#0A0A08" : "#C8C8C4",
            minWidth: 20, flexShrink: 0,
          }}>{s.num}</span>
          {s.title}
        </button>
      ))}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          marginTop: 24, width: "100%",
          border: "1px solid #E0E0DC", background: "none",
          padding: "8px 0", borderRadius: 3,
          fontSize: 11, fontWeight: 600, letterSpacing: "1.2px",
          textTransform: "uppercase", cursor: "pointer",
          color: "#9A9A96", fontFamily: "'DM Sans', sans-serif",
          transition: "all .18s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "#0A0A08"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#0A0A08"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#9A9A96"; e.currentTarget.style.borderColor = "#E0E0DC"; }}
      >↑ Top</button>
    </aside>
  );
}

// ─── PAGE HERO ────────────────────────────────────────────────────────────────

function PageHero({ eyebrow, title, subtitle, meta }) {
  return (
    <div style={{
padding: "clamp(32px, 7vw, 64px) 0 clamp(24px, 5vw, 56px)",      borderBottom: "1px solid #EBEBЕ7",
    }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#C8C8C4", marginBottom: 18, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 24, height: 1, background: "#C8C8C4", display: "block" }} />
        {eyebrow}
      </div>
      <h1 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: "clamp(32px, 4.5vw, 56px)",
        fontWeight: 700, lineHeight: 1.08,
        letterSpacing: "-1.5px", color: "#0A0A08", marginBottom: 20,
      }}>{title}</h1>
      <p style={{ fontSize: 15, color: "#6A6A66", lineHeight: 1.82, maxWidth: 580, marginBottom: 32 }}>{subtitle}</p>
      <div className="legal-hero-meta" style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {meta.map(item => (
          <div key={item.label} style={{ borderLeft: "2px solid #0A0A08", paddingLeft: 12 }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#C8C8C4", marginBottom: 3 }}>{item.label}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#0A0A08" }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TERMS PAGE ───────────────────────────────────────────────────────────────

function TermsPage() {
  const [active] = useActiveSection(TERMS_SECTIONS);
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
      <Sidebar sections={TERMS_SECTIONS} active={active} />
      <div className="legal-main" style={{ flex: 1, paddingLeft: 56, minWidth: 0 }}>
        <PageHero
          eyebrow="MYACCESS PRIVATE LIMITED"
          title={"Terms &\nConditions"}
          subtitle="These Terms govern your engagement with MYACCESS — including internship programs, job applications, employment, and all related services. Please read carefully before proceeding."
          meta={[
            { label: "Effective Date", value: "September 28, 2021" },
            { label: "Jurisdiction", value: "Andhra Pradesh, India" },
            { label: "Last Updated", value: "2026" },
          ]}
        />

        <Section id="t-acceptance" num="01" title="Acceptance of Terms">
          <P>By applying for a job, enrolling in an internship program, or engaging with <B>MYACCESS PRIVATE LIMITED</B> ("MYACCESS," "we," "us," or "our") in any capacity, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions.</P>
          <P>If you do not agree to these terms in their entirety, you must not submit an application, participate in any program, or engage with our organization in a professional capacity.</P>
          <P>MYACCESS reserves the right to amend these Terms at any time. Continued participation following such amendments constitutes acceptance of the revised Terms.</P>
        </Section>

        <Section id="t-eligibility" num="02" title="Eligibility">
          <P>To engage with MYACCESS programs and opportunities, you must meet the following requirements:</P>
          <Ul items={[
            "Be at least 18 years of age, or have appropriate parental/guardian consent if under 18.",
            "Be currently enrolled in or a recent graduate of a recognized educational institution.",
            "Possess the skills and qualifications relevant to the role or program applied for.",
            "Be legally authorized to work or undertake an internship in India.",
            "Provide truthful, accurate, and complete information in all application materials.",
          ]} />
          <P>MYACCESS does not discriminate on the basis of caste, religion, gender, nationality, disability, or any other protected characteristic. We are an equal opportunity organization.</P>
        </Section>

        <Section id="t-internship" num="03" title="Internship Program">
          <P>MYACCESS offers structured internship programs across six domains: <B>IoT System Architecture, Embedded Systems, IoT Development, IoT & AI Integration, Industry 4.0,</B> and <B>Industry 5.0</B>.</P>
          <P><B>Duration:</B> All internship programs run for 3 to 6 months as specified at the time of enrollment.</P>
          <P><B>Nature of Work:</B> Interns are assigned to live projects. Responsibilities include project development, research, technical documentation, team collaboration, and formal presentations.</P>
          <P><B>Assessment:</B> Interns are evaluated on quality of contributions, innovation, attendance, and professional conduct — not solely task completion. Performance determines certification, stipend eligibility, and future employment consideration.</P>
          <P><B>Attendance:</B> Attendance is strict. Interns must maintain punctuality and report absences in advance with valid justification.</P>
          <P><B>Stipend:</B> Stipend details, if applicable, are communicated at the time of offer and are performance-based. MYACCESS reserves the right to determine eligibility.</P>
          <P><B>Certification:</B> Interns who successfully complete the program receive an official Certificate of Completion from MYACCESS PRIVATE LIMITED.</P>
        </Section>

        <Section id="t-employment" num="04" title="Job Applications & Employment">
          <P><B>Application Integrity:</B> All information submitted must be truthful. Misrepresentation — including falsified qualifications or experience — will result in immediate disqualification or termination.</P>
          <P><B>Recruitment Process:</B> Our process consists of application review, one or more interview rounds, and a formal offer. MYACCESS reserves the right to reject any application at any stage without providing a reason.</P>
          <P><B>Agency Policy:</B> MYACCESS does not accept unsolicited resumes from recruitment agencies. Agency submissions made without a signed agreement are considered property of MYACCESS with no fee obligation.</P>
          <P><B>Employment Terms:</B> Specific terms — compensation, leave, working hours, benefits — are detailed in individual employment contracts. In the event of conflict, the employment contract shall prevail.</P>
          <P><B>Probation:</B> All new employees are subject to a probationary period as specified in their employment contract.</P>
        </Section>

        <Section id="t-ip" num="05" title="Intellectual Property">
          <P>All work, inventions, designs, code, documentation, and research outputs created during your engagement with MYACCESS — whether during working hours or using company resources — are the sole and exclusive intellectual property of <B>MYACCESS PRIVATE LIMITED</B>.</P>
          <Ul items={[
            "Software, firmware, and embedded code developed for any MYACCESS project.",
            "IoT system designs, schematics, and prototypes.",
            "AI models, datasets, and research outputs.",
            "Product concepts, documentation, and marketing materials.",
            "Any derivative works based on MYACCESS proprietary technology.",
          ]} />
          <P>You agree to execute any additional documents necessary to formally assign such rights upon request. This obligation survives termination of your engagement.</P>
        </Section>

        <Section id="t-confidentiality" num="06" title="Confidentiality">
          <P>During and after your engagement, you agree to maintain strict confidentiality regarding all non-public information, including:</P>
          <Ul items={[
            "Proprietary technology, source code, and technical architectures.",
            "Business strategies, financial data, and client information.",
            "Internal processes, research findings, and product roadmaps.",
            "Personnel information and organizational details.",
          ]} />
          <P>This obligation remains in effect for <B>two (2) years</B> following termination, or indefinitely where trade secrets are concerned. Breach may result in immediate termination and legal proceedings.</P>
        </Section>

        <Section id="t-conduct" num="07" title="Code of Conduct">
          <P>All interns, employees, and contractors must uphold MYACCESS values — Innovation, Integrity, Sustainability, Empowerment, Collaboration, and Excellence — in all professional interactions.</P>
          <P>The following conduct is strictly prohibited:</P>
          <Ul items={[
            "Harassment, discrimination, or bullying toward colleagues, clients, or partners.",
            "Misuse of company resources, equipment, or proprietary systems.",
            "Unauthorized access to systems, data, or restricted areas.",
            "Sharing confidential information on social media or external platforms.",
            "Engaging in activities creating a conflict of interest with MYACCESS.",
            "Dishonest or fraudulent behavior in any professional context.",
          ]} />
          <P>Violations may result in disciplinary action, termination, and/or legal proceedings depending on severity.</P>
        </Section>

        <Section id="t-data" num="08" title="Data & Privacy">
          <P>By engaging with MYACCESS, you consent to the collection, storage, and processing of your personal data for legitimate business purposes. We do not sell your data to third parties.</P>
          <P>Application data is retained for up to <B>24 months</B> for future consideration, unless you request earlier deletion. You may request access to, correction of, or deletion of your data at <B>careers@myaccessio.com</B>.</P>
          <P>For full details, please refer to our Privacy Policy.</P>
        </Section>

        <Section id="t-termination" num="09" title="Termination">
          <P>MYACCESS reserves the right to terminate any engagement at any time for reasons including breach of these Terms, misrepresentation, unsatisfactory performance, organizational restructuring, or gross misconduct.</P>
          <P>Upon termination, you must immediately return all company property, delete confidential data from personal devices, and cease using MYACCESS systems and credentials.</P>
          <P>Interns who voluntarily withdraw before program completion may not be eligible for certification or stipend disbursement.</P>
        </Section>

        <Section id="t-liability" num="10" title="Limitation of Liability">
          <P>To the maximum extent permitted by law, MYACCESS shall not be liable for any indirect, incidental, or consequential losses arising from your engagement, including loss of income, opportunity, or data resulting from program changes or termination.</P>
          <P>Where liability cannot be entirely excluded, MYACCESS's total liability is limited to the total compensation received during the relevant engagement period.</P>
          <P>Nothing in these Terms excludes liability for fraud, willful misconduct, or any matter where exclusion would be unlawful under applicable Indian law.</P>
        </Section>

        <Section id="t-governing" num="11" title="Governing Law">
          <P>These Terms are governed by the laws of <B>India</B>, specifically those applicable in <B>Andhra Pradesh</B>. Disputes shall first be resolved through good-faith negotiation, and if unresolved, shall be subject to the exclusive jurisdiction of courts in <B>Visakhapatnam, Andhra Pradesh, India</B>.</P>
          <P>If any provision is found unenforceable, it shall be modified to the minimum extent necessary, with all other provisions remaining in full force.</P>
        </Section>

        <Section id="t-contact" num="12" title="Contact">
          <P>For questions related to these Terms, reach us through:</P>
<div className="legal-contact-grid" style={{ gap: 12, marginBottom: 16 }}>            {[
              { label: "General Careers", value: "careers@myaccessio.com", href: "mailto:careers@myaccessio.com" },
              { label: "Internship Queries", value: "internships@myaccessio.com", href: "mailto:internships@myaccessio.com" },
              { label: "Phone", value: "+91 7674014444" },
              { label: "Address", value: "Visakhapatnam, Andhra Pradesh, India" },
            ].map(item => (
              <div key={item.label} style={{ padding: "14px 16px", border: "1px solid #EBEBЕ7", borderLeft: "2px solid #0A0A08", borderRadius: 3 }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#C8C8C4", marginBottom: 4 }}>{item.label}</div>
                {item.href
                  ? <a href={item.href} style={{ fontSize: 13, fontWeight: 600, color: "#0A0A08", textDecoration: "none" }}>{item.value}</a>
                  : <span style={{ fontSize: 13, fontWeight: 500, color: "#2E2E2A" }}>{item.value}</span>}
              </div>
            ))}
          </div>
          <P muted>We respond to all formal inquiries within 5 business days (Mon–Sat, 9:00 AM – 6:00 PM IST).</P>
        </Section>
      </div>
    </div>
  );
}

// ─── PRIVACY PAGE ─────────────────────────────────────────────────────────────

function PrivacyPage() {
  const [active] = useActiveSection(PRIVACY_SECTIONS);
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <Sidebar sections={PRIVACY_SECTIONS} active={active} />
      <div className="legal-main" style={{ flex: 1, paddingLeft: 56, minWidth: 0 }}>
        <PageHero
          eyebrow="MYACCESS PRIVATE LIMITED"
          title={"Privacy\nPolicy"}
          subtitle="This Privacy Policy explains how MYACCESS PRIVATE LIMITED collects, uses, stores, and protects your personal information when you apply for roles, participate in internships, or interact with our services."
          meta={[
            { label: "Effective Date", value: "September 28, 2021" },
            { label: "Jurisdiction", value: "Andhra Pradesh, India" },
            { label: "Last Updated", value: "2026" },
          ]}
        />

        <Section id="p-overview" num="01" title="Overview">
          <P>MYACCESS PRIVATE LIMITED is committed to protecting the privacy and personal data of all individuals who engage with our organization — including job applicants, interns, employees, clients, and website visitors.</P>
          <P>This Policy applies to all personal data collected through our careers portal, internship applications, employment processes, and any direct communication with MYACCESS.</P>
          <P>By submitting an application or engaging with MYACCESS, you consent to the practices described in this Policy. This Policy is governed by applicable Indian data protection laws.</P>
        </Section>

        <Section id="p-collection" num="02" title="Data We Collect">
          <P>We collect the following categories of personal information:</P>
          <Ul items={[
            "Identity data: full name, date of birth, nationality, gender.",
            "Contact data: email address, phone number, residential address.",
            "Educational data: institutions attended, qualifications, grades, transcripts.",
            "Professional data: work experience, skills, certifications, resume/CV.",
            "Application data: cover letters, portfolio links, references.",
            "Technical assessment data: test results, coding submissions, project work.",
            "Communication data: emails, messages, and notes from interviews or interactions.",
            "Usage data: IP address, browser type, and page interactions if you use our website.",
          ]} />
          <P>We collect only what is necessary for the specific purpose of evaluating your application or managing your engagement.</P>
        </Section>

        <Section id="p-use" num="03" title="How We Use Your Data">
          <P>Your personal data is used for the following legitimate purposes:</P>
          <Ul items={[
            "Reviewing and processing your job or internship application.",
            "Communicating with you regarding your application status, interviews, and offers.",
            "Assessing your suitability for current and future roles or programs.",
            "Onboarding and managing your employment or internship engagement.",
            "Complying with applicable legal and regulatory obligations.",
            "Improving our recruitment processes through internal analytics.",
            "Preventing fraud and ensuring the accuracy of application information.",
          ]} />
          <P>We will not use your data for automated decision-making that produces legal or similarly significant effects without your explicit consent.</P>
        </Section>

        <Section id="p-storage" num="04" title="Storage & Security">
          <P>Your personal data is stored on secure servers with appropriate technical and organizational safeguards, including access controls, encryption, and regular security reviews.</P>
          <P>Access to personal data is restricted to authorized MYACCESS personnel who require it to fulfill their job responsibilities. All staff with access to personal data are bound by confidentiality obligations.</P>
          <P>While we implement robust security measures, no system is entirely immune to risk. In the event of a data breach that poses a risk to your rights, we will notify you promptly in accordance with applicable law.</P>
        </Section>

        <Section id="p-sharing" num="05" title="Data Sharing">
          <P>MYACCESS does <B>not sell, rent, or trade</B> your personal data to third parties.</P>
          <P>Your data may only be shared in the following limited circumstances:</P>
          <Ul items={[
            "With internal teams directly involved in the recruitment or management process.",
            "With trusted service providers (e.g., background verification agencies) under strict confidentiality agreements.",
            "As required by applicable law, court order, or regulatory authority.",
            "In the event of a merger or acquisition, where data may be transferred to a successor entity under equivalent protections.",
          ]} />
        </Section>

        <Section id="p-retention" num="06" title="Retention Period">
          <P>We retain personal data only for as long as necessary for the purpose for which it was collected:</P>
          <Ul items={[
            "Unsuccessful applications: up to 24 months from submission date, for future consideration.",
            "Successful applications: retained as part of the employment/internship record for the duration of engagement and 5 years thereafter.",
            "Interview and assessment notes: up to 12 months.",
            "Correspondence: up to 24 months.",
          ]} />
          <P>You may request earlier deletion of your data at any time by contacting us at <B>careers@myaccessio.com</B>.</P>
        </Section>

        <Section id="p-rights" num="07" title="Your Rights">
          <P>Under applicable Indian data protection law, you have the following rights with respect to your personal data:</P>
          <Ul items={[
            "Right of Access: request a copy of the personal data MYACCESS holds about you.",
            "Right to Rectification: request correction of inaccurate or incomplete data.",
            "Right to Erasure: request deletion of your data, subject to legal obligations.",
            "Right to Restriction: request that we limit the processing of your data in certain circumstances.",
            "Right to Object: object to processing of your data for specific purposes.",
            "Right to Portability: request your data in a portable, machine-readable format.",
          ]} />
          <P>To exercise any of these rights, email us at <B>careers@myaccessio.com</B>. We will respond within <B>5 business days</B>.</P>
        </Section>

        <Section id="p-cookies" num="08" title="Cookies">
          <P>Our website may use essential cookies to ensure basic functionality, such as session management and security. We do not use third-party tracking or advertising cookies.</P>
          <P>You may disable cookies in your browser settings. Note that disabling cookies may affect the functionality of certain parts of our website.</P>
        </Section>

        <Section id="p-children" num="09" title="Minors">
          <P>Our services are not directed at individuals under the age of 18 without appropriate parental or guardian consent. We do not knowingly collect personal data from minors without verified consent.</P>
          <P>If you believe we have inadvertently collected data from a minor, please contact us immediately at <B>careers@myaccessio.com</B> and we will take prompt corrective action.</P>
        </Section>

        <Section id="p-changes" num="10" title="Policy Changes">
          <P>MYACCESS reserves the right to update this Privacy Policy at any time. Changes will be published on our website with an updated effective date. Continued engagement with MYACCESS after changes are published constitutes acceptance of the revised Policy.</P>
          <P>For significant changes, we will make reasonable efforts to notify affected individuals directly via email.</P>
        </Section>

        <Section id="p-contact" num="11" title="Contact">
          <P>For privacy-related questions, data requests, or concerns, contact us at:</P>
<div className="legal-contact-grid" style={{ gap: 12, marginBottom: 16 }}>
            {[
              { label: "Privacy Queries", value: "careers@myaccessio.com", href: "mailto:careers@myaccessio.com" },
              { label: "Phone", value: "+91 7674014444" },
              { label: "Address", value: "Visakhapatnam, Andhra Pradesh, India" },
              { label: "Website", value: "myaccess.cloud", href: "https://myaccess.cloud" },
            ].map(item => (
              <div key={item.label} style={{ padding: "14px 16px", border: "1px solid #EBEBЕ7", borderLeft: "2px solid #0A0A08", borderRadius: 3 }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#C8C8C4", marginBottom: 4 }}>{item.label}</div>
                {item.href
                  ? <a href={item.href} style={{ fontSize: 13, fontWeight: 600, color: "#0A0A08", textDecoration: "none" }}>{item.value}</a>
                  : <span style={{ fontSize: 13, fontWeight: 500, color: "#2E2E2A" }}>{item.value}</span>}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

// ─── FAQ PAGE ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: "1px solid #EBEBЕ7",
      transition: "background .2s",
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", background: "none", border: "none",
          padding: "22px 0", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          gap: 20, textAlign: "left", fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: open ? 700 : 500, color: "#0A0A08", lineHeight: 1.5, flex: 1 }}>{q}</span>
        <span style={{
          flexShrink: 0, width: 24, height: 24,
          border: "1px solid #E0E0DC",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14,  fontWeight: 300,
          transition: "all .2s",
          background: open ? "#0A0A08" : "transparent",
          color: open ? "#fff" : "#0A0A08",
          marginTop: 2,
        }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 22, paddingRight: 44 }}>
          <p style={{ fontSize: 14.5, lineHeight: 1.88, color: "#4A4A46" }}>{a}</p>
        </div>
      )}
    </div>
  );
}

function FAQPage() {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(16px)", transition: "opacity .55s, transform .55s" }}>
      <PageHero
        eyebrow="MYACCESS PRIVATE LIMITED"
        title={"Frequently Asked\nQuestions"}
        subtitle="Answers to the most common questions about our internship programs, job applications, technology, and data practices."
        meta={[
          { label: "Programs", value: "6 Internship Tracks" },
          { label: "Open Roles", value: "6 Full-time Positions" },
          { label: "Location", value: "Visakhapatnam, India" },
        ]}
      />

      <div style={{ paddingTop: 48 }}>
        {FAQ_DATA.map((cat, ci) => (
          <div key={ci} style={{ marginBottom: 56 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 16,
              marginBottom: 8, paddingBottom: 16,
              borderBottom: "2px solid #0A0A08",
            }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 11, fontWeight: 600, color: "#C8C8C4", letterSpacing: "1px",
              }}>0{ci + 1}</span>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(18px, 2vw, 24px)",
                fontWeight: 700, color: "#0A0A08", letterSpacing: "-.3px",
              }}>{cat.category}</h2>
              <span style={{ marginLeft: "auto", fontSize: 11, color: "#C8C8C4", fontWeight: 600 }}>{cat.items.length} questions</span>
            </div>
            {cat.items.map((item, ii) => (
              <FAQItem key={ii} q={item.q} a={item.a} />
            ))}
          </div>
        ))}

        {/* Still have questions */}
        <div style={{
          marginTop: 16, marginBottom: 64,
          padding: "40px 44px",
          border: "1px solid #EBEBЕ7",
          borderLeft: "3px solid #0A0A08",
          borderRadius: 4,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 20,
        }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 700, color: "#0A0A08", marginBottom: 6 }}>Still have questions?</div>
            <p style={{ fontSize: 14, color: "#6A6A66", lineHeight: 1.7 }}>Reach out directly — we respond within 5 business days.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:careers@myaccessio.com" style={{
              display: "inline-block", background: "#0A0A08", color: "#fff",
              padding: "11px 24px", borderRadius: 3, textDecoration: "none",
              fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
              transition: "opacity .18s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = ".8"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >Email Careers</a>
            <a href="mailto:internships@myaccessio.com" style={{
              display: "inline-block", background: "transparent", color: "#0A0A08",
              padding: "11px 24px", borderRadius: 3, textDecoration: "none",
              fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
              border: "1px solid #E0E0DC", transition: "all .18s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#0A0A08"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0A0A08"; }}
            >Email Internships</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

const PAGES = [
  { id: "terms",   label: "Terms & Conditions" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "faq",     label: "FAQ" },
];

export default function LegalPages() {
  const location = useLocation();
  const initialTab = location.state?.tab || "terms";
  const [page, setPage] = useState(initialTab);
  const navigate = useNavigate();

  // Sync if navigated to with a new state (e.g. back/forward)
  useEffect(() => {
    if (location.state?.tab) setPage(location.state.tab);
  }, [location.state?.tab]);

  // Reset scroll on tab change
  useEffect(() => { window.scrollTo({ top: 0 }); }, [page]);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FFFFFF", color: "#0A0A08", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
       html{scroll-behavior:auto}
        ::selection{background:#0A0A08;color:#fff}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#F8F8F6}
        ::-webkit-scrollbar-thumb{background:#D0D0CC;border-radius:2px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}

        /* ── RESPONSIVE ── */
        .legal-sidebar { display: block; }
        .legal-main { padding-left: 56px !important; }
        .legal-header-inner { padding: 0 48px !important; }
        .legal-content-wrap { padding: 0 48px !important; }
        .legal-bottom-bar { padding: 24px 48px !important; }
        .legal-tabs { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .legal-tabs::-webkit-scrollbar { display: none; }
        .legal-date { display: block; }

        @media (max-width: 900px) {
          .legal-sidebar { display: none !important; }
          .legal-main { padding-left: 0 !important; }
          .legal-header-inner { padding: 0 8px !important; }
          .legal-content-wrap { padding: 0 20px !important; }
          .legal-bottom-bar { padding: 20px !important; }
          .legal-date { display: none !important; }
        }

       @media (max-width: 600px) {
  .legal-tabs button { padding: 0 12px !important; font-size: 11.5px !important; white-space: nowrap; }
  .legal-contact-grid { grid-template-columns: 1fr !important; }
  .legal-hero-meta { flex-wrap: wrap; gap: 14px !important; }
  .legal-faq-cta { flex-direction: column !important; align-items: flex-start !important; }
  
  /* Mobile lo button and logo adjust avvadaniki */
  .legal-header-inner { gap: 10px !important; justify-content: space-between; }
  .legal-tabs { padding-left: 10px !important; }
  .legal-date { display: none !important; } /* Mobile lo date ni hide chesthe space save avthundi */
  
  /* Button size inka tagginchu mobile lo */
  .legal-header-inner a { padding: 6px 10px !important; font-size: 9px !important; }
}
    .legal-header-inner { 
    padding: 0 1rem !important; 
    gap: 0.5rem !important; 
    justify-content: space-between; 
  }

  /* Hide the "LEGAL" text and separator on small mobiles to save space */
  .legal-header-inner span[style*="text-transform: uppercase"],
  .legal-header-inner span[style*="width: 1"] {
    display: none !important;
  }

  /* Shrink the logo size slightly */
  .legal-header-inner img {
    height: 14px !important;
  }

  /* Reduce button size significantly */
  .legal-header-inner button {
    padding: 6px 8px !important;
    font-size: 8px !important;
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* Tab scrolling fix */
  .legal-tabs { 
    padding-left: 0.5rem !important; 
    mask-image: linear-gradient(to right, black 80%, transparent 100%);
  }
  
  .legal-tabs button { 
    padding: 0 10px !important; 
    font-size: 11px !important; 
  }

  /* Fix Section Gaps */
  section {
    padding: 10px 0 !important; /* Reduced from 64px */
  }
    /* Add this OUTSIDE the media query (Default Desktop) */
.legal-contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

/* Ensure this is INSIDE the @media (max-width: 600px) block */
@media (max-width: 600px) {
  .legal-contact-grid { 
    grid-template-columns: 1fr !important; 
  }
}
      `}</style>

      {/* ── TOP BAR ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: "#FFFFFF", borderBottom: "1px solid #EBEBЕ7",
        height: 58,
      }}>
        <div className="legal-header-inner" style={{
          maxWidth: 1400, margin: "0 auto", padding: "0 48px",
          height: "100%", display: "flex", alignItems: "center", gap: 24,
        }}>
          {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0, textDecoration: "none" }}>
  <img src="/assets/MYACCESS DOT.svg" alt="MYACCESS" style={{ height: 17 }} />
  <span style={{ width: 1, height: 14, background: "#E0E0DC", display: "block" }} />
  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#9A9A96" }}>Legal</span>
</Link>


          {/* Tab nav */}
          <nav className="legal-tabs" style={{ display: "flex", gap: 0, borderLeft: "1px solid #EBEBЕ7", paddingLeft: 24, flex: 1, overflow: "hidden" }}>
            {PAGES.map(p => (
              <button
                key={p.id}
                onClick={() => setPage(p.id)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "0 18px", height: 58,
                  fontSize: 12.5, fontWeight: page === p.id ? 700 : 500,
                  color: page === p.id ? "#0A0A08" : "#9A9A96",
                  fontFamily: "'DM Sans', sans-serif",
                  borderBottom: page === p.id ? "2px solid #0A0A08" : "2px solid transparent",
                  transition: "all .18s",
                  letterSpacing: ".2px",
                  marginBottom: "-1px",
                }}
                onMouseEnter={e => { if (page !== p.id) e.currentTarget.style.color = "#0A0A08"; }}
                onMouseLeave={e => { if (page !== p.id) e.currentTarget.style.color = "#9A9A96"; }}
              >{p.label}</button>
            ))}
          </nav>
     {/* Change Link to button for true 'Back' behavior */}
<button 
  onClick={() => navigate(-1)} 
  style={{
    background: "none",
    border: "1px solid #151411",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: "700",
    color: "#0d0c09",
    letterSpacing: "1px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    textTransform: "uppercase",
    transition: "all 0.2s",
    outline: "none"
  }}
  onMouseEnter={e => { e.currentTarget.style.background = "#9B7E3E"; e.currentTarget.style.color = "#fff"; }}
  onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#151411"; }}
>
  ← MYACCESS.COM
</button>

          {/* Date */}
          <span className="legal-date" style={{ fontSize: 11, color: "#C8C8C4", letterSpacing: ".3px", flexShrink: 0 }}>Last updated: 2026</span>
        </div>
      </header>

      {/* ── CONTENT ── */}
      <div style={{ paddingTop: 58 }}>
        <div className="legal-content-wrap" style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px" }}>
          {page === "terms"   && <TermsPage />}
          {page === "privacy" && <PrivacyPage />}
          {page === "faq"     && <FAQPage />}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        borderTop: "1px solid #EBEBЕ7", marginTop: 0,
        padding: "24px 48px",
        maxWidth: 1400, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ fontSize: 12, color: "#C8C8C4" }}>© 2021 MYACCESS PRIVATE LIMITED. All rights reserved.</span>
        <div style={{ display: "flex", gap: 20 }}>
          {PAGES.map(p => (
            <button key={p.id} onClick={() => { setPage(p.id); window.scrollTo({ top: 0 }); }}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, color: "#C8C8C4", fontFamily: "'DM Sans', sans-serif", transition: "color .15s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#0A0A08"}
              onMouseLeave={e => e.currentTarget.style.color = "#C8C8C4"}
            >{p.label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}