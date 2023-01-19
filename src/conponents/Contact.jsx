import React from 'react'


const Contact = () => {
  return (
    <section className=' w-full min-h-screen pb-40' id='contact'>
        <article className=' w-90 m-auto flex flex-col items-left justify-center gap-14 '>
            <div className=' flex flex-col items-left justify-center'>
                <div className=' flex flex-col items-left justify-center gap-10'>
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
            </div>

            <div>
                <form action="" className='flex flex-col gap-8 '>
                    <div className='flex flex-col items-center justify-center gap-8'>
                        <input type="text" name='name' placeholder='Name' className='w-full h-24 rounded-xl text-base bg-input_bg_color placeholder-text_color pl-5 ' />
                        <input type="email" name='email' placeholder='Email' className='w-full h-24 rounded-xl text-base bg-input_bg_color placeholder-text_color pl-5 '/>
                    </div>
                    <div>
                        <input type="text" name='subject' placeholder='Subject' className='w-full h-24 rounded-xl text-base bg-input_bg_color placeholder-text_color pl-5 '/>
                    </div>
                    <div>
                       <textarea name="message" placeholder='Message'  className='w-full h-52 rounded-xl text-base bg-input_bg_color placeholder-text_color pl-5 '></textarea>
                    </div>
                    <div>
                        <button type='submit' className=' w-fit h-fit p-28 pt-7 pb-7 bg-input_bg_color rounded-xl text-base'>
                            Submit!

                        </button>
                    </div>
                </form>
            </div>


        </article>
    </section>
  )
}

export default Contact