import React, { useState} from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './css/features.css';


import web from '../images/wformg.png';
import report from '../images/reportg.png';
import documents from '../images/docug.png';
import api from '../images/apig.png';
import mobapp from '../images/mobg.png';
import mainimg from '../images/mainimg.png';


function Forms() {
  const overlayData = [
    {
      image: web,
      path:'/webform',
      imageA: mainimg,
      text: 'Web Forms',
      subheading: 'Sub Heading ',
      mainHeading: 'Web Forms',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    },
    {
      image: report,
      path:'/report',
      imageA: mainimg,
      text: 'Reports',
      subheading: 'Sub Heading ',
      mainHeading: 'Reports',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    },
    {
      image: documents,
      path:'/documents',
      imageA: mainimg,
      text: 'Documents',
      subheading: 'Sub Heading ',
      mainHeading: 'Documents',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    },
    {
      image: api,
      path:'/api',
      imageA: mainimg,
      text: 'APIs',
      subheading: 'Sub Heading ',
      mainHeading: 'APIs',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    },
    {
      image: mobapp,
      path:'/mobileapp',
      imageA: mainimg,
      text: 'Mobile Apps',
      subheading: 'Sub Heading ',
      mainHeading: 'Mobile Apps',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    },
  ];

  const [activeOverlayIndex, setActiveOverlayIndex] = useState(0);
     const handleOverlayHover = (index) => {
    setActiveOverlayIndex(index);
  };
  return (
    <div className='fbg'>
        <Link to={overlayData[activeOverlayIndex].path}> 
          <div className="row overlays">
            {overlayData.map((data, index) => (
              <div className="col-md-2 over" key={index}>
                <div
                  className={`overlay-link ${index === activeOverlayIndex ? 'active' : ''}`}
                  onMouseEnter={() => handleOverlayHover(index)}
                >
                  <div className="overlay-box text-center">
                    <img className="fcloud1" src={data.image} alt="" />
                    <p className="ot">{data.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Link>
        <div className="overlay">
          <div className="row content">
            <div className="col-md-6 mainH">
              <p className="sub">{overlayData[activeOverlayIndex].subheading}</p>
              <h1 className="fw-bold">{overlayData[activeOverlayIndex].mainHeading}</h1>
              <p className="sub">{overlayData[activeOverlayIndex].paragraph}</p>
            </div>
            <div className="col-md-6 mainB">
              <button className="btn ex">Explore</button>
            </div>
          </div>
          <div className=" ">
            <img className="mainimg" src={overlayData[activeOverlayIndex].imageA} alt="imga" />
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Forms;