import React from 'react'


const Contact = () => {
  return (
    <section className=' w-full min-h-screen overflow-hidden' id='contact'>
        <article className=' w-90 m-auto flex flex-col items-left justify-center gap-14 pt-10'>
            <div className='grid md:grid-cols-2 gap-20 md:pb-3'>

                <div className=' flex flex-col items-left justify-center gap-10'>
                    <div className=' flex flex-col items-left justify-center gap-14'>
                        <h1 className=' font-Abril text-1xl xs:text-2xl font-font-medium tracking-wide'>
                            <span>C</span>
                            <span>o</span>
                            <span>n</span>
                            <span>t</span>
                            <span>a</span>
                            <span>c</span>
                            <span>t</span>
                            <span> M</span>
                            <span>e</span>
                        </h1>
                        <div  className=' flex flex-col gap-5 text-gray_color text-sm'>
                            <p>
                                I'm interested in freelance opportunities, Part Time And Junior Developer Roles. 

                            </p>
                            <p>
                                However, if you have other request or  questions, please don't hesitate to use the contact form.

                            </p>
                        </div>
                    </div>

                    <div>

                        <form action="" className='flex flex-col gap-4'>
                            <div className='flex flex-col items-center justify-center gap-8 ss:flex-row'>
                                <input type="text" name='name' placeholder='Name' className='w-full h-20 rounded-xl text-xs border border-gray-500 bg-transparent pl-5 tracking-widest font-font_medium'/>
                                <input type="text" name='email' placeholder='Email' className='w-full h-20 rounded-xl text-xs border border-gray-500  bg-transparent pl-5 tracking-widest font-font_medium'/>
                            </div>
                            <div>
                                <input type="text" name='subject' placeholder='Subject' className='w-full h-20 rounded-xl text-xs border border-gray-500  bg-transparent pl-5 tracking-widest font-font_medium'/>
                            </div>
                            <div>
                            <textarea name="message" placeholder='Message'  className='w-full h-56 rounded-xl text-xs border border-gray-500  bg-transparent pl-5 tracking-widest font-font_medium '></textarea>
                            </div>
                            <div className=' btn'>
                                <button className='  rounded-xl buttn text-sbase'>Contact me!</button>

                            </div>
                        </form>
                    </div>

                </div>

                <div className='block md:-translate-y-6 -z-20 '>
                    <iframe className='w-full h-80 md:h-full rounded-3xl box-shadow'  id="gmap_canvas" src="https://maps.google.com/maps?q=17,%20Basheer%20Augusto%20street,%20Surulere&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>


                </div>

            </div>


        </article>
    </section>
  )
}

export default Contact