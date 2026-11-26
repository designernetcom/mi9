import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Globe2, MessageCircle, ShieldCheck } from "lucide-react";
import { img } from "../../../data/companyData";
import "./CTA.css";
export default function CTA() {
  return (
    <section className="mi9-cta">
      {" "}
      {/* Background */}{" "}
      <img
        className="mi9-cta-image"
        src={img.cta}
        alt="Indian agricultural fields"
      />{" "}
      {/* Overlay */} <div className="mi9-cta-overlay" />{" "}
      {/* Decorative background */} <div className="mi9-cta-grid" />{" "}
      <div className="mi9-cta-orb mi9-cta-orb-one" />{" "}
      <div className="mi9-cta-orb mi9-cta-orb-two" />{" "}
      <div className="wrap mi9-cta-container">
        {" "}
        <div className="mi9-cta-content">
          {" "}
          {/* Top label */}{" "}
          <div className="mi9-cta-eyebrow">
            {" "}
            <span className="mi9-cta-eyebrow-icon">
              {" "}
              <Globe2 size={15} />{" "}
            </span>{" "}
            <span>INDIA TO THE WORLD</span>{" "}
          </div>{" "}
          {/* Heading */}{" "}
          <h2>
            {" "}
            Your trusted partner for{" "}
            <span>Indian agricultural exports.</span>{" "}
          </h2>{" "}
          {/* Description */}{" "}
          <p className="mi9-cta-description">
            {" "}
            Source quality Indian agricultural products with confidence. MI9
            International connects global buyers with dependable sourcing,
            export-ready packaging and reliable delivery.{" "}
          </p>{" "}
          {/* Actions */}{" "}
          <div className="mi9-cta-actions">
            {" "}
            <Link to="/contact" className="mi9-cta-button mi9-cta-primary">
              {" "}
              <span>Request a Quote</span>{" "}
              <span className="mi9-cta-arrow">
                {" "}
                <ArrowUpRight size={18} />{" "}
              </span>{" "}
            </Link>{" "}
            <Link to="/products" className="mi9-cta-button mi9-cta-secondary">
              {" "}
              <MessageCircle size={17} /> <span>Explore Products</span>{" "}
            </Link>{" "}
          </div>{" "}
          {/* Trust indicators */}{" "}
          <div className="mi9-cta-trust">
            {" "}
            <div className="mi9-cta-trust-item">
              {" "}
              <ShieldCheck size={17} /> <span>Quality Focused</span>{" "}
            </div>{" "}
            <div className="mi9-cta-trust-divider" />{" "}
            <div className="mi9-cta-trust-item">
              {" "}
              <Globe2 size={17} /> <span>Global Supply</span>{" "}
            </div>{" "}
            <div className="mi9-cta-trust-divider" />{" "}
            <div className="mi9-cta-trust-item">
              {" "}
              <span className="mi9-cta-trust-number">20+</span>{" "}
              <span>Years Experience</span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Right visual accent */}{" "}
        <div className="mi9-cta-side">
          {" "}
          <div className="mi9-cta-side-card">
            {" "}
            <span className="mi9-cta-side-label"> GLOBAL REACH </span>{" "}
            <strong>20+</strong>{" "}
            <span className="mi9-cta-side-text"> Export markets </span>{" "}
            <div className="mi9-cta-side-line" />{" "}
            <span className="mi9-cta-side-bottom">
              {" "}
              Trusted Indian sourcing{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
