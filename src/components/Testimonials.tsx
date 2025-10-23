import React from "react";

const Testimonials = () => {
  const clients = [
    {
      id: 1,
      name: "La Veranda",
      description: "Restaurant Café Bar",
      logo: "/images/verandablanco.png"
    },
    {
      id: 2,
      name: "Oculto",
      description: "Empresa de Servicios",
      logo: "/images/ocultoblanco.png"
    },
    {
      id: 3,
      name: "Finca Rosas Blancas",
      description: "Agroturismo",
      logo: "/images/fincarosasblanco.png"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-3">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Clientes</h2>
          <p className="text-xl text-white">Algunos de nuestros orgullosos clientes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center h-32">
              <img 
                src={client.logo} 
                alt={`Logo de ${client.name}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
