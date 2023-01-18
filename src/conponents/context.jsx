import React, { useContext, useState, useEffect } from "react"

const getTheme = ()=> {
    return JSON.parse(localStorage.getItem('theme')) || true;
 
   }

const AppContext = React.createContext();

export const AppProvider = ({children})=> {
   

    const [themes, setThemes] = useState(getTheme);


    useEffect(()=>{

        localStorage.setItem('theme', JSON.stringify(themes))
    },[themes])
    return(
        <AppContext.Provider value={{
             themes, setThemes, 
        }}>
            {
                children
            }
    
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}