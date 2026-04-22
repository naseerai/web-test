import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "./supabaseClient";
import Header from "./components/header";
import Footer from "./components/Footer";

import {
  RiFileTextLine, RiLayoutGridLine, RiFireLine, RiLogoutBoxLine,
  RiAddLine, RiEditLine, RiDeleteBinLine, RiEyeLine,
  RiImageAddLine, RiSaveLine, RiCloseLine,
  RiArticleLine, RiTimeLine, RiUserLine, RiPriceTag3Line,
  RiDashboardLine, RiSortAsc, RiArrowUpLine, RiBarChartLine,
  RiBold, RiItalic, RiUnderline, RiStrikethrough,
  RiListOrdered, RiListUnordered, RiDoubleQuotesL,
  RiH1, RiH2, RiH3, RiLinkM, RiFormatClear,
  RiAlignLeft, RiAlignCenter, RiAlignRight,
  RiMailLine, RiCheckLine, RiErrorWarningLine, RiLoader4Line,
  RiMenuLine, RiArrowLeftLine, RiHistoryLine,
  RiMenu2Line,
} from "react-icons/ri";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";

// ── FONT LOADER ──
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

// ── DESIGN TOKENS (LIGHT) ──
const C = {
  bg: "#f5f4f0",
  sidebar: "#ffffff",
  surface: "#ffffff",
  surfaceAlt: "#faf9f6",
  border: "rgba(0,0,0,0.07)",
  borderMed: "rgba(0,0,0,0.12)",
  orange: "#e8620a",
  orangeLight: "rgba(232,98,10,0.09)",
  orangeMid: "rgba(232,98,10,0.18)",
  textMain: "#1a1a1a",
  textSub: "#444444",
  textMuted: "#888888",
  textDim: "#cccccc",
  red: "#dc2626",
  redLight: "rgba(220,38,38,0.08)",
  green: "#16a34a",
  greenLight: "rgba(22,163,74,0.09)",
  purple: "#7c3aed",
  purpleLight: "rgba(124,58,237,0.09)",
  blue: "#2563eb",
  blueLight: "rgba(37,99,235,0.09)",
  yellow: "#d97706",
  yellowLight: "rgba(217,119,6,0.09)",
  shadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)",
  shadowMd: "0 4px 24px rgba(0,0,0,0.08)",
  shadowLg: "0 12px 40px rgba(0,0,0,0.12)",
};

// ── RICH TEXT EDITOR ──
// The `key` prop on this component forces full remount when editorKey changes,
// which is the most reliable way to load fresh content (e.g. switching edit targets).
const RichEditor = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({ openOnClick: false }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  const TBtn = ({ onClick, active, children, title }) => (
    <button type="button" title={title} onClick={onClick}
      style={{
        padding: "0.28rem 0.42rem", borderRadius: "6px", border: "none",
        background: active ? C.orange : "transparent",
        color: active ? "#fff" : C.textMuted,
        cursor: "pointer", display: "flex", alignItems: "center", transition: "0.15s",
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.background = C.orangeLight; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
    >{children}</button>
  );

  const Sep = () => <div style={{ width: "1px", height: "16px", background: C.border, margin: "0 3px" }} />;

  return (
    <div style={{ border: `1.5px solid ${C.borderMed}`, borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
      <style>{`
        .tiptap-wrap .ProseMirror {
          min-height: 220px; padding: 1rem 1.1rem; outline: none;
          font-family: 'Nunito', sans-serif; font-size: 0.91rem;
          line-height: 1.8; color: ${C.textMain}; background: #fff;
        }
        .tiptap-wrap .ProseMirror h1 { font-size: 1.5rem; font-weight: 700; margin: 0.9rem 0 0.4rem; font-family: 'Playfair Display', serif; }
        .tiptap-wrap .ProseMirror h2 { font-size: 1.2rem; font-weight: 700; margin: 0.8rem 0 0.3rem; }
        .tiptap-wrap .ProseMirror h3 { font-size: 1rem; font-weight: 700; margin: 0.6rem 0 0.25rem; }
        .tiptap-wrap .ProseMirror ul, .tiptap-wrap .ProseMirror ol { padding-left: 1.4rem; }
        .tiptap-wrap .ProseMirror blockquote { border-left: 3px solid ${C.orange}; margin: 0.6rem 0; padding: 0.4rem 1rem; background: ${C.orangeLight}; border-radius: 0 6px 6px 0; }
        .tiptap-wrap .ProseMirror a { color: ${C.orange}; text-decoration: underline; }
        .tiptap-wrap .ProseMirror code { background: #f3f3f1; padding: 0.1rem 0.3rem; border-radius: 4px; font-size: 0.85rem; }
        .tiptap-wrap .ProseMirror p.is-editor-empty:first-child::before { content: 'Write your blog content here...'; float: left; color: ${C.textDim}; pointer-events: none; height: 0; }
      `}</style>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1px", padding: "0.45rem 0.6rem", background: C.surfaceAlt, borderBottom: `1px solid ${C.border}`, alignItems: "center" }}>
        <TBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")} title="Bold"><RiBold size={13} /></TBtn>
        <TBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")} title="Italic"><RiItalic size={13} /></TBtn>
        <TBtn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive("underline")} title="Underline"><RiUnderline size={13} /></TBtn>
        <TBtn onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive("strike")} title="Strike"><RiStrikethrough size={13} /></TBtn>
        <Sep />
        <TBtn onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive("heading", { level: 1 })} title="H1"><RiH1 size={14} /></TBtn>
        <TBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })} title="H2"><RiH2 size={14} /></TBtn>
        <TBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })} title="H3"><RiH3 size={14} /></TBtn>
        <Sep />
        <TBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")} title="Bullet List"><RiListUnordered size={13} /></TBtn>
        <TBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")} title="Ordered List"><RiListOrdered size={13} /></TBtn>
        <TBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")} title="Blockquote"><RiDoubleQuotesL size={13} /></TBtn>
        <Sep />
        <TBtn onClick={() => editor.chain().focus().setTextAlign("left").run()} active={editor.isActive({ textAlign: "left" })} title="Left"><RiAlignLeft size={13} /></TBtn>
        <TBtn onClick={() => editor.chain().focus().setTextAlign("center").run()} active={editor.isActive({ textAlign: "center" })} title="Center"><RiAlignCenter size={13} /></TBtn>
        <TBtn onClick={() => editor.chain().focus().setTextAlign("right").run()} active={editor.isActive({ textAlign: "right" })} title="Right"><RiAlignRight size={13} /></TBtn>
        <Sep />
        <TBtn onClick={addLink} active={editor.isActive("link")} title="Link"><RiLinkM size={13} /></TBtn>
        <TBtn onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()} title="Clear"><RiFormatClear size={13} /></TBtn>
      </div>
      <div className="tiptap-wrap"><EditorContent editor={editor} /></div>
    </div>
  );
};

