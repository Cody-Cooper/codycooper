module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'off', // allow commits to happen, problem with key in hamburger and headerNavLinks
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'react/no-unescaped-entities': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
