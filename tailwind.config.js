/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[app-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
