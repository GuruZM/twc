import React from 'react'
import training from "../assets/images/training.jpg"
import train from "../assets/images/train.jpg"
import media from "../assets/images/media.jpg"
import business from "../assets/images/business.jpg"

export default function ServicesItem() {
  return (
    <div>     
        <div className='flex   py-5 w-4/5 mx-auto  border-yellow-500'>
<img src={training} width={600} height={400} className="rounded-lg" alt="" />
 
<div className='flex flex-col justify-center pb-10  w-full items-center'>
    <h2 className='text-center -ml-80 p-8 rounded-lg bg-white shadow-lg my-10 text-4xl font-bold py-10'>Training <span className='text-yellow-500'>Services</span>  </h2>
    <ul className='text-sm flex max-w-sm space-x-12 space-y-2 flex-wrap text-center'>
        <li className='shadow-2xl p-3  text-sm font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Leadership</li>
        <li className='shadow-2xl p-3  text-sm font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Team Management</li>
        <li className='shadow-2xl p-3  text-sm font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Customer Service</li>
        <li className='shadow-2xl p-3  text-sm font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Financial Literacy</li>
        <li className='shadow-2xl p-3  text-sm font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Financial Management</li>
    </ul>
</div>
        </div>
        

        <div className='flex py-5 w-4/5 mx-auto   pt-28 border-yellow-500'>

<div className='flex flex-col justify-center  b w-full items-center'>
    <h2 className='text-center -mr-80 z-10 p-8 rounded-lg bg-white shadow-lg my-10 text-4xl font-bold py-10'><span className='text-yellow-500'>Coaching</span> Services  </h2>
    <ul className='text-sm flex max-w-sm space-x-11 space-y-2 flex-wrap text-center'>
        <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Personal/Career Development</li>
        <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Mindset Development</li>
        <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Team Building</li>
        <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Public Speaking</li>
        <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Speech Crafting</li>
    </ul>
</div>
<img src={train} width={600} className="rounded-lg"  alt="" />
        </div>


        <div className='flex py-5 w-4/5 mx-auto  pt-28 py-5  border-yellow-500'>
<img src={media} width={600} className="rounded-lg" alt="" />
<div className='flex flex-col justify-center  b w-full items-center'>
    <h2 className='text-center -ml-80 p-8 rounded-lg bg-white shadow-lg my-10 text-4xl font-bold py-10'>Media <span className='text-yellow-500'>Services</span></h2>
    <ul className='text-sm flex max-w-sm space-x-11 space-y-2 flex-wrap text-center '>
        <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Filming & Video Editing</li>
        <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Documentary</li>
        <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Events Coverage</li>
     
    </ul>
</div>
        </div>
        <div className='flex w-4/5 pb-28  mx-auto pt-28 border-yellow-500'>

<div className='flex flex-col justify-center  w-full items-center'>
    <h2 className='text-center -mr-80 z-10 p-8   rounded-lg bg-white shadow-lg my-10 text-4xl font-bold py-10'>Business <span className='text-yellow-500'>Development </span> <br/> Services</h2>
    <ul className='text-sm flex max-w-sm space-x-11 space-y-2 flex-wrap text-center'>
        <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Strategy Planning & Development</li>
        <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Business Formation & Formalization</li>
        <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Business Plan Development</li>
        {/* <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Market Research & Data Analysis</li> */}
        {/* <li className='shadow-lg p-3 font-medium rounded-lg border-r-2 border-yellow-500 border-l-2'>Marketing Strategy & Tools Development</li> */}
        {/* <li className='shadow-lg p-3 font-medium rounded-lg'>Financial Management Advisory</li>
        <li className='shadow-lg p-3 font-medium rounded-lg'>Organizational Growth & Development</li>
        <li className='shadow-lg p-3 font-medium rounded-lg'>Corporate Communication Strategy</li> */}
    </ul>
</div>
<img src={business} className="rounded-lg" width={600}  alt="" />
        </div>

    </div>
  )
}
