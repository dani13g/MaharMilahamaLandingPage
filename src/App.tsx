import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Testimonials from './components/testimonials';
import BlogSection from './components/blog-section';
import Footer from './components/footer';
import WhatsAppButton from './components/whatsapp-button';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white relative">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;