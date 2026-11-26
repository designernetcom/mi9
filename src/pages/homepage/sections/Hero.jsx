import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { img } from "../../../data/companyData";

export default function Hero({
  title = "Fresh From India. Delivered Across the World.",
  eyebrow = "INDIA'S TRUSTED EXPORT PARTNER",
  image = img.hero,
  compact = false,
}) {
  return (
    <section className={"hero " + (compact ? "compact" : "")}>
      {/* Background Image */}
      <img src={image} alt="Indian agricultural export produce" />

      {/* Dark Overlay */}
      <div className="shade" />

      <motion.div
        className="heroContent wrap"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">{eyebrow}</p>

        <h1>{title}</h1>

        {!compact && (
          <>
            <p className="lead">
              Exporting tamarind, grains, fruits, vegetables and other
              farm-fresh products through a trusted global network built over
              20+ years.
            </p>
          </>
        )}
      </motion.div>
    </section>
  );
}
