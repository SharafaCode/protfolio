import React from 'react';
import { Link } from 'react-router-dom';
import projects from './portData';


const Portfolio = () => {
  return (
    <section className='w-full min-h-screen pt-10' id='portfolio'>
      <article className='  w-90 m-auto '>
        <div className=''>
          <div className=' custom-grid'>
            {
              projects.map((items, index)=> {
                const {id, img, title} = items;

                return (
                  <React.Fragment key={id}>
                  <div className=' relative hover:scale-105 opacity-50 hover:opacity-100 transition-all duration-500 ease-linear hover:transition-all hover:duration-500 hover:ease-linear   span-cols'>
                  
                      <img src={img} alt={title} className='   w-full h-full object-cover shadow-md ' />


                    <div className=' opacity-0 hover:opacity-100 transition-all duration-500 ease-linear delay-300 hover:transition-all hover:duration-500 hover:ease-linear hover:delay-300 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center '>
                      <Link to={`/project/${title}`}>
                        <button type='button' className=' top-0 left-0 text-xs w-28 h-28 rounded-full bg-black cursor-pointer font-normal'>
                          View <br /> Details
                          
                        </button>

                      </Link>
                    </div>
                  </div>

                  
                  
                  
                  </React.Fragment>
                )
              })

            }
          </div>
          
        </div>
      </article>
    </section>
  )
}

export default Portfolio