import React from 'react';
import './css/home.css';
import logo from '../images/apid.png'; // Import your logo file

import MDcarousels from './MDcarousels';
import AMcarousels from './AMcarousels';

function AMareyou() {
  return (
    <div>
      <div className="container ">
        <div className=" pt-5">
          <div className=" full">
            <div className="text-md-center mb-4 mb-md-0 mare">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo lf" /> {/* Insert your logo here */}
                <p className='pare'>APIs </p>
              </div>
            <h3 className="head text-center">Low-Code API Solutions for Modern Businesses to Simplify Integration </h3>
              <p className="para1 pt-4">
              Efficiently integrate third-party applications into your workflow using our futuristic API builder. Simplify cross-platform connectivity and unlock new possibilities for productivity and growth.

                </p>
              <p className="para1  pt-5" style={{textAlign:'left', lineHeight:'2'}}>
Efficiently integrate third-party applications into your workflow using our futuristic API builder. Our intuitive platform simplifies cross-platform connectivity, empowering you to unlock new possibilities for productivity and growth. With seamless API integration, you can streamline operations, enhance collaboration, and leverage diverse tools effortlessly, ensuring your business stays agile and competitive in a rapidly evolving digital landscape.
        </p>
    
               <a href="https://zcal.co/sureba73">
                <button className="btn btnare text-light mt-4" type="submit">Book a Demo</button>
              </a>
            </div>
          </div>
       
        </div>
      </div>
      <AMcarousels/>
    </div>
  );
}

export default AMareyou;
