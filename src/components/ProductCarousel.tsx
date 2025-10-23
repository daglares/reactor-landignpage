import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faLaptop, faPalette } from '@fortawesome/free-solid-svg-icons';

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    {
      id: 1,
      title: "Impresión Digital",
      description: "Impresión de alta calidad en diferentes materiales y formatos, desde tarjetas hasta banners gigantes.",
      icon: faPrint,
      color: "from-brand-blue to-blue-600"
    },
    {
      id: 2,
      title: "Servicio Técnico Profesional",
      description: "Ofrecemos servicio técnico profesional para garantizar la confianza de nuestros clientes.",
      icon: faLaptop,
      color: "from-brand-magenta to-pink-600"
    },
    {
      id: 3,
      title: "Diseño y Personalización",
      description: "Servicios de diseño gráfico y personalización completa para que tu proyecto sea único.",
      icon: faPalette,
      color: "from-brand-yellow to-yellow-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  // Timer automático para cambiar slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 3000); // Cambia cada 3 segundos

    // Limpiar el timer cuando el componente se desmonte
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-white">Soluciones completas para todas tus necesidades</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-12 text-center h-[450px] flex flex-col justify-center">
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="mb-8 flex items-center justify-center">
                        <div className={`w-24 h-24 mx-auto bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-lg`}>
                          <FontAwesomeIcon icon={service.icon} className="text-white text-4xl" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">{service.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-brand-blue text-white p-3 rounded-full hover:bg-blue-600 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-brand-blue text-white p-3 rounded-full hover:bg-blue-600 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Dots indicator - Works on both mobile and desktop */}
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-brand-magenta' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
