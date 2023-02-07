import React,{useEffect} from 'react'
import weare from "../assets/images/weare.jpg"
import {FaFacebookF} from "@react-icons/all-files/fa/FaFacebookF"
import {RiInstagramLine} from "@react-icons/all-files/ri/RiInstagramLine"
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter"
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/all'
import { Fade } from "react-awesome-reveal";
 gsap.registerPlugin(ScrollTrigger) 
export default function WeAre() {

    // useEffect(() => {
    //     gsap.fromTo(".about",2, {
    //         y: 50,
            
    //         ease: "power3.inOut",
    //         opacity:0,
    //       scrollTrigger: {
    //         trigger: ".about",
    //         start: "top 70%",
    //         end: "bottom 30%",
    //         scrub: 1,
    //         toggleActions: "restart none none none"
    //       }, 
         
    //     }, {
    //         y:0,
    //         opacity:1,
    //     }
    //     );
    //   }, []);

    

  return (
    <div 
    id="about"
    className='flex relative   flex-col-reverse w-4/5 pt-28 m-auto md:flex-row justify-center'>
       
       
        <div 
        
        className='absolute   m-auto top-44 text-9xl z-0 font-bold opacity-10  '>
            About Us
        </div>

 

        <div className='w-full flex flex-col items-center'>
           <Fade delay={100} duration={1000}> <h2 className='pt-10 about text-4xl text-[#27082A]  font-Montserrat font-bold'>ABOUT <span className='text-yellow-500'>US</span></h2></Fade>
           <Fade delay={200} duration={1000} direction="up"> <p className='text-center font-medium text-[#27082A] max-w-3xl text-sm tracking-wider leading-relaxed pb-5 pt-10'>
            We conduct both group and individual trainings/coaching as well as
business advisory services on our focus areas and issue training
certificates under John Maxwell certification on some subjects. Through
our training/coaching services, we ensure that the client is competent
at the end of the training. We work closely with clients to establish their
training needs, develop tailor made products as well as advise on follow
up and implementation in the workplace.
            </p></Fade>

            <Fade delay={300} duration={1000} direction="up">  <p className='text-center font-medium text-[#27082A]  py-5 border-yellow-500 max-w-xl   text-sm tracking-wider leading-relaxed  mb-10  pt-5'>
            Ensuring and measuring the effectiveness of training is key to our
approach, hence we provide evaluation services. Where a business does
not have full time personnel to conduct certain duties within our focus
areas, we offer a service to manage the program/activity on agreed
terms and conditions.
            </p></Fade>

 <a href="" className='py-3 px-12 border-2 rounded-full bg-yellow-500 text-sm font-bold text-[#27082A] border-yellow-500 mb-16'>
 <Fade delay={300} duration={1000} direction="up">   Learn More</Fade>
</a>

            {/* <div className=''>
                <h2 className='font-bold py-2 text-2xl'>Our Vision</h2>
                <hr className='w-20 h-1 bg-yellow-500' />
                <p className='py-5 text-sm'>To be a leading partner in achieving individual,
organizational & business peak performance by
providing world class services that speak to present &
future needs of our clients.</p>
            </div>
            <div className='pl-5 '>
                <h2 className='font-bold py-2 text-2xl'>Our Mission</h2>
                <hr className='w-20 h-1 bg-yellow-500' />
                <p className='py-5 text-sm'>A hub of transformation that guarantees unique business
solutions and a parallel shift towards peak performance.</p>
            </div>
            <div className=' '>
                <h2 className='font-bold py-2 text-2xl'>Our Values</h2>
                <hr className='w-20 h-1 bg-yellow-500' />
                <p className='py-5 text-sm'>Our core values are centered on “TIME” which denotes
our delivery of services to our clients with timely
solutions and on time.
.</p>
            </div> */}
        </div>
        {/* <div className='md:flex md:pr-20  flex  md:pt-0 pt-10  items-center space-x-7  '>
            <FaFacebookF className='opacity-70   hover:scale-110 cursor-pointer transition ease-in-out duration-150 text-[#27082A]' size={25}/>
            <RiInstagramLine className='text-yellow-500  hover:scale-110 cursor-pointer transition ease-in-out duration-150' size={25}/>
            <FaTwitter className='text-[#27082A] opacity-70  hover:scale-110 cursor-pointer transition ease-in-out duration-150' size={25}/>
        </div> */}
        
    </div>
  )
}
