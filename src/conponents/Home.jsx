import React,{useEffect} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './Header'
import Name from './Name';
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Blogs from './Blogs';
import Books from './Books';
import Projects from './Projects';
import NavLinks from './NavLinks';
import ProjectDetails from './ProjectDetails';
// import { useGlobalContext } from './context';
// import PreLoader from './PreLoader';

const Home = () => {
  // const {IsLoading, setIsLoading} = useGlobalContext();

    const location = useLocation();

      return (
  
    
        <div className=' w-full min-h-screen flex flex-wrap justify-center z-50'>
            <aside className= 'lg:w-34 lg:min-h-screen lg:overflow-hidden borders shadow-md' >
              <NavLinks/>
            </aside>
            <main className= ' w-full min-h-screen lg:w-85 z-50 '>
              <Header/>
              <AnimatePresence exitBeforeEnter initial={false}>

              <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Name/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='skills' element={<Skills/>}/>
                <Route path='projects' element={<Projects/>}/>
                <Route path='/projects/:titles' element={< ProjectDetails/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='books' element={<Books/>}/>
                <Route path='blogs' element={<Blogs/>}/>
              </Routes>

              </AnimatePresence>
            </main>
        </div>
      )





 

}

export default Home