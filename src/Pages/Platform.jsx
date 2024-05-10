import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Poverview from '../Components/common/Poverview'
import Platformsrc from '../Components/common/Platformsrc'
import Pprovider from '../Components/common/Pprovider'
import Pfeatures from '../Components/common/Pfeatures'
import Pseamlessly from '../Components/common/Pseamlessly'
import Ptruly from '../Components/common/Ptruly'
import Prbac from '../Components/common/Prbac'
import Pctaheading from '../Components/common/Pctheading'
import MPrbac from '../Components/common/MPrbac'
import Mfooter from '../Components/common/Mfooter'

function Platform() {
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
        <Poverview/>
        <Platformsrc/>
        <Pprovider/>
        <Pfeatures/>
        <Pseamlessly/>
        <Ptruly/>
        {isMobile ? <MPrbac /> : <Prbac/>}
        <Pctaheading/>        
        {isMobile ? <Mfooter /> : <Footer />}

    </div>
  )
}

export default Platform