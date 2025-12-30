import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 text-center text-gray-600 text-sm">
      <div className="max-w-[1200px] mx-auto px-4">
        <Separator className="mb-8 bg-white/10" />
        <p>© 2024 מחר מלחמה. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
};

export default Footer;