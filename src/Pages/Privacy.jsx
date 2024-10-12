import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Pcy from '../Components/common/Privacy';
import MNavbar from '../Components/common/MNavbar'
import Mfooter from '../Components/common/Mfooter'

function Privacy() {
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
        <Pcy/>
        {isMobile ? <Mfooter/> : <Footer />}
    </div>
  )
}

export default Privacy;