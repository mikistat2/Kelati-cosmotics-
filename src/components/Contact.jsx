import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(null), 3000);
    }, 1000);
  };

  return (
    <div className="bg-[#fdf6ee] text-[#1a1210] font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-5 md:px-10 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-radial-gradient from-[#e8621a]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#e8621a] mb-6 animate-fadeUp">
            <span className="w-7 h-px bg-[#e8621a]"></span>
            {t.contact.heroBadge}
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6 animate-fadeUp animation-delay-150">
            {t.contact.heroTitle} {t.contact.heroTitleHighlight && <em className="text-[#e8621a] not-italic">{t.contact.heroTitleHighlight}</em>}
          </h1>
          <p className="text-sm md:text-base font-light leading-relaxed text-[#8a7570] max-w-2xl mx-auto animate-fadeUp animation-delay-300">
            {t.contact.heroDesc}
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 md:py-16 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#1a1210]/10 hover:border-[#e8621a] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#fde8d8] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  📍
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{t.contact.visitTitle}</h3>
                <p className="text-sm text-[#8a7570] leading-relaxed">
                  {t.contact.visitAddress.map((line, i) => (
                    <React.Fragment key={i}>{line}{i < t.contact.visitAddress.length - 1 && <br />}</React.Fragment>
                  ))}
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#1a1210]/10 hover:border-[#e8621a] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#fde8d8] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🕘
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{t.contact.hoursTitle}</h3>
                <p className="text-sm text-[#8a7570] leading-relaxed">
                  {t.contact.hoursText.map((line, i) => (
                    <React.Fragment key={i}>{line}{i < t.contact.hoursText.length - 1 && <br />}</React.Fragment>
                  ))}
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#1a1210]/10 hover:border-[#e8621a] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#fde8d8] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  📞
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{t.contact.callTitle}</h3>
                <p className="text-sm text-[#8a7570] leading-relaxed">
                  {t.contact.callText.map((line, i) => (
                    <React.Fragment key={i}>{line}{i < t.contact.callText.length - 1 && <br />}</React.Fragment>
                  ))}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-10 border border-[#1a1210]/10 shadow-xl">
                <div className="mb-8">
                  <div className="flex items-center gap-2.5 text-xs font-medium tracking-wider uppercase text-[#e8621a] mb-3">
                    <span className="w-6 h-px bg-[#e8621a]"></span>
                    {t.contact.formBadge}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-light">
                    {t.contact.formTitle} <em className="text-[#e8621a] not-italic">{t.contact.formTitleHighlight}</em>
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                        {t.contact.nameLabel} <span className="text-[#e8621a]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                        placeholder={t.contact.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                        {t.contact.emailLabel} <span className="text-[#e8621a]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                        placeholder={t.contact.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                      {t.contact.subjectLabel} <span className="text-[#e8621a]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm"
                      placeholder={t.contact.subjectPlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-[#1a1210] mb-2">
                      {t.contact.messageLabel} <span className="text-[#e8621a]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-[#fdf6ee] border border-[#1a1210]/10 rounded-xl focus:outline-none focus:border-[#e8621a] focus:ring-2 focus:ring-[#e8621a]/20 transition-all text-sm resize-none"
                      placeholder={t.contact.messagePlaceholder}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full md:w-auto bg-[#e8621a] text-white px-10 py-4 rounded-full font-sans text-sm font-medium tracking-wide uppercase cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(232,98,26,0.35)] shadow-[0_8px_28px_rgba(232,98,26,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? t.contact.sendingBtn : t.contact.sendBtn}
                  </button>

                  {formStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                      {t.contact.successMsg}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-5 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 text-xs font-medium tracking-wider uppercase text-[#e8621a] mb-4 justify-center">
              <span className="w-6 h-px bg-[#e8621a]"></span>
              {t.contact.faqBadge}
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light">
              {t.contact.faqTitle} <em className="text-[#e8621a] not-italic">{t.contact.faqTitleHighlight}</em>
            </h2>
            <p className="text-sm text-[#8a7570] max-w-2xl mx-auto mt-4">
              {t.contact.faqDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.contact.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#1a1210]/10 pb-6">
                <h3 className="font-serif text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-[#8a7570] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-[#1a1210]/10 shadow-xl">
            <iframe
              title="Kelati Beauty Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7637!3d9.0054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b851dc357a035%3A0x7c9c886db65891fe!2sMedhani%20Alem%20Building!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;