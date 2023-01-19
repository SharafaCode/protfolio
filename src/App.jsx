import { useState } from "react";
import { useGlobalContext } from "./conponents/context";

import Home from "./conponents/Home";
import Portfolio from "./conponents/Portfolio";


function App() {
  const {themes, setThemes} = useGlobalContext();

  return (
    <div className={themes? 'darkTheme' : 'lightTheme'}>
      {/* <Home/> */}
      <Portfolio/>
    </div>
  )
}

export default App
