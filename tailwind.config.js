/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'flush-gradient': 'linear-gradient(358.1deg, rgba(95, 159, 255, 1), rgba(43, 43, 43, 1))',
      },
      backgroundColor:{
        'flush-link': 'rgba(255, 255, 255, 0.1)',
        'flush-background': '#101315',
      },
      borderColor: {
        'flush-gray': 'rgba(255, 255, 255, 0.5)',
      },
      textColor: {
        'flush-gray': 'rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [],
}

