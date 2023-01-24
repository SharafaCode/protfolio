import React from 'react';
import { motion } from 'framer-motion';
import { Link, } from 'react-router-dom';
import { useGlobalContext } from './context';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import './animation.css';


const Name = () => {

  const {themes} = useGlobalContext();
 



  return (


<motion.section 
initial= {{scaleY: 0, opacity: 0}}
animate={{scaleY: 1, opacity: 1}}
exit={{scaleY: 0, opacity: 0}}
transition={{duration:0.5}}

className='w-full min-h-screen overflow-hidden'>

    <article className='w-90 m-auto flex flex-col items-left justify-center h-screen gap-10 xs:pt-28 ss:flex-row ss:gap-0 ss:justify-between'>    

      <div className='flex flex-col items-left justify-center gap-5 pt-24 xs:pt-0'>

        <div  className='translate-y-3 xs:-translate-y-3'>
          <div className='border-b-2 w-32 border-gray-500'></div>
        </div>

        <div className=' text-xl font-font_medium font-Abril flex flex-col gap-2 xs:text-1xl xsm:text-3xl ss:tracking-widest sm:text-5xl '>
 
              <h1>
              <span>
                H
              </span>
              <span >
                i
              </span>
              <span>
                ,
              </span>
            </h1>

            <h1>

              <span>
                I
              </span>
              <span>'</span>
              <span>
                m
              </span>
              {' '}

              <span> B</span>
              <span>a</span>
              <span>s</span>
              <span>h</span>
              <span>,</span>
            </h1>

            <h2>
              <span>W</span>
              <span>e</span>
              <span>b</span>
              {' '}
              <span> D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
              
            </h2>
          </div>

          <div className='text-base font-Kaushan font-font_semiMedium tracking-widest text-gray-500'>
                <p >
                (Front End Developer)
                </p>
           </div>

          <div className=' btn pt-4'>
            <Link to='contact'>
              <button className='buttn text-base'>Contact me!</button>

            </Link>

          </div>

      </div>

      <div className=' flex items-center  gap-10 ss:flex-col ss:justify-center' >

            <a href="https://twitter.com/Bash_Codify" target='_blank' id='animateParent'>
              <img src= {twitter} alt="twitter" className={`${themes? 'invert' : ' invert-0'} w-10 xs:w-16 ss:w-12 cursor-pointer`} />
            </a>

          <a href="https://www.linkedin.com/in/sharafa-bashiru-36021b23a/"  target='_blank' id='animateParent'>
            <img src= {linkedin} alt="linkedin"  className={`${themes? 'invert' : ' invert-0'} w-10 xs:w-16 ss:w-12 cursor-pointer `}  />
          </a>

            <a href="https://github.com/SharafaCode" target='_blank' id='animateParent'>
            <img src= {github} alt="github"  className={`${themes? 'invert' : ' invert-0'} w-10 xs:w-16 ss:w-12 cursor-pointer `}  />
            </a>

       
  
      </div>
       
    </article>
   </motion.section>
  )
}

export default Name