import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Heart, Users, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const backgroundImages = [
    'https://images.pexels.com/photos/2774566/pexels-photo-2774566.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/2305084/pexels-photo-2305084.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/29756525/pexels-photo-29756525.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating absolute top-20 left-10 w-4 h-4 bg-vivid-green-400 rounded-full opacity-20"></div>
        <div className="floating absolute top-40 right-20 w-6 h-6 bg-amber-400 rounded-full opacity-30 animation-delay-400"></div>
        <div className="floating absolute bottom-40 left-20 w-3 h-3 bg-vivid-green-300 rounded-full opacity-25 animation-delay-800"></div>
        <div className="floating absolute bottom-60 right-10 w-5 h-5 bg-amber-300 rounded-full opacity-20 animation-delay-200"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="mb-8 fade-in">
              <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full text-white text-sm font-medium tracking-widest uppercase">
                <Globe className="w-4 h-4 mr-2" />
                B.D.N - Assemblée des Frères Chrétiens
              </div>
            </div>
            
            {/* Main Title */}
            <div className="mb-8 slide-up animation-delay-200">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
                Les Amis du
                <span className="block gradient-text font-normal font-serif">Germe</span>
              </h1>
            </div>
            
            {/* Quote */}
            <div className="mb-12 slide-up animation-delay-400">
              <div className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto">
                <blockquote className="text-xl md:text-2xl text-white font-light italic leading-relaxed mb-4">
                  "Car voici, je ferai venir mon serviteur, le Germe."
                </blockquote>
                <cite className="text-vivid-green-400 text-sm font-medium tracking-wide">
                  — Zacharie 3:8
                </cite>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mb-16 slide-up animation-delay-600">
              <div className="glass-effect p-6 rounded-2xl max-w-2xl mx-auto mb-8">
                <p className="text-white text-lg font-medium">
                  Devenez disciple : Portes ouvertes à tous
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group bg-vivid-green-600 hover:bg-vivid-green-700 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 flex items-center pulse-glow">
                  <Heart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Découvrir notre assemblée
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group glass-effect text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 flex items-center">
                  <Play className="mr-2 w-4 h-4" />
                  Regarder nos prédications
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="slide-up animation-delay-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="glass-effect p-6 rounded-2xl text-center">
                  <div className="text-3xl font-light text-vivid-green-400 mb-2">8</div>
                  <p className="text-white text-sm tracking-wide">Pays d'implantation</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl text-center">
                  <div className="text-3xl font-light text-vivid-green-400 mb-2">15+</div>
                  <p className="text-white text-sm tracking-wide">Assemblées locales</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl text-center">
                  <div className="text-3xl font-light text-vivid-green-400 mb-2">500+</div>
                  <p className="text-white text-sm tracking-wide">Frères et sœurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in animation-delay-800">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-transparent to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center scale-in animation-delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-vivid-green-500 to-vivid-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-4">Communauté Mondiale</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Une famille spirituelle présente sur plusieurs continents, unie par la foi en Jésus-Christ.
              </p>
            </div>

            <div className="text-center scale-in animation-delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-4">Enseignement Biblique</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Des prédications profondes et authentiques basées sur la Parole de Dieu.
              </p>
            </div>

            <div className="text-center scale-in animation-delay-600">
              <div className="w-20 h-20 bg-gradient-to-br from-vivid-green-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-4">Croissance Spirituelle</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Un accompagnement personnalisé pour grandir dans la foi et la connaissance de Dieu.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="slide-up">
            <blockquote className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed mb-8 font-serif">
              "Nous sommes appelés à être des témoins authentiques de l'amour du Christ, 
              portant la lumière de l'évangile dans un monde qui a soif de vérité."
            </blockquote>
            <cite className="text-vivid-green-600 font-medium tracking-wide">
              Frère Paul André
            </cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;