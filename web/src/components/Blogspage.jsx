import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import Header from "../components/header";
import Footer from "./Footer";
import Skeleton from "./Skeleton";

const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

const C = {
  orange: "#f47c20", orangeLight: "rgba(244,124,32,0.10)",
  black: "#0f0f0f", white: "#ffffff", offWhite: "#faf9f7", lightBg: "#f4f4f4",
  textMain: "#171717", textMuted: "#5f5f5f", border: "rgba(0,0,0,0.08)",
};

const stripHtml = (h) => h ? h.replace(/<[^>]*>?/gm, "") : "";
const fmtDate  = (d) => new Date(d).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" });

const BlogsPage = () => {
  const [subEmail, setSubEmail] = useState("");
const [subLoading, setSubLoading] = useState(false);
  const [posts, setPosts]           = useState([]);
  const [categories, setCategories] = useState([]);
  const [trending, setTrending]     = useState([]);
  const [loading, setLoading]       = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery]       = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);
  // ── Fetch all data + realtime ──────────────────────────
  useEffect(() => {
    const init = async () => {
      const [{ data: postsData }, { data: catsData }, { data: trendData }] = await Promise.all([
        supabase.from("blogs").select("*").order("created_at", { ascending: false }),
        supabase.from("categories").select("*").order("sort_order"),
        supabase.from("trending").select("*").order("sort_order"),
      ]);
      setPosts(postsData || []);
      setCategories(catsData || []);
      setTrending(trendData || []);
      setLoading(false);
    };
    init();

const blogChannel = supabase.channel("blogs-rt")
  .on("postgres_changes", { event:"*", schema:"public", table:"blogs" }, () => {
    // Instead of using payload.new, just refetch everything
    supabase.from("blogs").select("*").order("created_at", { ascending: false })
      .then(({ data }) => setPosts(data || []));
  }).subscribe();

const catChannel = supabase.channel("cats-rt")
  .on("postgres_changes", { event:"*", schema:"public", table:"categories" }, () => {
    supabase.from("categories").select("*").order("sort_order")
      .then(({ data }) => setCategories(data || []));
  }).subscribe();

const trendChannel = supabase.channel("trend-rt")
  .on("postgres_changes", { event:"*", schema:"public", table:"trending" }, () => {
    supabase.from("trending").select("*").order("sort_order")
      .then(({ data }) => setTrending(data || []));
  }).subscribe();

    return () => {
      supabase.removeChannel(blogChannel);
      supabase.removeChannel(catChannel);
      supabase.removeChannel(trendChannel);
    };
  }, []);
  const handleSubscribe = async (e) => {
  e.preventDefault();
  setSubLoading(true);
  
  // Save email to Supabase subscribers table
  const { error } = await supabase.from("subscribers").insert([{ email: subEmail }]);
  
  if (error) {
    if (error.code === '23505') alert("You are already subscribed! 😊");
    else alert("Error: " + error.message);
  } else {
    alert("Success! You'll now receive our latest blogs.");
    setSubEmail("");
  }
  setSubLoading(false);
};

  const allCategories = ["All", ...categories.map(c => c.name)];
  const featuredPost  = posts.length > 0 ? posts[0] : null;

  const filtered = posts
    .slice(featuredPost ? 1 : 0)
    .filter(p => {
      const matchCat  = activeCategory === "All" || p.category === activeCategory;
      const matchSrch = searchQuery === "" || p.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSrch;
    });
    const indexOfLastPost  = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItems     = filtered.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages       = Math.ceil(filtered.length / postsPerPage);


  const catCount = (cat) => posts.filter(p => p.category === cat).length;

  return (
    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", backgroundColor:C.white, color:C.textMain, overflowX:"hidden" }}>
      <FontLoader />
      <Header />

      <style>{`
        .bc { width:90%; max-width:1300px; margin:0 auto; }
        .blog-hero { padding-top:80px; background:${C.white}; border-bottom:1px solid ${C.border}; }

        /* Featured */
        .feat { display:grid; grid-template-columns:1.2fr 0.8fr; border-radius:28px; overflow:hidden; border:1.5px solid ${C.border}; transition:box-shadow 0.3s,border-color 0.3s; }
        .feat:hover { box-shadow:0 24px 60px rgba(0,0,0,0.08); border-color:${C.orange}; }

        /* Layout */
        .blog-layout { display:grid; grid-template-columns:1fr 320px; gap:4rem; }

        /* Filter */
        .cat-filter { display:flex; gap:0.5rem; flex-wrap:wrap; }
        .cat-btn { padding:0.5rem 1.2rem; border-radius:50px; border:1.5px solid ${C.border}; background:transparent; font-size:0.85rem; font-weight:600; cursor:pointer; transition:0.25s; font-family:inherit; color:${C.textMain}; }
        .cat-btn:hover { border-color:${C.orange}; color:${C.orange}; }
        .cat-btn.active { background:${C.orange}; color:white; border-color:${C.orange}; }

        /* Blog card */
        .blog-card { display:grid; grid-template-columns:260px 1fr; border-radius:22px; overflow:hidden; border:1.5px solid ${C.border}; transition:0.35s; background:${C.white}; margin-bottom:1.5rem; }
        .blog-card:hover { border-color:${C.orange}; box-shadow:0 16px 50px rgba(244,124,32,0.08); transform:translateX(4px); }
        .blog-card-img { width:100%; height:100%; object-fit:cover; display:block; min-height:200px; transition:transform 0.4s; }
        .blog-card-img-wrap { overflow:hidden; }
        .blog-card:hover .blog-card-img { transform:scale(1.05); }
        .tutorial-card { border-left:4px solid ${C.orange}; }

        /* Sidebar */
        .sidebar-sticky { position:sticky; top:6rem; }
        .search-wrap { position:relative; margin-bottom:2rem; }
        .search-input { width:100%; padding:0.9rem 1.2rem 0.9rem 2.8rem; border-radius:12px; border:1.5px solid ${C.border}; font-size:0.9rem; outline:none; font-family:inherit; color:${C.textMain}; background:${C.offWhite}; box-sizing:border-box; transition:0.2s; }
        .search-input:focus { border-color:${C.orange}; background:${C.white}; }
        .search-icon { position:absolute; left:0.9rem; top:50%; transform:translateY(-50%); pointer-events:none; }
        .trend-item { display:flex; gap:0.8rem; padding:0.9rem 0; border-bottom:1px solid ${C.border}; cursor:pointer; }
        .trend-item:last-child { border-bottom:none; }
        .trend-item:hover .trend-title { color:${C.orange}; }
        .trend-num { font-size:1.4rem; font-weight:900; color:${C.border}; line-height:1; min-width:28px; }

        .otag { display:inline-block; padding:0.5rem 1.2rem; background:${C.orangeLight}; color:${C.orange}; border-radius:50px; font-size:0.8rem; font-weight:800; text-transform:uppercase; margin-bottom:1.2rem; }
        .btn-o { background:${C.orange}; color:white; border:none; padding:1rem 2.2rem; border-radius:12px; font-weight:700; cursor:pointer; transition:0.3s; font-size:0.95rem; font-family:inherit; }
        .btn-o:hover { background:#d96612; transform:translateY(-2px); }
        .avatar-init { width:32px; height:32px; border-radius:50%; background:${C.orangeLight}; display:flex; align-items:center; justify-content:center; font-weight:800; color:${C.orange}; font-size:0.85rem; flex-shrink:0; }

        @media(max-width:1100px){ .blog-layout{grid-template-columns:1fr;gap:3rem} .sidebar-sticky{position:static} }
        @media(max-width:1024px){ .feat{grid-template-columns:1fr} .blog-card{grid-template-columns:1fr} .blog-card-img{min-height:200px;max-height:240px} }
        @media(max-width:768px){ .bc{width:92%} .blog-hero{padding-top:70px} .cat-btn{font-size:0.78rem;padding:0.4rem 1rem} }
        @media(max-width:480px){ .bc{width:94%} .blog-card{grid-template-columns:1fr} }
      `}</style>

      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="bc" style={{ paddingTop:"5rem", paddingBottom:"3rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:"2rem", alignItems:"flex-end", marginBottom:"2rem", flexWrap:"wrap" }}>
            <div>
              <div className="otag">The MYACCESS Blog</div>
              <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.4rem,5vw,4.5rem)", fontWeight:700, lineHeight:1.1, color:C.black, margin:0 }}>
                Ideas, Engineering &<br /><span style={{ color:C.orange, fontStyle:"italic" }}>Honest Stories.</span>
              </h1>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:"0.8rem", color:C.textMuted, textTransform:"uppercase", letterSpacing:"1.5px", marginBottom:"0.3rem" }}>Published monthly</div>
              <div style={{ fontSize:"2rem", fontWeight:800, color:C.orange }}>{loading ? "—" : `${posts.length}+`}</div>
              <div style={{ fontSize:"0.8rem", color:C.textMuted }}>Articles & Tutorials</div>
            </div>
          </div>
          <p style={{ fontSize:"1.05rem", color:C.textMuted, lineHeight:1.9, maxWidth:"680px", margin:0 }}>
            Technical deep-dives, industry analyses, team stories, and tutorials — written by the engineers and thinkers who build MYACCESS products every day.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section style={{ background:C.offWhite, padding:"5rem 0" }}>
        <div className="bc">
          <div style={{ marginBottom:"2.5rem" }}>
            <div className="otag">Editor's Pick</div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:700, margin:0 }}>This Month's Must-Read</h2>
          </div>

          {loading ? (
            <div style={{ display:"grid", gridTemplateColumns:"1.2fr 0.8fr", borderRadius:"28px", overflow:"hidden", border:`1.5px solid ${C.border}` }}>
              <Skeleton width="100%" height="420px" borderRadius="0" />
              <div style={{ padding:"3rem", background:C.white }}>
                <Skeleton width="60%" height="20px" margin="0 0 12px 0" />
                <Skeleton width="90%" height="28px" margin="0 0 16px 0" />
                <Skeleton width="100%" height="80px" margin="0 0 24px 0" />
                <Skeleton width="50%" height="48px" />
              </div>
            </div>
          ) : featuredPost ? (
            <div className="feat">
              <div style={{ position:"relative", minHeight:"420px" }}>
                <img src={featuredPost.image_url} alt={featuredPost.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%)" }} />
                <div style={{ position:"absolute", bottom:"2rem", left:"2rem", right:"2rem" }}>
                  <span style={{ background:C.orange, color:"white", padding:"0.3rem 0.9rem", borderRadius:"50px", fontSize:"0.75rem", fontWeight:800 }}>{featuredPost.category}</span>
                  <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.4rem,2.5vw,2rem)", fontWeight:700, color:"white", marginTop:"0.8rem", lineHeight:1.3, marginBottom:0 }}>{featuredPost.title}</h2>
                </div>
              </div>
              <div style={{ background:C.white, padding:"clamp(2rem,4vw,3rem)", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                <span style={{ padding:"0.25rem 0.7rem", background:C.orangeLight, color:C.orange, borderRadius:"50px", fontSize:"0.75rem", fontWeight:700, alignSelf:"flex-start", marginBottom:"1.5rem" }}>{featuredPost.category}</span>
              <p style={{ color:C.textMuted, lineHeight:1.8, fontSize:"1rem", marginBottom:"1rem" }}> 
  {/* Removed flex:1 and reduced margin to 1rem */}
  {stripHtml(featuredPost.content).substring(0, 220)}...
</p>
<div style={{ display:"flex", alignItems:"center", gap:"0.8rem", marginBottom:"1.2rem" }}> 
  {/* Reduced margin from 2rem to 1.2rem */}
                  <div className="avatar-init" style={{ width:"40px", height:"40px", fontSize:"1rem" }}>{featuredPost.author?.[0]||"A"}</div>
                  <div>
                    <div style={{ fontWeight:800, fontSize:"0.9rem" }}>{featuredPost.author}</div>
                    <div style={{ fontSize:"0.75rem", color:C.textMuted }}>{fmtDate(featuredPost.created_at)}</div>
                  </div>
                  <div style={{ marginLeft:"auto" }}>
                    <div style={{ fontSize:"0.78rem", color:C.orange, fontWeight:700 }}>{featuredPost.read_time}</div>
                  </div>
                </div>
                <Link to={`/blogs/${featuredPost.slug}`} style={{ textDecoration:"none" }}>
                  <button className="btn-o">Read Full Article →</button>
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ textAlign:"center", padding:"4rem", color:C.textMuted, background:C.white, borderRadius:"28px", border:`1.5px solid ${C.border}` }}>
              <div style={{ fontSize:"3rem", marginBottom:"1rem" }}>📝</div>
              <p style={{ fontWeight:600 }}>No posts yet. Publish your first blog from the Admin panel!</p>
            </div>
          )}
        </div>
      </section>

      {/* ── BLOG LIBRARY + SIDEBAR ── */}
      <section style={{ background:C.white, padding:"5rem 0" }}>
        <div className="bc">
          {/* Category filter */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem", marginBottom:"3rem", paddingBottom:"2rem", borderBottom:`1px solid ${C.border}` }}>
            <div className="cat-filter">
              {loading
                ? [1,2,3,4].map(n=><Skeleton key={n} width="100px" height="36px" borderRadius="50px" />)
                : allCategories.map(c=>(
                  <button key={c} className={`cat-btn ${activeCategory===c?"active":""}`} onClick={()=>setActiveCategory(c)}>{c}</button>
                ))
              }
            </div>
          </div>

          <div className="blog-layout">
            {/* Blog Cards */}
         {/* --- Replace the Blog Cards Column with this --- */}
<div>
  {loading
    ? [1, 2, 3].map(n => (
      <div key={n} style={{ display: "grid", gridTemplateColumns: "260px 1fr", borderRadius: "22px", overflow: "hidden", border: `1.5px solid ${C.border}`, marginBottom: "1.5rem" }}>
        <Skeleton width="100%" height="220px" borderRadius="0" />
        <div style={{ padding: "1.8rem" }}>
          <Skeleton width="40%" height="18px" margin="0 0 10px 0" />
          <Skeleton width="90%" height="26px" margin="0 0 10px 0" />
          <Skeleton width="100%" height="60px" margin="0 0 16px 0" />
        </div>
      </div>
    ))
    : filtered.length === 0
      ? (
        <div style={{ textAlign: "center", padding: "4rem", color: C.textMuted, background: C.offWhite, borderRadius: "22px" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
          <p style={{ fontWeight: 600 }}>No posts found.</p>
        </div>
      )
      : (
        <>
          {currentItems.map((post) => (
            <div key={post.id} className={`blog-card ${post.category === "Tutorials" ? "tutorial-card" : ""}`}>
              <div className="blog-card-img-wrap">
                <img src={post.image_url} alt={post.title} className="blog-card-img" />
              </div>
              <div style={{ padding: "1.8rem 2rem" }}>
                <span style={{ padding: "0.25rem 0.7rem", background: C.orangeLight, color: C.orange, borderRadius: "50px", fontSize: "0.72rem", fontWeight: 800, display: 'inline-block', marginBottom: '0.8rem' }}>{post.category}</span>
                <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.35, marginBottom: "0.8rem", color: C.textMain, marginTop: 0 }}>{post.title}</h4>
                <p style={{ fontSize: "0.87rem", color: C.textMuted, lineHeight: 1.7, marginBottom: "1.3rem" }}>
                  {stripHtml(post.content).substring(0, 130)}...
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div className="avatar-init">{post.author?.[0] || "A"}</div>
                    <div style={{ fontSize: "0.72rem", color: C.textMuted }}>{fmtDate(post.created_at)} · {post.read_time}</div>
                  </div>
                  <Link to={`/blogs/${post.slug}`} style={{ fontSize: "0.85rem", fontWeight: 700, color: C.orange, textDecoration: "none" }}>Read More →</Link>
                </div>
              </div>
            </div>
          ))}

          {/* --- PAGINATION UI --- */}
          {totalPages > 1 && (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", marginTop: "3rem" }}>
              <button 
                disabled={currentPage === 1}
                onClick={() => {setCurrentPage(currentPage - 1); window.scrollTo(0, 800);}}
                style={{ padding: "0.6rem 1rem", borderRadius: "10px", border: `1.5px solid ${C.border}`, background: C.white, cursor: currentPage === 1 ? "not-allowed" : "pointer", fontWeight: 700, opacity: currentPage === 1 ? 0.5 : 1 }}
              >
                Prev
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {setCurrentPage(i + 1); window.scrollTo(0, 800);}}
                  style={{ 
                    width: "40px", height: "40px", borderRadius: "10px", border: "none", 
                    background: currentPage === i + 1 ? C.orange : C.offWhite, 
                    color: currentPage === i + 1 ? "white" : C.textMain,
                    fontWeight: 700, cursor: "pointer"
                  }}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                disabled={currentPage === totalPages}
                onClick={() => {setCurrentPage(currentPage + 1); window.scrollTo(0, 800);}}
                style={{ padding: "0.6rem 1rem", borderRadius: "10px", border: `1.5px solid ${C.border}`, background: C.white, cursor: currentPage === totalPages ? "not-allowed" : "pointer", fontWeight: 700, opacity: currentPage === totalPages ? 0.5 : 1 }}
              >
                Next
              </button>
            </div>
          )}
        </>
      )
  }
