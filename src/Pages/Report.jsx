import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Reportc from '../Components/common/Reportc'
import Rimage from '../Components/common/Rimage'
import './css/home-Pg.css'
import Rctahead from '../Components/common/Rcthead'
import Rbox from '../Components/common/Rbox'
import Mactaheading from '../Components/common/Mactheading';
import Mfooter from '../Components/common/Mfooter';
import Mrareyou from '../Components/common/Mrareyou';
import MRcarousels from '../Components/common/MRcarousels';


function Report() {
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
        <Navbar/>
        {isMobile ? <Mrareyou/> : <Reportc />}
        {isMobile ? <MRcarousels/> : <Rbox />}
        <Rimage/>
        {isMobile ? <Mactaheading/> : <Rctahead />}
        {isMobile ? <Mfooter /> : <Footer />}
    </div>
  )
}

export default Report