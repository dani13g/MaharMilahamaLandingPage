import React, { useState, useEffect } from 'react';
import { User, Phone, MapPin, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [nextUrl, setNextUrl] = useState('');

  useEffect(() => {
    // Set the return URL for formsubmit.co to redirect back to
    // We append ?submitted=true to know when to show the success message
    if (typeof window !== 'undefined') {
      setNextUrl(`${window.location.origin}${window.location.pathname}?submitted=true`);
      
      // Check if we are returning from a successful submission
      const params = new URLSearchParams(window.location.search);
      if (params.get('submitted') === 'true') {
        setStatus('success');
        // Clean up the URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-0 pb-12 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.5) 50%, rgba(10, 10, 10, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFTIVUpykDZMJMPTCh4h2pNTAVKsNusXBrT-uL-pJvBjL-hkqRn6WkbtzTj9WSZmWe7tAOWts8fFj-IIQlgYL_wUD5dEiSb6tGGVcp8eGrp9WruUj7d54qvzavpcRxp5Y8Y5Rwr9tWIgVKdORwBdhuVZ_DhfL9G75PVGzuSUzAV711u4ASQQorvoD_qKWCrTiwI4ygjjqI-1aADcs-Kg3CAMOZ_hL-BReWgPCBFaVFOITGj34cVTViiMsdZjrvZJ8EuvTRbSKajG7s")`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right gap-6">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight drop-shadow-2xl">
            הכנה ליחידות מובחרות,
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              המעטפת המקצועית בישראל
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-shadow-sm">
            כושר פיזי, מנטלי, פיקוד והובלה.<br className="hidden md:block"/>
            אנחנו חיים את העולם הזה - הגיע הזמן לבנות אותך
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <a 
              href="https://api.whatsapp.com/send/?phone=%2B972527960293&text=%D7%90%D7%A0%D7%99+%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F+%D7%9C%D7%A7%D7%91%D7%9C+%D7%A4%D7%A8%D7%98%D7%99%D7%9D+%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D+%D7%A2%D7%9C+%D7%94%D7%94%D7%9B%D7%A0%D7%94+%D7%A9%D7%9C%D7%9B%D7%9D+&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-red-700 transition-all transform hover:scale-105 text-white text-base font-bold shadow-glow w-full sm:w-auto"
            >
              תיאום אימון ניסיון
            </a>
            <button className="flex items-center justify-center rounded-lg h-14 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-colors text-white text-base font-bold w-full sm:w-auto">
              מידע נוסף
            </button>
          </div>
        </div>

        {/* Lead Form */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-card-dark/90 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl min-h-[440px] flex flex-col justify-center">
            
            {status === 'success' ? (
              <div className="text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">תודה רבה!</h3>
                <p className="text-gray-300 text-lg mb-8">
                  הפרטים התקבלו בהצלחה.<br/>
                  צוות מחר מלחמה יחזור אליך בהקדם.
                </p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="text-primary hover:text-white underline decoration-primary underline-offset-4 transition-colors font-bold"
                >
                  שלח פנייה נוספת
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-white mb-2">מכוון ליחידה מובחרת?</h3>
                  <p className="text-gray-400 text-sm">השאר פרטים לבדיקת התאמה</p>
                </div>
                
                <form 
                  action="https://formsubmit.co/maharmilhama212@gmail.com" 
                  method="POST"
                  className="flex flex-col gap-4"
                >
                  {/* Hidden Configuration Fields */}
                  <input type="hidden" name="_subject" value="ליד חדש מאתר: מחר מלחמה" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={nextUrl} />

                  <div>
                    <label className="sr-only">שם מלא</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 pr-3 pl-3 flex items-center pointer-events-none text-gray-500">
                        <User size={18} />
                      </div>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 w-full rounded-lg bg-black/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-500 pr-10 pl-4 transition-all outline-none" 
                        placeholder="שם מלא"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only">טלפון</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 pr-3 pl-3 flex items-center pointer-events-none text-gray-500">
                        <Phone size={18} />
                      </div>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12 w-full rounded-lg bg-black/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-500 pr-10 pl-4 transition-all outline-none" 
                        placeholder="מספר טלפון"
                        dir="rtl"
                        required
                        pattern="[0-9]{9,10}"
                        title="נא להזין מספר טלפון תקין (9-10 ספרות)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only">עיר מגורים</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 pr-3 pl-3 flex items-center pointer-events-none text-gray-500">
                        <MapPin size={18} />
                      </div>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="h-12 w-full rounded-lg bg-black/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-500 pr-10 pl-4 transition-all outline-none" 
                        placeholder="עיר מגורים"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="mt-2 h-14 w-full bg-primary hover:bg-red-700 text-white font-bold rounded-lg shadow-lg shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                  >
                    שלח פרטים
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="text-center text-xs text-gray-500 mt-2">
                    *פרטיך מאובטחים ולא יועברו לצד ג׳
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;