import React, { useEffect, useState, useRef, useMemo } from "react";
import { Users, CalendarDays, TrendingUp, Globe2, Award } from "lucide-react";
import { stats } from "../../../data/companyData";
import "./Stats.css";

const icons = [
  <Users size={24} strokeWidth={1.8} />,
  <CalendarDays size={24} strokeWidth={1.8} />,
  <TrendingUp size={24} strokeWidth={1.8} />,
  <Globe2 size={24} strokeWidth={1.8} />,
];

function parseStat(value) {
  const text = String(value);
  const match = text.match(/^([^0-9]*)([\d,.]+)(.*)$/);

  if (!match) return { valid: false, raw: text };

  const num = parseFloat(match[2].replace(/,/g, ""));
  const isYear = num >= 1900 && num <= 2100 && !match[2].includes(".");

  return {
    valid: true,
    prefix: match[1],
    number: num,
    suffix: match[3],
    decimal: match[2].includes("."),
    isYear: isYear,
  };
}

function Counter({ value, startAnimation }) {
  const parsed = useMemo(() => parseStat(value), [value]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Skip animation for non-valid stats or static year numbers (like 2002)
    if (!parsed.valid || parsed.isYear) return;

    // Reset to 0 when not animating
    if (!startAnimation) {
      setCount(0);
      return;
    }

    const target = parsed.number;
    const duration = 2000; // 2 seconds count-up duration
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [parsed, startAnimation]);

  if (!parsed.valid) return <strong>{value}</strong>;
  if (parsed.isYear)
    return (
      <strong>
        {parsed.prefix}
        {parsed.number}
        {parsed.suffix}
      </strong>
    );

  const displayedNumber = parsed.decimal
    ? count.toFixed(1)
    : Math.floor(count).toLocaleString("en-IN");

  return (
    <strong>
      {parsed.prefix}
      {displayedNumber}
      {parsed.suffix}
    </strong>
  );
}

export default function Stats() {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-bg-glow" />

      <div className="stats-container">
        <div className="stats-heading">
          <div className="stats-badge">
            <Award size={14} />
            <span>EXCELLENCE IN EXPORTS</span>
          </div>

          <h2>
            Numbers that reflect <span>our journey.</span>
          </h2>

          <p>
            Two decades of experience connecting Indian agricultural products
            with trusted global markets.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map(([value, label], index) => (
            <div className="stat-card" key={`${label}-${index}`}>
              <div className="stat-card-inner">
                <div className="stat-icon-wrapper">
                  <div className="stat-icon">{icons[index]}</div>
                </div>

                <div className="stat-number">
                  <Counter value={value} startAnimation={startAnimation} />
                </div>

                <div className="stat-label">{label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-bottom">
          <span className="bottom-tag">INDIA</span>
          <div className="stats-line-wrapper">
            <div className="stats-line"></div>
            <div className="stats-dot"></div>
          </div>
          <span className="bottom-tag">GLOBAL MARKETS</span>
        </div>
      </div>
    </section>
  );
}
