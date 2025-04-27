/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2c304d", // blue bg
        secondary: "#9333EA", // none
        colorGray: "#828a98", // gray text
        Gradient: "linear-gradient(to right, #0f1724, #0f1724)",
        Gradient2: "linear-gradient(to right, #0f1724, #9333EA)",
      },
      spacing: {
        72: "18rem", // custom spacing
        84: "21rem",
        96: "24rem",
      },
      fontSize: {
        xxs: "0.625rem", // custom font size
      },
    },
  },
  plugins: [],
};
