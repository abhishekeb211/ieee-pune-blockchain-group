/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ieee-primary': '#006699',
        'ieee-dark': '#004B75',
        'ieee-navy': '#002855',
        'ieee-nearblack': '#001E3D',
        'ieee-cyan': '#0099D8',
        'ieee-brightcyan': '#00B4D8',
        'ieee-gold': '#FFB81C',
        'ieee-golddark': '#E09B00',
        'footer-main': '#091A2B',
        'footer-deep': '#05101D',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-soft': '0 2px 8px -2px rgba(0, 40, 85, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 8px 18px -6px rgba(0, 102, 153, 0.18)',
      },
    },
  },
  plugins: [],
}
