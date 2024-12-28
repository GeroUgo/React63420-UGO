import React from 'react';

const SobreNosotros = () => {
  return (
    <section className="py-40 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 gap-4">
          
          {/* Imagen */}
          <div className="lg:w-1/2">
            <img 
              src="https://via.placeholder.com/500x400"  // Imagen de muestra con medidas
              alt="Nuestro equipo" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Texto */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
              Un Poco de Nosotros
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 opacity-80">
              En <span className="font-semibold text-yellow-400">NestCodeStudio</span>, somos un equipo apasionado por transformar ideas en proyectos digitales de calidad. Desde el diseño hasta la implementación, nos aseguramos de que cada proyecto sea único y cumpla con las expectativas de nuestros clientes. ¡Conozcámonos y hagamos crecer tu negocio juntos!
            </p>

            <a href="#contacto">
              <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition duration-300 py-3 px-6 rounded-full text-lg font-semibold">
                Contáctanos
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
