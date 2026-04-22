import { useState, useEffect, useRef } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --black: #0a0a0a;
    --black2: #111111;
    --black3: #1a1a1a;
    --white: #ffffff;
    --white2: #f5f5f5;
    --white3: #e8e8e8;
    --orange: #ff6b00;
    --orange2: #ff8c00;
    --orange-light: rgba(255,107,0,0.12);
    --orange-glow: rgba(255,107,0,0.25);
    --gray: #6b6b6b;
    --gray2: #333333;
    --font: 'Poppins', sans-serif;
  }

  .sr-page {
    font-family: var(--font);
    background: var(--white);
    color: var(--black);
    overflow-x: hidden;
  }

  /* ─── HERO ─── */
.sr-hero {
  position: relative;
  min-height: 100vh;
  background: var(--black);
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 40px; /* Add this to push content below your header */
}
  .sr-hero-bg {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(255,107,0,0.08) 0%, transparent 70%);
  }
  .sr-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }
.sr-hero-content {
  position: relative; z-index: 2;
  width: 94%;           /* Increased from 90% */
  max-width: 1600px;    /* Increased from 1200px to fill large screens better */
  margin: 0 auto;
  padding: 10vh 0;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
}
  .sr-hero-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: var(--orange-light);
    border: 1px solid rgba(255,107,0,0.3);
    color: var(--orange);
    font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.4rem 1rem; border-radius: 100px;
    margin-bottom: 1.5rem;
  }
  .sr-hero-badge span { width: 6px; height: 6px; background: var(--orange); border-radius: 50%; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.4)} }
  .sr-hero-h1 {
    font-size: clamp(2.8rem, 5.5vw, 5rem);
    font-weight: 800; line-height: 1.08;
    color: var(--white);
    margin-bottom: 1.5rem;
  }
  .sr-hero-h1 em { font-style: normal; color: var(--orange); }
  .sr-hero-sub {
    font-size: clamp(1rem, 1.5vw, 1.15rem);
    color: rgba(255,255,255,0.55);
    line-height: 1.75; font-weight: 300;
    max-width: 46ch;
    margin-bottom: 2.5rem;
  }
  .sr-hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: var(--orange);
    color: var(--white);
    font-family: var(--font); font-size: 0.95rem; font-weight: 600;
    padding: 0.9rem 2rem; border-radius: 8px;
    border: none; cursor: pointer;
    transition: all 0.25s ease;
    text-decoration: none;
  }
  .btn-primary:hover { background: var(--orange2); transform: translateY(-2px); box-shadow: 0 12px 32px rgba(255,107,0,0.4); }
  .btn-outline {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: transparent;
    color: var(--white);
    font-family: var(--font); font-size: 0.95rem; font-weight: 500;
    padding: 0.9rem 2rem; border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.2); cursor: pointer;
    transition: all 0.25s ease;
    text-decoration: none;
  }
  .btn-outline:hover { border-color: var(--orange); color: var(--orange); }

  .sr-hero-visual {
    position: relative; display: flex; justify-content: center; align-items: center;
  }
.sr-hero-img-wrap {
    position: relative; width: 100%; max-width: 520px;
    /* Removed overflow: hidden so the float-card can go outside the borders */
}
.sr-hero-img-wrap img { 
    width: 100%; height: 60vh; object-fit: cover; display: block; 
    border-radius: 20px; /* Move border-radius directly to the image */
}
  .sr-hero-img-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 60%);
  }
  .sr-hero-float-card {
    position: absolute; bottom: -1.5rem; left: -2rem;
    background: var(--white);
    border-radius: 14px;
    padding: 1rem 1.4rem;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    min-width: 180px;
  }
  .sr-hero-float-card .num { font-size: 2rem; font-weight: 800; color: var(--orange); }
  .sr-hero-float-card .lbl { font-size: 0.75rem; font-weight: 500; color: var(--gray); margin-top: 0.1rem; }

  .sr-hero-stats {
    position: absolute; top: 1.5rem; right: -1.5rem;
    display: flex; flex-direction: column; gap: 0.8rem;
  }
  .stat-pill {
    background: rgba(255,255,255,0.07); backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px; padding: 0.8rem 1.2rem;
    display: flex; align-items: center; gap: 0.6rem;
    color: var(--white);
  }
  .stat-pill .icon { font-size: 1.2rem; }
  .stat-pill .stat-text .s-val { font-size: 1rem; font-weight: 700; }
  .stat-pill .stat-text .s-lbl { font-size: 0.7rem; color: rgba(255,255,255,0.5); }

  /* ─── MARQUEE ─── */
  .sr-marquee {
    background: var(--orange);
    padding: 0.9rem 0;
    overflow: hidden;
    white-space: nowrap;
  }
  .sr-marquee-inner {
    display: inline-flex; gap: 3rem;
    animation: marquee 24s linear infinite;
  }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .sr-marquee-item {
    font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--white);
    display: flex; align-items: center; gap: 1rem;
  }
  .sr-marquee-item::after { content: '●'; font-size: 0.4rem; opacity: 0.6; }

  /* ─── SECTION COMMONS ─── */
