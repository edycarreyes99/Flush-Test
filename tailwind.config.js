/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'flush-link': 'rgba(255, 255, 255, 0.1)',
        'flush-background': '#101315',
        'flush-button-hover': 'rgba(255, 255, 255, 0.1)',
        'flush-button-active': 'rgba(255, 255, 255, 0.2)',
        'black-transparent': 'rgba(0, 0, 0, 0.2)',
        'flush-yellow': '#FFB320'
      },
      borderColor: {
        'flush-gray': 'rgba(255, 255, 255, 0.5)',
      },
      textColor: {
        'flush-gray': 'rgba(255, 255, 255, 0.5)'
      }
    },
  },
  plugins: [],
}

