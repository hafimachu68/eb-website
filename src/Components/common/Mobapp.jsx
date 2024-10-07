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
              <h3 className="head" style={{ color: '#193054' }}>Empower Your fast growing business with Internal Mobile Apps</h3>
              <p className="para1 pt-4">
              Transform your organization's internal processes with our low-code mobile app platform. From task management to internal communications, our apps empower your team to collaborate seamlessly and stay productive from anywhere.               </p>
              <div className="">
            <div className="container pt-4 mt-3">
              <div id="video-container">
                <iframe id="video-player" className='mframe' width="100%" height="568px" src="https://www.youtube.com/embed/WNxuiFhrQUM?rel=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
            </div>
          </div>
          <div className="container rc">
      <div className="row">
      <div className="col-md-6 pt-5">
          <div className="image-container mimg">
            <img src={mobpg}  />
          </div>
        </div>
        <div className="col-md-6">
          <div className="pt-5 me-4">
            <div className= 'rm mobp chat-message'>
              <h5>Ensuring Data Integrity with the Error Bin Feature</h5>
               <p>
               The Error Bin feature in our mobile app ensures that no data is lost even when an error occurs during form submission. If data fails to be saved or an error is encountered, the information is automatically moved to the Error Bin. This allows to review the problematic data, make necessary corrections, and then successfully push it to the database. The Error Bin feature ensures data integrity and reliability, providing a safety net that captures and resolves submission issues efficiently.                </p>
            </div>
            
          </div>
        </div>
       
      </div>
         </div>

        </div>
  )
}

export default Mobapp