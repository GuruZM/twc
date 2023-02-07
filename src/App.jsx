import { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./App.css";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "./assets/images/logo.png"


import AppWrapper from "./pages/AppWrapper";

function App() {
  const [loader, setLoader] = useState(false);

  let tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      ".btn",2,
      { y: 30, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, ease: "power2.inOut" }
    ).to(
      ".overlay",4.5,
      {
        y:-720,
        duration:10,
        ease:"power2.inOut"
      }
    );
  });

   
//  setTimeout(()=>{
//   setLoader(loader=>!loader);
//  },6000)
 

  return (
    <div
     
    className="App ">
      {loader ? (
        <div className="overlay flex justify-center items-center h-screen bg-[#27082A]">
          <div className="flex flex-col justify-center items-center space-y-10">
            {/* <h2 className="logo text-8xl font-bold font-[Barlow] animate-pulse text-white">
              TWC
            </h2> */}
             <img src={logo} alt="" className=' animate-pulse' width={150} />
            <p className="text-white btn tracking-wider  leading-10 py-2 px-10 border-2 border-yellow-600 rounded-full">
              Tsalachworth Consultancy Limited
            </p>
          </div>
        </div>
      ) : (
        <>      
<AppWrapper/>
        </>
       
      )}
    </div>
  );
}

export default App;
