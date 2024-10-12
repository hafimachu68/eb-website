import React from 'react'
import Navbar from '../Components/common/Navbar'
import Wfctaheading from '../Components/common/Wfctaheading'
import Footer from '../Components/common/Footer'
import './css/home-Pg.css'
import Usec1 from '../Components/common/Usec1'
import Usec3 from '../Components/common/Usec3'
import MNavbar from '../Components/common/MNavbar'
import Mfooter from '../Components/common/Mfooter'

function Use3() {
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
        <Usec3/>
        <Wfctaheading/>
        {isMobile ? <Mfooter/> : <Footer />}
    </div>
  )
}

export default Use3