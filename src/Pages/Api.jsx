import React from 'react'
import Navbar from '../Components/common/Navbar'
import Wfctaheading from '../Components/common/Wfctaheading'
import Footer from '../Components/common/Footer'
import './css/home-Pg.css'
import Apareyou from '../Components/common/Apareyou'


function Api() {
  return (
    <div className='rbg'>
        <Navbar/>
        <Apareyou/>
        <Wfctaheading/>
        <Footer/>
    </div>
  )
}

export default Api