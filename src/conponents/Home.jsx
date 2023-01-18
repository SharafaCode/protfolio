import React from 'react'
import Header from './Header'
import Hero from './Hero'

const Home = () => {
  return (
    <div className=' w-full min-h-screen flex'>
        <aside className=' md:w-navbox_width md:h-screen md:bg-red-500 '>
        </aside>
        <main className=' width min-h-screen bg-blue-500'>
            <Header/>

        </main>
            

       
    </div>
  )
}

export default Home