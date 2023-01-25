import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const About = () => {
  return (

    <motion.section 
    initial= {{scaleY: 0, opacity: 0}}
    animate={{scaleY: 1, opacity: 1}}
    exit={{scaleY: 0, opacity: 0}}
    transition={{duration:0.5}}
    className=' w-full min-h-screen' id='about'>

        <article className=' w-90 m-auto flex flex-col items-left justify-center h-screen gap-10 mt-52 xs:mt-0'>

            <div className=' flex flex-col items-left justify-center gap-10 xs:pt-28  '>
                <div>
                    <h1 className=' font-Abril text-1xl xs:text-2xl font-font-medium tracking-wide ss:tracking-wider ss:text-5xl '>
                        <span>M</span>
                        <span>e</span>
                        <span>,</span>
                        {' '}
                        <span> M</span>
                        <span>y</span>
                        <span>s</span>
                        <span>e</span>
                        <span>l</span>
                        <span>f</span>
                        {' '}
                        <span> &</span>
                        {' '}
                        <span> I</span>

                    </h1>
                </div>
                 <div className=' flex flex-col gap-5 text-gray_color text-sm'>
                    <p>

                    Hello, my name is Bash, I'm a Front-End Web Developer from Nigeria(West Africa) with great passion for building an interactive websites.
                    
                    </p>

                    <p>

                    Well-organised person, problem solver, independent employee with high attention to details. And oh, i love food, alot 🥰.
                    </p>
                    <p>
                    I have a Degree in Computer Science and 2.5 years experience as an IT Onsite Support Specialist.
                    </p>
                    <p>
                     And one year experience using various front-end technologies.
                    </p>

                    <Link to='/contact'>
                        <p className=' text-text_color cursor-pointer text-sm font-font_medium'>
                            Let’s make something special.
                        </p>
                    </Link>
                </div>
            </div>

        </article>
    </motion.section>

  )
}

export default About