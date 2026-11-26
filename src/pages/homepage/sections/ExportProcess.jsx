import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  PackageCheck,
  Ship,
  CheckCircle2,
} from "lucide-react";
import "./ExportProcess.css";

const steps = [
  {
    number: "01",
    title: "Requirement",
    text: "We understand your product, quantity, quality and destination requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Sourcing",
    text: "Products are sourced through our trusted agricultural supply network in India.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Quality Check",
    text: "Products are inspected and prepared according to agreed specifications.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Packing",
    text: "Export-ready packaging is arranged for safe international handling.",
    icon: PackageCheck,
  },
  {
    number: "05",
    title: "Shipment",
    text: "Documentation and logistics are coordinated for reliable global delivery.",
    icon: Ship,
  },
];

export default function ExportProcess() {
  return (
    <section className="export-process">
      <div className="wrap">
        <motion.div
          className="export-process-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="export-process-eyebrow">
            <span></span>
            EXPORT PROCESS
            <span></span>
          </div>

          <h2>
            From India to your
            <strong> global destination.</strong>
          </h2>

          <p>
            A streamlined export process designed to make sourcing Indian
            agricultural products simple, reliable and transparent.
          </p>
        </motion.div>

        <div className="export-process-list">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="export-process-item"
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="export-process-icon">
                  <Icon size={22} />
                </div>

                <div className="export-process-number">{step.number}</div>

                <div className="export-process-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="export-process-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div>
            <span className="export-pulse"></span>
            INDIA
            <b>→</b>
            GLOBAL DESTINATION
          </div>

          <span className="export-process-trust">
            <ShieldCheck size={16} />
            Quality-focused export coordination
          </span>
        </motion.div>
      </div>
    </section>
  );
}
