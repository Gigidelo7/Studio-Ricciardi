
import React, { useState, useEffect } from 'react';

interface StaffMemberProps {
  image: string;
  name: string;
  role: string;
}

const StaffMember: React.FC<StaffMemberProps> = ({ image, name, role }) => (
  <div className="text-center">
    <img src={image} alt={name} className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg mb-4" />
    <h4 className="text-xl font-bold text-blue-900">{name}</h4>
    <p className="text-gray-500">{role}</p>
  </div>
);


const Staff: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
  }, []);

  const team = [
    { image: 'https://picsum.photos/seed/staff1/200/200', name: 'Dr. Marco Ricciardi', role: 'Direttore Sanitario, Chirurgo Orale' },
    { image: 'https://picsum.photos/seed/staff2/200/200', name: 'Dr.ssa Anna Bianchi', role: 'Specialista in Ortodonzia' },
    { image: 'https://picsum.photos/seed/staff3/200/200', name: 'Laura Verdi', role: 'Igienista Dentale' },
    { image: 'https://picsum.photos/seed/staff4/200/200', name: 'Giulia Rossi', role: 'Assistente alla Poltrona' },
  ];
  
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Un Team di Professionisti al Tuo Servizio</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                La nostra forza è una squadra affiatata di esperti, pronti ad accoglierti con competenza e calore.
            </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
                <StaffMember key={index} {...member} />
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
