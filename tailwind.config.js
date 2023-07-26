/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        CBD736: "#CBD736",
      },
    },
  },
  plugins: [require('tailwindcss-filters')],
}

