import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  .devops-page {
    font-family: 'DM Sans', sans-serif;
    background: #F7F6F3;
    color: #111110;
    overflow-x: hidden;
    width: 100%;
  }

  .devops-page h1, .devops-page h2, .devops-page h3, .devops-page h4 {
    font-family: 'Poppins', sans-serif;
  }

  /* ── HERO ── */
  .d-hero {
    width: 100%;
    min-height: 100vh;
    background: #111110;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    overflow: hidden;
  }

  .d-hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,85,0,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,85,0,0.04) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
  }

  .d-hero-left {
    padding: 15vh 5vw 8vh 7vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
  }

  .d-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-size: clamp(0.6rem, 0.85vw, 0.7rem);
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #FF5500;
    margin-bottom: 2.5vh;
    width: fit-content;
  }

  .d-badge::before {
    content: '';
    display: block;
    width: 2.5rem;
    height: 2px;
    background: #FF5500;
  }

  .d-hero-h1 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2.8rem, 5.5vw, 6rem);
    font-weight: 900;
    color: #F7F6F3;
    line-height: 0.98;
    letter-spacing: -0.03em;
    margin-bottom: 3vh;
  }

  .d-hero-h1 .outline {
    -webkit-text-stroke: 1.5px #FF5500;
    color: transparent;
  }

  .d-hero-desc {
    font-size: clamp(0.88rem, 1.15vw, 1rem);
    color: #777773;
    line-height: 1.85;
    max-width: 46ch;
    margin-bottom: 1.5vh;
  }

  .d-hero-pts {
    display: flex;
    flex-direction: column;
    gap: 0.7vh;
    margin-bottom: 4vh;
  }

  .d-pt {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: 'DM Mono', monospace;
    font-size: clamp(0.7rem, 0.9vw, 0.78rem);
    color: #555552;
  }

  .d-pt-prefix { color: #FF5500; }

  .d-btns { display: flex; gap: 1rem; flex-wrap: wrap; }

  .btn-fire {
    background: #FF5500;
    color: #F7F6F3;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: clamp(0.78rem, 1vw, 0.88rem);
    padding: 0.9rem 2rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    letter-spacing: 0.04em;
    transition: all 0.25s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-fire:hover { background: #FF7033; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,85,0,0.3); }

  .btn-dark {
    background: transparent;
    color: #777773;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: clamp(0.78rem, 1vw, 0.88rem);
    padding: 0.9rem 2rem;
    border: 1px solid #2A2A28;
    cursor: pointer;
    border-radius: 4px;
    letter-spacing: 0.04em;
    transition: all 0.25s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-dark:hover { border-color: #FF5500; color: #FF5500; }

  /* Terminal */
  .d-hero-right {
    display: flex;
    align-items: center;
    padding: 6vh 7vw 6vh 3vw;
    position: relative;
    z-index: 2;
  }

  .d-terminal {
    width: 100%;
    background: #1A1A18;
    border-radius: 10px;
    border: 1px solid #2C2C2A;
    overflow: hidden;
    box-shadow: 0 32px 80px rgba(0,0,0,0.6);
  }

  .d-term-bar {
    background: #222220;
    padding: 0.9rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid #2C2C2A;
  }

  .d-dot { width: 12px; height: 12px; border-radius: 50%; }
  .d-dot.r { background: #FF5F57; }
  .d-dot.y { background: #FEBC2E; }
  .d-dot.g { background: #28C840; }

  .d-term-title {
    font-family: 'DM Mono', monospace;
    font-size: clamp(0.65rem, 0.85vw, 0.72rem);
    color: #555552;
    margin: 0 auto;
    letter-spacing: 0.04em;
  }

  .d-term-body {
    padding: 1.5rem;
    font-family: 'DM Mono', monospace;
    font-size: clamp(0.68rem, 0.88vw, 0.78rem);
    line-height: 2;
  }

  .d-tl { display: flex; gap: 0.5rem; }
  .tp { color: #FF5500; }
  .tc { color: #E8E7E2; }
  .to { color: #555552; padding-left: 1.4rem; }
  .to.ok { color: #28C840; }
  .to.info { color: #58A6FF; }
  .to.warn { color: #FF5500; }
  .to.dim { color: #333332; }

  .d-cursor {
    display: inline-block;
    width: 7px; height: 1.1em;
    background: #FF5500;
    vertical-align: text-bottom;
    animation: blink 1.1s step-end infinite;
  }

  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

/* ── METRICS MARQUEE ── */
  .d-metrics-marquee {
    width: 100%;
    background: #FF5500;
    padding: 2.5vh 0;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  .d-metrics-track {
    display: flex;
    gap: 0;
    animation: metricScroll 30s linear infinite;
    width: max-content;
  }

  .d-metric {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4rem; /* Items madhya gap */
    color: #fff;
    border-right: 1px solid rgba(255,255,255,0.2);
  }

  .d-metric-val {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .d-metric-lab {
    font-size: clamp(0.65rem, 0.8vw, 0.75rem);
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.9;
    margin-top: 0.2rem;
  }
    @keyframes metricScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); } /* Loop point */
  }

  /* ── PIPELINE ── */
  .d-pipeline {
    width: 100%;
    padding: 8vh 7vw;
    background: #F7F6F3;
  }

  .d-sec-top {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 4vw;
    align-items: end;
    margin-bottom: 5vh;
  }

  .d-sec-label {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(0.6rem, 0.8vw, 0.7rem);
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #FF5500;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.8vh;
  }

  .d-sec-label::before { content: ''; display: block; width: 1.8rem; height: 2px; background: #FF5500; }

  .d-sec-h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 2.8vw, 2.8rem);
    font-weight: 800;
    line-height: 1.12;
    letter-spacing: -0.02em;
  }

  .d-sec-desc { font-size: clamp(0.83rem, 1vw, 0.93rem); color: #777773; line-height: 1.85; }

  .d-pipe-row {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.2vw;
  }

  .d-pipe-stage {
    background: #fff;
    border: 1px solid #E0DED9;
    border-radius: 10px;
    padding: 2vh 1.2vw;
    position: relative;
    transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
    cursor: default;
  }

  .d-pipe-stage:hover {
    box-shadow: 0 10px 30px rgba(255,85,0,0.12);
    transform: translateY(-4px);
    border-color: #FF5500;
  }

  .d-ps-badge {
    font-family: 'Poppins', sans-serif;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: #111110;
    color: #F7F6F3;
    padding: 0.2rem 0.6rem;
    border-radius: 3px;
    margin-bottom: 1.2vh;
    display: inline-block;
  }

  .d-ps-badge.active { background: #FF5500; }

  .d-ps-ico {
    width: 2rem; height: 2rem;
    border-radius: 6px;
    background: rgba(255,85,0,0.1);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 0.8vh;
  }

  .d-ps-ico svg { width: 0.9rem; height: 0.9rem; color: #FF5500; }

  .d-ps-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: clamp(0.78rem, 1vw, 0.88rem);
    margin-bottom: 0.4vh;
  }

  .d-ps-tools { font-size: clamp(0.65rem, 0.8vw, 0.72rem); color: #777773; line-height: 1.55; }

  .d-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FF5500;
    font-size: 1.2rem;
    padding: 0 0.3rem;
    align-self: center;
  }

  /* ── BENTO SERVICES ── */
  .d-bento-section {
    width: 100%;
    background: #111110;
    padding: 8vh 7vw;
  }

  .d-bento-section .d-sec-label { margin-bottom: 0.8vh; }
  .d-bento-section .d-sec-h2 { color: #f7f5f3; margin-bottom: 4vh; }

  .d-bento {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 1.2rem;
  }

  .d-bc {
    background: #1A1A18;
    border: 1px solid #2C2C2A;
    border-radius: 12px;
    padding: 2.5vh 1.8vw;
    position: relative;
    overflow: hidden;
    transition: border-color 0.25s;
    cursor: default;
  }

  .d-bc:hover { border-color: #FF5500; }

  .d-bc.wide { grid-column: span 2; }

  .d-bc-n {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 900;
    color: #2A2A28;
    line-height: 1;
    margin-bottom: 0.5vh;
    letter-spacing: -0.03em;
  }

  .d-bc-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: clamp(0.9rem, 1.2vw, 1.05rem);
    color: #FF5500;
    margin-bottom: 0.8vh;
  }

  .d-bc-text { font-size: clamp(0.78rem, 0.95vw, 0.88rem); color: #e9e8e2; line-height: 1.75; }

  .d-bc-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 1.5vh;
  }

  .d-bc-tag {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    padding: 0.25rem 0.6rem;
    border: 1px solid #6c6c69;
    border-radius: 3px;
    color: #AEADA8;
  }
.d-bc:hover .d-bc-tag {
    border-color: #FF5500;
    color: #FF5500;
  }
  /* ── TOOLCHAIN ── */
  .d-tools {
    width: 100%;
    background: #F7F6F3;
    padding: 8vh 7vw;
  }

  .d-tools-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4vw;
    align-items: end;
    margin-bottom: 4vh;
  }

  .d-tools-desc { font-size: clamp(0.83rem, 1vw, 0.92rem); color: #777773; line-height: 1.8; }

  .d-tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 1rem;
  }

  .d-tool-chip {
    background: #fff;
    border: 1px solid #E0DED9;
    border-radius: 10px;
    padding: 2vh 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: border-color 0.25s, transform 0.2s, box-shadow 0.25s;
    cursor: default;
  }

  .d-tool-chip:hover {
    border-color: #FF5500;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255,85,0,0.1);
  }

  .d-tool-ico { font-size: 1.5rem; }
  .d-tool-name { font-family: 'Poppins', sans-serif; font-size: 0.73rem; font-weight: 700; text-align: center; }
  .d-tool-cat { font-size: 0.62rem; color: #888884; text-align: center; }

  /* ── HOW WE WORK ── */
  .d-how {
    width: 100%;
    background: #F0EDE8;
    padding: 8vh 7vw;
  }

  .d-how-head { text-align: center; margin-bottom: 5vh; }
  .d-how-h2 { font-family: 'Poppins', sans-serif; font-size: clamp(1.6rem, 2.8vw, 2.8rem); font-weight: 800; letter-spacing: -0.02em; }

  .d-steps-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5vw;
  }

  .d-step-card {
    background: #fff;
    border: 1px solid #E0DED9;
    border-radius: 10px;
    padding: 2.5vh 1.5vw;
    text-align: center;
    transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
    cursor: default;
  }

  .d-step-card:hover { transform: translateY(-5px); border-color: #FF5500; box-shadow: 0 12px 30px rgba(255,85,0,0.1); }

  .d-step-n {
    width: 3.5rem; height: 3.5rem;
    border-radius: 50%;
    background: #111110;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    color: #FF5500;
    margin: 0 auto 1.5vh;
    transition: background 0.25s;
  }

  .d-step-card:hover .d-step-n { background: #FF5500; color: #fff; }

  .d-step-t { font-family: 'Poppins', sans-serif; font-weight: 700; font-size: clamp(0.82rem, 1vw, 0.9rem); margin-bottom: 0.8vh; }
  .d-step-d { font-size: clamp(0.72rem, 0.88vw, 0.8rem); color: #777773; line-height: 1.7; }

  /* ── CTA ── */
  .d-cta {
    width: 100%;
    background: #111110;
    padding: 10vh 7vw;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4vw;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .d-cta-watermark {
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-size: clamp(5rem, 10vw, 10rem);
    font-weight: 900;
    color: rgba(255,85,0,0.04);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    pointer-events: none;
    letter-spacing: -0.03em;
  }

  .d-cta-h2 { font-family: 'Poppins', sans-serif; font-size: clamp(1.8rem, 3vw, 3rem); font-weight: 900; color: #F7F6F3; letter-spacing: -0.03em; line-height: 1.1; }
  .d-cta-h2 span { color: #FF5500; }
  .d-cta-sub { font-size: clamp(0.83rem, 1vw, 0.93rem); color: #AEADA8; line-height: 1.8; margin-top: 1.5vh; }

  .d-cta-right {
    display: flex;
    flex-direction: column;
    gap: 1vh;
  }

  .d-cta-item {
    background: #1A1A18;
    border: 1px solid #2C2C2A;
    border-radius: 8px;
    padding: 1.5vh 1.2vw;
    font-size: clamp(0.78rem, 0.95vw, 0.88rem);
    color: #AEADA8;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .d-cta-ico { color: #FF5500; font-weight: 700; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1100px) {
    .d-pipe-row { grid-template-columns: 1fr 1fr 1fr; }
    .d-steps-row { grid-template-columns: repeat(3, 1fr); }
    .d-metrics { grid-template-columns: repeat(3, 1fr); }
    .d-bento { grid-template-columns: 1fr 1fr; }
    .d-bc.wide { grid-column: span 2; }
  }

  @media (max-width: 900px) {
    .d-hero { grid-template-columns: 1fr; min-height: auto;}
    .d-hero-right { display: none; }
    .d-hero-left { padding: 5rem 6vw 5vh; }
    .d-sec-top { grid-template-columns: 1fr; }
    .d-tools-head { grid-template-columns: 1fr; }
    .d-cta { grid-template-columns: 1fr; }
    .d-hero-h1 {
      font-size: 3.5rem; 
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    .d-pipe-row { grid-template-columns: 1fr 1fr; }
    .d-steps-row { grid-template-columns: 1fr 1fr; }
    .d-metrics { grid-template-columns: repeat(3, 1fr); }
    .d-bento { grid-template-columns: 1fr; }
    .d-bc.wide { grid-column: span 1; }
  }

  @media (max-width: 540px) {
    .d-metrics { grid-template-columns: 1fr 1fr; }
    .d-pipe-row { grid-template-columns: 1fr; }
    .d-steps-row { grid-template-columns: 1fr; }
    .d-pipeline, .d-bento-section, .d-tools, .d-how { padding: 6vh 5vw; }
    .d-cta { padding: 7vh 5vw; }
    .d-hero-h1 {
      font-size: 2.8rem;
    }
  }
`;

const pipelineStages = [
  { badge: "Source", active: true, name: "Code & SCM", tools: "GitHub · GitLab · Bitbucket · Branch strategy", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg> },
  { badge: "Build", name: "CI Build", tools: "Jenkins · GitHub Actions · CircleCI · Maven", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
  { badge: "Test", name: "Test & Scan", tools: "Jest · Cypress · SonarQube · Snyk · OWASP", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
  { badge: "Package", name: "Artifact", tools: "Docker · ECR · Artifactory · Helm · SBOM", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> },
  { badge: "Deploy", name: "CD Deploy", tools: "ArgoCD · Spinnaker · Helm · Kubernetes · ECS", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { badge: "Monitor", name: "Observe", tools: "Prometheus · Grafana · Datadog · PagerDuty", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg> },
];

const bentoServices = [
  { n: "01", title: "CI/CD Pipeline Design & Implementation", text: "We architect and implement fully automated delivery pipelines from scratch — integrating code quality gates, multi-stage testing, security scanning, and multi-environment deployments into a single seamless flow. Every pipeline is version-controlled, documented, and tuned for your stack.", tags: ["GitHub Actions","Jenkins","GitLab CI","ArgoCD","CircleCI"], wide: true },
  { n: "02", title: "Infrastructure as Code", text: "Terraform and Ansible playbooks for fully reproducible, version-controlled infrastructure. Every resource is codified — zero click-ops.", tags: ["Terraform","Ansible","Pulumi","CDK"], wide: false },
  { n: "03", title: "Container Orchestration", text: "EKS, AKS, GKE cluster setup, Helm chart authoring, pod autoscaling (HPA, VPA, KEDA), and multi-cluster federation.", tags: ["Kubernetes","Helm","Docker","KEDA"], wide: false },
  { n: "04", title: "DevSecOps Integration", text: "Security embedded at every pipeline stage — SAST, DAST, SCA, dependency audits, secret scanning, and SBOM generation. Shift-left security that catches issues before production.", tags: ["SonarQube","Snyk","OWASP","Trivy","Falco"], wide: false },
  { n: "05", title: "Monitoring & Full Observability", text: "Prometheus + Grafana dashboards, distributed tracing, log aggregation, SLO tracking, and PagerDuty escalation policies.", tags: ["Prometheus","Grafana","Datadog","Jaeger"], wide: false },
  { n: "06", title: "GitOps & Release Strategy", text: "Blue/green, canary, and feature-flag release patterns using GitOps principles. Zero-downtime deploys on every push.", tags: ["ArgoCD","Flux","LaunchDarkly","Spinnaker"], wide: false },
];

const tools = [
  { ico: "⚙️", name: "GitHub Actions", cat: "CI/CD" },
  { ico: "🔧", name: "Jenkins", cat: "CI/CD" },
  { ico: "🦊", name: "GitLab CI", cat: "CI/CD" },
  { ico: "🐳", name: "Docker", cat: "Containers" },
  { ico: "☸️", name: "Kubernetes", cat: "Orchestration" },
  { ico: "⛵", name: "Helm", cat: "Packaging" },
  { ico: "🌍", name: "Terraform", cat: "IaC" },
  { ico: "📜", name: "Ansible", cat: "Automation" },
  { ico: "🔴", name: "ArgoCD", cat: "GitOps" },
  { ico: "📊", name: "Grafana", cat: "Observability" },
  { ico: "📈", name: "Prometheus", cat: "Monitoring" },
  { ico: "🐶", name: "Datadog", cat: "APM" },
  { ico: "🔍", name: "SonarQube", cat: "SAST" },
  { ico: "🛡️", name: "Snyk", cat: "Security" },
  { ico: "🔔", name: "PagerDuty", cat: "Alerting" },
  { ico: "⚡", name: "CircleCI", cat: "CI/CD" },
];

const howSteps = [
  { n: "01", t: "Assessment", d: "We review your current deployment process, toolchain, team workflows, and release cadence to identify bottlenecks and automation gaps." },
  { n: "02", t: "Blueprint", d: "A detailed pipeline architecture document with toolchain recommendations, security integration points, and a phased rollout plan." },
  { n: "03", t: "Build", d: "We implement the pipeline, write IaC, configure environments, and integrate all quality and security gates — with your team alongside." },
  { n: "04", t: "Handover", d: "Full documentation, runbooks, on-call guide, and knowledge transfer sessions — your team owns it completely after we're done." },
  { n: "05", t: "Ongoing", d: "Optional retainer for pipeline maintenance, tool upgrades, incident response, and continuous optimisation of your delivery workflow." },
];

export default function CICDPage() {
  return (
    <div className="devops-page">
      <style>{style}</style>
      <Header />

      {/* HERO */}
      <section className="d-hero">
        <div className="d-hero-grid" />
        <div className="d-hero-left">
          <div className="d-badge">CI/CD & DevOps Services</div>
          <h1 className="d-hero-h1">BUILD.<br /><span className="outline">TEST.</span><br />DEPLOY.<br />REPEAT.</h1>
          <p className="d-hero-desc">We automate your entire software delivery pipeline — from the moment a developer pushes code to the moment it's live in production — with full quality gates, security scanning, and zero-downtime deployments.</p>
          <div className="d-hero-pts">
            {[
              ["$", "git push origin main → production in minutes"],
              ["✓", "Automated testing — unit, integration, e2e, security"],
              ["✓", "Zero-downtime canary & blue/green deployments"],
              ["✓", "Security scanning at every pipeline stage"],
              ["✓", "Full observability — logs, metrics, traces"],
            ].map(([pre, txt]) => (
              <div className="d-pt" key={txt}><span className="d-pt-prefix">{pre}</span>{txt}</div>
            ))}
          </div>
          <div className="d-btns">
            <a href="#services" className="btn-fire">See What We Build →</a>
            <a href="#contact" className="btn-dark">Schedule a Call</a>
          </div>
        </div>
        <div className="d-hero-right">
          <div className="d-terminal">
            <div className="d-term-bar">
              <div className="d-dot r" /><div className="d-dot y" /><div className="d-dot g" />
              <div className="d-term-title">pipeline.yml — running</div>
            </div>
            <div className="d-term-body">
              <div className="d-tl"><span className="tp">$</span><span className="tc"> git push origin main</span></div>
              <div className="d-tl"><span className="to info">▶ Triggering CI pipeline #847...</span></div>
              <div className="d-tl"><span className="to dim">━━━━━━━━━━━━━━━━━━━━━━━━━━━</span></div>
              <div className="d-tl"><span className="to ok">✓ Code checkout           0.6s</span></div>
              <div className="d-tl"><span className="to ok">✓ Dependency install      11s</span></div>
              <div className="d-tl"><span className="to ok">✓ Lint & format           3s</span></div>
              <div className="d-tl"><span className="to ok">✓ Unit tests — 517 pass   19s</span></div>
              <div className="d-tl"><span className="to ok">✓ Integration tests       44s</span></div>
              <div className="d-tl"><span className="to ok">✓ SAST scan — 0 issues    8s</span></div>
              <div className="d-tl"><span className="to ok">✓ Docker build & push     22s</span></div>
              <div className="d-tl"><span className="to ok">✓ Helm chart lint         2s</span></div>
              <div className="d-tl"><span className="to info">▶ Deploying to production...</span></div>
              <div className="d-tl"><span className="to ok">✓ Canary 10% → 50% → 100%</span></div>
              <div className="d-tl"><span className="to ok">✓ Smoke tests passed</span></div>
              <div className="d-tl"><span className="to warn">⬡ Total duration: 1m 51s</span></div>
              <div className="d-tl"><span className="tp">$</span><span className="d-cursor" /></div>
            </div>
          </div>
        </div>
      </section>

    {/* METRICS MARQUEE */}
      <div className="d-metrics-marquee">
        <div className="d-metrics-track">
          {[
            { v: "10×", l: "Deploy Frequency" },
            { v: "85%", l: "Fewer Prod Failures" },
            { v: "<2hr", l: "Mean Time to Recovery" },
            { v: "100+", l: "Pipelines Built" },
            { v: "0", l: "Manual Deployments" },
            // Repeat once for seamless loop
            { v: "10×", l: "Deploy Frequency" },
            { v: "85%", l: "Fewer Prod Failures" },
            { v: "<2hr", l: "Mean Time to Recovery" },
            { v: "100+", l: "Pipelines Built" },
            { v: "0", l: "Manual Deployments" },
          ].map((m, idx) => (
            <div className="d-metric" key={idx}>
              <div className="d-metric-val">{m.v}</div>
              <div className="d-metric-lab">{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PIPELINE */}
      <section className="d-pipeline">
        <div className="d-sec-top">
          <div>
            <div className="d-sec-label">The Pipeline</div>
            <h2 className="d-sec-h2">End-to-End<br />Delivery Flow</h2>
          </div>
          <p className="d-sec-desc">Every commit triggers a fully automated chain of quality gates. Nothing reaches production unless it passes every check — code quality, unit tests, integration tests, security scans, container build, and deployment validation.</p>
        </div>
        <div className="d-pipe-row">
          {pipelineStages.map((s, i) => (
            <div className="d-pipe-stage" key={s.name}>
              <div className={`d-ps-badge${s.active ? ' active' : ''}`}>{s.badge}</div>
              <div className="d-ps-ico">{s.icon}</div>
              <div className="d-ps-name">{s.name}</div>
              <div className="d-ps-tools">{s.tools}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENTO SERVICES */}
      <section className="d-bento-section" id="services">
        <div className="d-sec-label">Our Services</div>
        <h2 className="d-sec-h2">DevOps Done Right</h2>
        <div className="d-bento">
          {bentoServices.map(s => (
            <div className={`d-bc${s.wide ? ' wide' : ''}`} key={s.n}>
              <div className="d-bc-n">{s.n}</div>
              <div className="d-bc-title">{s.title}</div>
              <div className="d-bc-text">{s.text}</div>
              <div className="d-bc-tags">
                {s.tags.map(t => <span className="d-bc-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="d-tools">
        <div className="d-tools-head">
          <div>
            <div className="d-sec-label">Toolchain</div>
            <h2 className="d-sec-h2">Tools We Live In</h2>
          </div>
          <p className="d-tools-desc">We're toolchain-agnostic — we work with whatever your team uses, and recommend the best-fit tools for your stack, team size, and release cadence. No dogma, just pragmatism.</p>
        </div>
        <div className="d-tools-grid">
          {tools.map(t => (
            <div className="d-tool-chip" key={t.name}>
              <div className="d-tool-ico">{t.ico}</div>
              <div className="d-tool-name">{t.name}</div>
              <div className="d-tool-cat">{t.cat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="d-how">
        <div className="d-how-head">
          <div className="d-sec-label" style={{justifyContent:'center'}}>How We Work</div>
          <h2 className="d-how-h2">From Audit to Automated in Weeks</h2>
        </div>
        <div className="d-steps-row">
          {howSteps.map(s => (
            <div className="d-step-card" key={s.n}>
              <div className="d-step-n">{s.n}</div>
              <div className="d-step-t">{s.t}</div>
              <div className="d-step-d">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="d-cta" id="contact">
        <div className="d-cta-watermark">SHIP FASTER</div>
        <div style={{position:'relative', zIndex:1}}>
          <div className="d-sec-label">Get Started</div>
          <h2 className="d-cta-h2">Stop Deploying <span>Manually.</span></h2>
          <p className="d-cta-sub">Book a free 45-minute pipeline assessment. We'll map your current delivery process, identify the biggest automation gaps, and hand you a concrete roadmap — no commitment required.</p>
        </div>
        <div className="d-cta-right" style={{position:'relative', zIndex:1}}>
          {["Free 45-min pipeline assessment","Toolchain recommendation report","Implementation roadmap in writing","Response within 24 hours","No lock-in, no long-term contract"].map(p => (
            <div className="d-cta-item" key={p}><span className="d-cta-ico">✓</span>{p}</div>
          ))}
          <a href="#" className="btn-fire" style={{marginTop:'1.5vh', width:'100%', textAlign:'center'}}>Automate My Pipeline →</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}