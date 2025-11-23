import React from 'react';
import { Heart, Users, Globe, BookOpen, Star, Shield } from 'lucide-react';
import ImageGallery from './ImageGallery';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 fade-in">
          <p className="text-vivid-green-600 text-sm font-medium tracking-widest uppercase mb-4">
            Notre Histoire
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
            Qui Sommes-Nous
          </h1>
          <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="slide-in-left">
            <div className="space-y-6 text-slate-600 font-light leading-relaxed">
              <p className="text-lg">
                L'assemblée des Frères Chrétiens - Les Amis du Germe est une Association Sans But Lucratif ayant pour but de répandre et de restaurer la vérité sur l'évangile du Christ contenu dans la Bible.
              </p>
              <div className="bg-vivid-green-50 p-6 rounded-2xl border-l-4 border-vivid-green-600">
                <p className="font-medium text-vivid-green-800">
                  <strong>À l'heure du Germe est une école ouverte à tous.    </strong>
                  Chacun est appelé à apprendre et grandir dans la connaissance du Christ, car la sagesse est accessible à tous ceux qui la cherchent avec un cœur ouvert.  
« Mon peuple est détruit faute de connaissance. » (Osée 4:6)
                </p>
                <p className="mt-2">
                  
                </p>
              </div>
              <p>
                <strong>À l'heure du Germe est un nouveau son de cloche dans le monde Chrétien.</strong>
Ce temps invite les peuples de Dieu à réfléchir sincèrement sur leur foi et leur engagement chrétien, à approfondir la compréhension de la Parole divine.  
« Examinez toutes choses; retenez ce qui est bon. » (1 Thessaloniciens 5:21)
              </p>
              <p>
                <strong>À l'heure du Germe : le mensonge ne règnera pas toujours.</strong>
              Malgré la présence de faux enseignements, la vérité divine s’élèvera et triomphera, guidant les croyants vers la justice.  
« Plusieurs faux prophètes s’élèveront, et ils séduiront beaucoup de gens. » (Matthieu 24:11)
              </p>
              <p>
                <strong>À l'heure du Germe : Heure de la délivrance.</strong>
               La parole véritable libère de l’ignorance et des mensonges, apportant lumière et salut à ceux qui s’y abandonnent pleinement.  
