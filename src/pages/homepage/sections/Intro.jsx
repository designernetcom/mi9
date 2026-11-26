import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { img } from "../../../data/companyData";
import Title from "../../../components/common/Title";
import "./Intro.css";

export default function Intro() {
  const highlights = [
    "20+ years of export experience",
    "Trusted global export network",
    "Export-grade packaging & distribution",
    "Client-led sourcing solutions",
  ];

  return (
    <section className="section about-intro">
      <div className="wrap about-intro-grid">
        {/* About Image */}
        <motion.div
          className="about-intro-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-image-frame">
            <img
              className="aboutImg"
              src={img.about}
              alt="Agricultural sourcing"
            />

            <div className="about-image-overlay" />
          </div>

          <div className="about-experience">
            <span className="about-experience-number">20+</span>

            <span className="about-experience-text">
              Years of
              <strong>Global Experience</strong>
            </span>
          </div>

          <div className="about-decor about-decor-one" />
          <div className="about-decor about-decor-two" />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="about-intro-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Title
            eye="ABOUT MI9"
            title="Connecting India's finest produce with global markets"
          />

          <p className="about-intro-body">
            We <strong>Mi9 International Traders</strong> have emerged as
            leaders in the overseas market. We have earned trust in the field of
            trading, wholesaling, exporting and supplying fresh tamarind, fresh
            fruits, dry fruits, fresh vegetables and more across the globe.
          </p>

          <div className="about-checks">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                className="about-check"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: 0.15 + index * 0.08,
                }}
              >
                <span className="about-check-icon">
                  <Check size={15} />
                </span>

                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <Link className="about-discover-btn" to="/about">
            <span>Discover MI9</span>
            <span className="about-discover-arrow">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
