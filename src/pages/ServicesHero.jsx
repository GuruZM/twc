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

  useEffect(() => {
    gsap.fromTo(
      '.hero-text',
      1,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 3, stagger: 0.2 }
    );
    });  

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
<div className=' w-4/5    py-28  m-auto h-full flex flex-col md:flex-col justify-center items-center '>
 
<div className='text-white pt-10 h-full flex-col font-bold my-20 mb-20 flex items-center text-5xl md:text-6xl'>
  <h1 className='pb-8 uppercase hero-text text-center rounded-md border-yellow-500'> 
  A <span className='text-yellow-500'>Solution</span> for </h1>  
  <h1 className='hero-text uppercase md:-mt-5'>  Every Need </h1> 
  <hr className='w-28 border-2 mt-10 hero-text border-yellow-500' />
 </div>
  

  
</div>

</div>

    </div>
      <div className='py-20 space-x-2 md:space-x-10 flex justify-center h-1/5'>
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
