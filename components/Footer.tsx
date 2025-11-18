
import React from 'react';
import { InstagramIcon, FacebookIcon, ToothIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <ToothIcon className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Studio Dentistico Ricciardi</span>
            </div>
            <p className="text-blue-200">
              Il tuo sorriso merita il meglio.
            </p>
          </div>
          <div>
            <h5 className="font-bold uppercase mb-4">Link Utili</h5>
            <ul className="space-y-2">
              <li><a href="#chi-siamo" className="hover:text-blue-300 transition-colors">Chi Siamo</a></li>
              <li><a href="#servizi" className="hover:text-blue-300 transition-colors">Servizi</a></li>
              <li><a href="#contatti" className="hover:text-blue-300 transition-colors">Contatti</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase mb-4">Seguici</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
            <p className="text-blue-200 mt-4">Via Roma, 123 - Palagiano (TA)</p>
            <p className="text-blue-200">Tel: 099 888 4995</p>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-800 pt-8 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Studio Dentistico Ricciardi. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
