import React from "react";
import Title from "../../../components/common/Title";
import Grid from "../../../components/common/Grid";
import "./Products.css";

export default function Products() {
  return (
    <section className="section products-section">
      <div className="wrap">
        <Title
          eye="OUR TOP-RATED PRODUCTS"
          title="What we export"
          copy="Premium Indian agricultural products sourced for global markets."
        />

        <Grid />
      </div>
    </section>
  );
}
