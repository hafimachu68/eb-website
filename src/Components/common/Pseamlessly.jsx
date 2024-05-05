import React from 'react'
import logo from '../images/Group.png'; // Import your logo file
import host from '../images/wheel1.png'; // Import your logo file

import './css/platform.css'; // Import the CSS file for styling


function Pseamlessly() {
  return (
    <div className=' text-cente ps'> 
        <div className="text-center ">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Insert your logo here */}
          <p className='pare'>Integrations</p>
        </div>
        <h3 className="phead">Seamlessly Bridging Platforms</h3>
        <p className="ppara1 pt-4">
        Powering Productivity through Integrations to third-party systems/platforms        </p>  
       </div>
       <div className="row-container psrow">
       <div className="left-content">
            <img src={host}alt="Image"  className="psleft wheeleft" />
          </div>
          <div className="right-content">
            <p className='psright'>EXPRESSbase seamlessly integrates with various third-party systems such as WhatsApp and Twilio for sending notifications, Google Drive and Dropbox for file storage, Google and Facebook for authentication, and Google Maps for location tracking.    </p>
          </div>
         
        </div>
    </div>
  )
}

export default Pseamlessly