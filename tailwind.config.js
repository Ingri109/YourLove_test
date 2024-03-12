/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      color1: '#FFCDB2',
      color2: '#FFB4A2',
      color3: '#E5989B',
      color4: '#6D6875',
      color5: '#B5838D',
      black: '#131313',
      white: '#FFFFFF',
      red: '#C21717',
      online: '#24DD2B',
      ofline: '#DC0000',
      IDK: '#626262',
      not_disturb: '#FFE600'
    },
    extend: {
      fontFamily:{
        Source: ["Source Serif 4", "serif"],
        Caveats: ["Caveat", "cursive"],
      }
    },
  },
  plugins: [],
}
