import React, { useState } from 'react';
import { Calendar, User, Search, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'enseignement', name: 'Enseignement' },
    { id: 'temoignage', name: 'Témoignage' },
    { id: 'meditation', name: 'Méditation' }
  ];

  const articles = [
    {
      id: 1,
      title: "La Patience dans l'Épreuve",
      category: "enseignement",
      author: "Frère Paul André",
      date: "12 Décembre 2024",
      excerpt: "Comment maintenir notre foi et notre espérance lorsque nous traversons des moments difficiles ?",
      featured: true
    },
    {
      id: 2,
      title: "Témoignage : Guérison Miraculeuse",
      category: "temoignage",
      author: "Sœur Marie-Claire",
      date: "8 Décembre 2024",
      excerpt: "Le témoignage poignant d'une sœur qui a vécu la puissance de Dieu dans sa maladie."
    },
    {
      id: 3,
      title: "Méditation sur Psaume 23",
      category: "meditation",
      author: "Frère Paul André",
      date: "5 Décembre 2024",
      excerpt: "Une méditation profonde sur ce psaume bien-aimé qui nous révèle Dieu comme notre berger."
    },
    {
      id: 4,
      title: "L'Importance de la Sanctification",
      category: "enseignement",
      author: "Frère Paul André",
      date: "28 Novembre 2024",
      excerpt: "Un enseignement approfondi sur l'appel à la sainteté et comment vivre une vie consacrée."
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find(article => article.featured);
  const otherArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-4">
            Réflexions
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
            Blog Spirituel
          </h1>
          <div className="w-16 h-px bg-amber-600 mx-auto"></div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-20 p-12 bg-slate-50">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-4">
                  Article à la une
                </p>
                <h2 className="text-3xl font-light text-slate-800 mb-6">{featuredArticle.title}</h2>
                <p className="text-slate-600 font-light leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center space-x-8 text-sm text-slate-500 mb-8">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    {featuredArticle.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {featuredArticle.date}
                  </div>
                </div>
                <button className="group text-slate-800 hover:text-amber-600 font-medium tracking-wide transition-colors flex items-center">
                  Lire l'article
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8466665/pexels-photo-8466665.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt={featuredArticle.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-12 p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 focus:border-amber-600 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-3 text-sm font-medium tracking-wide transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-600 hover:text-amber-600 border border-gray-200 hover:border-amber-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="space-y-8 mb-20">
          {otherArticles.map((article) => (
            <div key={article.id} className="group border border-gray-100 p-8 hover:border-amber-600 transition-colors duration-300">
              <div className="grid lg:grid-cols-4 gap-8 items-center">
                <div className="lg:col-span-3">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-xs text-amber-600 font-medium tracking-widest uppercase">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-slate-500">
                    <div className="flex items-center">
                      <User size={14} className="mr-2" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {article.date}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button className="group text-slate-600 hover:text-amber-600 font-medium tracking-wide transition-colors flex items-center">
                    Lire
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
              Restez connecté
            </h2>
            <p className="text-slate-600 font-light mb-8">
              Recevez nos derniers articles et réflexions spirituelles.
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

export default Blog;