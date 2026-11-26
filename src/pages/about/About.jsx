import React from "react";
import Story from "./sections/Story";
import Values from "./sections/Values";
import MissionVision from "./sections/MissionVision";
import Certificates from "../../components/common/Certificates";
import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      <Story />
      <Values />
      <MissionVision />
      <Certificates />
    </main>
  );
}
