import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe, Heart, Users } from 'lucide-react';

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
        <div className="text-center mb-20 fade-in">
          <p className="text-vivid-green-600 text-sm font-medium tracking-widest uppercase mb-4">
            Nous Joindre
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8 font-serif">
            Contact
          </h1>
          <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* Contact Form */}
          <div className="slide-in-left">
            <div className="bg-gradient-to-br from-slate-50 to-vivid-green-50 p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-light text-slate-800 mb-8 flex items-center">
                <Send className="w-6 h-6 mr-3 text-vivid-green-600" />
                Envoyez-nous un message
              </h2>
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
                      className="w-full px-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none transition-colors rounded-xl bg-white shadow-sm"
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
                      className="w-full px-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none transition-colors rounded-xl bg-white shadow-sm"
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
                      className="w-full px-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none transition-colors rounded-xl bg-white shadow-sm"
                    />
                  </div>
                  <div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none transition-colors rounded-xl bg-white shadow-sm"
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
                    className="w-full px-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none transition-colors resize-vertical rounded-xl bg-white shadow-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group bg-vivid-green-600 hover:bg-vivid-green-700 text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 flex items-center rounded-full shadow-lg hover:shadow-xl"
                >
                  <Send size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-12 slide-in-right">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-medium text-slate-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-vivid-green-600" />
                Siège Principal
              </h3>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-vivid-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Lubumbashi, République Démocratique du Congo</p>
                    <p className="text-sm">Bel-Air</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-vivid-green-600 flex-shrink-0" size={16} />
                  <p>+243 81 505 7593</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-vivid-green-600 flex-shrink-0" size={16} />
                  <p>contact@amisdugerme.org</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-medium text-slate-800 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-amber-600" />
                Horaires des Services
              </h3>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Dimanche - Culte du dimanche</p>
                    <p className="text-sm">9h00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Mercredi - Culte du mercredi</p>
                    <p className="text-sm">16h00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Vendredi - Nuit de réflexion</p>
                    <p className="text-sm">20h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Locations */}
        <div className="py-20 bg-gradient-to-br from-slate-50 to-vivid-green-50 -mx-6 px-6 rounded-3xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl font-light text-slate-800 mb-8 font-serif">
                Nos Implantations
              </h2>
              <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
            </div>

            {/* Siège Principal */}
            <div className="mb-12 scale-in">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 max-w-md mx-auto rounded-3xl shadow-2xl">
                <div className="text-vivid-green-400 text-xs font-medium tracking-widest uppercase mb-4 flex items-center justify-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Siège Principal
                </div>
                <h3 className="text-lg font-medium mb-2 text-white">Lubumbashi</h3>
                <p className="text-sm mb-4 text-slate-300">République Démocratique du Congo</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start space-x-2">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0 text-vivid-green-400" />
                    <p>Bel-Air</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={14} className="flex-shrink-0 text-vivid-green-400" />
                    <p>+243 81 505 7593</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={14} className="flex-shrink-0 text-vivid-green-400" />
                    <p>contact@amisdugerme.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RDC Cities */}
            <div className="mb-12 slide-up">
              <h3 className="text-xl font-medium text-slate-800 mb-6 text-center flex items-center justify-center">
                <Globe className="w-6 h-6 mr-2 text-vivid-green-600" />
                République Démocratique du Congo
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {['Kinshasa (N\'sele, N\'Djili, Kasa-vubu, UPN)', 'Kolwezi', 'Kipushi', 'Kananga', 'Lufu', 'Kikwit'].map((city, index) => (
                  <div key={index} className={`p-6 bg-white border border-gray-100 text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 scale-in animation-delay-${index * 100}`}>
                    <p className="text-slate-600 font-light text-sm">{city}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* International */}
            <div className="slide-up animation-delay-400">
              <h3 className="text-xl font-medium text-slate-800 mb-6 text-center flex items-center justify-center">
                <Users className="w-6 h-6 mr-2 text-amber-600" />
                International
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['France', 'USA', 'Canada', 'Belgique', 'Australie', 'Afrique du Sud'].map((country, index) => (
                  <div key={index} className={`p-6 bg-white border border-gray-100 text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 scale-in animation-delay-${(index + 6) * 100}`}>
                    <p className="text-slate-600 font-light">{country}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;