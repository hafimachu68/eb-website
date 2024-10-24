import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './css/features.css';

import chart from '../images/chart.svg';
import charts from '../images/Charts2.png';

import dash from '../images/dash.svg';
import Calender from '../images/Calender1.png';

import pdf from '../images/dr.svg';
import PDF from '../images/PDF.png';

import map from '../images/map.svg';

import tab from '../images/table.svg';
import cal from '../images/cal.svg';
import tab1 from '../images/Tablev.png';
import dashb from '../images/Dashboard1.png';
import wfimg from '../images/Map.png';



import mainimg from '../images/mainimg.png';


function Rbox() {
  const overlayData = [
    {
      image: pdf,
      path: '/webform',
      imageA: PDF,
      imageB: wfimg,
      text: 'PDF',
      mainHeading: 'Build complex enterprise class Web Forms 10x faster',
      paragraph: 'Create powerful multi-lingual,multi-currency enterprise web forms with built-in audit trail, infinite validations and RBAC security.',
    },
    {
      image: dash,
      path: '/report',
      imageA: dashb,
      imageB: wfimg,
      text: 'Dashboards',
      mainHeading: 'Low-Code Reporting tools for Modern Businesses to accelerate decision making',
      paragraph: 'Gain instant access to actionable insights, putting data at your fingertips for informed decision-making.',
    },
    {
      image: chart,
      path: '/documents',
      imageA: charts,
      imageB: wfimg,
      text: 'Charts',
      mainHeading: 'Document Management for business apps like never before',
      paragraph: 'A document management system that seamlessly integrates into your business process. Say goodbye to toggling between platforms—manage documents in-context,  ensuring seamless access to crucial information.',
    },
    {
      image: map,
      path: '/api',
      imageA: wfimg,
      imageB: wfimg,
      text: 'Map View',
      mainHeading: 'Seamlessly Integrate with 3rd Party software',
      paragraph: 'Efficiently integrate third-party applications into your workflow using our futuristic API builder. Simplify cross-platform connectivity and unlock new possibilities for productivity and growth.',
    },
    {
      image: tab,
      imageB: wfimg,
      imageA: tab1,
      text: 'Table View',
      mainHeading: 'Empower Your fast growing business with Internal Mobile Apps',
      paragraph: 'Transform your organization\'s internal processes with our low-code mobile app platform. From task management to internal communications, our apps empower your team to collaborate seamlessly and stay productive from anywhere.',
    },
    {
      image:  cal ,
      imageB: wfimg,
      imageA: Calender,
      text: 'Calender View',
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
    <div>
      <div className=''></div>
      {activeOverlayIndex !== null && (
        <div className="">
          <div className="overlays rb ">
            {overlayData.map((data, index) => (
              <div className="col-md-2 over" key={index} onClick={() => handleClick(index)}>
                <div className={`overlay-box text-center ${activeOverlayIndex === index ? 'active' : ''}`}>
                  <img className="rcloud1" src={data.image} alt="" />
                  <p className="rot">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rdiv rbb">
          <div className="row ">
          <div className="">
            <img className="rbimg" src={overlayData[activeOverlayIndex].imageA} alt="imga" />
          </div>
          {/* <div className="">
            <img className="rmainimg" src={overlayData[activeOverlayIndex].imageB} alt="imga" />
          </div>
             */}
          </div>
         
          </div>
        </div>
      )}
    </div>
  );
}


export default Rbox;
