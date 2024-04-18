import React from 'react'
import './css/home-Pg.css'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Areyou from '../Components/common/Areyou'
import Trusted from '../Components/common/Trusted'
import Customer from '../Components/common/Customer'
import Features from '../Components/common/Features'
import Integration from '../Components/common/Integration'
import Exdb from '../Components/common/Exdb'
import Carouse from '../Components/common/Carousel'
import GitHub from '../Components/common/Github'
import Ctaheading from '../Components/common/Ctheading'


function Home() {
  return (
  <>
  <div className='rbg'>
  <Navbar/>
  <Areyou/>
  <Trusted/>
  <Customer/>
  <Features/>
  <Integration/>
  <Exdb/>
  <Carouse/>
  <GitHub/>
  <Ctaheading/>
  <Footer/>
  </div>
  </>
   
  )
}

export default Home