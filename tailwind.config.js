/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  prefix: 'tw-',
  content: ['./src/templates/*.js', './src/index.html'],
  theme: {
    extend: {
      screens: {
        md: '676px',
        lg: '1051px',
      },
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
      colors: {
        'musc-blue': '#00447c',
      },
    },
  },
  plugins: [],
};
