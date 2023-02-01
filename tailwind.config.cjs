/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'greyHero':'#63676A',
      'textHero':'#EBEBEC',
      'blackNavbar':'#1D1A19',
      'black':'#000000',
    },
  },
  plugins: [],
}