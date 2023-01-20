import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import menu from '../assets/menu.png';
import Profile from '../assets/profile.jpg';
import { useGlobalContext } from './context';
import CTA from './CTA';

const Header = () => {


  const {themes, setThemes, menutoggle, setMenuToggle} = useGlobalContext();


  return (
    <header className= {` ${themes? 'bg-primary text-text_color' : 'bg-white text-primary'} fixed top-0 right-0 w-full h-26 lg:w-85 border-b border-gray_color overflow-hidden pt-3 pb-3 z-50`} >
        <nav className='w-90 m-auto'>
            <div className=' flex items-center justify-between h-20'>
              <div className=' lg:hidden'>
                <img src={Profile} alt="profile" className='w-16 h-16 rounded-2xl object-cover xs:w-20 xs:h-20' />
              </div>

              <div>
                <h1 className='text-base'>
                  Hello
                </h1>
              </div>
              
              <div className=' hidden lg:block'>
                <button className= {`${themes? ' bg-gray-500' : 'bg-secondary'} border-2 w-20 h-109 rounded-full text-base flex items-center`} onClick={()=>{
                  setThemes((prev)=>!prev)
                }}>
                  {
                    !themes &&
                  <span >
                  <Icon icon="line-md:sun-rising-filled-loop" className='w-10 h-10 rounded-full bg-primary translate-x-0 text-yellow-400'/>
                  </span>

                  }
                  {
                    themes &&
                   
                    <span>
                    <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" className= {`${themes? 'translate-x-full transition-all duration-500 ease-in-out': '-translate-x-0 transition-all duration-500 ease-in-out'} w-10 h-10 rounded-full bg-primary text-yellow-400 -ml-2`} />
                    </span>
                  }
                </button>
              </div>

              <div className=' lg:hidden cursor-pointer' onClick={()=> setMenuToggle((prev)=> !prev)}>
              <img src={menu} alt="menu" className={`${themes? ' invert' : ' invert-0'} w-10`} />
              </div>
                
            </div>
        </nav>

        {
          menutoggle &&
          <div className=  'fixed right-0' >
            <CTA/>
          </div>

        }


    </header>
  )
}

export default Header