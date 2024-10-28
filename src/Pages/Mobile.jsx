import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Mobapp from '../Components/common/Mobapp'
import Mobcard from '../Components/common/Mobcard'
import Mbcthead from '../Components/common/Mbcthead'
import MNavbar from '../Components/common/MNavbar';
import Mactaheading from '../Components/common/Mactheading';
import Mfooter from '../Components/common/Mfooter';
import MMobapp from '../Components/common/MMobapp';
import MMobcard from '../Components/common/MMobcard';

function Mobile() {
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
        {isMobile ? <MMobapp/>:<Mobapp />}
        {isMobile ? <MMobcard/>:<Mobcard />}
        {isMobile ? <Mactaheading/> : <Mbcthead/>}
        {isMobile ? <Mfooter/> : <Footer />}
    </div>
  )
}

export default Mobile