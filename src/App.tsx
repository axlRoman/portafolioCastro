import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Gallery />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatAssistant />
    </div>
  );
}

export default App;