/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: ["light","dark"],
},
  theme: {
    extend: {
      colors: {
        light:"#F4F4F4",
        lighttext:"#000000",
        lighttext2:"#465350",
        mauve : "#8967AA"
      },
      minWidth: {
        '1/5': '20%',
        '1/4': '25%',
        'card': '250px',
      },
      maxWidth: {
        '1/5': '20%',
      }
    
    },
  },
  corePlugins: {
    // ...
    scrollBehavior: false,
  },
  plugins: [],
}