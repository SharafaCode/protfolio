import React, {useEffect, useRef} from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context';
import Rocket from '../assets/rocket.png';
import Cancel from '../assets/cancel.png';




const CTA = () => {

    const {themes, setThemes, menutoggle, setMenuToggle, linkdata, linksButton} = useGlobalContext();


  return (
    <>
    
    <div className='  lg:w-85 lg:hidden z-50'>
        {
            menutoggle &&
        

            <div className= ' w-full min-h-screen fixed right-0 left-0 bottom-0 bg-lightgray_color' >

                <div className={` ${themes? ' bg-cta_bg_color text-primary font-font_semiMedium ' : ' bg-black text-text_color font-font_medium'} duration-500 w-26 rounded-3xl text-xs tracking-wide fixed right-0 bottom-0 pt-1 pb-4 ${menutoggle? ' slideIn' : 'null'} mr-2 mb-36`}>

                    {/* <div className=' flex items-center justify-center cursor-pointer translate-y-7' onClick={()=> setMenuToggle(false)}>
                        <img src={close} alt=""  className=' w-10 invert'/>
                    </div> */}

                    <div>
                    {
                        linkdata.map((item, index) => {
                            

                            return (
                                <React.Fragment key={index}>
                                    <div id=' animateParent'>
                                    <ul className=' flex items-center' id='large-navlink-transition' >
                                        <li className= ' flex flex-col pl-5 pt-4 items-center justify-center cursor-pointer'>
                                            <NavLink to={item.path} className=' flex items-center justify-center gap-10' onClick={()=>{
                                                 setMenuToggle(false);
                                                 linksButton(index);
                                                 
                                            } }>
                                                <div >
                                                <img src={item.img} alt={item.title} className= {`${themes? 'invert-0' : ' invert'} w-10`} />
                                                </div>
                                                <div className=' text-sm font-font_semiMedium'>
                                                    <span>
                                                    {item.title}

                                                    </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                </React.Fragment>
                            )
                        })
                    }

                    </div>

                    



                </div>

            </div>

}

    </div>

    <div className=' fixed bottom-0 right-0 flex items-center justify-center mr-2 mb-8 lg:hidden'>
        <div className={` ${themes? 'bg-secondary' : 'bg-primary'} w-20 h-20 bg-secondary rounded-full flex items-center justify-center`}>
            <button className='flex items-center justify-center' onClick={()=> setMenuToggle((prev)=> !prev)}>

                {
                    menutoggle?
                    <span className=''>
                        <img src={Cancel} alt="Cancel" className={`${themes? ' invert-0' : ' invert'} w-9 cursor-pointer`} />

                    </span>


                :
                <span>
                    <img src={Rocket} alt="Rocket" className={`${themes? ' invert-0' : ' invert'} w-12 cursor-pointer`} />
                </span>
               


                }

            </button>
        </div>

    </div>

    </>
 
  )
}

export default CTA;