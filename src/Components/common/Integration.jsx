import React, { useState, useEffect, useRef } from 'react';
import './css/integration.css';
import wheel1 from '../images/wheel1.png'; // Import wheel1 image
import icint from '../images/intpg.png';

function Integration() {
  const [showBackground, setShowBackground] = useState(false);
  const [transitioned, setTransitioned] = useState(false);
  const [triggered, setTriggered] = useState(false); // State to track if trigger time has passed
  const wheelRef = useRef(null);
  const triggerTime = 1000; // Trigger time in milliseconds

  useEffect(() => {
    const handleScroll = () => {
      const wheelElement = wheelRef.current;
      const wheelOffsetTop = wheelElement.offsetTop;
      const scrollPosition = window.scrollY;
      if (scrollPosition >= wheelOffsetTop  && !showBackground) {
        console.log(wheelOffsetTop);
        setShowBackground(true);
        setTimeout(() => {
          setTransitioned(true); // Enable transition effect after trigger time
          setTriggered(true); // Set triggered to true after trigger time
        }, triggerTime);
        window.removeEventListener('scroll', handleScroll); // Remove scroll listener after transition
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up scroll listener
    };
  }, [showBackground, triggerTime]);

  return (
    <div className={`bh intbdy ${showBackground ? 'white-bg' : ''}`}>
      <div className="container ">
        <div className="row rint">
          <div className="col-md-6 integrate text-white ">
          <div className="logo-container">
                <img src={icint} alt="Logo" className="icint" /> {/* Insert your logo here */}
                <p className='arei'>INTEGRATIONS</p>
              </div> 
               <h1 className='fw-bold h'>Seamless<br/> Connectivity to<br/> External Systems</h1>
            <p className='pt-3 intp'>Effortless data exchange and communication with 3rd party/<br/>
            external systems like WhatsApp, SMTP Servers, SMS Gateways,<br/> Cloudinary etc.   </p>  
          </div>
          <div className="col-md-6 wheel" ref={wheelRef}>
            <div
              className={`circle ${transitioned && triggered ? 'zoomed' : ''}`}
              onMouseEnter={() => setTriggered(true)}
              onMouseLeave={() => setTriggered(false)}>
              <img src={wheel1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div ></div>
    </div>
  );
}

export default Integration;