.section-wrap { 
  width: 94%;           /* Consistent with Hero */
  max-width: 1600px; 
  margin: 0 auto; 
}  .section-tag {
    display: inline-block;
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--orange);
    margin-bottom: 0.8rem;
  }
  .section-h2 {
    font-size: clamp(2rem, 3.5vw, 3.2rem);
    font-weight: 800; line-height: 1.15;
    color: var(--black);
  }
  .section-h2 span { color: var(--orange); }
  .section-desc {
    font-size: clamp(0.95rem, 1.3vw, 1.05rem);
    color: var(--gray);
    line-height: 1.8; font-weight: 300;
    max-width: 58ch;
  }

  /* ─── SERVICES ─── */
  .sr-services { padding: 8vh 0; background: var(--white2); }
  .sr-services-head { text-align: center; margin-bottom: 4rem; }
  .sr-services-head .section-desc { margin: 1rem auto 0; }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  .service-card {
    background: var(--white);
    border: 1px solid var(--white3);
    border-radius: 20px;
    padding: 2.2rem;
    position: relative; overflow: hidden;
    transition: all 0.3s ease;
    cursor: default;
  }
  .service-card::before {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--orange), var(--orange2));
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.35s ease;
  }
  .service-card:hover { transform: translateY(-6px); box-shadow: 0 24px 64px rgba(0,0,0,0.1); border-color: transparent; }
  .service-card:hover::before { transform: scaleX(1); }
  .service-card:hover .svc-icon-wrap { background: var(--orange); }
  .service-card:hover .svc-icon-wrap svg { color: var(--white); }

  .svc-icon-wrap {
    width: 54px; height: 54px; border-radius: 14px;
    background: var(--orange-light);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.4rem;
    transition: all 0.3s ease;
  }
  .svc-icon-wrap svg { width: 26px; height: 26px; color: var(--orange); transition: color 0.3s; }
  .svc-title { font-size: 1.1rem; font-weight: 700; color: var(--black); margin-bottom: 0.7rem; }
  .svc-desc { font-size: 0.88rem; color: var(--gray); line-height: 1.75; font-weight: 300; }
  .svc-tag-list { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1.2rem; }
  .svc-tag {
    font-size: 0.7rem; font-weight: 600; color: var(--orange);
    background: var(--orange-light); border-radius: 100px;
    padding: 0.25rem 0.75rem;
  }

  /* featured card */
  .service-card.featured {
    background: var(--black);
    border-color: transparent;
    grid-row: span 2;
    display: flex; flex-direction: column;
  }
  .service-card.featured .svc-title { color: var(--white); font-size: 1.3rem; }
  .service-card.featured .svc-desc { color: rgba(255,255,255,0.5); }
  .service-card.featured .svc-icon-wrap { background: var(--orange); }
  .service-card.featured .svc-icon-wrap svg { color: var(--white); }
  .service-card.featured::before { display: none; }
  .featured-img { border-radius: 12px; overflow: hidden; margin: 1.5rem 0; flex: 1; min-height: 200px; }
  .featured-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .featured-cta {
    display: inline-flex; align-items: center; gap: 0.5rem;
    color: var(--orange); font-size: 0.88rem; font-weight: 600;
    text-decoration: none; margin-top: 0.5rem;
    transition: gap 0.2s;
  }
  .featured-cta:hover { gap: 0.9rem; }

  /* ─── IMAGE SPLIT SECTION ─── */
  .sr-split { padding: 10vh 0; background: var(--white); }
  .split-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 5rem; align-items: center;
  }
  .split-img-wrap { position: relative; }
  .split-img-main {
    border-radius: 20px; overflow: hidden;
    box-shadow: 0 40px 80px rgba(0,0,0,0.12);
  }
  .split-img-main img { width: 100%; height: 55vh; object-fit: cover; display: block; }
  .split-img-accent {
    position: absolute; bottom: -2rem; right: -2rem;
    width: 45%; border-radius: 14px; overflow: hidden;
    border: 6px solid var(--white);
    box-shadow: 0 16px 40px rgba(0,0,0,0.15);
  }
  .split-img-accent img { width: 100%; height: 16vh; object-fit: cover; display: block; }
  .split-label {
    position: absolute; top: 1.5rem; left: 1.5rem;
    background: var(--orange); color: var(--white);
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; padding: 0.4rem 0.9rem; border-radius: 100px;
  }
  .split-content { display: flex; flex-direction: column; gap: 1.5rem; }
  .split-content .section-h2 { margin-bottom: 0.5rem; }
  .check-list { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; margin: 0.5rem 0; }
  .check-list li {
    display: flex; align-items: flex-start; gap: 0.9rem;
    font-size: 0.92rem; color: var(--black); font-weight: 400; line-height: 1.6;
  }
  .check-icon {
    flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%;
    background: var(--orange-light);
    display: flex; align-items: center; justify-content: center;
    margin-top: 0.1rem;
  }
  .check-icon svg { width: 12px; height: 12px; color: var(--orange); }

  /* ─── PROCESS ─── */
  .sr-process { padding: 10vh 0; background: var(--black); }
  .sr-process .section-h2 { color: var(--white); }
  .process-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; flex-wrap: wrap; gap: 1.5rem; }
  .process-head .section-desc { color: rgba(255,255,255,0.45); }

  .process-steps {
    display: grid; grid-template-columns: repeat(4, 1fr);
    position: relative;
    gap: 0;
  }
  .process-steps::before {
    content: '';
    position: absolute; top: 2rem; left: 10%; right: 10%;
    height: 1px; background: rgba(255,107,0,0.2);
    z-index: 0;
  }
  .process-step {
    position: relative; z-index: 1;
    padding: 0 1.5rem 2rem;
    text-align: center;
  }
  .step-num-wrap {
    width: 4rem; height: 4rem; border-radius: 50%;
    background: var(--black3);
    border: 1px solid rgba(255,107,0,0.3);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 1.5rem;
    transition: all 0.3s ease;
    position: relative;
  }
  .process-step:hover .step-num-wrap {
    background: var(--orange);
    border-color: var(--orange);
    box-shadow: 0 0 30px rgba(255,107,0,0.4);
  }
  .step-num { font-size: 1rem; font-weight: 800; color: var(--orange); transition: color 0.3s; }
  .process-step:hover .step-num { color: var(--white); }
  .step-title { font-size: 0.98rem; font-weight: 700; color: var(--white); margin-bottom: 0.6rem; }
  .step-desc { font-size: 0.82rem; color: rgba(255,255,255,0.4); line-height: 1.7; }

  /* ─── IMAGE GALLERY BREAK ─── */
  .sr-gallery { padding: 6vh 0; background: var(--white2); overflow: hidden; }
  .gallery-label { text-align: center; margin-bottom: 2.5rem; }
  .gallery-strip {
    display: flex; gap: 1.2rem;
    animation: galleryScroll 30s linear infinite;
    width: max-content;
  }
  .gallery-strip:hover { animation-play-state: paused; }
  @keyframes galleryScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .gallery-img {
    width: 28vw; min-width: 260px; max-width: 380px;
    height: 22vh; min-height: 180px;
    border-radius: 16px; overflow: hidden; flex-shrink: 0;
    position: relative;
  }
  .gallery-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
  .gallery-img:hover img { transform: scale(1.06); }
  .gallery-img-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%);
    display: flex; align-items: flex-end; padding: 1rem;
  }
  .gallery-img-label { font-size: 0.75rem; font-weight: 600; color: var(--white); text-transform: uppercase; letter-spacing: 0.08em; }

  /* ─── WHY US ─── */
  .sr-why { padding: 10vh 0; background: var(--white); }
  .why-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 5rem; align-items: center; }
  .why-img-stack { position: relative; height: 70vh; }
  .why-img-a {
    position: absolute; top: 0; left: 0;
    width: 70%; border-radius: 20px; overflow: hidden;
    box-shadow: 0 30px 70px rgba(0,0,0,0.12);
  }
  .why-img-a img { width: 100%; height: 50vh; object-fit: cover; display: block; }
  .why-img-b {
    position: absolute; bottom: 0; right: 0;
    width: 58%; border-radius: 20px; overflow: hidden;
    box-shadow: 0 30px 70px rgba(0,0,0,0.1);
    border: 5px solid var(--white);
  }
  .why-img-b img { width: 100%; height: 30vh; object-fit: cover; display: block; }
  .why-exp-badge {
    position: absolute; bottom: 28%; left: -1.5rem;
    background: var(--orange);
    color: var(--white); border-radius: 14px;
    padding: 1rem 1.3rem;
    box-shadow: 0 16px 40px rgba(255,107,0,0.35);
    z-index: 2;
  }
  .why-exp-badge .e-num { font-size: 2.2rem; font-weight: 900; line-height: 1; }
  .why-exp-badge .e-text { font-size: 0.75rem; font-weight: 500; opacity: 0.85; }
  .why-points { display: flex; flex-direction: column; gap: 1.8rem; margin-top: 1rem; }
  .why-point {
    display: flex; gap: 1.2rem; align-items: flex-start;
    padding: 1.4rem; border-radius: 16px;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    cursor: default;
  }
  .why-point:hover { background: var(--white2); border-color: var(--white3); transform: translateX(4px); }
  .why-point-icon {
    flex-shrink: 0; width: 44px; height: 44px; border-radius: 12px;
    background: var(--orange-light);
    display: flex; align-items: center; justify-content: center;
  }
  .why-point-icon svg { width: 22px; height: 22px; color: var(--orange); }
  .why-point-title { font-size: 1rem; font-weight: 700; color: var(--black); margin-bottom: 0.35rem; }
  .why-point-desc { font-size: 0.85rem; color: var(--gray); line-height: 1.7; }

  /* ─── TECH / EQUIPMENT ─── */
  .sr-tech { padding: 8vh 0; background: var(--black3); }
  .tech-head { text-align: center; margin-bottom: 3.5rem; }
  .tech-head .section-h2 { color: var(--white); }
  .tech-head .section-desc { margin: 1rem auto 0; color: rgba(255,255,255,0.45); }
  .tech-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  .tech-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px; padding: 1.8rem 1.4rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: default;
  }
  .tech-card:hover {
    background: var(--orange-light);
    border-color: rgba(255,107,0,0.3);
    transform: translateY(-4px);
  }
  .tech-card:hover .tech-card-icon { color: var(--orange); }
  .tech-card-icon { font-size: 2rem; margin-bottom: 0.8rem; color: rgba(255,255,255,0.4); transition: color 0.3s; }
  .tech-card-name { font-size: 0.9rem; font-weight: 600; color: var(--white); margin-bottom: 0.4rem; }
  .tech-card-sub { font-size: 0.75rem; color: rgba(255,255,255,0.35); line-height: 1.5; }

  /* ─── TESTIMONIALS ─── */
  .sr-testimonials { padding: 10vh 0; background: var(--white2); }
  .test-head { text-align: center; margin-bottom: 3.5rem; }
  .test-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
  .test-card {
    background: var(--white); border-radius: 20px;
    padding: 2rem;
    border: 1px solid var(--white3);
    transition: all 0.3s ease;
  }
  .test-card:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.08); border-color: transparent; }
  .test-stars { color: var(--orange); font-size: 0.9rem; margin-bottom: 1rem; letter-spacing: 0.1em; }
  .test-quote { font-size: 0.9rem; color: var(--black); line-height: 1.8; margin-bottom: 1.5rem; font-weight: 300; font-style: italic; }
  .test-author { display: flex; align-items: center; gap: 0.8rem; }
  .test-avatar {
    width: 42px; height: 42px; border-radius: 50%;
    background: linear-gradient(135deg, var(--orange), var(--orange2));
    display: flex; align-items: center; justify-content: center;
    font-size: 0.85rem; font-weight: 700; color: var(--white);
    flex-shrink: 0;
  }
  .test-name { font-size: 0.88rem; font-weight: 700; color: var(--black); }
  .test-role { font-size: 0.75rem; color: var(--gray); }

  /* ─── CTA BANNER ─── */
  .sr-cta {
    padding: 10vh 0;
    background: var(--black);
    position: relative; overflow: hidden;
    text-align: center;
  }
  .sr-cta-bg {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,107,0,0.1) 0%, transparent 70%);
  }
  .sr-cta-content { position: relative; z-index: 2; }
  .sr-cta-h2 {
    font-size: clamp(2.2rem, 4vw, 4rem);
    font-weight: 800; color: var(--white); line-height: 1.15;
    margin-bottom: 1.2rem;
  }
  .sr-cta-h2 span { color: var(--orange); }
  .sr-cta-sub {
    font-size: 1.05rem; color: rgba(255,255,255,0.5);
    font-weight: 300; line-height: 1.7; max-width: 50ch; margin: 0 auto 2.5rem;
  }
  .cta-btns { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }

  /* ─── FAQ ─── */
  .sr-faq { padding: 8vh 0; background: var(--white); }
  .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
  .faq-left .section-desc { margin-top: 1rem; }
  .faq-list { display: flex; flex-direction: column; gap: 0; border: 1px solid var(--white3); border-radius: 16px; overflow: hidden; }
  .faq-item { border-bottom: 1px solid var(--white3); }
  .faq-item:last-child { border-bottom: none; }
  .faq-q {
    width: 100%; background: none; border: none;
    display: flex; align-items: center; justify-content: space-between; gap: 1rem;
    padding: 1.3rem 1.5rem;
    font-family: var(--font); font-size: 0.92rem; font-weight: 600;
    color: var(--black); text-align: left; cursor: pointer;
    transition: background 0.2s;
  }
  .faq-q:hover { background: var(--white2); }
  .faq-q.open { color: var(--orange); background: var(--white2); }
  .faq-icon { flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%; background: var(--white3); display: flex; align-items: center; justify-content: center; transition: all 0.25s; }
  .faq-q.open .faq-icon { background: var(--orange); transform: rotate(45deg); }
  .faq-icon svg { width: 12px; height: 12px; color: var(--gray); }
  .faq-q.open .faq-icon svg { color: var(--white); }
  .faq-ans {
    max-height: 0; overflow: hidden;
    transition: max-height 0.35s ease, padding 0.25s;
    padding: 0 1.5rem;
    font-size: 0.87rem; color: var(--gray); line-height: 1.8; font-weight: 300;
  }
  .faq-ans.open { max-height: 200px; padding: 0 1.5rem 1.2rem; }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 1024px) {
    .sr-hero-content { 
    grid-template-columns: 1fr; 
    gap: 3rem; 
    width: 88%; /* Maintains a healthy gap on small screens */
    padding-top: 40px; /* Extra padding for mobile */
  }
  .sr-hero-h1 {
    font-size: clamp(2.2rem, 8vw, 3.5rem); /* Slightly smaller font for mobile so it fits */
  }
    .sr-hero-visual { display: none; }
    .services-grid { grid-template-columns: 1fr 1fr; }
    .service-card.featured { grid-row: span 1; }
    .process-steps { grid-template-columns: repeat(2, 1fr); }
    .process-steps::before { display: none; }
    .tech-grid { grid-template-columns: repeat(2, 1fr); }
    .split-grid { grid-template-columns: 1fr; }
    .split-img-wrap { display: none; }
    .why-grid { grid-template-columns: 1fr; }
    .why-img-stack { display: none; }
    .faq-grid { grid-template-columns: 1fr; }
    .test-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 640px) {
    .services-grid { grid-template-columns: 1fr; }
    .process-steps { grid-template-columns: 1fr; }
    .tech-grid { grid-template-columns: repeat(2, 1fr); }
    .test-grid { grid-template-columns: 1fr; }
    .sr-hero-btns { flex-direction: column; }
    .cta-btns { flex-direction: column; align-items: center; }
    .gallery-img { width: 75vw; }
  }
