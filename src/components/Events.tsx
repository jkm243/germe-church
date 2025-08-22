import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Service de Noël Spécial",
      date: "25 Décembre 2024",
      time: "10:00",
      location: "Temple Principal - Kinshasa",
      description: "Célébration spéciale de la naissance de notre Seigneur Jésus-Christ.",
      category: "Service Spécial"
    },
    {
      id: 2,
      title: "Retraite Spirituelle des Jeunes",
      date: "28 Décembre 2024",
      time: "09:00",
      location: "Centre de Retraite - Matadi",
      description: "Trois jours de retraite pour les jeunes avec enseignements et prières.",
      category: "Retraite"
    },
    {
      id: 3,
      title: "Service du Nouvel An",
      date: "1 Janvier 2025",
      time: "22:00",
      location: "Temple Principal - Kinshasa",
      description: "Service de passage à la nouvelle année avec prières et intercessions.",
      category: "Service Spécial"
    },
    {
      id: 4,
      title: "Conférence Biblique Internationale",
      date: "15 Janvier 2025",
      time: "08:00",
      location: "Palais des Congrès - Kinshasa",
      description: "Grande conférence sur le thème 'Le Retour du Seigneur'.",
      category: "Conférence"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-4">
            Calendrier
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
            Événements
          </h1>
          <div className="w-16 h-px bg-amber-600 mx-auto"></div>
        </div>

        {/* Featured Event */}
        <div className="mb-20 p-12 bg-slate-50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-4">
                Événement à la une
              </p>
              <h2 className="text-3xl font-light text-slate-800 mb-6">Service de Noël Spécial</h2>
              <p className="text-slate-600 font-light leading-relaxed mb-8">
                Rejoignez-nous pour une célébration exceptionnelle de la naissance de notre 
                Seigneur Jésus-Christ avec des chants, témoignages et un message inspiré.
              </p>
              <div className="flex items-center space-x-8 text-sm text-slate-500 mb-8">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  25 Décembre 2024
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  10:00
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  Kinshasa
                </div>
              </div>
              <button className="text-slate-800 hover:text-amber-600 font-medium tracking-wide transition-colors border-b border-slate-800 hover:border-amber-600">
                Plus d'informations
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8466665/pexels-photo-8466665.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Service de Noël"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-8 mb-20">
          {events.slice(1).map((event) => (
            <div key={event.id} className="group border border-gray-100 p-8 hover:border-amber-600 transition-colors duration-300">
              <div className="grid lg:grid-cols-4 gap-8 items-center">
                <div className="lg:col-span-3">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-xs text-amber-600 font-medium tracking-widest uppercase">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button className="text-slate-600 hover:text-amber-600 font-medium tracking-wide transition-colors border-b border-transparent hover:border-amber-600">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-16 bg-slate-50 -mx-6 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-light text-slate-800 mb-6">
              Restez informé de nos événements
            </h2>
            <p className="text-slate-600 font-light mb-8">
              Recevez les dernières informations sur nos activités et événements spéciaux.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-gray-200 focus:border-amber-600 focus:outline-none"
              />
              <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 font-medium transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;