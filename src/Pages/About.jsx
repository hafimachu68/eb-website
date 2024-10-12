import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Aboutus from '../Components/common/Aboutus'
import ABmessages from '../Components/common/Abmessages'
import './css/home-Pg.css'
import ABteam from '../Components/common/ABteam'
import ABvdo from '../Components/common/Abvdo'
import ABcthead from '../Components/common/ABcthead'
import Mabmessages from '../Components/common/Mabmessages.jsx'
import Mabteam from '../Components/common/Mabteam copy.jsx'
import Mabvdo from '../Components/common/Mavdo.jsx'
import Ctaheading from '../Components/common/Ctheading.jsx'
import Mfooter from '../Components/common/Mfooter.jsx'
import Mactaheading from '../Components/common/Mactheading.jsx'
import Mmessage from '../Components/common/Mmessage.jsx';
import MNavbar from '../Components/common/MNavbar.jsx';


function About() {
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
        <Aboutus/>
        {isMobile ? <Mabmessages /> : <ABmessages />}
        {isMobile ? <Mabteam /> : <ABteam />}
        {isMobile ? <Mabvdo /> : <ABvdo />}
        {isMobile ? <Mactaheading/> : <ABcthead />}
        {isMobile ? <Mfooter /> : <Footer />}

    </div>
  )
}

export default About