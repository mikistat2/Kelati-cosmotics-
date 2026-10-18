// components/Ritual.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Ritual = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 px-5 md:px-10 bg-[#1a1210] text-white relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-radial-gradient from-[#e8621a]/20 to-transparent rounded-full top-[-80px] right-[-80px] blur-[60px]"></div>
      <div className="flex items-center gap-2.5 text-xs font-medium tracking-wider uppercase text-[#f28040] mb-4">
        <span className="w-6 h-px bg-[#f28040]"></span>
        {t.ritual.badge}
      </div>
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
        {t.ritual.title} <em className="text-[#e8621a] not-italic">{t.ritual.titleHighlight}</em>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 mt-14 relative">
        <div className="absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#e8621a] to-transparent hidden lg:block"></div>
        {t.ritual.steps.map((step, idx) => (
          <div key={idx} className="text-center px-0 md:px-4">
            <div className="w-14 h-14 md:w-[56px] md:h-[56px] rounded-full bg-[#2d2420] border border-[#e8621a]/30 flex items-center justify-center font-serif text-xl font-semibold text-[#e8621a] mx-auto mb-6 relative z-10 transition-colors duration-300 hover:bg-[#e8621a] hover:text-white">
              {step.num}
            </div>
            <h3 className="font-serif text-lg font-semibold text-white mb-2.5">{step.title}</h3>
            <p className="text-xs text-[#fdf6ee]/50 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ritual;