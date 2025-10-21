import React, { useState, useEffect } from "react";

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const products = [
    {
      id: 1,
      title: "Tarjetas de Presentación",
      description: "Profesionales en diferentes materiales y acabados",
      image: "/images/tarjetasdepresentacion.jpg"
    },
    {
      id: 2,
      title: "Volantes y Flyers",
      description: "Material promocional para eventos y campañas",
      image: "/images/stand.jpg"
    },
    {
      id: 3,
      title: "Banners y Vinilos",
      description: "Señalización y publicidad de gran formato",
      image: "/images/banner.jpg"
    },
    {
      id: 4,
      title: "Etiquetas Personalizadas",
      description: "Adhesivas para productos y empaques",
      image: "/images/stickers.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  // Timer automático para cambiar slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 3000); // Cambia cada 5 segundos

    // Limpiar el timer cuando el componente se desmonte
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Productos</h2>
          <p className="text-xl text-white">Soluciones de impresión para todas tus necesidades</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-12 text-center h-[500px] flex flex-col justify-between">
                    <div className="flex-1 flex flex-col justify-center">
                      {product.image.startsWith('/images/') ? (
                        <div className="mb-6 flex items-center justify-center h-48">
                          <img 
                            src={product.image} 
                            alt={product.title}
                            className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                          />
                        </div>
                      ) : (
                        <div className="text-6xl mb-6">{product.image}</div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-2">{product.title}</h3>
                      <p className="text-base text-gray-600 line-clamp-3">{product.description}</p>
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
          {products.map((_, index) => (
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
