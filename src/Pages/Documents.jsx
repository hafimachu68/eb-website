import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import Document from '../Components/common/Document'
import Wfctaheading from '../Components/common/Wfctaheading'
import MNavbar from '../Components/common/MNavbar';
import Mactaheading from '../Components/common/Mactheading';
import Mfooter from '../Components/common/Mfooter';
import Mdareyou from '../Components/common/Mdareyou.jsx';


function Documents() {
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
        {isMobile ? <Mdareyou/> : <Document/>}
        {isMobile ? <Mactaheading/> : <Wfctaheading />}
       {isMobile ? <Mfooter/> : <Footer />}
       </div>
  )
}

export default Documents