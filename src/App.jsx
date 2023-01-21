import React from "react";
import { useGlobalContext } from "./conponents/context";

import Home from "./conponents/Home";
import ProjectDetails from "./conponents/ProjectDetails";



function App() {

  const {themes} = useGlobalContext();

  return (
    <div className={themes? 'darkTheme' : 'lightTheme'}>
      <Home/>
      {/* <ProjectDetails/> */}
      
    </div>
  )
}

export default App
