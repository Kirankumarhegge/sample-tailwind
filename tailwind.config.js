/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'xs': '75px',
      // => @media (min-width: 475) { ... }

      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1340px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
