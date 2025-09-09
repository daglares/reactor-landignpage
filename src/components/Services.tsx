import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faLaptop, faPalette } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
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

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-white">Soluciones completas para todas tus necesidades de impresión</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}>
                <FontAwesomeIcon icon={service.icon} className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
