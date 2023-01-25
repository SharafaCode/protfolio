import React from 'react'
import { motion } from 'framer-motion'

const Blogs = () => {
  return (
    <motion.section 
    initial= {{scaleY: 0, opacity: 0}}
    animate={{scaleY: 1, opacity: 1}}
    exit={{scaleY: 0, opacity: 0}}
    transition={{duration:0.5}}
    className=' w-full min-h-screen flex items-center justify-center ' id='blogs'>
        <article>
            <div>
                <div>
                    <div>
                        <h1 className=' text-lg'>
                            Coming Soon......................
                        </h1>
                    </div>
                </div>
            </div>
        </article>
    </motion.section>
  )
}

export default Blogs