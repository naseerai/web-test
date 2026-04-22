import React from "react";
import Header from "./header";
import Footer from "./Footer";

const officeLocations = [
  {
    city: "Headquarters",
    address: "MYACCESS Inc., R6MP+R8J Shortcut cutting, Gurrampalem, Pendurthi-Anandapuram Rd, Visakhapatnam, Gurammapalem, Andhra Pradesh-531173 India",
    mapLink: "https://maps.app.goo.gl/4UGQx3Ssgt6qGoSj6"
  },
  {
    city: "Andhra Pradesh",
    address: "MYACCESS Tech Hub, North Campus, opp. Department of Marine Engineering, Andhra University North Campus, Andhra University, Visakhapatnam, Andhra Pradesh-530003 India",
    mapLink: "https://www.google.com/maps/place/MeitY-Nasscom+CoE+-+IoT+%26+AI/data=!4m2!3m1!1s0x0:0xdf0e099a8ea307f?sa=X&ved=1t:2428&ictx=111"
  },
  {
    city: "Singapore",
    address: "MYACCESS APAC, 3 Fusionopolis Way, Symbiosis Tower, Singapore",
    mapLink: "https://maps.google.com"
  },
  {
    city: "Berlin",
    address: "MYACCESS GmbH, Mühlenstr. 15, 10243 Berlin, Germany",
    mapLink: "https://maps.google.com"
  }
];

export default function Contact() {
  return (
    <div className="contact-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #f8f6f2; overflow-x: hidden; }

        .contact-main {
          padding-top: 100px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .container-90 {
          width: 90%;
          max-width: 1300px;
          margin-bottom: 80px;
        }

        /* --- TITLE SECTION --- */
        .contact-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #1a1a1a;
          margin-bottom: 40px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 30px;
          width: 90%;
          max-width: 1300px;
        }

        /* --- TOP ACTION CARDS --- */
        .action-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }
        .action-card {
          background: #fff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          min-height: 380px;
        }
        .action-card h3 { font-size: 24px; font-weight: 700; margin-bottom: 25px; }
        .action-card p { font-size: 15px; line-height: 1.6; color: #444; flex-grow: 1; margin-bottom: 30px; }
        
        .c-btn {
          width: 100%;
          padding: 14px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          cursor: pointer;
          border: none;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: 0.3s;
          margin-bottom: 10px;
        }
        .btn-orange { background: #f4531c; color: #fff; }
        .btn-black { background: #000; color: #fff; }
        .c-btn:hover { opacity: 0.9; transform: translateY(-2px); }

        /* --- OFFICES SECTION --- */
        .offices-header {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 30px;
          color: #1a1a1a;
        }
        .office-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .office-card {
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          border: 1px solid #eee;
          position: relative;
        }
        .office-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 15px;
        }
        .office-top h4 { font-size: 16px; font-weight: 700; }
        .map-link {
          font-size: 11px;
          font-weight: 700;
          color: #000;
          text-decoration: none;
          text-transform: uppercase;
          border-bottom: 2px solid #000;
          padding-bottom: 2px;
        }

        .address-box {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .pin-icon { font-size: 18px; color: #666; margin-top: 2px; }
        .address-text { font-size: 14px; line-height: 1.6; color: #444; }

        /* --- RESPONSIVE --- */
        @media (max-width: 1100px) {
          .action-grid { grid-template-columns: repeat(2, 1fr); }
          .office-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .action-grid, .office-grid { grid-template-columns: 1fr; }
          .action-card { padding: 30px; min-height: auto; }
          .contact-title { font-size: 32px; padding-bottom: 20px; }
        }
      `}</style>

      <Header />

      <main className="contact-main">
        {/* Main Title */}
        <h1 className="contact-title">Get in touch with us</h1>

        {/* Action Cards */}
        <section className="container-90 action-grid">
          {/* Sales */}
          <div className="action-card">
            <h3>Contact Sales</h3>
            <p>Our experts are ready to help you find the right automation solutions to scale your business efficiency around the world.</p>
            <button className="c-btn btn-orange">Find a Local Reseller &gt;</button>
          </div>

          {/* Support */}
          <div className="action-card">
            <h3>Contact Support</h3>
            <p>If you have questions about using our products, please check out our support resources or reach out to us below.</p>
            <button className="c-btn btn-orange">Visit Our Support Site &gt;</button>
            <button className="c-btn btn-black">Create a Support Ticket &gt;</button>
          </div>

          {/* General */}
          <div className="action-card">
            <h3>Contact MYACCESS</h3>
            <p>Want to share feedback on your MYACCESS experience with us? We're listening and ready to assist with general inquiries.</p>
            <button className="c-btn btn-black">Submit Feedback &gt;</button>
          </div>
        </section>

        {/* Offices Section */}
        <section className="container-90">
          <h2 className="offices-header">Offices</h2>
          <div className="office-grid">
            {officeLocations.map((loc, idx) => (
              <div key={idx} className="office-card">
                <div className="office-top">
                  <h4>{loc.city}</h4>
                  <a href={loc.mapLink} target="_blank" rel="noreferrer" className="map-link">Show on Map &gt;</a>
                </div>
                <div className="address-box">
                  <span className="pin-icon">📍</span>
                  <p className="address-text">{loc.address}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}