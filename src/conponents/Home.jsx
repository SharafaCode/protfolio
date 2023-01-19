import React from 'react'
import { useGlobalContext } from './context';
import Header from './Header'
import Hero from './Hero';
import NavLinks from './NavLinks';


const Home = () => {

  const {themes} = useGlobalContext();

  return (
    <div className=' w-full min-h-screen flex items-center'>


        <aside className= 'lg:w-34 lg:min-h-screen lg:border-r-2' >
          <NavLinks/>
  
        </aside>


        <main className= ' w-full min-h-screen lg:w-85 lg:min-h-screen lg:border-r-2'>
          {/* <Header/> */}
          <Hero/>
          

        </main>
            

       
    </div>
  )
}

export default Home