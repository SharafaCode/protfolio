import React from 'react';
import TextShpere from './TextShpere/TextShpere';
import { useGlobalContext } from './context';

const Skills = () => {
    const {themes} = useGlobalContext();


  return (
    <section className=' w-full min-h-screen  z-50' id='skills'>
        <article className='w-90 m-auto flex flex-col pt-10  md:flex-row'>
            <div className=' flex flex-col gap-10 item-left justify-center lg:-translate-y-10 xl:lg:translate-y-8'>
                <div>
                    <h1 className=' font-Abril text-1xl xs:text-2xl font-font-medium tracking-wide ss:text-5xl'>
                        <span>S</span>
                        <span>k</span>
                        <span>i</span>
                        <span>l</span>
                        <span>l</span>
                        <span>s</span>
                        <span> &</span>
                        <br />
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
                        Visit my <a href="" className= {` ${themes? 'text-text_color' : 'text-primary'}  cursor-pointer font-font_semiMedium`} >LinkedIn</a> profile for more details or just <a href="" className= {` ${themes? 'text-text_color' : 'text-primary'}  cursor-pointer font-font_semiMedium`} >Contact</a> me.
                    </p>
                </div>
            </div>

            <div className=' md:pt-28 z-50'>
                <TextShpere/>
            </div>


        </article>
    </section>
  )
}

export default Skills