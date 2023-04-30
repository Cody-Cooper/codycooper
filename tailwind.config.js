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
        neutral: {
          300: "stone.800",
        },
        green: {
          700: "green.500",
        },
      },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.stone[900]"),
            "--tw-prose-hr": theme("colors.stone[500]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("nightwind")],
};
