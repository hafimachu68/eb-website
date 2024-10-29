import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Wfctaheading from '../Components/common/Wfctaheading'
import Footer from '../Components/common/Footer'
import './css/home-Pg.css'
import Usec2 from '../Components/common/Usec2'
import MNavbar from '../Components/common/MNavbar'
import Mfooter from '../Components/common/Mfooter'
import Mactaheading from '../Components/common/Mactheading';
import MUsec2 from '../Components/common/MUsec2';



function Use2() {
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
        {isMobile ? <MUsec2/> : <Usec2/>}
        {isMobile ? <Mactaheading/> : <Wfctaheading />}
        {isMobile ? <Mfooter/> : <Footer />}
    </div>
  )
}

export default Use2