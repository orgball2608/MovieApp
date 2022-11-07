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
        primary: '#5179ff',
        dark: '#191a1f',
        'dark-2': '#1e1f24',
        'light-2': '#9696a3',
        'my-red': '#d22f27',
        'dark-light': '#fdfdfd'
      }
    }
  },
  plugins: []
}
