import React from "react";
import GalleryGrid from "../components/common/GalleryGrid";
import "./Gallery.css";

export default function Gallery() {
  return (
    <>
      {/* Gallery Introduction */}
      <section className="mi9-gallery-page-intro">
        <div className="mi9-gallery-page-glow glow-one"></div>
        <div className="mi9-gallery-page-glow glow-two"></div>

        <div className="wrap">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
