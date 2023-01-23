import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "./conponents/context";

import Home from "./conponents/Home";
import PreLoader from "./conponents/PreLoader";




function App() {

  const {themes, IsLoading, setIsLoading} = useGlobalContext();

  // useEffect(()=>{
  //   setIsLoading(true);
  //   setTimeout(()=>{
  //     setIsLoading(false);
  //   },5000)
  // }, [])


return (

  

  <div className={themes? 'darkTheme' : 'lightTheme'}>

      <Home />
      
  </div>
)

}

export default App
