/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{html,js}', '!./node_modules/**/*'],
  theme: {
    extend: {
      fontFamily: {
        largeFont: ['Outfit', 'sans-serif'],
        smallFont: ['Manrope', 'sans-serif'],
        headerFooter: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#D1DBDD',
          DEFAULT: '#76979C',
          dark: '#3C3D40',
        },
        highlight: '#4C8891',
      },
      screens: {
        xs: '460px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        '3xl': '0 10px 30px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
  important: true,
};
