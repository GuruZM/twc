import React from 'react'
import ceo from "../assets/images/ceo.jpg"
import { Fade } from "react-awesome-reveal";
export default function Ceo() {
  return (
    <div className=' min-h-fit flex pb-28 space-x-16 mt-20'>
           
           
            <div className='  m-auto w-4/5 space-x-20   border-yellow-500 min-h-fit'>
          
                <div className='flex relative md:space-x-20 md:flex-row flex-col  justify-center items-center'>
                
                <div className=' '>
                <Fade delay={100} duration={1000} direction="up">  <h2 className=' pl-20  text-4xl text-[#27082A] font-bold font-Montserrat pb-2   border-yellow-500 '> 
                 OUR <span className='text-yellow-500'>CEO</span> 
                </h2></Fade>
                <h2 className=' absolute top-2 md:top-14 z-0 opacity-10  font-bold text-9xl  '> 
                <Fade delay={100} duration={1000} direction="down">      OUR CEO</Fade>
                </h2>
            

                <Fade delay={100} duration={3000} direction="up"> <p className=' mb-10 w-full font-medium pt-10 px-5 text-sm font-Montserrat max-w-xl  '>
                Maureen Nenechi Kaseloki is the Managing
Consultant and CEO of Tsalachworth Consultancy
Limited. She is an accomplished accounting and
auditing professional with over 10 years experience
at management level.

                </p></Fade>
                    
                    </div>
                <img src={ceo} alt="" className='rounded-3xl ' width={380} />
                </div>
            </div>
            
    </div>
  )
}
