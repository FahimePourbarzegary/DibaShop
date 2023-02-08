/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      dark: "#1A202C",
      white: "#FFFFFF",
      transparent: "transparent",
      current: "currentColor",
      primary: {
        100: "#FFE488",
        200: "#FFD96B",
        300: "#FDE047",
        400: "#F59E0B",
      },
      gray: {
        100: "#C3D4E9",
        300: "#596780",
      },
      warning: "#FF0F0F",
    },
    extend: {
      fontFamily: {
        vazirBold: ["vazir-bold", "sans-serif"],
        vazirLight: ["vazir-light", "sans-serif"],
        vazirMedium: ["vazir-medium", "sans-serif"],
        vazirThin: ["vazir-thin", "sans-serif"],
        vazirRegular: ["vazir-regular", "sans-serif"],
      },
    },
  },

  plugins: [],
};
