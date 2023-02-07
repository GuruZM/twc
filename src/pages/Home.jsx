import React from 'react'
import Hero from "./Hero";
import Glance from "./Glance";
import WeAre from "./WeAre";
import Ceo from "./Ceo";
import Clients from "./Clients"
import Contact from "./Contact"
import Testimonials from "./Testimonials";
import Footer from "./Footer"
import Brand from "./Brand";
import Faq from './Faq';
 
export default function Home() {
  return (
    <div>
          <Hero />
         <Glance />
         <WeAre/>
         <Brand/>
         <Clients/>
         <Ceo/>
         <Contact/>
         <Testimonials/>
         <Faq/>
         <Footer/>
    </div>
  )
}
