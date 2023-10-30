/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        '10%': '10%',
        '15%': '15%',
      },
      fontFamily: {
        railway: ['"Raleway"', 'sans'],
      },
      fontSize: {
        '16': '16px',
        '90': '90px',
        '50': '50px'
      },
      fontWeight: {
        '500': '500',
        '400': '400',
        '700': '700',
        '600': '600',
      },
      textColor: {
        '#fff': '#fff',
      },
      backgroundColor: {
        '#4e535a': '#4e535a'
      },
      lineHeight: {
        '90': '90px'
      },
      boxShadow: {
        '3xl': '0px 4px 8px rgba(239, 239, 239, 0.7)',
      }
    },
  },
  plugins: [],
}

