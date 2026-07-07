/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: 'var(--font-playfair), serif',
        sans: 'var(--font-inter), sans-serif',
      },
      colors: {
        'brand-yellow': '#facc15',
        'brand-yellow-hover': '#eab308',
        'brand-dark': '#111111',
        'brand-gray': '#f3f4f6',
        'brand-red': '#ef4444',
      },
    },
  },
  plugins: [],
}