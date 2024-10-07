import React, { useState, useEffect ,useRef} from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './css/features.css';

import cloud from '../images/apponcloud.png';
import doda from '../images/doda.png';
import coins from '../images/wpf_coins.png';
import lock from '../images/lock.png';
import fluent from '../images/fluent.png';
import flight from '../images/flight.png'
import feic from '../images/fe1.png';
import Forms from './Forms';


function Features() {
  
  const [transitioned, setTransitioned] = useState(false);
  const rowNewRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTransitioned(true);
          observer.disconnect(); // Disconnect the observer once triggered
        }
      });
    }, options);

    if (rowNewRef.current) {
      observer.observe(rowNewRef.current);
    }

    return () => {
      if (rowNewRef.current) {
        observer.unobserve(rowNewRef.current); // Clean up observer
      }
    };
  }, []); // Empty dependency array to run effect only once

  
  return (
    <div>
      <div className="bg">
      <div className="container text-center text-white">
        <div className="text-md-center mb-4 mb-md-0">
          <div className="logo-container">
            <img src={feic} alt="Logo" className="flogo" /> 
            <p className='feic'>CLOUD-NATIVE LOW-CODE</p>
          </div>
          <h3 className="head btxt">Enterprise-Grade App Development</h3>
          <p className="para1 btxt pt-3">
          Tailored solutions with advanced capabilities for fast growing businesses </p>
        </div>
        </div>
        <div className="container text-center">
        <div
            ref={rowNewRef}
            className={`row row-new ${transitioned ? 'transitioned' : ''}`}
            style={{ marginTop: '1.2em', marginBottom: '6.5em' }}
          >            <div className="col-md-4 col-sm-6 pt-4 center">
              <img className='fcloud' src={cloud} alt="" />
              <h5 className="t-head " style={{ color: '#ffff' }}>Apps on Cloud</h5>
              <p className="features">Forget about the infrastructure, leave it to us. Focus on your applications and business.</p>
            </div>
            <div className="col-md-4 col-sm-6  pt-4 center">
            <img className="fcloud" src={doda} alt="" />
              <h5 className="t-head " style={{ color: '#ffff' }}>Develop Once, Deploy Anywhere</h5>
              <p className="features">Use our state-of-the-art developer Studio to develop business apps that can run on web or mobile.</p>
            </div>
            <div className="col-md-4 col-sm-6  pt-4 center">
              <img className='deploy' src={coins}alt="" /><br /><br />
              <h5 className="t-head" style={{ color: '#ffff' }}>Own your Data</h5>
              <p className="features">Connect your cloud or in-premise database via https enabling coexistence of your legacy apps and apps built on expressbase.</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-2 center">
              <img className='deploy' src={lock} alt="" /><br /><br />
              <h5 className="t-head" style={{ color: '#ffff' }}>App Security</h5>
              <p className="features">Role Based Access Control (RBAC) standard helps you authorize users by roles. Create unlimited roles by grouping permissions or even roles.</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-2 center">
              <img className='deploy' src={fluent }alt="" /><br /><br />
              <h5 className="t-head" style={{ color: '#ffff' }}>Low Code</h5>
              <p className="features">No code platforms don’t work for complex requirements. Precisely why we are low-code. Put your existing skills to use, code in JavaScript, C# & SQL.</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-2 center">
              <img className='deploy' src={flight} alt="" /><br /><br />
              <h5 className="t-head" style={{ color: '#ffff' }}>Faster Time to Market</h5>
              <p className="features">Conventional modes of development & delivery are high effort-time–money exercises. Use our platform to express build complex business apps 10x faster.</p>
            </div>
          </div>
         </div>
        <Forms/>
      </div>
    </div>
  );
}

export default Features;