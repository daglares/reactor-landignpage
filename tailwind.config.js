
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-magenta': '#e91e63',
        'brand-yellow': '#ffeb3b',
        'brand-blue': '#2198f3',
      }
    },
  },
  plugins: [],
}

