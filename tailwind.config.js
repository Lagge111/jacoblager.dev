/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        primary_text: "#CCD6F6",
        secondary: "#61F9D5",
        secondary_text: "#8892B0",
        misc_light: "#112240",
        misc_dark: "#0b1123",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "sans-serif"],
      },
      minHeight: {
        full: "750px",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
