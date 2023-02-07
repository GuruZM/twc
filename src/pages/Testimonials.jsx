import React from 'react'
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonials() {


  return (
    <div className='max-h-fit   pt-20'>
        <h2 className='text-center text-4xl text-[#27082A]  font-Montserrat font-bold '>
        TESTIMONIALS
        </h2>
        <p className='py-5 font-medium text-center text-yellow-500'> What Our Clients have to Say</p>
        <div className='w-4/5 h-52 m-auto'>
            
  <Swiper
        scrollbar={{
          hide:true,
        }}
        modules={[Scrollbar]}
        className="swipper2"
      >
        <SwiperSlide 
        style={{ 
            backgroundColor:"white",
            fontSize:15,
      
            fontWeight:500
         }}
        className='  px-20 text-center '> 
        "I highly recommend TWC for anyone looking to take their business to the next level. Their team of experts provided valuable insights and strategies that helped me to increase my revenue and boost my bottom line."
        </SwiperSlide>
        <SwiperSlide 
         style={{ 
            backgroundColor:"white",
            color:"black",
            fontSize:15,
         
            fontWeight:500
         }}
        className='px-20  text-center'> 
        "TWC has been a game changer for my business. Their coaching and training programs have helped me to improve my leadership skills and grow my company."
        </SwiperSlide>
        <SwiperSlide
         style={{ 
            backgroundColor:"white",
            fontSize:15,
      
            fontWeight:500
         }}
        className='px-20  text-center'> 
        "TWC's business development services helped me to identify new market opportunities and expand my customer base. Their guidance was essential to the success of my company."
        </SwiperSlide>
        <SwiperSlide 
         style={{ 
            backgroundColor:"white",
            color:"black",
            fontSize:15,
      
            fontWeight:500
         }}
        className='px-20  text-center'> 
        "I have been working with TWC for several months and have seen significant improvements in my team's performance. Their coaching and training programs have helped to build a strong, cohesive team that is focused on achieving our goals."
        </SwiperSlide>
        <SwiperSlide 
         style={{ 
            backgroundColor:"white",
            fontSize:15,
      
            fontWeight:500
         }}
        className='px-20  text-center'> 
        "TWC helped me to streamline my operations and improve my efficiency. Their expertise in business development and process improvement was instrumental in helping me to increase my profitability."
        </SwiperSlide >
        <SwiperSlide 
         style={{ 
            backgroundColor:"white",
            color:"black",
            fontSize:15,
      
            fontWeight:500
         }}
        className='px-20   text-center'> 
        "I have been extremely impressed with the level of service and expertise provided by TWC. Their team of coaches and trainers are knowledgeable, responsive, and dedicated to helping their clients succeed."
        </SwiperSlide>
        
      </Swiper>
      </div>
      <div class="custom-shape-divider-bottom-1675409371">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
    </svg>
</div>
      </div>
  )
}
