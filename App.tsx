import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import UnitLogos from './components/UnitLogos';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white relative">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <UnitLogos />
        <BlogSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;