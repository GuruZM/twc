/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.animate-vertical-spin': {
          animation: 'vertical-spin 1s linear infinite',
        },
      });
    },
  ],
  keyframes: {
    'vertical-spin': {
      '0%': {
        transform: 'rotateX(0deg)',
      },
      '100%': {
        transform: 'rotateX(360deg)',
      },
    },
  },
}
