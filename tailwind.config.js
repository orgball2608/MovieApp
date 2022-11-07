/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        180: '45rem',
        80: '20rem'
      },
      colors: {
        'black-lighten': '#161616',
        primary: '#5179ff',
        'gray-lighten': '#989898',
        'gray-darken': '#3a3939',
        dark: '#1C1C1E',
        'dark-darken': '#19191b',
        'dark-lighten': '#333335',
        'dark-lighten-2': '#49494b'
      }
    }
  },
  plugins: []
}
