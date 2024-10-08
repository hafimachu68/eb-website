import React, { useEffect, useState, useRef } from 'react';
import './css/home.css';
import group141 from '../images/g23.png';
import group142 from '../images/g22.png';
import group143 from '../images/g21.png';

function Customer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if the section is visible in the viewport
        if (rect.top < windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once to check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container" ref={sectionRef}>
      <div className='cus' style={{ marginTop: '3em' }}></div>
      <div className={`row justify-content-center fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="cr col-12 col-md-4">
          <div className="card brd">
            <img src={group143} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="cr col-12 col-md-4">
          <div className="card brd">
            <img src={group141} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="cr col-12 col-md-4">
          <div className="card brd">
            <img src={group142} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
      <div className='cus' style={{ marginTop: '5em' }}></div>
    </div>
  );
}

export default Customer;
