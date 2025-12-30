import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-background-dark/90 backdrop-blur-md border-[#331919] shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <header className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3 text-white">
            <div className="size-8 text-primary flex items-center justify-center">
              <Shield className="w-8 h-8 fill-current" strokeWidth={2.5} />
            </div>
            <h2 className="text-white text-xl md:text-2xl font-black tracking-tighter uppercase font-display">
              מחר מלחמה
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-red-700 transition-colors text-white text-sm font-bold shadow-[0_0_15px_rgba(212,17,17,0.4)]">
              <span className="truncate">הצטרף לצוות</span>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;