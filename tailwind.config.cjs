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
    extend: {
      width: {
        '100': '350px',
        '104': '400px',
      },
      height: {
        '118': '550px',
        '124': '600px'
      }
    },
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