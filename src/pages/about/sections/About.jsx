import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe2,
  PackageCheck,
  ShieldCheck,
  Target,
  Eye,
  Award,
} from "lucide-react";

import { img } from "../../../data/companyData";
import Title from "../../../components/common/Title";
import Certificates from "../../../components/common/Certificates";
import "./About.css";

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality",
      desc: "Every batch of agricultural produce undergoes strict quality checks before dispatch.",
    },
    {
      icon: Globe2,
      title: "Global Supply Chain",
      desc: "Direct delivery channels established across the UK, Europe, and Gulf markets.",
    },
    {
      icon: PackageCheck,
      title: "Customized Packaging",
      desc: "Export-grade packaging tailored precisely to buyer specifications and longevity.",
    },
  ];

  return (
    <>
      {/* Main Story & Image Section */}
      <section className="mi9-story-section">
        <div className="mi9-story-bg mi9-story-bg-one"></div>
        <div className="mi9-story-bg mi9-story-bg-two"></div>

        <div className="mi9-story-wrap">
          <div className="mi9-story-grid">
            {/* =====================================================
          LEFT CONTENT
      ===================================================== */}

            <motion.div
              className="mi9-story-content"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="mi9-story-eyebrow">
                <span className="mi9-story-line"></span>
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

              <div className="mi9-story-divider"></div>

              {/* =================================================
            HIGHLIGHTS
        ================================================= */}

              <div className="mi9-story-highlights">
                {[
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
                ].map((item, index) => (
                  <motion.div
                    key={index}
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
                      <CheckCircle2 size={17} />
                    </div>

                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom brand statement */}

              <div className="mi9-story-bottom">
                <span>INDIA</span>
                <i></i>
                <span>TRUST</span>
                <i></i>
                <span>GLOBAL REACH</span>
              </div>
            </motion.div>

            {/* =====================================================
          RIGHT VISUAL
      ===================================================== */}

            <motion.div
              className="mi9-story-visual"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Decorative orbit */}

              <div className="mi9-visual-orbit orbit-one"></div>
              <div className="mi9-visual-orbit orbit-two"></div>

              <div className="mi9-image-frame">
                <div className="mi9-image-accent"></div>

                <img
                  src={img.about}
                  alt="MI9 International Global Produce Sourcing"
                  className="mi9-story-image"
                />

                <div className="mi9-image-overlay"></div>

                {/* image corner detail */}

                <div className="mi9-image-corner">
                  <span>MI9</span>
                  <small>INTERNATIONAL</small>
                </div>
              </div>

              {/* =================================================
            EXPERIENCE CARD
        ================================================= */}

              <motion.div
                className="mi9-experience-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
              >
                <div className="mi9-experience-icon">
                  <Award size={25} />
                </div>

                <div className="mi9-experience-text">
                  <strong>20+</strong>
                  <span>Years of Excellence</span>
                </div>
              </motion.div>

              {/* floating location indicator */}

              <motion.div
                className="mi9-global-badge"
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="mi9-global-dot"></span>

                <div>
                  <strong>GLOBAL REACH</strong>
                  <small>UK · EUROPE · GULF</small>
                </div>
              </motion.div>

              <div className="mi9-image-caption">
                <span>INDIA</span>
                <i></i>
                <span>GLOBAL MARKETS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values & Core Strengths Cards */}
      <section className="section beige values-section">
        <div className="wrap">
          <Title
            eye="WHY WORK WITH US"
            title="Our Commitment to Overseas Buyers"
          />

          <div className="values-grid">
            {values.map((v, i) => {
              const IconComp = v.icon;

              return (
                <motion.div
                  key={i}
                  className="value-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                    ease: "easeOut",
                  }}
                >
                  <div className="value-number">0{i + 1}</div>

                  <div className="value-icon">
                    <IconComp size={23} strokeWidth={1.8} />
                  </div>

                  <div className="value-content">
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>

                  <div className="value-arrow">
                    <span>↗</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section mv-section">
        <div className="mv-bg-shape mv-bg-shape-1"></div>
        <div className="mv-bg-shape mv-bg-shape-2"></div>

        <div className="wrap">
          <div className="mv-intro">
            <div className="mv-intro-label">
              <span></span>
              OUR PURPOSE
            </div>

            <h2>
              Driven by purpose.
              <br />
              <em>Built for global trust.</em>
            </h2>

            <p>
              From carefully sourced Indian produce to global markets, our
              mission and vision guide every step of the journey.
            </p>
          </div>

          <div className="mission-vision-grid">
            {/* Mission */}
            <div className="mv-card mv-card-mission">
              <div className="mv-card-glow"></div>

              <div className="mv-pattern">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="mv-top">
                <span className="mv-label">01 / MISSION</span>

                <div className="mv-icon">
                  <Target size={27} strokeWidth={1.7} />
                </div>
              </div>

              <div className="mv-content">
                <h3>Our Mission</h3>

                <p>
                  To deliver farm-fresh Indian agricultural produce globally
                  while keeping quality, transparency, and customer satisfaction
                  at the core of all operations.
                </p>
              </div>

              <div className="mv-bottom">
                <span>QUALITY</span>
                <span>TRANSPARENCY</span>
                <span>TRUST</span>
              </div>
            </div>

            {/* Vision */}
            <div className="mv-card mv-card-vision">
              <div className="mv-card-glow"></div>

              <div className="mv-orbit">
                <span className="mv-orbit-dot"></span>
              </div>

              <div className="mv-top">
                <span className="mv-label">02 / VISION</span>

                <div className="mv-icon">
                  <Eye size={27} strokeWidth={1.7} />
                </div>
              </div>

              <div className="mv-content">
                <h3>Our Vision</h3>

                <p>
                  To become the most reliable and globally recognized Indian
                  export partner for fresh tamarind, spices, grains, and fresh
                  farm produce.
                </p>
              </div>

              <div className="mv-bottom">
                <span>GLOBAL</span>
                <span>RELIABLE</span>
                <span>RECOGNIZED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Certificates />
    </>
  );
}
