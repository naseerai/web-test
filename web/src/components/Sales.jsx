import React, { useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import { useLang } from "../context/LanguageContext";

const callData = [
  { location: "Hyderabad", languages: "Telugu, Hindi, English", phone: "+91 40 1234 5678", hours: "9 am - 6 pm IST" },
  { location: "Bangalore",  languages: "Kannada, English",      phone: "+91 80 9876 5432", hours: "9 am - 6 pm IST" },
  { location: "Singapore",  languages: "English",               phone: "+65 6123 4567",    hours: "9 am - 6 pm SGT" },
  { location: "Germany",    languages: "German, English",       phone: "+49 30 5200 6329",  hours: "9 am - 6 pm CET" },
];

export default function Sales() {
  const { t } = useLang();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", country: "", message: "" });

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #f0ede8; overflow-x: hidden; }

        .sales-main {
          padding-top: 64px;
          background: #f0ede8;
          min-height: 100vh;
        }

        /* ── HERO BANNER ── */
        .sales-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 280px;
          margin-bottom: 40px;
        }
        .hero-left {
         background-image: url('/assets/sales/hero_left.png'),
  url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800');
background-position: center center;
background-color: #111;
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .hero-left::after {
          content: ''; position: absolute; inset: 0;
          background: rgba(0,0,0,0.45);
        }
        .hero-left h1 {
          position: relative; z-index: 1;
          color: #fff; font-size: clamp(28px, 4vw, 48px);
          font-weight: 900; text-transform: uppercase;
          text-align: center; padding: 0 30px; line-height: 1.1;
          letter-spacing: -1px;
        }
        .hero-right {
         background-image: url('/assets/sales/hero_right.png'),
  url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800');
background-color: #888;
        }

        /* ── MAIN CONTENT ── */
        .sales-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          width: 90%;
          max-width: 1300px;
          margin: 0 auto 80px auto;
        }

        /* ── LEFT: FORM CARD ── */
        .form-card {
          background: #fff;
          border-radius: 12px;
          padding: 40px;
        }
        .form-header {
          display: flex; align-items: flex-start; gap: 16px;
          margin-bottom: 30px;
        }
        .clock-icon {
          width: 40px; height: 40px; flex-shrink: 0;
          border: 2.5px solid #f4531c; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #f4531c; font-size: 18px; margin-top: 4px;
        }
        .form-header p {
          font-size: 18px; font-weight: 600; color: #1a1a1a; line-height: 1.4;
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
        .form-group label { font-size: 13px; font-weight: 500; color: #333; }
        .form-group input,
        .form-group select,
        .form-group textarea {
          border: 1px solid #ccc; border-radius: 4px;
          padding: 10px 14px; font-size: 14px; font-family: inherit;
          outline: none; transition: border 0.2s; background: #fff;
          color: #1a1a1a;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus { border-color: #f4531c; }
        .form-group textarea { min-height: 120px; resize: vertical; }
        .form-note { font-size: 12.5px; color: #555; line-height: 1.6; margin-bottom: 20px; }
        .submit-btn {
          background: #f4531c; color: #fff; border: none;
          padding: 14px 28px; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.5px;
          border-radius: 4px; cursor: pointer; transition: opacity 0.2s;
        }
        .submit-btn:hover { opacity: 0.9; }

        /* ── RIGHT COLUMN ── */
        .right-col { display: flex; flex-direction: column; gap: 20px; }

        .info-card {
          background: #fff; border-radius: 12px; padding: 35px;
        }
        .info-card h2 { font-size: 22px; font-weight: 700; margin-bottom: 14px; color: #1a1a1a; }
        .info-card p { font-size: 14px; color: #555; line-height: 1.6; margin-bottom: 20px; }
        .demo-btn {
          background: #f4531c; color: #fff; border: none;
          padding: 14px 24px; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.5px;
          border-radius: 4px; cursor: pointer;
        }

        /* ── CALL TABLE ── */
        .call-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .call-table thead tr { border-bottom: 1.5px solid #eee; }
        .call-table th {
          font-size: 11px; font-weight: 700; color: #f4531c;
          text-transform: uppercase; letter-spacing: 0.5px;
          padding: 10px 8px; text-align: left;
        }
        .call-table td {
          font-size: 13px; color: #333; padding: 14px 8px;
          border-bottom: 1px solid #f0f0f0; vertical-align: top;
        }
        .call-table td a { color: #0056b3; text-decoration: none; font-weight: 600; }
        .call-table td a:hover { text-decoration: underline; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .sales-hero { grid-template-columns: 1fr; height: auto; }
          .hero-right { height: 180px; }
          .sales-body { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <Header />

      <main className="sales-main">

        {/* HERO */}
        <div className="sales-hero">
          <div className="hero-left">
            <h1>{t("sales_hero_title")}</h1>
          </div>
          <div className="hero-right"></div>
        </div>

        {/* BODY */}
        <div className="sales-body">

          {/* LEFT: Contact Form */}
          <div className="form-card">
            <div className="form-header">
              <div className="clock-icon">⏱</div>
              <p>{t("sales_send_msg")}</p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t("sales_firstname")} *</label>
                <input type="text" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
              </div>
              <div className="form-group">
                <label>{t("sales_lastname")} *</label>
                <input type="text" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t("sales_email")} *</label>
                <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label>{t("sales_phone")} *</label>
                <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
              </div>
            </div>

            <div className="form-group">
              <label>{t("sales_country")} *</label>
              <select value={form.country} onChange={e => setForm({...form, country: e.target.value})}>
                <option value="">{t("sales_select")}</option>
                <option>India</option>
                <option>Singapore</option>
                <option>Germany</option>
                <option>United Kingdom</option>
                <option>United States</option>
              </select>
            </div>

            <div className="form-group">
              <label>{t("sales_howhelp")} *</label>
              <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>

            <p className="form-note">
              By providing a telephone number and submitting the form you are consenting to be contacted by SMS text message. Message &amp; data rates may apply.
            </p>

            <button className="submit-btn">{t("sales_submit")}</button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-col">

            {/* Book a Demo */}
            <div className="info-card">
              <h2>{t("sales_book_title")}</h2>
              <p>{t("sales_book_desc")}</p>
              <button className="demo-btn">{t("sales_book_btn")}</button>
            </div>

            {/* Give Us a Call */}
            <div className="info-card">
              <h2>{t("sales_call_title")}</h2>
              <table className="call-table">
                <thead>
                  <tr>
                    <th>{t("sales_col_location")}</th>
                    <th>{t("sales_col_lang")}</th>
                    <th>{t("sales_col_phone")}</th>
                    <th>{t("sales_col_hours")}</th>
                  </tr>
                </thead>
                <tbody>
                  {callData.map((row, i) => (
                    <tr key={i}>
                      <td><strong>{row.location}</strong></td>
                      <td>{row.languages}</td>
                      <td><a href={`tel:${row.phone}`}>{row.phone}</a></td>
                      <td>{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Find a Reseller */}
            <div className="info-card">
              <h2>{t("sales_reseller_title")}</h2>
              <p>{t("sales_reseller_desc")}</p>
              <button className="demo-btn">{t("sales_reseller_btn")}</button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}