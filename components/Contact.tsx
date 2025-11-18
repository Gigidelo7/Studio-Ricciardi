
import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from './IconComponents';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Richiedi una Consulenza</h3>
            <p className="text-gray-600 mb-6">Compila il form per prenotare la tua "Visita Lumina". Ti ricontatteremo al più presto.</p>
            {submitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                    <p className="font-bold">Grazie!</p>
                    <p>Il tuo messaggio è stato inviato con successo. Ti contatteremo a breve.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="sr-only">Nome</label>
                        <input type="text" name="name" id="name" required placeholder="Il tuo nome" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" required placeholder="La tua email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="sr-only">Telefono</label>
                        <input type="tel" name="phone" id="phone" placeholder="Telefono (opzionale)" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Messaggio</label>
                        <textarea name="message" id="message" rows={4} required placeholder="Il tuo messaggio" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">Invia Richiesta</button>
                </form>
            )}
        </div>
    );
};

const Contact: React.FC = () => {
    return (
        <section id="contatti" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900">Contattaci e Prenota una Visita</h2>
                    <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                        Siamo a tua disposizione per qualsiasi informazione o per fissare un appuntamento.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 text-blue-600 p-3 rounded-full"><MapPinIcon className="w-6 h-6"/></div>
                                <div>
                                    <h4 className="font-bold text-lg text-blue-900">Indirizzo</h4>
                                    <p className="text-gray-600">Via Roma, 123 - 74019 Palagiano (TA), Puglia</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 text-blue-600 p-3 rounded-full"><PhoneIcon className="w-6 h-6"/></div>
                                <div>
                                    <h4 className="font-bold text-lg text-blue-900">Telefono</h4>
                                    <a href="tel:0998884995" className="text-gray-600 hover:text-blue-600">099 888 4995</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 text-blue-600 p-3 rounded-full"><MailIcon className="w-6 h-6"/></div>
                                <div>
                                    <h4 className="font-bold text-lg text-blue-900">Email</h4>
                                    <a href="mailto:info@studioricciardi.it" className="text-gray-600 hover:text-blue-600">info@studioricciardi.it</a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12097.433213430225!2d16.99343085!3d40.5794191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13470a1a44f3b0c3%3A0x7c73a876483562a1!2s74019%20Palagiano%20TA%2C%20Italy!5e0!3m2!1sen!2sus!4v1620050000000!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Mappa Studio Dentistico Ricciardi"
                            ></iframe>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
