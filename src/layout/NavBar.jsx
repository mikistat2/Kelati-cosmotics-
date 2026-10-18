// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-[#fdf6ee] z-99 flex flex-col items-center justify-center gap-9 transition-all ${
          mobileMenuOpen ? 'flex' : 'hidden'
        }`}
        style={{ zIndex: 99 }}
      >
        <a href="#" onClick={closeMobileMenu} className="font-serif text-4xl font-light text-[#1a1210] no-underline tracking-wide hover:text-[#e8621a] transition-colors">
          {t.nav.products}
        </a>
        <a href="#" onClick={closeMobileMenu} className="font-serif text-4xl font-light text-[#1a1210] no-underline tracking-wide hover:text-[#e8621a] transition-colors">
          {t.nav.humanHair}
        </a>
        <a href="#" onClick={closeMobileMenu} className="font-serif text-4xl font-light text-[#1a1210] no-underline tracking-wide hover:text-[#e8621a] transition-colors">
          {t.nav.about}
        </a>
        <a href="#" onClick={closeMobileMenu} className="font-serif text-4xl font-light text-[#1a1210] no-underline tracking-wide hover:text-[#e8621a] transition-colors">
          {t.nav.contact}
        </a>
        <a
          href="#"
          onClick={closeMobileMenu}
          className="bg-[#e8621a] text-white py-3.5 px-10 rounded-full font-sans text-xs tracking-wider uppercase no-underline mt-2"
        >
          {t.nav.shopNow}
        </a>
        {/* Language toggle in mobile menu */}
        <button
          onClick={toggleLanguage}
          className="mt-4 px-5 py-2 rounded-full border border-[#e8621a] text-[#e8621a] text-sm font-medium tracking-wide bg-transparent cursor-pointer hover:bg-[#e8621a] hover:text-white transition-all"
        >
          {language === 'en' ? 'አማርኛ' : 'English'}
        </button>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between py-5 px-5 md:px-10 transition-all duration-400 ${
          scrolled ? 'bg-[#fdf6ee]/92 backdrop-blur-md py-3.5 px-5 md:px-10 border-b border-[#1a1210]/10' : ''
        }`}
        style={{ zIndex: 100 }}
      >
        <a href="#" className="font-serif text-2xl font-semibold tracking-wide no-underline">
          <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Kelati</span> <span className="text-[#e8621a]">Beauty</span>
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <a href="#" className="text-xs font-normal tracking-wider uppercase text-[#1a1210] no-underline hover:text-[#e8621a] transition-colors">
              {t.nav.products}
            </a>
          </li>
          <li>
            <a href="#" className="text-xs font-normal tracking-wider uppercase text-[#1a1210] no-underline hover:text-[#e8621a] transition-colors">
              {t.nav.humanHair}
            </a>
          </li>
          <li>
            <a href="#" className="text-xs font-normal tracking-wider uppercase text-[#1a1210] no-underline hover:text-[#e8621a] transition-colors">
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#" className="text-xs font-normal tracking-wider uppercase text-[#1a1210] no-underline hover:text-[#e8621a] transition-colors">
              {t.nav.contact}
            </a>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-full border-none text-xs font-medium tracking-wide uppercase cursor-pointer bg-[#1a1210] text-white hover:bg-[#e8621a] transition-all"
          >
            {language === 'en' ? 'አማ' : 'EN'}
          </button>
          <button className="bg-[#1a1210] text-white py-2.5 px-6 border-none rounded-full font-sans text-xs tracking-wide uppercase cursor-pointer transition-colors hover:bg-[#e8621a]">
            {t.nav.shopNow}
          </button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile language toggle */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-full border-none text-[10px] font-medium tracking-wide uppercase cursor-pointer bg-[#1a1210] text-white hover:bg-[#e8621a] transition-all"
          >
            {language === 'en' ? 'አማ' : 'EN'}
          </button>
          <button
            className="flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span className={`block w-5.5 h-0.5 bg-[#1a1210] rounded-sm transition-all duration-300 ${mobileMenuOpen ? 'transform translate-y-1.5 rotate-45' : ''}`}></span>
            <span className={`block w-5.5 h-0.5 bg-[#1a1210] rounded-sm transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5.5 h-0.5 bg-[#1a1210] rounded-sm transition-all duration-300 ${mobileMenuOpen ? 'transform -translate-y-1.5 -rotate-45' : ''}`}></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;