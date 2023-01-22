import React from 'react';
import { Link } from 'react-router-dom';

const Name = () => {


  return (


<section className='w-full min-h-screen overflow-hidden'>

    <article className='w-90 m-auto flex flex-col items-left justify-center h-screen gap-10 xs:gap-24'>    

      <div className='flex flex-col items-left justify-center gap-5 pt-24 xs:pt-0'>

        <div  className='translate-y-3 xs:-translate-y-3'>
          <div className='border-b-2 w-32 border-gray-500'></div>
        </div>

        <div className=' text-xl font-font_medium font-Abril flex flex-col gap-2 xs:text-1xl '>
            <div>
              <div></div>
            </div>
              <h1>
              <span>
                H
              </span>
              <span>
                i,
              </span>
            </h1>
            <h1>

              <span>
                I
              </span>
              <span>
                'm
              </span>

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

       </div>
        
 
          <div className=' btn'>
            <Link to='contact'>
              <button className='buttn text-base'>Contact me!</button>

            </Link>

          </div>
          

     
     

    </article>
   </section>
  )
}

export default Name