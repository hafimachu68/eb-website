import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './css/features.css';

import web from '../images/wformg1.svg';
import report from '../images/reportg1.svg';
import documents from '../images/documents1.svg';
import api from '../images/apig1.svg';
import mobapp from '../images/mobg1.svg';
import WF from '../images/Web1.png';
import repo from '../images/Reports.png';
import docu from '../images/Docu.png';
import api1 from '../images/API1.png';
import mainimg from '../images/mainimg.png';


function Forms() {
  const overlayData = [
    {
      image: web,
      path: '/webform',
      imageA: WF,
      text: 'Web Forms',
      mainHeading: 'Build complex enterprise class Web Forms 10x faster',
      paragraph: 'Create powerful multi-lingual,multi-currency enterprise web forms with built-in audit trail, infinite validations and RBAC security.',
    },
    {
      image: report,
      path: '/report',
      imageA: repo,
      text: 'Reports',
      mainHeading: 'Low-Code Reporting tools for Modern Businesses to accelerate decision making',
      paragraph: 'Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.',
    },
    {
      image: documents,
      path: '/documents',
      imageA: docu,
      text: 'Documents',
      mainHeading: 'Document Management for business apps like never before',
      paragraph: 'A document management system that seamlessly integrates into your business process. Say goodbye to toggling between platforms—manage documents in-context,  ensuring seamless access to crucial information.',
    },
    {
      image: api,
      path: '/api',
      imageA: api1,
      text: 'APIs',
      mainHeading: 'Seamlessly Integrate with 3rd Party software',
      paragraph: 'Efficiently integrate third-party applications into your workflow using our futuristic API builder. Simplify cross-platform connectivity and unlock new possibilities for productivity and growth.',
    },
    {
      image: mobapp,
      path: '/mobileapp',
      imageA: mainimg,
      text: 'Mobile Apps',
      mainHeading: 'Empower Your fast growing business with Internal Mobile Apps',
      paragraph: 'Transform your organization\'s internal processes with our low-code mobile app platform. From task management to internal communications, our apps empower your team to collaborate seamlessly and stay productive from anywhere.',
    },
  ];

  const [activeOverlayIndex, setActiveOverlayIndex] = useState(0);

  const handleClick = (index) => {
    setActiveOverlayIndex(index);
  };

  useEffect(() => {
    // Set default content to Web Forms when component mounts
    setActiveOverlayIndex(0);
  }, []); // Empty dependency array ensures it only runs once

  return (
    <div className='fbg'>
      <div className=''></div>
      {activeOverlayIndex !== null && (
        <div className="">
          <div className="overlays">
            {overlayData.map((data, index) => (
              <div className="col-md-2 over" key={index} onClick={() => handleClick(index)}>
                <div className={`overlay-box text-center ${activeOverlayIndex === index ? 'active' : ''}`}>
                <div className="hover-container">
                <img className="fcloud1" src={data.image} alt="" />
                  <p className="ot">{data.text}</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          <div className="rdiv">
          <div className="row content">
            <h1 className="fw-bold fmh ">{overlayData[activeOverlayIndex].mainHeading}</h1>
            <div className="col-md-6 mainH">
              <p className="sub">{overlayData[activeOverlayIndex].paragraph}</p>
            </div>
            <div className="col-md-6 mainB">
              <Link to={overlayData[activeOverlayIndex].path}>
                <button className="btn ex">Explore</button>
              </Link>
            </div>
          </div>
          <div className="">
            <img className="mainimg" src={overlayData[activeOverlayIndex].imageA} alt="imga" />
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forms;
