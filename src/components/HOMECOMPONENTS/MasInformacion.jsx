import React from 'react';

const MasInformacion = () => {
  return (
    <section className="py-60 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Título Principal */}
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            ¿Por qué elegir <span className="text-yellow-400">NestCodeStudio</span>?
          </h2>

          {/* Subtítulo o Descripción Breve */}
          <p className="text-lg sm:text-xl mb-8 opacity-80">
            Creamos soluciones digitales personalizadas que ayudan a tu negocio a crecer. Nuestro equipo de expertos está aquí para convertir tus ideas en una realidad.
          </p>

          {/* Botón de Llamada a la Acción */}
          <a href="#contacto">
            <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition duration-300 py-3 px-6 rounded-full text-lg font-semibold">
              ¡Comienza con Nosotros!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MasInformacion;
