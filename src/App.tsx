import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhySasabot from './components/WhySasabot';
import WhoItsFor from './components/WhoItsFor';
import About from './components/About';
import Investors from './components/Investors';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <WhySasabot />
      <WhoItsFor />
      <About />
      <Investors />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;