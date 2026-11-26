
import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import Title from "../../../components/common/Title";
import "./Values.css";

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

export default function ValuesSection() {
  return (
    <section className="section beige values-section">
      <div className="wrap">
        <Title
          eye="WHY WORK WITH US"
          title="Our Commitment to Overseas Buyers"
        />

        <div className="values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                <div className="value-number">
                  0{index + 1}
                </div>

                <div className="value-icon">
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <div className="value-content">
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>

                <div className="value-arrow" aria-hidden="true">
                  ↗
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
