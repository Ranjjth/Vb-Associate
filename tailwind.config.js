/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: '#1E3A8A', 
      },
      animation: ['motion-safe'],

    },
  },
  plugins: [],
}