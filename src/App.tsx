import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductCarousel />
      <AboutUs />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
