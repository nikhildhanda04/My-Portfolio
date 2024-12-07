const textShadowPlugin = require('tailwindcss-textshadow');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
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
};
