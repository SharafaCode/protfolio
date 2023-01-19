import React from 'react';
import Profile from '../assets/profile.jpg';
import links from './links'

const NavLinks = () => {
  return (
    <aside className=' hidden lg:block'>
        <article className=' pl-16 pt-12'>
            <div>
                <div className='flex flex-col justify-center item-left gap-3'>
                    <img src={Profile} alt="profile" className='w-16 h-16 rounded-2xl object-cover xs:w-20 xs:h-20' />

                    <div className='flex flex-col justify-center item-left gap-1'>
                    <h1 className='text-sm'>
                        Bashiru Sharafa

                    </h1>
                    <p>
                        Sharafaoluwatobi@gmail.com
                    </p>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col items-left justify-center h-70 gap-10 text-sm tracking-widest font-font_semiMedium text-gray_color  '>
                {
                    links.map((item, index)=>{
                        return(
                            <div>
                                <ul key={item.id}>
                                    <li className=' cursor-pointer hover:text-text_color'>
                                        {item.title}
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>

        </article>
    </aside>
  )
}

export default NavLinks