import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Globe2,
  Leaf,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import "./ProductDetails.css";
import { products } from "../data/companyData";

const qualityPoints = [
  [ArrowUpRight, "Fresh & Carefully Selected"],
  [ArrowUpRight, "Natural Taste & Aroma"],
  [ArrowUpRight, "Quality Grading"],
  [ArrowUpRight, "Hygienic Handling"],
  [ArrowUpRight, "Export-Ready Packaging"],
];

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <main className="mi9-tamarind-page">
      <section className="mi9-tamarind-hero">
        <div className="mi9-tamarind-hero-pattern" />
        <div className="wrap">
          <div className="mi9-tamarind-hero-grid">
            <motion.div
              className="mi9-tamarind-hero-content"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mi9-product-eyebrow">
                <span />
                {product.eyebrow}
              </div>
              <h1>{product.name}</h1>
              <p className="mi9-tamarind-lead">{product.lead}</p>
              <p className="mi9-tamarind-intro">{product.detail}</p>
              <div className="mi9-tamarind-actions">
                <Link to="/contact" className="mi9-product-btn">
                  <span>Enquire about {product.name}</span>
                  <ArrowUpRight size={18} />
                </Link>
                {/* <a href="#product-details" className="mi9-product-link">
                  Explore product <span>↓</span>
                </a> */}
              </div>
            </motion.div>

            <motion.div
              className="mi9-tamarind-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="mi9-tamarind-orbit orbit-one" />
              <div className="mi9-tamarind-orbit orbit-two" />
              <div className="mi9-tamarind-image-wrap">
                <div className="mi9-tamarind-image-accent" />
                <img src={product.image} alt={product.name} />
                <div className="mi9-tamarind-image-overlay" />
              </div>
              <div className="mi9-tamarind-quality-card">
                <div className="mi9-tamarind-quality-icon">
                  <Leaf size={20} />
                </div>
                <div>
                  <strong>Quality Assured</strong>
                  <span>Carefully sourced & handled</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mi9-tamarind-applications">
        <div className="wrap">
          <div className="mi9-applications-grid">
            <div className="mi9-applications-content">
              <div className="mi9-section-eyebrow">
                <span />
                APPLICATIONS
              </div>
              <h2>
                Made for <em>many markets.</em>
              </h2>
              <p>{product.applications_desc}</p>
              <div className="mi9-applications-note">
                <Leaf size={18} />
                <span>
                  Tell us your product specifications and destination market.
                </span>
              </div>
            </div>
            <div className="mi9-applications-list">
              {product.applications.map((application, index) => (
                <div className="mi9-application-item" key={application}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{application}</strong>
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RICE SPECIFICATIONS — shown only when product data includes specifications */}
      {product.specifications?.length > 0 && (
        <section className="mi9-rice-specifications" id="product-details">
          <div className="wrap">
            <div className="mi9-section-eyebrow">
              <span />
              PRODUCT SPECIFICATIONS
            </div>

            <div className="mi9-rice-specifications-heading">
              <div>
                <h2>
                  Pusa 1509 <em>Basmati Rice</em>
                </h2>
                <p>
                  Technical and commercial details for the offered rice lot.
                  Final specifications are subject to buyer approval and
                  contract terms.
                </p>
              </div>

              <div className="mi9-rice-crop-tag">
                <span>Crop</span>
                <strong>Old Crop</strong>
              </div>
            </div>

            <div className="mi9-rice-table-wrap">
              <table className="mi9-rice-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Trading Standard / Offered Specification</th>
                  </tr>
                </thead>

                <tbody>
                  {product.specifications.map((specification) => (
                    <tr key={specification.parameter}>
                      <td>{specification.parameter}</td>
                      <td>{specification.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {product.commercialDetails && (
              <div className="mi9-rice-commercial">
                <div>
                  <span>Indicative Price</span>
                  <strong>{product.commercialDetails.price}</strong>
                </div>

                <div>
                  <span>Delivery Terms</span>
                  <strong>{product.commercialDetails.incoterm}</strong>
                </div>

                <p>{product.commercialDetails.note}</p>

                <Link to="/contact" className="mi9-product-btn">
                  <span>Enquire About 1509 Rice</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* =========================================
    MI9 PREMIUM DRY FRUITS SUBCATEGORIES
========================================= */}

      {/* =========================================
    MI9 DRY FRUITS SUBCATEGORIES
========================================= */}

      {product.subcategories?.length > 0 && (
        <section className="mi9-dry-fruits-subcategories">
          <div className="mi9-dry-fruits-wrap">
            {/* Section Heading */}
            <div className="mi9-dry-fruits-heading">
              <span className="mi9-section-eyebrow">
                <span className="mi9-dry-fruits-heading-line" />
                OUR PREMIUM COLLECTION
                <span className="mi9-dry-fruits-heading-line" />
              </span>

              <h2>
                Explore Our <span>Dry Fruits</span> Range
              </h2>

              <p>
                Discover carefully selected dry fruits, thoughtfully sourced and
                presented to meet the quality expectations of global markets.
              </p>
            </div>

            {/* Subcategories */}
            {product.subcategories.map((category, categoryIndex) => (
              <div className="mi9-raisin-category" key={category.name}>
                <div className="mi9-raisin-category-heading">
                  <div className="mi9-raisin-category-title">
                    <span className="mi9-raisin-category-number">
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <span className="mi9-raisin-small-label">
                        DISCOVER OUR RANGE
                      </span>

                      <h3>{category.name}</h3>
                    </div>
                  </div>

                  <p>{category.description}</p>
                </div>

                {/* Product Cards */}
                <div className="mi9-raisin-products">
                  {category.products.map((item, itemIndex) => (
                    <article className="mi9-raisin-product" key={item.name}>
                      {/* Product Images */}
                      <div className="mi9-raisin-product-visual">
                        <span className="mi9-raisin-product-badge">
                          PREMIUM QUALITY
                        </span>

                        <div className="mi9-raisin-images">
                          <div className="mi9-raisin-image-main">
                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                            />

                            <span className="mi9-raisin-image-caption">
                              PRODUCT
                            </span>
                          </div>

                          <div className="mi9-raisin-image-pack">
                            <img
                              src={item.packagingImage}
                              alt={`${item.name} packaging`}
                              loading="lazy"
                            />

                            <span className="mi9-raisin-image-caption">
                              PACKAGING
                            </span>
                          </div>
                        </div>

                        <span className="mi9-raisin-product-index">
                          PRODUCT {String(itemIndex + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Product Details */}
                      <div className="mi9-raisin-product-content">
                        <span className="mi9-raisin-product-kicker">
                          {category.name}
                        </span>

                        <h4>{item.name}</h4>

                        <p className="mi9-raisin-product-description">
                          {item.description}
                        </p>

                        {/* Packaging */}
                        <div className="mi9-raisin-packing">
                          <span
                            className="mi9-raisin-packing-icon"
                            aria-hidden="true"
                          >
                            <span className="mi9-icon-box" />
                          </span>

                          <span className="mi9-raisin-packing-text">
                            <small>AVAILABLE PACKING</small>
                            <strong>{item.packing}</strong>
                          </span>
                        </div>

                        {/* Features */}
                        <div className="mi9-raisin-features-heading">
                          Product Highlights
                        </div>

                        <ul className="mi9-raisin-features">
                          {item.features?.map((feature) => (
                            <li key={feature}>
                              <span
                                className="mi9-icon-check"
                                aria-hidden="true"
                              >
                                ✓
                              </span>

                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Product Footer */}
                        <div className="mi9-raisin-product-footer">
                          <span className="mi9-raisin-export-label">
                            <span className="mi9-icon-globe" aria-hidden="true">
                              ◎
                            </span>
                            Export-Ready Selection
                          </span>

                          <span className="mi9-raisin-footer-mark">MI9</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact CTA */}
            <div className="mi9-raisin-bottom-note">
              <div className="mi9-raisin-note-icon" aria-hidden="true">
                <span className="mi9-icon-boxes">▦</span>
              </div>

              <div className="mi9-raisin-note-content">
                <h3>Looking for the right product for your market?</h3>

                <p>
                  Explore our range and contact our team for product information
                  and packaging enquiries.
                </p>
              </div>

              <a href="/contact" className="mi9-raisin-contact-link">
                Contact Us
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="mi9-tamarind-premium">
        <div className="wrap">
          <div className="mi9-tamarind-premium-grid">
            <div className="mi9-premium-heading">
              <div className="mi9-section-eyebrow">
                <span />
                FEATURES
              </div>

              <h2>
                Prepared for <em>your market.</em>
              </h2>
            </div>

            <div className="mi9-premium-copy">
              <p>{product.contact_desc}</p>

              <p>
                Contact our team to discuss availability, specifications,
                packaging, and shipping for {product.name.toLowerCase()}.
              </p>
            </div>
          </div>

          {/* PRODUCT FEATURES */}
          <div className="mi9-product-feature-strip">
            {product.features.map((feature, index) => (
              <motion.div
                className="mi9-product-feature"
                key={feature}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <span className="mi9-product-feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{feature}</strong>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
