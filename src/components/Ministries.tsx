import React from 'react';

const Ministries: React.FC = () => {
  const ministries = [
    {
      title: "École du Dimanche",
      description: "Formation biblique pour tous les âges avec des programmes adaptés à chaque tranche d'âge.",
      schedule: "Dimanche 9h30"
    },
    {
      title: "Groupes de Maison",
      description: "Rencontres hebdomadaires dans les foyers pour l'étude biblique, la prière et la communion fraternelle.",
      schedule: "Mercredi 19h"
    },
    {
      title: "Ministère de Louange",
      description: "Chœur et orchestre qui dirigent la louange et l'adoration pendant les services.",
      schedule: "Répétition Samedi 16h"
    },
    {
      title: "Ministère des Enfants",
      description: "Programme spécialisé pour l'éveil spirituel et l'éducation chrétienne des enfants.",
      schedule: "Dimanche 10h"
    },
    {
      title: "Ministère des Jeunes",
      description: "Activités, formations et événements pour accompagner les jeunes dans leur croissance spirituelle.",
      schedule: "Samedi 18h"
    },
    {
      title: "Ministère des Femmes",
      description: "Rencontres mensuelles pour l'édification, la prière et l'entraide entre sœurs.",
      schedule: "1er Samedi du mois 14h"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-4">
            Nos Programmes
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
            Ministères
          </h1>
          <div className="w-16 h-px bg-amber-600 mx-auto"></div>
        </div>

        {/* Ministries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {ministries.map((ministry, index) => (
            <div key={index} className="group">
              <div className="border border-gray-100 p-8 h-full hover:border-amber-600 transition-colors duration-300">
                <div className="w-8 h-8 bg-amber-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">{ministry.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">{ministry.description}</p>
                <div className="text-sm text-amber-600 font-medium tracking-wide">{ministry.schedule}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Formation Section */}
        <div className="py-20 bg-slate-50 -mx-6 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl font-light text-slate-800 mb-8">
                  Formation Biblique Approfondie
                </h2>
                <div className="space-y-6 text-slate-600 font-light leading-relaxed mb-8">
                  <p>
                    Nous offrons des programmes de formation biblique pour équiper les saints 
                    et former de futurs serviteurs de Dieu.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-amber-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Théologie biblique systématique
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-amber-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Homilétique et prédication
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-amber-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Histoire de l'Église
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-amber-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Ministère pastoral
                    </li>
                  </ul>
                </div>
                <button className="text-slate-800 hover:text-amber-600 font-medium tracking-wide transition-colors border-b border-slate-800 hover:border-amber-600">
                  En savoir plus
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8466737/pexels-photo-8466737.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Formation biblique"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-800 mb-8">
              Horaires des Services
            </h2>
            <div className="w-16 h-px bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-slate-800 mb-2">Dimanche</h3>
              <p className="text-2xl font-light text-amber-600 mb-4">09h00</p>
              <p className="text-slate-600 font-light">Culte dominical</p>
            </div>
            <div className="text-center p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-slate-800 mb-2">Mercredi</h3>
              <p className="text-2xl font-light text-amber-600 mb-4">16h00</p>
              <p className="text-slate-600 font-light">Culte de mercredi</p>
            </div>
            <div className="text-center p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-slate-800 mb-2">Vendredi</h3>
              <p className="text-2xl font-light text-amber-600 mb-4">20h00</p>
              <p className="text-slate-600 font-light">Réflexion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministries;