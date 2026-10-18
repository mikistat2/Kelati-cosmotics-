// BeforeAfter.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import beforeImg1 from '../assets/Before Skincare Portrait.png';
import beforeImg2 from '../assets/Skincare Before Portrait with Natural Texture.png';
import afterImg1 from '../assets/Radiant After-Skincare Portrait.png';
import afterImg2 from '../assets/Radiant Skin After Treatment.png';

const beforeImages = [beforeImg1, beforeImg2, beforeImg1];
const afterImages = [afterImg1, afterImg2, afterImg2];
const percentages = ['+94%', '-68%', '+210%'];

const BeforeAfter = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const active = t.beforeAfter.products[activeIndex];

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <section className="py-16 md:py-24 px-5 md:px-10 bg-[#fdf6ee]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#e8621a] mb-4 justify-center">
            <span className="w-7 h-px bg-[#e8621a]"></span>
            {t.beforeAfter.badge}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            {t.beforeAfter.title} <em className="text-[#e8621a] not-italic">{t.beforeAfter.titleHighlight}</em>
          </h2>
          <p className="text-sm text-[#8a7570] max-w-2xl mx-auto mt-4">
            {t.beforeAfter.desc}
          </p>
        </div>

        {/* Product Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {t.beforeAfter.products.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeIndex === idx
                  ? 'bg-[#e8621a] text-white shadow-md'
                  : 'bg-white text-[#1a1210] border border-[#1a1210]/10 hover:border-[#e8621a]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Before/After Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            style={{ touchAction: 'none' }}
          >
            <div className="relative w-full aspect-[4/3]">
              {/* After Image (Full Background) */}
              <img
                src={afterImages[activeIndex]}
                alt="After transformation"
                className="w-full h-full object-cover"
              />
              
              {/* Before Image (Clipped) */}
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={beforeImages[activeIndex]}
                  alt="Before transformation"
                  className="w-full h-full object-cover"
                  style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
                  <svg className="w-5 h-5 text-[#1a1210]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-white text-xs font-medium tracking-wide">{active.beforeLabel}</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-white text-xs font-medium tracking-wide">{active.afterLabel}</span>
              </div>
            </div>
          </div>

          {/* Drag Instruction */}
          <p className="text-center text-xs text-[#8a7570] mt-4">
            {t.beforeAfter.dragInstruction}
          </p>
        </div>

        {/* Result Stat */}
        <div className="text-center mt-8">
          <div className="inline-block bg-white rounded-full px-6 py-3 shadow-md border border-[#1a1210]/10">
            <span className="text-2xl font-serif font-semibold text-[#e8621a]">{percentages[activeIndex]}</span>
            <span className="text-sm text-[#1a1210] ml-2">{active.results}</span>
          </div>
        </div>

        {/* Mini Gallery */}
        <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mt-12">
          {t.beforeAfter.products.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                setSliderPosition(50);
              }}
              className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                activeIndex === idx ? 'ring-2 ring-[#e8621a] scale-95' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <div className="aspect-square">
                <img src={beforeImages[idx]} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-2">
                  <span className="text-white text-[10px] font-medium">{item.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;