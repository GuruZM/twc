import React,{useEffect, useState} from 'react'
import bg from "../assets/images/contact.jpg"
import axios from "axios";

export default function Contact() {

  const [countries, setCountries] = useState([]);
  const [activeOption, setActiveOption] = useState();
  const [flag, setFlag] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://restcountries.com/v2/all"
      );
       console.log(result.data.alpha2Code)
      setCountries(result.data);
     
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    // let lastFour = e.target.value.substring(e.target.value.length - 4)
    // console.log(lastFour)

    setActiveOption(e.target.value);
    //  console.log(e.target)
  };
 

  return (
    <div 
    style={{ backgroundImage: `url(${bg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment:"fixed"
    
    }}
    className='relative z-10'>
      <div className='absolute bg-[#27082A] opacity-90 h-full w-full'></div>
        <div 
        id="contact"
        className=' min-h-fit py-20 '>

       <div className='w-4/5  m-auto flex md:flex-row flex-col'>
        <div className='w-full z-10'>
          <h2 className='text-yellow-500 font-Montserrat font-bold text-4xl'>
            GET IN <span className='text-white font-Montserrat font-bold'>TOUCH</span> 
            </h2> 
            {/* jjejje
      <img src="https://flagcdn.com/bd.svg" sizes='20px' alt="" /> */}
            <p className='text-white font-Montserrat   font-medium  py-10'>
            Schedule for an appointment...
            </p>
        </div>
<form className='w-full'>
<div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-10 w-full mb-6 group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-10 w-full mb-6 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="relative z-10 w-full mb-6 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-10 w-full mb-6 group">
      <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-white   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
  </div>
  <div class="relative z-10 w-full mb-6   group">
    
  <select className={` w-full   py-2.5 px-0 text-center bg-[#27082A] p-2 text-white   text-sm `}
    
    onChange={handleChange}
     value={activeOption}
  
    >
   <option value="">--country/Region--</option>
   {countries.map((country) => (
        <option
          className={`flex text-left ${
            country.callingCodes && country.callingCodes[0] === activeOption
              ? "text-red-400"
              : "text-white"
          }`}
          key={country.alpha2Code && country.alpha2Code ? country.alpha2Code : country.name}
          value={country.callingCodes[0] && country.callingCodes[0] ? country.callingCodes[0] : ""}
          // value={country.alpha2Code}
        >
          {/* <img src="https://flagcdn.com/bd.svg" width={100} alt={`Flag of ${country.name}`} /> */}
          {country.name }
          {/* {country.flag} */}
          {" "}
         ( {country.callingCodes && country.callingCodes[0] ? ` +${country.callingCodes[0]}` : ""} )
        </option>
      ))}
    </select>
    
  </div>
  <div class="relative z-10 w-full mb-6 group">
  <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-white   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
  </div>
  
  <div class="grid   md:gap-6">

    <div class="relative  z-0 w-full  group">
    
   {/* <div className='w-5/12 md:w-4/6 py-2.5 px-0 text-center bg-[#27082A] p-2 text-white   text-sm '>
         
          <img src="https://flagcdn.com/bd.svg" width={100}  />

   </div> */}
        {/* <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> */}
        
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. TWC)</label>
    </div>
  </div>
  <button type="submit" class="text-white w-full relative z-10 bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>   
        </div>
    </div>
  )
}
