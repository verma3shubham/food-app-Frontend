/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        blue:"#4d4dff",
        red:"#cc0000",
        secondary:"#555",
        primaryBG:"#e6e6e6",
        green:" #ffa31a",
        dark:"#00004d",
        light:"#eff5ef",
        yellow:"#ffd633",
        liblue:"#cce0ff",
        rblue:" #0052cc",
        grey:"#cccccc",
      
      },
      fontFamily:{
        "primary" : ['Public Sans',"sans-serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

