// components/Hero.jsx
import React from 'react';
import bgImg from '../image/girl.jpg';
import heroBgMobile from '../assets/Ethiopian Beauty Ritual in Golden Light.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Mobile-only background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${heroBgMobile})` }}
      ></div>
      {/* Dark overlay for mobile readability – hidden on md+ */}
      <div className="absolute inset-0 bg-black/50 z-[1] md:hidden"></div>

      <div className="flex flex-col justify-center py-32 px-5 md:py-32 md:px-10 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#e8621a] mb-7 animate-fadeUp">
          <span className="w-7 h-px bg-[#e8621a]"></span>
          {t.hero.badge}
        </div>
        <h1 className="font-serif text-[44px] md:text-6xl lg:text-8xl font-light leading-tight mb-6 animate-fadeUp animation-delay-150 text-white md:text-[#1a1210]">
          {t.hero.title1}<br />
          {t.hero.title2} <em className="text-[#e8621a] not-italic">{t.hero.titleHighlight}</em>
        </h1>
        <p className="text-sm font-light leading-relaxed text-white/70 md:text-[#8a7570] max-w-md mb-10 animate-fadeUp animation-delay-300">
          {t.hero.desc}
        </p>
        <div className="flex items-center gap-5 flex-wrap animate-fadeUp animation-delay-450">
          <button className="bg-[#e8621a] text-white py-3.5 px-9 border-none rounded-full font-sans text-xs font-medium tracking-wide uppercase cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(232,98,26,0.35)] shadow-[0_8px_28px_rgba(232,98,26,0.25)]">
            {t.hero.exploreBtn}
          </button>
          <button className="text-xs font-normal tracking-wide uppercase text-white md:text-[#1a1210] flex items-center gap-2 bg-transparent border-none cursor-pointer transition-all hover:gap-3.5 hover:text-[#e8621a]">
            {t.hero.storyBtn}
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden bg-[#fde8d8] animate-fadeIn animation-delay-200">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-radial-gradient from-[#e8621a]/20 to-transparent rounded-full blur-[40px] animate-float"></div>
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="w-[180px] h-[380px] md:w-[440px] md:h-[780px] rounded-[75px_75px_20px_20px] md:rounded-[120px_120px_20px_20px] relative z-10 shadow-[0_40px_80px_rgba(26,18,16,0.12)] inset-shadow-[0_2px_0_rgba(255,255,255,0.8)] flex flex-col items-center justify-center gap-2.5 animate-float animation-delay-500 mb-8 md:mb-0"
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
            <div className="w-12 h-12 md:w-[70px] md:h-[70px] rounded-full bg-gradient-to-br from-[#f28040] to-[#e8621a] shadow-[0_8px_24px_rgba(232,98,26,0.3)] my-1.5"></div>
            <div className="font-serif text-base md:text-xl font-semibold text-[#1a1210] tracking-wide">{t.hero.productLabel}</div>
            <div className="text-[9px] tracking-wider uppercase text-[#8a7570]">{t.hero.productSub}</div>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 flex gap-5 md:gap-6 animate-fadeUp animation-delay-800 z-50">
          <div>
            <div className="font-serif text-2xl md:text-[30px] font-semibold text-[#1a1210] leading-none">{t.hero.stat1Val}</div>
            <div className="text-[9px] md:text-[10px] text-[#8a7570] tracking-wide">{t.hero.stat1Label}</div>
          </div>
          <div>
            <div className="font-serif text-2xl md:text-[30px] font-semibold text-[#1a1210] leading-none">{t.hero.stat2Val}</div>
            <div className="text-[9px] md:text-[10px] text-[#8a7570] tracking-wide">{t.hero.stat2Label}</div>
          </div>
          <div>
            <div className="font-serif text-2xl md:text-[30px] font-semibold text-[#1a1210] leading-none">{t.hero.stat3Val}</div>
            <div className="text-[9px] md:text-[10px] text-[#8a7570] tracking-wide">{t.hero.stat3Label}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;