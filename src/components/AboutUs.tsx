import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nosotros</h2>
            <p className="text-lg text-white leading-relaxed">
              Con más de 10 años de experiencia en el sector de impresión digital, 
              Impresiones Reactor se ha consolidado como líder en soluciones gráficas 
              y servicios de importación. Nuestro compromiso es brindar calidad 
              excepcional y atención personalizada a cada cliente.
            </p>
            <p className="text-lg text-white leading-relaxed">
              Utilizamos tecnología de vanguardia y materiales de primera calidad 
              para garantizar que cada proyecto supere las expectativas. Desde 
              pequeñas empresas hasta corporaciones, confían en nosotros para 
              sus necesidades de impresión.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-brand-blue border-2 border-white text-white px-6 py-3 rounded-lg">
                <span className="font-semibold">10+ Años</span>
                <p className="text-sm">de experiencia</p>
              </div>
              <div className="bg-brand-magenta border-2 border-white text-white px-6 py-3 rounded-lg">
                <span className="font-semibold">500+</span>
                <p className="text-sm">clientes satisfechos</p>
              </div>
              <div className="bg-brand-yellow border-2 border-white text-brand-blue px-6 py-3 rounded-lg">
                <span className="font-semibold">24/7</span>
                <p className="text-sm">soporte técnico</p>
              </div>
            </div>
          </div>
          
          {/* Workshop Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-blue to-brand-magenta rounded-2xl p-4 text-center">
              <img 
                src="/images/taller2.jpg" 
                alt="Equipo de Reactor Print trabajando en el taller con banner impreso" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

