import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Qui sommes-nous', href: '#qui-sommes-nous' },
    { name: 'Ministères', href: '#ministeres' },
    { name: 'Prédications', href: '#predications' },
    { name: 'Événements', href: '#evenements' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const locations = [
    { city: 'Kinshasa, RDC', phone: '+243 81 234 5678' },
    { city: 'Paris, France', phone: '+33 1 23 45 67 89' },
    { city: 'New York, USA', phone: '+1 212 123 4567' },
    { city: 'Genève, Suisse', phone: '+41 22 123 4567' }
  ];

  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-xl font-light text-white mb-2">AFC - Amis du Germe</h3>
              <p className="text-amber-400 text-sm font-medium tracking-widest uppercase">
                Assemblée des Frères Chrétiens
              </p>
            </div>
            <p className="text-slate-300 font-light leading-relaxed mb-8">
              Une assemblée chrétienne mondiale unie par la foi en Jésus-Christ, 
              répandant l'évangile et édifiant les saints selon les enseignements bibliques.
            </p>
            <div className="bg-slate-700 p-6 mb-8">
              <blockquote className="text-amber-400 font-light italic mb-2">
                "Les mensonges ne régnera pas toujours"
              </blockquote>
              <cite className="text-slate-400 text-sm">— Slogan de l'AFC</cite>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Locations */}
          <div>
            <h4 className="text-lg font-medium text-white mb-8">Contact</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-white font-medium text-sm">Siège Principal</p>
                  <p className="text-slate-300 text-sm">Kinshasa, RDC</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400 flex-shrink-0" size={16} />
                <a href="tel:+24381234567" className="text-slate-300 hover:text-amber-400 transition-colors text-sm">
                  +243 81 234 5678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-400 flex-shrink-0" size={16} />
                <a href="mailto:contact@amisdugerme.org" className="text-slate-300 hover:text-amber-400 transition-colors text-sm">
                  contact@amisdugerme.org
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-white mb-4">Autres Implantations</h5>
              <div className="space-y-2">
                {locations.slice(1, 3).map((location, index) => (
                  <div key={index} className="text-xs text-slate-400">
                    <span className="font-medium">{location.city}</span>
                    <br />
                    <span>{location.phone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Hours */}
      <div className="border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h5 className="font-medium text-white mb-2">Dimanche</h5>
              <p className="text-slate-400 text-sm">Culte - 09h00</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-2">Mercredi</h5>
              <p className="text-slate-400 text-sm">Culte - 16h00</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-2">Vendredi</h5>
              <p className="text-slate-400 text-sm">Réflexion - 20h00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Assemblée des Frères Chrétiens - Amis du Germe
            </div>
            <div className="text-slate-400 text-sm">
              Fait avec amour pour la gloire de Dieu
            </div>
          </div>
        </div>
      </div>

      {/* Biblical Verse Bottom */}
      <div className="bg-amber-600 text-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center">
          <p className="text-sm font-medium">
            "Allez, faites de toutes les nations des disciples" — Matthieu 28:19
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;