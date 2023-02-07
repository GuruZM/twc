import React, { useEffect } from 'react'
import Navbar from "../components/Navbar"
import {gsap} from "gsap"
import bg from "../assets/images/serviceb.jpg"

import LogoSlider from '../components/LogoSlider'
import { Swiper, SwiperSlide } from "swiper/react";
 

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
      <Navbar/>
    <div  
    style={{ backgroundImage: `url(${bg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    
    }}
    className="h-3/4 w-full hero"
    >
<div className='bg-[#27082A] h-full opacity-80  '>
<div className=' w-4/5    py-28 m-auto h-full flex flex-col md:flex-row justify-around '>
 
<h2 className='text-white h-full font-bold my-20 mb-20 flex items-center text-5xl md:text-6xl'>
  <span className='pb-10 border-b-2 text-center rounded-md border-yellow-500'> <span className='header '>A <span className='text-yellow-500'>Solution</span> for <br/> Every Need</span> </span> 
 
 </h2>
  

  
</div>

</div>

    </div>
      <div className='py-20 space-x-5 md:space-x-10 px-20 flex justify-center h-1/5'>
  <div className='text-center  shadow-sm shadow-[#27082A]  hover:scale-110 cursor-pointer transition ease-in-out duration-150 rounded-xl p-5'>
    {/* <img src={teamwork} alt="" width={150} /> */}
    <p className='text-sm font-medium'>Training  </p>
  </div>
  <div className='text-center shadow-sm shadow-yellow-500 hover:scale-110 cursor-pointer transition ease-in-out duration-150 rounded-xl p-5'>
    {/* <img src={integrity} alt="" width={150} /> */}
    <p  className='text-sm font-medium'>Coaching </p>
  </div>
  <div className='text-center shadow-sm shadow-[#27082A]  hover:scale-110 cursor-pointer transition ease-in-out duration-150 rounded-xl p-5'>
    {/* <img src={teamwork} alt="" width={150} /> */}
    <p  className='text-sm font-medium'>Media</p>
  </div>

  <div className='text-center shadow-sm rounded-xl hover:scale-110 cursor-pointer transition ease-in-out duration-150 shadow-yellow-500 p-5'>
    {/* <img src={teamwork} alt="" width={150} /> */}
    <p></p>
    <p  className='text-sm font-medium'> Business </p>
  </div>

      </div>
    </div>
  )
}
