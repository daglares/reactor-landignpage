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
      title: "Etiquetas Personalizadas", 
      category: "Etiquetas",
      image: "/images/etiquetas.jpg"
    },
    { 
      id: 3, 
      title: "Gafetes Corporativos", 
      category: "Identificación",
      image: "/images/gafetes.jpg"
    },
    { 
      id: 4, 
      title: "Imanes Personalizados", 
      category: "Promocionales",
      image: "/images/iman.jpg"
    },
    { 
      id: 5, 
      title: "Llaveros Personalizados", 
      category: "Promocionales",
      image: "/images/llavero.png"
    },
    { 
      id: 6, 
      title: "Letrero Luminoso Reactor", 
      category: "Señalización",
      image: "/images/luminoso.png"
    },
    { 
      id: 7, 
      title: "Gorras Personalizadas", 
      category: "Textiles",
      image: "/images/NikeCapFR_1024x1024 copia.png"
    },
    { 
      id: 8, 
      title: "Llaveros en MDF", 
      category: "Promocionales",
      image: "/images/pngs reactor copia.jpg"
    },
    { 
      id: 9, 
      title: "Cilindros de impresión", 
      category: "Promocionales",
      image: "/images/pngs reactor copia.png"
    },
    { 
      id: 10, 
      title: "Pulseras Personalizadas", 
      category: "Accesorios",
      image: "/images/Pulseras.jpg"
    },
    { 
      id: 11, 
      title: "Tazas Personalizadas", 
      category: "Regalos",
      image: "/images/Taza.png"
    },
    { 
      id: 12, 
      title: "Termos Personalizados", 
      category: "Regalos",
      image: "/images/Termo.jpg"
    },
    { 
      id: 13, 
      title: "Vasos Personalizados", 
      category: "Regalos",
      image: "/images/Vasos.png"
    },
    { 
      id: 14, 
      title: "Sublimación Personalizada", 
      category: "Personalización",
      image: "/images/sublima.jpg"
    },
    { 
      id: 15, 
      title: "Viniles para Vehículos", 
      category: "Personalización",
      image: "/images/viniles.jpg"
    },
    { 
      id: 16, 
      title: "Módulos de Venta", 
      category: "Publicidad",
      image: "/images/stand.jpg"
    },
    { 
      id: 17, 
      title: "Banners Publicitarios", 
      category: "Publicidad",
      image: "/images/banner.jpg"
    }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Catálogo de Productos</h2>
          <p className="text-xl text-white">Descubre nuestra amplia gama de productos de impresión y personalización</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-gradient-to-br from-brand-magenta via-brand-blue to-brand-yellow rounded-2xl shadow-lg overflow-hidden border-4 border-white hover:shadow-xl transition-shadow">
              <div className="relative mt-8 h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-brand-magenta text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                {/*<p className="text-white font-semibold">Trabajo profesional de alta calidad</p>*/}
              </div>
            <div className="mb-4 flex justify-center">
              <a
                href={`https://wa.me/524661264749?text=Hola%20Impresiones%20Reactor%2C%20quisiera%20una%20cotizaci%C3%B3n%20para%20${encodeURIComponent(item.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-brand-magenta border-2 border-white text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-white hover:text-brand-magenta transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Solicitar Cotización
              </a>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
