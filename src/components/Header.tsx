import React, { useState } from 'react';
import { Menu, X, Settings, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './Auth/LoginModal';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  showAdminLink?: boolean;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, showAdminLink = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, profile, signOut } = useAuth();

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'qui-sommes-nous', label: 'Qui sommes-nous' },
    { id: 'ministeres', label: 'Ministères' },
    { id: 'predications', label: 'Devenir disciple' },
    { id: 'evenements', label: 'Événements' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleSignOut = async () => {
    await signOut();
    setActiveSection('accueil');
  };
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveSection('accueil')}>
            <img 
              src="/3fbde41f-9389-4f79-911d-477c9098de2b.png" 
              alt="Logo AFC" 
              className="w-12 h-12 mr-4"
            />
            <div className="text-left">
              <h1 className="text-xl font-light text-slate-800 tracking-wide">AFC</h1>
              <p className="text-xs text-amber-600 font-medium tracking-widest uppercase">Amis du Germe</p>
            </div>
          </div>

          <nav className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-all duration-300 hover:text-amber-600 relative ${
                    activeSection === item.id
                      ? 'text-amber-600'
                      : 'text-slate-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full"></div>
                  )}
                </button>
              ))}
              
              {/* User Menu */}
              <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
                {user ? (
                  <div className="flex items-center space-x-4">
                    {showAdminLink && (
                      <button
                        onClick={() => setActiveSection('admin')}
                        className={`flex items-center text-sm font-light tracking-wide transition-all duration-300 hover:text-church-green ${
                          activeSection === 'admin' ? 'text-church-green' : 'text-slate-600'
                        }`}
                      >
                        <Settings size={16} className="mr-2" />
                        Admin
                      </button>
                    )}
                    <div className="flex items-center text-sm text-slate-600">
                      <User size={16} className="mr-2" />
                      <span>{profile?.full_name || profile?.email}</span>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center text-sm text-slate-600 hover:text-red-600 transition-colors"
                    >
                      <LogOut size={16} className="mr-1" />
                      Déconnexion
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="bg-church-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-church-blue/90 transition-colors"
                  >
                    Connexion
                  </button>
                )}
              </div>
            </div>
          </nav>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-amber-600 transition-colors"
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
                      ? 'text-amber-600'
                      : 'text-slate-600 hover:text-amber-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile User Menu */}
              <div className="pt-6 border-t border-gray-200">
                {user ? (
                  <div className="space-y-4">
                    <div className="flex items-center text-slate-600">
                      <User size={16} className="mr-2" />
                      <span className="text-sm">{profile?.full_name || profile?.email}</span>
                    </div>
                    {showAdminLink && (
                      <button
                        onClick={() => {
                          setActiveSection('admin');
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center text-slate-600 hover:text-church-green transition-colors"
                      >
                        <Settings size={16} className="mr-2" />
                        Administration
                      </button>
                    )}
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center text-slate-600 hover:text-church-green transition-colors"
                    >
                      <LogOut size={16} className="mr-2" />
                      Déconnexion
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-church-blue text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-church-blue/90 transition-colors"
                  >
                    Connexion
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </header>
  );
};

export default Header;