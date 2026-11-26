import React from "react";
import { ShieldCheck, Globe2, Timer, Leaf, Ship } from "lucide-react";

import Title from "../../../components/common/Title";
import "./WhyChoose.css";

export default function WhyChoose() {
  const features = [
    [ShieldCheck, "Quality Assured"],
    [Globe2, "Global Reach"],
    [Timer, "On-Time Delivery"],
    [Leaf, "Customer Focus"],
    [Ship, "Export Expertise"],
  ];

  return (
    <section className="section beige why-choose-section">
      <div className="wrap">
        <Title title="Why global buyers choose MI9" />

        <div className="features">
          {features.map(([Icon, title]) => (
            <article key={title}>
              <Icon size={30} />
              <h3>{title}</h3>
              <p>
                Dependable sourcing and service built around international buyer
                requirements.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
