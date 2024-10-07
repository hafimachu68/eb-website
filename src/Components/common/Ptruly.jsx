import React, { useEffect, useRef, useState } from 'react';
import logo from '../images/icdb.png'; // Import your logo file
import host from '../images/pimg.png'; // Import your logo file

import './css/platform.css'; // Import the CSS file for styling


function Ptruly() {
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
    <div className=' text-cente pt-5 ptruly'> 
        <div className="text-center ">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
          <p className='pare'>DATABASE</p>
        </div>
        <h3 className="phead">Truly Multi-tenant Platform</h3>
        <p className="ppara1 pt-1">
        Providing individualized database environments,   </p>  
       </div>
       <div className="row-container psrow">
       <div className="left-content">
            <img src={host}alt="Image" className="psleft" />
          </div>
          <div className={`right-content iright-content ${isVisible ? 'show' : ''}`} // Apply 'show' class when visible
     ref={rightContentRef}>
                  <p className='psright'>EXPRESSbase is a truly multi-tenant database system, where each client/solution is allocated a dedicated database, ensuring complete isolation and customization tailored to their specific requirements. This approach empowers clients with personalized data realms, allowing them to efficiently manage and optimize their unique datasets while benefiting from the scalability and cost-effectiveness of a shared infrastructure. </p>
          </div>
         
        </div>
       
    </div>
  )
}

export default Ptruly