// ── EMAIL STATUS PANEL ──
const EmailStatusPanel = ({ status }) => {
  if (!status) return null;
  const { total, sent, failed, pending, log, publishing, onClose } = status;
  const progress = total > 0 ? Math.round(((sent + failed) / total) * 100) : 0;
  return (
    <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", width: "310px", background: "#fff", border: `1.5px solid ${C.borderMed}`, borderRadius: "16px", boxShadow: C.shadowLg, zIndex: 9999, overflow: "hidden" }}>
      <div style={{ padding: "0.85rem 1rem", background: C.surfaceAlt, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: C.orangeLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {publishing ? <RiLoader4Line size={15} color={C.orange} style={{ animation: "spin 1s linear infinite" }} /> : <RiMailLine size={15} color={C.orange} />}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "0.78rem", fontWeight: 700, color: C.textMain }}>{publishing ? "Sending notifications…" : "Dispatch complete"}</div>
          <div style={{ fontSize: "0.66rem", color: C.textMuted }}>{total} subscriber{total !== 1 ? "s" : ""}</div>
        </div>
        {!publishing && <button onClick={onClose} style={{ background: "none", border: "none", color: C.textMuted, cursor: "pointer", display: "flex" }}><RiCloseLine size={15} /></button>}
      </div>
      <div style={{ padding: "0.7rem 1rem 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
          <span style={{ fontSize: "0.62rem", color: C.textMuted, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.8px" }}>Progress</span>
          <span style={{ fontSize: "0.68rem", color: C.orange, fontWeight: 800 }}>{progress}%</span>
        </div>
        <div style={{ height: "5px", background: "#eee", borderRadius: "99px", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, ${C.orange}, #f59e0b)`, borderRadius: "99px", transition: "width 0.4s ease" }} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", padding: "0.7rem 1rem" }}>
        {[{ l: "Sent", v: sent, c: C.green, bg: C.greenLight }, { l: "Failed", v: failed, c: C.red, bg: C.redLight }, { l: "Pending", v: pending, c: C.yellow, bg: C.yellowLight }].map(({ l, v, c, bg }) => (
          <div key={l} style={{ background: bg, borderRadius: "8px", padding: "0.4rem", textAlign: "center" }}>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: c }}>{v}</div>
            <div style={{ fontSize: "0.59rem", color: c, opacity: 0.75, fontWeight: 700 }}>{l}</div>
          </div>
        ))}
      </div>
      {log?.length > 0 && (
        <div style={{ maxHeight: "90px", overflowY: "auto", padding: "0 1rem 0.7rem", display: "flex", flexDirection: "column", gap: "0.22rem" }}>
          {[...log].reverse().slice(0, 8).map((e, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.66rem" }}>
              {e.status === "sent" ? <RiCheckLine size={11} color={C.green} /> : <RiErrorWarningLine size={11} color={C.red} />}
              <span style={{ color: C.textMuted, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.email}</span>
              <span style={{ color: e.status === "sent" ? C.green : C.red, fontWeight: 800 }}>{e.status === "sent" ? "✓" : "✗"}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ── DELETE MODAL ──
const DeleteModal = ({ label, onConfirm, onCancel }) => (
  <div onClick={onCancel} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 8888, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", backdropFilter: "blur(4px)" }}>
    <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: "18px", padding: "2rem", maxWidth: "360px", width: "100%", boxShadow: C.shadowLg }}>
      <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: C.redLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
        <RiDeleteBinLine size={21} color={C.red} />
      </div>
      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.25rem", marginBottom: "0.35rem", color: C.textMain }}>Delete {label}?</h3>
      <p style={{ color: C.textMuted, fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>This action cannot be undone.</p>
      <div style={{ display: "flex", gap: "0.6rem" }}>
        <button onClick={onCancel} style={{ flex: 1, padding: "0.75rem", borderRadius: "9px", border: `1.5px solid ${C.border}`, background: "transparent", fontFamily: "inherit", fontWeight: 700, cursor: "pointer", color: C.textSub, fontSize: "0.85rem" }}>Cancel</button>
        <button onClick={onConfirm} style={{ flex: 1, padding: "0.75rem", borderRadius: "9px", border: "none", background: C.red, color: "white", fontFamily: "inherit", fontWeight: 700, cursor: "pointer", fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}>
          <RiDeleteBinLine size={13} /> Delete
        </button>
      </div>
    </div>
  </div>
);

// ── SMALL HELPERS ──
const FieldLabel = ({ children, icon: Icon }) => (
  <label style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: C.textMuted, marginBottom: "0.38rem" }}>
    {Icon && <Icon size={11} />}{children}
  </label>
);

const inp = { width: "100%", padding: "0.7rem 0.9rem", borderRadius: "9px", border: `1.5px solid ${C.border}`, fontFamily: "inherit", fontSize: "0.87rem", background: C.surfaceAlt, color: C.textMain, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s, background 0.2s" };

const StatCard = ({ icon: Icon, label, value, color, bg }) => (
  <div style={{ background: "#fff", borderRadius: "14px", padding: "1.1rem 1.2rem", border: `1.5px solid ${C.border}`, display: "flex", alignItems: "center", gap: "0.85rem", boxShadow: C.shadow }}>
    <div style={{ width: "40px", height: "40px", borderRadius: "11px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <Icon size={18} color={color} />
    </div>
    <div>
      <div style={{ fontSize: "1.5rem", fontWeight: 800, color, lineHeight: 1, fontFamily: "'Playfair Display',serif" }}>{value}</div>
      <div style={{ fontSize: "0.62rem", color: C.textMuted, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", marginTop: "2px" }}>{label}</div>
    </div>
  </div>
);

const Card = ({ children, noPad, style: s = {} }) => (
  <div style={{ background: "#fff", borderRadius: "16px", border: `1.5px solid ${C.border}`, boxShadow: C.shadow, marginBottom: "1.4rem", overflow: noPad ? "hidden" : "visible", padding: noPad ? 0 : "1.5rem", ...s }}>
    {children}
  </div>
);

const CardHeader = ({ icon: Icon, title, subtitle, color = C.orange }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.3rem", paddingBottom: "1rem", borderBottom: `1px solid ${C.border}` }}>
    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${color}16`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <Icon size={17} color={color} />
    </div>
    <div>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", fontWeight: 600, margin: 0, color: C.textMain }}>{title}</h2>
      {subtitle && <p style={{ color: C.textMuted, fontSize: "0.7rem", margin: 0, marginTop: "1px" }}>{subtitle}</p>}
    </div>
  </div>
);

const NAV = [
  { key: "blogs", label: "Blogs", icon: RiFileTextLine },
  { key: "categories", label: "Categories", icon: RiLayoutGridLine },
  { key: "trending", label: "Trending", icon: RiFireLine },
  { key: "logs", label: "Email Logs", icon: RiHistoryLine },
];

// ── SIDEBAR INNER (reused for desktop + mobile) ──
const SidebarInner = ({ open, tab, setTab, handleLogout, onToggle, mobile }) => (
  <>
    <div style={{ padding: "1rem 0.85rem", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: "0.6rem", flexShrink: 0 }}>
      <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: C.orange, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <RiDashboardLine size={15} color="#fff" />
      </div>
      {(open || mobile) && <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.92rem", color: C.textMain, whiteSpace: "nowrap", fontWeight: 600 }}>Admin Panel</span>}
    </div>

    <nav style={{ flex: 1, padding: "0.65rem 0.55rem", display: "flex", flexDirection: "column", gap: "0.12rem" }}>
      {NAV.map(({ key, label, icon: Icon }) => {
        const active = tab === key;
        return (
          <button key={key} onClick={() => setTab(key)} style={{
            display: "flex", alignItems: "center", gap: "0.6rem",
            padding: (open || mobile) ? "0.58rem 0.78rem" : "0.58rem",
            justifyContent: (open || mobile) ? "flex-start" : "center",
            borderRadius: "9px", border: "none",
            background: active ? C.orangeLight : "transparent",
            color: active ? C.orange : C.textMuted,
            cursor: "pointer", fontFamily: "inherit", fontWeight: 700,
            fontSize: "0.82rem", textAlign: "left", width: "100%", transition: "0.15s", whiteSpace: "nowrap",
          }}
            onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(0,0,0,0.04)"; }}
            onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}>
            <Icon size={16} style={{ flexShrink: 0 }} />
            {(open || mobile) && <span style={{ flex: 1 }}>{label}</span>}
            {active && (open || mobile) && <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: C.orange }} />}
          </button>
        );
      })}
    </nav>

    <div style={{ padding: "0.65rem 0.55rem", borderTop: `1px solid ${C.border}`, display: "flex", flexDirection: "column", gap: "0.15rem" }}>
      {!mobile && (
        <button onClick={onToggle} style={{ display: "flex", alignItems: "center", justifyContent: open ? "flex-start" : "center", gap: "0.6rem", padding: "0.52rem 0.78rem", borderRadius: "9px", border: "none", background: "transparent", color: C.textMuted, cursor: "pointer", fontFamily: "inherit", fontWeight: 700, fontSize: "0.78rem", width: "100%", transition: "0.15s" }}>
          {open ? <RiArrowLeftLine size={14} /> : <RiMenuLine size={14} />}
          {open && "Collapse"}
        </button>
      )}
      <button onClick={handleLogout} style={{ display: "flex", alignItems: "center", justifyContent: (open || mobile) ? "flex-start" : "center", gap: "0.6rem", padding: "0.52rem 0.78rem", borderRadius: "9px", border: "none", background: "transparent", color: C.red, cursor: "pointer", fontFamily: "inherit", fontWeight: 700, fontSize: "0.78rem", width: "100%", opacity: 0.85, transition: "0.15s" }}>
        <RiLogoutBoxLine size={14} />
        {(open || mobile) && "Logout"}
      </button>
    </div>
  </>
);

// ══════════════════════════════════
// ── MAIN ADMIN PAGE ──
// ══════════════════════════════════
const AdminPage = () => {
  const [tab, setTab] = useState("blogs");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [delTarget, setDelTarget] = useState(null);
  const [saving, setSaving] = useState(false);

  // Blog state
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [editorKey, setEditorKey] = useState(0); // ← bumping this remounts RichEditor with fresh content
  const [blogForm, setBlogForm] = useState({ title: "", category: "", author: "Surya", content: "", image: null, read_time: "5 min read" });
  const [imgPreview, setImgPreview] = useState(null);

  // Category state
  const [categories, setCategories] = useState([]);
  const [editCat, setEditCat] = useState(null);
  const [catForm, setCatForm] = useState({ name: "", sort_order: "0" });

  // Trending state
  const [trending, setTrending] = useState([]);
  const [editTrend, setEditTrend] = useState(null);
  const [trendForm, setTrendForm] = useState({ title: "", views: "", read_time: "", sort_order: "0" });

  // Email state
  const [emailStatus, setEmailStatus] = useState(null);
  const [emailLogs, setEmailLogs] = useState([]);

  const fmt = d => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  useEffect(() => { fetchAll(); }, []);
  const fetchAll = () => { fetchPosts(); fetchCategories(); fetchTrending(); };
  const fetchPosts = async () => { const { data } = await supabase.from("blogs").select("*").order("created_at", { ascending: false }); setPosts(data || []); };
  const fetchCategories = async () => { const { data } = await supabase.from("categories").select("*").order("sort_order"); setCategories(data || []); };
  const fetchTrending = async () => { const { data } = await supabase.from("trending").select("*").order("sort_order"); setTrending(data || []); };
  const handleLogout = async () => { await supabase.auth.signOut(); window.location.href = "/login-admin"; };

  const confirmDelete = async () => {
    if (!delTarget) return;
    await supabase.from(delTarget.table).delete().eq("id", delTarget.id);
    fetchAll(); setDelTarget(null);
  };

  // ── BACKGROUND EMAIL ──
  const sendEmailsInBackground = async (title, slug, imageUrl, subscribers) => {
    const emails = subscribers.map(s => s.email);
    const total = emails.length;
    let sent = 0, failed = 0;
    const log = [];
    const logId = Date.now();

    setEmailLogs(prev => [{ id: logId, blog: title, total, sent: 0, failed: 0, time: new Date().toLocaleTimeString() }, ...prev]);
    setEmailStatus({ total, sent: 0, failed: 0, pending: total, log: [], publishing: true, onClose: () => setEmailStatus(null) });

    for (let i = 0; i < emails.length; i++) {
      const email = emails[i];
      try {
        const res = await fetch("http://localhost:5000/send-blog-notification", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, slug, imageUrl, subscribers: [email] }),
        });
        if (!res.ok) throw new Error();
        sent++; log.push({ email, status: "sent" });
      } catch {
        failed++; log.push({ email, status: "failed" });
      }
      setEmailStatus({ total, sent, failed, pending: total - sent - failed, log: [...log], publishing: i < emails.length - 1, onClose: () => setEmailStatus(null) });
    }
    setEmailLogs(prev => prev.map(l => l.id === logId ? { ...l, sent, failed } : l));
  };

  // ── BLOG SUBMIT ──
  const handleBlogSubmit = async e => {
    e.preventDefault();
    if (!editPost && !blogForm.image) { alert("⚠️ Upload a cover image!"); return; }
    setSaving(true);
    try {
      let imageUrl = editPost?.image_url || "";
      if (blogForm.image) {
        const fp = `${Date.now()}-${blogForm.image.name}`;
        await supabase.storage.from("blog-images").upload(fp, blogForm.image);
        const { data: { publicUrl } } = supabase.storage.from("blog-images").getPublicUrl(fp);
        imageUrl = publicUrl;
      }
      const baseSlug = blogForm.title.toLowerCase().trim().replace(/ /g, "-").replace(/[^\w-]+/g, "");
      const slug = editPost ? editPost.slug : `${baseSlug}-${Math.floor(1000 + Math.random() * 9000)}`;
      const payload = { title: blogForm.title, category: blogForm.category, author: blogForm.author, content: blogForm.content, read_time: blogForm.read_time, image_url: imageUrl, slug };

      if (editPost) {
        const { error } = await supabase.from("blogs").update(payload).eq("id", editPost.id);
        if (error) throw error;
      } else {
        const { error: dbError } = await supabase.from("blogs").insert([payload]);
        if (dbError) throw dbError;
        const { data: subs } = await supabase.from("subscribers").select("email");
        if (subs?.length > 0) sendEmailsInBackground(blogForm.title, slug, imageUrl, subs); // no await = background
      }

      cancelEditPost();
      fetchPosts();
    } catch (err) { alert("❌ " + err.message); }
    finally { setSaving(false); }
  };

  // ── START EDIT — bump editorKey so RichEditor remounts with the post's content ──
  const startEditPost = p => {
    setEditPost(p);
    setBlogForm({
      title: p.title,
      category: p.category || "",
      author: p.author || "Surya",
      content: p.content || "",
      image: null,
      read_time: p.read_time || "5 min read",
    });
    setImgPreview(p.image_url);
    setEditorKey(k => k + 1); // ← this is the fix: forces RichEditor remount with correct content
    setTab("blogs");
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEditPost = () => {
    setEditPost(null);
    setBlogForm({ title: "", category: "", author: "Surya", content: "", image: null, read_time: "5 min read" });
    setImgPreview(null);
    setEditorKey(k => k + 1);
  };

  const handleCatSubmit = async e => {
    e.preventDefault();
    try {
      if (editCat) { await supabase.from("categories").update({ name: catForm.name, sort_order: parseInt(catForm.sort_order) || 0 }).eq("id", editCat.id); setEditCat(null); }
      else { await supabase.from("categories").insert([{ name: catForm.name, sort_order: parseInt(catForm.sort_order) || 0 }]); }
      setCatForm({ name: "", sort_order: "0" }); fetchCategories();
    } catch (err) { alert("❌ " + err.message); }
  };

  const handleTrendSubmit = async e => {
    e.preventDefault();
    try {
      const payload = { title: trendForm.title, views: trendForm.views, read_time: trendForm.read_time, sort_order: parseInt(trendForm.sort_order) || 0 };
      if (editTrend) { await supabase.from("trending").update(payload).eq("id", editTrend.id); setEditTrend(null); }
      else { await supabase.from("trending").insert([payload]); }
      setTrendForm({ title: "", views: "", read_time: "", sort_order: "0" }); fetchTrending();
    } catch (err) { alert("❌ " + err.message); }
  };

  const catOptions = categories.length > 0 ? categories.map(c => c.name) : ["Technology", "Innovation", "Sustainability", "Industry Insights", "Team Stories", "Tutorials"];
  const SW = sidebarOpen ? 220 : 64;

  return (
    <div style={{ fontFamily: "'Nunito',sans-serif", backgroundColor: C.bg, minHeight: "100vh", color: C.textMain, display: "flex" }}>
      <FontLoader />
      {delTarget && <DeleteModal label={delTarget.label} onConfirm={confirmDelete} onCancel={() => setDelTarget(null)} />}
      {emailStatus && <EmailStatusPanel status={emailStatus} />}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        input:focus, select:focus { border-color: ${C.orange} !important; background: #fff !important; }
        ::-webkit-scrollbar { width: 5px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: ${C.borderMed}; border-radius: 99px; }
        .arow { display:grid;align-items:center;padding:0.82rem 1.2rem;border-bottom:1px solid ${C.border};transition:background 0.15s;gap:0.75rem; }
        .arow:last-child { border-bottom:none; }
        .arow:hover { background:${C.surfaceAlt}; }
        .ebtn { display:inline-flex;align-items:center;gap:0.28rem;background:${C.orangeLight};color:${C.orange};border:none;padding:0.3rem 0.65rem;border-radius:7px;font-size:0.72rem;font-weight:700;cursor:pointer;font-family:inherit;transition:0.15s; }
        .ebtn:hover { background:${C.orange};color:#fff; }
        .dbtn { display:inline-flex;align-items:center;gap:0.28rem;background:${C.redLight};color:${C.red};border:none;padding:0.3rem 0.65rem;border-radius:7px;font-size:0.72rem;font-weight:700;cursor:pointer;font-family:inherit;transition:0.15s; }
        .dbtn:hover { background:${C.red};color:#fff; }
        .vbtn { display:inline-flex;align-items:center;gap:0.28rem;background:rgba(0,0,0,0.04);color:${C.textMuted};border:none;padding:0.3rem 0.65rem;border-radius:7px;font-size:0.72rem;font-weight:700;cursor:pointer;font-family:inherit;transition:0.15s;text-decoration:none; }
        .vbtn:hover { background:rgba(0,0,0,0.08);color:${C.textMain}; }
        .prim { display:flex;align-items:center;justify-content:center;gap:0.42rem;background:${C.orange};color:#fff;border:none;padding:0.78rem 1.2rem;border-radius:10px;font-weight:800;font-size:0.86rem;cursor:pointer;font-family:inherit;transition:0.2s;width:100%; }
        .prim:hover:not(:disabled) { filter:brightness(1.07);transform:translateY(-1px);box-shadow:0 5px 16px rgba(232,98,10,0.28); }
        .prim:disabled { opacity:0.5;cursor:not-allowed; }
        .sec { display:flex;align-items:center;justify-content:center;gap:0.42rem;background:transparent;color:${C.textSub};border:1.5px solid ${C.border};padding:0.78rem 1.2rem;border-radius:10px;font-weight:700;font-size:0.86rem;cursor:pointer;font-family:inherit;transition:0.2s;width:100%; }
        .sec:hover { border-color:${C.orange};color:${C.orange}; }
        .g2 { display:grid;grid-template-columns:1fr 1fr;gap:0.9rem; }
        .g3 { display:grid;grid-template-columns:repeat(3,1fr);gap:0.9rem; }
        .g2e { display:grid;grid-template-columns:1fr 145px;gap:0.9rem; }
        .g3t { display:grid;grid-template-columns:1fr 1fr 105px;gap:0.9rem; }
        /* desktop sidebar */
        .desk-sb { position:fixed;left:0;top:0;bottom:0;z-index:100;background:#fff;border-right:1px solid ${C.border};display:flex;flex-direction:column;overflow:hidden;transition:width 0.25s ease;box-shadow:1px 0 0 rgba(0,0,0,0.04); }
        /* mobile */
        @media(max-width:768px) {
          .desk-sb { display:none !important; }
          .mob-ham { display:flex !important; }
          .main-ml { margin-left:0 !important; }
          .g2,.g3,.g2e,.g3t { grid-template-columns:1fr !important; }
          .hide-sm { display:none !important; }
        }
        @media(min-width:769px) { .mob-ham { display:none !important; } }
        .mob-overlay { position:fixed;inset:0;background:rgba(0,0,0,0.28);z-index:200; }
        .mob-sb { position:fixed;left:0;top:0;bottom:0;width:230px;background:#fff;z-index:201;border-right:1px solid ${C.border};display:flex;flex-direction:column;box-shadow:${C.shadowLg};transform:translateX(-100%);transition:transform 0.25s ease; }
        .mob-sb.open { transform:translateX(0); }
      `}</style>

      {/* Desktop Sidebar */}
      <div className="desk-sb" style={{ width: `${SW}px` }}>
        <SidebarInner open={sidebarOpen} tab={tab} setTab={setTab} handleLogout={handleLogout} onToggle={() => setSidebarOpen(o => !o)} />
      </div>

      {/* Mobile Sidebar */}
      {mobileSidebarOpen && (
        <div className="mob-overlay" onClick={() => setMobileSidebarOpen(false)}>
          <div className="mob-sb open" onClick={e => e.stopPropagation()}>
            <SidebarInner open={true} tab={tab} setTab={t => { setTab(t); setMobileSidebarOpen(false); }} handleLogout={handleLogout} onToggle={() => setMobileSidebarOpen(false)} mobile />
          </div>
        </div>
      )}

      {/* Main */}
      <div className="main-ml" style={{ marginLeft: `${SW}px`, flex: 1, minHeight: "100vh", display: "flex", flexDirection: "column", transition: "margin-left 0.25s ease" }}>

        {/* Topbar */}
        <div style={{ padding: "0.9rem 1.4rem", borderBottom: `1px solid ${C.border}`, background: "#fff", position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", boxShadow: "0 1px 0 rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button className="mob-ham" onClick={() => setMobileSidebarOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: C.textMuted, alignItems: "center" }}>
              <RiMenu2Line size={20} />
            </button>
            <div>
              <div style={{ fontSize: "0.6rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.1px", color: C.textMuted }}>{NAV.find(n => n.key === tab)?.label}</div>
              <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 600, margin: 0, color: C.textMain, lineHeight: 1.2 }}>
                {tab === "blogs" && (editPost ? "Editing Post" : "Blog Management")}
                {tab === "categories" && "Categories"}
                {tab === "trending" && "Trending"}
                {tab === "logs" && "Email Logs"}
              </h1>
            </div>
          </div>
          {emailStatus && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: C.orangeLight, color: C.orange, padding: "0.32rem 0.8rem", borderRadius: "99px", fontSize: "0.7rem", fontWeight: 800, whiteSpace: "nowrap" }}>
              <RiLoader4Line size={12} style={{ animation: emailStatus.publishing ? "spin 1s linear infinite" : "none" }} />
              {emailStatus.publishing ? `Sending ${emailStatus.sent + emailStatus.failed}/${emailStatus.total}` : `Done · ${emailStatus.sent}✓ ${emailStatus.failed}✗`}
            </div>
          )}
        </div>

        {/* Page Body */}
        <div style={{ padding: "clamp(1rem,3vw,1.8rem)", flex: 1 }}>

          {/* ══ BLOGS ══ */}
          {tab === "blogs" && <>
            <div className="g3" style={{ marginBottom: "1.4rem" }}>
              <StatCard icon={RiArticleLine} label="Total Posts" value={posts.length} color={C.orange} bg={C.orangeLight} />
              <StatCard icon={RiLayoutGridLine} label="Categories" value={categories.length} color={C.purple} bg={C.purpleLight} />
              <StatCard icon={RiFireLine} label="Trending" value={trending.length} color={C.green} bg={C.greenLight} />
            </div>

            {/* Edit banner */}
            {editPost && (
              <div style={{ background: C.orangeLight, border: `1.5px solid ${C.orangeMid}`, borderRadius: "11px", padding: "0.75rem 1.1rem", marginBottom: "1.1rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.8rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <RiEditLine size={14} color={C.orange} />
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: C.orange }}>Editing: <em>{editPost.title}</em></span>
                </div>
                <button onClick={cancelEditPost} style={{ background: "#fff", border: `1px solid ${C.orangeMid}`, color: C.orange, borderRadius: "8px", padding: "0.28rem 0.75rem", fontSize: "0.73rem", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <RiCloseLine size={12} /> Cancel Edit
                </button>
              </div>
            )}

            {/* Form */}
            <Card>
              <CardHeader icon={editPost ? RiEditLine : RiAddLine} title={editPost ? "Edit Post" : "New Post"} subtitle={editPost ? "Update details below" : "Publish now — emails dispatch in background"} />
              <form onSubmit={handleBlogSubmit}>
                <div style={{ marginBottom: "0.9rem" }}>
                  <FieldLabel icon={RiFileTextLine}>Post Title *</FieldLabel>
                  <input style={inp} type="text" required value={blogForm.title} placeholder="Enter a compelling title…" onChange={e => setBlogForm({ ...blogForm, title: e.target.value })} />
                </div>
                <div className="g3" style={{ marginBottom: "0.9rem" }}>
                  <div><FieldLabel icon={RiPriceTag3Line}>Category</FieldLabel><select style={inp} value={blogForm.category} onChange={e => setBlogForm({ ...blogForm, category: e.target.value })}>{catOptions.map(c => <option key={c}>{c}</option>)}</select></div>
                  <div><FieldLabel icon={RiUserLine}>Author</FieldLabel><input style={inp} type="text" value={blogForm.author} onChange={e => setBlogForm({ ...blogForm, author: e.target.value })} /></div>
                  <div><FieldLabel icon={RiTimeLine}>Read Time</FieldLabel><input style={inp} type="text" value={blogForm.read_time} placeholder="8 min read" onChange={e => setBlogForm({ ...blogForm, read_time: e.target.value })} /></div>
                </div>
                <div style={{ marginBottom: "0.9rem" }}>
                  <FieldLabel icon={RiImageAddLine}>Cover Image {!editPost && "*"}</FieldLabel>
                  <label htmlFor="img-up" style={{ display: "block", border: `2px dashed ${imgPreview ? C.orange : C.borderMed}`, borderRadius: "11px", overflow: "hidden", cursor: "pointer", background: imgPreview ? "transparent" : C.surfaceAlt, minHeight: "110px", position: "relative", transition: "border-color 0.2s" }}>
                    {imgPreview
                      ? <img src={imgPreview} alt="Preview" style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }} />
                      : <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", gap: "0.45rem", minHeight: "110px" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "11px", background: C.orangeLight, display: "flex", alignItems: "center", justifyContent: "center" }}><RiImageAddLine size={19} color={C.orange} /></div>
                        <div style={{ fontWeight: 700, color: C.textSub, fontSize: "0.83rem" }}>Click to upload</div>
                        <div style={{ fontSize: "0.68rem", color: C.textMuted }}>JPG, PNG, WEBP</div>
                      </div>}
                    {imgPreview && <div style={{ position: "absolute", top: "0.6rem", right: "0.6rem", background: "rgba(0,0,0,0.5)", color: "#fff", padding: "0.2rem 0.6rem", borderRadius: "6px", fontSize: "0.67rem", fontWeight: 700 }}>Change</div>}
                  </label>
                  <input id="img-up" type="file" accept="image/*" style={{ display: "none" }} onChange={e => { const f = e.target.files[0]; if (f) { setBlogForm({ ...blogForm, image: f }); setImgPreview(URL.createObjectURL(f)); } }} />
                </div>

                <div style={{ marginBottom: "1.2rem" }}>
                  <FieldLabel icon={RiEditLine}>Content *</FieldLabel>
                  {/*
                    KEY FIX: `key={editorKey}` forces React to fully unmount+remount
                    RichEditor whenever editorKey changes (startEditPost / cancelEditPost).
                    This guarantees the editor initialises with the correct content
                    instead of staying empty or showing old content.
                  */}
                  <RichEditor
                    key={editorKey}
                    value={blogForm.content}
                    onChange={val => setBlogForm(prev => ({ ...prev, content: val }))}
                  />
                  <div style={{ fontSize: "0.65rem", color: C.textMuted, marginTop: "0.35rem" }}>Rich text — Bold, Italic, Headings, Lists, Links & more</div>
                </div>

                <div className={editPost ? "g2" : ""} style={{ gap: "0.8rem" }}>
                  <button type="submit" className="prim" disabled={saving}>
                    {saving ? "⏳ Saving…" : editPost ? <><RiSaveLine size={14} /> Update Post</> : <><RiArrowUpLine size={14} /> Publish Post</>}
                  </button>
                  {editPost && <button type="button" className="sec" onClick={cancelEditPost}><RiCloseLine size={14} /> Cancel</button>}
                </div>
              </form>
            </Card>

            {/* Posts list */}
            <Card noPad>
              <div style={{ padding: "1rem 1.3rem", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <RiArticleLine size={16} color={C.orange} />
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.98rem", fontWeight: 600, margin: 0 }}>All Posts</h2>
                  <p style={{ color: C.textMuted, fontSize: "0.68rem", margin: 0 }}>{posts.length} posts total</p>
                </div>
              </div>
              {posts.length === 0
                ? <div style={{ textAlign: "center", padding: "3rem", color: C.textMuted, fontSize: "0.83rem" }}>No posts yet.</div>
                : posts.map(p => (
                  <div key={p.id} className="arow" style={{ gridTemplateColumns: "56px 1fr auto" }}>
                    <img src={p.image_url} alt="" className="hide-sm" style={{ width: "56px", height: "42px", objectFit: "cover", borderRadius: "7px" }} />
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.84rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "0.2rem" }}>{p.title}</div>
                      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", alignItems: "center" }}>
                        <span style={{ padding: "0.08rem 0.48rem", background: C.orangeLight, color: C.orange, borderRadius: "50px", fontSize: "0.6rem", fontWeight: 700 }}>{p.category}</span>
                        <span style={{ fontSize: "0.63rem", color: C.textMuted }}>{fmt(p.created_at)} · {p.read_time} · {p.author}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.28rem", alignItems: "center", flexShrink: 0, flexWrap: "wrap" }}>
                      <a href={`/blogs/${p.slug}`} target="_blank" rel="noreferrer" className="vbtn"><RiEyeLine size={12} /></a>
                      <button className="ebtn" onClick={() => startEditPost(p)}><RiEditLine size={12} /> Edit</button>
                      <button className="dbtn" onClick={() => setDelTarget({ table: "blogs", id: p.id, label: "this post" })}><RiDeleteBinLine size={12} /></button>
                    </div>
                  </div>
                ))}
            </Card>
          </>}

          {/* ══ CATEGORIES ══ */}
          {tab === "categories" && <>
            <Card>
              <CardHeader icon={editCat ? RiEditLine : RiLayoutGridLine} title={editCat ? "Edit Category" : "Add Category"} subtitle="Filter buttons shown on the blog page" color={C.purple} />
              <form onSubmit={handleCatSubmit}>
                <div className="g2e" style={{ marginBottom: "0.9rem" }}>
                  <div><FieldLabel icon={RiPriceTag3Line}>Name *</FieldLabel><input style={inp} type="text" required value={catForm.name} placeholder="e.g. Technology" onChange={e => setCatForm({ ...catForm, name: e.target.value })} /></div>
                  <div><FieldLabel icon={RiSortAsc}>Sort Order</FieldLabel><input style={inp} type="number" value={catForm.sort_order} onChange={e => setCatForm({ ...catForm, sort_order: e.target.value })} /></div>
                </div>
                <div className={editCat ? "g2" : ""} style={{ gap: "0.8rem" }}>
                  <button type="submit" className="prim">{editCat ? <><RiSaveLine size={14} /> Update</> : <><RiAddLine size={14} /> Add Category</>}</button>
                  {editCat && <button type="button" className="sec" onClick={() => { setEditCat(null); setCatForm({ name: "", sort_order: "0" }); }}><RiCloseLine size={14} /> Cancel</button>}
                </div>
              </form>
            </Card>
            <Card noPad>
              <div style={{ padding: "1rem 1.3rem", borderBottom: `1px solid ${C.border}` }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.98rem", fontWeight: 600, margin: 0 }}>All Categories</h2>
                <p style={{ color: C.textMuted, fontSize: "0.68rem", margin: 0 }}>{categories.length} categories</p>
              </div>
              {categories.length === 0
                ? <div style={{ textAlign: "center", padding: "3rem", color: C.textMuted, fontSize: "0.83rem" }}>No categories yet.</div>
                : categories.map(cat => (
                  <div key={cat.id} className="arow" style={{ gridTemplateColumns: "1fr auto" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: C.purpleLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: C.purple, fontSize: "0.76rem", flexShrink: 0 }}>{cat.sort_order}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.84rem" }}>{cat.name}</div>
                        <div style={{ fontSize: "0.63rem", color: C.textMuted }}>{posts.filter(p => p.category === cat.name).length} posts</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.28rem" }}>
                      <button className="ebtn" onClick={() => { setEditCat(cat); setCatForm({ name: cat.name, sort_order: String(cat.sort_order) }); }}><RiEditLine size={12} /> Edit</button>
                      <button className="dbtn" onClick={() => setDelTarget({ table: "categories", id: cat.id, label: `"${cat.name}"` })}><RiDeleteBinLine size={12} /></button>
                    </div>
                  </div>
                ))}
            </Card>
          </>}

          {/* ══ TRENDING ══ */}
          {tab === "trending" && <>
            <Card>
              <CardHeader icon={editTrend ? RiEditLine : RiFireLine} title={editTrend ? "Edit Trending" : "Add Trending Item"} subtitle='Appears in "Trending Now" sidebar on blog page' color={C.green} />
              <form onSubmit={handleTrendSubmit}>
                <div style={{ marginBottom: "0.9rem" }}><FieldLabel icon={RiFileTextLine}>Title *</FieldLabel><input style={inp} type="text" required value={trendForm.title} placeholder="e.g. ESP32 vs STM32" onChange={e => setTrendForm({ ...trendForm, title: e.target.value })} /></div>
                <div className="g3t" style={{ marginBottom: "0.9rem" }}>
                  <div><FieldLabel icon={RiBarChartLine}>Views</FieldLabel><input style={inp} type="text" value={trendForm.views} placeholder="12.4K" onChange={e => setTrendForm({ ...trendForm, views: e.target.value })} /></div>
                  <div><FieldLabel icon={RiTimeLine}>Read Time</FieldLabel><input style={inp} type="text" value={trendForm.read_time} placeholder="11 min" onChange={e => setTrendForm({ ...trendForm, read_time: e.target.value })} /></div>
                  <div><FieldLabel icon={RiSortAsc}>Order</FieldLabel><input style={inp} type="number" value={trendForm.sort_order} onChange={e => setTrendForm({ ...trendForm, sort_order: e.target.value })} /></div>
                </div>
                <div className={editTrend ? "g2" : ""} style={{ gap: "0.8rem" }}>
                  <button type="submit" className="prim">{editTrend ? <><RiSaveLine size={14} /> Update</> : <><RiAddLine size={14} /> Add Item</>}</button>
                  {editTrend && <button type="button" className="sec" onClick={() => { setEditTrend(null); setTrendForm({ title: "", views: "", read_time: "", sort_order: "0" }); }}><RiCloseLine size={14} /> Cancel</button>}
                </div>
              </form>
            </Card>
            <Card noPad>
              <div style={{ padding: "1rem 1.3rem", borderBottom: `1px solid ${C.border}` }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.98rem", fontWeight: 600, margin: 0 }}>Trending Items</h2>
                <p style={{ color: C.textMuted, fontSize: "0.68rem", margin: 0 }}>{trending.length} items · sorted by order</p>
              </div>
              {trending.length === 0
                ? <div style={{ textAlign: "center", padding: "3rem", color: C.textMuted, fontSize: "0.83rem" }}>No trending items yet.</div>
                : trending.map((t, i) => (
                  <div key={t.id} className="arow" style={{ gridTemplateColumns: "1fr auto" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: C.green, fontSize: "0.72rem", flexShrink: 0 }}>0{i + 1}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.83rem" }}>{t.title}</div>
                        <div style={{ fontSize: "0.63rem", color: C.textMuted }}>{t.views} · {t.read_time}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.28rem" }}>
                      <button className="ebtn" onClick={() => { setEditTrend(t); setTrendForm({ title: t.title, views: t.views, read_time: t.read_time, sort_order: String(t.sort_order) }); }}><RiEditLine size={12} /> Edit</button>
                      <button className="dbtn" onClick={() => setDelTarget({ table: "trending", id: t.id, label: "this item" })}><RiDeleteBinLine size={12} /></button>
                    </div>
                  </div>
                ))}
            </Card>
          </>}

          {/* ══ EMAIL LOGS ══ */}
          {tab === "logs" && (
            <Card noPad>
              <div style={{ padding: "1rem 1.3rem", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <RiHistoryLine size={16} color={C.blue} />
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.98rem", fontWeight: 600, margin: 0 }}>Email Dispatch Logs</h2>
                  <p style={{ color: C.textMuted, fontSize: "0.68rem", margin: 0 }}>Session only · {emailLogs.length} entries</p>
                </div>
              </div>
              {emailLogs.length === 0
                ? <div style={{ textAlign: "center", padding: "3rem", color: C.textMuted }}>
                  <RiMailLine size={28} style={{ marginBottom: "0.7rem", opacity: 0.25 }} />
                  <div style={{ fontSize: "0.83rem" }}>No emails sent this session.</div>
                  <div style={{ fontSize: "0.7rem", marginTop: "0.25rem" }}>Publish a blog post to see logs here.</div>
                </div>
                : emailLogs.map(log => (
                  <div key={log.id} className="arow" style={{ gridTemplateColumns: "1fr auto" }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.83rem", marginBottom: "0.18rem" }}>{log.blog}</div>
                      <div style={{ fontSize: "0.63rem", color: C.textMuted }}>{log.time} · {log.total} subscribers</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                      <span style={{ background: C.greenLight, color: C.green, padding: "0.16rem 0.5rem", borderRadius: "6px", fontSize: "0.67rem", fontWeight: 800 }}>{log.sent} sent</span>
                      {log.failed > 0 && <span style={{ background: C.redLight, color: C.red, padding: "0.16rem 0.5rem", borderRadius: "6px", fontSize: "0.67rem", fontWeight: 800 }}>{log.failed} failed</span>}
                      {log.sent + log.failed < log.total && <span style={{ background: C.yellowLight, color: C.yellow, padding: "0.16rem 0.5rem", borderRadius: "6px", fontSize: "0.67rem", fontWeight: 800 }}>sending…</span>}
                    </div>
                  </div>
                ))}
            </Card>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminPage;