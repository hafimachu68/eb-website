import React from 'react'
import Navbar from '../Components/common/Navbar'
import Wfctaheading from '../Components/common/Wfctaheading'
import Footer from '../Components/common/Footer'
import './css/home-Pg.css'
import Usec1 from '../Components/common/Usec1'
import Usec3 from '../Components/common/Usec3'


function Use3() {
  return (
    <div className='rbg'>
        <Navbar/>
        <Usec3/>
        <Wfctaheading/>
        <Footer/>
    </div>
  )
}

export default Use3