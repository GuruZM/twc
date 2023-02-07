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
      <div className='absolute h-full w-full  bg-[#27082A] opacity-95 '></div> 
    {/* <div className='h-28 bg-white absolute -top-10 left-0 right-0 m-auto  w-4/5 shadow-2xl'>

    </div> */}
        <div className='w-4/5 px-20  flex  items-center'>
      <div className='md:flex flex-col hidden  z-10 pt-10 justify-center items-center w-3/4 h-full'>
      <img src={logo} alt="" className='pb-2' width={80} />
     {/* <p className='text-white text-xs'>TSALACHWORTH
CONSULTANCY</p>  */}
      </div>
      <div className='flex w-full justify-around items-center text-white '>
  <div className='z-20 px-10 pl-24'>
    <h2 className='py-10 font-bold'>QUICK LINKS</h2>
    <ul>
    <li className='text-sm text-white'>Call: +26097636362</li>
        <li className='text-sm py-5'>Email: info@TWC.com</li>
      <div className='flex space-x-5'>
      <li className=''>Services</li>
      <li className=''>About</li>
      <li className=''>Contact</li>
      </div>
      
    </ul>
  </div>
  <div className='  py-10 pl-20'>
    {/* <h2 className='py-10 font-bold  '>Social Media</h2> */}
    <div className='flex    space-x-5'>
      <FaFacebookF className='opacity-70   hover:scale-110 cursor-pointer transition ease-in-out duration-150 text-white' size={23}/>
      <RiInstagramLine className='text-white z-10  hover:scale-110 cursor-pointer transition ease-in-out duration-150' size={23}/>
       <FaTwitter className='text-white opacity-70  hover:scale-110 cursor-pointer transition ease-in-out duration-150' size={23}/>
    </div>
    {/* <div>
      <ul>
        <li className='text-sm py-5'>Call: +26097636362</li>
        <li className='text-sm'>Email: info@TWC.com</li>
      </ul>
    </div> */}
  </div>
      </div>
        </div>
    </div>
  )
}
