// components/CtaBanner.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CtaBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-[#e8621a] to-[#c94a0a] py-16 md:py-18 px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      <div className="absolute font-serif text-[180px] font-semibold text-white/6 right-[-10px] top-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
        Kelati
      </div>
      <div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-2.5">
          {t.cta.title1}<br />{t.cta.title2}
        </h2>
        <p className="text-sm text-white/75">{t.cta.desc}</p>
      </div>
      <button className="bg-white text-[#e8621a] py-4 px-9 md:py-3.5 md:px-9 border-none rounded-full font-sans text-xs font-medium tracking-wide uppercase cursor-pointer transition-all hover:-translate-y-0.5 shadow-[0_8px_28px_rgba(0,0,0,0.12)] whitespace-nowrap">
        {t.cta.btn}
      </button>
    </div>
  );
};

export default CtaBanner;