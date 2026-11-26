import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";

import logo from "../../assets/img/mi-logo-final.png";
import { products } from "../../data/companyData";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`header ${scrolled ? "solid" : ""}`}>
      <div className="nav wrap">
        {/* Brand */}
        <Link to="/" className="brand">
          <div className="logo-container">
            <img
              src={logo}
              alt="MI9 International Logo"
              className="header-logo"
            />
          </div>

          <div className="brand-text">
            <strong>MI9 INTERNATIONAL</strong>
            <span>India • Global Markets</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>

          <Link to="/about" className={isActive("/about") ? "active" : ""}>
            About Us
          </Link>

          {/* Products */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              to="/products"
              className={`dropdown-trigger ${
                isActive("/products") ? "active" : ""
              }`}
            >
              <span>Products</span>

              <ChevronDown
                size={15}
                strokeWidth={2}
                className={`chevron ${dropdownOpen ? "rotate" : ""}`}
              />
            </Link>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{
                    opacity: 0,
                    y: 15,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="dropdown-heading">
                    <div>
                      <span className="eyebrow">OUR COLLECTION</span>
                      <h3>Explore Our Products</h3>
                    </div>

                    <Link to="/products" className="dropdown-view-all">
                      View all
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="dropdown-grid">
                    {products.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/products/${p.slug}`}
                        className="dropdown-item"
                      >
                        <div className="item-image-wrapper">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="item-thumb"
                          />
                        </div>

                        <div className="item-content">
                          <strong className="item-title">{p.name}</strong>

                          <p className="item-desc">{p.blurb}</p>

                          <span className="item-link">
                            Explore
                            <ArrowRight size={12} />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="dropdown-footer">
                    <span>Premium quality • Global standards</span>

                    <Link to="/products" className="view-all-link">
                      View Complete Portfolio
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/gallery" className={isActive("/gallery") ? "active" : ""}>
            Gallery
          </Link>

          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
            Contact
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <Link className="header-cta" to="/contact">
            <Sparkles size={15} />
            <span>Get a Quote</span>
            <ArrowRight size={14} />
          </Link>

          <button
            className={`hamb ${open ? "is-open" : ""}`}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="mobile-drawer"
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <div className="mobile-inner">
                <Link
                  to="/"
                  className={isActive("/") ? "mobile-active" : ""}
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className={isActive("/about") ? "mobile-active" : ""}
                  onClick={() => setOpen(false)}
                >
                  About Us
                </Link>

                {/* Mobile Products */}
                <div className="mobile-accordion">
                  <button
                    className="mobile-accordion-header"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  >
                    <span>Products</span>

                    <ChevronDown
                      size={18}
                      className={mobileProductsOpen ? "rotate" : ""}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        className="mobile-accordion-body"
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                      >
                        <Link
                          to="/products"
                          className="mobile-sublink overview"
                          onClick={() => setOpen(false)}
                        >
                          All Products
                          <ArrowRight size={14} />
                        </Link>

                        {products.map((p) => (
                          <Link
                            key={p.slug}
                            to={`/products/${p.slug}`}
                            className="mobile-sublink"
                            onClick={() => setOpen(false)}
                          >
                            {p.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/gallery"
                  className={isActive("/gallery") ? "mobile-active" : ""}
                  onClick={() => setOpen(false)}
                >
                  Gallery
                </Link>

                <Link
                  to="/contact"
                  className={isActive("/contact") ? "mobile-active" : ""}
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>

                <div className="mobile-cta">
                  <Link
                    className="mobile-quote"
                    to="/contact"
                    onClick={() => setOpen(false)}
                  >
                    <span>Get a Quote</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
