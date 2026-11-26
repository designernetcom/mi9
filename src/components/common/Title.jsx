import React from "react";

export default function Title({ eye, title, copy, light = false }) {
  return (
    <div className={"title " + (light ? "light" : "")}>
      <p className="eyebrow">{eye}</p>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
