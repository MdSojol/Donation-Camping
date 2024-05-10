/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body_backgrounds': "url('./public/Home_Backgrounds.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

