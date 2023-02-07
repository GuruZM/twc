import React from 'react'
import { useState } from 'react'
import {FiArrowDownCircle} from "@react-icons/all-files/fi/FiArrowDownCircle"
import {CgTranscript} from "@react-icons/all-files/cg/CgTranscript"
import {BiSupport} from "@react-icons/all-files/bi/bisupport"
export default function Faq() {
    const questions = [
{
    "id":1,
    "question":"Do you offer customized individual coaching services?",
    "ans":"Yes. It’s dependent on the type of coaching you want, we are flexible for any necessary negotiations",
    "on":false
},
{
    "id":2,
    "question":"Do you conduct corporate trainings outside Lusaka or using other platforms?",
    "ans":"Yes. We are mobile and can reach most parts of Zambia. We also conduct virtual training sessions.",
    "on":false
},
{

    "id":3,
    "question":" Do you offer profile re-design  and business consultancy services on different businesses?",
    "ans":"Yes we have a wide range of creative experts and associate consultants to provide business consultancy  to our clients ",
    "on":false
},
{
    "id":4,
    "question":"Will I get feedback on my work?",
    "ans":"Yes, we engage our clients from time of  commencement of your works until completion.",
    "on":false
},



    ]
    const [ques, setQues] = useState(questions);

    //  console.log(ques)

 const toggle = (id)=>{
    console.log(id)
    const updatedQuestions = ques.map(q => {
        if (q.id === id) {
          return { ...q, on: !q.on };
        }
        return q;
      });
    setQues( updatedQuestions)
    console.log(ques)
 }

    const answers = ques.map(question => (
    //  console.log(question.id),
    //  let id = question.id,
        <div 
        key={question.question}>
           
             <div 
             onClick={
                ( )=>{
                        toggle(question.id)
                }
             }
             className='flex flex-col md:flex-row-reverse items-center space-y-2 p-6 border-l-4 border-r-4 border-yellow-500 rounded-lg justify-between shadow-lg  hover:scale-105 transition ease-in-out duration-300 cursor-pointer my-3'>
          <FiArrowDownCircle size={20} color="black"/>
          
          <h3 className=' font-medium'>{question.question}</h3>
         </div>
         {question.on && 
        <div className='flex flex-col justify-center'>
            <CgTranscript className='m-auto' size={30}/>
         <p className='text-center py-5 transtion mb-5 rounded-xl font-medium border-b-2 border-yellow-500 ease-in-out duration-500'>{question.ans}</p>
        </div>
        
         }
        </div>
      ))
    
  return (

 

    <div>

        <div className=' w-full flex relative text-center py-20'>
        <div class="custom-shape-divider-bottom-16754093712">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
    </svg>
</div>
           <div className=' w-4/5 flex  flex-col space-y-10 m-auto'>
            <div className='m-auto  z-40'>
              
                <h2 className='text-5xl absolute font-Montserrat text-[#27082A] -top-5 left-0 right-0 mx-auto font-bold'>FAQ'<span className='text-white'>s</span> </h2>
                <p className='text-sm font-medium'>Everything you need to know about Our Services</p>
                <p className='text-2xl pt-20   m-auto text-center   opacity-30 top-48 font-medium animate-bounce'>Support</p>
            </div>

            <div>
                {answers}
            </div>
            <p className='flex space-x-10 justify-center font-medium'>
                Feel Free to reach out for if your question is not specified  <BiSupport className='ml-5 text-yellow-500'  size={20}/>
            </p>
            </div>
        </div>
        {/* <div class="custom-shape-divider-bottom-1675409371">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
    </svg>
</div> */}
    </div>
  )
}
