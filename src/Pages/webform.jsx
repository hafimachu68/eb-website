import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Wfareyou from '../Components/common/Wfareyou'
import Wform from '../Components/common/Wform'
import Wfctaheading from '../Components/common/Wfctaheading'
import './css/home-Pg.css'
import Mactaheading from '../Components/common/Mactheading'
import Mfooter from '../Components/common/Mfooter'
import Mfareyou from '../Components/common/Mfareyou'
import MFcarousels from '../Components/common/MFcarousels';
import MNavbar from '../Components/common/MNavbar';


function Webform() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check
    checkScreenWidth();

    // Listen to window resize event
    window.addEventListener('resize', checkScreenWidth);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);
  return (
    <div className='rbg'>
        {isMobile ? <MNavbar/>:<Navbar />}
        {isMobile ? <Mfareyou/> : <Wfareyou/>}
        {isMobile ? <MFcarousels/> : <Wform/>}
        {isMobile ? <Mactaheading/> : <Wfctaheading />}
        {isMobile ? <Mfooter /> : <Footer />}
    </div>
  )
}

export default Webform