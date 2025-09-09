import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contacto</h2>
          <p className="text-xl text-white">Estamos aquí para ayudarte con tu próximo proyecto</p>
        </div>
        
        <div className="gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex flex-col items-start space-y-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 m-3 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-start text-gray-800">Dirección</p>
                      <p className="text-gray-600 text-start">Miguel Hidalgo 616, Zona Centro, Salvatierra, Guanajuato, México.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-magenta rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-start text-gray-800">Teléfono</p>
                      <p className="text-gray-600">+52 (466) 126-4749</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-start text-gray-800">Email</p>
                      <p className="text-gray-600">impresionesreactor@hotmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <div className="bg-green-500 text-white p-4 rounded-2xl text-center max-w-md mx-auto">
              <h4 className="text-xl font-bold mb-2">¿Necesitas una cotización rápida?</h4>
              <p className="mb-4">Contáctanos por WhatsApp para atención inmediata</p>
              <a
                href="https://wa.me/524661264749?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20cotizaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center mx-auto"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        {/* Google Maps Embed */}
        <div className="mt-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.0182210727916!2d-100.88305033045434!3d20.214292157329663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cc49b103d0035%3A0x5ade1f7984451bd7!2sImpresiones%20Reactor!5e0!3m2!1ses-419!2smx!4v1757435137499!5m2!1ses-419!2smx"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Impresiones Reactor"
              className="w-full h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
