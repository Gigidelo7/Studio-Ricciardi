
import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Simple animation on component mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="chi-siamo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">La Nostra Filosofia: Empatia e Innovazione</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nello Studio Dentistico Ricciardi, crediamo che ogni paziente sia unico. La nostra missione è combinare le più avanzate tecnologie odontoiatriche con un approccio umano e personalizzato. Mettiamo al centro la comunicazione, l'ascolto delle vostre esigenze e la creazione di un rapporto di fiducia.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                L'estetica del sorriso è la nostra passione. Lavoriamo con precisione e arte per garantirvi non solo una salute orale impeccabile, ma anche un sorriso che rifletta la vostra personalità e vi dia sicurezza.
              </p>
              <a href="#servizi" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                Scopri i nostri servizi &rarr;
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://picsum.photos/seed/doctor/600/500"
                alt="Dr. Ricciardi" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
