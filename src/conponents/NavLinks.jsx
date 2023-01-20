import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.jpg';
import links from './links';
import user from '../assets/user.png';
import letter from '../assets/letter.png';
import home from '../assets/home.png';
import skills from '../assets/skills.png';
import portfolio from '..//assets/briefcase.png';
import { useGlobalContext } from './context';

const NavLinks = () => {
    const {themes} = useGlobalContext()
  return (
    <aside className={` ${themes? 'bg-primary text-text_color' : ' bg-white text-primary'} hidden lg:block lg:overflow-x-hidden lg:fixed lg:top-0 left-0 bottom-0`}>
        <article className=' w-70 m-auto pl-6'>
            <div className='h-05'>
                <Link to='/'>
                    <div className='flex flex-col items-left justify-center gap-2  pt-9 '>
                        <img src={Profile} alt="profile" className='w-16 h-16 rounded-2xl object-cover'  />

                        <div className='flex flex-col justify-center item-left gap-1'>
                            <h1 className='text-sm tracking-widest font-Abril'>
                                Bashiru
                            </h1>
                        </div>
                    </div>

                </Link>
                 <p className=' text-xs font-Abril tracking-widest font-extralight'>
                    <a href="https://mail.google.com/">
                    Sharafaoluwatobi@gmail.com

                    </a>
                </p>
            </div>
        <article className=' flex flex-col items-left justify-center pt-72 gap-10'>
            <div className=' flex flex-col items-left justify-center gap-10 text-sbase tracking-widest font-font_medium text-gray_color font-Abril '>
                {
                    links.map((item, index)=>{
                        return(
                            <div key={index}>
                                <ul key={item.id}>
                                    <li className=' cursor-pointer hover:text-text_color'>
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className=' absolute bottom-0 -translate-y-3'>
                <p className=' text-sm text-blue-500 select-none font-Kaushan tracking-widest'>
                    Bash.codify...............
                </p>
            </div>

        </article>
        </article>
    </aside>
  )
}

export default NavLinks