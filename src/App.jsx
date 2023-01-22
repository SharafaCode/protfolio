import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "./conponents/context";

import Home from "./conponents/Home";
import PreLoader from "./conponents/PreLoader";




function App() {

  const {themes} = useGlobalContext();


return (
  <div className={themes? 'darkTheme' : 'lightTheme'}>

    <Home/>

   

    
  </div>
)

}

export default App
