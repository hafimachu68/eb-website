import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Reportc from '../Components/common/Reportc'
import Rimage from '../Components/common/Rimage'
import './css/home-Pg.css'
import Rctahead from '../Components/common/Rcthead'
import Rbox from '../Components/common/Rbox'
import MNavbar from '../Components/common/MNavbar';
import Mfooter from '../Components/common/Mfooter';
import Mactaheading from '../Components/common/Mactheading';
import RPareyou from '../Components/common/Rpareyou';
import MRforms from '../Components/common/Mrbox';
import MRimage from '../Components/common/Mrimage';


function Report() {
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
       {isMobile ? <MNavbar /> : <Navbar />}
       {isMobile ? <RPareyou/> : <Reportc/>}
       {isMobile ? <MRforms/> : <Rbox/>}
       {isMobile ? <MRimage/> : <Rimage/>}
        {isMobile ? <Mactaheading/> : <Rctahead/>}
        {isMobile ? <Mfooter/> : <Footer/>}
    </div>
  )
}

export default Report