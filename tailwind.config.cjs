/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xs:'368px',
      ...defaultTheme.screens,
    },
    extend: {},
    colors: {
      'greyHero':'#63676A',
      'textHero':'#EBEBEC',
      'blackNavbar':'#1D1A19',
      'black':'#000000',
      'bg-social':'#C4C4C4'
    },
  },
  plugins: [],
}