</div>

            {/* Sidebar */}
            <aside className="sidebar-sticky">
              {/* Search */}
              <div className="search-wrap">
                <span className="search-icon">🔍</span>
                <input type="text" className="search-input" placeholder="Search articles..." value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} />
              </div>

              {/* Trending */}
              <div style={{ background:C.offWhite, borderRadius:"20px", padding:"1.8rem", marginBottom:"1.5rem" }}>
                <div style={{ fontWeight:800, fontSize:"0.85rem", textTransform:"uppercase", letterSpacing:"1.5px", color:C.orange, marginBottom:"1.2rem" }}>Trending Now</div>
                {loading
                  ? [1,2,3].map(n=><Skeleton key={n} width="100%" height="50px" margin="0 0 10px 0" />)
                  : trending.length > 0
                    ? trending.map((t,i)=>(
                      <div key={t.id} className="trend-item">
                        <span className="trend-num">0{i+1}</span>
                        <div>
                          <div className="trend-title" style={{ fontWeight:700, fontSize:"0.88rem", lineHeight:1.4, marginBottom:"0.3rem", color:C.textMain, transition:"0.2s" }}>{t.title}</div>
                          <div style={{ fontSize:"0.72rem", color:C.textMuted }}>{t.views} · {t.read_time}</div>
                        </div>
                      </div>
                    ))
                    : <div style={{ color:C.textMuted, fontSize:"0.85rem" }}>No trending items yet.</div>
                }
              </div>

              {/* Categories */}
              <div style={{ background:C.offWhite, borderRadius:"20px", padding:"1.8rem", marginBottom:"1.5rem" }}>
                <div style={{ fontWeight:800, fontSize:"0.85rem", textTransform:"uppercase", letterSpacing:"1.5px", color:C.orange, marginBottom:"1.2rem" }}>Categories</div>
                {loading
                  ? [1,2,3,4].map(n=><Skeleton key={n} width="100%" height="36px" margin="0 0 8px 0" />)
                  : categories.map((c, i)=>(
                    <div key={c.id} onClick={()=>setActiveCategory(c.name)}
                      style={{ display:"flex", justifyContent:"space-between", padding:"0.7rem 0", borderBottom:i<categories.length-1?`1px solid ${C.border}`:"none", cursor:"pointer", transition:"0.2s" }}
                      onMouseEnter={e=>{ e.currentTarget.style.paddingLeft="6px"; e.currentTarget.querySelector(".cn").style.color=C.orange; }}
                      onMouseLeave={e=>{ e.currentTarget.style.paddingLeft="0"; e.currentTarget.querySelector(".cn").style.color=C.textMain; }}>
                      <span className="cn" style={{ fontSize:"0.88rem", fontWeight:600, color:C.textMain, transition:"0.2s" }}>{c.name}</span>
                      <span style={{ fontSize:"0.78rem", color:C.textMuted }}>{catCount(c.name)} posts</span>
                    </div>
                  ))
                }
              </div>

              {/* Newsletter */}
              <div style={{ background:C.black, borderRadius:"20px", padding:"1.8rem" }}>
                <div style={{ fontSize:"1.5rem", marginBottom:"0.8rem" }}>✉️</div>
                <div style={{ fontWeight:800, color:C.white, marginBottom:"0.6rem", fontSize:"1rem" }}>Get New Posts First</div>
                <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"0.83rem", lineHeight:1.6, marginBottom:"1.2rem" }}>One email when we publish. No spam.</p>
               <form onSubmit={handleSubscribe}>
  <input 
    type="email" 
    required
    placeholder="Your email" 
    value={subEmail}
    onChange={(e) => setSubEmail(e.target.value)}
    style={{ width:"100%", padding:"0.8rem 1rem", borderRadius:"10px", border:"1px solid rgba(255,255,255,0.15)", background:"rgba(255,255,255,0.08)", color:"white", fontSize:"0.88rem", outline:"none", fontFamily:"inherit", marginBottom:"0.8rem", boxSizing:"border-box" }} 
  />
  <button type="submit" disabled={subLoading} className="btn-o" style={{ width:"100%", padding:"0.9rem" }}>
    {subLoading ? "Joining..." : "Subscribe"}
  </button>
