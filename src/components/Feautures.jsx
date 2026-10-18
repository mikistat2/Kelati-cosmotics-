// components/Features.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 px-5 md:px-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 md:gap-15">
        <div className="reveal">
          <div className="flex items-center gap-2.5 text-xs font-medium tracking-wider uppercase text-[#e8621a] mb-4">
            <span className="w-6 h-px bg-[#e8621a]"></span>
            {t.features.badge}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            {t.features.title} <em className="text-[#e8621a] not-italic">{t.features.titleHighlight}</em>
          </h2>
          <p className="text-sm leading-relaxed text-[#8a7570] font-light mt-5">
            {t.features.desc}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.features.items.map((feat, idx) => (
            <div key={idx} className="bg-[#fdf6ee] rounded-2xl p-6 md:p-7 border border-[#1a1210]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(26,18,16,0.08)] hover:border-[#e8621a] relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e8621a] to-[#f28040] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="w-11 h-11 rounded-xl bg-[#fde8d8] flex items-center justify-center text-xl mb-4">{feat.icon}</div>
              <h3 className="font-serif text-lg font-semibold mb-2">{feat.title}</h3>
              <p className="text-xs leading-relaxed text-[#8a7570]">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;