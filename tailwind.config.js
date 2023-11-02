/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      main_font: ['Open Sans',]
    },
    extend: {
      maxWidth: {
        container_size: '1320px',
      }
    },
  },
  plugins: [],
}

