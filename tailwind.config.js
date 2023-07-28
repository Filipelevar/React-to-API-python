/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#CBD736',
        'brow-border': '#606060',
        'gray-placeholder': '#9F9F9F',
      },
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-filters')],
}

