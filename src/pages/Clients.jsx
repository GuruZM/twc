import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import who from "../assets/logo/who.png";
import mh from "../assets/logo/mh.png";
import ccp from "../assets/logo/ccpc.png";
import nm from "../assets/logo/nm.jpg";
import zcs from "../assets/logo/zcs.jpg";
import bla from "../assets/logo/bla.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Clients() {
  return (
    <div className="shadow-md">
      <div className="  max-h-fit py-8 pb-16 pt-8   w-4/5 m-auto">
        <h2 className="py-20 text-4xl text-[#27082A]  font-Montserrat font-bold">
          PLEASURE TO <span className="text-yellow-500">WORK</span> WITH!
        </h2>
        <div className="h-full w-full">
          <Swiper
            className="swipper2"
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            // modules={[Pagination]}
          >
            <SwiperSlide
              style={{
                backgroundColor: "white",
                // backgroundImage: `url(${who})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
              className="bg-white flex items-center justify-center "
            >
              <img src={who} width={100} alt="" />
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundColor: "white",
                // backgroundImage: `url(${who})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
              className="bg-white flex items-center justify-center"
            >
              <img src={nm} width={100} alt="" />
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundColor: "white",
                // backgroundImage: `url(${who})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
              className="bg-white"
            >
              <img src={mh} width={100} alt="" />
            </SwiperSlide>

            <SwiperSlide
              style={{
                backgroundColor: "white",
                // backgroundImage: `url(${who})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
              className="bg-white"
            >
              <img src={ccp} width={80} alt="" />
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundColor: "white",
                // backgroundImage: `url(${who})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
              className="bg-white"
            >
              <img src={zcs} width={60} alt="" />
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundColor: "white",
                // backgroundImage: `url(${who})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
              className="bg-white"
            >
              <img src={bla} width={80} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="py-16 text-sm font-Montserrat max-w-3xl font-medium">
          We pride ourselves in quality services delivery, for any type of
          client. We have had the privilege to provide coaching, training and
          business development services to WHO. Our team of experts have worked
          closely with WHO to support their mission of ensuring the highest
          possible level of health for all people. 
        </p>
      </div>
    </div>
  );
}
