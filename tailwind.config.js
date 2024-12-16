/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      fontSize: {
        'custom-xxs': '10px',
        'custom-xs': '13px',
        'custom-2xl': '22px',
        'custom-3xl': '32px',
        'custom-6xl': '64px',
        'custom-xl': '22px',
      },
      lineHeight: {
        'custom-md': '115%',
        'custom-2md': '121%',
        'custom-lg': '125%',
        'custom-2lg': '133%',
        'custom-3lg': '141%',
        'custom-xl': '175%',
        'custom-2xl': '225%',
      },
      colors: {
        gray: '#525252',
        blue: '#0046AD',
        darkblue: '#191A42',
        lightgray: '#C9CAD4',
        lightblue: '#24254B',
        purple: '#7C7DB9',
        sky: '#48C3D7',
        darkpurple: '#111235',
        pink:'#f7f9fb',
      }
    },
  },
  plugins: [],
};
