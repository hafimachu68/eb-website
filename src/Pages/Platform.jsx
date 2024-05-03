import React from 'react'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Poverview from '../Components/common/Poverview'
import Platformsrc from '../Components/common/Platformsrc'
import Pprovider from '../Components/common/Pprovider'
import Pfeatures from '../Components/common/Pfeatures'

function Platform() {
  return (
    <div className='rbg'>
        <Navbar/>
        <Poverview/>
        <Platformsrc/>
        <Pprovider/>
        <Pfeatures/>
        <Footer/>
    </div>
  )
}

export default Platform