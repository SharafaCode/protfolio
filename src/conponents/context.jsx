import React, { useContext, useState, useEffect } from "react";
import links from './links';


 
const getTheme = localStorage.themes


const AppContext = React.createContext();

export const AppProvider = ({children})=> {
   

    const [themes, setThemes] = useState(getTheme);
    const [linkdata, setLinkData] = useState(links);
    const [menutoggle, setMenuToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [linksindex, setLinksIndex] = useState(null);


    const linksButton = (index) =>{

        if(index === linksindex){

            return setLinksIndex(null);
        }

        setLinksIndex(index);
    }

    useEffect(()=>{
        linksButton
},[])




    useEffect(()=>{

        // localStorage.setItem('theme', JSON.stringify(themes));

        localStorage.theme = themes
        
    },[themes])



    return(
        <AppContext.Provider value={{
             themes, setThemes, menutoggle, setMenuToggle, isLoading, setIsLoading, linkdata, linksButton, linksindex
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