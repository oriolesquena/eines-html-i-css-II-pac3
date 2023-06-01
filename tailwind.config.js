/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      'dark-green': '#001f06',
      'light-green': '#c8eba6',
      'light-gray': '#d5dcd7',
      lime: colors.lime,
      green: colors.green,
    },
  },
  plugins: [],
};
