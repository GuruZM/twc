import React, { useEffect } from 'react'
import Navbar from "../components/Navbar"
import {gsap} from "gsap"
import bg from "../assets/images/herobg.jpg"

import LogoSlider from '../components/LogoSlider'
import { Swiper, SwiperSlide } from "swiper/react";
import training from "../assets/illustration/training.png"
import teamwork from "../assets/icons/teamwork.png"
import integrity from "../assets/icons/integrity.png"
import coaching from "../assets/illustration/coaching.png"
import media from "../assets/illustration/media.png"
import business from "../assets/illustration/business.png"

import "swiper/css";
import "swiper/css/effect-cards";


import { EffectCards } from "swiper";

export default function Hero() {

 useEffect(()=>{
  let tl4=gsap.timeline();
  tl4.fromTo(
    ".header",2,
    { y: -100, opacity: 0 },
    { duration: 1, 
      stagger:1,
      y: 0, opacity: 1, ease: "power2.inOut" }
  )
//  tl4.from(".hero", {duration: 1, width: 0, to: {width: window.innerWidth}});

 })

  return (
    <div 
    id="home"
    className='min-h-max max-h-fit relative'>
    
    <div  
    style={{ backgroundImage: `url(${bg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    
    }}
    className="h-3/4 w-full hero"
    >
<div className='bg-[#27082A] h-full w-full opacity-80  '>
<div className=' w-4/5    py-28 m-auto h-full flex flex-col md:flex-row justify-around '>
 
<h2 className='text-white h-full font-bold my-20 mb-20 flex items-center text-5xl md:text-6xl'>
  <span className='pb-10 border-b-2 rounded-md border-yellow-500'> <span className='header '>A <span className='text-yellow-500'>Hub</span> of <br/> Transformation</span> </span> 
 
 </h2>
  

 <div className='flex  flex-col w-full pr-5  pb-10 md:pb-0 -skew-x-3 justify-center'>
 <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className='flex flex-col  '> 
          <img src={training} className="hidden md:block" alt="" width={200} />
            <span className='animate-pulse'> Training Services </span>
            
            <p className='md:hidden  text-sm'> We offer training services</p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col  '>
        <img src={coaching} className="hidden md:block" alt="" width={200} />
         <span className='animate-pulse'>Coaching Services </span>   
         <p className='md:hidden  text-sm'> We offer Coaching services</p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col  '>
        <img src={media} className="hidden md:block" alt="" width={150} />
         <span className='animate-pulse'> Media Services </span>
         <p className='md:hidden  text-sm'> We offer Media services</p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col  '>
        <img src={business} className="hidden md:block" alt="" width={200} />
          <span className='px-10'> Business Development Services  </span> 
          <p className='md:hidden  text-sm'> We offer Business development services</p>
        </SwiperSlide>
        
      </Swiper>
 </div>
</div>

</div>

    </div>
      <div className='py-20 space-x-5 md:space-x-10 px-20 flex justify-center h-1/5'>
  <div className='text-center  shadow-sm shadow-[#27082A]  hover:scale-110 cursor-pointer transition ease-in-out duration-150 rounded-xl p-5'>
    {/* <img src={teamwork} alt="" width={150} /> */}
    <p className='text-sm font-medium'>Teamwork </p>
  </div>
  <div className='text-center shadow-sm shadow-yellow-500 hover:scale-110 cursor-pointer transition ease-in-out duration-150 rounded-xl p-5'>
    {/* <img src={integrity} alt="" width={150} /> */}
    <p  className='text-sm font-medium'>Integrity </p>
  </div>
  <div className='text-center shadow-sm shadow-[#27082A]  hover:scale-110 cursor-pointer transition ease-in-out duration-150 rounded-xl p-5'>
    {/* <img src={teamwork} alt="" width={150} /> */}
    <p  className='text-sm font-medium'> Mastery </p>
  </div>

  <div className='text-center shadow-sm rounded-xl hover:scale-110 cursor-pointer transition ease-in-out duration-150 shadow-yellow-500 p-5'>
    {/* <img src={teamwork} alt="" width={150} /> */}
    <p  className='text-sm font-medium'> Excellence </p>
  </div>

      </div>
    </div>
  )
}
