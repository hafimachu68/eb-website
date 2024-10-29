import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Faq1 from '../Components/common/Faq1'
import FQcthead from '../Components/common/Faqct'
import MNavbar from '../Components/common/MNavbar'
import Mfooter from '../Components/common/Mfooter'
import Mactaheading from '../Components/common/Mactheading';


function Faq() {
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
        <Faq1/>
        {isMobile ? <Mactaheading/> : <FQcthead/>}
        {isMobile ? <Mfooter/> : <Footer />}
    </div>
  )
}

export default Faq