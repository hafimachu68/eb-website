import React from 'react'
import './css/home.css';

import logo from '../images/Group.png'; // Import your logo file

function Sass() {
  return (
    <div><div className="container">
    <div className=" p-5">
      <div className="">
        <div className="text-md-center mb-4 mb-md-0">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
            <p className='are'>what we offer</p>
          </div>
          <h3 className="head">Our SaaS Offerings</h3>
          <p className="para1 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .<br/> 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo           </p>
        </div>
      </div>
    </div>
  </div>
  
  
  </div>
  )
}

export default Sass