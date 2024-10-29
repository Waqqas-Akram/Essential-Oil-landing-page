/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Adjust based on your project
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors:{
        custom: '#202e24',
        primary: '#406b39',
        secondary: '#8f4726',
      },
      fontFamily:{
        poppins:['Poppins' , 'sans-serif'],
        opens:['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


