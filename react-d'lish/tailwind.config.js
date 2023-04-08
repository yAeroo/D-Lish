/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Colores propios D'lish
        base: 'fcf8f8',
        prim: '#ec6718',
        secu: '#242f5b',
        terc: '#ec6718',
      },
      fontFamily: {
        title: ['Trebuchet MS'],
        plane: ['Nunito']
      }
    },
  },
  plugins: [],
}

