/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow Condensed", "sans-serif"],
        Bebas: ["Bebas Neue", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },

  },
  plugins: [],
}
