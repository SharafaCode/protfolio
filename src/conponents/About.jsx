import React from 'react'

const About = () => {
  return (

    <section className=' w-full min-h-screen'>
        <article className=' w-90 m-auto'>
            <div className=' flex flex-col items-left justify-center h-90 gap-10'>
                <div>
                    <h1 className=' font-Abril text-1xl xs:text-2xl font-font-medium tracking-wide'>
                        <span>M</span>
                        <span>y</span>
                        <span>,</span>
                        <span> M</span>
                        <span>y</span>
                        <span>s</span>
                        <span>e</span>
                        <span>l</span>
                        <span>f</span>
                        <span> &</span>
                        <span> I</span>

  
  
  
                    </h1>
                </div>
                 <div className=' flex flex-col gap-5 text-gray_color text-sm'>
                    <p>

                    Hello, my name is Bashi, I'm a Front-End Developer from Nigeria(West Africa) with great passion for building an interactive websites.
                    
                    </p>

                    <p>

                    Well-organised person, problem solver, independent employee with high attention to details. And oh, i love food, alot.
                    </p>
                    <p>
                    I have a Degree in Computer Science and 2.5 years experience as an IT Support Specialist.
                    </p>
                    <p>
                     And one year experience using various front-end technologies.
                    </p>

                    <p className=' text-text_color cursor-pointer text-sm'>
                        Let’s make something special.
                    </p>

                </div>
            </div>

        </article>
    </section>

  )
}

export default About