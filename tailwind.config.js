/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This sets Source Sans Pro as the default font
        sans: ['"Mulish"', 'sans-serif'], // Changed from Source Sans Pro
      },
      colors: {
        brand: {
          dark: '#18274A', 
        }
      }
    },
  },
  plugins: [],
}