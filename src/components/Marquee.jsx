// components/Marquee.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Marquee = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#1a1210] py-4 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {t.marquee.map((item, idx) => (
          <span
            key={idx}
            className={`text-[10px] font-normal tracking-wider uppercase flex-shrink-0 ${
              item === '✦' ? 'text-[#e8621a]' : 'text-[#fdf6ee]/50'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;