import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Excelente calidad en las tarjetas de presentación. El servicio es muy profesional y cumplen con los tiempos de entrega.",
      author: "María González",
      company: "Consultora Empresarial",
      rating: 5
    },
    {
      id: 2,
      quote: "Hemos trabajado con Reactor Print por más de 3 años. Su atención al detalle y calidad de impresión es excepcional.",
      author: "Carlos Rodríguez",
      company: "Agencia de Marketing",
      rating: 5
    },
    {
      id: 3,
      quote: "Los banners para nuestro evento quedaron perfectos. Definitivamente los recomiendo para proyectos grandes.",
      author: "Ana Martínez",
      company: "Eventos Corporativos",
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Clientes</h2>
          <p className="text-xl text-white">Algunos de nuestros clientes satisfechos</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-brand-blue">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
