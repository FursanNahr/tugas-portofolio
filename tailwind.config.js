/* @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      content: ['after', 'before'],
      colors: {
        Bg: '#1f2547',
        BgContainer: '#181e39',
        bgHover: '#4d62cb',
      },
      transitionProperty: {
        'width': 'width'
      },
      keyframes: {
        'scroll-down': {
          '0%': { transform: 'translateY(-1rem)', opacity: '0' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(1rem)', opacity: '0' },
        }
      },
      animation: {
        'scroll-down': 'scroll-down 3s infinite',
      },
      screens: {
        'sm-desktop': { 'max': '1150px' },
        'md': { 'max': '768px' },
        '2sm': { 'max': '538px' },
        'sm': { 'max': '390px' },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}