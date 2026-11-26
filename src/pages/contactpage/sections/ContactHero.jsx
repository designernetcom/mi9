import React from "react";
import { motion } from "framer-motion";
import { Globe2, Leaf, ShieldCheck } from "lucide-react";
import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="mi9-contact-hero">
      <div className="mi9-contact-hero-bg" />
      <div className="mi9-contact-grid-pattern" />

      <motion.div
        className="mi9-contact-orbit orbit-a"
        animate={{ rotate: 360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="mi9-contact-orbit orbit-b"
        animate={{ rotate: -360 }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="mi9-contact-floating-dot dot-one" />
      <div className="mi9-contact-floating-dot dot-two" />
      <div className="mi9-contact-floating-dot dot-three" />

      <div className="wrap mi9-contact-hero-wrap">
        <motion.div
          className="mi9-contact-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mi9-contact-eyebrow">
            <span />
            CONTACT MI9 INTERNATIONAL
          </div>

          <h1>
            Let’s build a<em> global connection.</em>
          </h1>

          <p>
            Looking for reliable Indian agricultural products for your
            international market? Connect with our team and let’s discuss your
            sourcing and export requirements.
          </p>

          <div className="mi9-contact-hero-pills">
            <span>
              <Globe2 size={15} />
              Global Export
            </span>
            <span>
              <Leaf size={15} />
              Farm Sourced
            </span>
            <span>
              <ShieldCheck size={15} />
              Quality Focused
            </span>
          </div>
        </motion.div>

        <motion.div
          className="mi9-contact-hero-side"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="mi9-contact-globe-card">
            <div className="mi9-contact-globe-ring ring-one" />
            <div className="mi9-contact-globe-ring ring-two" />
            <div className="mi9-contact-globe-ring ring-three" />

            <div className="mi9-contact-globe-core">
              <Globe2 size={52} strokeWidth={1.2} />
            </div>

            <div className="mi9-globe-label label-india">
              <span />
              INDIA
            </div>
            <div className="mi9-globe-label label-uk">UK</div>
            <div className="mi9-globe-label label-europe">EUROPE</div>
            <div className="mi9-globe-label label-gulf">GULF</div>

            <div className="mi9-globe-line line-one" />
            <div className="mi9-globe-line line-two" />
            <div className="mi9-globe-line line-three" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
