/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: '#1a1a1a',
        secondary: '#4a4a4a',
        accent: '#0077b6', // Adjust this for your style
      },
    },
  },
  plugins: [],
};