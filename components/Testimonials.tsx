
import React, { useState, useEffect, useCallback } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from './IconComponents';

const testimonials = [
  {
    quote: "Professionalità e gentilezza impeccabili. Il Dott. Ricciardi e il suo team mi hanno messo subito a mio agio, e il risultato finale ha superato ogni mia aspettativa. Finalmente sorrido senza imbarazzo!",
    name: 'Maria G.',
    rating: 5,
  },
  {
    quote: "Avevo il terrore del dentista, ma in questo studio ho trovato un ambiente sereno e un personale attento e paziente. L'ortodonzia invisibile è stata una soluzione perfetta per me. Consigliatissimo!",
    name: 'Francesco T.',
    rating: 5,
  },
  {
    quote: "Mi sono rivolta allo studio per un intervento di chirurgia. Grande competenza e tecnologie moderne. Il decorso post-operatorio è stato eccellente grazie alle loro indicazioni. Grazie di cuore.",
    name: 'Elena R.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  }, [current]);

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };
  
    useEffect(() => {
        const slideInterval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(slideInterval);
    }, [nextTestimonial]);

  return (
    <section id="recensioni" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Le Voci dei Nostri Pazienti</h2>
          <p className="mt-2 opacity-80 max-w-2xl mx-auto">
            La vostra fiducia è la nostra più grande soddisfazione.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
             <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="bg-white/10 p-8 rounded-lg text-center backdrop-blur-sm">
                            <div className="flex justify-center mb-4">
                                {Array(testimonial.rating).fill(0).map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                            </div>
                            <p className="text-lg italic">"{testimonial.quote}"</p>
                            <p className="mt-4 font-bold text-xl">{testimonial.name}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
          <button onClick={prevTestimonial} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
