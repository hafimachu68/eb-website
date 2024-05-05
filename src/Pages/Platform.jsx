import React from 'react'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Poverview from '../Components/common/Poverview'
import Platformsrc from '../Components/common/Platformsrc'
import Pprovider from '../Components/common/Pprovider'
import Pfeatures from '../Components/common/Pfeatures'
import Pseamlessly from '../Components/common/Pseamlessly'
import Ptruly from '../Components/common/Ptruly'
import Prbac from '../Components/common/Prbac'
import Pctaheading from '../Components/common/Pctheading'

function Platform() {
  return (
    <div className='rbg'>
        <Navbar/>
        <Poverview/>
        <Platformsrc/>
        <Pprovider/>
        <Pfeatures/>
        <Pseamlessly/>
        <Ptruly/>
        <Prbac/>
        <Pctaheading/>
        <Footer/>
    </div>
  )
}

export default Platform