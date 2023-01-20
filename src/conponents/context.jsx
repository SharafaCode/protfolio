import React, { useContext, useState, useEffect } from "react"

const getTheme = ()=> {
    return JSON.parse(localStorage.getItem('theme')) || true;
 
   }

const AppContext = React.createContext();

export const AppProvider = ({children})=> {
   

    const [themes, setThemes] = useState(getTheme);
    const [menutoggle, setMenuToggle] = useState(false)


    useEffect(()=>{

        localStorage.setItem('theme', JSON.stringify(themes))
    },[themes])
    return(
        <AppContext.Provider value={{
             themes, setThemes, menutoggle, setMenuToggle
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