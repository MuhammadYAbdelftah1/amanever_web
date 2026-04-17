
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isRtl = i18n.language === 'ar';

  const faqs = [
    { q: t('faq.items.0.q'), a: t('faq.items.0.a') },
    { q: t('faq.items.1.q'), a: t('faq.items.1.a') },
    { q: t('faq.items.2.q'), a: t('faq.items.2.a') },
    { q: t('faq.items.3.q'), a: t('faq.items.3.a') },
  ];

  return (
    <section id="faq" className="py-24 bg-[#f8fcfc]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">{t('faq.title')}</h2>
          <p className="text-teal-600 font-bold">{t('faq.subtitle')}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-[2rem] overflow-hidden border transition-all duration-300 ${openIndex === idx ? 'border-[#4d8080] shadow-xl shadow-teal-900/5' : 'border-teal-50 shadow-sm'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={`w-full px-8 py-6 flex items-center justify-between ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <span className={`text-lg font-black ${openIndex === idx ? 'text-[#4d8080]' : 'text-gray-800'}`}>
                   {faq.q}
                </span>
                <div className={`shrink-0 transition-transform ${openIndex === idx ? 'rotate-180 text-[#4d8080]' : 'text-teal-300'}`}>
                  {openIndex === idx ? <Minus /> : <Plus />}
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-8 pb-8 pt-2">
                  <div className="h-px w-full bg-teal-50 mb-6"></div>
                  <p className={`text-gray-500 font-bold leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 font-bold mb-6">{t('faq.moreQuestions')}</p>
          <button className="px-12 py-4 bg-[#4d8080] text-white rounded-2xl font-black hover:bg-[#3d6666] transition-all shadow-lg shadow-teal-900/20">
            {t('faq.contactSupport')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
