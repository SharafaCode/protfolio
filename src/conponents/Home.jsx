import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useGlobalContext } from './context';
import Header from './Header'
import Hero from './Hero';
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import WorkOut from './WorkOut';
import Books from './Books';
import Portfolio from './Portfolio';
import NavLinks from './NavLinks';


const Home = () => {

  const {themes} = useGlobalContext();

  return (
    <div className=' w-full min-h-screen flex items-center'>


        <aside className= 'lg:w-34 lg:min-h-screen lg:border-r-2' >
          <NavLinks/>
  
        </aside>
        <main className= ' w-full min-h-screen lg:w-85 lg:min-h-screen lg:border-r-2'>
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='skills' element={<Skills/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='workout' element={<WorkOut/>}/>
            <Route path='books' element={<Books/>}/>
          </Routes>
  
          

        </main>
            

       
    </div>
  )
}

export default Home