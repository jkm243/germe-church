import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
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
          <div>
            <h2 className="text-2xl font-light text-slate-800 mb-8">
              Une assemblée née d'une vision divine
            </h2>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed">
              <p>
                L'Assemblée des Frères Chrétiens - Amis du Germe est née d'une vision divine 
                de restauration et de réveil spirituel. Fondée sur les principes bibliques 
                solides, notre assemblée s'est développée pour devenir une communauté 
                chrétienne mondiale.
              </p>
              <p>
                Depuis nos humbles débuts, nous avons grandi en nombre et en maturité 
                spirituelle, établissant des communautés sur plusieurs continents tout 
                en maintenant l'unité dans la foi et l'amour fraternel.
              </p>
              <p>
                Notre nom "Amis du Germe" fait référence à la prophétie de Zacharie 3:8, 
                où Dieu annonce la venue de son serviteur, le Germe - une référence 
                messianique à Jésus-Christ.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/8466757/pexels-photo-8466757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Histoire de l'assemblée"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Leadership */}
        <div className="py-20 border-t border-gray-100">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8466809/pexels-photo-8466809.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Frère Paul André"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-light text-slate-800 mb-8">
                Le Frère Paul André
              </h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  Serviteur de Dieu appelé dès son jeune âge, le Frère Paul André dirige 
                  cette assemblée avec sagesse et dans la crainte de l'Éternel. Son ministère 
                  est marqué par un enseignement biblique profond et une vie d'exemple.
                </p>
                <p>
                  Sous sa conduite spirituelle, l'assemblée a grandi et s'est établie dans 
                  plusieurs pays, portant le message de l'évangile avec fidélité et authenticité.
                </p>
                <p>
                  Son approche pastorale allie fermeté doctrinale et amour paternel, 
                  accompagnant chaque membre dans sa croissance spirituelle personnelle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Beliefs */}
        <div className="py-20 bg-slate-50 -mx-6 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-slate-800 mb-8">
                Nos Croyances Fondamentales
              </h2>
              <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "La Sainte Bible",
                  description: "Nous croyons en l'autorité suprême et l'inspiration divine des Écritures saintes."
                },
                {
                  title: "Jésus-Christ",
                  description: "Nous confessons que Jésus est le Fils unique de Dieu, notre Sauveur et Seigneur."
                },
                {
                  title: "Le Saint-Esprit",
                  description: "Nous croyons au ministère du Saint-Esprit dans la vie du croyant et de l'Église."
                },
                {
                  title: "Le Salut",
                  description: "Le salut est un don gratuit de Dieu obtenu par la foi en Jésus-Christ."
                },
                {
                  title: "La Sanctification",
                  description: "Nous prônons une vie de sainteté et de consécration à Dieu."
                },
                {
                  title: "L'Église",
                  description: "L'Église est le corps du Christ composé de tous les vrais croyants."
                }
              ].map((belief, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-vivid-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-medium text-slate-800 mb-4">{belief.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{belief.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="py-20">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-light text-vivid-green-600 mb-2">8</div>
              <p className="text-slate-600 font-light tracking-wide">Pays d'implantation</p>
            </div>
            <div>
              <div className="text-4xl font-light text-vivid-green-600 mb-2">50+</div>
              <p className="text-slate-600 font-light tracking-wide">Assemblées locales</p>
            </div>
            <div>
              <div className="text-4xl font-light text-vivid-green-600 mb-2">1000+</div>
              <p className="text-slate-600 font-light tracking-wide">Frères et sœurs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;