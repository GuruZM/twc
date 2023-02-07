import React from 'react'
import { Route } from 'react-router-dom';
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter,Routes } from 'react-router-dom';
import Surge from './Surge';

export default function AppWrapper() {
  return (
    <div> 
             <BrowserRouter>
          

          <Routes>
          <Route path="/" component={Home} element={<Home/>} />
                <Route path="/services"  element={<Services/>} />
                <Route path="surge" element={<Surge/>}/>
          </Routes> 
           </BrowserRouter>
    </div>
  )
}
