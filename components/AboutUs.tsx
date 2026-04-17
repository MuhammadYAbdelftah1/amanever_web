
import React from 'react';
import { Target, Eye, Fingerprint } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FALLBACK_IMAGE } from '../constants';

const AboutUs: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  const values = [
    {
      title: t('about.identity.title'),
      icon: Fingerprint,
      description: t('about.identity.desc'),
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: t('about.vision.title'),
      icon: Eye,
      description: t('about.vision.desc'),
      color: 'bg-teal-50 text-teal-600'
    },
    {
      title: t('about.mission.title'),
      icon: Target,
      description: t('about.mission.desc'),
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          
          {/* Image Column */}
          <div className={`relative ${isRtl ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
            <div 
              className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[4px] md:border-[6px] border-white/50 ring-1 ring-gray-100 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Healthcare Management" 
                className="w-full h-[400px] md:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = FALLBACK_IMAGE;
                  e.currentTarget.onerror = null; // Prevent infinite loop
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Stats Card */}
              <div className={`absolute bottom-4 md:bottom-8 ${isRtl ? 'left-4 md:left-8' : 'right-4 md:right-8'} bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-white/20 max-w-[150px] md:max-w-[200px] animate-bounce-slow`}>
                <div className="text-[#4d8080] font-black text-2xl md:text-3xl mb-1">100%</div>
                <div className="text-gray-600 text-[10px] md:text-xs font-bold uppercase tracking-wider">{isRtl ? 'رعاية شاملة' : 'Comprehensive Care'}</div>
              </div>
            </div>
            
            <div 
              className={`absolute -top-10 ${isRtl ? '-left-10' : '-right-10'} w-48 md:w-64 h-48 md:h-64 bg-teal-100 rounded-full blur-[60px] md:blur-[80px] opacity-60 -z-10`}
            ></div>
             <div 
              className={`absolute -bottom-10 ${isRtl ? '-right-10' : '-left-10'} w-48 md:w-64 h-48 md:h-64 bg-blue-100 rounded-full blur-[60px] md:blur-[80px] opacity-60 -z-10`}
            ></div>
          </div>

          {/* Text Column */}
          <div className={`space-y-8 md:space-y-10 ${isRtl ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <div className={`flex items-center gap-3 mb-4 ${isRtl ? 'justify-start' : 'justify-start'}`}>
                <span className="w-8 md:w-12 h-1 md:h-1.5 bg-[#4d8080] rounded-full"></span>
                <h2 className="text-[#4d8080] font-black tracking-widest uppercase text-xs md:text-sm">{t('about.subtitle')}</h2>
              </div>
              <h3 className="text-3xl md:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-[1.1]">
                {t('about.title')}
              </h3>
              <p className="text-gray-500 font-medium text-lg md:text-xl leading-relaxed max-w-xl border-l-4 border-teal-500/20 pl-4 md:pl-6">
                {t('about.desc')}
              </p>
            </div>

            <div className="grid gap-4 md:gap-8">
              {values.map((val, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-4 md:gap-6 p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-white border border-gray-100 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500 group ${isRtl ? 'flex-row' : 'flex-row'}`}
                >
                  <div className={`shrink-0 w-14 h-14 md:w-20 md:h-20 ${val.color} rounded-xl md:rounded-[1.5rem] flex items-center justify-center border border-white shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                    <val.icon size={24} className="md:w-8 md:h-8" />
                  </div>
                  <div className={`flex flex-col justify-center ${isRtl ? 'text-right' : 'text-left'}`}>
                    <h4 className="text-lg md:text-2xl font-black text-gray-800 mb-1 md:mb-2">{val.title}</h4>
                    <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
