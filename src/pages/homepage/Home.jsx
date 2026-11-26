import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import CTA from "./sections/CTA";
import Locations from "./sections/Locations";
import WhyChoose from "./sections/WhyChoose";
import ExportProcess from "./sections/ExportProcess";
import Intro from "./sections/Intro";
import Products from "./sections/Products";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      <Intro />

      <WhyChoose />

      <Products />

      {/* STATS */}
      <Stats />

      {/* LOCATIONS */}
      <Locations />

      {/* CTA */}
      <CTA />

      {/* NEW EXPORT PROCESS */}
      <ExportProcess />
    </>
  );
}
