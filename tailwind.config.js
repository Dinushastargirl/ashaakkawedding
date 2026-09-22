/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          950: '#140322',
          900: '#230738',
          850: '#2e0a4a',
          800: '#3c1061',
          700: '#521782',
          600: '#6d23a6',
          500: '#8e38d4',
          300: '#c59aee',
          200: '#dfcbf7',
          100: '#efe6fb',
          50: '#f9f6fd',
        },
        plum: {
          900: '#380d35',
          800: '#4e144a',
          700: '#641b5f',
          600: '#83277d',
        },
        gold: {
          300: '#f3dea2',
          400: '#e5c578',
          500: '#d4af37',
          600: '#b08a3f',
          700: '#8c6d2a',
        },
        ivory: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f3ebe0',
          300: '#e8dcce',
          900: '#2c251e',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'foil-sheen': 'foilSheen 8s ease-in-out infinite',
        'subtle-pulse': 'subtlePulse 4s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
      },
      keyframes: {
        foilSheen: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      }
    },
  },
  plugins: [],
}
