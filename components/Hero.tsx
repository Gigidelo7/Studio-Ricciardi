
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <img src="https://picsum.photos/seed/dentalclinic/1920/1080" alt="Interno dello studio dentistico" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg leading-tight">
          Studio Dentistico Ricciardi
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light drop-shadow-md">
          Il tuo sorriso merita il meglio
        </p>
        <a 
          href="#contatti"
          className="mt-8 inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105 transform shadow-xl"
        >
          Prenota la tua Visita Lumina
        </a>
      </div>
    </section>
  );
};

export default Hero;
