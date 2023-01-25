
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
          colors: {
          primary: "#080801",
          secondary: "#ebebeb",
          gray_color: "#808080",
          lightgray_color: "rgba(128, 128, 128, 0.473)",
          lightblue_color: "rgba(72, 112, 153, 0.612)",
          moon_color: "#efefeff5",
          text_color: "#efefef",
          cta_bg_color: "#efefeff5",
          input_bg_color: 'rgba(128, 128, 128, 0.400)',
          project_dark_color: 'rgba(0, 0, 0, 0.445)',

 
          },
          fontFamily: {
          Abril: "Abril Fatface, cursive",
          Kaushan: "Kaushan Script, cursive",
          herr: "Herr Von Muellerhoff, cursive",
          },
  
          fontSize: {
  
          xs:["clamp(.8rem, 10vw, 1.3rem)"],

          sm:["clamp(.8rem, 10vw, 1.6rem)"],

          sbase:["clamp(.8rem, 10vw, 1.8rem)"],
  
          base:["clamp(1.6rem, 10vw, 2rem)" ],
  
          lg:["clamp(2rem, 10vw, 3rem)" ],
  
          xl:["clamp(3.73rem, 10vw, 4rem)"],
    
          "1xl":["clamp(4.19rem, 10vw, 4.8rem)"],

          "2xl":["clamp(4.6rem, 10vw, 5rem)"],
  
          "3xl":["clamp(4.8rem, 10vw, 6rem)"],
  
          "4xl":["clamp(5rem, 10vw, 7.5rem)"],

          "5xl":["clamp(6rem, 10vw, 8rem)"],
          
      },

      fontWeight:{
        font_medium:'500',
        font_semiMedium:'700',
        font_black: '900',
      },
      width:{

        '90': "90%",
        '60': "60%",
        '70': "70%",
        'vh-90': "90vh",
        '34': '34rem',
        '85': 'calc(100% - 34rem)',
         '50': '50rem',
         '53': '53rem',
         '58': '58rem',
         '68': '68rem',
         '70': '70rem',

      },
      height:{

        '05': "5vh",
        '90': "90vh",
        '95': "95vh",
        '87': "87vh",
        '80': "80vh",
        '85': "85vh",
        '48': "48rem",

    
       

      },

      margin:{
        '6': '6.4rem',
        '29': '29rem',
        '37': '37rem',
        '46': '46rem',
        '32': '32.4rem',
        '26': '7rem',
      },
      padding:{
        
        '7': '7.4rem',
        '10': '10rem',
        '29': '29rem',
        '40': '40.6rem',
        '32': '32.4rem',
        '37': '37rem',


      },

      screens: {

          xs: "360px",
          ss: "500px",
          xsm: "600px",
          sm: "768px",
          md: "1024px",
          lg: "1200px",
          xl: "1315px",

      },

      },

  plugins: [],
  },
};

