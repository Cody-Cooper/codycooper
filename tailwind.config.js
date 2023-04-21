const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    nightwind: {
      colors: {
        stone: {
          200: 'stone.900',
          900: 'stone.200',
        },
        gray: {
          100: 'gray.900',
          400: 'gray.500',
          500: 'gray.400',
          900: 'gray.100',
        },
      },
    },
    extend: {
      spacing: {
        '9/16': '56.25%',
        halvsies: '50vh',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['monospace', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.emerald,
        gray: colors.stone,
      },
      typography: (theme) => ({
        stone: {
          css: {
            '--tw-prose-body': theme('colors.stone[900]'),
            '--tw-prose-hr': theme('colors.stone[500]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('nightwind')],
}
