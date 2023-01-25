import React, { useContext, useState, useEffect, useRef } from "react";
import links from './links';


 
const getTheme = localStorage.getItem('theme')




// const themeQuery = window.matchMedia('(prefers-color-scheme: darkTheme')


const AppContext = React.createContext();

export const AppProvider = ({children})=> {
   

    const [themes, setThemes] = useState(getTheme);
    const [linkdata] = useState(links);
    const [menutoggle, setMenuToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [statusmessage, setStatusMessage] = useState('');
    const [linksindex, setLinksIndex] = useState(null);
    

    // menutoggle? document.body.style.overflowY ='hidden' : document.body.style.overflowY = 'auto';

    const linksButton = (index) =>{

        if(index === linksindex){

            return setLinksIndex(null);
        }

        setLinksIndex(index);
    }

    useEffect(()=>{
        linksButton
},[]);




setTimeout(()=>{
    setIsLoading(false)
}, 1000);

useEffect(()=>{
   localStorage.setItem('theme', JSON.stringify(themes))
    
},[themes]);


    return(
        <AppContext.Provider value={{
             themes, setThemes, menutoggle, setMenuToggle, isLoading, setIsLoading, linkdata, linksButton, linksindex, statusmessage, setStatusMessage
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