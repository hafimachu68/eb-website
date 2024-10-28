import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Wfctaheading from '../Components/common/Wfctaheading'
import Footer from '../Components/common/Footer'
import './css/home-Pg.css'
import Apareyou from '../Components/common/Apareyou'
import MNavbar from '../Components/common/MNavbar';
import Mactaheading from '../Components/common/Mactheading';
import Mfooter from '../Components/common/Mfooter';
import AMareyou from '../Components/common/AMareyou';


function Api() {
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
        {isMobile ? <AMareyou/> : <Apareyou />}
        {isMobile ? <Mactaheading/> : <Wfctaheading />}
        {isMobile ? <Mfooter/> : <Footer />}
        </div>
  )
}

export default Api