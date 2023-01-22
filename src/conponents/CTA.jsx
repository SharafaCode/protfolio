import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
// import user from '../assets/user.png';
// import letter from '../assets/letter.png';
// import home from '../assets/home.png';
// import skills from '../assets/skills.png';
// import portfolio from '..//assets/briefcase.png';
import { useGlobalContext } from './context';
import links from './links';


const CTA = () => {

    const {themes, setThemes, setMenuToggle} = useGlobalContext();


  return (
    
    <div className='  lg:w-85 lg:hidden z-50'>

            <div className= ' w-screen h-90 fixed right-0 left-0 bottom-0 bg-lightgray_color' >

                <div className={` ${themes? ' bg-cta_bg_color text-primary font-font_semiMedium ' : ' bg-black text-text_color font-font_medium'} w-28 h-90 flex flex-col items-center pt-14 gap-3  rounded-tl-3xl rounded-bl-3xl text-xs tracking-wide fixed right-0  `}  >
                    {
                        links.map((items, index) => {
                            const {id, title, path, img} = items

                            return (
                                <React.Fragment key={id}>
                                    <div className=' flex flex-col items-center justify-center gap-2 cursor-pointer ' id='mobilelinkstransition' onClick={()=> setMenuToggle(false)}>
                                        <Link to={path}>
                                            <img src={img} alt="home" className={`${themes? null : 'invert'} w-9` }  />
                                        </Link>
                                        <span >
                                            {title}
                                        </span>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }

                    <div className=' pt-14'>
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



                </div>

            </div>



    </div>
  )
}

export default CTA