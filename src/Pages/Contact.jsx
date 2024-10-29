import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Contactus from '../Components/common/Contactus'
import MNavbar from '../Components/common/MNavbar'
import Mfooter from '../Components/common/Mfooter'
import MContactus from '../Components/common/MContactus';


function Contact() {
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
    <div>
        {isMobile ? <MNavbar/>:<Navbar />}
        {isMobile ? <MContactus/> : <Contactus />}
        {isMobile ? <Mfooter/> : <Footer />}
    </div>
  )
}

export default Contact