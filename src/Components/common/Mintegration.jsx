import React, { useState, useEffect, useRef } from 'react';
import './css/integration.css';
import wheel1 from '../images/wheel1.png'; // Import wheel1 image
import icint from '../images/intpg.png';

function Mintegration () {
  const [showBackground, setShowBackground] = useState(false);
  const [transitioned, setTransitioned] = useState(false);
  const [triggered, setTriggered] = useState(false); // State to track if trigger time has passed
  const wheelRef = useRef(null);
  const integrateRef = useRef(null); // Ref for the integrate section

  const triggerTime = 500; // Trigger time in milliseconds
  const scrollTriggerOffset = 400; // Adjust this value to change when the transition starts

  useEffect(() => {
    const handleScroll = () => {
      const wheelElement = wheelRef.current;
      const wheelOffsetTop = wheelElement.offsetTop;
      const scrollPosition = window.scrollY;
      if (scrollPosition >= wheelOffsetTop - scrollTriggerOffset && !showBackground) {
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

  // IntersectionObserver to trigger slide-in animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });

    const integrateElement = integrateRef.current;
    if (integrateElement) {
      observer.observe(integrateElement);
    }

    return () => {
      if (integrateElement) {
        observer.unobserve(integrateElement);
      }
    };
  }, []);

  return (
    <div >
      <div className="container">
        <div className="row rint mt-5">
          <div className="col-md-6 integrate" ref={integrateRef}>
            <div className="logo-container mic">
              <img src={icint} alt="Logo" className="incint" /> {/* Insert your logo here */}
              <p className='marei'>INTEGRATIONS</p>
            </div> 
            <h2 className='fw-bold minthh'>Seamless Connectivity to <br/> External Systems</h2>
            <div className="inpd">
            <p className='pt-3 intp'>
              Effortless data exchange and communication with 3rd party/
              external systems like WhatsApp, SMTP Servers, SMS Gateways, Cloudinary etc.
            </p>
            </div>
           
          </div>
          <div className="col-md-6 wheel" ref={wheelRef}>
            <div
              className={`circle ${transitioned && triggered ? 'zoomed' : ''}`}
              onMouseEnter={() => setTriggered(true)}
              onMouseLeave={() => setTriggered(false)}
            >
              <img src={wheel1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mintegration ;
