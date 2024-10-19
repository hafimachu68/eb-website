import React, { useEffect, useRef, useState } from 'react';
import './css/home.css';
import feic from '../images/rbic1.png';
import RBAC from '../images/RBAC2.png';

function Exdb() {
  const imageRef = useRef(null);
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
      { threshold: 0.1 } // Trigger when 10% of the image is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className='db'>
        <div className="container text-center pt-5">
          <div className="text-md-center mb-4 mb-md-0">
            <div className="logo-container">
              <img src={feic} alt="Logo" className="flogo" />
              <p className='feic '>APPLICATION SECURITY </p>
            </div>
            <h3 className="head">Role Based Access Control (RBAC)</h3>
            {/* <p className=" para1 pt-3">
              Role Based Access Control (RBAC) standard helps you authorize users by roles.<br/>
              Create unlimited roles by grouping permissions or even roles. 
            </p> */}

            <div className="rbac pt-5">
              <img
                ref={imageRef}
                className={`rbpg ${isVisible ? 'fade-in' : ''}`}
                src={RBAC}
                alt="RBAC"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exdb;
