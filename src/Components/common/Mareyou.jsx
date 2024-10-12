import React from 'react';
import './css/home.css';
import logo from '../images/arpg.png'; // Import your logo file

function Mareyou() {
  return (
    <div>
      <div className="container-fluid mt-5 ">
        <div className=" pt-5 ">
          <div className=" full">
            <div className="text-md-center mb-4 mb-md-0 mare">
            <h3 className="head">Business Automation Applications </h3>
              <div className="logo-container">
              <p className='are'>that evolves at </p>
                <img src={logo} alt="Logo" className="arpg" /> {/* Insert your logo here */}
              </div>
              <p className="para1 pt-4">
              Build & run internal business process applications on the cloud 10x faster.<br/> 
              Get the stability of Ready-Made software,<br/> and the flexibility of Custom software.</p>
              <a href="https://calendly.com/expressbase">
                <button className="btn btnare text-light mt-4" type="submit">Book a Demo</button>
              </a>
            </div>
          </div>
           
          <div className="">
            <div className="container mt-3">
              <div className='frame'>
                <iframe id="" width="100%" height="310px"  src="https://www.youtube.com/embed/WNxuiFhrQUM?rel=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mareyou;
