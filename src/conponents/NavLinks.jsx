import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Profile from '../assets/profile.jpg';
import { useGlobalContext } from './context';


const NavLinks = () => {

    const {themes, linkdata, linksButton} = useGlobalContext();

    
  return (

    <aside className={` ${themes? 'bg-primary text-text_color' : ' bg-white text-primary'} hidden lg:block lg:overflow-hidden lg:fixed lg:top-0 lg:left-0 lg:bottom-0 lg:z-50 `}>
        <article>

            <div className='h-05 lg:pl-20' id='animateParent'>

                    <div className='flex flex-col items-left justify-center gap-2  pt-9 '>
                        <img src={Profile} alt="profile" className='w-16 h-16 rounded-2xl object-cover'  />

                        <div className='flex flex-col justify-center item-left gap-1'>
                            <h1 className='text-sm tracking-widest font-Abril'>
                                Bashiru
                            </h1>
                        </div>
                    </div>

  
                 <p className=' text-xs font-Abril tracking-widest font-extralight'>
                    <a href="https://mail.google.com/" target='_blank'>
                    Sharafaoluwatobi@gmail.com

                    </a>
                </p>
            </div>

            <article className=' flex flex-col gap-10 pt-60 lg:pl-12'>
                <div className=' flex flex-col items-left justify-center gap-7 text-sbase tracking-widest font-font_medium font-Abril '>
                    {
                        linkdata.map((item, index)=>{
                            return(
                                <div key={index} id='animateParent'>
                                    <ul key={item.id}  className=' flex items-center justify-left overflow-y-hidden' id='large-navlink-transition' onClick={()=> linksButton(index)}>
                                        <li className= 'cursor-pointer' >
                                            <NavLink to={item.path} className='flex items-center justify-center gap-8'>
                                            <div>
                                            <img src={item.img} alt={item.title} className= {`${themes? 'invert' : ' invert-0'} w-10`} />

                                            </div>
                                            <div>
                                                {item.title}
                                            </div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=' flex items-center pt-11' id='animateParent'>
                    <span>
                    <p className=' text-smselect-none font-Kaushan tracking-widest bashcodify font-font_black'>
                       
                        Bash.codify
                    </p>
                    </span>
                    <span className='text-sbase'>💪</span>
    
                </div>

            </article>
        </article>
    </aside>
  )
}

export default NavLinks