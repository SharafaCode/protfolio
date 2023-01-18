import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Profile from '../assets/profile.jpg';
import { useGlobalContext } from './context';

const Header = () => {


  const {themes, setThemes} = useGlobalContext();

 
useEffect(()=>{


  
},[themes])

  


  return (
    <header className='w-full h-05'>
        <nav className='w-90 m-auto'>
            <div className=' flex items-center justify-between p-0 pt-6 pb-6'>
              <div>
                <img src={Profile} alt="profile" className='w-16 h-16 rounded-2xl object-cover' />

                <div className='hidden'>
                  <h1 className='text-sm'>
                      Bashiru Sharafa

                  </h1>
                  <p>
                    Sharafaoluwatobi@gmail.com
                  </p>
                </div>
              </div>

              <div>
                <h1 className='text-base'>
                  Hello

                </h1>
              </div>
              
              <div >
                <button className= {`${themes? ' bg-gray-500' : 'bg-white'} border-2 w-20 h-109 rounded-full text-base flex items-center`} onClick={()=>{
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
            </div>
        </nav>
    </header>
  )
}

export default Header