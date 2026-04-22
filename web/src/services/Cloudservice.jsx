import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  .cloud-page {font-family: 'DM Sans', sans-serif;background: #FAFAF8;color: #0D0D0D;overflow-x: hidden;width: 100%;}
  .cloud-page h1, .cloud-page h2, .cloud-page h3, .cloud-page h4 {font-family: 'Poppins', sans-serif;}

  /* ── HERO ── */
  .c-hero {width: 100%;min-height: 100vh;background: #0D0D0D;display: grid;grid-template-columns: 55% 45%;position: relative;overflow: hidden;}
  .c-hero-bg {position: absolute;inset: 0;background-image: radial-gradient(circle at 70% 50%, rgba(255,92,0,0.08) 0%, transparent 60%);pointer-events: none;}
  .c-hero-left {padding: 11vh 5vw 8vh 7vw;display: flex;flex-direction: column;justify-content: center;position: relative;z-index: 2;}
  .c-tag {display: inline-flex;align-items: center;gap: 0.5rem;background: rgba(255,92,0,0.15);border: 1px solid rgba(255,92,0,0.4);color: #FF5C00;font-family: 'Poppins', sans-serif;font-size: clamp(0.6rem, 0.9vw, 0.72rem);font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 0.45rem 1rem;
    border-radius: 30px;
    margin-bottom: 2vh;
    width: fit-content;
  }
  .c-hero-h1 {font-family: 'Poppins', sans-serif;font-size: clamp(2.4rem, 4.5vw, 5rem);font-weight: 800;color: #FAFAF8;line-height: 1.08;margin-bottom: 2.5vh;letter-spacing: -0.02em;}
  .c-hero-h1 span { color: #FF5C00; }
  .c-hero-sub {font-size: clamp(0.88rem, 1.2vw, 1.05rem);color: #888884;line-height: 1.85;max-width: 46ch;margin-bottom: 1.5vh;}

  .c-hero-points {
    display: flex;
    flex-direction: column;
    gap: 0.6vh;
    margin-bottom: 3.5vh;
  }

  .c-pt {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: clamp(0.78rem, 1vw, 0.88rem);
    color: #AEADA8;
  }

  .c-pt-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #FF5C00;
    flex-shrink: 0;
  }

  .c-btns { display: flex; gap: 1rem; flex-wrap: wrap; }

  .btn-org {
    background: #FF5C00;
    color: #FAFAF8;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: clamp(0.78rem, 1vw, 0.88rem);
    padding: 0.85rem 2rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    letter-spacing: 0.04em;
    transition: background 0.25s, transform 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-org:hover { background: #FF7A2B; transform: translateY(-2px); }

  .btn-wht {
    background: transparent;
    color: #888884;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(0.78rem, 1vw, 0.88rem);
    padding: 0.85rem 2rem;
    border: 1px solid #2C2C2A;
    cursor: pointer;
    border-radius: 4px;
    letter-spacing: 0.04em;
    transition: border-color 0.25s, color 0.25s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-wht:hover { border-color: #FF5C00; color: #FF5C00; }

  .c-hero-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6vh 7vw 6vh 4vw;
    gap: 1.5vh;
    position: relative;
    z-index: 2;
  }

  .c-stat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2vh 1.2vw;
  }

  .c-stat-box {
    background: #1A1A18;
    border: 1px solid #2C2C2A;
    border-radius: 10px;
    padding: 2vh 1.5vw;
    transition: border-color 0.25s;
    cursor: default;
  }
  .c-stat-box:hover { border-color: #FF5C00; }

  .c-stat-val {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 2.8vw, 2.6rem);
    font-weight: 800;
    color: #FF5C00;
    line-height: 1;
    margin-bottom: 0.4rem;
  }

  .c-stat-lbl {
    font-size: clamp(0.68rem, 0.85vw, 0.78rem);
    color: #555552;
    font-weight: 500;
    line-height: 1.4;
  }

  .c-platforms {
    background: #1A1A18;
    border: 1px solid #2C2C2A;
    border-radius: 10px;
    padding: 2vh 1.5vw;
  }

  .c-plat-label {
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #555552;
    margin-bottom: 1.2vh;
  }

  .c-plat-row {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  .c-plat-chip {
    background: #222220;
    border: 1px solid #333330;
    border-radius: 6px;
    padding: 0.4rem 0.9rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: #AEADA8;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .c-plat-dot { width: 6px; height: 6px; border-radius: 50%; background: #28C840; }

  /* ── MARQUEE ── */
  .c-marquee {
    background: #FF5C00;
    padding: 1.2vh 0;
    overflow: hidden;
    width: 100%;
  }

  .c-marquee-track {
    display: flex;
    gap: 0;
    animation: cmq 28s linear infinite;
    white-space: nowrap;
  }

  .c-marquee-item {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0 2.5rem;
    font-family: 'Poppins', sans-serif;
    font-size: clamp(0.65rem, 0.9vw, 0.75rem);
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.85);
    flex-shrink: 0;
    border-right: 1px solid rgba(255,255,255,0.2);
  }

  @keyframes cmq { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

  /* ── SERVICES ── */
  .c-services {
    width: 100%;
    padding: 8vh 7vw;
    background: #FAFAF8;
  }

  .c-sec-top {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 4vw;
    align-items: end;
    margin-bottom: 5vh;
  }

  .c-sec-label {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(0.6rem, 0.8vw, 0.7rem);
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #FF5C00;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.8vh;
  }

  .c-sec-label::before {
    content: '';
    display: block;
    width: 1.8rem;
    height: 2px;
    background: #FF5C00;
  }

  .c-sec-h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 2.8vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .c-sec-desc {
    font-size: clamp(0.85rem, 1.1vw, 0.98rem);
    color: #6B6B65;
    line-height: 1.85;
  }

  .c-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5vw;
  }

  .c-card {
    background: #F2F2F0;
    border: 1px solid #E0DED9;
    border-radius: 12px;
    padding: 2.5vh 1.8vw;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
    cursor: default;
  }

  .c-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(255,92,0,0.1);
    border-color: #FF5C00;
  }

  .c-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #FF5C00, transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .c-card:hover::after { opacity: 1; }

  .c-card-n {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.8rem, 2.5vw, 2.2rem);
    font-weight: 900;
    color: #E0DED9;
    line-height: 1;
    margin-bottom: 1vh;
  }

  .c-card-ico {
    width: 2.4rem; height: 2.4rem;
    background: #0D0D0D;
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.2vh;
  }

  .c-card-ico svg { width: 1.1rem; height: 1.1rem; color: #FF5C00; }

  .c-card-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: clamp(0.88rem, 1.15vw, 1rem);
    margin-bottom: 0.8vh;
  }

  .c-card-text {
    font-size: clamp(0.78rem, 0.95vw, 0.88rem);
    color: #6B6B65;
    line-height: 1.75;
  }

  .c-card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 1.2vh;
  }

  .c-card-tag {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    padding: 0.25rem 0.6rem;
    background: #fff;
    border: 1px solid #E0DED9;
    border-radius: 20px;
    color: #888884;
  }

  /* ── SPLIT FEATURE ── */
  .c-split {
    width: 100%;
    background: #0D0D0D;
    padding: 8vh 7vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6vw;
    align-items: center;
  }

  .c-split-left {}

  .c-split-h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 2.8vw, 2.8rem);
    font-weight: 800;
    color: #FAFAF8;
    line-height: 1.18;
    margin-bottom: 2vh;
    letter-spacing: -0.02em;
  }

  .c-split-h2 span { color: #FF5C00; }

  .c-split-body {
    font-size: clamp(0.83rem, 1.05vw, 0.95rem);
    color: #555552;
    line-height: 1.9;
    margin-bottom: 3vh;
  }

  .c-split-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1vw;
  }

  .c-ss {
    border-left: 2px solid #FF5C00;
    padding-left: 1rem;
  }

  .c-ss-val {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.4rem, 2.2vw, 2rem);
    font-weight: 800;
    color: #FF5C00;
    line-height: 1;
    margin-bottom: 0.3rem;
  }

  .c-ss-lbl { font-size: clamp(0.65rem, 0.85vw, 0.75rem); color: #555552; font-weight: 500; }

  .c-split-right {
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
  }

  .c-feat-row {
    background: #1A1A18;
    border: 1px solid #2C2C2A;
    border-radius: 10px;
    padding: 2vh 1.5vw;
    display: flex;
    gap: 1.2rem;
    align-items: flex-start;
    transition: border-color 0.25s, transform 0.25s;
    cursor: default;
  }

  .c-feat-row:hover { border-color: #FF5C00; transform: translateX(4px); }

  .c-feat-ico {
    width: 2.2rem; height: 2.2rem;
    border-radius: 6px;
    background: rgba(255,92,0,0.12);
    border: 1px solid rgba(255,92,0,0.25);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .c-feat-ico svg { width: 1rem; height: 1rem; color: #FF5C00; }

  .c-feat-t { font-family: 'Poppins', sans-serif; font-weight: 600; font-size: clamp(0.82rem, 1vw, 0.92rem); color: #FAFAF8; margin-bottom: 0.3rem; }
  .c-feat-d { font-size: clamp(0.75rem, 0.9vw, 0.83rem); color: #555552; line-height: 1.65; }

  /* ── PROCESS ── */
  .c-process {
    width: 100%;
    padding: 8vh 7vw;
    background: #FAFAF8;
  }

  .c-process-head {
    text-align: center;
    margin-bottom: 5vh;
  }

  .c-process-head .c-sec-label { justify-content: center; }
  .c-process-head .c-sec-label::before { display: none; }

  .c-process-h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 2.8vw, 2.8rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-top: 0.5rem;
  }

  .c-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2vw;
    position: relative;
  }

  .c-steps::before {
    content: '';
    position: absolute;
    top: 2.2rem;
    left: 12.5%;
    right: 12.5%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #E0DED9, transparent);
  }

  .c-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 1vw;
  }

  .c-step-num {
    width: 4.4rem; height: 4.4rem;
    border-radius: 50%;
    border: 2px solid #E0DED9;
    background: #FAFAF8;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: #0D0D0D;
    margin-bottom: 2vh;
    transition: background 0.3s, border-color 0.3s, color 0.3s;
    cursor: default;
  }

  .c-step:hover .c-step-num { background: #FF5C00; border-color: #FF5C00; color: #fff; }

  .c-step-t { font-family: 'Poppins', sans-serif; font-weight: 700; font-size: clamp(0.85rem, 1.1vw, 0.95rem); margin-bottom: 0.8vh; }
  .c-step-d { font-size: clamp(0.75rem, 0.9vw, 0.83rem); color: #6B6B65; line-height: 1.7; }

  /* ── TECH GRID ── */
  .c-tech {
    width: 100%;
    background: #F2F2F0;
    padding: 8vh 7vw;
  }

  .c-tech-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 4vh;
    flex-wrap: wrap;
    gap: 2vh;
  }

  .c-tech-h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.4rem, 2.2vw, 2.2rem);
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .c-tech-sub { font-size: clamp(0.8rem, 1vw, 0.9rem); color: #6B6B65; max-width: 40ch; text-align: right; line-height: 1.6; }

  .c-tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1rem;
  }

  .c-tech-chip {
    background: #FAFAF8;
    border: 1px solid #E0DED9;
    border-radius: 10px;
    padding: 1.8vh 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
    cursor: default;
  }

  .c-tech-chip:hover {
    border-color: #FF5C00;
    box-shadow: 0 6px 20px rgba(255,92,0,0.1);
    transform: translateY(-3px);
  }

  .c-tech-chip-ico { font-size: 1.5rem; }
  .c-tech-chip-name { font-family: 'Poppins', sans-serif; font-size: 0.75rem; font-weight: 700; text-align: center; }
  .c-tech-chip-cat { font-size: 0.65rem; color: #888884; text-align: center; }

  /* ── CTA ── */
  .c-cta {
    width: 100%;
    background: #0D0D0D;
    padding: 10vh 7vw;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
    gap: 4vw;
    position: relative;
    overflow: hidden;
  }

  .c-cta::before {
    content: '';
    position: absolute;
    right: -5%;
    top: -50%;
    width: 40%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 60px solid rgba(255,92,0,0.06);
    pointer-events: none;
  }

  .c-cta-h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 2.8vw, 2.8rem);
    font-weight: 800;
    color: #FAFAF8;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  .c-cta-h2 span { color: #FF5C00; }

  .c-cta-body { font-size: clamp(0.8rem, 1vw, 0.9rem); color: #555552; line-height: 1.8; margin-top: 1.5vh; }

  .c-cta-right {
    display: flex;
    flex-direction: column;
    gap: 1.2vh;
    align-items: flex-start;
  }

  .c-cta-pts { display: flex; flex-direction: column; gap: 0.8vh; margin-bottom: 2vh; }

  .c-cta-pt {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    font-size: clamp(0.78rem, 0.95vw, 0.88rem);
    color: #888884;
  }

  .c-cta-check { color: #FF5C00; font-size: 0.9rem; font-weight: 700; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .c-cards { grid-template-columns: 1fr 1fr; }
    .c-split { grid-template-columns: 1fr; }
    .c-cta { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .c-hero { 
      grid-template-columns: 1fr; 
      min-height: auto; 
    }
    .c-hero-right { display: none; }
    .c-hero-left { padding: 5rem 6vw 5vh; }
    .c-hero-h1 {
      font-size: 2.5rem; 
      margin-top: 1rem;
    }
    .c-sec-top { grid-template-columns: 1fr; }
    .c-steps { grid-template-columns: 1fr 1fr; }
    .c-steps::before { display: none; }
    .c-split-stats { grid-template-columns: 1fr 1fr; }
    .c-tech-top { flex-direction: column; align-items: flex-start; }
    .c-tech-sub { text-align: left; }
  }

  @media (max-width: 540px) {
    .c-cards { grid-template-columns: 1fr; }
    .c-steps { grid-template-columns: 1fr; }
    .c-services { padding: 6vh 5vw; }
    .c-tech { padding: 6vh 5vw; }
    .c-process { padding: 6vh 5vw; }
    .c-split { padding: 6vh 5vw; }
    .c-cta { padding: 7vh 5vw; }
  }
`;

const services = [
  {
    n: "01", title: "Cloud Architecture & Design",
    text: "We design highly available, fault-tolerant, multi-tier architectures on AWS, Azure, and GCP — tailored to your product load, compliance requirements, and growth trajectory. Every design is documented with cost estimates and trade-offs.",
    tags: ["AWS", "Azure", "GCP", "Well-Architected"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-4V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6H2l10 10 10-10z"/></svg>
  },
  {
    n: "02", title: "Security & Compliance",
    text: "IAM hardening, VPC segmentation, encryption at rest/transit, and automated compliance audits. We align your infra with SOC 2 Type II, ISO 27001, HIPAA, and GDPR frameworks — with ongoing evidence collection.",
    tags: ["SOC 2", "ISO 27001", "HIPAA", "Zero-Trust"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  },
  {
    n: "03", title: "Cloud Migration",
    text: "Phased migration of legacy workloads using the 6R strategy (Rehost, Replatform, Refactor, Repurchase, Retire, Retain). We create detailed runbooks, rollback plans, and execute migrations with zero or near-zero downtime.",
    tags: ["Lift & Shift", "Replatform", "Refactor"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
  },
  {
    n: "04", title: "Kubernetes & Containers",
    text: "EKS, AKS, and GKE cluster provisioning, Helm chart authoring, pod autoscaling (HPA/VPA/KEDA), namespace governance, and multi-cluster federation. We handle everything from base cluster to production-grade workload orchestration.",
    tags: ["EKS", "AKS", "GKE", "Helm", "KEDA"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
  },
  {
    n: "05", title: "24×7 Managed Monitoring",
    text: "Full-stack observability with Prometheus, Grafana, CloudWatch, and Datadog. We configure dashboards, SLO/SLA tracking, anomaly detection, and on-call escalation runbooks — ensuring your team sleeps through the night.",
    tags: ["Prometheus", "Grafana", "Datadog", "PagerDuty"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  },
  {
    n: "06", title: "Cost Optimisation",
    text: "Continuous rightsizing, reserved instance planning, savings plans, spot fleet management, and unused resource cleanup. Clients average 35–45% cloud bill reduction within the first 90 days of engagement.",
    tags: ["Reserved Instances", "Spot Fleet", "FinOps"],
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  }
];

const feats = [
  {
    title: "Infrastructure as Code — Everything",
    desc: "Every resource we create is codified in Terraform or Pulumi, committed to your repo, and peer-reviewed — infrastructure is never click-ops.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  },
  {
    title: "Multi-Cloud & Hybrid Support",
    desc: "Portable cloud-agnostic patterns spanning AWS, Azure, and GCP simultaneously — avoid vendor lock-in and architect for flexibility from day one.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  },
  {
    title: "Disaster Recovery & Business Continuity",
    desc: "RPO/RTO-aligned DR blueprints with automated failover, cross-region replication, and quarterly DR drills to guarantee recoverability when it matters most.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  },
  {
    title: "Dedicated Cloud Engineer — Embedded",
    desc: "You get a named cloud engineer embedded in your team Slack, attending standups, and accountable for your infra — not a shared support queue.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  }
];

const steps = [
  { n: "01", t: "Discovery & Audit", d: "We audit your existing infrastructure, document gaps, review costs, and define a clear engagement scope with deliverables and timelines." },
  { n: "02", t: "Architecture Blueprint", d: "A detailed architecture document with diagrams, cost models, security posture, and a phased implementation roadmap is delivered for your review." },
  { n: "03", t: "Implementation", d: "We build and deploy your cloud environment using IaC, with every change going through PR review, automated testing, and staged rollouts." },
  { n: "04", t: "Ongoing Management", d: "Continuous monitoring, monthly optimisation reports, quarterly architecture reviews, and 24×7 incident response — we stay with you." },
];

const techStack = [
  { ico: "☁️", name: "AWS", cat: "Cloud" },
  { ico: "🔷", name: "Azure", cat: "Cloud" },
  { ico: "🌐", name: "GCP", cat: "Cloud" },
  { ico: "🐳", name: "Docker", cat: "Containers" },
  { ico: "☸️", name: "Kubernetes", cat: "Orchestration" },
  { ico: "🌍", name: "Terraform", cat: "IaC" },
  { ico: "📜", name: "Ansible", cat: "Automation" },
  { ico: "📊", name: "Grafana", cat: "Observability" },
  { ico: "📈", name: "Prometheus", cat: "Monitoring" },
  { ico: "🐶", name: "Datadog", cat: "APM" },
  { ico: "🔒", name: "Vault", cat: "Secrets" },
  { ico: "⚡", name: "Pulumi", cat: "IaC" },
];

export default function CloudPage() {
  const [hovered, setHovered] = useState(null);
  const mqItems = ["Infrastructure as Code","Cloud Migration","Cost Optimisation","Security & Compliance","Multi-Cloud","24×7 Monitoring","Disaster Recovery","Kubernetes & EKS","FinOps"];

  return (
    <div className="cloud-page">
      <style>{style}</style>
      <Header />

      {/* HERO */}
      <section className="c-hero">
        <div className="c-hero-bg" />
        <div className="c-hero-left">
          <div className="c-tag">☁ Cloud Support Services</div>
          <h1 className="c-hero-h1">Your Project.<br />Our <span>Cloud</span><br />Backbone.</h1>
          <p className="c-hero-sub">We embed directly into your project team and deliver end-to-end cloud infrastructure support — from architecture and migration to security, cost control, and round-the-clock reliability.</p>
          <div className="c-hero-points">
            {["AWS, Azure & GCP Certified Engineers","Infrastructure as Code — everything in Git","35–45% average cloud cost reduction","99.9% uptime SLA with 24×7 response","Dedicated engineer in your team Slack"].map(p => (
              <div className="c-pt" key={p}><div className="c-pt-dot" />{p}</div>
            ))}
          </div>
          <div className="c-btns">
            <a href="#services" className="btn-org">Explore Services →</a>
            <a href="#contact" className="btn-wht">Book a Free Audit</a>
          </div>
        </div>
        <div className="c-hero-right">
          <div className="c-stat-grid">
            {[
              { v: "200+", l: "Projects Supported" },
              { v: "99.9%", l: "Uptime SLA Delivered" },
              { v: "40%", l: "Avg Cloud Cost Saved" },
              { v: "<2hr", l: "Incident Response Time" },
            ].map(s => (
              <div className="c-stat-box" key={s.v}>
                <div className="c-stat-val">{s.v}</div>
                <div className="c-stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="c-platforms">
            <div className="c-plat-label">Active Platforms</div>
            <div className="c-plat-row">
              {["AWS","Azure","GCP","Kubernetes","Terraform","Datadog"].map(p => (
                <div className="c-plat-chip" key={p}><div className="c-plat-dot" />{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="c-marquee">
        <div className="c-marquee-track">
          {[...mqItems, ...mqItems].map((i, idx) => (
            <div className="c-marquee-item" key={idx}>◆ {i}</div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="c-services" id="services">
        <div className="c-sec-top">
          <div>
            <div className="c-sec-label">What We Do</div>
            <h2 className="c-sec-h2">Cloud Support<br />That Ships With You</h2>
          </div>
          <p className="c-sec-desc">Every service we provide is embedded into your engineering workflow — not bolted on as an afterthought. We work inside your repo, your sprints, and your Slack — treating your infrastructure as our own.</p>
        </div>
        <div className="c-cards">
          {services.map(s => (
            <div className="c-card" key={s.n}
              onMouseEnter={() => setHovered(s.n)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="c-card-n">{s.n}</div>
              <div className="c-card-ico">{s.icon}</div>
              <div className="c-card-title">{s.title}</div>
              <div className="c-card-text">{s.text}</div>
              <div className="c-card-tags">
                {s.tags.map(t => <span className="c-card-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT FEATURE */}
      <section className="c-split">
        <div className="c-split-left">
          <div className="c-sec-label">Why Partner With Us</div>
          <h2 className="c-split-h2">We Treat Your<br />Infrastructure<br />Like <span>Our Own</span></h2>
          <p className="c-split-body">Most cloud support companies operate as a ticket queue. We don't. Our engineers are named, embedded, and accountable — they attend your standups, contribute to your ADRs, and are measured by your system's performance metrics, not by SLA ticket closure rates. When your app is down at 2AM, so are we.</p>
          <div className="c-split-stats">
            <div className="c-ss"><div className="c-ss-val">200+</div><div className="c-ss-lbl">Projects Delivered</div></div>
            <div className="c-ss"><div className="c-ss-val">99.9%</div><div className="c-ss-lbl">Uptime SLA</div></div>
            <div className="c-ss"><div className="c-ss-val">40%</div><div className="c-ss-lbl">Cost Reduction</div></div>
          </div>
        </div>
        <div className="c-split-right">
          {feats.map(f => (
            <div className="c-feat-row" key={f.title}>
              <div className="c-feat-ico">{f.icon}</div>
              <div>
                <div className="c-feat-t">{f.title}</div>
                <div className="c-feat-d">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="c-process">
        <div className="c-process-head">
          <div className="c-sec-label" style={{justifyContent:'center'}}>How It Works</div>
          <h2 className="c-process-h2">From Onboarding to Production in Days</h2>
        </div>
        <div className="c-steps">
          {steps.map(s => (
            <div className="c-step" key={s.n}>
              <div className="c-step-num">{s.n}</div>
              <div className="c-step-t">{s.t}</div>
              <div className="c-step-d">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH */}
      <section className="c-tech">
        <div className="c-tech-top">
          <div>
            <div className="c-sec-label">Tech Stack</div>
            <h2 className="c-tech-h2">Tools We Live & Breathe</h2>
          </div>
          <p className="c-tech-sub">We're platform-agnostic — our engineers are certified across AWS, Azure, and GCP and work with the best-in-class tooling for each layer.</p>
        </div>
        <div className="c-tech-grid">
          {techStack.map(t => (
            <div className="c-tech-chip" key={t.name}>
              <div className="c-tech-chip-ico">{t.ico}</div>
              <div className="c-tech-chip-name">{t.name}</div>
              <div className="c-tech-chip-cat">{t.cat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="c-cta" id="contact">
        <div>
          <div className="c-sec-label">Get Started</div>
          <h2 className="c-cta-h2">Ready to Move Your<br />Project to <span>the Cloud?</span></h2>
          <p className="c-cta-body">Book a free 45-minute cloud architecture review. Our engineers will audit your current setup, identify risks and cost savings, and outline a concrete roadmap — no commitment required.</p>
        </div>
        <div className="c-cta-right">
          <div className="c-cta-pts">
            {["Free 45-min architecture review","Detailed written recommendations","No commitment or contract required","Response within 24 hours","Certified AWS, Azure & GCP engineers"].map(p => (
              <div className="c-cta-pt" key={p}><span className="c-cta-check">✓</span>{p}</div>
            ))}
          </div>
          <a href="#" className="btn-org">Book Free Cloud Audit →</a>
        </div>
      </section>
      <Footer/>
    </div>
  );
}