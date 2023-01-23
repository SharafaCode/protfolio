import React, { useContext, useState, useEffect } from "react";
const url = 'http://127.0.0.1:5173/portData/'
console.log(url);

const getTheme = ()=> {
    return JSON.parse(localStorage.getItem('theme')) || true;
 
   }

const AppContext = React.createContext();

export const AppProvider = ({children})=> {
   

    const [themes, setThemes] = useState(getTheme);
    const [menutoggle, setMenuToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    

    const menuBtn = ()=>{
        if(setMenuToggle){
            slider.classList.add('slideOut')

        }

        else{
            slider.classList.remove('slideIn')
        }

    }


    useEffect(()=>{

        localStorage.setItem('theme', JSON.stringify(themes))
    },[themes])
    return(
        <AppContext.Provider value={{
             themes, setThemes, menutoggle, setMenuToggle, isLoading, setIsLoading, menuBtn
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