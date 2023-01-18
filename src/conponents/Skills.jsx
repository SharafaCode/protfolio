import React from 'react'

const Skills = () => {
  return (
    <section className=' w-full min-h-screen'>
        <article className=' w-90 m-auto'>
            <div className=' flex flex-col gap-10 item-left justify-center h-90'>
                <div>
                    <h1 className=' font-Abril text-1xl xs:text-2xl font-font-medium tracking-wide'>
                        <span>S</span>
                        <span>k</span>
                        <span>i</span>
                        <span>l</span>
                        <span>l</span>
                        <span>s</span>
                        <span> &</span>
                        <span> E</span>
                        <span>x</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                        <span>i</span>
                        <span>e</span>
                        <span>n</span>
                        <span>c</span>
                        <span>e</span>
                    </h1>
                </div>
                <div className=' flex flex-col gap-5 text-gray_color text-sm'>
                    <p>
                        Since the beginning of my journey as a Front-End Developer a years ago,

                    </p>
                    <p>
                        I have successful created responsive websites that are fast, easy to use, and built with best practices. 

                    </p>
                    <p>
                        The main area of my expertise is in Front-End Development, HTML, CSS, JS(ES6), building small and medium web apps, features, animations, and coding an interactive layouts.

                    </p>
                    <p>
                        Visit my <a href="" className=' text-text_color cursor-pointer'>LinkedIn</a> profile for more details or just <a href="" className=' text-text_color cursor-pointer'>Contact</a> me.
                    </p>
                </div>
            </div>

        </article>
    </section>
  )
}

export default Skills