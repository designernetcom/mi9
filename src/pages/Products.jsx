import { Link } from "react-router-dom";
import "./Products.css";

// Replace these image paths with your existing imports.
import tamarindImage from "../assets/img/tamarind.png";
import spicesImage from "../assets/img/spices.jpg";
import fruitsImage from "../assets/img/fruits.jpg";
import vegetablesImage from "../assets/img/vegetables.jpg";
import grainsImage from "../assets/img/grains.jpg";
import dryFruitsImage from "../assets/img/dry_fruits.jpg";
import gumImage from "../assets/img/gunder_gum.png";
import riceImage from "../assets/img/rice.jpg";

const products = [
  {
    name: "Indian Tamarind",
    image: tamarindImage,
    path: "/products/indian-tamarind",
  },

  {
    name: "Basmati Rice",
    image: riceImage,
    path: "/products/rice",
  },

  {
    name: "Indian Spices",
    image: spicesImage,
    path: "/products/indian-spices",
  },

  {
    name: "Food Grains",
    image: grainsImage,
    path: "/products/food-grains",
  },
  {
    name: "Fresh Fruits",
    image: fruitsImage,
    path: "/products/fresh-fruits",
  },
  {
    name: "Fresh Vegetables",
    image: vegetablesImage,
    path: "/products/fresh-vegetables",
  },
  {
    name: "Dry Fruits",
    image: dryFruitsImage,
    path: "/products/dry-fruits",
  },

  {
    name: "Gunder Gum",
    image: gumImage,
    path: "/products/gunder",
  },
];

export default function Products() {
  return (
    <main className="mi9-products-page">
      <section className="mi9-products-section">
        <div className="mi9-products-container">
          <div className="mi9-products-section-heading">
            <div>
              <span className="mi9-products-eyebrow">
                EXPLORE OUR COLLECTION
              </span>
              <h2>Our Products</h2>
            </div>

            <p>
              Discover products selected with a focus on quality, consistency,
              and global market requirements.
            </p>
          </div>

          <div className="mi9-products-grid">
            {products.map((product, index) => (
              <article
                className="mi9-product-card"
                key={product.path}
                style={{ "--card-index": index }}
              >
                <Link
                  to={product.path}
                  className="mi9-product-image-link"
                  aria-label={`View ${product.name}`}
                  tabIndex={-1}
                >
                  <div className="mi9-product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />

                    <span className="mi9-product-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Link>

                <div className="mi9-product-card-content">
                  <h3>{product.name}</h3>

                  <Link to={product.path} className="mi9-product-button">
                    <span>View Product</span>
                    <span className="mi9-product-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
