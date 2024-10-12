import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Subscribe from '../Components/common/Subscribe'
import MNavbar from '../Components/common/MNavbar'
import Mfooter from '../Components/common/Mfooter'

function Unsub() {
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
        <Subscribe/>
        {isMobile ? <Mfooter/> : <Footer />}
    </div>
  )
}

export default Unsub