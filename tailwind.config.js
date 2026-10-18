// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'fadeUp': 'fadeUp 0.8s ease both',
        'fadeIn': 'fadeIn 1.2s ease both',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      spacing: {
        '5.5': '1.375rem',
        '9.5': '2.375rem',
        '8.5': '2.125rem',
      },
      zIndex: {
        '99': '99',
        '100': '100',
      },
    },
  },
  plugins: [],
}