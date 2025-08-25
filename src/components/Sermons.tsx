import React, { useState } from 'react';
import { Play, Calendar, Clock, Search } from 'lucide-react';

const Sermons: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const series = [
    { id: 'all', name: 'Toutes les séries' },
    { id: 'fondements', name: 'Les Fondements de la Foi' },
    { id: 'vie-chretienne', name: 'La Vie Chrétienne' },
    { id: 'propheties', name: 'Prophéties Bibliques' }
  ];

  const sermons = [
    {
      id: 1,
      title: "Le Germe de Justice",
      series: "fondements",
      date: "15 Décembre 2024",
      duration: "45 min",
      description: "Une méditation profonde sur Zacharie 3:8 et la promesse du Germe qui vient.",
      preacher: "Frère Paul André"
    },
    {
      id: 2,
      title: "Marcher dans la Sainteté",
      series: "vie-chretienne",
      date: "8 Décembre 2024",
      duration: "52 min",
      description: "L'appel à la sanctification et à une vie consacrée entièrement à Dieu.",
      preacher: "Frère Paul André"
    },
    {
      id: 3,
      title: "Les Temps de la Fin",
      series: "propheties",
      date: "1 Décembre 2024",
      duration: "48 min",
      description: "Étude des signes prophétiques et de la préparation de l'Épouse du Christ.",
      preacher: "Frère Paul André"
    },
    {
      id: 4,
      title: "L'Amour Fraternel",
      series: "fondements",
      date: "24 Novembre 2024",
      duration: "41 min",
      description: "L'importance de l'unité et de l'amour véritable entre les frères et sœurs.",
      preacher: "Frère Paul André"
    }
  ];

  const filteredSermons = sermons.filter(sermon => {
    const matchesSeries = selectedSeries === 'all' || sermon.series === selectedSeries;
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSeries && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-4">
            Enseignements
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
            Prédications
          </h1>
          <div className="w-16 h-px bg-amber-600 mx-auto"></div>
        </div>

        {/* Featured Sermon */}
        <div className="mb-20 p-12 bg-slate-50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-4">
                Dernière prédication
              </p>
              <h2 className="text-3xl font-light text-slate-800 mb-6">Le Germe de Justice</h2>
              <p className="text-slate-600 font-light leading-relaxed mb-8">
                Une méditation profonde sur Zacharie 3:8 et la promesse du Germe qui vient. 
                Découvrez la richesse de cette prophétie messianique.
              </p>
              <div className="flex items-center space-x-8 text-sm text-slate-500 mb-8">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  15 Décembre 2024
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  45 min
                </div>
              </div>
              <button className="group bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 flex items-center">
                <Play size={16} className="mr-2" />
                Écouter maintenant
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8466665/pexels-photo-8466665.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Dernière prédication"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher une prédication..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 focus:border-amber-600 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="px-4 py-3 border border-gray-200 focus:border-amber-600 focus:outline-none transition-colors"
            >
              {series.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Sermons List */}
        <div className="space-y-8">
          {filteredSermons.map((sermon) => (
            <div key={sermon.id} className="group border border-gray-100 p-8 hover:border-amber-600 transition-colors duration-300">
              <div className="grid lg:grid-cols-4 gap-8 items-center">
                <div className="lg:col-span-3">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-xs text-amber-600 font-medium tracking-widest uppercase">
                      {series.find(s => s.id === sermon.series)?.name}
                    </span>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <span className="text-xs text-slate-500">{sermon.preacher}</span>
                  </div>
                  <h3 className="text-xl font-medium text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    {sermon.description}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {sermon.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-2" />
                      {sermon.duration}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button className="text-slate-600 hover:text-amber-600 p-3 border border-gray-200 hover:border-amber-600 transition-colors duration-300">
                    <Play size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 py-16 bg-slate-50 -mx-6 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-light text-slate-800 mb-6">
              Recevez nos dernières prédications
            </h2>
            <p className="text-slate-600 font-light mb-8">
              Abonnez-vous pour être notifié de nos nouveaux enseignements.
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

export default Sermons;