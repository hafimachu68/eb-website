import React, { useEffect, useRef, useState } from 'react';
import logo from '../images/rbic1.png'; // Import your logo file
import host from '../images/RBAC2.png'; // Import your logo file

import './css/platform.css'; // Import the CSS file for styling


function Prbac() {
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
          <p className='pare'>SECURITY</p>
        </div>
        <h3 className="phead">Application Security using RBAC</h3>
        <p className="ppara1 pt-1">
        Unlimited Roles, Roles hierarchy, Constraints- Confirms to RBAC Standard   </p>  
       </div>
       <div className="row-container prrow">
       <div className="left-content ">
       <p className='prleft'>Role-Based Access Control (RBAC) standardizes user authorization by assigning permissions based on predefined roles. With RBAC, you can create an unlimited number of roles, each grouping specific permissions or even other roles. This flexible system streamlines access management, ensuring that users only have the permissions necessary for their roles, enhancing security and simplifying administration.
               </p>          </div>
               <div className={`right-content iright-content ${isVisible ? 'show' : ''}`} // Apply 'show' class when visible
     ref={rightContentRef}>           
               <img src={host}alt="Image" className="prright" />

          </div>
         
        </div>
        <div className="proverlay"></div>
    </div>

  )
}

export default Prbac