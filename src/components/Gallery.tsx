import React from "react";

const Gallery = () => {
  const galleryItems = [
    { 
      id: 1, 
      title: "Tarjetas de Presentación", 
      category: "Tarjetas",
      image: "/images/tarjetasdepresentacion.jpg"
    },
    { 
      id: 2, 
      title: "Banners Corporativos", 
      category: "Banners",
      image: "/images/banner.jpg"
    },
    { 
      id: 3, 
      title: "Recarga de Cartuchos", 
      category: "Volantes",
      image: "/images/recargadecartuchos.jpg"
    },
    { 
      id: 4, 
      title: "Etiquetas Personalizadas", 
      category: "Etiquetas",
      image: "/images/stickers.jpg"
    },
    { 
      id: 5, 
      title: "Vinilos Decorativos", 
      category: "Vinilos",
      image: "/images/viniles.jpg"
    },
    { 
      id: 6, 
      title: "Regalos Personalizados", 
      category: "Regalos",
      image: "/images/regalos.png"
    }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Galería de Trabajos</h2>
          <p className="text-xl text-white">Algunos de nuestros proyectos más destacados</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 bg-gray-100"
                />
                <div className="absolute top-4 right-4 bg-brand-magenta text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">Trabajo profesional de alta calidad</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
