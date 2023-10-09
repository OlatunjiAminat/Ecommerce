/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        "light-black" : "rgb(16, 16, 16)",
        "deep-black" : "rgb(0, 0, 0)",
        "deep-brown" : "rgb(216, 125, 74)",
        "light-brown" : "rgb(251, 175, 133)",
        "deep-white" : "rgb(241, 241, 241)",
        "light-white" : "rgb(250, 250, 250)",
        "pure-white" : "rgb(255, 255, 255)",
      },
      fontFamily: {
        "manrope": "Manrope"
      }
      
    },
  },
  plugins: [],
}
