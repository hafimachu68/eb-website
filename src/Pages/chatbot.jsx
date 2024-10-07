import React from 'react'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Mobcard from '../Components/common/Mobcard'
import Mbcthead from '../Components/common/Mbcthead'
import Chat from '../Components/common/chatbot'
import Bot from '../Components/common/Chatcard'
 
function Chatbot() {
  return (
    <div className='rbg'>
        <Navbar/>
        <Chat/>
        <Bot/>
        <Mbcthead/>
        <Footer/>
    </div>
  )
}

export default Chatbot