import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './portData';


const ProjectDetails = () => {


  const {titles} = useParams();
 

    const project = projects.find((items)=> items.title === titles);
    const {img, live, github, title, tech, role, web, webgit} = project;
    
    




  return (
    <section className=' w-full min-h-screen bg-project_dark_color absolute top-0 left-0 bottom-0 right-0 z-50 backdrop-blur-sm'>
        <article>
       
          <div className='w-90 m-auto mt-20'>

            <div>
              <img src={img} alt="" className=' w-full h-full' />
            </div>

            <div>
              <h2>
                {title}
              </h2>
            </div>

            <div>
              <div>
                <p>
                  Technologies Used - <span>{tech}</span>
                </p>
              </div>
              <div>
                <p>
                  Role - <span>{role}</span>
                </p>
              </div>
            </div>
          
            <div>
              <div>
                <p>
                  Github - <span> <a href={github}>{webgit}</a></span>
                </p>
                <a href={github}></a>
              </div>
              <div>
                <p>
                  View Online - <span> <a href={live}>{web}</a></span>
                </p>
                
              </div>
            </div>

          </div>


           

        </article>
    </section>
  )
}

export default ProjectDetails