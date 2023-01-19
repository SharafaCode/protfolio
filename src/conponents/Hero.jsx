import React from 'react';
import { Icon } from '@iconify/react';
import Name from './Name';
import CTA from './CTA';
import Header from './Header';

const Hero = () => {
  return (
   <section className='w-full h-95 overflow-hidden relative'>
    <Header/>
    <article className=' w-90 m-auto relative'>
      <div className=' absolute top-0 left-0 mt-20'>
        <div className='hidden xs:flex items-center justify-center font-Kaushan font-font_medium text-base text-gray-500 select-none'>
        <Icon icon="material-symbols:arrow-back-ios" />
           head
        <Icon icon="material-symbols:arrow-forward-ios" />
        </div>
      </div>
      <div className=' absolute top-0 right-0 -translate-x-48 mt-32'>
        <div className='hidden xs:flex items-center justify-center font-Kaushan font-font_medium text-base text-gray-500 select-none'>
        <Icon icon="material-symbols:arrow-back-ios" />
           body
        <Icon icon="material-symbols:arrow-forward-ios" />
        </div>
      </div>
      <div className=' absolute top-0 right-0 mt-64'>
        <div className='hidden xs:flex items-center justify-center font-Kaushan font-font_medium text-base text-gray-500 select-none'>
        <Icon icon="material-symbols:arrow-back-ios" />
           h1
        <Icon icon="material-symbols:arrow-forward-ios" />
        </div>
      </div>
      <div className=' absolute top-0 right-0 translate-y-96'>
        <div className='hidden xs:flex items-center justify-center font-Kaushan font-font_medium text-base text-gray-500 select-none'>
        <Icon icon="material-symbols:arrow-back-ios" />
           p
        <Icon icon="material-symbols:arrow-forward-ios" />
        </div>
      </div>

      <div>
        <Name/>
      </div>

      <div className=' absolute bottom-0 left-0 -translate-y-80'>
        <div className='hidden xs:flex items-center justify-center font-Kaushan font-font_medium text-base text-gray-500 select-none'>
        <Icon icon="material-symbols:arrow-back-ios" />
           /p
        <Icon icon="material-symbols:arrow-forward-ios" />
        </div>
      </div>
      <div className=' absolute bottom-0 left-0 -translate-y-52'>
        <div className='hidden xs:flex items-center justify-center font-Kaushan font-font_medium text-base text-gray-500 select-none'>
        <Icon icon="material-symbols:arrow-back-ios" />
           /h1
        <Icon icon="material-symbols:arrow-forward-ios" />
        </div>
      </div>
      <div className=' absolute bottom-0 left-0 translate-x-48 -translate-y-36'>
        <div className='hidden xs:flex items-center justify-center font-Kaushan font-font_medium text-base text-gray-500 select-none'>
        <Icon icon="material-symbols:arrow-back-ios" />
           /body
        <Icon icon="material-symbols:arrow-forward-ios" />
        </div>
      </div>
      <div className=' absolute bottom-0 right-0 -translate-y-16'>
        <div className='hidden xs:flex items-center justify-center font-Kaushan font-font_medium text-base text-gray-500 select-none'>
        <Icon icon="material-symbols:arrow-back-ios" />
           /head
        <Icon icon="material-symbols:arrow-forward-ios" />
        </div>
      </div>

      <div>
        <CTA/>

      </div>


    </article>
   </section>
  )
}

export default Hero