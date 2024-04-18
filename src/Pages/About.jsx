import React from 'react'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Aboutus from '../Components/common/Aboutus'
import ABmessages from '../Components/common/Abmessages'
import './css/home-Pg.css'
import ABteam from '../Components/common/ABteam'
import ABvdo from '../Components/common/Abvdo'
import ABcthead from '../Components/common/ABcthead'


function About() {
  return (
    <div className='rbg'>
        <Navbar/>
        <Aboutus/>
        <ABmessages/>
        <ABteam/>
        <ABvdo/>
        <ABcthead/>
        <Footer/>
    </div>
  )
}

export default About