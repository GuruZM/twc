import React from "react";
import media from "../assets/images/media.jpg";
import weare from "../assets/images/t.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Glance() {
  return (
    <div className=" max-h-fit relative min-h-fit flex">
      <div className="bg-[#27082A] w-0 transparent border-yellow-500 md:w-2/5 text-center rounded-r-2xl h-[560px]">
        <p className="font-medium hidden md:flex font-Montserrat px-10 text-right font-Montserrat text-yellow-500 py-12">
          Transforming challenges into opportunities.
        </p>
      </div>
      <div className=" md:w-full  ">
        <p className=" max-w-2xl font-medium px-5 font-Montserrat text-sm pt-10 md:ml-32 tracking-wider pb-5      md:leading-relaxed ">
          TWC provides a wide range of coaching, training, business advisory and
          media services. The services are unique in the sense that they are all
          practical based and provided by a team which is vested with the right
          experience and competence
        </p>
        <hr className="w-1/2 md:hidden m-auto bg-yellow-500 h-1  " />
      </div>
     
      <div
        // style={{
        //   backgroundImage: `url(${weare})`,
        //   backgroundPosition: "center center",
        //   backgroundSize: "cover",
         
      
        // }}
        className=" absolute top-44 h-[500px]  
        w-full  md:w-4/5 rounded-xl left-0 right-0 mx-auto  bg-[#27082A] "
      >
          
        <div className="h-full rounded-xl  opacity-60   ">
          <div className="flex flex-col justify-center   md:px-0 lg:px-0 items-center space-y-10">
            
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper2   h-[500px]"
        style={{ 
          height:500
         }}
      >
       
        <SwiperSlide 
        style={{ 
          backgroundImage: `url(${weare})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
         }}
        className="h-[500px]">
           <div className="h-full text-white flex items-center justify-center  ">
           <h2 className="text-5xl md:text-3xl"> Empower Growth</h2>
           </div>
           </SwiperSlide>
           <SwiperSlide 
        style={{ 
          backgroundImage: `url(${slide2})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
         }}
        className="h-[500px]">
          <div className="h-full text-white flex items-center justify-center  ">
          <h2 className="text-5xl md:text-3xl">  Inspire Excellence</h2>
           </div>
           </SwiperSlide>
           <SwiperSlide 
        style={{ 
          backgroundImage: `url(${slide3})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
         }}
        className="h-[500px]">
         <div className="h-full flex text-white items-center justify-center  ">
         <h2 className="text-5xl md:text-3xl"> Maximize Impact</h2>
           </div>
           </SwiperSlide>
           <SwiperSlide 
        style={{ 
          backgroundImage: `url(${slide4})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
         }}
        className="h-[500px]">
         <div className="h-full flex items-center justify-center  ">
         <h2 className="text-5xl md:text-3xl"> Nurture Talent </h2>
           </div>
           </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
     
      </Swiper>

            {/* <div className=' max-w-xl text-center my-2 bg-[#27082A] text-white py-2 px-5  rounded-md '>
            <h2 className='font-bold py-2'>Our Vision</h2>
            <p className='text-sm'>To be a leading partner in achieving individual,
organizational & business peak performance by
providing world class services that speak to present &
future needs of our clients.</p>
        </div>
        <div className=' max-w-xl text-center my-2 bg-[#27082A] text-white  rounded-md '>
            <h2 className='font-bold py-2'>Our Mission</h2>
            <p className='text-sm'>A hub of transformation that guarantees unique business
solutions and a parallel shift towards peak performance.
.</p>
        </div> */}
          </div>
        </div>
       </div>
       </div>
     
  );
}
