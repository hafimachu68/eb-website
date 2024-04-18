import React from 'react'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Mobapp from '../Components/common/Mobapp'
import Mobcard from '../Components/common/Mobcard'
import Mbcthead from '../Components/common/Mbcthead'

function Mobile() {
  return (
    <div className='rbg'>
        <Navbar/>
        <Mobapp/>
        <Mobcard/>
        <Mbcthead/>
        <Footer/>
    </div>
  )
}

export default Mobile