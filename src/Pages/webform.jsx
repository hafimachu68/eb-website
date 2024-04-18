import React from 'react'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Wfareyou from '../Components/common/Wfareyou'
import Wform from '../Components/common/Wform'
import Wfctaheading from '../Components/common/Wfctaheading'
import './css/home-Pg.css'


function Webform() {
  return (
    <div className='rbg'>
        <Navbar/>
        <Wfareyou/>
        <Wform/>
        <Wfctaheading/>
        <Footer/>
    </div>
  )
}

export default Webform