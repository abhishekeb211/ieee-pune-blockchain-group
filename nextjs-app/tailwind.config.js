/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ieee-primary': '#007175',
        'ieee-dark': '#005A5E',
        'ieee-navy': '#008B8B',
        'ieee-ink': '#333333',
        'ieee-nearblack': '#001E3D',
        'ieee-cyan': '#0099D8',
        'ieee-brightcyan': '#00B4D8',
        'ieee-gold': '#FFB81C',
        'ieee-golddark': '#E09B00',
        'ieee-success': '#15803D',
        'surface': '#FFFFFF',
        'surface-muted': '#F4FBFA',
        'footer-main': '#091A2B',
        'footer-deep': '#05101D',
      },
      screens: {
        fold: '280px',
        phone: '375px',
        phablet: '480px',
        desktop: '1440px',
        fhd: '1920px',
        uw: '2560px',
      },
      fontSize: {
        display: ['clamp(1.75rem, 4vw + 0.5rem, 3.25rem)', { lineHeight: '1.15', fontWeight: '800' }],
        'heading-1': ['clamp(1.75rem, 2vw + 1rem, 2.75rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-2': ['clamp(1.5rem, 1vw + 1rem, 2.25rem)', { lineHeight: '1.25', fontWeight: '700' }],
      },
      borderRadius: {
        card: '12px',
        panel: '16px',
        sheet: '24px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-soft': '0 2px 8px -2px rgba(0, 40, 85, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 8px 18px -6px rgba(0, 102, 153, 0.18)',
      },
    },
  },
  plugins: [],
}
