/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      "yellow" : "#f5c32c",
      "orange": "#fca61f",
      "black": "#242d49",
      "gray": "rgba(36, 45, 73, 0.65)",
      "profileShadow": "0px 4px 17px 2px rgba(0, 0, 0, 0.25)",
      "cardColor": "rgba(255, 255, 255, 0.64)",
    "buttonBg": "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
    "inputColor": "rgba(40, 52, 62, 0.07)",
    "blur-bg": "#a6ddf0",
    "background-color": "#f3f3f3",
    "hrColor": "#cfcdcd",
    "textred":"#FE1010"
      }
    },
  },
  plugins: [],
}