`;

const services = [
  {
    featured: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "BGA Reball & Reballing",
    desc: "Expert BGA reballing services for CPUs, GPUs, and chipsets. We remove, reball, and replace with precision using leaded and lead-free solder.",
    tags: ["CPU", "GPU", "Chipset", "Lead-free"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    cta: "View Process →",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
    title: "Micro Soldering",
    desc: "Sub-millimeter precision soldering on complex PCBs, flex cables, and SMD components with 40× magnification.",
    tags: ["SMD", "Flex", "0201"],
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>,
    title: "PCB Trace Repair",
    desc: "Restoring damaged traces, pads, and vias on multi-layer PCBs using conductive ink and copper jumper wires.",
    tags: ["Multi-layer", "Vias", "Pads"],
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: "Hot Air Rework",
    desc: "Advanced hot air station rework for QFP, PLCC, and complex IC packages without PCB or component damage.",
    tags: ["QFP", "PLCC", "IC Swap"],
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 9H17v1.5c0 .83-.67 1.5-1.5 1.5S14 11.33 14 10.5 14.67 9 15.5 9z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 15H7v-1.5c0-.83.67-1.5 1.5-1.5S10 12.67 10 13.5 9.33 15 8.5 15z"/></svg>,
    title: "Component Replacement",
    desc: "Sourcing and replacing failed ICs, MOSFETs, capacitors, and inductors with authentic or equivalent parts.",
    tags: ["MOSFET", "Cap", "Inductor"],
  },
];

const process = [
  { num: "01", title: "Diagnosis & Quote", desc: "Board-level inspection using thermal imaging and oscilloscopes to identify faults before quoting." },
  { num: "02", title: "Thermal Profiling", desc: "Custom reflow profile calibrated for each specific board and component requirement." },
  { num: "03", title: "Precision Rework", desc: "Skilled technicians perform the rework under 40× magnification with real-time temperature control." },
  { num: "04", title: "Quality Validation", desc: "Post-rework functional test, X-ray inspection, and visual QC before return shipment." },
];

const whyPoints = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "IPC-A-610 Certified Technicians",
    desc: "Our team holds Class 3 certification — the highest standard for professional electronics soldering.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
    title: "X-Ray Verification",
    desc: "Every BGA reball is verified with X-ray imaging to ensure perfect ball placement and void-free joints.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V12M12 12L7 7M12 12l5-5"/><circle cx="12" cy="12" r="10"/></svg>,
    title: "Nitrogen Reflow Atmosphere",
    desc: "Oxidation-free reflow in nitrogen atmosphere for pristine joint quality on sensitive components.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    title: "90-Day Warranty",
    desc: "All rework covered by a 90-day workmanship guarantee. If it fails due to our work, we fix it free.",
  },
];

const tech = [
  { icon: "🔬", name: "ERSA IR550", sub: "Infrared Rework System" },
  { icon: "📡", name: "X-Ray CT", sub: "BGA Inspection" },
  { icon: "🌡️", name: "Thermal Camera", sub: "Fault Localisation" },
  { icon: "⚡", name: "Hot Air Station", sub: "Hakko FR-810" },
  { icon: "🔭", name: "40× Microscope", sub: "Precision Work" },
  { icon: "🧪", name: "Nitrogen Reflow", sub: "Oxidation-Free" },
  { icon: "📏", name: "LCR Meter", sub: "Component Verify" },
  { icon: "💡", name: "OSC / Logic", sub: "Signal Analysis" },
];

const testimonials = [
  { stars: "★★★★★", quote: "Sent in three failed PS5 APUs for reballing. All three came back working perfectly. The X-ray reports they included gave us full confidence.", name: "Ravi K.", role: "Electronics Repair Shop, Bangalore" },
  { stars: "★★★★★", quote: "Our industrial PLC board had lifted pads from a botched repair. These guys restored every trace and pad. Saved us ₹2.4L in replacement costs.", name: "Meera S.", role: "Production Manager, Pune" },
  { stars: "★★★★★", quote: "Fastest turnaround I've seen — 48-hour express on a server NIC. Consistent quality across 50+ boards we've sent over two years.", name: "Arjun T.", role: "IT Infrastructure Lead, Hyderabad" },
];

const faqs = [
  { q: "What is the minimum pad size you can work on?", a: "We regularly work on 0201 SMD components (0.6mm × 0.3mm) and finer pitch BGA packages down to 0.35mm ball pitch under 40× microscope magnification." },
  { q: "Do you offer BGA reballing for consoles and laptops?", a: "Yes — PlayStation, Xbox, Nintendo, MacBook, and ThinkPad are among our most common jobs. We maintain specific reflow profiles for all major platforms." },
  { q: "What solder alloys do you use?", a: "We stock SAC305 lead-free, Sn63Pb37 leaded, and low-temperature SnBi alloys to match the original board specification or customer preference." },
  { q: "How long does a typical rework job take?", a: "Standard turnaround is 3–5 business days. Express 48-hour service is available for most jobs. Complex multi-chip or board-level repairs may take up to 10 days." },
  { q: "Do you accept mail-in repairs?", a: "Absolutely. We provide a padded anti-static mailer and return shipping is included in all quoted jobs above ₹1,500." },
];

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80", label: "PCB Rework" },
  { url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&q=80", label: "Micro Soldering" },
  { url: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=500&q=80", label: "BGA Reballing" },
  { url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&q=80", label: "Component Work" },
  { url: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=500&q=80", label: "Hot Air Station" },
  { url: "https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?w=500&q=80", label: "X-Ray Inspection" },
];

export default function SolderingReworkingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <style>{style}</style>
      <div className="sr-page">
        <Header />

        {/* HERO */}
        <section className="sr-hero">
          <div className="sr-hero-bg" />
          <div className="sr-hero-grid" />
          <div className="sr-hero-content">
            <div>
              <div className="sr-hero-badge"><span />&nbsp;Expert-Level Electronics Rework</div>
              <h1 className="sr-hero-h1">Precision <em>Soldering</em><br />& Reworking<br />Services</h1>
              <p className="sr-hero-sub">IPC-A-610 Class 3 certified rework for BGA, QFP, micro-SMD, and multi-layer PCBs. Trusted by repair shops, OEMs, and engineers across India.</p>
              <div className="sr-hero-btns">
                <button className="btn-primary">Get a Free Quote →</button>
                <button className="btn-outline">View Our Work</button>
              </div>
            </div>
            <div className="sr-hero-visual">
              <div className="sr-hero-img-wrap">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85" alt="PCB rework" />
                <div className="sr-hero-img-overlay" />
                <div className="sr-hero-float-card">
                  <div className="num">5K+</div>
                  <div className="lbl">Boards Reworked</div>
                </div>
              </div>
              <div className="sr-hero-stats">
                <div className="stat-pill">
                  <span className="icon">⚡</span>
                  <div className="stat-text">
                    <div className="s-val">48hr</div>
                    <div className="s-lbl">Express Option</div>
                  </div>
                </div>
                <div className="stat-pill">
                  <span className="icon">🔬</span>
                  <div className="stat-text">
                    <div className="s-val">40×</div>
                    <div className="s-lbl">Magnification</div>
                  </div>
                </div>
                <div className="stat-pill">
                  <span className="icon">✅</span>
                  <div className="stat-text">
                    <div className="s-val">90 Day</div>
                    <div className="s-lbl">Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="sr-marquee">
          <div className="sr-marquee-inner">
            {["BGA Reballing","PCB Trace Repair","Micro Soldering","Hot Air Rework","Component Replacement","X-Ray Verification","IPC-A-610 Certified","Nitrogen Reflow","BGA Reballing","PCB Trace Repair","Micro Soldering","Hot Air Rework","Component Replacement","X-Ray Verification","IPC-A-610 Certified","Nitrogen Reflow"].map((t,i)=>(
              <span key={i} className="sr-marquee-item">{t}</span>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section className="sr-services">
          <div className="section-wrap">
            <div className="sr-services-head">
              <span className="section-tag">What We Do</span>
              <h2 className="section-h2">Every Service, <span>Perfected</span></h2>
              <p className="section-desc">From a single cold joint to full board-level rework, our technicians handle every job with the same exacting standard.</p>
            </div>
            <div className="services-grid">
              {services.map((s, i) => s.featured ? (
                <div key={i} className="service-card featured">
                  <div className="svc-icon-wrap">{s.icon}</div>
                  <div className="svc-title">{s.title}</div>
                  <div className="svc-desc">{s.desc}</div>
                  <div className="featured-img">
                    <img src={s.img} alt={s.title} />
                  </div>
                  <div className="svc-tag-list">{s.tags.map(t=><span key={t} className="svc-tag">{t}</span>)}</div>
                  <a href="#" className="featured-cta" style={{marginTop:"1rem"}}>{s.cta}</a>
                </div>
              ) : (
                <div key={i} className="service-card">
                  <div className="svc-icon-wrap">{s.icon}</div>
                  <div className="svc-title">{s.title}</div>
                  <div className="svc-desc">{s.desc}</div>
                  <div className="svc-tag-list">{s.tags.map(t=><span key={t} className="svc-tag">{t}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY STRIP */}
        <section className="sr-gallery">
          <div className="gallery-label">
            <span className="section-tag">Our Workshop in Action</span>
          </div>
          <div style={{overflow:"hidden"}}>
            <div className="gallery-strip">
              {[...galleryImages, ...galleryImages].map((g, i) => (
                <div key={i} className="gallery-img">
                  <img src={g.url} alt={g.label} />
                  <div className="gallery-img-overlay">
                    <span className="gallery-img-label">{g.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPLIT: ABOUT / CAPABILITY */}
        <section className="sr-split">
          <div className="section-wrap">
            <div className="split-grid">
              <div className="split-img-wrap">
                <div className="split-img-main">
                  <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=700&q=85" alt="Technician at work" />
                  <div className="split-label">Since 2014</div>
                </div>
                <div className="split-img-accent">
                  <img src="https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&q=80" alt="BGA detail" />
                </div>
              </div>
              <div className="split-content">
                <div>
                  <span className="section-tag">Our Capability</span>
                  <h2 className="section-h2">Board-Level Rework<br /><span>Done Right</span></h2>
                </div>
                <p className="section-desc">We specialize in work that most repair services won't touch — ultra-fine pitch ICs, stacked packages, and industrial-grade PCBs with tight DFM constraints.</p>
                <ul className="check-list">
                  {["BGA pitch down to 0.35mm ball diameter","Multi-layer PCB up to 24 layers","Flex and rigid-flex board repair","Lead-free and RoHS-compliant processes","ESD-safe handling throughout","Full chain-of-custody tracking"].map(item => (
                    <li key={item}>
                      <span className="check-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <button className="btn-primary">Request a Capability Statement</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="sr-process">
          <div className="section-wrap">
            <div className="process-head">
              <div>
                <span className="section-tag">How It Works</span>
                <h2 className="section-h2" style={{color:"var(--white)"}}>Our <span style={{color:"var(--orange)"}}>4-Step</span> Process</h2>
              </div>
              <p className="section-desc">A transparent, documented workflow from first contact to final delivery.</p>
            </div>
            <div className="process-steps">
              {process.map((p, i) => (
                <div key={i} className="process-step">
                  <div className="step-num-wrap">
                    <span className="step-num">{p.num}</span>
                  </div>
                  <div className="step-title">{p.title}</div>
                  <div className="step-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="sr-why">
          <div className="section-wrap">
            <div className="why-grid">
              <div className="why-img-stack">
                <div className="why-img-a">
                  <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=85" alt="Precision work" />
                </div>
                <div className="why-img-b">
                  <img src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=500&q=80" alt="Equipment" />
                </div>
                <div className="why-exp-badge">
                  <div className="e-num">10+</div>
                  <div className="e-text">Years Experience</div>
                </div>
              </div>
              <div>
                <span className="section-tag">Why Choose Us</span>
                <h2 className="section-h2" style={{marginBottom:"0.5rem"}}>The Standard<br /><span>Others Aim For</span></h2>
                <div className="why-points">
                  {whyPoints.map((w, i) => (
                    <div key={i} className="why-point">
                      <div className="why-point-icon">{w.icon}</div>
                      <div>
                        <div className="why-point-title">{w.title}</div>
                        <div className="why-point-desc">{w.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH / EQUIPMENT */}
        <section className="sr-tech">
          <div className="section-wrap">
            <div className="tech-head">
              <span className="section-tag">Equipment</span>
              <h2 className="section-h2">Professional-Grade<br /><span style={{color:"var(--orange)"}}>Tools & Technology</span></h2>
              <p className="section-desc">Industry-leading equipment ensures repeatable, verifiable results on every job.</p>
            </div>
            <div className="tech-grid">
              {tech.map((t, i) => (
                <div key={i} className="tech-card">
                  <div className="tech-card-icon">{t.icon}</div>
                  <div className="tech-card-name">{t.name}</div>
                  <div className="tech-card-sub">{t.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="sr-testimonials">
          <div className="section-wrap">
            <div className="test-head">
              <span className="section-tag">Client Reviews</span>
              <h2 className="section-h2">Trusted by <span>Professionals</span></h2>
            </div>
            <div className="test-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="test-card">
                  <div className="test-stars">{t.stars}</div>
                  <p className="test-quote">"{t.quote}"</p>
                  <div className="test-author">
                    <div className="test-avatar">{t.name[0]}</div>
                    <div>
                      <div className="test-name">{t.name}</div>
                      <div className="test-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="sr-cta">
          <div className="sr-cta-bg" />
          <div className="section-wrap sr-cta-content">
            <span className="section-tag">Get Started Today</span>
            <h2 className="sr-cta-h2">Ready to Fix What<br /><span>Others Gave Up On?</span></h2>
            <p className="sr-cta-sub">Send us your board. We'll diagnose it, quote it, and rework it to as-new standard — or tell you honestly if it can't be saved.</p>
            <div className="cta-btns">
              <button className="btn-primary" style={{fontSize:"1rem", padding:"1rem 2.4rem"}}>Get Free Diagnosis →</button>
              <button className="btn-outline" style={{fontSize:"1rem", padding:"1rem 2.4rem"}}>Call Us Now</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sr-faq">
          <div className="section-wrap">
            <div className="faq-grid">
              <div className="faq-left">
                <span className="section-tag">FAQ</span>
                <h2 className="section-h2">Questions We<br /><span>Hear Often</span></h2>
                <p className="section-desc" style={{marginTop:"1rem"}}>Can't find your answer? Our team responds to email enquiries within 2 hours on business days.</p>
                <button className="btn-primary" style={{marginTop:"2rem"}}>Contact Support →</button>
              </div>
              <div className="faq-list">
                {faqs.map((f, i) => (
                  <div key={i} className="faq-item">
                    <button className={`faq-q ${openFaq===i?"open":""}`} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                      {f.q}
                      <span className="faq-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      </span>
                    </button>
                    <div className={`faq-ans ${openFaq===i?"open":""}`}>{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
<Footer />
      </div>
    </>
  );
}