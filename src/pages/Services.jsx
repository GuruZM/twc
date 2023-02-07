import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import ServicesHero from "./ServicesHero"
import ServicesItem from './ServicesItem'
export default function Services() {
  return (
    <div>
        <ServicesHero/>
        <ServicesItem/>
        <Footer/>
        </div>
  )
}
