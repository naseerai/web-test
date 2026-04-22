import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
  black: "#0f0f0f", white: "#ffffff", offWhite: "#faf9f7",
  textMain: "#171717", textMuted: "#5f5f5f", border: "rgba(0,0,0,0.08)",
};

const fmtDate = (d) => new Date(d).toLocaleDateString("en-IN", { day:"numeric", month:"long", year:"numeric" });

const BlogPostDetail = () => {
  const { slug }  = useParams();
  const [post, setPost]         = useState(null);
  const [related, setRelated]   = useState([]);
  const [loading, setLoading]   = useState(true);
  const [readPct, setReadPct]   = useState(0);

  // Read progress bar
  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setReadPct(Math.min(100, Math.round(pct)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!slug) return;
    const fetch = async () => {
      setLoading(true);
      window.scrollTo(0, 0);
      const { data, error } = await supabase.from("blogs").select("*").eq("slug", slug).single();
      if (!error && data) {
        setPost(data);
        // Fetch related (same category, different slug)
        const { data: rel } = await supabase
          .from("blogs")
          .select("id,title,slug,image_url,category,read_time,author,created_at")
          .eq("category", data.category)
          .neq("slug", slug)
          .limit(3);
        setRelated(rel || []);
      }
      setLoading(false);
    };
    fetch();
  }, [slug]);

  if (loading) return (
    <div style={{ background:C.white, minHeight:"100vh", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
      <FontLoader /><Header />
      <div style={{ maxWidth:"860px", margin:"0 auto", padding:"10rem 5% 6rem" }}>
        <Skeleton width="100%" height="460px" borderRadius="24px" />
        <Skeleton width="70%" height="40px" margin="30px 0 12px 0" />
        <Skeleton width="50%" height="20px" margin="0 0 30px 0" />
        <Skeleton width="100%" height="20px" margin="0 0 10px 0" />
        <Skeleton width="90%" height="20px" margin="0 0 10px 0" />
        <Skeleton width="95%" height="20px" />
      </div>
    </div>
  );

  if (!post) return (
    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", background:C.white, minHeight:"100vh" }}>
      <FontLoader /><Header />
      <div style={{ padding:"14rem 5%", textAlign:"center" }}>
        <div style={{ fontSize:"4rem", marginBottom:"1rem" }}>🤔</div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.5rem", fontWeight:700, marginBottom:"1rem" }}>Post Not Found</h2>
        <p style={{ color:C.textMuted, marginBottom:"2rem" }}>This article may have been moved or deleted.</p>
        <Link to="/blogs" style={{ background:C.orange, color:"white", padding:"1rem 2rem", borderRadius:"12px", textDecoration:"none", fontWeight:700 }}>← Back to Blog</Link>
      </div>
      <Footer />
    </div>
  );

  return (
    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", backgroundColor:C.white, color:C.textMain }}>
      <FontLoader />

     

      <Header />

      <style>{`
        /* Content typography */
        .blog-body h1,.blog-body h2 { font-family:'Cormorant Garamond',serif; font-weight:700; line-height:1.3; color:${C.black}; margin:2.5rem 0 1rem; }
        .blog-body h1 { font-size:clamp(1.8rem,4vw,2.5rem); }
        .blog-body h2 { font-size:clamp(1.4rem,3vw,2rem); }
        .blog-body h3 { font-size:1.25rem; font-weight:700; margin:2rem 0 0.8rem; color:${C.black}; }
        .blog-body p  { margin:0 0 1.5rem; color:#333; }
        .blog-body a  { color:${C.orange}; font-weight:600; }
        .blog-body ul,.blog-body ol { margin:0 0 1.5rem 1.5rem; }
        .blog-body li { margin-bottom:0.5rem; color:#333; }
        .blog-body blockquote { border-left:4px solid ${C.orange}; margin:2rem 0; padding:1.2rem 1.8rem; background:${C.offWhite}; border-radius:0 12px 12px 0; font-style:italic; color:${C.textMuted}; font-size:1.05rem; }
        .blog-body img { max-width:100%; border-radius:16px; margin:1.5rem 0; display:block; }
        .blog-body code { background:${C.offWhite}; padding:0.15rem 0.45rem; border-radius:5px; font-size:0.88em; color:${C.orange}; }
.blog-body pre { background:#0f0f0f; color:#e6e6e6; padding:1.5rem; border-radius:14px;
  overflow-x:auto; margin:1.5rem 0; font-size:0.9rem; line-height:1.7;
  max-width:100%; white-space:pre-wrap; word-break:break-all; }        .blog-body strong { color:${C.textMain}; font-weight:700; }
        .blog-body hr { border:none; border-top:1px solid ${C.border}; margin:2.5rem 0; }
        .blog-body table { width:100%; border-collapse:collapse; margin:1.5rem 0; }
        .blog-body th { background:${C.offWhite}; padding:0.8rem 1rem; text-align:left; font-weight:700; font-size:0.88rem; border-bottom:2px solid ${C.border}; }
        .blog-body td { padding:0.8rem 1rem; border-bottom:1px solid ${C.border}; font-size:0.9rem; color:#333; }
        /* Related card hover */
        .rel-card { border:1.5px solid ${C.border}; border-radius:20px; overflow:hidden; transition:0.3s; background:${C.white}; text-decoration:none; color:inherit; display:block; }
        .rel-card:hover { border-color:${C.orange}; box-shadow:0 12px 40px rgba(244,124,32,0.1); transform:translateY(-4px); }
        /* Share btn */
        .share-btn { display:flex; align-items:center; gap:0.5rem; padding:0.6rem 1.2rem; border-radius:50px; border:1.5px solid ${C.border}; background:transparent; font-family:inherit; font-size:0.82rem; font-weight:700; cursor:pointer; transition:0.2s; }
        .share-btn:hover { border-color:${C.orange}; color:${C.orange}; }
@media(max-width:768px){ 
  .blog-meta-bar { flex-wrap:wrap; gap:1rem!important; }
  .rel-grid { grid-template-columns:1fr!important; }
  .content-grid { grid-template-columns:1fr!important; gap:2rem!important; }
  .content-sidebar { position:static!important; }
}      `}</style>

      {/* ── HERO HEADER ── */}
      <header style={{ background:C.offWhite, paddingTop:"120px", paddingBottom:0 }}>
        <div style={{ width:"90%", maxWidth:"900px", margin:"0 auto", paddingBottom:"3rem" }}>
          <Link to="/blogs" style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", color:C.orange, textDecoration:"none", fontWeight:800, fontSize:"0.85rem", marginBottom:"2rem", textTransform:"uppercase", letterSpacing:"1px" }}>
            ← Back to Blog
          </Link>

          {/* Category + tags */}
          <div style={{ display:"flex", gap:"0.6rem", marginBottom:"1.5rem", flexWrap:"wrap" }}>
            <span style={{ padding:"0.35rem 1rem", background:C.orange, color:"white", borderRadius:"50px", fontSize:"0.78rem", fontWeight:800 }}>{post.category}</span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.4rem)", fontWeight:700, lineHeight:1.2, color:C.black, margin:"0 0 2rem 0" }}>
            {post.title}
          </h1>

          {/* Meta bar */}
          <div className="blog-meta-bar" style={{ display:"flex", alignItems:"center", gap:"2rem", paddingBottom:"2rem", borderBottom:`1px solid ${C.border}` }}>
            <div style={{ display:"flex", alignItems:"center", gap:"0.8rem" }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"50%", background:C.orangeLight, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, color:C.orange, fontSize:"1.1rem", flexShrink:0 }}>
                {post.author?.[0]||"A"}
              </div>
              <div>
                <div style={{ fontWeight:800, fontSize:"0.95rem" }}>{post.author}</div>
                <div style={{ fontSize:"0.78rem", color:C.textMuted }}>Author</div>
              </div>
            </div>
            <div style={{ width:"1px", height:"40px", background:C.border }} />
            <div>
              <div style={{ fontWeight:700, fontSize:"0.88rem" }}>{fmtDate(post.created_at)}</div>
              <div style={{ fontSize:"0.75rem", color:C.textMuted }}>Published</div>
            </div>
            <div style={{ width:"1px", height:"40px", background:C.border }} />
            <div>
              <div style={{ fontWeight:700, fontSize:"0.88rem", color:C.orange }}>{post.read_time}</div>
              <div style={{ fontSize:"0.75rem", color:C.textMuted }}>Read time</div>
            </div>
            {/* Share buttons */}
            <div style={{ marginLeft:"auto", display:"flex", gap:"0.6rem" }}>
              <button className="share-btn" onClick={()=>navigator.clipboard.writeText(window.location.href).then(()=>alert("Link copied!"))}>
                🔗 Copy Link
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO IMAGE ── */}
      <div style={{ width:"90%", maxWidth:"1100px", margin:"0 auto" }}>
        <img
          src={post.image_url}
          alt={post.title}
          style={{ width:"100%", maxHeight:"520px", objectFit:"cover", borderRadius:"0 0 28px 28px", display:"block" }}
        />
      </div>

      {/* ── CONTENT + STICKY SIDEBAR ── */}
      <div className="content-grid" style={{ width:"90%", maxWidth:"1100px", 
  margin:"0 auto", padding:"4rem 0 6rem", display:"grid", 
  gridTemplateColumns:"1fr 260px", gap:"5rem", minWidth:0 }}>

        {/* Article body */}
        <article style={{ minWidth: 0, overflow: "hidden" }}>
          <div
            className="blog-body"
            style={{ fontSize:"1.12rem", lineHeight:"1.95", color:"#2d2d2d" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author card */}
          <div style={{ marginTop:"4rem", padding:"2rem", background:C.offWhite, borderRadius:"20px", border:`1.5px solid ${C.border}`, display:"flex", alignItems:"center", gap:"1.5rem", flexWrap:"wrap" }}>
            <div style={{ width:"64px", height:"64px", borderRadius:"50%", background:C.orangeLight, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, color:C.orange, fontSize:"1.6rem", flexShrink:0 }}>
              {post.author?.[0]||"A"}
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:"0.75rem", color:C.textMuted, fontWeight:700, textTransform:"uppercase", letterSpacing:"1px", marginBottom:"0.3rem" }}>Written by</div>
              <div style={{ fontWeight:800, fontSize:"1.1rem", color:C.textMain }}>{post.author}</div>
              <div style={{ fontSize:"0.85rem", color:C.textMuted, marginTop:"0.3rem" }}>MYACCESS Team</div>
            </div>
            <Link to="/blogs" style={{ background:C.orange, color:"white", padding:"0.75rem 1.6rem", borderRadius:"10px", textDecoration:"none", fontWeight:700, fontSize:"0.88rem", whiteSpace:"nowrap" }}>
              More Articles →
            </Link>
          </div>
        </article>

        {/* Sticky sidebar */}
       <aside className="content-sidebar" style={{ position:"sticky", top:"6rem", alignSelf:"flex-start" }}>
          {/* Table of contents (simple) */}
          <div style={{ background:C.offWhite, borderRadius:"20px", padding:"1.8rem", marginBottom:"1.5rem" }}>
            <div style={{ fontWeight:800, fontSize:"0.82rem", textTransform:"uppercase", letterSpacing:"1.5px", color:C.orange, marginBottom:"1.2rem" }}>Article Info</div>
            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              {[
                { label:"Category", value:post.category },
                { label:"Published", value:fmtDate(post.created_at) },
                { label:"Read Time", value:post.read_time },
                { label:"Author", value:post.author },
              ].map((item,i)=>(
                <div key={i} style={{ paddingBottom:"0.9rem", borderBottom:i<3?`1px solid ${C.border}`:"none" }}>
                  <div style={{ fontSize:"0.72rem", color:C.textMuted, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.8px", marginBottom:"0.2rem" }}>{item.label}</div>
                  <div style={{ fontSize:"0.9rem", fontWeight:700, color:C.textMain }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Share */}
          <div style={{ background:C.black, borderRadius:"20px", padding:"1.8rem" }}>
            <div style={{ fontWeight:800, color:C.white, fontSize:"0.95rem", marginBottom:"0.5rem" }}>Share this Article</div>
            <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"0.82rem", lineHeight:1.6, marginBottom:"1.2rem" }}>Found this useful? Share it with your team.</p>
            <button onClick={()=>navigator.clipboard.writeText(window.location.href).then(()=>alert("Link copied!"))}
              style={{ width:"100%", padding:"0.85rem", background:C.orange, color:"white", border:"none", borderRadius:"10px", fontFamily:"inherit", fontWeight:700, cursor:"pointer", fontSize:"0.88rem" }}>
              🔗 Copy Article Link
            </button>
          </div>
        </aside>
      </div>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section style={{ background:C.offWhite, padding:"5rem 0" }}>
          <div style={{ width:"90%", maxWidth:"1100px", margin:"0 auto" }}>
            <div style={{ marginBottom:"2.5rem" }}>
              <div style={{ display:"inline-block", padding:"0.4rem 1rem", background:C.orangeLight, color:C.orange, borderRadius:"50px", fontSize:"0.78rem", fontWeight:800, textTransform:"uppercase", marginBottom:"0.8rem" }}>More Like This</div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:700, margin:0 }}>Related Articles</h2>
            </div>
            <div className="rel-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
              {related.map(r=>(
                <Link key={r.id} to={`/blogs/${r.slug}`} className="rel-card">
                  <img src={r.image_url} alt={r.title} style={{ width:"100%", height:"180px", objectFit:"cover", display:"block" }} />
                  <div style={{ padding:"1.4rem" }}>
                    <span style={{ padding:"0.2rem 0.7rem", background:C.orangeLight, color:C.orange, borderRadius:"50px", fontSize:"0.7rem", fontWeight:800 }}>{r.category}</span>
                    <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.15rem", fontWeight:700, lineHeight:1.35, margin:"0.7rem 0 0.5rem", color:C.textMain }}>{r.title}</h4>
                    <div style={{ fontSize:"0.75rem", color:C.textMuted }}>{r.author} · {r.read_time}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section style={{ background:C.black, padding:"5rem 0", textAlign:"center" }}>
        <div style={{ width:"90%", maxWidth:"700px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:700, color:C.white, lineHeight:1.2, marginBottom:"1rem" }}>
            Enjoyed this article?
          </h2>
          <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"1rem", lineHeight:1.8, marginBottom:"2rem" }}>
            Explore more technical deep-dives, industry insights, and stories from the MYACCESS team.
          </p>
          <Link to="/blogs" style={{ display:"inline-block", background:C.orange, color:"white", padding:"1.1rem 2.8rem", borderRadius:"14px", fontWeight:800, textDecoration:"none", fontSize:"1rem" }}>
            Browse All Articles →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostDetail;