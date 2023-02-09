import React,{useState,useEffect} from 'react'
import {BiMenuAltRight} from "@react-icons/all-files/bi/BiMenuAltRight"
import {IoMdClose} from "@react-icons/all-files/io/IoMdClose"
import {gsap} from "gsap"
import logo from "../assets/images/logo.png"
import pdf from "../assets/twc.pdf"
import { HashLink } from 'react-router-hash-link';

import { Link, animateScroll as scroll } from "react-scroll";
 import { Link as RouterLink } from 'react-router-dom';
export default function Navbar() {
  
  const [menuTogle, setMenuTogle] = useState(false)
  
  // useEffect(()=>{
  //   let tl = gsap.timeline();
  //   let tl2 = gsap.timeline();
  //   tl2.fromTo(
  //     ".logo",
      
  //     {
  //       y:30,    
  //       opacity:0,
  //       duration:2,
  //       ease:"power2.inOut",
  //     },
  //     {
  //       y:0,
  //       opacity:1,
  //       ease:"power2.inOut"
  //     }
  //   )

  //   tl.fromTo(
  //     ".link1",
  //     1.2,
  //     {
  //       y:30,    
  //       opacity:0,
  //       duration:2,
  //       ease:"power2.inOut",
  //     },
  //     {
  //       y:0,
  //       opacity:1,
  //       ease:"power2.inOut"
  //     }
  //   ).fromTo(
  //     ".link2",
  //     1.2,
  //     {
  //       y:30,    
  //       opacity:0,
  //       duration:2,
  //       ease:"power2.inOut",
  //     },
  //     {
  //       y:0,
  //       opacity:1,
  //       ease:"power2.inOut"
  //     }
  //   ).fromTo(
  //     ".link3",
  //     1.2,
  //     {
  //       y:30,    
  //       opacity:0,
  //       duration:2,
  //       ease:"power2.inOut",
  //     },
  //     {
  //       y:0,
  //       opacity:1,
  //       ease:"power2.inOut"
  //     }
  //   ).fromTo(
  //     ".link4",
  //     1.2,
  //     {
  //       y:30,    
  //       opacity:0,
  //       duration:2,
  //       ease:"power2.inOut",
  //     },
  //     {
  //       y:0,
  //       opacity:1,
  //       ease:"power2.inOut"
  //     }
  //   ).fromTo(
  //     ".link5",
  //     1.2,
  //     {
  //       y:30,    
  //       opacity:0,
  //       duration:2,
  //       ease:"power2.inOut",
  //     },
  //     {
  //       y:0,
  //       opacity:1,
  //       ease:"power2.inOut"
  //     }
  //   )
  // });

  useEffect(() => {
    gsap.fromTo(
      '.nav-link',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, [menuTogle]);

  const toggleMenu = ()=>
  {
    setMenuTogle(menuTogle=>!menuTogle)
  }
 
  return (
    <>
   <div className='shadow-lg z-40 fixed  bg-white w-full items-center     border-yellow-500'>
       
       <div className='w-4/5 m-auto justify-between items-center   py-2 flex'>
      <a href="/"> <img src={logo} alt="" className='animate-vertical-spin' width={50} /></a> 
        
    <BiMenuAltRight 
    className='md:hidden cursor-pointer'
    onClick={toggleMenu}
    size={30}/>

   
        <div className='hidden md:flex items-center pr-6 space-x-10 animate-vertical-spin'>
        <a 
             href="/"
            className='nav-link text-xs font-semibold text-[#27082A] cursor-pointer'>
              HOME
              </a>
         
{/*          
              <a 
             href="/about"
            className='link2 text-xs font-semibold text-[#27082A] cursor-pointer'>
              ABOUT
              </a> */}


            <HashLink 
            to="/#about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='text-xs nav-link s cursor-pointer text-[#27082A] font-semibold'>ABOUT</HashLink >
            
            
            <a href="/services"
            className='nav-link text-xs cursor-pointer text-[#27082A] font-semibold'> SERVICES 
            </a>

            {/* <a 
             href="/#about"
            className='link4 text-xs font-semibold  px-6 py-3 bg-yellow-500 rounded-md text-white cursor-pointer'>
              CONTACT
              </a> */}
            <HashLink 
            to="/#contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='nav-link text-xs cursor-pointer    text-[#27082A] rounded-md font-semibold'>
              CONTACT
              </HashLink>

              <a 
              target = "_blank"
             href={pdf}
            className='nav-link text-xs font-semibold  px-6 py-3 bg-yellow-500 rounded-md text-white cursor-pointer'>
              PROFILE
              </a>
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
    <li className='nav-link text-3xl font-semibold'><a href="/" onClick={toggleMenu}>Home</a> </li>
    <li className='nav-link text-3xl font-semibold'><HashLink 
            to="/#about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
            className='nav-link   s cursor-pointer text-white  font-semibold'>About</HashLink > 
             </li>
    <li className='nav-link text-3xl font-semibold'><a href="/services" >Services</a> </li>
    <li className='nav-link  text-3xl font-semibold'> <HashLink 
            to="/#contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleMenu}
            className='link4   cursor-pointer    text-white rounded-md font-semibold'>
              Contact
              </HashLink></li>

              <li className='nav-link text-3xl'>
              <a 
             target = "_blank"
             href={pdf}
            className='  font-semibold  px-6 py-3 border-2 border-yellow-500 rounded-full text-white cursor-pointer'>
              Profile
              </a>
              </li>
    {/* <li className='link4 text-3xl font-semibold'>CO</li>  */}

</ul>
</div>:null}
    
    </div>   
   
   
  
    </div>
  </>
  )
}
