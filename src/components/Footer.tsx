import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src="/images/logoreactor.png" 
                  alt="Impresiones Reactor Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">Impresiones Reactor</span>
            </div>
            <p className="text-gray-300 mb-4">
              Tu socio confiable en impresión digital y servicios de importación. 
              Calidad, rapidez y atención personalizada.
            </p>
            <p className="text-brand-yellow font-semibold text-lg">
              "Tus ideas, impresas con calidad"
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-brand-yellow transition-colors">Inicio</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-brand-yellow transition-colors">Productos</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-brand-yellow transition-colors">Servicios</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-brand-yellow transition-colors">Nosotros</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-brand-yellow transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-5 mb-6">
              <p className="text-gray-300 flex items-center">
                <span className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center mr-10 p-0 m-0">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className="text-brand-blue text-xs p-0 m-0" 
                  />
                </span>
                impresionesreactor@hotmail.com
              </p>
              <p className="text-gray-300 flex items-center">
                <span className="w-8 h-8 bg-brand-magenta rounded-lg flex items-center justify-center mr-10 p-0 m-0">
                  <FontAwesomeIcon 
                    icon={faPhone} 
                    className="text-white text-xs p-0 m-0" 
                  />
                </span>
                +52 (466) 126-4749
              </p>
              <p className="text-gray-300 flex items-center">
                <span className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center mr-1 p-0 m-0">
                  <FontAwesomeIcon 
                    icon={faMapMarkerAlt} 
                    className="text-white text-xs p-0 m-3" 
                  />
                </span>
                Miguel Hidalgo 616, Zona Centro, Salvatierra, Guanajuato, México.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="w-10 h-10 bg-brand-magenta rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com" className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <FontAwesomeIcon icon={faTiktok} className="w-5 h-5 text-brand-blue" />
              </a>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para tu próximo proyecto?</h3>
            <p className="text-gray-300 mb-6">Solicita tu cotización gratuita y descubre por qué somos la mejor opción</p>
            <a
              href="https://wa.me/524661264749?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20cotizaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-magenta text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-600 transition-colors"
            >
              Solicitar Cotización Gratuita
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy;Impresiones Reactor. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
