/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    dropShadow:{
      'drop':'0px 0px 20px purple'
    },
    
    borderRadius:{
      'custom':'38% 62% 53% 47% / 56% 23% 77% 44%',
      'xl':'10px'
    }
  },
  plugins: [],
}