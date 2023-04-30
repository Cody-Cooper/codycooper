/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    nightwind: {
      colors: {
        stone: {
          200: "stone.900",
          900: "stone.200",
        },
        gray: {
          100: "gray.900",
          400: "gray.500",
          500: "gray.400",
          900: "gray.100",
        },
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("nightwind")],
};
