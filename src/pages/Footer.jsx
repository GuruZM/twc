import React from 'react'
import logo from "../assets/images/logo.png"
import {FaFacebookF} from "@react-icons/all-files/fa/FaFacebookF"
import {RiInstagramLine} from "@react-icons/all-files/ri/RiInstagramLine"
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter"
import bg from "../assets/images/footer.jpg"
export default function Footer() {
  return (
    <div 
    style={{
      backgroundImage: `url(${bg})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
    }}
  
    className=' h-72 relative    '>
      <h2 className='text-black absolute m-right m-left-0  m-auto z-40'>@guru_zm</h2>
      <div className='absolute h-full w-full  bg-[#27082A] opacity-95 '></div> 
   <h2 className='text-white absolute left-0 bottom-2 text-2xl font-bold opacity-20  right-0 mx-auto text-center z-40'>@guru_zm</h2>
    {/* <div className='h-28 bg-white absolute -top-10 left-0 right-0 m-auto  w-4/5 shadow-2xl'>

    </div> */}
        <div className='w-4/5 m-auto flex items-center'>
   
      <div className='md:flex flex-col hidden  z-10 pt-10 justify-center   h-full'>
      <img src={logo} alt="" className='pb-2' width={80} />
     {/* <p className='text-white text-xs'>TSALACHWORTH
CONSULTANCY</p>  */}
      </div>
      <div className='flex md:flex-row flex-col w-full justify-around items-center  text-white '>
  <div className='z-20   px-10 pl-24'>
    <h2 className='py-10 font-bold'>QUICK LINKS</h2>
    <ul>
    <li className='text-sm  text-white'>Call: +26097636362</li>
        <li className='text-sm py-5'>Email: info@TWC.com</li>
      <div className='flex  space-x-5'>
      <li className=''>Services</li>
      <li className=''>About</li>
      <li className=''>Contact</li>
      </div>
      
    </ul>
  </div>
  <div className='   flex   border-yellow-500 md:flex-row  justify-evenly items-center py-5 space-x-10 md:space-y-0  md:space-x-5  '>

     
      <span> <FaFacebookF className='opacity-70   hover:scale-110 cursor-pointer   transition ease-in-out duration-150 text-white' size={20}/></span> 
     <span> <RiInstagramLine className='text-white z-10 opacity-70 hover:scale-110 cursor-pointer transition ease-in-out duration-150' size={20}/></span> 
      <span> <FaTwitter className='text-white opacity-70  hover:scale-110 cursor-pointer transition ease-in-out duration-150' size={20}/></span> 
   
  </div>
      </div>
        </div>
    </div>
  )
}
