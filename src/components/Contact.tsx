import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Votre message a été envoyé avec succès !');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const locations = [
    {
      country: "République Démocratique du Congo",
      city: "Kinshasa",
      address: "Avenue de la Paix, Commune de Lingwala",
      phone: "+243 81 234 5678",
      email: "kinshasa@amisdugerme.org",
      isHeadquarters: true
    },
    {
      country: "Afrique du Sud",
      city: "Johannesburg",
      address: "123 Church Street, Sandton",
      phone: "+27 11 234 5678",
      email: "johannesburg@amisdugerme.org"
    },
    {
      country: "Suisse",
      city: "Genève",
      address: "Rue du Rhône 15, 1204 Genève",
      phone: "+41 22 123 4567",
      email: "geneve@amisdugerme.org"
    },
    {
      country: "Belgique",
      city: "Bruxelles",
      address: "Avenue Louise 234, 1050 Bruxelles",
      phone: "+32 2 123 4567",
      email: "bruxelles@amisdugerme.org"
    },
    {
      country: "France",
      city: "Paris",
      address: "12 Rue de la République, 75011 Paris",
      phone: "+33 1 23 45 67 89",
      email: "paris@amisdugerme.org"
    },
    {
      country: "Allemagne",
      city: "Berlin",
      address: "Unter den Linden 45, 10117 Berlin",
      phone: "+49 30 123 4567",
      email: "berlin@amisdugerme.org"
    },
    {
      country: "États-Unis",
      city: "New York",
      address: "145 Broadway, New York, NY 10006",
      phone: "+1 212 123 4567",
      email: "newyork@amisdugerme.org"
    },
    {
      country: "Canada",
      city: "Montréal",
      address: "1234 Rue Sainte-Catherine, Montréal, QC",
      phone: "+1 514 123 4567",
      email: "montreal@amisdugerme.org"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-vivid-green-600 text-sm font-medium tracking-widest uppercase mb-4">
            Nous Joindre
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
            Contact
          </h1>
          <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light text-slate-800 mb-8">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Nom complet"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Téléphone"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none transition-colors"
                  >
                    <option value="">Sujet</option>
                    <option value="information">Demande d'information</option>
                    <option value="priere">Demande de prière</option>
                    <option value="visite">Planifier une visite</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Votre message"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none transition-colors resize-vertical"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 flex items-center"
              >
                <Send size={16} className="mr-2" />
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium text-slate-800 mb-6">Siège Principal</h3>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-vivid-green-600 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Kinshasa, République Démocratique du Congo</p>
                    <p className="text-sm">Avenue de la Paix, Commune de Lingwala</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-vivid-green-600 flex-shrink-0" size={18} />
                  <p>+243 81 234 5678</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-vivid-green-600 flex-shrink-0" size={18} />
                  <p>contact@amisdugerme.org</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-slate-800 mb-6">Horaires des Services</h3>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-center space-x-3">
                  <Clock className="text-vivid-green-600 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Dimanche - Service Principal</p>
                    <p className="text-sm">10h00 - 12h30</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-vivid-green-600 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Mercredi - Étude Biblique</p>
                    <p className="text-sm">19h00 - 21h00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-vivid-green-600 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Samedi - Réunion des Jeunes</p>
                    <p className="text-sm">18h00 - 20h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Locations */}
        <div className="py-20 bg-slate-50 -mx-6 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-slate-800 mb-8">
                Nos Implantations Mondiales
              </h2>
              <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {locations.map((location, index) => (
                <div key={index} className={`p-6 ${location.isHeadquarters ? 'bg-slate-800 text-white' : 'bg-white border border-gray-100'}`}>
                  {location.isHeadquarters && (
                    <div className="text-vivid-green-400 text-xs font-medium tracking-widest uppercase mb-4">
                      Siège Principal
                    </div>
                  )}
                  <h3 className={`text-lg font-medium mb-2 ${location.isHeadquarters ? 'text-white' : 'text-slate-800'}`}>
                    {location.city}
                  </h3>
                  <p className={`text-sm mb-4 ${location.isHeadquarters ? 'text-slate-300' : 'text-slate-600'}`}>
                    {location.country}
                  </p>
                  <div className={`space-y-2 text-sm ${location.isHeadquarters ? 'text-slate-300' : 'text-slate-600'}`}>
                    <div className="flex items-start space-x-2">
                      <MapPin size={14} className={`mt-0.5 flex-shrink-0 ${location.isHeadquarters ? 'text-vivid-green-400' : 'text-vivid-green-600'}`} />
                      <p>{location.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={14} className={`flex-shrink-0 ${location.isHeadquarters ? 'text-vivid-green-400' : 'text-vivid-green-600'}`} />
                      <p>{location.phone}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail size={14} className={`flex-shrink-0 ${location.isHeadquarters ? 'text-vivid-green-400' : 'text-vivid-green-600'}`} />
                      <p className="truncate">{location.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;