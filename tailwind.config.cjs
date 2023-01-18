
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
          colors: {
          primary: "#080801",
          gray_color: "#808080",
          moon_color: "#efefeff5",
          text_color: "#efefef",
          cta_bg_color: "#efefeff5",
 
          },
          fontFamily: {
          Abril: "Abril Fatface, cursive",
          Kaushan: "Kaushan Script, cursive",
          },
  
          fontSize: {
  
          sm:["clamp(.8rem, 10vw, 1.6rem)"],
  
          base:["clamp(1.6rem, 10vw, 2rem)" ],
  
          lg:["clamp(2rem, 10vw, 3rem)" ],
  
          xl:["clamp(3.73rem, 10vw, 4rem)"],
    
          "1xl":["clamp(4.19rem, 10vw, 4.8rem)"],

          "2xl":["clamp(4.6rem, 10vw, 5rem)"],
  
          "3xl":["clamp(4.8rem, 10vw, 6rem)"],
  
          "4xl":["clamp(5rem, 10vw, 7rem)"],

          "5xl":["clamp(6rem, 10vw, 8rem)"],
          
      },

      fontWeight:{
        font_medium:'500',
        font_semiMedium:'700',
        font_black: '900',
      },
      width:{

        '90': "90%",
        'vh-90': "90vh",
        '34': '34rem',
        '85': 'calc(100% - 34rem)'
      },
      height:{
        '05': "5vh",
        '90': "90vh",
        '95': "95vh",
        '87': "87vh",
        '80': "80vh",
        '85': "85vh",
        '70': "70vh",
        '75': "75vh",

      },

      margin:{
        '29': '29rem',
        '37': '37rem',
        '46': '46rem',
      },

      screens: {

          xs: "360px",
          ss: "500px",
          sm: "768px",
          md: "1024px",
          lg: "1200px",
          xl: "1400px",

      },

      },

  plugins: [],
  },
};

