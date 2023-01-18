import { useState } from "react";
import Header from "./conponents/Header"
import { useGlobalContext } from "./conponents/context";
import Hero from "./conponents/Hero";
import Home from "./conponents/Home";
import About from "./conponents/About";
import Skills from "./conponents/Skills";

function App() {
  const {themes, setThemes} = useGlobalContext();

  return (
    <div className={themes? 'darkTheme' : 'lightTheme'}>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      {/* <Home/> */}
    </div>
  )
}

export default App
