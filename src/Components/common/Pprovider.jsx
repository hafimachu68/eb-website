import React from 'react'
import logo from '../images/Group.png'; // Import your logo file
import host from '../images/prpg.png'; // Import your logo file

import './css/platform.css'; // Import the CSS file for styling


function Pprovider() {
  return (
    <div className='provideroverlay text-white text-cente pt-5'> 
        <div className="text-center ">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
          <p className='pare text-light'>HOSTING</p>
        </div>
        <h3 className="phead text-light">Cloud Provider Agnostic Platform</h3>
        <p className="ppara1 pt-1 text-light">
        Battle-tested with  a variety of cloud providers       </p>  
       </div>
       <div className="row-container">
          <div className="left-content">
            <p className='ppleft'>EXPRESSbase is a cloud-native low-code platform designed to be cloud provider agnostic, offering flexibility and compatibility across various cloud environments like Google Cloud, Microsoft Azure, AWS, Scaleway, OVH Cloud, etc.  without being tied to any specific vendor's infrastructure.
            </p>
          </div>
          <div className="right-content">
            <img src={host}alt="Image" className="piright" />
          </div>
        </div>
    </div>
  )
}

export default Pprovider