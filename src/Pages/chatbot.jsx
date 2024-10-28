import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Mobcard from '../Components/common/Mobcard'
import Mbcthead from '../Components/common/Mbcthead'
import Chat from '../Components/common/chatbot'
import Bot from '../Components/common/Chatcard'
import MNavbar from '../Components/common/MNavbar';
import Mactaheading from '../Components/common/Mactheading';
import Mfooter from '../Components/common/Mfooter';
import MChat from '../Components/common/Mchatbot';
import MBot from '../Components/common/MChatcard';
 
function Chatbot() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = () => {
      // Check for mobile devices based on user agent and screen size
      return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768
      );
    };

    // Initial mobile check
    setIsMobile(isMobileDevice());

    // Listen to window resize event and update mobile state
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='rbg'>
        {isMobile ? <MNavbar/>:<Navbar />}
        {isMobile ? <MChat/>:<Chat />}
        {isMobile ? <MBot/>:<Bot />}
        {isMobile ? <Mactaheading/> : <Mbcthead/>}
        {isMobile ? <Mfooter/> : <Footer />}
    </div>
  )
}

export default Chatbot