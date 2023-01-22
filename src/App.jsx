import React from "react";
import { useGlobalContext } from "./conponents/context";

import Home from "./conponents/Home";
import PreLoader from "./conponents/PreLoader";
import ProjectDetails from "./conponents/ProjectDetails";



function App() {

  const {themes} = useGlobalContext();

  return (
    <div className={themes? 'darkTheme' : 'lightTheme'}>
      {/* <Home/> */}
      <PreLoader/>
  
    </div>
  )
}

export default App
