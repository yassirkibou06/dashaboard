/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Mont' : ['Montserrat','sans-serif'],
      },
      colors: {
        'one': '#ffffff',
        'two': '#dcd8fd',
        'three': '#7046e6',
        'four': '#f9fafc',
        'five': '#d67875',
        'six': '#90939a',
        'seven': '#687287',
        'boClr': '#f6f6f6',
        'tClr': '#8c909b'
      },
      gridTemplateColumns: {
        'open': '270px 700px 396px',
        'close': '60px 904px 396px',
      },
      gridTemplateRows: {
        'Ropen': '82px 1fr 1fr',
      },
      borderRadius: {
        'ROne': '10px'
      }
    },
  },
  plugins: [],
}