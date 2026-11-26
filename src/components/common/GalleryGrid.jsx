import React, { useState } from "react";
import { ArrowUpRight, ZoomIn, X } from "lucide-react";
import { gallery } from "../../data/companyData";

export default function GalleryGrid() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = gallery.map((imgSrc, index) => ({
    src: imgSrc,
    number: String(index + 1).padStart(2, "0"),
  }));

  return (
    <>
      <div className="mi9-gallery-intro">
        <div className="mi9-gallery-intro-line"></div>

        <div className="mi9-gallery-intro-content">
          <span>OUR VISUAL JOURNEY</span>

          <h3>
            From Indian farms
            <em> to global markets.</em>
          </h3>

          <p>
            Explore the people, produce, sourcing and export journey behind MI9
            International.
          </p>
        </div>

        <div className="mi9-gallery-intro-mark">
          <strong>MI9</strong>
          <span>IN FRAME</span>
        </div>
      </div>

      <div className="mi9-gallery">
        {galleryItems.map((item, index) => (
          <button
            type="button"
            key={index}
            className={`mi9-gallery-card mi9-gallery-card-${index + 1}`}
            onClick={() => setActiveImage(item)}
          >
            <img
              src={item.src}
              loading="lazy"
              alt={`MI9 International ${item.category}`}
            />

            <div className="mi9-gallery-overlay"></div>

            <div className="mi9-gallery-number">{item.number}</div>

            <div className="mi9-gallery-top">
              <span>{item.category}</span>

              <div className="mi9-gallery-open">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="mi9-gallery-content">
              <strong>{item.title}</strong>

              <div className="mi9-gallery-view">
                <ZoomIn size={15} />
                <span>VIEW IMAGE</span>
              </div>
            </div>

            <div className="mi9-gallery-corner"></div>
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="mi9-gallery-lightbox"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="mi9-gallery-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="mi9-gallery-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close image"
            >
              <X size={24} />
            </button>

            <img src={activeImage.src} alt={activeImage.title} />

            <div className="mi9-gallery-lightbox-info">
              <span>{activeImage.category}</span>
              <strong>{activeImage.title}</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
