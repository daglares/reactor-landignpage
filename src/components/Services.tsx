import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Llaveros Personalizados",
      category: "Promocionales",
      image: "/images/llavero.png"
    },
    {
      id: 2,
      title: "Letrero Luminoso Reactor",
      category: "Señalización",
      image: "/images/luminoso.png"
    },
    {
      id: 3,
      title: "Gorras Personalizadas",
      category: "Textiles",
      image: "/images/NikeCapFR_1024x1024 copia.png"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Productos Destacados</h2>
          <p className="text-xl text-white">Algunos de nuestros productos más populares</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden mx-auto w-full hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 mt-2"
                />
                <div className="absolute top-4 right-4 bg-brand-magenta text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>

              </div>
            </div>
          ))}
        </div>
        
        {/* Botón Ver Más */}
        <div className="text-center mt-12">
          <Link
            to="/catalog"
            className="inline-flex items-center bg-brand-magenta text-white font-bold px-4 py-4 rounded-lg shadow-lg hover:bg-brand-blue transition-colors"
          >
            Ver Catálogo
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
