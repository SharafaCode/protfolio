import React from 'react';
import user from '../assets/user.png';
import letter from '../assets/letter.png';
import home from '../assets/home.png';
import skills from '../assets/skills.png';
import portfolio from '..//assets/briefcase.png'
import { useGlobalContext } from './context';
const CTA = () => {
    const {themes} = useGlobalContext();
  return (
    <div className='w-full fixed bottom-0 left-0 -translate-y-2'>
        <div className=' w-90 m-auto'>
            <div className= {`${themes? ' bg-cta_bg_color' : ' bg-black'} w-full h-20 flex items-center justify-between gap-10 r rounded-2xl p-12 pl-5 pr-5`} >
                <div className=' flex flex-col items-center justify-center gap-2 w-16 cursor-pointer'>
                    <img src={home} alt="home" className={themes? null : 'invert'} />
                    <span className={`${themes? 'border-primary' : 'border-white'} w-8 h-2 border-b-4 `} ></span>
                </div>
                <div  className=' flex flex-col items-center justify-center gap-2 text-text_color w-16 cursor-pointer'>
                   <img src={user} alt="about" className={themes? null : 'invert'}/>
                    <span className='hidden'>About</span>
                </div>
                <div  className=' flex flex-col items-center justify-center gap-2 text-text_color w-20 cursor-pointer'>
                   <img src={skills} alt="skills" className={themes? null : 'invert'}/>
                    <span className='hidden'>Skills</span>
                </div>
                <div  className=' flex flex-col items-center justify-center gap-2 text-text_color w-16 cursor-pointer'>
                    <img src={portfolio} alt="portfolio" className={themes? null : 'invert'}/>
                    <span className='hidden'>Contact</span>
                </div>
                <div  className=' flex flex-col items-center justify-center gap-2 text-text_color w-16 cursor-pointer'>
                    <img src={letter} alt="contact" className={themes? null : 'invert'}/>
                    <span className='hidden'>Contact</span>
                </div>


            </div>

        </div>

    </div>
  )
}

export default CTA