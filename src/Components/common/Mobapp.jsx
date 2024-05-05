import React from 'react';
import './css/mob.css';
import logo from '../images/Group.png'; // Import your logo file
import mobpg from '../images/mobpg.png';


function Mobapp() {

  return (
    <div>
        <div className="container pt-5">
            <div className="text-md-center mb-4 mb-md-0">
              <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
                <p className='pare'>Sub Heading</p>
              </div>
              <h3 className="head" style={{ color: '#193054' }}>Main Heading</h3>
              <p className="para1 pt-4">
              Connect your database and turn your data into attractive tables, charts or portable reports using our futuristic Drag-n-Drop builders on the Cloud. </p>
            </div>
          </div>
          <div className="container rc">
      <div className="row">
        <div className="col-md-6">
          <div className="pt-5 me-4">
            <div className= 'rm mobp'>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <div className= 'mobp' >
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5">
          <div className="image-container mimg">
            <img src={mobpg}  />
          </div>
        </div>
      </div>
         </div>

        </div>
  )
}

export default Mobapp