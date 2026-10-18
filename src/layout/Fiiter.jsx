// components/Footer.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a1210] py-14 md:py-16 px-5 md:px-10 text-[#fdf6ee]/60">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-12 mb-10">
        <div>
          <a href="#" className="font-serif text-2xl font-semibold tracking-wide text-white no-underline">
            Kelati <span className="text-[#e8621a]">Beauty</span>
          </a>
          <p className="text-[13px] leading-relaxed mt-3.5 max-w-[220px]">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="text-[11px] font-medium tracking-wider uppercase text-[#e8621a] mb-4">{t.footer.shopTitle}</h4>
          <ul className="list-none flex flex-col gap-2.5">
            {t.footer.shopLinks.map((link, i) => (
              <li key={i}><a href="#" className="text-[13px] text-[#fdf6ee]/60 no-underline hover:text-white transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-medium tracking-wider uppercase text-[#e8621a] mb-4">{t.footer.companyTitle}</h4>
          <ul className="list-none flex flex-col gap-2.5">
            {t.footer.companyLinks.map((link, i) => {
              const hrefs = ['#', '#', '#', 'https://kelatibeauty.com/'];
              const isExternal = i === 3;
              return (
                <li key={i}>
                  <a href={hrefs[i]} {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="text-[13px] text-[#fdf6ee]/60 no-underline hover:text-white transition-colors">{link}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-medium tracking-wider uppercase text-[#e8621a] mb-4">{t.footer.connectTitle}</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li><a href="https://www.instagram.com/kelati_beauty/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#fdf6ee]/60 no-underline hover:text-white transition-colors">{t.footer.connectLinks[0]}</a></li>
            <li><a href="https://t.me/R_Kelati" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#fdf6ee]/60 no-underline hover:text-white transition-colors">{t.footer.connectLinks[1]}</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.kelatimobile&hl=en" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#fdf6ee]/60 no-underline hover:text-white transition-colors">{t.footer.connectLinks[2]}</a></li>
            <li><a href="tel:+251962239308" className="text-[13px] text-[#fdf6ee]/60 no-underline hover:text-white transition-colors">{t.footer.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#fdf6ee]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs">{t.footer.copyright}</p>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/kelati_beauty/" target="_blank" rel="noopener noreferrer" className="w-8.5 h-8.5 rounded-full border border-[#fdf6ee]/15 flex items-center justify-center text-[#fdf6ee]/50 text-xs no-underline transition-all hover:border-[#e8621a] hover:text-[#e8621a]">ig</a>
          <a href="https://t.me/R_Kelati" target="_blank" rel="noopener noreferrer" className="w-8.5 h-8.5 rounded-full border border-[#fdf6ee]/15 flex items-center justify-center text-[#fdf6ee]/50 text-xs no-underline transition-all hover:border-[#e8621a] hover:text-[#e8621a]">tg</a>
          <a href="tel:+251962239308" className="w-8.5 h-8.5 rounded-full border border-[#fdf6ee]/15 flex items-center justify-center text-[#fdf6ee]/50 text-xs no-underline transition-all hover:border-[#e8621a] hover:text-[#e8621a]">📞</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;