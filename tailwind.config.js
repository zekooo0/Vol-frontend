/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['bg-home-image'],
    },
  },
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
      backgroundImage: {
        'home-image': "url('./public/home-img.jpg')",
      },
    },
  },
  plugins: [],
};
