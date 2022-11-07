/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // theme: {
  //   extend: {
  //     colors: {
  //       sky: colors.sky,
  //       teal: colors.teal,
  //       rose: colors.rose,
  //     },
  //   },
  // },
}