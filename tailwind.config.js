/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Abril Fatface", "cursive"],
        gara: ["Cormorant Garamond", "serif"],
        custom: ["Montserrat", "sans-serif"],
      },
      colors: {
        base: "#0057ff",
        "base-dark": "#003daa",
        "base-light": "#0072ff",
        white: "#ffffff",
        black: "#000000",
        para: "333333",
      },
      fontFamily: {
        head: ["QueensidesMedium", "sans-serif"],
        main: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "light-card":
          "-12px -12px 12px 0 rgba(58, 58, 58, 0.3),12px 12px 12px 0 rgba(0,0,0,.2)",
        "light-button":
          "6px 6px 8px 0 rgba(255, 255, 255, 0.3), -4px -4px 6px 0 rgba(0, 0, 0, .25)",
        glass: "0 0 1rem 0 rgba(0, 0, 0, .2)",
      },
    },
  },
  plugins: [],
};
