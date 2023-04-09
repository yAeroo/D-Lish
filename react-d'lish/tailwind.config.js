/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Colores propios Dlish
        base: '#fcf8f8',
        prim: '#ec6718',
        secu: '#242f5b',
        terc: '#4eb168',
      },
      fontFamily: {
        // Fuente propia Dlish
        title: ['Trebuchet MS'],
        // Fuente para textos planos
        plane: ['Nunito']
      }
    },
  },
  plugins: [],
}

