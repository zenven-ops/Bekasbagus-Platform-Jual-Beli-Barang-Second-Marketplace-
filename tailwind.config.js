/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A4B8C',
        'secondary': '#D9E4FF',
        'dark': '#333333',
        'graytxt': '#666666',
        'bdr': '#EAEAEA',
        'lightbg': '#F9F9F9',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'logo': ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
}