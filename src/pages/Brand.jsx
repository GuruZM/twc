import React from 'react'
import bg from "../assets/images/clients.jpg"
 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



export default function Brand() {
  return (
    <div
    style={{ backgroundImage: `url(${bg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment:"fixed"
    
    }}
    className=" h-[500px]"
    > 
    <div className='bg-[#27082A] w-full  h-full flex flex-col  justify-center opacity-80'>
    <Swiper
        // slidesPerView={1}
        spaceBetween={100}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="brandswiper"
      >
        <SwiperSlide
        style={{ 
          backgroundColor:"transparent",
          color:"white",
          fontSize:15,
      
          fontWeight:500

         }}
         className="text-center  tracking-wider   m-auto   text-white font-Montserrat font-medium"
        >"TWC realizes the importance of functional
knowledge and its impact in developing
business solutions hence relies on scientific
market research information"</SwiperSlide>

<SwiperSlide
        style={{ 
          backgroundColor:"transparent",
          color:"white",
          fontSize:15,
      
          fontWeight:500
       

         }}
         className="w-56 text-center  tracking-wider   m-auto   text-white font-Montserrat font-medium"
        >"TWC draws its inspiration from industry best
        practices, professional experiences and the
        existing gaps for excellency in service
        provision. "</SwiperSlide>

<SwiperSlide
        style={{ 
          backgroundColor:"transparent",
          color:"white",
          fontSize:15,
      
          fontWeight:500
         }}
         className="w-56 text-center  tracking-wider   m-auto   text-white font-Montserrat font-medium"
        >"TWC brings a new dimension of
        industry knowledge to spur business and
        individual growth."</SwiperSlide>
       
     
      </Swiper>
         
     
       
        {/* <p className='p-2 rounded-full border-2 max-w-lg border-yellow-500'>
          TWC
        </p> */}
    </div>
            
    </div>
  )
}
