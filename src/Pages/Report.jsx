import React from 'react'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Reportc from '../Components/common/Reportc'
import Rimage from '../Components/common/Rimage'
import './css/home-Pg.css'
import Rctahead from '../Components/common/Rcthead'
import Rbox from '../Components/common/Rbox'


function Report() {
  return (
    <div className='rbg'>
        <Navbar/>
        <Reportc/>
        <Rbox/>
        <Rimage/>
        <Rctahead/>
        <Footer/>
    </div>
  )
}

export default Report