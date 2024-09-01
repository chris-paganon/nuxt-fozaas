/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,vue,ts}', './plugins/**/*.{js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
};
