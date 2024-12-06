/** @type {import('tailwindcss').Config} */
const textShadowPlugin = require('tailwindcss-textshadow');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        custom: '0 4px 4px rgba(0, 0, 0, 0.25)', 
      },
    },
  },
  plugins: [
    textShadowPlugin,
  ],
}