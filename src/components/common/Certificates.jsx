import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ExternalLink } from "lucide-react";
import { certs } from "../../data/companyData";
import Title from "./Title";
import "./Certificates.css";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  return (
    <section className="section documentation-section">
      <div className="doc-bg-circle doc-bg-circle-one"></div>
      <div className="doc-bg-circle doc-bg-circle-two"></div>

      <div className="wrap">
        <div className="documentation-heading">
          <div className="doc-eyebrow">
            <span></span>
            DOCUMENTATION
            <span></span>
          </div>

          <Title eye="" title="Credentials that support confidence" />

          <p className="doc-intro">
            Our documentation and certifications reflect our commitment to
            quality, compliance, transparency, and dependable international
            trade.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="certs">
          {certs.map((cert, i) => (
            <motion.button
              key={cert.name}
              type="button"
              className="cert-card"
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
              }}
              whileHover={{ y: -7 }}
              aria-label={`View ${cert.name} certificate`}
            >
              <div className="cert-card-top">
                <span className="cert-number">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="cert-arrow">
                  <ExternalLink size={17} />
                </span>
              </div>

              <div className="cert-icon">
                <Award size={25} strokeWidth={1.8} />
              </div>

              <div className="cert-info">
                <b>{cert.name}</b>
                <small>View certificate</small>
              </div>

              <div className="cert-line"></div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Certificate Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal"
            onClick={() => setSelectedCert(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.article
              className="cert-modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>

              <div className="cert-modal-header">
                <span className="modal-eyebrow">OFFICIAL DOCUMENT</span>

                <h3>{selectedCert.name}</h3>
              </div>

              {/* Actual Certificate Image */}
              <div className="cert-image-wrapper">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.name} certificate`}
                  className="cert-preview-image"
                />
              </div>

              <div className="modal-accent-line"></div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
