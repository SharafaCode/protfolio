import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Header from './Header'
import Name from './Name';
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import WorkOut from './WorkOut';
import Books from './Books';
import Portfolio from './Portfolio';
import NavLinks from './NavLinks';

import CTA from './CTA';


const Home = () => {

 

  return (
    <div className=' w-full min-h-screen flex flex-wrap justify-center z-50'>


        <aside className= 'lg:w-34 lg:min-h-screen shadow-md lg:overflow-hidden' >
          <NavLinks/>
  
        </aside>
        <main className= ' w-full min-h-screen lg:w-85 z-50 '>
          <Header/>
          <Routes>
            <Route path='/' element={<Name/>}/>
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