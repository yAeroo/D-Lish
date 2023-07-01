/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      height: {
        '22': '77px'
      },
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
        'body': ['Nunito', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  // Personalización modo oscuro
  daisyui: {
    base: true,
    themes: [
      {
        mytheme: {
          "primary": "#4eb168",
          "secondary": "#6d28d9",
          "accent": "#242f5b",
          "neutral": "#1B2336",
          "base-100": "#141414",
          "info": "#6d28d9",
          "success": "#4eb168",
          "warning": "#f2d95c",
          "error": "#ec6718",
        },
      },
    ],
  },
  plugins: [
    // DaisiUI 
    require("daisyui"),
    require("tailwindcss-animated")
  ],
}

