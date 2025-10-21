import React, { useEffect } from "react";
import Gallery from "../components/Gallery";

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue via-brand-magenta to-brand-yellow">
      <Gallery />
    </div>
  );
};

export default Catalog;
