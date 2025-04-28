import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [],
};

export default config;