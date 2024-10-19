import React from 'react'
import './css/platform.css'; // Import the CSS file for styling
import background from '../images/plpg.png'; // Import your image
import plfpg from '../images/plfpg.png'; // Import your image
import logo from '../images/Group.png'; // Import your logo file




function Poverview() {
  return (
    <div>
        <div className="platform-header"style={{backgroundImage: `url(${background})`}}>
      <div className="ploutoverlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-white pl_bottom">
            {/* <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" /> 
              <p className='pare text-light'>Tech Stack</p>
            </div> */}
            <h3 className="phead text-white">Build custom applications<br/> using Low-code</h3>
            <p className="ppara1  text-light pt-3">
            EXPRESSbase is an advanced low-code platform that empowers business<br/> users to create custom database-driven applications 10x faster  </p> 
           {/* <div className="plf"style={{backgroundImage: `url(${plfpg})`}}>
           </div> */}
           </div>
          </div>
        </div>
      </div>
    </div>
   
    </div>
  )
}

export default Poverview