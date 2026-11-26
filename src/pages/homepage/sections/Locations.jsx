import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, MapPin, Ship } from "lucide-react";
import "./Locations.css";
const markets = [
  { country: "Greece", region: "Europe", position: "market-one" },
  { country: "France", region: "Europe", position: "market-two" },
  { country: "Indonesia", region: "Southeast Asia", position: "market-three" },
  { country: "Oman", region: "Middle East", position: "market-four" },
  { country: "Sri Lanka", region: "South Asia", position: "market-five" },
  { country: "Dubai, UAE", region: "Middle East", position: "market-six" },
  { country: "Thailand", region: "Southeast Asia", position: "market-seven" },
  { country: "Vietnam", region: "Southeast Asia", position: "market-eight" },
];
export default function GlobalPresence() {
  return (
    <section className="global-presence">
      {" "}
      <div className="wrap">
        {" "}
        {/* HEADER */}{" "}
        <motion.div
          className="global-presence-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {" "}
          <div className="global-presence-eyebrow">
            {" "}
            <span>
              {" "}
              <Globe2 size={15} />{" "}
            </span>{" "}
            GLOBAL PRESENCE{" "}
          </div>{" "}
          <h2>
            {" "}
            Connecting Indian produce <span>with the world.</span>{" "}
          </h2>{" "}
          <p>
            {" "}
            From our sourcing network in India to international buyers, MI9
            International delivers agricultural products across key global
            markets.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* GLOBAL NETWORK */}{" "}
        <div className="global-network">
          {" "}
          {/* SVG TRADE ROUTES */}{" "}
          <svg
            className="global-routes"
            viewBox="0 0 1000 480"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {" "}
            <motion.path
              d="M500 245 C410 190 300 125 165 90"
              className="route"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2 }}
            />{" "}
            <motion.path
              d="M500 245 C400 245 270 235 105 210"
              className="route"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.35 }}
            />{" "}
            <motion.path
              d="M500 245 C410 300 310 355 175 395"
              className="route"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5 }}
            />{" "}
            <motion.path
              d="M500 245 C590 185 700 120 835 85"
              className="route"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.65 }}
            />{" "}
            <motion.path
              d="M500 245 C620 240 760 215 900 195"
              className="route"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.8 }}
            />{" "}
            <motion.path
              d="M500 245 C600 300 720 355 850 395"
              className="route"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.95 }}
            />{" "}
          </svg>{" "}
          {/* ANIMATED TRADE PARTICLES */}{" "}
          <span className="trade-particle particle-one" />{" "}
          <span className="trade-particle particle-two" />{" "}
          <span className="trade-particle particle-three" />{" "}
          <span className="trade-particle particle-four" /> {/* INDIA HUB */}{" "}
          <motion.div
            className="global-origin"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 90,
            }}
          >
            {" "}
            <div className="origin-rings">
              {" "}
              <span /> <span />{" "}
              <div className="origin-core">
                {" "}
                <Globe2 size={32} />{" "}
              </div>{" "}
            </div>{" "}
            <div className="origin-label">
              {" "}
              <strong>INDIA</strong> <span>Global sourcing hub</span>{" "}
            </div>{" "}
          </motion.div>{" "}
          {/* MARKET POINTS */}{" "}
          {markets.map((market, index) => (
            <motion.div
              key={market.country}
              className={`global-market ${market.position}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.09 }}
            >
              {" "}
              <span className="market-dot">
                {" "}
                <MapPin size={12} />{" "}
              </span>{" "}
              <div>
                {" "}
                <strong>{market.country}</strong>{" "}
                <small>{market.region}</small>{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
        {/* BOTTOM BAR */}{" "}
        <motion.div
          className="global-presence-footer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {" "}
          <div className="presence-stat">
            {" "}
            <Ship size={19} /> <span>International Supply</span>{" "}
          </div>{" "}
          <div className="presence-stat">
            {" "}
            <Globe2 size={19} /> <span>India to Global Markets</span>{" "}
          </div>{" "}
          <a href="/contact" className="presence-link">
            {" "}
            Partner With MI9 <ArrowUpRight size={16} />{" "}
          </a>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
