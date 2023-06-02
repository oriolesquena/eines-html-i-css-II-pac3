/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Abril Fatface', ...defaultTheme.fontFamily.serif],
      },
      width: {
        '30%': '30%',
        '45%': '45%',
      },
      minHeight: {
        'members-info': '13rem',
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
      boxShadow: {
        members: '0 0 5px 0.1px #d5dcd7',
      },
      backgroundImage: {
        portada: "url('/src/assets/images/bg-portada.jpg')",
        logo: "url('/src/assets/images/logo.png')",
        championship: "url('/src/assets/images/bg-campionat.jpeg')",
      },
      backgroundSize: {
        'size-logo': '130px',
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
