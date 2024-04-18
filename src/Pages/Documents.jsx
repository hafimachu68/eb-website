import React from 'react'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Document from '../Components/common/Document'
import Wfctaheading from '../Components/common/Wfctaheading'


function Documents() {
  return (
    <div className='rbg'>
       <Navbar/>
       <Document/>
       <Wfctaheading/>
          <Footer/>
    </div>
  )
}

export default Documents