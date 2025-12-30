import React, { useState, useEffect } from 'react';
import { Shield, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

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
            <Button
              className="hidden md:flex shadow-[0_0_15px_rgba(212,17,17,0.4)]"
            >
              הצטרף לצוות
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">תפריט</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background-dark border-white/10">
                <div className="flex flex-col gap-4 mt-8">
                  <Button className="w-full">
                    הצטרף לצוות
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;