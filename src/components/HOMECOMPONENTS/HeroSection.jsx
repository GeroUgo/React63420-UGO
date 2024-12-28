import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center relative bg-sky-300">
     
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative container mx-auto px-6 py-24 flex items-center justify-center text-center text-white">
        <div className="max-w-3xl">
       
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            ¡Bienvenido a <span className="text-yellow-400">NestCodeStudio</span>!
          </h1>

        
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Transformamos tus ideas en proyectos digitales impresionantes. ¡Comienza tu viaje con nosotros hoy mismo!
          </p>

         
          <Button text="Comenzar Ahora" color="primary" size="large" onClick={handleClick} disabled={false} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
