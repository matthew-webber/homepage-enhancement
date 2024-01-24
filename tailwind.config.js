/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
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
