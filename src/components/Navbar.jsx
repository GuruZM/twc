import React,{useState,useEffect} from 'react'
import {BiMenuAltRight} from "@react-icons/all-files/bi/BiMenuAltRight"
import {IoMdClose} from "@react-icons/all-files/io/IoMdClose"
import {gsap} from "gsap"
import logo from "../assets/images/logo.png"

import { Link, animateScroll as scroll } from "react-scroll";
 import { Link as RouterLink } from 'react-router-dom';
export default function Navbar() {
  
  const [menuTogle, setMenuTogle] = useState(false)
  
  useEffect(()=>{
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    tl2.fromTo(
      ".logo",
      
      {
        y:30,    
        opacity:0,
        duration:2,
        ease:"power2.inOut",
      },
      {
        y:0,
        opacity:1,
        ease:"power2.inOut"
      }
    )

    tl.fromTo(
      ".link1",
      1.2,
      {
        y:30,    
        opacity:0,
        duration:2,
        ease:"power2.inOut",
      },
      {
        y:0,
        opacity:1,
        ease:"power2.inOut"
      }
    ).fromTo(
      ".link2",
      1.2,
      {
        y:30,    
        opacity:0,
        duration:2,
        ease:"power2.inOut",
      },
      {
        y:0,
        opacity:1,
        ease:"power2.inOut"
      }
    ).fromTo(
      ".link3",
      1.2,
      {
        y:30,    
        opacity:0,
        duration:2,
        ease:"power2.inOut",
      },
      {
        y:0,
        opacity:1,
        ease:"power2.inOut"
      }
    ).fromTo(
      ".link4",
      1.2,
      {
        y:30,    
        opacity:0,
        duration:2,
        ease:"power2.inOut",
      },
      {
        y:0,
        opacity:1,
        ease:"power2.inOut"
      }
    ).fromTo(
      ".link5",
      1.2,
      {
        y:30,    
        opacity:0,
        duration:2,
        ease:"power2.inOut",
      },
      {
        y:0,
        opacity:1,
        ease:"power2.inOut"
      }
    )
  });

  const toggleMenu = ()=>
  {
    setMenuTogle(menuTogle=>!menuTogle)
  }
 
  return (
    <>
   <div className='shadow-lg z-40 fixed  bg-white w-full items-center   py-2 flex justify-around   border-yellow-500'>
        <img src={logo} alt="" className='pb-2  animate-vertical-spin' width={50} />
        
    <BiMenuAltRight 
    className='md:hidden cursor-pointer'
    onClick={toggleMenu}
    size={30}/>

   
        <div className='hidden md:flex items-center space-x-10 animate-vertical-spin'>
        <a 
             href="/"
            className='link1 text-xs font-semibold text-[#27082A] cursor-pointer'>
              HOME
              </a>
         
         
              <a 
             href="/about"
            className='link2 text-xs font-semibold text-[#27082A] cursor-pointer'>
              ABOUT
              </a>
            {/* <Link  
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='link2 text-xs  s cursor-pointer text-[#27082A] font-semibold'>ABOUT</Link > */}
            
            
            <a href="/services"
            className='link3 text-xs cursor-pointer text-[#27082A] font-semibold'> SERVICES 
            </a>

            <a 
             href="/about"
            className='link4 text-xs font-semibold  px-6 py-3 bg-yellow-500 rounded-md text-white cursor-pointer'>
              CONTACT
              </a>
            {/* <Link 
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='link4 text-xs cursor-pointer text-[#27082A] font-semibold'>
              CONTACT
              </Link> */}
            {/* <a
            href='surge'
             className='link5 text-white text-xs cursor-pointer   px-5 py-2 bg-yellow-500 rounded-md font-semibold'>
              SURGE</a>           */}

        </div>
  
    
    
     {menuTogle ? 
     
     <div className='absolute  z-50 top-0 left-0 w-full h-screen flex flex-col   justify-center items-center   bg-[#27082A]'>
      <IoMdClose
      onClick={toggleMenu}
      className='absolute right-20 top-10 cursor-pointer'
      size={30}
      color="white"
      />

    <ul className=" md:hidden flex  text-white items-center justify-center space-y-10 flex-col ">
    <li className='link1 text-3xl font-semibold'><a href="/" onClick={toggleMenu}>Home</a> </li>
    <li className='link2 text-3xl font-semibold'><a href="/about" onClick={toggleMenu}>About</a> </li>
    <li className='link3 text-3xl font-semibold'><a href="/services" onClick={toggleMenu}>Services</a> </li>
    <li className='link4  text-3xl font-semibold'> <a href="/services" onClick={toggleMenu}>Contact</a> </li>
    {/* <li className='link4 text-3xl font-semibold'>CO</li>  */}

</ul>
</div>:null}
    
    </div>:   
   
   
  
  
  </>
  )
}
