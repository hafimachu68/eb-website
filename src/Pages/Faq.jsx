import React from 'react'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Faq1 from '../Components/common/Faq1'
import FQcthead from '../Components/common/Faqct'

function Faq() {
  return (
    <div className='rbg'>
        <Navbar/>
        <Faq1/>
        <FQcthead/>
        <Footer/>

    </div>
  )
}

export default Faq