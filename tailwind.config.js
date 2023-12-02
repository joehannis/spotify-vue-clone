/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#1DB954',
        dark: '#121212',
        light: '#282828',
        lighter: '#B3B3B3',
        darkest: '#191414'
      }
    }
  },
  plugins: []
}
