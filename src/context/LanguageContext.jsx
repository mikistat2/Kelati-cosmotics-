import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  en: {
    // Navbar
    nav: {
      products: 'Products',
      humanHair: 'Human Hair',
      about: 'About',
      contact: 'Contact',
      shopNow: 'Shop Now',
    },
    // Hero
    hero: {
      badge: 'Original Beauty Products & Human Hair',
      title1: 'Your Beauty',
      title2: 'Deserves',
      titleHighlight: 'The Best',
      desc: 'Kelati Beauty — your trusted source for original beauty products, human hair, and cosmetics. Located in Addis Ababa & Dubai.',
      exploreBtn: 'Explore Products',
      storyBtn: 'Our Story →',
      productLabel: 'Kelati Beauty',
      productSub: 'Original Products',
      stat1Val: '5.1k+',
      stat1Label: 'Followers',
      stat2Val: '4.4★',
      stat2Label: 'Google Rating',
      stat3Val: '2',
      stat3Label: 'Locations',
    },
    // Marquee
    marquee: [
      'Original Products', '✦', 'Human Hair Supply', '✦', 'Cosmetics & Beauty', '✦',
      'Addis Ababa', '✦', 'Dubai', '✦', 'Trusted Quality', '✦',
      'Original Products', '✦', 'Human Hair Supply', '✦', 'Cosmetics & Beauty', '✦',
      'Addis Ababa', '✦', 'Dubai', '✦', 'Trusted Quality', '✦'
    ],
    // Features
    features: {
      badge: 'Why Kelati Beauty',
      title: 'Quality Meets',
      titleHighlight: 'Trust',
      desc: 'Kelati Beauty is your one-stop shop for original beauty products, human hair, and cosmetics. We source authentically and serve with dedication — so you look and feel your best.',
      items: [
        { icon: '✅', title: 'Original Products', desc: '100% authentic beauty products and human hair sourced directly from trusted suppliers worldwide.' },
        { icon: '💇', title: 'Premium Human Hair', desc: 'The biggest human hair importer — offering a wide range of styles, textures, and lengths.' },
        { icon: '💰', title: 'Great Prices', desc: 'Variety of products at competitive prices. Quality beauty shouldn\'t break the bank.' },
        { icon: '🌍', title: 'Two Locations', desc: 'Serving you from Addis Ababa (Bole Medaniyalem Mall) and Dubai (Naif Deira).' },
      ],
    },
    // Products
    productsSection: {
      badge: 'Our Products',
      title: 'Curated for',
      titleHighlight: 'Your Beauty',
      viewAll: 'View all →',
      items: [
        { category: 'Human Hair', name: 'Premium Straight Human Hair', desc: 'High-quality 100% human hair, straight texture. Available in various lengths.' },
        { category: 'Cosmetics', name: 'Foundation & Base Kit', desc: 'Professional-grade foundation kit for flawless coverage and natural finish.' },
        { category: 'Skincare', name: 'Glow Brightening Serum', desc: 'Brightening formula with Vitamin C & hyaluronic acid for radiant skin.' },
        { category: 'Human Hair', name: 'Body Wave Human Hair', desc: 'Luxurious body wave texture, 100% human hair. Natural look and feel.' },
        { category: 'Beauty Tools', name: 'Professional Makeup Brush Set', desc: 'Complete set of premium makeup brushes for professional application.' },
        { category: 'Skincare', name: 'Hydrating Face Cleanser', desc: 'Gentle daily cleanser with aloe vera & chamomile for a soothing cleanse.' },
        { category: 'Cosmetics', name: 'Matte Lipstick Collection', desc: 'Long-lasting matte lipsticks in a curated range of beautiful shades.' },
      ],
    },
    // Ritual
    ritual: {
      badge: 'The Experience',
      title: 'Your',
      titleHighlight: 'Beauty Journey',
      steps: [
        { num: '01', title: 'Browse', desc: 'Explore our wide selection of original beauty products, human hair, and cosmetics in-store or online.' },
        { num: '02', title: 'Consult', desc: 'Our friendly and knowledgeable staff will help you find the perfect products for your needs.' },
        { num: '03', title: 'Choose', desc: 'Pick from our curated range of quality brands and styles at competitive prices.' },
        { num: '04', title: 'Glow', desc: 'Walk out feeling confident with premium beauty products that deliver real results.' },
      ],
    },
    // Testimonials
    testimonials: {
      badge: 'Customer Reviews',
      title: 'What Our',
      titleHighlight: 'Customers Say',
      items: [
        { stars: '★★★★★', quote: '"Variety of products and good price. This is my go-to beauty shop in Addis!"', initial: 'A', name: 'Abeba T.', role: 'Google Review' },
        { stars: '★★★★★', quote: '"Great beauty shop! Friendly staff and quality products. Highly recommend."', initial: 'S', name: 'Sara M.', role: 'Google Review' },
        { stars: '★★★★★', quote: '"Excellent product selection and quality! The best place for original beauty products and human hair in Addis Ababa."', initial: 'L', name: 'Lidya K.', role: 'Google Review' },
      ],
    },
    // Before & After
    beforeAfter: {
      badge: 'See The Transformation',
      title: 'Before &',
      titleHighlight: 'After',
      desc: 'Real results from real customers. See the transformative power of Kelati Beauty\'s quality products.',
      dragInstruction: '← Drag the slider to compare before and after →',
      products: [
        { name: 'Radiance Vitamin C Serum', beforeLabel: 'Before • Dull, Uneven Tone', afterLabel: 'After • Bright, Radiant', results: '94% saw improved brightness in 8 weeks' },
        { name: 'Retinol Renewal Elixir', beforeLabel: 'Before • Fine Lines Visible', afterLabel: 'After • Smooth & Firm', results: '68% reduction in fine lines after 12 weeks' },
        { name: 'Deep Hydration Cream', beforeLabel: 'Before • Dry, Dehydrated', afterLabel: 'After • Plump, Hydrated', results: '210% increase in skin hydration levels' },
      ],
    },
    // CTA
    cta: {
      title1: 'Visit Our Store',
      title2: 'Today',
      desc: 'Open daily until 9 PM · Bole Medaniyalem Mall, Addis Ababa',
      btn: 'Shop Now',
    },
    // Contact
    contact: {
      heroBadge: 'Get In Touch',
      heroTitle: "Let's",
      heroTitleHighlight: 'Connect',
      heroDesc: 'Have questions about our products, need help finding the right hair or beauty products? We\'d love to hear from you. Visit us in-store or reach out anytime.',
      visitTitle: 'Visit Us',
      visitAddress: ['Medhanialem Building', 'Medhani Alem Building, 1st floor 101', '& 3rd floor 324, Addis Ababa'],
      hoursTitle: 'Store Hours',
      hoursText: ['Open Daily', 'Until 9:00 PM'],
      callTitle: 'Call Us',
      callText: ['+251 96 223 9308', 'Open · Closes 9 PM'],
      formBadge: 'Send a Message',
      formTitle: "We'd Love to",
      formTitleHighlight: 'Hear From You',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'hello@example.com',
      subjectPlaceholder: 'Product Inquiry, Hair Consultation, etc.',
      messagePlaceholder: 'Tell us how we can help you...',
      sendBtn: 'Send Message →',
      sendingBtn: 'Sending...',
      successMsg: '✓ Thank you for reaching out! We\'ll get back to you shortly.',
      faqBadge: 'Frequently Asked',
      faqTitle: 'Quick',
      faqTitleHighlight: 'Answers',
      faqDesc: 'Find answers to common questions before reaching out',
      faqs: [
        { q: 'Do you sell original products only?', a: 'Yes! All our beauty products and human hair are 100% original and sourced directly from trusted manufacturers and suppliers.' },
        { q: 'Where are you located?', a: 'We have two locations: Bole Medaniyalem Mall in Addis Ababa (1st floor 101 & 3rd floor 324) and Naif Deira in Dubai.' },
        { q: 'What types of human hair do you carry?', a: 'We carry a wide range including straight, body wave, curly, and synthetic hair in various lengths and textures.' },
        { q: 'Do you have a mobile app?', a: 'Yes! Download the Kelati Mobile app from Google Play to browse products and shop from anywhere.' },
      ],
    },
    // Footer
    footer: {
      tagline: 'Original beauty products and human hair supply. Addis Ababa & Dubai since 2018.',
      shopTitle: 'Shop',
      shopLinks: ['Human Hair', 'Cosmetics', 'Skincare', 'Beauty Tools'],
      companyTitle: 'Company',
      companyLinks: ['About Us', 'Our Stores', 'Contact', 'Website'],
      connectTitle: 'Connect',
      connectLinks: ['Instagram', 'Telegram', 'Mobile App'],
      phone: '+251 96 223 9308',
      copyright: '© 2026 Kelati Beauty. All rights reserved.',
    },
  },
  am: {
    // Navbar
    nav: {
      products: 'ምርቶች',
      humanHair: 'ሰው ጸጉር',
      about: 'ስለ እኛ',
      contact: 'አግኙን',
      shopNow: 'አሁን ይግዙ',
    },
    // Hero
    hero: {
      badge: 'ኦሪጅናል የውበት ምርቶች እና ሰው ጸጉር',
      title1: 'ውበትዎ',
      title2: 'ምርጡን',
      titleHighlight: 'ይገባዋል',
      desc: 'ከላቲ ቢውቲ — ለኦሪጅናል የውበት ምርቶች፣ ሰው ጸጉር እና ኮስሜቲክስ ታማኝ ምንጭዎ። አዲስ አበባ እና ዱባይ።',
      exploreBtn: 'ምርቶችን ያስሱ',
      storyBtn: 'ስለ እኛ →',
      productLabel: 'ከላቲ ቢውቲ',
      productSub: 'ኦሪጅናል ምርቶች',
      stat1Val: '5.1k+',
      stat1Label: 'ተከታዮች',
      stat2Val: '4.4★',
      stat2Label: 'የGoogle ደረጃ',
      stat3Val: '2',
      stat3Label: 'ቦታዎች',
    },
    // Marquee
    marquee: [
      'ኦሪጅናል ምርቶች', '✦', 'ሰው ጸጉር አቅርቦት', '✦', 'ኮስሜቲክስ እና ውበት', '✦',
      'አዲስ አበባ', '✦', 'ዱባይ', '✦', 'የተረጋገጠ ጥራት', '✦',
      'ኦሪጅናል ምርቶች', '✦', 'ሰው ጸጉር አቅርቦት', '✦', 'ኮስሜቲክስ እና ውበት', '✦',
      'አዲስ አበባ', '✦', 'ዱባይ', '✦', 'የተረጋገጠ ጥራት', '✦'
    ],
    // Features
    features: {
      badge: 'ለምን ከላቲ ቢውቲ',
      title: 'ጥራት ከ',
      titleHighlight: 'እምነት ጋር',
      desc: 'ከላቲ ቢውቲ ለኦሪጅናል የውበት ምርቶች፣ ሰው ጸጉር እና ኮስሜቲክስ ያለ ገደብ ሱቅዎ ነው። በታማኝነት እናስመጣለን በተሰጣት እናገለግላለን — ምርጡን ይመስሉ ምርጡን ይሰማዎት።',
      items: [
        { icon: '✅', title: 'ኦሪጅናል ምርቶች', desc: '100% ኦሪጅናል የውበት ምርቶች እና ሰው ጸጉር ከታመኑ አቅራቢዎች በቀጥታ።' },
        { icon: '💇', title: 'ፕሪሚየም ሰው ጸጉር', desc: 'ትልቁ የሰው ጸጉር አስመጪ — የተለያዩ ዘይቤዎች፣ ሽፋኖች እና ርዝመቶች።' },
        { icon: '💰', title: 'ምርጥ ዋጋ', desc: 'የተለያዩ ምርቶች በተመጣጣኝ ዋጋ። ጥራት ያለው ውበት ውድ መሆን የለበትም።' },
        { icon: '🌍', title: 'ሁለት ቦታዎች', desc: 'አዲስ አበባ (ቦሌ መድሃኒዓለም ሞል) እና ዱባይ (ናይፍ ዴራ) እናገለግልዎታለን።' },
      ],
    },
    // Products
    productsSection: {
      badge: 'ምርቶቻችን',
      title: 'ለውበትዎ',
      titleHighlight: 'የተመረጡ',
      viewAll: 'ሁሉንም ይመልከቱ →',
      items: [
        { category: 'ሰው ጸጉር', name: 'ፕሪሚየም ስትሬት ሰው ጸጉር', desc: 'ከፍተኛ ጥራት ያለው 100% ሰው ጸጉር፣ ቀጥ ያለ ሽፋን። በተለያዩ ርዝመቶች ይገኛል።' },
        { category: 'ኮስሜቲክስ', name: 'ፋውንዴሽን እና ቤዝ ኪት', desc: 'ፕሮፌሽናል ፋውንዴሽን ኪት ለፍጹም ሽፋን እና ተፈጥሯዊ ውጤት።' },
        { category: 'የቆዳ እንክብካቤ', name: 'ግሎው ብራይትኒንግ ሴረም', desc: 'ቫይታሚን C እና ሃያሉሮኒክ አሲድ ያለው ብራይትኒንግ ፎርሙላ ለፀሐያማ ቆዳ።' },
        { category: 'ሰው ጸጉር', name: 'ቦዲ ዌቭ ሰው ጸጉር', desc: 'ውብ ቦዲ ዌቭ ሽፋን፣ 100% ሰው ጸጉር። ተፈጥሯዊ ገጽታ።' },
        { category: 'የውበት መሳሪያዎች', name: 'ፕሮፌሽናል ሜክአፕ ብሩሽ ሴት', desc: 'ለፕሮፌሽናል አጠቃቀም ሙሉ ፕሪሚየም ሜክአፕ ብሩሽ ስብስብ።' },
        { category: 'የቆዳ እንክብካቤ', name: 'ሃይድሬቲንግ ፌስ ክሊንሰር', desc: 'ከአሎ ቬራ እና ካሞሚል ጋር ለስላሳ ዕለታዊ ክሊንሰር።' },
        { category: 'ኮስሜቲክስ', name: 'ማት ሊፕስቲክ ኮሌክሽን', desc: 'ረዥም ጊዜ የሚቆይ ማት ሊፕስቲክ በተለያዩ ውብ ቀለሞች።' },
      ],
    },
    // Ritual
    ritual: {
      badge: 'ልምዱ',
      title: 'የውበት',
      titleHighlight: 'ጉዞዎ',
      steps: [
        { num: '01', title: 'ያስሱ', desc: 'ሰፊ የኦሪጅናል የውበት ምርቶች፣ ሰው ጸጉር እና ኮስሜቲክስ ምርጫዎቻችንን በሱቅ ወይም በመስመር ላይ ያስሱ።' },
        { num: '02', title: 'ያማክሩ', desc: 'ተግባቢ እና ባለሙያ ሰራተኞቻችን ለፍላጎትዎ ትክክለኛውን ምርት እንዲያገኙ ይረዱዎታል።' },
        { num: '03', title: 'ይምረጡ', desc: 'ከተመጣጣኝ ዋጋ ጋር ከተመረጡ ጥራት ያላቸው ብራንዶች እና ዘይቤዎች ይምረጡ።' },
        { num: '04', title: 'ያብሩ', desc: 'እውነተኛ ውጤት የሚሰጡ ፕሪሚየም የውበት ምርቶች ይዘው በራስ መተማመን ይውጡ።' },
      ],
    },
    // Testimonials
    testimonials: {
      badge: 'የደንበኞች ግምገማዎች',
      title: 'ደንበኞቻችን',
      titleHighlight: 'ምን ይላሉ',
      items: [
        { stars: '★★★★★', quote: '"የተለያዩ ምርቶች እና ጥሩ ዋጋ። በአዲስ አበባ ውስጥ ተወዳጅ የውበት ሱቄ ነው!"', initial: 'አ', name: 'አበባ ተ.', role: 'የGoogle ግምገማ' },
        { stars: '★★★★★', quote: '"ግሩም የውበት ሱቅ! ተግባቢ ሰራተኞች እና ጥራት ያላቸው ምርቶች። በጣም እመክራለሁ።"', initial: 'ሳ', name: 'ሳራ መ.', role: 'የGoogle ግምገማ' },
        { stars: '★★★★★', quote: '"ምርጥ የምርት ምርጫ እና ጥራት! በአዲስ አበባ ለኦሪጅናል የውበት ምርቶች እና ሰው ጸጉር ምርጥ ቦታ።"', initial: 'ል', name: 'ልድያ ከ.', role: 'የGoogle ግምገማ' },
      ],
    },
    // Before & After
    beforeAfter: {
      badge: 'ለውጡን ይመልከቱ',
      title: 'በፊት እና',
      titleHighlight: 'በኋላ',
      desc: 'ከእውነተኛ ደንበኞች እውነተኛ ውጤቶች። የከላቲ ቢውቲ ጥራት ያላቸው ምርቶች ኃይል ይመልከቱ።',
      dragInstruction: '← በፊት እና በኋላ ለማነፃፀር ስላይደሩን ይጎትቱ →',
      products: [
        { name: 'ራዲያንስ ቫይታሚን C ሴረም', beforeLabel: 'በፊት • ደብዛዛ ቆዳ', afterLabel: 'በኋላ • ብሩህ፣ ፀሐያማ', results: '94% በ8 ሳምንታት ውስጥ መሻሻል አይተዋል' },
        { name: 'ሬቲኖል ሪኒውአል ኤሊክሰር', beforeLabel: 'በፊት • ጥቃቅን መስመሮች', afterLabel: 'በኋላ • ለስላሳ እና ጠንካራ', results: 'በ12 ሳምንታት ውስጥ 68% ቅነሳ' },
        { name: 'ዲፕ ሃይድሬሽን ክሪም', beforeLabel: 'በፊት • ደረቅ ቆዳ', afterLabel: 'በኋላ • ለስላሳ፣ እርጥብ', results: '210% የቆዳ እርጥበት ጭማሪ' },
      ],
    },
    // CTA
    cta: {
      title1: 'ሱቃችንን ይጎብኙ',
      title2: 'ዛሬ',
      desc: 'በየቀኑ እስከ ምሽት 9 ሰዓት ድረስ ክፍት · ቦሌ መድሃኒዓለም ሞል፣ አዲስ አበባ',
      btn: 'አሁን ይግዙ',
    },
    // Contact
    contact: {
      heroBadge: 'አግኙን',
      heroTitle: 'እንገናኝ',
      heroTitleHighlight: '',
      heroDesc: 'ስለ ምርቶቻችን ጥያቄ አለዎት፣ ትክክለኛውን ጸጉር ወይም የውበት ምርቶች ለማግኘት ያስፈልግዎታል? ከእርስዎ ለመስማት ደስ ይለናል። በሱቅ ይጎብኙን ወይም በማንኛውም ጊዜ ያግኙን።',
      visitTitle: 'ይጎብኙን',
      visitAddress: ['መድሃኒዓለም ህንፃ', 'መድሃኒ ዓለም ህንፃ፣ 1ኛ ፎቅ 101', 'እና 3ኛ ፎቅ 324፣ አዲስ አበባ'],
      hoursTitle: 'የስራ ሰዓት',
      hoursText: ['በየቀኑ ክፍት', 'እስከ ምሽት 9:00 ሰዓት'],
      callTitle: 'ይደውሉልን',
      callText: ['+251 96 223 9308', 'ክፍት · እስከ ምሽት 9 ሰዓት ይዘጋል'],
      formBadge: 'መልዕክት ይላኩ',
      formTitle: 'ከእርስዎ ለመስማት',
      formTitleHighlight: 'ደስ ይለናል',
      nameLabel: 'ሙሉ ስም',
      emailLabel: 'ኢሜይል አድራሻ',
      subjectLabel: 'ርዕሰ ጉዳይ',
      messageLabel: 'መልዕክት',
      namePlaceholder: 'ስምዎን ያስገቡ',
      emailPlaceholder: 'hello@example.com',
      subjectPlaceholder: 'የምርት ጥያቄ፣ የጸጉር ምክር፣ ወዘተ.',
      messagePlaceholder: 'እንዴት ልንረዳዎ እንደምንችል ይንገሩን...',
      sendBtn: 'መልዕክት ይላኩ →',
      sendingBtn: 'በመላክ ላይ...',
      successMsg: '✓ ስላገኙን እናመሰግናለን! በቅርብ ጊዜ እንመልሳለን።',
      faqBadge: 'በተደጋጋሚ የሚጠየቁ',
      faqTitle: 'ፈጣን',
      faqTitleHighlight: 'መልሶች',
      faqDesc: 'ከመጠየቅዎ በፊት ለተለመዱ ጥያቄዎች መልሶችን ያግኙ',
      faqs: [
        { q: 'ኦሪጅናል ምርቶችን ብቻ ይሸጣሉ?', a: 'አዎ! ሁሉም የውበት ምርቶቻችን እና ሰው ጸጉር 100% ኦሪጅናል ሲሆን ከታመኑ አምራቾች እና አቅራቢዎች በቀጥታ ይመጣሉ።' },
        { q: 'የት ይገኛሉ?', a: 'ሁለት ቦታዎች አሉን: በአዲስ አበባ ቦሌ መድሃኒዓለም ሞል (1ኛ ፎቅ 101 እና 3ኛ ፎቅ 324) እና በዱባይ ናይፍ ዴራ።' },
        { q: 'ምን ዓይነት ሰው ጸጉር አላችሁ?', a: 'ቀጥ ያለ፣ ቦዲ ዌቭ፣ ኮርሊ እና ሰው ሰራሽ ጸጉር በተለያዩ ርዝመቶች እና ሽፋኖች ይገኛሉ።' },
        { q: 'ሞባይል አፕ አላችሁ?', a: 'አዎ! ምርቶችን ለማሰስ እና ከየትኛውም ቦታ ለመግዛት ከGoogle Play ላይ ከላቲ ሞባይል አፕን ያውርዱ።' },
      ],
    },
    // Footer
    footer: {
      tagline: 'ኦሪጅናል የውበት ምርቶች እና ሰው ጸጉር አቅርቦት። አዲስ አበባ እና ዱባይ ከ2018 ጀምሮ።',
      shopTitle: 'ሱቅ',
      shopLinks: ['ሰው ጸጉር', 'ኮስሜቲክስ', 'የቆዳ እንክብካቤ', 'የውበት መሳሪያዎች'],
      companyTitle: 'ኩባንያ',
      companyLinks: ['ስለ እኛ', 'ሱቆቻችን', 'አግኙን', 'ድህረ ገጽ'],
      connectTitle: 'ያገኙን',
      connectLinks: ['ኢንስታግራም', 'ቴሌግራም', 'ሞባይል አፕ'],
      phone: '+251 96 223 9308',
      copyright: '© 2026 ከላቲ ቢውቲ። መብቶች በሙሉ የተጠበቁ ናቸው።',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('am');

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
