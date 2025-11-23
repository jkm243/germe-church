import React from 'react';
import { Calendar, Clock, Radio, Youtube, Moon, Sun, Heart, Users, Globe } from 'lucide-react';

const Ministries: React.FC = () => {
  const programs = [
    {
      title: "Culte du Dimanche",
      description: "Un temps de communion fraternelle et d'édification autour de la Parole de Dieu.",
      schedule: "Dimanche 9h00",
      icon: Sun,
      color: "from-amber-500 to-orange-500",
      image: "https://images.pexels.com/photos/2774566/pexels-photo-2774566.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Culte du Mercredi",
      description: "Un moment de révision et d’approfondissement des enseignements du dimanche, suivi d’un temps de questions-réponses pour éclaircir ce qui n’a pas été compris.",
      schedule: "Mercredi 16h00",
      icon: Heart,
      color: "from-vivid-green-500 to-teal-500",
      image: "https://images.pexels.com/photos/2305084/pexels-photo-2305084.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Émission « À l'heure du Germe »",
      description: "Programme de partage biblique et de prédication en ligne. Diffusion sur la radio RTVS1, Twitter et Telegram.",
      schedule: "Jeudi 20h00 (Kinshasa)",
      icon: Radio,
      color: "from-blue-500 to-indigo-500",
      image: "https://images.pexels.com/photos/7689427/pexels-photo-7689427.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Nuit de Réflexion",
      description: "Un moment d'exhortation, de réflexion, et de méditation pour fortifier la foi en Jésus-Christ.",
      schedule: "Vendredi 20h00",
      icon: Moon,
      color: "from-purple-500 to-pink-500",
      image: "https://images.pexels.com/photos/8466737/pexels-photo-8466737.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Émission YouTube",
      description: "Programme de partage biblique et de prédication en ligne diffusé sur YouTube pour atteindre les fidèles du monde entier.",
      schedule: "Samedi 18h00 GMT",
      icon: Youtube,
      color: "from-red-500 to-pink-500",
      image: "https://images.pexels.com/photos/33440446/pexels-photo-33440446.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 fade-in">
          <p className="text-vivid-green-600 text-sm font-medium tracking-widest uppercase mb-4">
            Découvrez nos rendez-vous hebdomadaires
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8 font-serif">
            Nos Programmes
          </h1>
          <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={index} className={`group scale-in animation-delay-${index * 200}`}>
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-vivid-green-200">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-medium text-slate-800 mb-4 group-hover:text-vivid-green-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <div className="flex items-center text-vivid-green-600 font-medium tracking-wide">
                      <Clock className="w-4 h-4 mr-2" />
                      {program.schedule}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vie de l'Église */}
        <div className="py-20 bg-gradient-to-br from-slate-50 to-vivid-green-50 -mx-6 px-6 rounded-3xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl font-light text-slate-800 mb-8 font-serif">
                Vie de l'Église : « À l'heure du Germe »
              </h2>
              <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="slide-in-left">
                  <div className="relative overflow-hidden rounded-3xl shadow-xl">
                    <img 
                      src="https://images.pexels.com/photos/8466737/pexels-photo-8466737.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                      alt="Vie de l'église"
                      className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
                
                <div className="slide-in-right">
                  <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-vivid-green-600">
                      <h3 className="text-xl font-medium text-vivid-green-800 mb-4 flex items-center">
                        <Heart className="w-5 h-5 mr-2" />
                        Bienvenue dans la famille du Germe !
                      </h3>
                      <p>
                        Notre assemblée n'est pas seulement un lieu de culte, mais une <strong>communauté vivante</strong> où chacun 
                        est appelé à revenir à la semence incorruptible, Jésus-Christ, le véritable Germe annoncé par les 
                        prophètes.
                      </p>
                    </div>
                    
                    <p>
                      Nos rencontres sont des temps de prière, de louange, d'exhortation, de méditations et des 
                      réflexions mais aussi des occasions de redécouvrir la vérité simple et pure de l'Évangile.
                    </p>
                    
                    <p>
                      Que vous veniez pour la première fois ou que vous soyez déjà enraciné dans la foi, sachez que le 
                      Seigneur vous appelle à revenir à cette semence, à ce germe divin qui est Jésus-Christ, le 
                      chemin, la vérité et la vie.
                    </p>
                    
                    <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-600">
                      <p className="font-medium text-amber-800">
                        Vous êtes les bienvenus pour partager avec nous cette heure de délivrance, où le Seigneur 
                        rassemble ses enfants et renouvelle leur marche avec Lui.
                      </p>
                    </div>
                    
                    <blockquote className="text-vivid-green-600 font-medium text-lg italic text-center p-4 bg-white rounded-xl shadow-sm">
                      "Je les rassemblerai de tous les pays où je les ai dispersés"
                      <cite className="block text-slate-500 text-sm mt-2 not-italic">— Jérémie 32:37</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="py-20">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-light text-slate-800 mb-8 font-serif">
              Horaires des Cultes
            </h2>
            <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-vivid-green-600 to-teal-600 text-white">
                  <tr>
                    <th className="text-left py-6 px-8 text-lg font-medium">Jour</th>
                    <th className="text-left py-6 px-8 text-lg font-medium">Événement</th>
                    <th className="text-left py-6 px-8 text-lg font-medium">Horaire</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { day: "Dimanche", event: "Culte du dimanche", time: "9h00", icon: Sun },
                    { day: "Mercredi", event: "Culte du mercredi", time: "16h00", icon: Heart },
                    { day: "Jeudi", event: "Émission radio (RTVSI)", time: "20h (Kinshasa)", icon: Radio },
                    { day: "Vendredi", event: "Nuit de réflexion", time: "20h00", icon: Moon },
                    { day: "Samedi", event: "Émission YouTube", time: "18h GMT", icon: Youtube }
                  ].map((row, index) => {
                    const IconComponent = row.icon;
                    return (
                      <tr key={index} className="border-b border-gray-100 hover:bg-slate-50 transition-colors">
                        <td className="py-6 px-8 text-slate-600 font-medium flex items-center">
                          <IconComponent className="w-5 h-5 mr-3 text-vivid-green-600" />
                          {row.day}
                        </td>
                        <td className="py-6 px-8 text-slate-600">{row.event}</td>
                        <td className="py-6 px-8 text-vivid-green-600 font-medium">{row.time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Implantations */}
        <div className="py-20 bg-gradient-to-br from-slate-50 to-amber-50 -mx-6 px-6 rounded-3xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl font-light text-slate-800 mb-8 font-serif">
                Nos Implantations
              </h2>
              <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
            </div>
            
            <div className="mb-12 slide-up">
              <h3 className="text-xl font-medium text-slate-800 mb-8 text-center flex items-center justify-center">
                <Globe className="w-6 h-6 mr-2 text-vivid-green-600" />
                République Démocratique du Congo
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {['Kinshasa (N\'sele, N\'Djili, Kasa-vubu, UPN)', 'Lubumbashi', 'Kolwezi', 'Kipushi', 'Kananga', 'Lufu', 'Kikwit'].map((city, index) => (
                  <div key={index} className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 scale-in animation-delay-${index * 100}`}>
                    <p className="text-slate-600 font-light">{city}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="slide-up animation-delay-400">
              <h3 className="text-xl font-medium text-slate-800 mb-8 text-center flex items-center justify-center">
                <Users className="w-6 h-6 mr-2 text-amber-600" />
                International
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                {['France', 'USA', 'Canada', 'Belgique', 'Australie', 'Afrique du Sud'].map((country, index) => (
                  <div key={index} className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 scale-in animation-delay-${(index + 7) * 100}`}>
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

export default Ministries;