import React, { useState, useEffect } from 'react';
import './css/home-Pg.css';
import Navbar from '../Components/common/Navbar';
import Footer from '../Components/common/Footer';
import Areyou from '../Components/common/Areyou';
import Trusted from '../Components/common/Trusted';
import Customer from '../Components/common/Customer';
import Features from '../Components/common/Features';
import Integration from '../Components/common/Integration';
import Exdb from '../Components/common/Exdb';
import Carouse from '../Components/common/Carousel';
import GitHub from '../Components/common/Github';
import Ctaheading from '../Components/common/Ctheading';
import Mforms from '../Components/common/Mforms';
import Mcarousel from '../Components/common/Mcarousel';
import Forms from '../Components/common/Forms';
import Mfooter from '../Components/common/Mfooter';
import CenterMode from '../Components/common/Slickcarousel';
import Mareyou from '../Components/common/Mareyou';
import Mtrusted from '../Components/common/Mtrusted';
import Mexdb from '../Components/common/Mexdb';
import Mintegration from '../Components/common/Mintegration';
import Mfcarousel from '../Components/common/Mfcarousel';
import MNavbar from '../Components/common/MNavbar';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isAndroid = /android/i.test(userAgent);
      const actualWidth = window.innerWidth * window.devicePixelRatio;

      // Use different breakpoints for Android or fallback
      setIsMobile(isAndroid ? actualWidth < 820 : window.innerWidth < 768);
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
    <>
      <div className='rbg'>
        {isMobile ? <MNavbar /> : <Navbar />}

        {isMobile ? <Mareyou /> : <Areyou />}
        {isMobile ? <Mtrusted /> : <Trusted />}
        <Customer />
        <Features />
        {isMobile ? <Mintegration /> : <Integration />}
        {isMobile ? <Mexdb /> : <Exdb />}
        {isMobile ? <Mcarousel /> : <CenterMode />}
        <GitHub />
        <Ctaheading />
        {isMobile ? <Mfooter /> : <Footer />}
      </div>
    </>
  );
}

export default Home;
