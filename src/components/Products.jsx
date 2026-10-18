// components/Products.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import product1 from '../image/product-1.webp';
import product2 from '../image/product-2.webp';
import product3 from '../image/product-3.webp';
import product4 from '../image/product-4.webp';
import product5 from '../image/product-5.webp';
import product6 from '../image/product-6.webp';
import product7 from '../image/product-7.webp';

const prices = ['3420 birr', '2000 birr', '4400 birr', '1800 birr', '2500 birr', '1500 birr', '1200 birr'];
const badges = ['Bestseller', 'New', null, null, null, null, null];
const images = [product1, product2, product3, product4, product5, product6, product7];
const bgGradients = [
  'bg-gradient-to-br from-[#fde8d8] to-[#f9c0a0]',
  'bg-gradient-to-br from-[#e8f0ee] to-[#c8ddd8]',
  'bg-gradient-to-br from-[#f0e8f8] to-[#ddc8ee]',
  'bg-gradient-to-br from-[#e8f0ee] to-[#c8ddd8]',
  'bg-gradient-to-br from-[#f0e8f8] to-[#ddc8ee]',
  'bg-gradient-to-br from-[#e8f0ee] to-[#c8ddd8]',
  'bg-gradient-to-br from-[#f0e8f8] to-[#ddc8ee]',
];
const bottleGradients = [
  'bg-gradient-to-br from-white to-[#f2c4a0]',
  'bg-gradient-to-br from-white to-[#a0c4c0]',
  'bg-gradient-to-br from-white to-[#c0a0d8]',
  'bg-gradient-to-br from-white to-[#a0c4c0]',
  'bg-gradient-to-br from-white to-[#c0a0d8]',
  'bg-gradient-to-br from-white to-[#a0c4c0]',
  'bg-gradient-to-br from-white to-[#c0a0d8]',
];

const Products = () => {
  const { t } = useLanguage();
  const items = t.productsSection.items;

  return (
    <section className="py-16 md:py-20 px-5 md:px-10 bg-[#fdf6ee]">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-11">
        <div>
          <div className="flex items-center gap-2.5 text-xs font-medium tracking-wider uppercase text-[#e8621a] mb-4">
            <span className="w-6 h-px bg-[#e8621a]"></span>
            {t.productsSection.badge}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            {t.productsSection.title} <em className="text-[#e8621a] not-italic">{t.productsSection.titleHighlight}</em>
          </h2>
        </div>
        <button className="text-xs font-normal tracking-wide uppercase text-[#1a1210] flex items-center gap-2 bg-transparent border-none cursor-pointer transition-all hover:gap-3.5 hover:text-[#e8621a] mt-4 md:mt-0">
          {t.productsSection.viewAll}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {items.map((prod, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden bg-white border border-[#1a1210]/10 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(26,18,16,0.1)] cursor-pointer">
            <div className="h-56 md:h-60 relative overflow-hidden flex items-center justify-center">
              <div className={`absolute inset-0 transition-transform duration-600 ${bgGradients[idx]} group-hover:scale-105`}></div>
              <div className={`relative z-10 w-[400px] h-[200px] md:w-[400px] md:h-[250px] rounded-[45px_45px_14px_14px] shadow-[0_14px_36px_rgba(0,0,0,0.12)] transition-transform duration-400 hover:-translate-y-2 hover:rotate-3 ${bottleGradients[idx]}`}>
                <img 
                  src={images[idx]}
                  alt={prod.name} 
                  className="w-full h-full object-contain rounded-[45px_45px_14px_14px]" 
                />
              </div>
              {badges[idx] && (
                <span className="absolute top-3.5 right-3.5 z-20 bg-[#e8621a] text-white text-[9px] font-medium tracking-wider uppercase py-1 px-3 rounded-full">
                  {badges[idx]}
                </span>
              )}
            </div>
            <div className="p-5 md:p-6">
              <div className="text-[10px] font-normal tracking-wider uppercase text-[#e8621a] mb-1.5">{prod.category}</div>
              <div className="font-serif text-xl font-semibold mb-1.5">{prod.name}</div>
              <div className="text-xs text-[#8a7570] leading-relaxed mb-4">{prod.desc}</div>
              <div className="flex items-center justify-between">
                <div className="font-serif text-2xl md:text-[26px] font-semibold">{prices[idx]}</div>
                <button className="w-9.5 h-9.5 rounded-full bg-[#1a1210] text-white border-none text-lg cursor-pointer flex items-center justify-center transition-all hover:bg-[#e8621a] hover:rotate-90">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;