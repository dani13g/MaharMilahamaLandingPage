import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: "איך נמנעים משברי מאמץ?",
    description: "המדריך המלא למניעת הפציעה הנפוצה ביותר בקרב מלש״בים. כל מה שצריך לדעת על סרגל מאמצים ותזונה.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJYaIP55Vte8vb6u94PWIq_nWA88qEvOURbyrFV9YFWAzsIqd6FJD6WK7F4ww4OCwOodUDWAOE-ymXEeoHl5iSAqs-42Krp4UHeinHu9Mp5Z015fevx9zaxh3-1G68I3zln7qmt6wFs0J49XQ8OHDz85u_TWFA4xw5lyy6--7P7azDiSFAUd2SKZlWhLIFEaR4GhueCzhxa0itxs1Uu97GUGT8o9dh8gfVlwT7mFdRazmB3du507CMsV73hHB6fi9k8NuD4grnwvq_",
  },
  {
    title: "המדריך המלא לגיבוש מטכ״ל",
    description: "ניתוח מעמיק של שלבי המיון, הדרישות הפיזיות והפרופיל המנטלי שהם מחפשים. אל תגיע לא מוכן.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5cgbtWTOYuxIElWoKznoiBvDOZIHXQmjqTfFcR7SDFmfdVRTMYInFdc6XGhcCMYQv5YLHaH8XOSnva_oJhC2fsqMMqGJIVOU-K5kNx2aa2GsdoQ38XB5RccWBnPNzo-u1HlqUP1qsIbQUQVUY6m2myJo1y34vOa6va0xNfKoDwfHNgOFgx5sGqooR6MeqDb-owXUvLK3CtqAuHC19shxyknAH5sXep_14fpF1tSB0DE3s62UGqg308-ePoR68vA58r0gWKASpMJNN",
  },
  {
    title: "הכנה מנטלית: הראש קובע",
    description: "איך מפתחים חוסן מנטלי? טכניקות של לוחמי על להתמודדות עם משברים ורגעי שבירה.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh4gTksg-VrHddYpWof-zLiD6-kRLv_HlRwn_4dCz1S2YyukwOIawlOsuMWTHq6hIC4YziBkc8YnlRwmE3eF09Lz8vT0z7hjWh9V22PcwDrdeb5pein4pJ1XCOClNZO0NXXC0yirImhxEnfVtb1oCFHgKCaf16RK3VrP97sfyCAXUpeU18a9QgM8NQsZA_5GEWTzzKI3ev3SDX1IFoF2Mhe2wziSVcNN5c0oYRtEQeEVDHOeN87Plxc4qwzr3SurpnxIQZn_KQdKpk",
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-background-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold">ידע זה כוח</h2>
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors font-bold group">
            <span>לכל המאמרים באתר הראשי</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-card-dark rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 flex flex-col h-full border border-white/5 group">
              <div 
                className="h-48 bg-cover bg-center relative" 
                style={{ backgroundImage: `url("${article.image}")` }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div className="flex-1">
                  <h3 className="text-white text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>
                
                <a href="#" className="text-white text-sm font-bold flex items-center gap-1 mt-auto hover:underline decoration-primary underline-offset-4 group/link">
                  קרא עוד
                  <ArrowLeft className="w-4 h-4 group-hover/link:-translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <button className="md:hidden w-full mt-8 py-3 rounded-lg border border-white/10 text-white font-bold text-sm bg-card-dark hover:bg-white/5 transition-colors">
          לכל המאמרים
        </button>
      </div>
    </section>
  );
};

export default BlogSection;