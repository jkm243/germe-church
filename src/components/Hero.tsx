import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-royal-blue-600 text-sm font-medium tracking-widest uppercase mb-4">
                Assemblée des Frères Chrétiens
              </p>
              <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-6 leading-tight">
                Amis du
                <span className="block text-vivid-green-600 font-normal">Germe</span>
              </h1>
            </div>
            
            <div className="mb-12">
              <blockquote className="text-xl md:text-2xl text-slate-600 font-light italic leading-relaxed mb-4">
                "Les mensonges ne régnera pas toujours"
              </blockquote>
              <cite className="text-vivid-green-600 text-sm font-medium tracking-wide">
                — Slogan de l'AFC
              </cite>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 flex items-center">
                Découvrir notre assemblée
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-slate-600 hover:text-vivid-green-600 px-8 py-4 text-sm font-medium tracking-wide transition-colors border-b border-transparent hover:border-vivid-green-600">
                Devenir disciple
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 bg-vivid-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-4">Communauté Mondiale</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Une famille spirituelle présente sur plusieurs continents, unie par la foi en Jésus-Christ.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 bg-vivid-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-4">Enseignement Biblique</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Des prédications profondes et authentiques basées sur la Parole de Dieu.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 bg-vivid-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-4">Croissance Spirituelle</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Un accompagnement personnalisé pour grandir dans la foi et la connaissance de Dieu.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed mb-8">
            "Nous sommes appelés à être des témoins authentiques de l'amour du Christ, 
            portant la lumière de l'évangile dans un monde qui a soif de vérité."
          </blockquote>
          <cite className="text-vivid-green-600 font-medium tracking-wide">
            Frère Paul André
          </cite>
        </div>
      </div>
    </div>
  );
};

export default Hero;