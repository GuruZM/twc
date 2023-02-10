import React,{useState} from 'react';
import logo from "../assets/images/logo.png"
import {CgMenuRound} from "@react-icons/all-files/cg/CgMenuRound"
import {SiWhatsapp} from "@react-icons/all-files/si/SiWhatsapp"
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook"
import {FaRocketchat} from "@react-icons/all-files/fa/FaRocketchat"

const FloatingActionButton = () => {

    const [toggleSocial,setToggleSocial] =  useState(false)
    return (
    <div 
    onClick={(()=>
        {
            setToggleSocial(!toggleSocial)
        })}
    className={`fixed  bottom-0 ${toggleSocial ? null: 'hover:scale-125 transition ease-in-out duration-300'} z-50 cursor-pointer flex flex-col right-0 m-6`}>
     
     
      {toggleSocial ? <div className="bg-white transition px- border-t-4 border-yellow-500 ease-in-out duration-1000 flex flex-col  justify-center items-center py-2 mb-5 rounded-full shadow-yellow-200 shadow-2xl">
        <a 
        target="_blank"
        href="https://api.whatsapp.com/send?phone=260777036706" className="text-gray-700  p-3  transition ease-in-out hover:scale-110">
        <SiWhatsapp size={25}/>
          
        </a>
        <a
         target="_blank"
        href="https://m.me/TsalachworthConsultancyLimited" className="text-gray-700 p-3 transition ease-in-out hover:scale-110">
          <FaFacebook size={25}/>
         
        </a>
      </div> : null}

 <div className='p-3 rounded-full text-[#27082A] bg-yellow-500 shadow-xl'>
    <FaRocketchat   size={30}/>
 </div>

    </div>
  );
};

export default FloatingActionButton;
