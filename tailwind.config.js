/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      custom: ['CustomFont', 'sans-serif'],
    },
    animation: {
      text: 'text 2.5s ease infinite',
      fadeIn: 'fadeIn 0.3s ease-in',
    },
    transitions: {
      'fade-in': 'opacity 0.5s ease-in',
    },
    keyframes: {
      text: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
    extend: {},
  },
  plugins: [],
}
}
