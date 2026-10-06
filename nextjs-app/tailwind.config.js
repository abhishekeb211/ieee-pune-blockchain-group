/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ieee-navy': '#00274D',
        'ieee-blue': '#00629B',
        'ieee-gold': '#F5A623',
        'chain-teal': '#0FBFB8',
        'chain-purple': '#5B4FE9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
