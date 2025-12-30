import React from 'react';

const units = [
  {
    name: "סיירת מטכ״ל",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sayeret_Matkal_insignia.svg/480px-Sayeret_Matkal_insignia.svg.png"
  },
  {
    name: "שייטת 13",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Insignia_of_Shayetet_13.svg/480px-Insignia_of_Shayetet_13.svg.png"
  },
  {
    name: "שלדג",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Shaldag_Unit_Logo.svg/480px-Shaldag_Unit_Logo.svg.png"
  },
  {
    name: "669",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/669_Unit_logo.svg/480px-669_Unit_logo.svg.png"
  },
  {
    name: "דובדבן",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Duvdevan_Unit_Symbol.svg/480px-Duvdevan_Unit_Symbol.svg.png"
  },
  {
    name: "אגוז",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Egoz_Unit_Symbol.svg/480px-Egoz_Unit_Symbol.svg.png"
  }
];

const UnitLogos: React.FC = () => {
  return (
    <section className="py-16 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-white/50 text-sm font-bold uppercase tracking-[0.2em] block mb-2">
            הבוגרים שלנו מובילים ב
          </span>
          <h3 className="text-2xl font-black text-white">יחידות העלית של צה״ל</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-16">
          {units.map((unit, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center gap-4 w-32 md:w-40 transition-all duration-300"
            >
              <div className="relative h-24 w-24 md:h-28 md:w-28 flex items-center justify-center p-2 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110 drop-shadow-2xl">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <img 
                  src={unit.logo} 
                  alt={`סמל ${unit.name}`}
                  className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  loading="lazy"
                />
              </div>
              
              <div className="text-center">
                <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
                  {unit.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnitLogos;