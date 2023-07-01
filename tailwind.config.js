/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      sm: '480px',
      md: '790px',
      lg : '835px',
      xl :'1280px'
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
      Rubik: ['Rubik', 'sans-serif']
    },
    extend: {
      colors: {
        customPink: '#F71B5D',
        backgroundBlack: '#0B0B0B',
        grayish: 'rgba(223, 220, 220, 0.75)'
      }
    },
  },
  plugins: [],
}

