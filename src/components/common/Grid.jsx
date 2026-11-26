import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "../../data/companyData";

export default function Grid({ limit }) {
  return (
    <div className="productGrid">
      {products.slice(0, limit || 6).map((p) => (
        <Link className="product" key={p.slug} to={"/products/" + p.slug}>
          <div>
            <img loading="lazy" src={p.image} alt={p.name} />
          </div>
          <section>
            <h3>{p.name}</h3>
            <p>{p.blurb}</p>
            <strong>
              Explore Product <ArrowRight size={17} />
            </strong>
          </section>
        </Link>
      ))}
    </div>
  );
}
