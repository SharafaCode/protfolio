import { Link } from 'react-router-dom';
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './portData';
import { Icon } from '@iconify/react';
import close from '../assets/close.png';



const ProjectDetails = () => {


  const {titles} = useParams();
 

    const project = projects.find((items)=> items.title === titles);
    const {img, desc, live, github, title, tech, role, web, webgit} = project;
    
    
  return (

    <section className=' flex items-center justify-center w-full min-h-screen bg-project_dark_color absolute top-0 left-0 bottom-0 right-0 z-50 backdrop-blur-sm pl-5 pr-5'>

        <article className=' relative flex items-left justify-center flex-col gap-10 bg-gray-300 p-5 rounded-3xl ss-w-screen ss:h-fit md:mt-16'>

          <div className=' absolute top-0 left-0 -translate-y-16 -translate-x-4 w-20 h-20 ss:w-16 ss:h-16 ss:-translate-y-12 rounded-full bg-gray-300 flex items-center justify-center p-5 cursor-pointer'>
            <Link to='/projects'>
              <img src={close} alt=""  className=' w-10'/>

            </Link>
          </div>

            <div>
              <img src={img} alt="" className=' w-full h-full rounded-2xl project-shadow ss:w-50 xsm:w-53 sm:w-58 md:w-68 lg:w-70 ss:h-full' />
            </div>
       
            <div className=' flex items-left justify-center flex-col text-sm  text-primary gap-5'>

              <div className=' flex items-left justify-center flex-col gap-2'>
                <h2 className=' text-xbase font-font_medium tracking-wides capitalize'>
                  {title}
                </h2>
                <p className=' text-xs  text-gray_color'>
                  {desc}
                </p>
              </div>

              <div className=' flex items-left justify-center flex-col gap-2'>
                <div>
                  <p>
                    Tech Used - <span className=' text-xs text-gray_color'>{tech}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Role - <span className=' text-xs text-gray_color'>{role}</span>
                  </p>
                </div>
                <div>
                  <p className=' flex items-center gap-2'>
                      <span >
                        <Icon icon="carbon:earth-filled" />
                      </span>
                      Live Site - 
                      <span className=' text-xs font-font_semiMedium tracking-widest text-red-500'> 
                        <a href={live}>
                        {web}
                        </a>
                      </span>
                   </p>
                  
                </div>

              </div>

            </div>


           

        </article>
    </section>
  )
}

export default ProjectDetails