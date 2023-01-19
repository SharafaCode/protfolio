import { useState } from "react";
import { useGlobalContext } from "./conponents/context";

import Home from "./conponents/Home";


function App() {
  const {themes, setThemes} = useGlobalContext();

  return (
    <div className={themes? 'darkTheme' : 'lightTheme'}>
      <Home/>
    </div>
  )
}

export default App
