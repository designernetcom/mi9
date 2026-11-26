// import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/homepage/Home";
import About from "./pages/about/About";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/contactpage/Contact";

import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
      <Footer />
    </div>
  );
}
