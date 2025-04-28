/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Semua file di dalam src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c304d", // blue bg
        secondary: "#9333EA", // purple
        colorGray: "#828a98", // gray text
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
  plugins: ["styled-components"],
};