« Vous connaîtrez la vérité, et la vérité vous affranchira. » (Jean 8:32)

              </p>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-vivid-green-50 to-amber-50 border border-vivid-green-200 rounded-2xl">
              <p className="text-vivid-green-800 font-medium text-lg flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Devenez disciple : Portes ouvertes à tous
              </p>
            </div>
          </div>
          <div className="relative slide-in-right">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2305084/pexels-photo-2305084.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Histoire de l'assemblée"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-vivid-green-600 rounded-full flex items-center justify-center shadow-lg floating">
              <Globe className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="py-20 border-t border-gray-100">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative slide-in-left">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/8466809/pexels-photo-8466809.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Frère Paul André"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-600 rounded-full flex items-center justify-center shadow-lg floating animation-delay-400">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="slide-in-right">
              <h2 className="text-3xl font-light text-slate-800 mb-8 font-serif">
                Frère Paul André
              </h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  Le frère Paul André est l'initiateur de la véritable doctrine du Christ qui rassemble tous les enfants 
                  dispersés du germe enseignant la parole de Dieu révélée par JC. Comme un semeur envoyé dans la 
                  moisson du Seigneur, il proclame la Parole qui ne passe point, afin que ceux qui étaient éloignés 
                  entendent de nouveau la voix du Bon Berger.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-amber-600">
                  <p className="italic">
                    Sa mission est semblable à celle annoncée par l'Écriture : « Je les rassemblerai de tous les pays où je les 
                    ai dispersés » (Jérémie 32:37). Il exhorte chacun à revenir à la semence incorruptible, à ce germe divin 
                    qui est Jésus-Christ, « le chemin, la vérité et la vie » (Jean 14:6).
                  </p>
                </div>
                <p>
                  Tel un gardien de la foi, il veille à ce que le troupeau du Seigneur ne soit pas emporté par des 
                  vents de doctrine, mais demeure ferme sur le fondement posé une fois pour toutes par les apôtres 
                  et les prophètes, ayant Jésus-Christ pour pierre angulaire (Éphésiens 2:20).
                </p>
                <p>
                  Par sa fidélité, le frère Paul André témoigne que le dessein de Dieu est d'unir ses enfants dans 
                  une même alliance, accomplissant la prière du Christ : « Père, qu'ils soient un, comme nous 
                  sommes un » (Jean 17:21).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Beliefs */}
        <div className="py-20 bg-gradient-to-br from-slate-50 to-vivid-green-50 -mx-6 px-6 rounded-3xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl font-light text-slate-800 mb-8 font-serif">
                Nos Croyances Fondamentales
              </h2>
              <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "La Sainte Bible",
                  description: "Nous croyons que la Sainte Écriture est la Parole inspirée de Dieu, parfaite et immuable, révélant la volonté divine pour l'humanité.",
                  verse: "2 Timothée 3:16",
                  icon: BookOpen,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Jésus-Christ",
                  description: "Nous croyons que Jésus-Christ est le Fils unique de Dieu, la Parole faite chair, morte et ressuscité pour notre salut.",
                  verse: "Jean 1:14",
                  icon: Heart,
                  color: "from-red-500 to-red-600"
                },
                {
                  title: "Le Germe de Dieu",
                  description: "Nous croyons que Jésus-Christ est le Germe annoncé par les prophètes, par qui Dieu rassemble ses enfants dispersés et établit son règne éternel.",
                  verse: "Zacharie 3:8",
                  icon: Star,
                  color: "from-vivid-green-500 to-vivid-green-600"
                },
                {
                  title: "La Vraie Doctrine de Christ",
                  description: "Nous croyons que la véritable doctrine est celle transmise par Jésus-Christ et les apôtres, fondement unique de la foi, qui garde l'Église dans la vérité.",
                  verse: "2 Jean 1:9",
                  icon: Shield,
                  color: "from-amber-500 to-amber-600"
                },
                {
                  title: "Le Saint-Esprit",
                  description: "Nous croyons que le Saint-Esprit est donné pour conduire le croyant dans toute la vérité",
                  verse: "Jean 16:13",
                  icon: Globe,
                  color: "from-purple-500 to-purple-600"
                },
                {
                  title: "L'Église",
                  description: "Nous croyons que l'Église est l'assemblée des rachetés, le corps de Christ, appelée à marcher dans l'unité et à annoncer la vérité jusqu'aux extrémités de la terre.",
                  verse: "1 Corinthiens 12:27",
                  icon: Users,
                  color: "from-teal-500 to-teal-600"
                }
              ].map((belief, index) => {
                const IconComponent = belief.icon;
                return (
                  <div key={index} className={`text-center scale-in animation-delay-${index * 200}`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${belief.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-800 mb-4">{belief.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed mb-4">{belief.description}</p>
                    <p className="text-vivid-green-600 text-sm font-medium">({belief.verse})</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="py-20 border-t border-gray-100">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-light text-slate-800 mb-8 font-serif">
              Galerie de Photos
            </h2>
            <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
          </div>
          <ImageGallery
            images={[
              {
                url: "https://images.pexels.com/photos/8466809/pexels-photo-8466809.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Assemblée en prière",
                caption: "Nos frères et sœurs réunis dans la prière, cherchant ensemble la face de Dieu."
              },
              {
                url: "https://images.pexels.com/photos/8815189/pexels-photo-8815189.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Moment de louange",
                caption: "La louange et l'adoration occupent une place centrale dans nos rassemblements."
              },
              {
                url: "https://images.pexels.com/photos/8815110/pexels-photo-8815110.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Étude biblique",
                caption: "L'étude approfondie de la Parole de Dieu pour grandir dans la connaissance de la vérité."
              },
              {
                url: "https://images.pexels.com/photos/8815027/pexels-photo-8815027.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Communion fraternelle",
                caption: "La communion fraternelle renforce les liens entre les membres de notre assemblée."
              },
              {
                url: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Jeunes en formation",
                caption: "Formation des jeunes disciples dans la doctrine du Christ."
              },
              {
                url: "https://images.pexels.com/photos/6647024/pexels-photo-6647024.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Service communautaire",
                caption: "Notre engagement dans le service et le soutien à la communauté."
              },
              {
                url: "https://images.pexels.com/photos/8815094/pexels-photo-8815094.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Baptême",
                caption: "Célébration du baptême, symbole de la nouvelle vie en Christ."
              },
              {
                url: "https://images.pexels.com/photos/7699399/pexels-photo-7699399.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Réunion des frères",
                caption: "Les frères se réunissent régulièrement pour l'enseignement et le partage de la Parole."
              }
            ]}
          />
        </div>

        {/* Stats */}
        <div className="py-20 border-t border-gray-100">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="scale-in animation-delay-200">
              <div className="text-5xl font-light gradient-text mb-4">8</div>
              <p className="text-slate-600 font-light tracking-wide">Pays d'implantation</p>
            </div>
            <div className="scale-in animation-delay-400">
              <div className="text-5xl font-light gradient-text mb-4">15+</div>
              <p className="text-slate-600 font-light tracking-wide">Assemblées locales</p>
            </div>
            <div className="scale-in animation-delay-600">
              <div className="text-5xl font-light gradient-text mb-4">500+</div>
              <p className="text-slate-600 font-light tracking-wide">Frères et sœurs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;