</form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── WRITE FOR US ── */}
      <section style={{ background:C.black, padding:"6rem 0", textAlign:"center" }}>
        <div style={{ width:"90%", maxWidth:"800px", margin:"0 auto" }}>
          <div style={{ display:"inline-block", padding:"0.5rem 1.2rem", background:"rgba(255,255,255,0.1)", color:"white", borderRadius:"50px", fontSize:"0.8rem", fontWeight:800, textTransform:"uppercase", marginBottom:"1.5rem" }}>Contributors Welcome</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:700, color:C.white, lineHeight:1.2, marginBottom:"1.2rem" }}>
            Have Something Worth <span style={{ color:C.orange, fontStyle:"italic" }}>Writing About?</span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"1.05rem", lineHeight:1.8, marginBottom:"2.5rem" }}>
            We publish guest articles from engineers, researchers, and industry practitioners. If you've built something interesting — we want to hear from you.
          </p>
          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
            <button style={{ background:C.orange, color:"white", border:"none", padding:"1.2rem 2.8rem", borderRadius:"14px", fontWeight:800, cursor:"pointer", fontSize:"1rem", fontFamily:"inherit", transition:"0.3s" }}
              onMouseEnter={e=>e.currentTarget.style.background="#d96612"}
              onMouseLeave={e=>e.currentTarget.style.background=C.orange}>
              Submit a Guest Post →
            </button>
            <button style={{ background:"transparent", color:"white", border:"2px solid rgba(255,255,255,0.3)", padding:"1.2rem 2.8rem", borderRadius:"14px", fontWeight:700, cursor:"pointer", fontSize:"1rem", fontFamily:"inherit", transition:"0.3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="white"; e.currentTarget.style.background="rgba(255,255,255,0.08)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,0.3)"; e.currentTarget.style.background="transparent"; }}>
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