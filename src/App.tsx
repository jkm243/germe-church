import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Ministries from './components/Ministries';
import Sermons from './components/Sermons';
import Events from './components/Events';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/Admin/AdminPanel';

function AppContent() {
  const [activeSection, setActiveSection] = useState('accueil');
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-church-blue mx-auto mb-4"></div>
          <p className="text-slate-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Show admin panel if user is admin
  if (user && profile?.role === 'admin' && activeSection === 'admin') {
    return <AdminPanel />;
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'accueil':
        return <Hero />;
      case 'qui-sommes-nous':
        return <About />;
      case 'ministeres':
        return <Ministries />;
      case 'predications':
        return <Sermons />;
      case 'evenements':
        return <Events />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        showAdminLink={user && profile?.role === 'admin'}
      />
      <main className="pt-16">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;