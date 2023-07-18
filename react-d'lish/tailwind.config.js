/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      height: {
        '22': '77px',
        '450': '450px',
        '280': '280px',
      },
      width: {
        '380': '380px',
        '50': '50%',

      },
      maxWidth: {
        '8xl': '86rem',
      },

      fontSize: {
        '50': '50%',
      },
      dropShadow: {
        '4xll': '4px 4px 17px rgba(0,0,0,0.76)',
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
          "secondary": "#EC6718",
          "accent": "#242f5b",
          "neutral": "#1B2336",
          "base-100": "#141414",
          "info": "#EC6718",
          "success": "#4eb168",
          "warning": "#F25C5C",
          "error": "#EE2F2F",
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

