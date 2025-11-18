
import React, { useState, useEffect } from 'react';
import { ToothIcon } from './IconComponents';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#chi-siamo', label: 'Chi Siamo' },
    { href: '#servizi', label: 'Servizi' },
    { href: '#team', label: 'Il Team' },
    { href: '#recensioni', label: 'Recensioni' },
    { href: '#contatti', label: 'Contatti' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <ToothIcon className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Studio Ricciardi</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#contatti" className="hidden sm:inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-transform hover:scale-105">
              Prenota Ora
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
            <a href="#contatti" onClick={() => setIsOpen(false)} className="block w-full text-center bg-blue-600 text-white mt-2 px-4 py-2 rounded-full font-semibold hover:bg-blue-700">
              Prenota Ora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
