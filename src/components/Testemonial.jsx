// components/Testimonials.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 px-5 md:px-10 bg-white">
      <div className="flex items-center gap-2.5 text-xs font-medium tracking-wider uppercase text-[#e8621a] mb-4">
        <span className="w-6 h-px bg-[#e8621a]"></span>
        {t.testimonials.badge}
      </div>
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
        {t.testimonials.title} <em className="text-[#e8621a] not-italic">{t.testimonials.titleHighlight}</em>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {t.testimonials.items.map((test, idx) => (
          <div key={idx} className="bg-[#fdf6ee] rounded-2xl p-7 md:p-8 border border-[#1a1210]/10 transition-transform duration-300 hover:-translate-y-1">
            <div className="text-[#e8621a] text-sm tracking-[2px] mb-4">{test.stars}</div>
            <div className="font-serif text-[17px] font-light italic leading-relaxed text-[#1a1210] mb-6">{test.quote}</div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fde8d8] to-[#f28040] flex items-center justify-center font-serif text-base font-semibold text-[#e8621a]">
                {test.initial}
              </div>
              <div>
                <div className="text-[13px] font-medium">{test.name}</div>
                <div className="text-[11px] text-[#8a7570]">{test.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;