import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "./Footer";

const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const colors = {
    orange: "#f47c20",
    orangeLight: "rgba(244,124,32,0.1)",
    orangeMid: "rgba(244,124,32,0.18)",
    black: "#0f0f0f",
    white: "#ffffff",
    offWhite: "#faf9f7",
    lightBg: "#f4f4f4",
    textMain: "#171717",
    textMuted: "#5f5f5f",
    border: "rgba(0,0,0,0.08)",
  };

  const categories = ["All", "Technology", "Innovation", "Sustainability", "Industry Insights", "Team Stories", "Tutorials"];

  const featuredPost = {
    category: "Innovation",
    title: "Why We Call It 'Natural Technology' — And Why It Changes Everything",
    excerpt: "Most companies ask: what can technology do? We ask: what should it do? This essay explores the philosophy that drives every MYACCESS product — and why it matters more now than ever.",
    author: "Surya",
    authorRole: "Founder, MYACCESS",
    authorImg: "/assets/aboutus/surya.webp",
    date: "April 12, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    tags: ["Philosophy", "Natural Technology", "Innovation"],
  };

  const posts = [
    {
      category: "Technology",
      title: "ESP32 vs STM32: Choosing the Right MCU for Your IoT Project",
      excerpt: "A practical engineering guide comparing two of the most popular microcontrollers — performance benchmarks, power consumption data, and real-world deployment considerations from our lab.",
      author: "Naveen",
      authorRole: "Co-Founder & CTO",
      authorImg: "/assets/aboutus/naveen1.webp",
      date: "Apr 5, 2024",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80",
      tags: ["Embedded", "ESP32", "STM32"],
      featured: false,
    },
    {
      category: "Sustainability",
      title: "How We Designed a Solar-Powered IoT Sensor That Runs for 5 Years",
      excerpt: "Power budgeting, component selection, and firmware sleep modes — a complete breakdown of how our agriculture sensor achieves 5-year battery life on a 2W solar panel.",
      author: "Kalla",
      authorRole: "Electronics Engineer",
      authorImg: "/assets/aboutus/kalla.webp",
      date: "Mar 28, 2024",
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
      tags: ["Solar", "Low Power", "Hardware Design"],
      featured: false,
    },
    {
      category: "Industry Insights",
      title: "The Hidden Cost of Manual Attendance in Indian Schools",
      excerpt: "A data-driven look at how paper-based attendance costs schools 200+ hours per year, creates compliance gaps, and how a simple RFID system eliminates all of it for ₹12,000.",
      author: "Surya",
      authorRole: "Founder, MYACCESS",
      authorImg: "/assets/aboutus/surya.webp",
      date: "Mar 20, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
      tags: ["Education", "Case Study", "ROI"],
      featured: false,
    },
    {
      category: "Tutorials",
      title: "Building a Real-Time Asset Tracker with BLE 5.0 and Django",
      excerpt: "Step-by-step tutorial: scan BLE beacons with ESP32, push data to a Django REST API, and visualize live positions on a React dashboard. Full code included.",
      author: "Jaideep",
      authorRole: "Frontend & Embedded Dev",
      authorImg: "/assets/aboutus/jaideep.webp",
      date: "Mar 14, 2024",
      readTime: "18 min read",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
      tags: ["Tutorial", "BLE", "Django", "React"],
      featured: true,
    },
    {
      category: "Team Stories",
      title: "From Workshop to 8 Countries: 5 Years of MYACCESS",
      excerpt: "Our co-founder Naveen reflects on the journey — the first prototype that almost didn't work, the client who changed everything, and what 'natural technology' really looks like in practice.",
      author: "Naveen",
      authorRole: "Co-Founder & CTO",
      authorImg: "/assets/aboutus/naveen1.webp",
      date: "Mar 7, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
      tags: ["Startup", "Team", "Journey"],
      featured: false,
    },
    {
      category: "Technology",
      title: "MQTT vs WebSockets: Which Should You Use for IoT Real-Time Data?",
      excerpt: "A thorough technical comparison — latency benchmarks, reliability at scale, offline behavior, and the protocol trade-offs that determine which is right for your use case.",
      author: "Sai",
      authorRole: "Back-End Developer",
      authorImg: "/assets/aboutus/sai.webp",
      date: "Feb 28, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&q=80",
      tags: ["MQTT", "WebSockets", "Backend"],
      featured: false,
    },
    {
      category: "Sustainability",
      title: "Zero-Waste Hardware: How We Redesigned Our PCB Packaging",
      excerpt: "The story of eliminating plastic from our hardware packaging — what we learned, the cost implications, and the design constraints that made it harder than expected.",
      author: "Reshma",
      authorRole: "Hardware Engineer",
      authorImg: "/assets/aboutus/reshma1.webp",
      date: "Feb 20, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      tags: ["Sustainability", "Hardware", "Packaging"],
      featured: false,
    },
    {
      category: "Industry Insights",
      title: "Why Indian Manufacturing is Ready for IoT — And What's Holding It Back",
      excerpt: "Based on conversations with 40+ plant managers across AP and Telangana, we examine the real barriers to IoT adoption in Indian manufacturing — and how to overcome them.",
      author: "Surya",
      authorRole: "Founder, MYACCESS",
      authorImg: "/assets/aboutus/surya.webp",
      date: "Feb 12, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
      tags: ["Manufacturing", "India", "IoT Adoption"],
      featured: false,
    },
    {
      category: "Tutorials",
      title: "Deploying Your First OTA Firmware Update with ESP32 and AWS IoT",
      excerpt: "A practical guide to building a secure, reliable OTA update pipeline — from firmware signing to rollback handling — using ESP-IDF and AWS IoT Jobs.",
      author: "Anusha",
      authorRole: "Embedded Developer",
      authorImg: "/assets/aboutus/anusha.webp",
      date: "Feb 5, 2024",
      readTime: "16 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      tags: ["OTA", "AWS IoT", "Firmware", "ESP32"],
      featured: false,
    },
  ];

  const trending = [
    { title: "ESP32 vs STM32: Choosing the Right MCU", views: "12.4K views", readTime: "11 min" },
    { title: "Building a BLE Asset Tracker with Django", views: "9.8K views", readTime: "18 min" },
    { title: "Why Natural Technology Changes Everything", views: "8.1K views", readTime: "9 min" },
    { title: "OTA Firmware Update with ESP32 & AWS IoT", views: "6.5K views", readTime: "16 min" },
    { title: "Solar-Powered IoT Sensor: 5-Year Battery Life", views: "5.9K views", readTime: "14 min" },
  ];

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = searchQuery === "" || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: colors.white, color: colors.textMain, overflowX: "hidden" }}>
      <FontLoader />
      <Header />

      <style>{`
        .blog-container { width: 90%; max-width: 1300px; margin: 0 auto; padding: 6rem 0; }

        /* Hero */
        .blog-hero { padding-top: 80px; background: ${colors.white}; border-bottom: 1px solid ${colors.border}; }

        /* Featured post */
        .featured-post { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 0; border-radius: 28px; overflow: hidden; border: 1.5px solid ${colors.border}; transition: 0.3s; }
        .featured-post:hover { box-shadow: 0 24px 60px rgba(0,0,0,0.08); border-color: ${colors.orange}; }

        /* Main layout: blog grid + sidebar */
        .blog-layout { display: grid; grid-template-columns: 1fr 320px; gap: 4rem; }

        /* Filter */
        .cat-filter { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .cat-btn { padding: 0.5rem 1.2rem; border-radius: 50px; border: 1.5px solid ${colors.border}; background: transparent; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: 0.25s; font-family: inherit; color: ${colors.textMain}; }
        .cat-btn:hover { border-color: ${colors.orange}; color: ${colors.orange}; }
        .cat-btn.active { background: ${colors.orange}; color: white; border-color: ${colors.orange}; }

        /* Blog card */
        .blog-card { display: grid; grid-template-columns: 260px 1fr; border-radius: 22px; overflow: hidden; border: 1.5px solid ${colors.border}; transition: 0.35s; background: ${colors.white}; margin-bottom: 1.5rem; }
        .blog-card:hover { border-color: ${colors.orange}; box-shadow: 0 16px 50px rgba(244,124,32,0.08); transform: translateX(4px); }
        .blog-card-img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 200px; }

        /* Tutorial badge */
        .tutorial-card { border-left: 4px solid ${colors.orange}; }

        /* Author chip */
        .author-chip { display: flex; align-items: center; gap: 0.6rem; }
        .author-avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; }

        /* Sidebar */
        .sidebar-sticky { position: sticky; top: 6rem; }

        /* Search */
        .search-input { width: 100%; padding: 0.9rem 1.2rem 0.9rem 2.8rem; border-radius: 12px; border: 1.5px solid ${colors.border}; font-size: 0.9rem; outline: none; font-family: inherit; color: ${colors.textMain}; background: ${colors.offWhite}; box-sizing: border-box; transition: 0.2s; }
        .search-input:focus { border-color: ${colors.orange}; background: ${colors.white}; }
        .search-wrap { position: relative; margin-bottom: 2rem; }
        .search-icon { position: absolute; left: 0.9rem; top: 50%; transform: translateY(-50%); color: ${colors.textMuted}; font-size: 1rem; }

        /* Trending */
        .trend-item { display: flex; gap: 0.8rem; padding: 0.9rem 0; border-bottom: 1px solid ${colors.border}; cursor: pointer; transition: 0.2s; }
        .trend-item:last-child { border-bottom: none; }
        .trend-item:hover .trend-title { color: ${colors.orange}; }
        .trend-num { font-size: 1.4rem; font-weight: 900; color: ${colors.border}; line-height: 1; min-width: 28px; }

        .orange-tag { display: inline-block; padding: 0.5rem 1.2rem; background: ${colors.orangeLight}; color: ${colors.orange}; border-radius: 50px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-bottom: 1.2rem; }
        .btn-orange { background: ${colors.orange}; color: white; border: none; padding: 1rem 2.2rem; border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s; font-size: 0.95rem; font-family: inherit; }
        .btn-orange:hover { background: #d96612; transform: translateY(-2px); }

        @media (max-width: 1100px) {
          .blog-layout { grid-template-columns: 1fr; gap: 3rem; }
          .sidebar-sticky { position: static; }
        }
        @media (max-width: 1024px) {
          .featured-post { grid-template-columns: 1fr; }
          .blog-card { grid-template-columns: 1fr; }
          .blog-card-img { min-height: 200px; max-height: 220px; }
        }
        @media (max-width: 768px) {
          .blog-container { padding: 3.5rem 0; }
          h1 { font-size: 2.6rem !important; }
        }
        @media (max-width: 480px) {
          h2 { font-size: 1.8rem !important; }
          h1 { font-size: 2rem !important; }
          .blog-container { padding: 3rem 0; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="blog-container" style={{ paddingBottom: "3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap" }}>
            <div>
              <div className="orange-tag">The MYACCESS Blog</div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem,5vw,4.5rem)", fontWeight: 700, lineHeight: 1.1, color: colors.black, margin: 0 }}>
                Ideas, Engineering &<br /><span style={{ color: colors.orange, fontStyle: "italic" }}>Honest Stories.</span>
              </h1>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.8rem", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.3rem" }}>Published monthly</div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: colors.orange }}>45+</div>
              <div style={{ fontSize: "0.8rem", color: colors.textMuted }}>Articles & Tutorials</div>
            </div>
          </div>
          <p style={{ fontSize: "1.1rem", color: colors.textMuted, lineHeight: 1.9, maxWidth: "680px", marginBottom: "2.5rem" }}>
            Technical deep-dives, industry analyses, team stories, and tutorials — written by the engineers and thinkers who build MYACCESS products every day. No content marketing. Just real knowledge.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section style={{ background: colors.offWhite }}>
        <div className="blog-container">
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="orange-tag">Editor's Pick</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 700, margin: 0 }}>This Month's Must-Read</h2>
          </div>
          <div className="featured-post">
            <div style={{ position: "relative", minHeight: "460px" }}>
              <img src={featuredPost.image} alt={featuredPost.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)" }} />
              <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem" }}>
                <span style={{ background: colors.orange, color: "white", padding: "0.3rem 0.9rem", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 800 }}>{featuredPost.category}</span>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 700, color: "white", marginTop: "0.8rem", lineHeight: 1.3 }}>{featuredPost.title}</h2>
              </div>
            </div>
            <div style={{ background: colors.white, padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                {featuredPost.tags.map((t, i) => (
                  <span key={i} style={{ padding: "0.25rem 0.7rem", background: colors.orangeLight, color: colors.orange, borderRadius: "50px", fontSize: "0.75rem", fontWeight: 700 }}>{t}</span>
                ))}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 700, marginBottom: "1.2rem", lineHeight: 1.3, display: "none" }}>{featuredPost.title}</h3>
              <p style={{ color: colors.textMuted, lineHeight: 1.8, fontSize: "1rem", marginBottom: "2rem" }}>{featuredPost.excerpt}</p>
              <div className="author-chip" style={{ marginBottom: "2rem" }}>
                <img src={featuredPost.authorImg} alt={featuredPost.author} className="author-avatar" style={{ width: "40px", height: "40px" }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.9rem" }}>{featuredPost.author}</div>
                  <div style={{ fontSize: "0.75rem", color: colors.textMuted }}>{featuredPost.authorRole}</div>
                </div>
                <div style={{ marginLeft: "auto", textAlign: "right" }}>
                  <div style={{ fontSize: "0.78rem", color: colors.textMuted }}>{featuredPost.date}</div>
                  <div style={{ fontSize: "0.78rem", color: colors.orange, fontWeight: 700 }}>{featuredPost.readTime}</div>
                </div>
              </div>
              <button className="btn-orange" style={{ alignSelf: "flex-start" }}>Read Full Article →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG LIBRARY + SIDEBAR ── */}
      <section style={{ background: colors.white }}>
        <div className="blog-container">
          {/* Category filter + search row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem", paddingBottom: "2rem", borderBottom: `1px solid ${colors.border}` }}>
            <div className="cat-filter">
              {categories.map(c => (
                <button key={c} className={`cat-btn ${activeCategory === c ? "active" : ""}`} onClick={() => setActiveCategory(c)}>{c}</button>
              ))}
            </div>
          </div>

          <div className="blog-layout">
            {/* Main: Blog Cards */}
            <div>
              {filtered.length === 0 ? (
                <div style={{ textAlign: "center", padding: "4rem", color: colors.textMuted }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
                  <p>No posts found. Try a different category or search term.</p>
                </div>
              ) : filtered.map((post, i) => (
                <div key={i} className={`blog-card ${post.category === "Tutorials" ? "tutorial-card" : ""}`}>
                  <div style={{ overflow: "hidden" }}>
                    <img src={post.image} alt={post.title} className="blog-card-img"
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      style={{ transition: "transform 0.4s" }} />
                  </div>
                  <div style={{ padding: "1.8rem 2rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.9rem", flexWrap: "wrap" }}>
                      <span style={{ padding: "0.25rem 0.7rem", background: colors.orangeLight, color: colors.orange, borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800 }}>{post.category}</span>
                      {post.featured && <span style={{ padding: "0.25rem 0.7rem", background: "#fdf3e8", color: "#d96612", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800 }}>⭐ Featured</span>}
                      {post.tags.slice(0, 2).map((t, j) => <span key={j} style={{ padding: "0.25rem 0.7rem", background: colors.lightBg, color: colors.textMuted, borderRadius: "50px", fontSize: "0.72rem", fontWeight: 600 }}>{t}</span>)}
                    </div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.35, marginBottom: "0.8rem", color: colors.textMain }}>{post.title}</h4>
                    <p style={{ fontSize: "0.87rem", color: colors.textMuted, lineHeight: 1.7, marginBottom: "1.3rem" }}>{post.excerpt}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.8rem" }}>
                      <div className="author-chip">
                        <img src={post.authorImg} alt={post.author} className="author-avatar" />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "0.82rem" }}>{post.author}</div>
                          <div style={{ fontSize: "0.72rem", color: colors.textMuted }}>{post.date} · {post.readTime}</div>
                        </div>
                      </div>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: colors.orange, cursor: "pointer", whiteSpace: "nowrap" }}>Read More →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="sidebar-sticky">
              {/* Search */}
              <div className="search-wrap">
                <span className="search-icon">🔍</span>
                <input type="text" className="search-input" placeholder="Search articles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>

              {/* Trending */}
              <div style={{ background: colors.offWhite, borderRadius: "20px", padding: "1.8rem", marginBottom: "1.5rem" }}>
                <div style={{ fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", color: colors.orange, marginBottom: "1.2rem" }}>Trending Now</div>
                {trending.map((t, i) => (
                  <div key={i} className="trend-item">
                    <span className="trend-num">0{i + 1}</span>
                    <div>
                      <div className="trend-title" style={{ fontWeight: 700, fontSize: "0.88rem", lineHeight: 1.4, marginBottom: "0.3rem", color: colors.textMain, transition: "0.2s" }}>{t.title}</div>
                      <div style={{ fontSize: "0.72rem", color: colors.textMuted }}>{t.views} · {t.readTime}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Categories */}
              <div style={{ background: colors.offWhite, borderRadius: "20px", padding: "1.8rem", marginBottom: "1.5rem" }}>
                <div style={{ fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", color: colors.orange, marginBottom: "1.2rem" }}>Categories</div>
                {categories.slice(1).map((c, i) => (
                  <div key={i} onClick={() => setActiveCategory(c)} style={{ display: "flex", justifyContent: "space-between", padding: "0.7rem 0", borderBottom: i < categories.length - 2 ? `1px solid ${colors.border}` : "none", cursor: "pointer", transition: "0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.paddingLeft = "6px"; e.currentTarget.querySelector(".cat-name").style.color = colors.orange; }}
                    onMouseLeave={e => { e.currentTarget.style.paddingLeft = "0"; e.currentTarget.querySelector(".cat-name").style.color = colors.textMain; }}>
                    <span className="cat-name" style={{ fontSize: "0.88rem", fontWeight: 600, color: colors.textMain, transition: "0.2s" }}>{c}</span>
                    <span style={{ fontSize: "0.78rem", color: colors.textMuted }}>{posts.filter(p => p.category === c).length} posts</span>
                  </div>
                ))}
              </div>

              {/* Newsletter CTA */}
              <div style={{ background: colors.black, borderRadius: "20px", padding: "1.8rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.8rem" }}>✉️</div>
                <div style={{ fontWeight: 800, color: colors.white, marginBottom: "0.6rem", fontSize: "1rem" }}>Get New Posts First</div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.83rem", lineHeight: 1.6, marginBottom: "1.2rem" }}>One email when we publish. No spam. Unsubscribe anytime.</p>
                <input type="email" placeholder="Your email" style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "0.88rem", outline: "none", fontFamily: "inherit", marginBottom: "0.8rem", boxSizing: "border-box" }} />
                <button className="btn-orange" style={{ width: "100%", padding: "0.9rem" }}>Subscribe</button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── WRITE FOR US ── */}
      <section style={{ background: colors.black, padding: "6rem 0", textAlign: "center" }}>
        <div style={{ width: "90%", maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "0.5rem 1.2rem", background: "rgba(255,255,255,0.1)", color: "white", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1.5rem" }}>Contributors Welcome</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700, color: colors.white, lineHeight: 1.2, marginBottom: "1.2rem" }}>
            Have Something Worth <span style={{ color: colors.orange, fontStyle: "italic" }}>Writing About?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            We publish guest articles from engineers, researchers, and industry practitioners. If you've built something interesting or learned something the community should know — we want to hear from you.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ background: colors.orange, color: "white", border: "none", padding: "1.2rem 2.8rem", borderRadius: "14px", fontWeight: 800, cursor: "pointer", fontSize: "1rem", fontFamily: "inherit", transition: "0.3s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#d96612"}
              onMouseLeave={e => e.currentTarget.style.background = colors.orange}>
              Submit a Guest Post →
            </button>
            <button style={{ background: "transparent", color: "white", border: "2px solid rgba(255,255,255,0.3)", padding: "1.2rem 2.8rem", borderRadius: "14px", fontWeight: 700, cursor: "pointer", fontSize: "1rem", fontFamily: "inherit", transition: "0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "transparent"; }}>
              View Guidelines
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogsPage;