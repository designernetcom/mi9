import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/mi-logo-final.png";
import "./Footer.css";

/* ================================
   ICONS
================================ */

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2
      19.79 19.79 0 0 1-8.63-3.07
      19.5 19.5 0 0 1-6-6
      19.79 19.79 0 0 1-3.07-8.67
      A2 2 0 0 1 4.11 2h3
      a2 2 0 0 1 2 1.72
      12.84 12.84 0 0 0 .7 2.81
      2 2 0 0 1-.45 2.11L8.09 9.91
      a16 16 0 0 0 6 6l1.27-1.27
      a2 2 0 0 1 2.11-.45
      12.84 12.84 0 0 0 2.81.7
      A2 2 0 0 1 22 16.92z"
    />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M20 4C11 4 5 8 5 14c0 3.5 2.5 6 6 6
      6 0 9-7 9-16Z"
    />
    <path d="M4 21c3-5 7-8 12-10" />
  </svg>
);

/* ================================
   DATA
================================ */

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact"],
];

const products = [
  ["Tamarind", "indian-tamarind"],
  ["Rice", "rice"],
  ["Spices", "indian-spices"],
  ["Food Grains", "food-grains"],
  ["Fresh Fruits", "fresh-fruits"],
  ["Fresh Vegetables", "fresh-vegetables"],
  ["Gunder Gum", "gum"],
  ["Dry Fruits", "dry-fruits"],
];

/* ================================
   FOOTER
================================ */

export default function Footer() {
  return (
    <footer className="mi9-footer">
      {/* Background decoration */}
      <div className="mi9-footer-orb mi9-orb-one" />
      <div className="mi9-footer-orb mi9-orb-two" />

      <div className="mi9-footer-container">
        {/* ==========================
            CTA
        =========================== */}

        <section className="mi9-footer-cta-section">
          <div className="mi9-footer-cta-content">
            <div className="mi9-footer-eyebrow">
              <GlobeIcon />
              <span>INDIA • GLOBAL MARKETS</span>
            </div>

            <h2>
              Growing beyond <span>borders.</span>
            </h2>

            <p>
              Reliable Indian agricultural products for trusted international
              supply partnerships.
            </p>
          </div>

          <Link to="/contact" className="mi9-footer-cta-button">
            <span>Get in Touch</span>
            <ArrowRight />
          </Link>
        </section>

        {/* ==========================
            MAIN GRID
        =========================== */}

        <section className="mi9-footer-grid">
          {/* BRAND */}

          <div className="mi9-footer-brand">
            <Link to="/" className="mi9-footer-logo">
              <img
                src={logo}
                alt="MI9 International Logo"
                className="header-logo"
              />

              <div className="mi9-footer-logo-text">
                <strong>MI9 INTERNATIONAL</strong>
                <small>AGRICULTURAL EXPORTS</small>
              </div>
            </Link>

            <p className="mi9-footer-description">
              Connecting India's agricultural excellence with international
              markets through quality, consistency and dependable export
              service.
            </p>

            {/* Social buttons */}

            {/* <div className="mi9-footer-socials">
              <a href="#" aria-label="LinkedIn" className="mi9-social-link">
                in
              </a>

              <a href="#" aria-label="Instagram" className="mi9-social-link">
                ◎
              </a>

              <a href="#" aria-label="Website" className="mi9-social-link">
                <GlobeIcon />
              </a>
            </div> */}
          </div>

          {/* QUICK LINKS */}

          <div className="mi9-footer-column">
            <h3>Quick Links</h3>

            <div className="mi9-footer-links">
              {quickLinks.map(([name, path]) => (
                <Link key={path} to={path} className="mi9-footer-link">
                  <span>{name}</span>
                  <ArrowUpRight />
                </Link>
              ))}
            </div>
          </div>

          {/* PRODUCTS */}

          <div className="mi9-footer-column">
            <h3>Products</h3>

            <div className="mi9-footer-links">
              {products.map(([name, slug]) => (
                <Link
                  key={slug}
                  to={`/products/${slug}`}
                  className="mi9-footer-link"
                >
                  <span>{name}</span>
                  <ArrowUpRight />
                </Link>
              ))}
            </div>

            <Link to="/products" className="mi9-view-products">
              <span>View all products</span>
              <ArrowRight />
            </Link>
          </div>

          {/* CONTACT */}

          <div className="mi9-footer-column">
            <h3>Contact Us</h3>

            <div className="mi9-contact-item">
              <div className="mi9-contact-icon">
                <PhoneIcon />
              </div>

              <div>
                <span className="mi9-contact-label">Phone</span>

                <a href="tel:+919371095152">+91 9371095152</a>
              </div>
            </div>

            <div className="mi9-contact-item">
              <div className="mi9-contact-icon">
                <MailIcon />
              </div>

              <div>
                <span className="mi9-contact-label">Email</span>

                <a href="mailto:mi9international@gmail.com">
                  mi9international@gmail.com
                </a>
              </div>
            </div>

            <div className="mi9-contact-item">
              <div className="mi9-contact-icon">
                <MapPinIcon />
              </div>

              <div>
                <span className="mi9-contact-label">Corporate Office</span>

                <p>144 MG Road pune 411001, Maharashtra, India.</p>
              </div>
            </div>
            <div className="mi9-contact-item">
              <div className="mi9-contact-icon">
                <MapPinIcon />
              </div>

              <div>
                <span className="mi9-contact-label">Branch Office</span>

                <p>381/ 17 bhawani peth Pune 411042, Maharashtra, India.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================
            BOTTOM BAR
        =========================== */}

        <div className="mi9-footer-bottom">
          <p>
            © {new Date().getFullYear()} MI9 International. All rights reserved.
          </p>

          {/* <div className="mi9-footer-legal">
            <Link to="/privacy">Privacy Policy</Link>

            <span>•</span>

            <Link to="/terms">Terms & Conditions</Link>
          </div> */}

          <div className="mi9-footer-status">
            <span className="mi9-status-dot" />
            Designed & Developed By{" "}
            <a href="https://www.netcom-india.com/">
              Netcom Business Solutions Pvt.Ltd
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
