import React from 'react'
import Navbar from '../Components/common/Navbar'
import Wfctaheading from '../Components/common/Wfctaheading'
import Footer from '../Components/common/Footer'
import './css/home-Pg.css'
import Usec2 from '../Components/common/Usec2'


function Use2() {
  return (
    <div className='rbg'>
        <Navbar/>
        <Usec2/>
        <Wfctaheading/>
        <Footer/>
    </div>
  )
}

export default Use2