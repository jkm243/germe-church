import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'qui-sommes-nous', label: 'Qui sommes-nous' },
    { id: 'ministeres', label: 'Ministères' },
    { id: 'predications', label: 'Prédications' },
    { id: 'evenements', label: 'Événements' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveSection('accueil')}>
            <div className="text-left">
              <h1 className="text-xl font-light text-slate-800 tracking-wide">AFC</h1>
              <p className="text-xs text-vivid-green-600 font-medium tracking-widest uppercase">Amis du Germe</p>
            </div>
          </div>

          <nav className="hidden lg:block">
            <div className="flex items-center space-x-12">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-all duration-300 hover:text-vivid-green-600 relative ${
                    activeSection === item.id
                      ? 'text-vivid-green-600'
                      : 'text-slate-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-vivid-green-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </nav>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-vivid-green-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="space-y-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left text-base font-light tracking-wide transition-colors ${
                    activeSection === item.id
                      ? 'text-vivid-green-600'
                      : 'text-slate-600 hover:text-vivid-green-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;