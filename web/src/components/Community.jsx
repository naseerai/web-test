import React from "react";
import Header from "./header";
import Footer from "./Footer";
import { useLang } from "../context/LanguageContext";

export default function Community() {
  const { t } = useLang();

  const communityCards = [
    { cat: "comm_card1_cat", title: "comm_card1_title", desc: "comm_card1_desc", btn: "comm_card1_btn", img: "/assets/industry/aircraft_wind_tunnel_4k.png" },
    { cat: "comm_card2_cat", title: "comm_card2_title", desc: "comm_card2_desc", btn: "comm_card2_btn", img: "/assets/industry/engineer_3dprinter_4k.png" },
    { cat: "comm_card3_cat", title: "comm_card3_title", desc: "comm_card3_desc", btn: "comm_card3_btn", img: "/assets/industry/product_1_4k.png" },
    { cat: "comm_card4_cat", title: "comm_card4_title", desc: "comm_card4_desc", btn: "comm_card4_btn", isGrey: true },
    { cat: "comm_card5_cat", title: "comm_card5_title", desc: "comm_card5_desc", btn: "comm_card5_btn", isGrey: true },
    { cat: "comm_card6_cat", title: "comm_card6_title", desc: "comm_card6_desc", btn: "comm_card6_btn", isGrey: true },
  ];

  return (
    <div className="comm-page">
      <style>{`
        .comm-main { padding-top: 80px; width: 100%; display: flex; flex-direction: column; align-items: center; background: #fff; }
        .comm-hero { text-align: center; max-width: 800px; padding: 60px 20px; }
        .comm-hero h1 { font-size: clamp(32px, 5vw, 48px); font-weight: 700; margin-bottom: 20px; color: #000; }
        .comm-hero p { font-size: 18px; color: #444; line-height: 1.5; }
        
        .comm-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; width: 90%; max-width: 1400px; margin-bottom: 60px; }
        .comm-card { display: flex; flex-direction: column; background: #fff; border-radius: 4px; overflow: hidden; }
        .comm-card.grey-bg { background: #f7f7f7; padding: 40px 30px; }
        .comm-img { width: 100%; aspect-ratio: 16/10; object-fit: cover; }
        .card-body { padding: 30px 0; display: flex; flex-direction: column; flex: 1; }
        .card-cat { font-size: 12px; font-weight: 700; color: #f4531c; letter-spacing: 1px; margin-bottom: 15px; text-transform: uppercase; }
        .card-body h3 { font-size: 24px; font-weight: 700; margin-bottom: 15px; color: #000; }
        .card-body p { font-size: 15px; color: #444; line-height: 1.6; margin-bottom: 25px; flex: 1; }
        
        .comm-btn { background: #f4531c; color: #fff; border: none; padding: 12px 20px; border-radius: 4px; font-size: 12px; font-weight: 700; cursor: pointer; width: fit-content; transition: 0.3s; }
        .comm-btn:hover { background: #d44316; }

        /* Join Team Banner */
        .join-banner { width: 90%; max-width: 1400px; background: #f7f7f7; padding: 40px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 80px; }
        .join-left { display: flex; align-items: center; gap: 20px; }
        .join-icon { width: 40px; }
        .join-text h4 { font-size: 18px; font-weight: 700; margin-bottom: 5px; }
        .join-text p { font-size: 14px; color: #666; }
        .join-btn { background: #fff; border: 1px solid #000; padding: 12px 25px; font-size: 12px; font-weight: 700; cursor: pointer; border-radius: 4px; }

        @media (max-width: 1024px) { .comm-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) {
          .comm-grid { grid-template-columns: 1fr; }
          .join-banner { flex-direction: column; text-align: center; gap: 25px; }
          .join-left { flex-direction: column; }
        }
      `}</style>

      <Header />
      <main className="comm-main">
        <section className="comm-hero">
          <h1>{t("comm_hero_title")}</h1>
          <p>{t("comm_hero_sub")}</p>
        </section>

        <div className="comm-grid">
          {communityCards.map((card, idx) => (
            <div key={idx} className={`comm-card ${card.isGrey ? 'grey-bg' : ''}`}>
              {!card.isGrey && <img src={card.img} alt="" className="comm-img" />}
              <div className="card-body">
                <span className="card-cat">{t(card.cat)}</span>
                <h3>{t(card.title)}</h3>
                <p>{t(card.desc)}</p>
                <button className="comm-btn">{t(card.btn)}</button>
              </div>
            </div>
          ))}
        </div>

        <section className="join-banner">
          <div className="join-left">
            <img src="/assets/logo-icon.png" className="join-icon" alt="" />
            <div className="join-text">
              <h4>{t("comm_join_title")}</h4>
              <p>{t("comm_join_desc")}</p>
            </div>
          </div>
          <button className="join-btn">{t("comm_join_btn")}</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}