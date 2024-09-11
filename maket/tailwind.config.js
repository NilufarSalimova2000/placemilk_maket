/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        padding: "20px",
        center: true,
        screens: {
          lg: "1320px"
        }
      }
    },
  },
  plugins: [],
}

