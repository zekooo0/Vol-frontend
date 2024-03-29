/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
<<<<<<< HEAD
  plugins: [require('flowbite/plugin')],
=======
>>>>>>> 2f8058fee77ec65ae578a46da984be42865518a4
};
