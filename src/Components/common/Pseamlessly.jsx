import React, { useEffect, useRef, useState } from 'react';
import logo from '../images/icintblk.png'; // Import your logo file
import host from '../images/wheel1.png'; // Import your logo file

import './css/platform.css'; // Import the CSS file for styling


function Pseamlessly() {
  const rightContentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold to control when the animation is triggered
    );

    if (rightContentRef.current) {
      observer.observe(rightContentRef.current);
    }

    return () => {
      if (rightContentRef.current) {
        observer.unobserve(rightContentRef.current);
      }
    };
  }, []);
  return (
    <div className=' text-cente ps'> 
        <div className="text-center ">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="plogo" /> {/* Insert your logo here */}
          <p className='pare mx-2'>INTEGRATION</p>
        </div>
        <h3 className="phead">Seamlessly Bridging Platforms</h3>
        <p className="ppara1 pt-1">
        Powering Productivity through Integrations to third-party systems/platforms        </p>  
       </div>
       <div className="row-container psrow">
       <div className="left-content">
       <p className='wsright'>EXPRESSbase seamlessly integrates with various third-party systems such as WhatsApp and Twilio for sending notifications, Google Drive and Dropbox for file storage, Google and Facebook for authentication, and Google Maps for location tracking.    </p>

          </div>
          <div className={`right-content iright-content ${isVisible ? 'show' : ''}`} // Apply 'show' class when visible
     ref={rightContentRef}>
            <img src={host}alt="Image"  className="wsleft wheeleft" />
            </div>
         
        </div>
    </div>
  )
}

export default Pseamlessly