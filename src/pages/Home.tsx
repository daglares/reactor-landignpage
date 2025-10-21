import React from "react";
import Hero from "../components/Hero";
import ProductCarousel from "../components/ProductCarousel";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductCarousel />
      <AboutUs />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
