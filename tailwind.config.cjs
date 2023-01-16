
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
          colors: {
          primary: "hsl(79, 72%, 55%)",
          light_primary: "hsl(79, 97%, 77%)",
          alt_primary: "hsl(79, 67%, 52%)",
          dark_primary: "hsl(79, 63%, 50%)",
          secondary: "hsl(180, 12%, 8%)",
          gray_color: "rgba(202, 203, 203, 85%)",
          title_color: "hsl(180, 4%, 98%)",
          black_title_color: "hsl(180, 4%, 12%)",
          text_color: "hsl(180, 4%, 72%)",
          light_text_color: "hsl(180, 4%, 65%)",
          },
          fontFamily: {
          redhat: ["Red Hat Display', sans-serif"],
          },
  
          fontSize: {
  
          sm:["clamp(1.4rem, 10vw, 1.8rem)"],
  
          base:["clamp(1.6rem, 10vw, 2rem)" ],
  
          lg:["clamp(2rem, 10vw, 3rem)" ],
  
          xl:["clamp(3rem, 10vw, 4rem)"],
    
          "2xl":["clamp(4rem, 10vw, 5rem)"],
  
          "3xl":["clamp(4rem, 10vw, 6rem)"],
  
          "4xl":["clamp(5rem, 10vw, 7rem)"],

          "5xl":["clamp(6rem, 10vw, 8rem)"],
          
      },

      fontWeight:{
        font_medium:'500',
        font_semiMedium:'700',
        font_black: '900',
      },
      width:{

        mb_width: "90%",
        lg_width: "85%",
        xlg_width: "80%",
        navbox_width: '28rem',
        img_ss_width: '66rem',
        img_width: '66rem',
        img_xl_width: '102rem',

      },
      height:{
        height: "90vh",

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

