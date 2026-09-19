import type { Config } from 'tailwindcss';

// Design tokens extracted from nature_portfolio_template.txt
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Earthy, calming color palette
        oat: '#F4F3ED', // Soft background
        stone: '#E5E4DB', // Slightly darker structural background
        sage: '#9EB0A2', // Calming green accent
        forest: '#2A3C24', // Deep green for primary text
        clay: {
          DEFAULT: '#C99E87', // Warm terracotta accent
          dark: '#b88c75', // Terracotta hover state
        },
        sand: '#D5CDA9', // Soft yellow-ish accent
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'DM Serif Display', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(42, 60, 36, 0.08)',
        'hover-soft': '0 20px 40px -10px rgba(42, 60, 36, 0.12)',
      },
      borderRadius: {
        // Bento card radius used throughout the template
        bento: '2.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
