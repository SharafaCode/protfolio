import React, { useContext, useState, useEffect } from "react";
import links from './links';


 
const getTheme = localStorage.themes;



// const themeQuery = window.matchMedia('(prefers-color-scheme: darkTheme')


const AppContext = React.createContext();

export const AppProvider = ({children})=> {
   

    const [themes, setThemes] = useState(getTheme );
    const [linkdata, setLinkData] = useState(links);
    const [menutoggle, setMenuToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [statusmessage, setStatusMessage] = useState('');
    const [linksindex, setLinksIndex] = useState(null);

    menutoggle? document.body.style.overflow ='hidden' :document.body.style.overflow = 'auto';

    const linksButton = (index) =>{

        if(index === linksindex){

            return setLinksIndex(null);
        }

        setLinksIndex(index);
    }

    useEffect(()=>{
        linksButton
},[]);

useEffect(()=>{
   localStorage.theme = themes
    
},[themes]);

setTimeout(()=>{
    setIsLoading(false)
}, 1000);

    return(
        <AppContext.Provider value={{
             themes, setThemes, menutoggle, setMenuToggle, isLoading, setIsLoading, linkdata, linksButton, linksindex, statusmessage, setStatusMessage,
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