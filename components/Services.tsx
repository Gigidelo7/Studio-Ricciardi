
import React, { useState, useEffect } from 'react';
import { CosmeticIcon, OrthoIcon, SurgeryIcon } from './IconComponents';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

  const services = [
    {
      icon: <CosmeticIcon className="w-8 h-8" />,
      title: 'Odontoiatria Estetica',
      description: 'Dalle faccette dentali allo sbiancamento, realizziamo il sorriso luminoso e armonioso che hai sempre desiderato.',
    },
    {
      icon: <OrthoIcon className="w-8 h-8" />,
      title: 'Ortodonzia',
      description: 'Soluzioni invisibili e tradizionali per allineare i tuoi denti a qualsiasi età, migliorando estetica e funzione masticatoria.',
    },
    {
      icon: <SurgeryIcon className="w-8 h-8" />,
      title: 'Chirurgia Orale',
      description: 'Interventi di alta precisione, dagli impianti dentali alle estrazioni complesse, eseguiti con le tecniche più sicure.',
    },
  ];

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">I Nostri Servizi d'Eccellenza</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Offriamo trattamenti all'avanguardia per prenderci cura della tua salute e bellezza orale.
            </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
