import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "הגעתי לגיבוש מטכ״ל ופשוט הייתי מוכן להכל. בזמן שכולם היו בשוק מהעומס, אני הרגשתי שזה פשוט עוד אימון רגיל של מחר מלחמה. לא הייתי עובר את זה בלעדיהם.",
    initial: "י׳",
    name: "עידו ל.",
    role: "לוחם בסיירת מטכ״ל"
  },
  {
    text: "היחס האישי של המדריכים מטורף. הם לא מוותרים לך לשנייה אבל תמיד שם בשבילך. למדתי מה זה חוסן מנטלי אמיתי ואיך לקום גם כשקשה.",
    initial: "ע׳",
    name: "עומר ג.",
    role: "לוחם בשייטת 13"
  },
  {
    text: "הכנה מדויקת ברמה הכי גבוהה שיש. הדמיות של גיבושים, מסעות אלונקות, וניווטים שנתנו לי ביטחון מלא לקראת הגיוס. ממליץ לכל מי שרוצה להגיע רחוק.",
    initial: "א׳",
    name: "איתי ר.",
    role: "לוחם בשלדג"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-5xl font-black leading-tight mb-4">
            בוגרים <span className="text-primary">מדברים</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ההצלחה שלהם היא תעודת הביטוח שלך. מאות בוגרים שלנו משרתים כיום ביחידות העלית של צה״ל.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-card-dark p-8 rounded-2xl border border-white/5 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute -top-4 right-8 bg-primary text-white p-2 rounded-lg shadow-lg shadow-primary/20">
                <Quote size={20} fill="currentColor" />
              </div>
              <p className="text-gray-300 mb-6 text-lg font-medium leading-relaxed min-h-[140px]">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-lg border-2 border-primary/50">
                  {item.initial}
                </div>
                <div>
                  <div className="text-white font-bold">{item.name}</div>
                  <div className="text-primary text-sm font-bold">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;