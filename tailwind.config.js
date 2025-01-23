/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-primary': '#DEDEDE',
        'gray-secondary': '#D0D0D0',
        'orange-primary': '#FF6231',
        'black-primary': '#283841',
      },
    },
  },
  plugins: [],
}