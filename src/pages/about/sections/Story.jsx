import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { img } from "../../../data/companyData";
import "./Story.css";

const highlights = [
  {
    title: "20+ Years",
    text: "Export experience",
  },
  {
    title: "Direct Sourcing",
    text: "Trusted Indian farms",
  },
  {
    title: "Global Compliance",
    text: "Certified & reliable",
  },
  {
    title: "End-to-End",
    text: "Logistics support",
  },
];

export default function StorySection() {
  return (
    <section className="mi9-story-section">
      <div className="mi9-story-bg mi9-story-bg-one" aria-hidden="true" />
      <div className="mi9-story-bg mi9-story-bg-two" aria-hidden="true" />

      <div className="mi9-story-wrap">
        <div className="mi9-story-grid">
          <motion.div
            className="mi9-story-content"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mi9-story-eyebrow">
              <span className="mi9-story-line" />
              OUR STORY
            </div>

            <h2>
              Experience built on
              <span> trust, quality &amp; reach.</span>
            </h2>

            <p className="mi9-story-description">
              Our packaging and distribution arrangements are thoughtfully
              customized around client requirements, supported by a strong
              network across strategic locations in the UK, Europe and Gulf
              markets.
            </p>

            <div className="mi9-story-divider" />

            <div className="mi9-story-highlights">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="mi9-highlight-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="mi9-highlight-icon">
                    <CheckCircle2 size={17} aria-hidden="true" />
                  </div>

                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mi9-story-bottom">
              <span>INDIA</span>
              <i />
              <span>TRUST</span>
              <i />
              <span>GLOBAL REACH</span>
            </div>
          </motion.div>

          <motion.div
            className="mi9-story-visual"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mi9-visual-orbit orbit-one" aria-hidden="true" />
            <div className="mi9-visual-orbit orbit-two" aria-hidden="true" />

            <div className="mi9-image-frame">
              <div className="mi9-image-accent" />

              <img
                src={img.about}
                alt="MI9 International global produce sourcing"
                className="mi9-story-image"
              />

              <div className="mi9-image-overlay" aria-hidden="true" />

              <div className="mi9-image-corner">
                <span>MI9</span>
                <small>INTERNATIONAL</small>
              </div>
            </div>

            <motion.div
              className="mi9-experience-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mi9-experience-icon">
                <Award size={25} aria-hidden="true" />
              </div>

              <div className="mi9-experience-text">
                <strong>20+</strong>
                <span>Years of Excellence</span>
              </div>
            </motion.div>

            <motion.div
              className="mi9-global-badge"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="mi9-global-dot" />

              <div>
                <strong>GLOBAL REACH</strong>
                <small>UK · EUROPE · GULF</small>
              </div>
            </motion.div>

            <div className="mi9-image-caption">
              <span>INDIA</span>
              <i />
              <span>GLOBAL MARKETS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
