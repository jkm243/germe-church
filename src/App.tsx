import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Ministries from './components/Ministries';
import Sermons from './components/Sermons';
import Events from './components/Events';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  const renderSection = () => {
    switch (activeSection) {
      case 'accueil':
        return <Hero />;
      case 'qui-sommes-nous':
        return <About />;
      case 'nos-programmes':
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
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-16">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;