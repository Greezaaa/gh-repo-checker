/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 300ms ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity:1 },
        },
      }),
      colors: { 
        primary: "#58a6ff",
        dark:"#0D1117",
      },
    },
  },
  plugins: [],
}
