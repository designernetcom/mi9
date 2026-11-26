
import React from "react";
import { Eye, Target } from "lucide-react";
import "./MissionVision.css";

const items = [
  {
    number: "01",
    label: "MISSION",
    title: "Our Mission",
    description:
      "To deliver farm-fresh Indian agricultural produce globally while keeping quality, transparency, and customer satisfaction at the core of all operations.",
    tags: ["QUALITY", "TRANSPARENCY", "TRUST"],
    icon: Target,
    variant: "mission",
  },
  {
    number: "02",
    label: "VISION",
    title: "Our Vision",
    description:
      "To become the most reliable and globally recognized Indian export partner for fresh tamarind, spices, grains, and fresh farm produce.",
    tags: ["GLOBAL", "RELIABLE", "RECOGNIZED"],
    icon: Eye,
    variant: "vision",
  },
];

function MissionVisionCard({ item }) {
  const Icon = item.icon;

  return (
    <article className={`mv-card mv-card-${item.variant}`}>
      <div className="mv-card-glow" aria-hidden="true" />

      {item.variant === "mission" ? (
        <div className="mv-pattern" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : (
        <div className="mv-orbit" aria-hidden="true">
          <span className="mv-orbit-dot" />
        </div>
      )}

      <div className="mv-top">
        <span className="mv-label">
          {item.number} / {item.label}
        </span>

        <div className="mv-icon">
          <Icon size={27} strokeWidth={1.7} aria-hidden="true" />
        </div>
      </div>

      <div className="mv-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>

      <div className="mv-bottom">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default function MissionVisionSection() {
  return (
    <section className="section mv-section">
      <div
        className="mv-bg-shape mv-bg-shape-1"
        aria-hidden="true"
      />
      <div
        className="mv-bg-shape mv-bg-shape-2"
        aria-hidden="true"
      />

      <div className="wrap">
        <header className="mv-intro">
          <div className="mv-intro-label">
            <span />
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
        </header>

        <div className="mission-vision-grid">
          {items.map((item) => (
            <MissionVisionCard key={item.variant} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
