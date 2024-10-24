import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import './css/home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import group141 from '../images/g23.png';
import group142 from '../images/g22.png';
import group143 from '../images/g21.png';
import group144 from '../images/Liwa.png';

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

  const settings = {
    dots: true, // Display indicators
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    arrows: true, // Display navigation arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container" ref={sectionRef}>
      <div className='cus' style={{ marginTop: '3em' }}></div>
      <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <Slider {...settings}>
          <div className="cr">
            <div className="card brd">
              <img src={group143} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="cr">
            <div className="card brd">
              <img src={group141} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="cr">
            <div className="card brd">
              <img src={group142} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="cr">
            <div className="card brd">
              <img src={group144} className="card-img-top" alt="..." />
            </div>
          </div>
        </Slider>
      </div>
      <div className='cus' style={{ marginTop: '5em' }}></div>
    </div>
  );
}

export default Customer;
